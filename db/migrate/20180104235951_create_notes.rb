class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :title, null: false, default: ''
      t.text :content, null: false, default: ''
      t.boolean :visible, null: false, default: false
      t.integer :sender_id, null: false
      t.integer :recipient_id, null: false

      t.timestamps
    end
  end
end
