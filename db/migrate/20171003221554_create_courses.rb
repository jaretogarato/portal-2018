class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :type, null: false
      t.string :term, null: false
      t.integer :year, null: false

      t.timestamps
    end
  end
end
