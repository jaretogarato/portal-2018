class JournalEntry < ApplicationRecord
  belongs_to :section
  belongs_to :enrollment

  validates_presence_of :body, :permission, :title
  validates :permission, inclusion: { in: %w(private public staff) }
end
