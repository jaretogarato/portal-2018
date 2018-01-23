class Course < ApplicationRecord
	has_many :enrollments
	has_many :users, through: :enrollments
	has_many :sections
	has_many :attendances
	has_many :announcements
	has_many :wiki_docs

	validates_presence_of :course_type, :term, :year
	validates_numericality_of :year, :only_integer => true

	def self.with_enrollment(course_id, user_id)
		select('courses.*, e.role, e.sub_role')
		.joins("INNER JOIN enrollments e ON e.course_id = #{course_id} AND e.user_id = #{user_id}")
		.where("courses.id = #{course_id}")
		.limit(1)
		.first
	end

	def self.associated_users(course_id)
		select('u.*, e.role')
		.joins('INNER JOIN enrollments e ON e.course_id = courses.id
						INNER JOIN users u ON e.user_id = u.id')
		.where('courses.id = ?', course_id)
	end

	def self.current_user_with_enrollment(course_id, user_id)
		select('u.is_admin, u.first_name, u.last_name, e.*')
		.joins("INNER JOIN enrollments e ON e.course_id = courses.id
            INNER JOIN users u ON e.user_id = u.id")
		.where("courses.id = #{course_id} AND u.id = #{user_id}")
	end

	def self.associated_groups(course_id)
		select('u.id, u.first_name, u.last_name, u.email, u.image,
						e.role, g.id AS membership_id, g.ta_group_id,
						s.title, t.section_id ')
		.joins('INNER JOIN enrollments e ON e.course_id = courses.id
						INNER JOIN users u ON u.id = e.user_id
						INNER JOIN group_memberships g ON g.enrollment_id = e.id
						INNER JOIN ta_groups t ON t.id = g.ta_group_id
						INNER JOIN sections s ON s.id = t.section_id')
		.where('courses.id = ?', course_id)
	end

	# Imperfect fix, but this will sort by year and keep same-term courses together
	def self.all_sorted_courses
		select("id, course_type, term, year")
		.order(year: :asc, term: :asc)
	end

end
