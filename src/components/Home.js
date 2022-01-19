import "../App.css";
import { useSpring, animated } from "react-spring";
import React from "react";

function Home() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <div className="jumbotron-fluid" id="jumbotron"></div>
      <div className="container">
        <div className="row">
          <h1 className="main-h-one">Web Services</h1>
          <div class="col-12 text-center" id="projects">
            <h3 class="mt-2">Latest Projects</h3>
          </div>

          <div class="col-12 col-md-6">
            <a
              href="https://github.com/bastanley1211/weathersnap"
              target="_blank"
            >
              <div class="card my-4 text-center project">
                <h5 class="card-title mx-auto my-2">
                  Nucampsite: React + MongoDB/NodeJS/Express
                </h5>
                <img
                  src="img/nucampsiteawsstill.png"
                  class="img-fluid card-img-top"
                  alt="Weather snap weather app"
                />
                <p class="card-body">
                  AWS deployed full stack application featured ReactJS, NodeJS,
                  MongoDB, Express, JSON Web Tokens, etc. Made as a part of
                  Nucamp's Full Stack Coding Bootcamp
                </p>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-6">
            <a
              href="https://github.com/bastanley1211/weathersnap"
              target="_blank"
            >
              <div class="card my-4 text-center project">
                <h5 class="card-title mx-auto my-2">
                  WeatherSnap: a React weather app
                </h5>
                <img
                  src="img/weathersnapscreenshot.png"
                  class="img-fluid card-img-top"
                  alt="Weather snap weather app"
                />
                <p class="card-body">
                  Ongoing experiment to test and learn API technologies.
                  Features cute, retro, nostalgic theme.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-12 text-center">
          <a
            class="shadow btn btn-primary btn-lg text-light mx-auto text-center mb-3"
            id="moreProjectsButton"
            href="projects.html"
          >
            View More
          </a>
        </div>
      </div>
    </animated.div>
  );
}

export default Home;
