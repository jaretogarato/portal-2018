class Api::QuizQuestionsController < ApplicationController
  before_action :set_quiz
  before_action :set_quiz_question, except: [:index, :create]

  def index
    @quiz_questions = @quiz.quiz_questions
  end

  def create
    @quiz_question = @quiz.quiz_questions.new(quiz_question_params)
    if @quiz_question.save
      if params[:options]
        QuizQuestion.save_options(@quiz_question, params[:options])
      end
      render 'show'
    else
      json_error(@quiz_question)
    end
  end

  def update
    if @quiz_question.save
      if params[:options]
        QuizQuestion.update_options(@quiz_question, params[:options])
      end
      render 'show'
    else
      json_error(@quiz_question)
    end
  end

  def edit
    if @quiz_question.update(quiz_question_params)
      render json: @quiz_question
    else
      json_error(@quiz_question)
    end
  end

  def destroy
    @quiz_question.destroy
  end

  private

  def quiz_question_params
    params.require(:quiz_question).permit(:question,
                                          :multiple_choice,
                                          :true_false,
                                          :multiple_correct)
  end

  def set_quiz
    @quiz = Quiz.find(params[:quiz_id])
  end

  def set_quiz_question
    @quiz_question = @quiz.quiz_questions.find(params[:id])
  end
end
