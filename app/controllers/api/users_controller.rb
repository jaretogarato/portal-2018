class Api::UsersController < Api::ApiController

  def update
    user = User.find(params[:id])
    if current_user.id == user.id && user.update(user_params)
      render json: user.as_json(include: :enrollments)
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def course_users
    course = Course.find(params[:id])
    users = course.users.order(last_name: :asc)
    users.map do |user|
      { id: user.id, first_name: user.first_name, last_name: user.last_name, status: nil }
    end
    render json: users
  end

  private
  def user_params
    params.require(:user).permit(:firstName, :lastName, :bio, :email, :nickname, :avatar_url )
  end
end
