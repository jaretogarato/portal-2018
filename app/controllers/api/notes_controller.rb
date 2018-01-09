class Api::NotesController < Api::ApiController
  before_action :set_recipient, only: [:recipient_notes, :new, :create]

  def index
    notes = current_user.notes
  end

  def create
    note = current_user.sent_notes.new(note_params)
    note.recipient_id = @recipient.id
    if note.save
      render json: Note.with_sender_info(@recipient.id)
    else
      render json: { errors: @quiz.errors.full_messages }, status: 422
    end
  end

  def update
  end

  def destroy
    current_user.notes.destroy(params[:id])
  end

  def recipient_notes
    render json: Note.with_sender_info(@recipient.id)
  end

  private
    def note_params
      params.require(:note).permit(:title, :content, :sender_id, :recipient_id, :visible)
    end

    def set_recipient
      @recipient = User.find(params[:user_id])
    end
end
