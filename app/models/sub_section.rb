class SubSection < ApplicationRecord
  belongs_to :section
  #TODO eventually lectures will need to survive subsection deletion
  has_many :lectures, dependent: :destroy
end
