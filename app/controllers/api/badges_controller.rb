class Api::BadgesController < ApplicationController
  before_action :set_badge, only: [ :destroy, :update, :show ]

  def index
    render json: Badge.all
  end

  def show
    render json: @badge
  end

  def create
    badge = Badge.new(badge_params)
    if badge.save
      render json: badge
    else
      render json: { errors: badge.errors.full_messages }, status: 422
    end
  end

  def update
    if @badge.update(badge_params)
      render json: @badge
    else
      render json: { errors: @badge.errors.full_messages }, status: 422
    end
  end

  def destroy
    @badge.destroy
  end

  private
    def badge_params
      params.require(:badge).permit(
        :icon, :title, :description
      )
      
    end

    def set_badge
      @badge = Badge.find(params[:id])
    end

end
