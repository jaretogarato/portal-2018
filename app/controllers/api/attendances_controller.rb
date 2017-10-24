class Api::AttendancesController < ApplicationController
  def create
    records = Attendance.get_records(params)
    render json: records
  end

private
  def attendance_params
    params.require(:attendance).permit(:status, :record_date, :user_id, :course_id)
  end

end