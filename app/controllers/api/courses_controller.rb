class Api::CoursesController < Api::ApiController
  before_action :set_course, only: [ :destroy, :update, :show ]
  # need this to show for only current user or school, how ?

  def index
    render json: Course.all_sorted_courses
  end

  def show
    render json: Course.with_enrollment(@course.id, current_user.id)
  end

  def update
    if @course.update(course_params)
      render json: @course
    else
      render json: { errors: @course.errors.full_messages }, status: 422
    end
  end

  def user_courses
    render json: User.find(params[:user_id]).courses
  end

  def create
    course = current_user.courses.new(course_params)
    if course.save
      render json: course
    else
      render json: { errors: course.errors.full_messages }, status: 422
    end
  end

  def destroy
    @course.destroy
  end

  # Style.joins(:style_features).where(style_features: { feature_id: [1, 2, 3] })
  #grabs all users associated with a course id
  #need to join tables here, to get users roles
  def users_by_course_id
    users_ids = Course.find(params[:id]).enrollments.map { |u| u.user_id }
    render json: User.find(users_ids)
  end


  private
    def course_params
      params.require(:course).permit(:course_type, :term, :year)
    end

    def set_course
      @course = Course.find(params[:id])
    end
end
