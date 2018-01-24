class SubSection < ApplicationRecord
  belongs_to :section
  has_many :course_contents, dependent: :destroy
  has_many :assignments, through: :course_contents
  has_many :lectures, through: :course_contents
  has_many :quizzes, through: :course_contents
end
