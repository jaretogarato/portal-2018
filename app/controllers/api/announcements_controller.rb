class Api::AnnouncementsController < ApplicationController
  before_action :set_course

  def index
    render json: @course.announcements
  end

  def create
    announcement = @course.announcements.new(announcement_params)
    if announcement.save
      render json: announcement
    else
      render json: { errors: announcement.errors.full_messages }, status: 422
    end
  end

  private 
    def announcement_params
      params.require(:announcement).permit(:title, :body)
    end

    def set_course
      @course = Course.find(params[:course_id])
    end
end
