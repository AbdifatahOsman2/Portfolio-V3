import { useEffect } from "react";
import { Link } from "@material-ui/core";
import { Button } from "@material-ui/core";

import bg from "../Assets/BG (1).png";
import p1 from '../Assets/Classes Page.png'
import p2 from "../Assets/Register-PageReg.png"
import p3 from "../Assets/Screenshot from 2022-01-12 21-45-41.jpg"
import p4 from "../Assets/Group 5 (1).png"
import p5 from "../Assets/Home.png"
import p6 from "../Assets/All-Posts-Page.png"
import Aos from "aos";
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 500,
    });
  }, []);

  return (
    <div className="content">
      <section id="top" className="section-one">
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
          <p id="projects">Here are a few projects I've worked on recently.</p>
        <div className="projects"> 
          <div className="project-1">
            <img src={p1}/>
            <div className="card_inner">
            <p>A redesigned website built for a client at a local mosque.</p>
            <Button className="btnOne" variant="contained" endIcon={<SendIcon />}>visit</Button>
            <Button href='https://github.com/AbdifatahOsman2/Masjid-Website' className="btnTwo" variant="contained" endIcon={<GitHubIcon />}>github</Button>
            </div>
          </div>
          <div className="project-2">
            <img src={p2}/>
            <div className="card_inner">
            <p>A simple multi page blog app using Airtable as the backend API.</p>
            <Button href='https://naughty-bose-d09e35.netlify.app/' className="btnOne" variant="contained" endIcon={<SendIcon />}>visit</Button>
            <Button href='https://github.com/AbdifatahOsman2/Tofus-Anime' className="btnTwo" variant="contained" endIcon={<GitHubIcon />}>github</Button>
            </div>
          </div>
          <div className="project-3">
            <img src={p3}/>
            <div className="card_inner">
            <p>A routing and communication application for truckers and dispatchers created with flask python as backend.</p>
            <Button href='https://osman-express.netlify.app/' className="btnOne" variant="contained" endIcon={<SendIcon />}>visit</Button>
            <Button href='https://github.com/AbdifatahOsman2/Osman-Express' className="btnTwo" variant="contained" endIcon={<GitHubIcon />}>github</Button>
            </div>
          </div>
          <div className="project-4">
            <img src={p4}/>
            <div className="card_inner">
            <p>My first React native app with page routing and displaying data from API.</p>
            <Button className="btnOne" variant="contained" endIcon={<SendIcon />}>visit</Button>
            <Button href='https://github.com/AbdifatahOsman2/React-Native-Anime-search-API' className="btnTwo" variant="contained" endIcon={<GitHubIcon />}>github</Button>
            </div>
          </div>
          {/* <div className="project-5">
            <img src={p5}/>
            <div className="card_inner">
            <p>Reprehenderit velit culpa commodo labore deserunt fugiat enim do nisi do est velit.</p>
            <Button className="btnOne" variant="contained" endIcon={<SendIcon />}>visit</Button>
            <Button className="btnTwo" variant="contained" endIcon={<GitHubIcon />}>github</Button>
            </div>
          </div>
          <div className="project-6">
            <img src={p6}/>
            <div className="card_inner">
            <p>Reprehenderit velit culpa commodo labore deserunt fugiat enim do nisi do est velit.</p>
            <Button className="btnOne" variant="contained" endIcon={<SendIcon />}>visit</Button>
            <Button className="btnTwo" variant="contained" endIcon={<GitHubIcon />}>github</Button>
            </div>
          </div> */}
        </div>
      </section>

      <section className="section-three">
      <div className="container">
          <h1 id="about-me">About Me</h1>
          <p>I am a full stack developer, passionate about creating unique web experiences to help grow your business. I love seeing code come to life while solving complex problems. Being a first generation graduate, I have a strong drive to succeed and overcome obstacles. A long-term goal of mine is to utilize my web development skills to create games that people will love to play.</p>
      </div>
      </section>

      <section className="section-four">
      <div className="heading"><h1>Skills</h1></div>
      <div className="card">
        <div className="front-end">
        <i id='code' class="fas fa-code"></i>
        <h1>Front-end skills</h1>
        <p>I enjoy creating simple and structural content with clean design patterns and thoughtful interactions.</p>
        <ul>
          <li>React</li>
          <li>React Native</li>
          <li>Javascript</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>MaterialUI</li>
          <li>Sass</li>
        </ul>
        </div>
        <div className="back-end">
        <i id="server" class="fas fa-server"></i>
        <h1>Back end skills</h1>
        <p>I genuinely love coding databases from scratch, and enjoy bringing data to the browser.</p>
        <ul>
          <li>REST/MySQL</li>
          <li>Node JS</li>
          <li>Express</li>
          <li>Python</li>
          <li>C#</li>
          <li>MongoDb</li>
        </ul>
        </div>

        <div className="other">
        <i id="design" class="fas fa-drafting-compass"></i>
        <h1>Other skills</h1>
        <p>On my down time I enjoy working with unity and C# to create small games. I also like to do some prototyping and design on Figma.</p>
        <ul>
          <li>GitHub</li>
          <li>Git</li>
          <li>Unity</li>
          <li>Figma</li>
          <li>Wireframing</li>
          <li>Prototyping</li>
        </ul>
        </div>
      </div>
      </section>
      <section className="section-five">
      <div className="container">
        <h1>Lets Connect!</h1>
        <p>I am available and active on these platforms and many more.I would love to connect and work with you!</p>
      </div>
      <div id="connect" className="btn-container">
      <Link href="https://www.linkedin.com/in/abdifatahothman/">
      <button className="btn1">  <i id="linkedIn" class="fab fa-linkedin"></i>  Connect on LinkedIn</button>
      </Link>
      <Link href="https://www.facebook.com/">
      <button className="btn2">  <i class="fab fa-facebook-square"></i>  Message me Facebook</button>
      </Link>
      <Link href="https://github.com/AbdifatahOsman2">
      <button className="btn3">  <i class="fab fa-github-square"></i>  Checkout my GitHub</button>
      </Link>
      <Link href="http://gmail.com/">
      <button className="btn4">  <i class="fas fa-envelope-square"></i> Send me an Email</button>
      </Link>
      </div>
      <Link href="#top">
      <i id="chevron" class="fas fa-chevron-up"></i>
      </Link>
      <p id="cp">Copyright © 2022 Abdifatah Osman</p>
      </section>
    </div>
  );
};

export default Home;


