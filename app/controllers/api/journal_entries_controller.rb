class Api::JournalEntriesController < Api::ApiController
  def index
    render json: JournalEntry
      .where(enrollment_id: params[:enrollment_id], section_id: params[:section_id])
      .order(created_at: :desc)
  end

  def create
    entry = JournalEntry.new(entry_params)
    if entry.save
      render json: entry
    else
      render json: { errors: entry.errors.full_messages }, status: 422
    end
  end

  private
    def entry_params
      params.require(:entry).permit(:title, :body, :permission, :section_id, :enrollment_id)
    end
end
