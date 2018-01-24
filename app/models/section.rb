class Section < ApplicationRecord
  belongs_to :course
  has_many :sub_sections, dependent: :destroy
  has_many :ta_groups
  has_many :journal_entries
end
