import React from "react";
import "../styles/Homepage.scss";
import Nav from "../components/Nav";
// import Carousel from "../components/Carousel";
import Words from "../components/Words";
import Slideshow from "../components/Slideshow";

const Homepage = () => {
  return (
    <div className="hom">
      <Nav />
      <div className="animate">
        <Words />
      </div>
      <div className="home-wrap container">
        <div className="row">
          <div className="col-md-6">
            <div className="home">
              <Slideshow />
            </div>
          </div>
          <div className="col-md-4 conf">
            <div className="motivate">
              {/* <h1>My Dear Youths</h1> */}

              <h1>The world has gone digital, don't be left behind</h1>
              <p>
                The future of every nation is in the youths and therefore we
                encourage all youth to partcipate in this programme as they get
                ready to lead tommorow.
              </p>
              <p>
                This programme is a free training to groom APC youths to become
                Software Developers,Computer Programmers and Database
                Administrators.
              </p>
              <p>
                This training is to guarantee self dependency, inovation and
                creativity of APC youths in Rivers State.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
