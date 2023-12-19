import githubLogo from "./assets/logos/github.png";
import linkedInLogo from "./assets/logos/linkedin.svg";
import resumelogo from "./assets/logos/resume.png";
import resume from "./assets/Ishaan_Resume.pdf";

import ImageCard from "./components/ImageCard";
import TimelineCard from "./components/TimelineCard.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { projects, experiences, educations } from "./content.jsx";

function App() {
  return (
    <>
      {/* <div>{NavBar()}</div> */}
      {/* <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Ishaan Gupta</h1>
      <p className="text_block">
        Highly motivated computer science graduate with a Bachelor's degree in
        Computer Science. Proficient in programming skills in languages such as
        Python, Java, and C as well as in software development methodologies and
        tools, like Agile and Git. Interested in Machine Learning and Natural
        Language Processing and their applications.
      </p>

      <p className="links">
        <a href="https://www.linkedin.com/in/its-ishaan/" target="_blank">
          <button>
            LinkedIn
            <img
              src={linkedInLogo}
              className="icon_LinkedIn"
              alt="LinkedIn logo"
            />
          </button>
        </a>
        <a href={resume} target="_blank">
          <button>
            Resume
            <img src={resumelogo} className="icon_Resume" alt="Resume logo" />
          </button>
        </a>
        <a href="https://github.com/IshaanG-1" target="_blank">
          <button>
            GitHub
            <img src={githubLogo} className="icon_GitHub" alt="GitHub logo" />
          </button>
        </a>
      </p>

      <hr className="hr" />

      <h2>Experience</h2>
      <ul className="card border-0">
        <div className="main-timeline-2">
          {experiences.map((experience) =>
            TimelineCard(
              experience.title,
              experience.info_str,
              experience.image,
              experience.desc,
              ""
            )
          )}
        </div>
      </ul>

      <hr className="hr" />

      <h2>Projects/Publications</h2>
      <div className="card border-0">
        {projects.map((project) =>
          ImageCard(project.title, project.text, project.image, project.url)
        )}
      </div>

      <hr className="hr" />

      <h2>Education</h2>
      <ul className="card border-0">
        <div className="timeline-with-icons">
          {educations.map((education) =>
            TimelineCard(
              education.title,
              education.info_str,
              "",
              education.desc,
              education.icon_image,
              education.pursuing_flag
            )
          )}
        </div>
      </ul>

      <hr className="hr" />

      <p className="footnote">
        Made by Ishaan Gupta using <a href="https://react.dev">React</a>
      </p>
    </>
  );
}

export default App;
