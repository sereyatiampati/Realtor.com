import React, {useState,useEffect} from 'react'
import Listing from './Listing';

function AllProperties () {
    const [listings, setListings]=useState([])
    useEffect(() => {
        fetch("/listings").then((response) => {
          if (response.ok) {
            response.json().then((data) => setListings(data));
          }
        });
      }, []);

  return (
<section class="section-property section-t8" >
      <div >
        <div id="property-carousel" class="swiper">
          <div class="swiper-wrapper"  style={{display: 'flex', flexWrap: 'wrap', width: '100%', height: '100%', flexDirection: 'row', paddingRight: '0', justifyContent: 'center'}} >
            {listings.map((listing=> <Listing key={listing} listing={listing}/>))}
          </div>
        </div>
        <div class="propery-carousel-pagination carousel-pagination"></div>
      </div>
    </section>        
  )
}

export default AllProperties