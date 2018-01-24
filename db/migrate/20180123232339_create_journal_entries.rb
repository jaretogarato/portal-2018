class CreateJournalEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :journal_entries do |t|
      t.text :body
      t.string :title
      t.string :permission, default: 'private'
      t.belongs_to :section, foreign_key: true
      t.belongs_to :enrollment, foreign_key: true

      t.timestamps
    end
  end
end
