class Listing < ApplicationRecord
    belongs_to :user
    validates :address, presence:true
    validates :property_type, presence:true
    validates :area_in_sqm, presence:true
    validates :beds, presence:true
    validates :baths, presence:true
    validates :garages, presence:true
end
