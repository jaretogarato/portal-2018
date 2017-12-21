class SubSection < ApplicationRecord
  belongs_to :section
  has_many :lectures
end
