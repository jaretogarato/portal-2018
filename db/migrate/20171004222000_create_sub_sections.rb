class CreateSubSections < ActiveRecord::Migration[5.1]
  def change
    create_table :sub_sections do |t|
      t.string :title
      t.belongs_to :section, foreign_key: true

      t.timestamps
    end
  end
end
