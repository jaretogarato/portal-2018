class Course < ApplicationRecord
	has_many :enrollments
	has_many :users, through: :enrollments
	has_many :sections
	has_many :attendances

	validates_presence_of :course_type, :term, :year

	validates_numericality_of :year, :only_integer => true

	def self.with_enrollment(course_id, user_id)
		select('courses.*, e.role, e.sub_role')
		.joins("INNER JOIN enrollments e ON e.course_id = #{course_id} AND e.user_id = #{user_id}")
		.where("courses.id = #{course_id}")
		.limit(1)
		.first
	end

	# Imperfect fix, but this will sort by year and keep same-term courses together
	def self.all_sorted_courses
		select("id, course_type, term, year")
		.order(year: :asc, term: :asc)
	end

end
