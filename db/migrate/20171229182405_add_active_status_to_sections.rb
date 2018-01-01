class AddActiveStatusToSections < ActiveRecord::Migration[5.1]
  def change
    add_column :sections, :active, :boolean, default: true
  end
end
