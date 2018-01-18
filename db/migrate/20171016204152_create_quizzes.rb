class CreateQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :quizzes do |t|
      t.belongs_to :group, foreign_key: true
      t.string :title, null: false, default: ''
      t.json :content, null: false, default: {}
      t.string :due_date, null: false, default: ''
      t.integer :points, null: false, default: 0
      t.timestamps
    end
  end
end
