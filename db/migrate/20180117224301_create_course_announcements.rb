class CreateCourseAnnouncements < ActiveRecord::Migration[5.1]
  def change
    create_table :course_announcements do |t|
      t.belongs_to :course, foreign_key: true
      t.belongs_to :announcement, foreign_key: true

      t.timestamps
    end
  end
end
