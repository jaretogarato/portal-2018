class Api::MiscellaneousController < ApplicationController
  before_action :set_miscellaneous, only: [ :destroy, :update, :show ]
  
  def index
    render json: Miscellaneou.all
  end

  def show
    render json: @miscellaneous
  end

  def create
    miscellaneous = Miscellaneou.new(miscellaneous_params)
    if miscellaneous.save
      render json: miscellaneous
    else
      json_error(miscellaneous)
    end
  end

  def update
    if @miscellaneous.update(miscellaneous_params)
      render json: @miscellaneous
    else
      json_error(@miscellaneous)
    end
  end

  def destroy
    @miscellaneous.destroy
  end

  private
    def miscellaneous_params
      params.require(:miscellaneous).permit(:title, :content)
    end

    def set_miscellaneous
      @miscellaneous = Miscellaneou.find(params[:id])
    end 
end
  