class Api::TaGroupsController < Api::ApiController

  def index
    course = Course.find(params[:course_id])
    groups =  Course.associated_groups(course.id).group_by(&:section_id).values
    render json: groups.map { |group| group.group_by(&:ta_group_id).values }
  end

  def generate_groups

    course = Course.find(params[:id])
    sections = course.sections.where(active: true)
    course.sections.each { |section| section.ta_groups.destroy_all }

    students = course.enrollments.where('role': 'student')
    tas = course.enrollments.where('role': 'ta')

    sections.each do |section|
      student_enrollment_group = students.shuffle.in_groups( students.size.quo(students.size / tas.size.to_f).ceil)
      ta_enrollment_group = tas.shuffle
      ta_enrollment_group.each_with_index do |ta, i|
        group = TaGroup.create(section_id: section.id)
        group.group_memberships.create(ta_group_id: group.id, enrollment_id: ta.id)
        student_enrollment_group[i].compact.each do |student|
          group.group_memberships.create(ta_group_id: group.id, enrollment_id: student.id)
        end
      end
    end

  end

end
