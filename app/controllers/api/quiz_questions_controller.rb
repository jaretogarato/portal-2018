class Api::QuizQuestionsController < ApplicationController
  before_action :set_quiz
  before_action :set_quiz_question, only: [:edit]
  def create
    quiz_question = @quiz.quiz_questions.new(quiz_question_params)
    if quiz_question.save
      render json: quiz_question
    else
      render json: { errors: quiz_question.errors.full_messages.join(', ')}, status: 422
    end
  end

  def edit
    if @quiz_question.update(quiz_question_params)
      render json: @quiz_question
    else
      render json: { errors: @quiz_question.errors.full_messages.join(', ')}, status: 422
    end
  end

  def destroy
    @quiz_question.destroy
  end

  private

  def quiz_question_params
    params.require(:quiz_question).permit(:question,
                                          :multiple_choice,
                                          :options,
                                          :correct_answers,
                                          :multiple_correct)
  end

  def set_quiz
    @quiz = Quiz.find(params[:quiz_id])
  end

  def set_quiz_question
    @quiz_question = @quiz.quiz_questions.find(params[:id])
  end
end
