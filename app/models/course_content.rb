class CourseContent < ApplicationRecord
  belongs_to :sub_section
  belongs_to :quiz
end
