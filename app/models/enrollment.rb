class Enrollment < ApplicationRecord
  belongs_to :user
  belongs_to :course

  validates :role, inclusion: {
    in: %w(student TA teacher auditor),
      message: "%{value} is not a valid role"
  }
  
end
