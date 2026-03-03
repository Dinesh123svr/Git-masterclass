import { useState } from 'react';
import { workflowSteps, basicFlowCommands, advancedFlowCommands, historyCommands, undoCommands } from '../data/gitCommands';
import './Visualizer.css';

function Visualizer() {
  const [activeFlow, setActiveFlow] = useState('basic');
  const [terminalOutput, setTerminalOutput] = useState('Welcome to Git Bash. Type a command to start.');
  const [currentBranch, setCurrentBranch] = useState('master');
  const [activeStep, setActiveStep] = useState(null);

  const flowTypes = [
    { id: 'basic', label: 'Basic Flow', icon: '📋' },
    { id: 'advanced', label: 'Advanced Flow', icon: '🚀' },
    { id: 'history', label: 'History & Debug', icon: '🔍' },
    { id: 'undo', label: 'Undo & Reset', icon: '↩️' }
  ];

  const getCommands = () => {
    switch (activeFlow) {
      case 'basic': return basicFlowCommands;
      case 'advanced': return advancedFlowCommands;
      case 'history': return historyCommands;
      case 'undo': return undoCommands;
      default: return basicFlowCommands;
    }
  };

  const handleCommandClick = (cmd) => {
    setTerminalOutput(`$ ${cmd.command}\n${getCommandOutput(cmd.command)}`);
    
    // Animate workflow step
    if (cmd.command.includes('add')) setActiveStep('staging');
    else if (cmd.command.includes('commit')) setActiveStep('local');
    else if (cmd.command.includes('push')) setActiveStep('remote');
    else if (cmd.command.includes('status')) setActiveStep('working');
    else setActiveStep(null);

    setTimeout(() => setActiveStep(null), 1500);
  };

  const getCommandOutput = (command) => {
    if (command.includes('add')) return 'Changes staged successfully.\nFiles ready to be committed.';
    if (command.includes('commit')) return `[${currentBranch} ${Math.random().toString(16).substr(2, 7)}] ${command.split('"')[1] || 'Update'}\n1 file changed, 10 insertions(+)`;
    if (command.includes('push')) return 'Enumerating objects: 5, done.\nWriting objects: 100% (5/5), 450 bytes | 450.00 KiB/s, done.\nTo github.com:user/repo.git\n   a1b2c3d..e4f5g6h  master -> master';
    if (command.includes('status')) return 'On branch master\nYour branch is up to date with \'origin/master\'.\n\nnothing to commit, working tree clean';
    if (command.includes('branch')) return `Switched to a new branch '${command.split(' ')[2]}'`;
    if (command.includes('checkout')) return `Switched to branch '${command.split(' ')[2]}'`;
    if (command.includes('merge')) return 'Merge made by the \'recursive\' strategy.\n file.txt | 5 +++++\n 1 file changed, 5 insertions(+)';
    if (command.includes('pull')) return 'Already up to date.';
    if (command.includes('log')) return 'commit a1b2c3d4e5f6 (HEAD -> master, origin/master)\nAuthor: Developer <dev@example.com>\nDate:   Tue Mar 3 10:00:00 2026\n\n    Initial commit';
    if (command.includes('diff')) return 'diff --git a/file.txt b/file.txt\n+ Added new feature\n- Removed old code';
    if (command.includes('reset')) return 'HEAD is now at a1b2c3d Initial commit';
    if (command.includes('revert')) return '[master a1b2c3d] Revert "Previous commit"\n 1 file changed, 1 deletion(-)';
    return 'Command executed successfully.';
  };

  return (
    <section id="visualizer" className="visualizer">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">🎮 Interactive</span>
          <h2 className="section-title">"Live Action" Visualizer</h2>
          <p className="section-subtitle">
            See Git workflows in action with our interactive terminal
          </p>
        </div>

        <div className="visualizer-content">
          {/* Workflow Diagram */}
          <div className="workflow-panel">
            <div className="panel-header">
              <span className="branch-badge">
                <span className="branch-icon">🌿</span>
                Branch: <strong>{currentBranch}</strong>
              </span>
              <span className="panel-title">AWS DevOps Terminal</span>
            </div>
            
            <div className="workflow-diagram">
              {workflowSteps.map((step, index) => (
                <div key={step.id} className="workflow-item">
                  <div 
                    className={`workflow-node ${activeStep === step.id ? 'active' : ''}`}
                    style={{ '--node-color': step.color }}
                  >
                    <span className="node-icon">{step.icon}</span>
                    <span className="node-label">{step.label}</span>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className={`workflow-arrow ${activeStep === step.id ? 'animate' : ''}`}>
                      <span>→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div className="terminal-panel">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="term-btn red"></span>
                <span className="term-btn yellow"></span>
                <span className="term-btn green"></span>
              </div>
              <span className="terminal-title">git bash</span>
            </div>
            <div className="terminal-body">
              <pre className="terminal-output">{terminalOutput}</pre>
            </div>
          </div>

          {/* Command Categories */}
          <div className="command-categories">
            {flowTypes.map(flow => (
              <button
                key={flow.id}
                className={`flow-tab ${activeFlow === flow.id ? 'active' : ''}`}
                onClick={() => setActiveFlow(flow.id)}
              >
                <span className="flow-icon">{flow.icon}</span>
                <span className="flow-label">{flow.label}</span>
              </button>
            ))}
          </div>

          {/* Command Buttons */}
          <div className="command-buttons">
            {getCommands().map((cmd, index) => (
              <button
                key={index}
                className="cmd-btn"
                onClick={() => handleCommandClick(cmd)}
              >
                <code className="cmd-text">$ {cmd.command}</code>
                <span className="cmd-desc">{cmd.description}</span>
              </button>
            ))}
          </div>

          <button 
            className="reset-btn"
            onClick={() => {
              setTerminalOutput('Workspace reset. Welcome to Git Bash.');
              setCurrentBranch('master');
            }}
          >
            <span>×</span> Reset Workspace
          </button>
        </div>
      </div>
    </section>
  );
}

export default Visualizer;
