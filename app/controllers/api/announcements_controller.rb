class Api::AnnouncementsController < ApplicationController

  def index
    render json: Course.find(params["course_id"]).announcements
  end

  private 
    def announcement_params
      params.require(:announcement).permit(:title, :body)
    end
end
