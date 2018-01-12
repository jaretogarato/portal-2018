class RemoveSubSectionIdFromQuizzes < ActiveRecord::Migration[5.1]
  def change
    remove_column :quizzes, :sub_section_id
  end
end
