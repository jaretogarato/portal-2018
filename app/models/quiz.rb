class Quiz < ApplicationRecord
  belongs_to :sub_section
  has_many :questions
end
