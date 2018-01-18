class CreateCourseContents < ActiveRecord::Migration[5.1]
  def change
    create_table :course_contents do |t|
      t.belongs_to :sub_section, foreign_key: true, null: false
      t.belongs_to :quiz, foreign_key: true

      t.timestamps
    end
  end
end
