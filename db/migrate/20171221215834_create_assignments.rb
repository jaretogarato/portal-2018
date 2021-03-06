class CreateAssignments < ActiveRecord::Migration[5.1]
  def change
    create_table :assignments do |t|
      t.string :title
      t.string :submission_type
      t.integer :points
      t.string :due_date
      t.boolean :published
      t.boolean :group_assignment
      t.text :content
      t.belongs_to :sub_section, foreign_key: true

      t.timestamps
    end
  end
end