import React from 'react'
import "./listings.css"
import Slide1 from "./../slide-1.jpg";
import Slide2 from "./../slide-2.jpg";
import Slide3 from "./../slide-3.jpg";

function Carousel() {
    return(<>
 <div id="carouselExampleDark" class="carousel carousel-light slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={Slide3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>69 MOUNT OLIVE ROAD ONE DRIVE</h5>
        <p>Everything you need and more.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Slide2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>204 RINO VENDA ROAD TWO DRIVE</h5>
        <p>The best of family living.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Slide3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>59 BROOKLYN DRIVE</h5>
        <p>Great locations are enviable and you just cannot beat this Redwoodtown property in Brooklyn Drive.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
    )  
}

export default Carousel;