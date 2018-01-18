class Lecture < ApplicationRecord
  has_many :course_contents
  has_many :sub_sections, through: :course_contents
end
