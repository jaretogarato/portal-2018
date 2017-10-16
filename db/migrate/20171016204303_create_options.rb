class CreateOptions < ActiveRecord::Migration[5.1]
  def change
    create_table :options do |t|
      t.belongs_to :question, foreign_key: true
      t.text :content
      t.boolean :correct

      t.timestamps
    end
  end
end
