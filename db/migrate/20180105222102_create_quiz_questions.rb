class CreateQuizQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :quiz_questions do |t|
      t.text :question, null: false, default: ''
      t.boolean :multiple_choice, default: true
      t.jsonb :options
      t.jsonb :correct_answers
      t.boolean :multiple_correct, default: false
      t.belongs_to :quiz, foreign_key: true

      t.timestamps
    end
  end
end
