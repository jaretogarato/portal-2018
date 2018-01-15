class Api::UserBadgesController < ApplicationController
  before_action :set_user

  def index
    @user_badges = @user.user_badges.includes(:badge)
  end

  def create
    @user_badge = @user.user_badges.new(user_badges_params)
    if @user_badge.save
      render 'show'
    else
      render json: { errors: @user_badge.full_messages}, status: 422
    end
  end

  def destroy
    UserBadge.find(params[:id]).destroy
  end

  private
    def user_badges_params
      params.require(:user_badge).permit(:badge_id)
    end

    def set_user
      @user = User.find(params[:user_id])
    end

end
