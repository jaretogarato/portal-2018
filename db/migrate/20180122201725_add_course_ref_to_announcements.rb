class AddCourseRefToAnnouncements < ActiveRecord::Migration[5.1]
  def change
    add_reference :announcements, :course, foreign_key: true
  end
end
