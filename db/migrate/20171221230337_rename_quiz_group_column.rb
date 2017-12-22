class RenameQuizGroupColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :quizzes, :group_id, :sub_section_id
  end
end
