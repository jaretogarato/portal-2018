class CreateBadges < ActiveRecord::Migration[5.1]
  def change
    create_table :badges do |t|
      t.string :icon
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
