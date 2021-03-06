class Api::SectionsController < Api::ApiController
  before_action :set_section, only: [ :destroy, :update, :show ]
  # need this to show for only current user or school, how ?

  def index
    course = Course.find(params[:course_id])
    sections = course.sections.all
    render json: sections.order(:id)
  end

  def show
    # course = Course.find(section_params[:course_id])
    # section = Section.find()
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
    course = Course.find(params[:course_id])
    section = course.sections.new(section_params)
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
      params.require(:section).permit(:title, :active)
    end

    def set_section
      @section = Section.find(params[:id])
    end
end
