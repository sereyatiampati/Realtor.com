class Listing < ApplicationRecord
    belongs_to :user
    validates :address, presence:true, uniqueness: true
    validates :property_type, presence:true, inclusion: {in: ["Sell", "Rent", "Lease"]}
    validates :area_in_sqm, presence:true
    validates :beds, presence:true
    validates :baths, presence:true
    validates :garages, presence:true
    validates :image_url, presence:true
    validates :price, presence:true
end
