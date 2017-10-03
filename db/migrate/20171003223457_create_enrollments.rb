class CreateEnrollments < ActiveRecord::Migration[5.1]
  def change
    create_table :enrollments do |t|
      t.string :role, null: false
      t.string :sub_role
      t.integer :user_id, null: false
      t.integer :course_id, null: false
      t.belongs_to :user, foreign_key: true
      t.belongs_to :course, foreign_key: true

      t.timestamps
    end
  end
end
