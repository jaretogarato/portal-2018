class Api::UserBadgesController < ApplicationController
  def create
    user_badge = UserBadge.new(user_badges_params)
    if user_badge.save
      render json: user_badge
    else
      render json: { errors: user_badge.full_messages}, status: 422
    end
  end

  def destroy
    UserBadge.find(params[:id]).destoy
  end

  private
    def user_badges_params
      params.require(:user_badges).permit(:user_id, :badge_id)
    end

end
