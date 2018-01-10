class Api::LecturesController < Api::ApiController
  before_action :set_lecture, only: [ :destroy, :update, :show ]

  def index
    render json: Lecture.all # Set to descend
  end

  def show
    render json: @lecture
  end

  def update
    if @lecture.update(quiz_params)
      render json: @lecture
    else
      render json: { errors: @lecture.errors.full_messages }, status: 422
    end
  end


  def create
    lecture = Lecture.new(lecture_params)
    if lecture.save
      render json: lecture
    else
      render json: { errors: lecture.errors.full_messages }, status: 422
    end
  end

  def destroy
    @lecture.destroy
  end


  private
    def lecture_params
      params.require(:lecture).permit(:title, :content)
    end

    def set_lecture
      @lecture = Lecture.find(params[:id])
    end
end
