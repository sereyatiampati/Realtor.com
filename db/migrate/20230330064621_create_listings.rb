class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :address
      t.string :property_type
      t.integer :area_in_sqm
      t.integer :beds
      t.integer :baths
      t.integer :garages

      t.timestamps
    end
  end
end
