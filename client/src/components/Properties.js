import HomeListing from "./HomeListing";
import { Link } from 'react-router-dom'


function Properties({properties}) {
    
    return(
        <>
    <section class="section-property section-t8" >
      <div >
        <div class="row">
          <div class="col-md-12">
            <div class="title-wrap d-flex justify-content-between">
              <div class="title-box">
                <h2 class="title-a">Latest Properties</h2>
              </div>
              <div class="title-link">
                <Link to="/login">All Property
                  <span class="bi bi-chevron-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div id="property-carousel" class="swiper">
          <div class="swiper-wrapper"  style={{display: 'flex', flexWrap: 'wrap', width: '100%', height: '100%', flexDirection: 'row', paddingRight: '0', justifyContent: 'center'}} >
            {properties.map((listing=> <HomeListing key={listing} listing={listing}/>))}
          </div>
        </div>
        <div class="propery-carousel-pagination carousel-pagination"></div>
      </div>
    </section>        
        </>
    )
}

export default Properties;