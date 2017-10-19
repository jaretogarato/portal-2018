class Api::GroupsController < ApplicationController
  before_action :set_group, only: [:show, :update, :destroy]
  before_action :set_section, only: [:index, :create]

  def index
    groups = @section.groups.all
    render json: groups
  end

  def show
    render json: { group: @group }
  end

  def create
    group = @section.groups.new(group_params)

    if group.save
      render json: group
    else
      render json: { errors: group.errors.full_messages}, status: 422
    end
  end

  def update
    if @group.update(group_params)
      render json: @group
    else
      render json: { errors: @group.group.full_messages}, status: 422
    end
  end

  def destroy
    @group.destroy
  end

  private
    def group_params
      params.require(:groups).permit(:title)
    end

    def set_group
      @group = @section.groups.find(params[:id])
    end

    def set_section
      @section = Section.find(params[:section_id])
    end
end
