class AddSubsectionitemsToSubSection < ActiveRecord::Migration[5.1]
  def change
    add_column :sub_sections, :item_title, :string
  end
end
