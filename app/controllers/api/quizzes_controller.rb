class Api::QuizzesController < ApplicationController
  before_action :set_quiz, only: [ :destroy, :update, :show ]

  def index
    render json: Quiz.all
  end

  def show
    render json: Quiz.with_enrollment(@quiz.id, current_user.id)
  end

  def update
    if @quiz.update(quiz_params)
      render json: @quiz
    else
      render json: { errors: @quiz.errors.full_messages }, status: 422
    end
  end


  def create
    quiz = Quiz.new(quiz_params)
    if quiz.save
      render json: quiz
    else
      render json: { errors: quiz.errors.full_messages }, status: 422
    end
  end

  def destroy
    @quiz.destroy
  end


  private
    def quiz_params
      params.require(:quiz).permit(:title, :content)
    end

    def set_quiz
      @quiz = quiz.find(params[:id])
    end
end
