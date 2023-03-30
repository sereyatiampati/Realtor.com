class AddColumnToListings < ActiveRecord::Migration[7.0]
  def up
    add_column :listings, :image_url, :string
  end

  def down
    remove_column :listings, :image_url
  end
end
