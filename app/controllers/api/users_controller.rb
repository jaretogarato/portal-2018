class Api::UsersController < ApplicationController

  def update
    user = User.find(params[:id])
    if current_user.id == user.id && user.update(user_params)
      render json: user
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  private
  def user_params
    params.require(:user).permit(:firstName, :lastName, :bio, :email, :nickname)
  end
end
