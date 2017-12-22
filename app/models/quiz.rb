class Quiz < ApplicationRecord
  belongs_to :sub_section, optional: true
  has_many :questions
end
