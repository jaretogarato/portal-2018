class Api::SectionController < ApplicationController
  before_action :set_section, only: [ :destroy, :udpate, :show ]
  # need this to show for only current user or school, how ?

  def index
    sections = Course.Section.all
    render json: { sections: sections }
  end

  def show
    render json: @section
  end

  def update
    if @section.update(section_params)
      render json: @section
    else
      render json: { errors: @section.errors.full_messages }, status: 422
    end
  end

  def create
    section = current_user.sections.new(section_params)

    if section.save
      render json: section
    else
      render json: { errors: section.errors.full_messages }, status: 422
    end
  end

  def destroy
    @section.destroy
  end

  private
    def section_params
      params.require(:section).permit(:title, :section_id)
    end

    def set_section
      @section = Section.find(params[:id])
    end
end

