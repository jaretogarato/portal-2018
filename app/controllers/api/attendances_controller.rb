class Api::AttendancesController < ApplicationController
  before_action :set_user
  before_action :set_course

  def create
    attendance = Attendance.new(attendance_params)
    if attendance.save
      render json: attendance
    else
      render json: { errors: attendance.errors.full_messages }, status: 422
    end
  end

private
  def attendance_params
    params.require(:attendance).permit(:status, :record_date, :user_id, :course_id)
  end

  def set_user
    @user = User.first
  end

  def set_course
    @course = Course.first
  end
end
