class Quiz < ApplicationRecord
  has_many :quiz_questions, dependent: :destroy
  has_many :course_contents
  has_many :sub_sections, through: :course_contents

  validates_presence_of :title, :content, :due_date, :points
  validates_numericality_of :points, only_integer: true
end
