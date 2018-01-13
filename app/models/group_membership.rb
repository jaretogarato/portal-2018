class GroupMembership < ApplicationRecord
  belongs_to :ta_group
  belongs_to :enrollment
end
