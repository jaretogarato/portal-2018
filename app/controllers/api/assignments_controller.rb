class Api::AssignmentsController < ApplicationController

  def index
  end

  def show
  end

  def update
  end

  # def create
  # end

  def destroy
  end

  private
    def assignment_params
      params.require(:assignments).permit(:title, :content)
    end

    def set_assignment
      @assignment = Assignment.find(params[:id])
    end
  
end
