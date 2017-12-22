class Api::LecturesController < Api::ApiController
  before_action :set_sub_section, only: [:index]

  def index
    lectures = @sub_section.lectures.all.order(id: :asc)

    lectures.map do |lecture|
      { id: lecture.id, title: lecture.title, content: lecture.content}
    end

    render json: lectures
  end

  private
    def lecture_params
      params.require(:lectures).permit(:title, :sub_section_id, :content)
    end

    def set_lectures
      @lectures = @sub_section.lectures.find(params[:id])
    end

    def set_sub_section
      @sub_section = SubSection.find(params[:sub_section_id])
    end

end
