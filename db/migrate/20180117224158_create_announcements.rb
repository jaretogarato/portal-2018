class CreateAnnouncements < ActiveRecord::Migration[5.1]
  def change
    create_table :announcements do |t|
      t.string :title, null: false
      t.string :body, null: false

      t.timestamps
    end
  end
end
