
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">
          SOFTWARE DEVELOPER
        </p>

        <h1>
          Hi, I'm <span>Dharhell</span>
        </h1>

        <h2 className="hero-name">Cañete.</h2>

        <h3 className="hero-stack">
          C# Developer <span>|</span> .NET <span>|</span>{" "}
          Blazor <span>|</span> React
        </h3>

        <p className="hero-description">
          I build web applications, work with databases,
          and turn ideas into reliable software solutions.
          With a background in quality assurance, I focus
          on creating functional and reliable applications.
        </p>

        <div className="hero-actions">
          <a
            href="#projects"
            className="hero-btn hero-btn-primary"
          >
            View Projects <span>→</span>
          </a>

          <a
            href="#contact"
            className="hero-btn hero-btn-secondary"
          >
            Contact Me <span>✉</span>
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hero-image-glow"></div>

        <img
          src="/images/dharhell-cutout.png"
          alt="Dharhell Cañete"
          className="hero-image"
        />
      </div>
    </section>
  );
}
