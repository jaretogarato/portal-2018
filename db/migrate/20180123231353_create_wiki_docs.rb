class CreateWikiDocs < ActiveRecord::Migration[5.1]
  def change
    create_table :wiki_docs do |t|
      t.string :title, null: false, default: ''
      t.text :content, null: false, default: ''
      t.belongs_to :course, foreign_key: true

      t.timestamps
    end
  end
end
