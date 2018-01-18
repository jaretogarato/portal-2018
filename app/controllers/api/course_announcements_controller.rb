class Api::CourseAnnouncementsController < ApplicationController
  def index
    render json: CourseContent.all
  end

  private 
    def course_announcements_params
      params.require(:course_announcement).permit(:course_id, :announcement_id)
    end
end
