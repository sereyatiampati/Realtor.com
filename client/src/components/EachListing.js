import {useNavigate } from "react-router-dom";

function EachListing({listing, onDelete}) {
  const {id, address, property_type, area_in_sqm, beds, baths, garages, price, image_url} = listing
  const navigate = useNavigate()

  function handleDelete(id) {
    fetch(`/listings/${id}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        console.log("Deleted")
        onDelete()
      }
    });
  }

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
                      <a href="#" class="link-a">Click here to view
                        <span class="bi bi-chevron-right"></span>
                      </a>
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
              <div>
                <button type="button" class="btn btn-light" style={{border: '1px black solid',  marginRight: '10px'}} onClick={()=>handleDelete(id)}> <i class="bi bi-trash3-fill text-danger"></i>Delete</button>
                <button type="button" class="btn btn-light ml-2 px-1" style={{border: '1px black solid', marginLeft: '10px'}} onClick={()=>navigate(`/property/${id}`)}> <i class="bi bi-pen text-primary"></i>Edit</button>
                </div>
            </div>
        </>
    )
}

export default EachListing;