class CreateQuestionOptions < ActiveRecord::Migration[5.1]
  def change
    create_table :question_options do |t|
      t.string :content, null: false, default: ''
      t.boolean :correct, default: false
      t.belongs_to :quiz_question, foreign_key: true

      t.timestamps
    end
  end
end
