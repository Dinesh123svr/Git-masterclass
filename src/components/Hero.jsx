import './Hero.css';

function Hero() {
  const scrollToBasics = () => {
    const element = document.getElementById('basics');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">⚡</span>
          <span>AWS/DevOps Optimized</span>
        </div>
        <h1 className="hero-title">
          Master Git Like a Pro
          <span className="rocket">🚀</span>
        </h1>
        <p className="hero-subtitle">
          Learn the secrets of version control through interactive 
          <span className="highlight"> "Live Action"</span> flow and stunning visual explanations.
        </p>
        <button className="hero-cta" onClick={scrollToBasics}>
          Start Learning
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </button>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">14</span>
          <span className="stat-label">Git Commands</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">15</span>
          <span className="stat-label">Quiz Questions</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">∞</span>
          <span className="stat-label">Possibilities</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
