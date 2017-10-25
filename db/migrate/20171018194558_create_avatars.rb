class CreateAvatars < ActiveRecord::Migration[5.1]
  def change
    create_table :avatars do |t|
      t.belongs_to :user, foreign_key: true
      t.string :url
      t.string :user_id

      t.timestamps
    end
  end
end
