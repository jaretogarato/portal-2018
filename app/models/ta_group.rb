class TaGroup < ApplicationRecord
  belongs_to :section
  has_many :group_memberships, dependent: :destroy
  has_many :enrollments, through: :group_memberships
end
