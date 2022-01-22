import "../App.css";
import { useSpring, animated } from "react-spring";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import btrImage from "../img/btrScreenshot.png";
import musicSlideImage from "../img/musicSlidePhoto.JPG";

function Home() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props} className="m-0 p-0" id="homeMainContent">
      <div
        className="jumbotron-fluid p-3"
        style={{ backgroundColor: "rgb(235, 196, 99)" }}
      >
        <h1>
          I'm
          <br />
          the <span>key</span>,
          <br />
          the <span>glue</span>, and
          <br />
          the <span>idea machine</span>
          <br />
          for your next project.
        </h1>
      </div>

      <div className="container-fluid p-0" id="services">
        <Carousel variant="dark" pause="hover" touch>
          <Carousel.Item>
            <a href="https://dev.bethanystanley.co" target="_blank">
              <div className="slide">
                <div className="slide-overlay">
                  <Image src={btrImage} className="d-block w-100" fluid />
                </div>
              </div>
            </a>

            <Carousel.Caption className="text-light rounded w-25 mx-auto slide-cap">
              <h3>Web Services</h3>
              <p className="d-none d-sm-block">Check out some of my work!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="slide-overlay">
              <a href="https://music.bethanystanley.co" target="_blank">
                <div className="slide slide-two"></div>
              </a>
            </div>
            <Carousel.Caption className="text-light rounded w-25 mx-auto slide-cap">
              <h3>Music</h3>
              <p className="d-none d-sm-block">
                From podcast into music to private voice lessons, I can provide.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide-overlay">
              {/* <a href="https://notary.bethanystanley.co" target="_blank"> */}
              <div className="slide slide-one"></div>
              {/* </a> */}
            </div>
            <Carousel.Caption className="text-light rounded p-2 w-25 mx-auto slide-cap">
              <h3>
                <span>Coming Soon</span>
                <br /> Notary
              </h3>
              <p className="d-none d-sm-block">
                Are important things happening and you need a document
                notarized?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide-overlay">
              {/* <a href="https://writer.bethanystanley.co" target="_blank"> */}
              <div className="slide slide-three"></div>
              {/* </a> */}
            </div>
            <Carousel.Caption className="text-light rounded p-2 w-25 mx-auto slide-cap">
              <h3>
                <span>Coming Soon</span>
                <br /> Writing
              </h3>
              <p className="d-none d-sm-block">
                Blog posts, social media, and fiction, oh my!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </animated.div>
  );
}

export default Home;
