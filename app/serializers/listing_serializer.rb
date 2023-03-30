class ListingSerializer < ActiveModel::Serializer
  attributes :id, :address, :property_type, :area_in_sqm, :beds, :baths, :garages, :price, :image_url
  # belongs_to :user
end
