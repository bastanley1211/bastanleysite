import "../App.css";
import { useSpring, animated } from "react-spring";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <div
        className="jumbotron-fluid p-3"
        style={{ backgroundColor: "rgb(235, 196, 99)" }}
      >
        <h1>
          I'm
          <br />
          the key,
          <br />
          the glue, and
          <br />
          the idea machine
          <br />
          for your next project.
        </h1>
      </div>

      <div className="container">
        <div className="row">
          <h1 className="main-h-one">Services</h1>
        </div>
        <div className="row d-flex space-between">
          <Carousel variant="dark" pause="hover" touch fade>
            <Carousel.Item>
              <a href="https://dev.bethanystanley.co" target="_blank">
                <div className="slide"></div>
              </a>
              <Carousel.Caption>
                <h3>Web</h3>
                <p>Check out some of my work!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* <a href="https://notary.bethanystanley.co" target="_blank"> */}
              <div className="slide"></div>
              {/* </a> */}
              <Carousel.Caption>
                <h3>Coming Soon: Notary</h3>
                <p>
                  Are important things happening and you need a document
                  notarized?
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://music.bethanystanley.co" target="_blank">
                <div className="slide"></div>
              </a>
              <Carousel.Caption>
                <h3>Music</h3>
                <p>
                  From podcast into music to private voice lessons, I can
                  provide.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* <a href="https://writer.bethanystanley.co" target="_blank"> */}
              <div className="slide"></div>
              {/* </a> */}
              <Carousel.Caption>
                <h3>Coming Soon: Writing</h3>
                <p>Blog posts, social media, and fiction, oh my!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </animated.div>
  );
}

export default Home;
