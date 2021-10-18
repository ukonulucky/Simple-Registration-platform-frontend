import React from 'react'
import "../styles/Slideshow.scss"

const Slideshow = () => {


  return (
    <div>
      <div id="demo" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
          <li data-target="#demo" data-slide-to="3"></li>
          <li data-target="#demo" data-slide-to="4"></li>
        </ul>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/image/apc.jpeg" alt="slide one" />
            
          </div>
          <div class="carousel-item">
            <img src="/image/chief-emeka-beke.jpg" alt="slide two" />
           
          </div>
          <div class="carousel-item">
            <img src="/image/dba1.jpg" alt="slide three" />
           
          </div>
          <div class="carousel-item">
            <img src="/image/youth1.jpg" alt="slide four" />
          
          </div>
          <div class="carousel-item">
            <img
              src="/image/Amaechi-2.jpg"
              alt="slide five"
            />
         
          </div>
        </div>
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
}

export default Slideshow
