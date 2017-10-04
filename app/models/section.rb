class Section < ApplicationRecord
  belongs_to :course
  has_may :groups
end
