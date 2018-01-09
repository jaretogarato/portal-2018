class Enrollment < ApplicationRecord
  belongs_to :user
  belongs_to :course

  validates :role, inclusion: {
    in: %w(Student TA Teacher Auditor),
      message: "%{value} is not a valid role"
  }

  validates_uniqueness_of :user_id, scope: :course_id

end
