class AddLecturesToCourseContent < ActiveRecord::Migration[5.1]
  def change
    add_foreign_key :course_contents, :lectures
  end
end
