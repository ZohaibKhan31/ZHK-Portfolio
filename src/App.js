import logo from "./logo.svg";
import "./App.css";
import { TypeAnimation } from "react-type-animation";

function App() {
  const visitmysite = () => {
    window.location.href = "https://github.com/ZohaibKhan31";
  };

  return (
    <>
      <header>
        <nav>
          <div class="left">Zohaib's Portfolio</div>
          <div class="right"></div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section class="firstSection">
          <div class="leftSection">
            <div>
              Hi, My name is <span class="purple">Zohaib Hasan Khan </span>
            </div>
            <div>
              and I am a{" "}
              <TypeAnimation
                sequence={[
                  " Web Developer",
                  2000,
                  "Web Designer",
                  2000,
                  "Freelancer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <div class="buttons">
              <a href="MERN Resume.pdf">
                <button class="btn"> Download Resume</button>
              </a>
              <button class="btn" onClick={visitmysite}>
                Visit Github
              </button>
            </div>
          </div>

          <div class="rightSection">
            <img src="bg.png" alt="" />
          </div>
        </section>
        <hr />
        <section class="secondSection">
          <span class="text-grey">What I have done so far</span>
          <h1>Personal Projects</h1>

          <div class="box">
            <div class="vertical">
              <img class="image-top" src="developer.png" alt="" />
              <div class="vertical-title">
                Bus Reservation Online
              </div>
              <div class="vertical-desc">
                Bus Reservation Online is using JSP, HTML, bootstrap, JS and CSS
                for the frontend. It’s using Servlet to manage the server-side
                programming. To store the records it’s using MYSQL that is
                connected by JDBC driver. Front-End : JSP, Html, CSS, JS.
                Server: Tomcat 8.5. Server-side: Servlet. Back-end: MYSQL.
              </div>
            </div>

            <div class="vertical">
              <img class="image-top" src="developer.png" alt="" />
              <div class="vertical-title">Weather App </div>
              <div class="vertical-desc">
                Developed a dynamic and responsive Weather App using HTML, CSS,
                and JavaScript. Utilized modern design techniques to create
                visually appealing and modern interfaces. Technologies used
                HTML, CSS, API and Bootstrap to build the front-end components
                and styling of the Weather App. Integrated with external APIs to
                fetch and display real-time weather data. Utilized JavaScript to
                handle dynamic content, user interactions, and data
                manipulation.
              </div>
            </div>

            <div class="vertical">
              <img class="image-top" src="developer.png" alt="" />
              <div class="vertical-title">Food Delivery Website</div>
              <div class="vertical-desc">
                Designed and developed a cutting-edge, fully responsive Food
                Delivery Website using HTML and CSS to provide a seamless
                experience across different devices. Implemented comprehensive
                cross-browser compatibility testing and responsive design
                techniques to guarantee flawless user experiences across all
                modern web browsers and devices. Utilized modern design
                techniques to create visually appealing and modern interfaces.
              </div>
            </div>

            <div class="vertical">
              <img class="image-top" src="developer.png" alt="" />
              <div class="vertical-title">Brick Breaker Game </div>
              <div class="vertical-desc">
                Developed a GUI-based brick breaker game using Java and Swing
                library. Implemented game logic, graphics, and user
                interactions. Demonstrated proficiency in Java programming.
                Technologies used: Java, Swing.
              </div>
            </div>

            <div class="vertical">
              <img class="image-top" src="developer.png" alt="" />
              <div class="vertical-title">Gym Website</div>
              <div class="vertical-desc">
                Created fully responsive Gym Website Using HTML & CSS
                Implemented modern design techniques and optimized performance.
                Technologies used: HTML, CSS.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div class="footer">
          <div class="footer-first">
            <h3>Zohaib's Developer Portfolio</h3>
          </div>
          <div class="footer-second">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div class="footer-third">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div class="footer-fourth">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div class="footer-rights">
          Copyright © 2023 www.zohaibportfolio.com | All rights reserved
        </div>
      </footer>
    </>
  );
}

export default App;
