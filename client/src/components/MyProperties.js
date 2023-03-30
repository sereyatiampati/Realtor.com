import React, {useState, useEffect} from 'react'
import EachListing from "./EachListing";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function MyProperties({user}) {
    const [myListings, setMyListings] = useState([]);

    useEffect(() => {
      fetch("/my-listings")
        .then((r) => r.json())
        .then(setMyListings);
    }, []);
    return(
        <>
        <div id="property-carousel" class="swiper">
          <div class="swiper-wrapper"  style={{display: 'flex', flexWrap: 'wrap', width: '100%', height: '100%', flexDirection: 'row', paddingRight: '0', justifyContent: 'center'}} >
            {
                myListings.length > 0 ? (myListings.map((listing) => <EachListing key={listing.id} listing={listing}/>)
                ) : (
            <div className='container'>
                <h2>No Properties Found</h2>
                
                <Button variant="outline-primary" as={Link} to="/add-property">
                   Add Listing
                </Button>

            </div>
                )
            }
          </div>
          </div>
        </>
    )
}
export default MyProperties;