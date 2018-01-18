class AddAssignmentsToCourseContents < ActiveRecord::Migration[5.1]
  def change
    add_reference :course_contents, :assignment, foreign_key: true
  end
end
