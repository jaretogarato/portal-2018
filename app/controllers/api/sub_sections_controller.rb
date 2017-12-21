class Api::SubSectionsController < Api::ApiController
  before_action :set_sub_section, only: [:show, :update, :destroy]
  before_action :set_section, only: [:index, :create]

  def index
    sub_sections = @section.sub_sections.all.order(id: :asc)
    render json: subSections
  end

  def show
    render json: { sub_section: @sub_section }
  end

  def create
    sub_section = @section.sub_sections.new(sub_section_params)

    if sub_section.save
      render json: sub_section
    else
      render json: { errors: sub_section.errors.full_messages}, status: 422
    end
  end

  def update
    if @sub_section.update(sub_section_params)
      render json: @sub_section
    else
      render json: { errors: @sub_section.subSection.full_messages}, status: 422
    end
  end

  def destroy
    @sub_section.destroy
  end

  private
    def sub_section_params
      params.require(:sub_sections).permit(:title)
    end

    def set_sub_section
      @sub_section = @section.sub_sections.find(params[:id])
    end

    def set_section
      @section = Section.find(params[:section_id])
    end
end
