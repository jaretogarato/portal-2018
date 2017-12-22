class CreateQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :quizzes do |t|
      t.belongs_to :sub_section, foreign_key: true
      t.string :title
      t.text :content
      t.date :due_date

      t.timestamps
    end
  end
end
