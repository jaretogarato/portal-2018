class CreateQuizQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :quiz_questions do |t|
      t.text :question, null: false, default: ''
      t.boolean :multiple_choice, default: true
      t.boolean :multiple_correct, default: false
      t.boolean :true_false, default: false
      t.belongs_to :quiz, foreign_key: true

      t.timestamps
    end
  end
end
