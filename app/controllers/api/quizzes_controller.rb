class Api::QuizzesController < ApplicationController
  before_action :set_quiz, only: [ :destroy, :update, :show ]

  def index
    render json: Quiz.all
  end

  def show
    render json: @quiz
  end

  def update
    if @quiz.update(quiz_params)
      render json: @quiz
    else
      json_error(@quiz)
    end
  end


  def create
    quiz = Quiz.new(quiz_params)
    if quiz.save
      render json: quiz
    else
      json_error(quiz)
    end
  end

  def destroy
    @quiz.destroy
  end


  private
    def quiz_params
      params.require(:quiz).permit(:title, :content, :due_date, :points, :published)
    end

    def set_quiz
      @quiz = Quiz.find(params[:id])
    end
end
