class CreateMiscellaneous < ActiveRecord::Migration[5.1]
  def change
    create_table :miscellaneous do |t|

      t.timestamps
    end
  end
end
