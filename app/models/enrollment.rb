class Enrollment < ApplicationRecord
  belongs_to :user
  belongs_to :course

  validates :role, inclusion: {
    in: %w(student ta teacher auditor),
      message: "%{value} is not a valid role"
  }

  validates_uniqueness_of :user_id, scope: :course_id

  def self.mass_enrollment(csv, course_id)
		begin
			csv.each do |row|
				first_name = row[:first_name].strip
				last_name = row[:last_name].strip
				email = row[:email].strip
        role = row[:role].strip.downcase
				valid_roles = ['ta', 'student', 'auditor', 'teacher']
				next unless valid_roles.include? role
				user = User.find_by(email: email) || User.invite!(email: email, first_name: first_name, last_name: last_name)
				enrollment = Enrollment.create!(role: role, user_id: user.id, course_id: course_id)
			end
		rescue => e
			#TODO collect errors for report
		end
  end

end
