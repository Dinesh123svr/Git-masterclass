import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🌿</span>
          <span className="logo-text">Git Masterclass</span>
          <span className="logo-badge">AWS/DevOps Optimized</span>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('basics')} className="nav-link">Basics</button>
          <button onClick={() => scrollToSection('visualizer')} className="nav-link">Visualizer</button>
          <button onClick={() => scrollToSection('quiz')} className="nav-link">Quiz</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
