class Api::CourseContentsController < ApplicationController

  before_action :set_course_content, only: [:destroy]

  def index
    render json: CourseContent.all
  end

  def create
    course_content = CourseContent.new(course_content_params)
    course_content.save ? (render json: course_content) : (json_error(course_content))
  end

  def destroy
    @course_content.destroy
  end

  private
    def course_content_params
      params.require(:course_content).permit(:sub_section_id, :quiz_id)
    end

    def set_course_content
      @course_content = CourseContent.find(params[:id])
    end

end