import { useState } from 'react';
import { gitCommands } from '../data/gitCommands';
import './GitCommands.css';

function GitCommands() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Commands' },
    { id: 'basic', label: 'Basic' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'history', label: 'History' },
    { id: 'undo', label: 'Undo' }
  ];

  const filteredCommands = activeCategory === 'all' 
    ? gitCommands 
    : gitCommands.filter(cmd => cmd.category === activeCategory);

  return (
    <section id="basics" className="git-commands">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">📚 Fundamentals</span>
          <h2 className="section-title">Essential Git Commands</h2>
          <p className="section-subtitle">
            Master these commands to become proficient in version control
          </p>
        </div>

        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="commands-grid">
          {filteredCommands.map((cmd, index) => (
            <div 
              key={cmd.id} 
              className="command-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="command-icon">{cmd.icon}</div>
              <div className="command-content">
                <div className="command-header">
                  <h3 className="command-title">{cmd.title}</h3>
                  <span className="command-subtitle">{cmd.subtitle}</span>
                </div>
                <p className="command-description">{cmd.description}</p>
              </div>
              <div className="command-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GitCommands;
