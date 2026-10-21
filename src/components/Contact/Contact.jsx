
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <p className="contact-eyebrow">GET IN TOUCH</p>

      <h2 className="contact-title">
        Let's Work <span>Together</span>
      </h2>

      <p className="contact-description">
        I'm open to opportunities where I can contribute my
        development and software testing experience while
        continuing to grow as a software developer.
      </p>

      <a
        className="contact-email"
        href="mailto:dharhellc@gmail.com"
      >
        dharhellc@gmail.com
      </a>

      <div className="contact-links">
        <a
          href="https://github.com/dharhellc"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/dharhell-ca%C3%B1ete-448a022ab/?isSelfProfile=true"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
