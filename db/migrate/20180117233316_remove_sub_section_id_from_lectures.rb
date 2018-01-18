class RemoveSubSectionIdFromLectures < ActiveRecord::Migration[5.1]
  def change
    remove_column :lectures, :sub_section_id
    add_column :course_contents, :lecture_id, :bigint
  end
end
