class Api::CoursesController < ApplicationController
  before_action :set_course, only: [ :destroy, :udpate, :show ]
  # need this to show for only current user or school, how ?

  def index
    courses = Course.all
    render json: { courses: courses }
  end

  def show
    render json: @course
  end

  def update
    if @course.update(course_params)
      render json: @course
    else
      render json: { errors: @course.errors.full_messages }, status: 422
    end
  end

  def create
    course = current_user.courses.new(course_params)
    if course.save
      render json: course
      
    else
      render json: { errors: course.errors.full_messages }, status: 422
    end
  end

  def destroy
    @course.destroy
  end

  private
    def course_params
      params.require(:course).permit(:course_type, :term, :year)
    end

    def set_course
      @course = Course.find(params[:id])
    end
end
