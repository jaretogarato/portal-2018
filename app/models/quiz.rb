class Quiz < ApplicationRecord
  belongs_to :group
  has_many :questions
end
