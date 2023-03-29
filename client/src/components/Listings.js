import React from 'react'
import Carousel from "./Carousel";
import Services from './Services';
import Properties from "./Properties";
import Footer from "./Footer";
import "./listings.css"
import Property1 from "./../img/property-1.jpg";
import Property2 from "./../img/property-2.jpg";
import Property3 from "./../img/property-3.jpg";
import Property4 from "./../img/property-4.jpg";
import Property5 from "./../img/property-8.jpg";
import Property6 from "./../img/property-6.jpg";

function Listings() {
    
    const properties=[Property1, Property2, Property3, Property4, Property5 , Property6]

    return(
        <>
        <Carousel/>
        <Services/>
        <Properties properties={properties}/>
        <Footer/>
        </>
    )
}

export default Listings;