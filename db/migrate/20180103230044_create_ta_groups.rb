class CreateTaGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :ta_groups do |t|
      t.text :ta
      t.text :students
      t.belongs_to :section, foreign_key: true

      t.timestamps
    end
  end
end
