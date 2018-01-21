class Api::GroupMembershipsController < ApplicationController
  before_action :set_membership, :set_course

  def update_groups
    if @group_membership.update(membership_params)
      groups =  Course.associated_groups(@course.id).group_by(&:section_id).values
      render json: groups.map { |group| group.group_by(&:ta_group_id).values }
    else
      render json: { errors: @group_membership.errors.full_messages }, status: 422
    end
  end

  private
    def membership_params
      params.require(:group_membership).permit(:ta_group_id, :enrollment_id)
    end

    def set_membership
      @group_membership = GroupMembership.find(params[:id])
    end

    def set_course
      @course = Course.find(params[:course_id])
    end

end
