class Api::EnrollmentsController < ApplicationController
  before_action :set_enrollment, only: [:update, :destroy]

  def create
    enrollment = Enrollment.new(enrollment_params)
    if enrollment.save
      render json: enrollment
    else
      render json: { errors: enrollment.errors.full_messages }, status: 422
    end
  end

  def update
    if @enrollment.update(enrollment_params)
      render json: @enrollment
    else
      render json: { errors: @enrollment.errors.full_messages }, status: 422
    end
  end

  def destroy
    @enrollment.destroy
  end

  private 
  def enrollment_params
    params.require(:enrollment).permit(:role, :sub_role, :user_id, :course_id)
  end

  def set_enrollment
    @enrollment = Enrollment.find(params[:id])
  end
end
