class QuestionOption < ApplicationRecord
  belongs_to :quiz_question, optional: true

  validates_presence_of :content
end
