class RenameColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :lectures, :group_id, :sub_section_id
  end
end
