puts "Seeding ..."
User.destroy_all
Listing.destroy_all

user1= User.create!(
    username: "Kim K",
    email: "kim@gmail.com",
    password: "123",
    password_confirmation: "123"
)

user2= User.create!(
    username: "Wilson Kinyua",
    email: "wilson@gmail.com",
    password: "123",
    password_confirmation: "123"
)

user3= User.create!(
    username: "Donald T",
    email: "donald@gmail.com",
    password: "123",
    password_confirmation: "123"
)

user1.listings.create!(
   address: "Beverly Hills Lakeside",
   property_type: "Lease",
   area_in_sqm: rand(500..5000),
   beds: 5,
   baths: 6,
   garages: 4,
   price: 900000,
   image_url: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg"
)


user1.listings.create!(
    address: "Washington 200A Heaven Lane ",
    property_type: "Sell",
    area_in_sqm: rand(500..5000),
    beds: rand(4..9),
    baths: rand(3..7),
    garages: rand(2..6),
    price: 800000,
    image_url: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg"
 )

 user1.listings.create!(
    address: "Cottage Texas Lane",
    property_type: "Rent",
    area_in_sqm: rand(500..5000),
    beds: rand(4..9),
    baths: rand(3..7),
    garages: rand(2..6),
    price: 400000,
    image_url: "https://cdn.pixabay.com/photo/2017/11/16/19/29/cottage-2955582__340.jpg"
 )

 user2.listings.create!(
    address: "LA Magic-place Road",
    property_type: "Rent",
    area_in_sqm: rand(500..5000),
    beds: rand(4..9),
    baths: rand(3..7),
    garages: rand(2..6),
    price: 590000,
    image_url: "https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160__340.jpg"
 )
 user2.listings.create!(
    address: "Cleveland Ohio 101C Lane ",
    property_type: "Lease",
    area_in_sqm: rand(500..5000),
    beds: rand(4..9),
    baths: rand(3..7),
    garages: rand(2..6),
    price: 450000,
    image_url: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg"
 )
 user2.listings.create!(
    address: "Little Rock Arkansas 101C Lane ",
    property_type: "Sell",
    area_in_sqm: rand(500..5000),
    beds: rand(4..9),
    baths: rand(3..7),
    garages: rand(2..6),
    price: 900000,
    image_url: "https://cdn.pixabay.com/photo/2016/08/05/17/32/new-1572747__340.jpg"
 )

 user3.listings.create!(
    address: "Florida Home Villa Road",
    property_type: "Sell",
    area_in_sqm: rand(500..5000),
    beds: rand(4..9),
    baths: rand(3..7),
    garages: rand(2..6),
    price: 200000,
    image_url: "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
 )

 user3.listings.create!(
    address: "Homely Villa Kilimani Road",
    property_type: "Lease",
    area_in_sqm: rand(500..5000),
    beds: rand(4..9),
    baths: rand(3..7),
    garages: rand(2..6),
    price: 400000,
    image_url: "https://cdn.pixabay.com/photo/2017/06/16/15/58/luxury-home-2409518__340.jpg"
 )

 user3.listings.create!(
    address: "Architecture Road New York",
    property_type: "Rent",
    area_in_sqm: rand(500..5000),
    beds: rand(4..9),
    baths: rand(3..7),
    garages: rand(2..6),
    price: 500000,
    image_url: "https://cdn.pixabay.com/photo/2016/06/24/11/46/architecture-1477099__340.jpg"
 )
puts "Done seeding!"
