import {useState, useEffect} from 'react'
import EachListing from "./EachListing";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Footer from './Footer';

function MyProperties() {
    const [myListings, setMyListings] = useState([]);
    const [item, setItem]= useState(true)
    const navigate = useNavigate()

    useEffect(() => {
      fetch("/my-listings")
        .then((r) => r.json())
        .then(setMyListings);
    }, [item]);

    function onDelete() {
      setItem(!item)
    }


    return(
        <>
        <div id="property-carousel" class="swiper">
          <div class="swiper-wrapper"  style={{display: 'flex', flexWrap: 'wrap', width: '100%', height: '100%', flexDirection: 'row', paddingRight: '0', justifyContent: 'center'}} >
            {
                myListings.length > 0 ? (
                  <div className='container'>
                    <h3>Do you have another property that you want listed to Sell,  Rent or Lease out?</h3>
                <Button variant="outline-primary" onClick={()=> navigate("/property/new")} style={{width: "100px", height: "70px"}}>
                   Add Listing
                </Button>
                  <div style={{display: "flex", flexWrap: 'wrap'}}>{myListings.map((listing) => <EachListing key={listing.id} listing={listing} onDelete={onDelete}/>)}</div>
                  </div>
                ) : (
            <div className='container'>
                <h2>No Properties Found</h2>
                
                <Button variant="outline-primary" as={Link} to="/property/new">
                   Add Listing
                </Button>

            </div>
                )
            }
          </div>
          <Footer/>
          </div>
        </>
    )
}
export default MyProperties;