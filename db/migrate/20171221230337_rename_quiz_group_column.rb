class RenameQuizGroupColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :quizzes, :sub_section_id
  end
end
