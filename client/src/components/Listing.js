function Listing({listing}) {
  const {address, property_type, area_in_sqm, beds, baths, garages, price, image_url} = listing
    return (
        <>
        <div class="carousel-item-b swiper-slide" style={{margin: '2rem'}}>
              <div class="card-box-a card-shadow">
                <div class="img-box-a">
                  <img src={image_url} alt="" class="img-a img-fluid" />
                </div>
                <div class="card-overlay">
                  <div class="card-overlay-a-content">
                    <div class="card-header-a">
                      <h2 class="card-title-a">
                        <a href="property-single.html"> 
                          <br /> {address}</a>
                      </h2>
                    </div>
                    <div class="card-body-a">
                      <div class="price-box d-flex">
                        <span class="price-a">{property_type} | $ {price}.000</span>
                      </div>
                      {/* <a href="#" class="link-a">Click here to view
                        <span class="bi bi-chevron-right"></span>
                      </a> */}
                    </div>
                    <div class="card-footer-a">
                      <ul class="card-info d-flex justify-content-around">
                        <li>
                          <h4 class="card-info-title">Area</h4>
                          <span>{area_in_sqm}m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Beds</h4>
                          <span>{beds}</span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Baths</h4>
                          <span>{baths}</span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Garages</h4>
                          <span>{garages}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default Listing;