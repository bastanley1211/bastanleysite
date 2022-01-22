import "../App.css";
import { useSpring, animated } from "react-spring";
import Image from "react-bootstrap/Image";
import selfImage from "../img/self-image.JPG";
import jinseiVideo from "../img/jinseicafeappvid.mp4";
import React from "react";

function About() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <div className="container mb-5">
        <div className="col-12 text-center mt-1 mb-4">
          <h1>Learn About the "Why?"</h1>
        </div>

        <div className="row mx-auto">
          <div className="col-md-9 col-lg-9 mt-3 my-auto" id="about-p">
            <h2>The Key</h2>
            <p>
              Let me be the expert and resourceful addition to your project to
              help you unlock its potential. Whether it be creating your
              Wordpress Website or Blog; finalizing those Mortgage papers for
              your first home; actually being able to have quality;
              well-researched written content on your company's website; or the
              background music that your company training video needed; I can
              the key.
            </p>
            <p>
              I am driven by problems. One of my Gallup Strengthfinder top five
              is "Restorative", which asserts that I am keenly aware of problems
              in a situation - social, project, data, etc. - and prove to be
              quick and resourceful in finding a solution.
            </p>
          </div>
          <div className="col-md-3 col-lg-3 my-auto">
            <Image
              src={selfImage}
              fluid
              rounded
              style={{ filter: "sepia(80%)" }}
              alt="Image of Bethany Stanley, blonde hair and wearing a striped mask"
            />
          </div>
        </div>

        <div className="row mx-auto">
          <div className="col-md-3 col-lg-2 my-auto d-none d-sm-block">
            <Image
              src={selfImage}
              fluid
              rounded
              style={{ filter: "sepia(80%)" }}
              alt="Image of Bethany Stanley, blonde hair and wearing a striped mask"
            />
          </div>
          <div className="col-md-9 col-lg-4 mt-3 my-auto" id="about-p">
            <h2>The Glue</h2>
            <p>
              I am a dabbler and a tinkerer.{" "}
              <i>But, I ain't no dabble drabble!</i> My natural curiousity has
              led me to become proficient in many areas. These skills come in
              handy when problem solving. What happens when an issue comes up in
              a project that is unforseen or foreign? It is the dabblers and
              tinkerers who are fearless to think outside the box, dip into
              their wealth of proficiencies, or even learn a completely new
              skill for the sake of solving the problem. I can be the glue that
              holds your project together when problems arise.
            </p>
            <p>
              Another aspect to this strength is in strengthening and building
              connections. According the Gallup Strengthfinder, two of my top
              strengths is "Individualization" and "Connectedness". I can keep a
              project glued together by determining what aspects of a project
              should be delegated and to whom the delegation would be most
              successful. I value the power of the group and love to assume my
              role within that connected web.
            </p>
          </div>

          <div className="col-md-9 col-lg-4 mt-3 my-auto" id="about-p">
            <h2>The Idea Machine</h2>
            <p>
              This fuels my dabbling, no doubt. It really comes in handy with
              the types of work and freelance projects of which I have
              participated. According to Gallup Strengthfinder, my top two
              strength are "Input" and "Ideation".I love to accumulate ideas and
              information, thus feeding my internal ideation machine
              consistently. I am always seeking to learn or deepen my learning,
              therefore I continue to innovate.{" "}
            </p>
          </div>
          <div className="col-md-3 col-lg-2 my-auto">
            <video width="100%" height="100%" controls>
              <source src={jinseiVideo} type="video/mp4" />
              Your browser does not support this video
            </video>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default About;
