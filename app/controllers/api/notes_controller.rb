class Api::NotesController < Api::ApiController
  before_action :set_recipient, only: [:recipient_notes, :create, :destroy, :update]

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
    note = @recipient.notes.find(params[:id])
    if note.update(note_params)
      render json: note
    else
      render json: {errors: @recipient.notes.error.full_messages.join(',')}, status: 422
    end
  end

  def destroy
    @recipient.notes.destroy(params[:id])
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
