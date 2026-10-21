
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer-logo" href="#home">
        Dharhell<span>.</span>
      </a>

      <p>
        Designed and built by Dharhell Cañete.
      </p>

      <p className="footer-copyright">
        © {new Date().getFullYear()} Dharhell Cañete.
        All rights reserved.
      </p>

      <a className="footer-back-to-top" href="#home">
        Back to top ↑
      </a>
    </footer>
  );
}
