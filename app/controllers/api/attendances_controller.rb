class Api::AttendancesController < Api::ApiController
  def index
    course = Course.find(params[:course_id])
    @attendances = course.attendances.where("record_date = '#{params[:current_date]}'").includes(:user)
  end

  def create
    records = Attendance.format_and_create_records(params)
    render json: records
  end

private
  def attendance_params
    params.require(:attendance).permit(:status, :record_date, :user_id, :course_id)
  end

end
