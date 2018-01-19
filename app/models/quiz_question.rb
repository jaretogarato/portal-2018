class QuizQuestion < ApplicationRecord
  has_many :question_options, dependent: :destroy
  belongs_to :quiz

  protected

  def self.save_options(quiz_question, options)
    options.each do |option|
      quiz_question.question_options.create(content: option[:text], correct: option[:correct])
    end
  end

  def self.update_options(quiz_question, options)
    options.each do |option|
      quiz_question.question_options.find(option[:id]).update(content: option[:text], correct: option[:correct])
    end
  end
end
