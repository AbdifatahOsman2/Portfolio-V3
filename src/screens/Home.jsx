import { useEffect } from "react";
import { Link } from "@material-ui/core";
import { Button } from "@material-ui/core";
import bg from "../Assets/BG (1).png";
import p1 from '../Assets/Desktop - 1.png'
import p2 from "../Assets/Screenshot from 2022-01-12 21-45-41.jpg"
import Aos from "aos";

const Home = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 500,
    });
  }, []);

  return (
    <>
      <section className="section-one">
        <div className="container">
          <img src={bg} />
          <h1 data-aos="slide-up">Software Engineer, Designer and Game Developer </h1>
          <p>
            I design and code beautifully simple things, and I love what I do.
          </p>
          <Link href="https://www.linkedin.com/in/abdifatahothman/"><i 
          data-aos="slide-up"
          id="linkedIn" class="fab fa-linkedin"></i></Link>
          <Link href="https://github.com/AbdifatahOsman2"><i id="gitHub" class="fab fa-github-square"></i></Link>
        </div>
      </section>
      <section className="section-two">
          <h1>My Recent Works</h1>
          <p>Here are a few design projects I've worked on recently. Want to see more? Email me.</p>
        <div className="projects"> 
          <div className="project-1">
            <img src={p1}/>
            <button/>
          </div>
          <div className="project-2">
            <img/>
          </div>
          <div className="project-3">
            <img/>
          </div>
          <div className="project-4">
            <img/>
          </div>
          <div className="project-5">
            <img/>
          </div>
          <div className="project-6">
            <img/>
          </div>
        </div>
      </section>
      <section className="section-three">
          <h1>Section 3</h1>
      </section>
    </>
  );
};

export default Home;
