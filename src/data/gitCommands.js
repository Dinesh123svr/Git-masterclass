export const gitCommands = [
  {
    id: 'init',
    icon: '🏗️',
    title: 'git init',
    subtitle: 'Starting your journey!',
    description: 'Initializes a new repository.',
    category: 'basic'
  },
  {
    id: 'add',
    icon: '🛒',
    title: 'git add',
    subtitle: 'Prep',
    description: 'Checking out. Puts files in the staging area.',
    category: 'basic'
  },
  {
    id: 'commit',
    icon: '📸',
    title: 'git commit',
    subtitle: 'Stage',
    description: 'The snapshot. Saves a permanent version locally.',
    category: 'basic'
  },
  {
    id: 'push',
    icon: '☁️',
    title: 'git push',
    subtitle: 'Cloud',
    description: 'Going remote. Sends local data to GitHub/AWS.',
    category: 'basic'
  },
  {
    id: 'branch',
    icon: '🌿',
    title: 'git branch',
    subtitle: 'Workflow',
    description: 'Parallel worlds. Create separate paths for features.',
    category: 'advanced'
  },
  {
    id: 'checkout',
    icon: '🏃',
    title: 'git checkout',
    subtitle: 'Navigate',
    description: 'Time travel. Switch between your branches.',
    category: 'advanced'
  },
  {
    id: 'merge',
    icon: '🤝',
    title: 'git merge',
    subtitle: 'Integrate',
    description: 'Teamwork. Combine your branch changes back.',
    category: 'advanced'
  },
  {
    id: 'pull',
    icon: '📥',
    title: 'git pull',
    subtitle: 'Sync',
    description: 'Syncing up. Get the latest code from GitHub.',
    category: 'advanced'
  },
  {
    id: 'clone',
    icon: '👥',
    title: 'git clone',
    subtitle: 'Download',
    description: 'Copy cat. Download a repository to your PC.',
    category: 'advanced'
  },
  {
    id: 'log',
    icon: '📜',
    title: 'git log',
    subtitle: 'History',
    description: 'History book. See all your previous commits.',
    category: 'history'
  },
  {
    id: 'diff',
    icon: '🔍',
    title: 'git diff',
    subtitle: 'Compare',
    description: 'Spot the change. See what\'s different in your code.',
    category: 'history'
  },
  {
    id: 'reset',
    icon: '⏪',
    title: 'git reset',
    subtitle: 'Undo',
    description: 'Undo button. Go back to a previous state.',
    category: 'undo'
  },
  {
    id: 'status',
    icon: '📊',
    title: 'git status',
    subtitle: 'Monitor',
    description: 'The checkpoint. See what\'s modified or staged.',
    category: 'basic'
  },
  {
    id: 'revert',
    icon: '🔄',
    title: 'git revert',
    subtitle: 'Revert',
    description: 'Safety net. Undo a commit with a new one.',
    category: 'undo'
  }
];

export const workflowSteps = [
  { id: 'working', label: 'Working Directory', icon: '💻', color: '#ff6b6b' },
  { id: 'staging', label: 'Staging Area', icon: '📦', color: '#feca57' },
  { id: 'local', label: 'Local Repo', icon: '🗄️', color: '#48dbfb' },
  { id: 'remote', label: 'GitHub Cloud', icon: '☁️', color: '#1dd1a1' }
];

export const basicFlowCommands = [
  { command: 'git add .', description: 'Stage all changes' },
  { command: 'git commit -m "..."', description: 'Commit with message' },
  { command: 'git push', description: 'Push to remote' },
  { command: 'git status', description: 'Check status' }
];

export const advancedFlowCommands = [
  { command: 'git branch dev', description: 'Create dev branch' },
  { command: 'git checkout dev', description: 'Switch to dev' },
  { command: 'git merge dev', description: 'Merge dev branch' },
  { command: 'git pull', description: 'Pull latest changes' }
];

export const historyCommands = [
  { command: 'git log', description: 'View full history' },
  { command: 'git log --oneline', description: 'Compact history' },
  { command: 'git diff', description: 'Show differences' }
];

export const undoCommands = [
  { command: 'git reset --soft', description: 'Soft reset' },
  { command: 'git reset --hard', description: 'Hard reset' },
  { command: 'git revert', description: 'Revert commit' }
];
