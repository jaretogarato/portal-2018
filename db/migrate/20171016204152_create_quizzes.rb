class CreateQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :quizzes do |t|
      t.belongs_to :group, foreign_key: true
      t.string :title
      t.text :content
      t.string :due_date
      t.integer :points
      t.timestamps
    end
  end
end
