class CreateCreateAssignments < ActiveRecord::Migration[5.1]
  def change
    create_table :create_assignments do |t|

      t.timestamps
    end
  end
end
