class CourseContent < ApplicationRecord
  belongs_to :sub_section
  belongs_to :quiz, optional: true
  belongs_to :assignment, optional: true
end
