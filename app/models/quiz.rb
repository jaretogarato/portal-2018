class Quiz < ApplicationRecord
  belongs_to :sub_section, optional: true
  has_many :quiz_questions, dependent: :destroy

  validates_presence_of :title, :content, :due_date, :points
  validates_numericality_of :points, only_integer: true
end
