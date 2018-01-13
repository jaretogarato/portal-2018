class RemoveTasStudentsFromGroups < ActiveRecord::Migration[5.1]
  def change
    remove_column :ta_groups, :ta
    remove_column :ta_groups, :students
  end
end
