class Assignment < ApplicationRecord
  validates :points, :numericality => { :greater_than_or_equal_to => 0 }

  has_many :course_contents
  has_many :sub_sections, through: :course_contents
end
