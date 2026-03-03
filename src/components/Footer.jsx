import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">🌿</span>
            <span className="footer-title">Git Masterclass</span>
          </div>
          <p className="footer-text">
            Master Git through interactive learning. Built for AWS/DevOps professionals.
          </p>
        </div>
        <div className="footer-links">
          <a href="#basics" className="footer-link">Basics</a>
          <a href="#visualizer" className="footer-link">Visualizer</a>
          <a href="#quiz" className="footer-link">Quiz</a>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Git Masterclass. All rights reserved. Learn Git the right way. Built with ❤️ by Dinesh kumar Nellore 
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
