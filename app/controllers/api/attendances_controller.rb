class Api::AttendancesController < ApplicationController
  def index 
    course = Course.find(params[:course_id])
    users = course.users.order(last_name: :asc)
    # users.map do |user|
    #   { id: user.id, first_name: user.first_name, last_name: user.last_name, status: nil }
    # end
    render json: users
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