class CreateAnnouncements < ActiveRecord::Migration[5.1]
  def change
    create_table :announcements do |t|
      t.string :body, null: false

      t.timestamps
    end
  end
end
