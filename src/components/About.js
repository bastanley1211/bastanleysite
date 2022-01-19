import "../App.css";
import { useSpring, animated } from "react-spring";

const style = "../App.css";

function About() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <div class="col-12 text-center mt-1 mb-4">
        <h3>About the Developer</h3>
      </div>
      <div class="row mx-auto">
        <div class="col-md-3 col-lg-3 my-auto">
          <img
            src="img/selfphoto.jpg"
            id="self-image"
            class="img-fluid d-none d-md-block"
            alt="Image of Bethany Stanley, blonde hair and wearing a striped mask"
          />
          <img
            src="img/selfphoto.jpg"
            id="self-image"
            class="img-fluid w-50 d-md-none"
            alt="Image of Bethany Stanley, blonde hair and wearing a striped mask"
          />
        </div>
        <div class="col-md-9 col-lg-6 mt-3 my-auto" id="about-p">
          <p>
            My journey into web and software engineering and design began back
            in the mid-2000's when I could only customize on my favorite
            childhood sites, and then my blog by knowing some code; and, by
            learning how to interact with web-builders. When the whim hit me, I
            would often build a site (HTML/CSS) and try and publish it for free
            somewhere since I was too young to have that kind of money 😂.
          </p>
          <p>
            I had an awakening in my mid-twenties after wandering around after
            my bachelor's degree in Asian Studies... on a whim and tip, I
            wandered on to Codecademy's website and started working through
            their HTML course material. It hit me on a New Year's Eve, "Why
            haven't I been doing this for the past ten years?"
          </p>
          <p>
            I feel most at peace when I can create or build things. I have
            always been driven by challenge, and am exhilarated when I am able
            to put all my focus into solving a problem. I enjoy when I can be a
            part of a create and collaborative team. I have realized that
            development can give me these desires
          </p>

          <br />
        </div>
        <div
          class="col-12 col-sm-9 col-md-6 col-lg-3 p-3 my-auto mx-auto"
          id="tech"
        >
          <h5>Technologies:</h5>

          <p>
            HTML5, CSS3, Bootstrap, JavaScript(ES6), Node.JS, React, Redux,
            React Native, MongoDB, NodeJS, Express
          </p>
          <h5>Platforms:</h5>
          <p>Webflow, Wordpress, Wix, GitHub/GitPages/Bash</p>
          <h5>Currently Studying and Exploring these technologies👩🏻‍💻:</h5>
          <p>More advanced JavaScript(ES6+), TypeScript</p>
        </div>
        <div class="col-12">
          <p>
            <button class="shadow btn btn-lg text-white mx-auto text-center mt-5 mb-3 orange-btn">
              <a href="files/DevResumePublic.pdf" download>
                Download Resume{" "}
              </a>
              <i class="fa fa-download"></i>
            </button>
          </p>
        </div>
      </div>
    </animated.div>
  );
}

export default About;
