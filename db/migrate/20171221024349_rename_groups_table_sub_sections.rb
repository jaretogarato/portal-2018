class RenameGroupsTableSubSections < ActiveRecord::Migration[5.1]
  def change
    rename_table :groups, :sub_sections
  end
end
