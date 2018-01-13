class CreateGroupMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :group_memberships do |t|
      t.belongs_to :ta_group, foreign_key: true
      t.belongs_to :enrollment, foreign_key: true

      t.timestamps
    end
  end
end
