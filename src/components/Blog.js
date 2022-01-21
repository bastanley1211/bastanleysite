import "../App.css";
import { useSpring, animated } from "react-spring";

function Blog() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <div className="container-fluid">
        <div className="col-12 mt-1 mb-4">
          <div className="row mx-auto">
            <div className="col">
              <h1>Blog</h1>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Blog;
