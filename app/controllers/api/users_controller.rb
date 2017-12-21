class Api::UsersController < Api::ApiController

  def update
    user = User.find(params[:id])
    if current_user.id == user.id && user.update(user_params)
      render json: user
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  def course_users
    course = Course.last
    users = course.users.order(last_name: :asc)
    users.map do |user|
      { id: user.id, first_name: user.first_name, last_name: user.last_name, status: nil }
    end
    render json: users
  end

  private
  def user_params
    params.require(:user).permit(:firstName, :lastName, :bio, :email, :nickname, :image )
  end
end
