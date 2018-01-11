class Note < ApplicationRecord

  belongs_to :recipient, class_name: "User", foreign_key: "recipient_id"
  belongs_to :sender, class_name: "User", foreign_key: "sender_id"


  #join again with enrollments
  def self.with_sender_info(recipient)
    select('notes.*, u.first_name, u.last_name, u.image')
    .from('notes')
    .joins('INNER JOIN users u ON u.id = notes.sender_id')
    .where('notes.recipient_id = ?', recipient)
    .order(created_at: :desc)
  end
end
