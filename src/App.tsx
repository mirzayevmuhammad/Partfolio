import { useState } from "react";
import "./index.css";
// import { HireMeModal } from "@/components/HireMeModal"
// import { LetsTalkModal } from "@/components/LetsTalkModal"

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <a href="#" className="logo">
          Muhammad.
        </a>
        <nav className="navbar">
          <a href="#" className="active">
            Home
          </a>
          <a onClick={() => setIsAboutOpen(true)}>About</a>
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume
          </a>
          <a href="#">Portfolio</a>
        </nav>
      </header>

      <section className="home">
        <div className="home-content">
          <h1>Hi, I'm Mirzayev Muhammad</h1>
          <h3>Fullstack Developer</h3>
          <p>
            I create responsive, fast, and modern web applications with
            technologies like React, NestJS, and PostgreSQL.
          </p>
          <div className="btn-box">
            <a href="#">Hire Me</a>
            <a onClick={() => setIsContactOpen(true)}>Let's Talk</a>
          </div>
        </div>

        <div className="home-sci">
          <a href="https://t.me/mirzayevmukhammad">
            <i className="bx bxl-telegram"></i>
          </a>
          <a href="https://linkedin.com/in/muhammad-mirzayev-306546369">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/mirzayevmuhammad">
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <div className="home-imgHover"></div>
      </section>

      {isContactOpen && (
        <div className="modal-overlay" onClick={() => setIsContactOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Contact Me</h2>
            <p>
              Email:{" "}
              <a href="mailto:mirzayevmuhammad207@gmail.com">
                mirzayevmuhammad207@gmail.com
              </a>
            </p>
            <p>
              Phone: <a href="tel:+998911174060">+998 91 117 40 60</a>
            </p>
            <p>
              Telegram:{" "}
              <a href="https://t.me/mirzayevmukhammad">@mirzayevmukhammad</a>
            </p>
            <button onClick={() => setIsContactOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {isAboutOpen && (
        <div className="modal-overlay" onClick={() => setIsAboutOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>About Me</h2>
            <p>
              I'm Mirzayev Muhammad, a Fullstack Developer from Farg'ona. I
              specialize in building modern web applications using ReactJS,
              NestJS, and PostgreSQL. I enjoy learning new technologies and
              constantly improving my skills.
            </p>
            <button onClick={() => setIsAboutOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}



export default App;



// export default function Hero() {
//   return (
//     <div className="flex gap-4">
//       <HireMeModal />
//       <LetsTalkModal />
//     </div>
//   )
// }



