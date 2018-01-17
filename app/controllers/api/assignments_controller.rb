class Api::AssignmentsController < Api::ApiController
  before_action :set_assignment, only: [ :destroy, :update, :show ]

  def index
    render json: Assignment.all.order(title: :desc)
  end

  def show
    render json: @assignment
  end

  def update
    if @assignment.update(assignment_params)
      render json: @assignment
    else
      render json: { errors: @assignment.errors.full_messages }, status: 422
    end
  end


  def create
    assignment = Assignment.new(assignment_params)
    if assignment.save
      render json: assignment
    else
      render json: { errors: assignment.errors.full_messages }, status: 422
    end
  end

  def destroy
    @assignment.destroy
  end

  private
    def assignment_params
      params.require(:assignment).permit(
        :title, :submission_type,
        :points, :due_date,
        :created_at, :published,
        :group_assignment, :content
      )
    end

    def set_assignment
      @assignment = Assignment.find(params[:id])
    end
end
