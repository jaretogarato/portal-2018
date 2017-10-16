class CreateAttendances < ActiveRecord::Migration[5.1]
  def change
    create_table :attendances do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :course, foreign_key: true
      t.string :attendance_record

      t.timestamps
    end
  end
end
