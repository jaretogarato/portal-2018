class SubSection < ApplicationRecord
  belongs_to :section
  #TODO eventually lectures will need to survive subsection deletion
  has_many :lectures, dependent: :destroy
  has_many :course_contents
  has_many :quizzes, through: :course_contents
end
