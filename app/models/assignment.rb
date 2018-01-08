class Assignment < ApplicationRecord
  belongs_to :sub_section, optional: true
end
