class Api::LecturesController < ApplicationController
  before_action :set_group, only: [:index]

  def index
    lectures = @group.lectures.all.order(id: :asc)

    lectures.map do |lecture|
      { id: lecture.id, title: lecture.title, content: lecture.content}
    end

    render json: lectures
  end

  private
    def lecture_params
      params.require(:lectures).permit(:title, :group_id, :content)
    end

    def set_lectures
      @lectures = @group.lectures.find(params[:id])
    end

    def set_group
      @group = Group.find(params[:group_id])
    end

end
