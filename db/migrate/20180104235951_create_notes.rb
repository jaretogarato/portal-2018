class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :author
      t.text :content
      t.boolean :visable
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
