<<<<<<< HEAD
class Api::AssignmentsController < Api::ApiController
  before_action :set_assignment, except: [:index]
=======
class Api::AssignmentsController < ApplicationController
>>>>>>> c239def982c0b70fd440bc0126d7f9122337c90b

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
