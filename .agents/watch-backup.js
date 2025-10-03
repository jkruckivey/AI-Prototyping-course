import chokidar from 'chokidar';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Agent File Watcher for Business of Marketing in Sport
 *
 * Automatically runs agents when files are saved
 * - HTML/CSS/JS changes trigger widget tests
 * - Module index.html changes trigger content reviews
 * - Debounced to avoid multiple runs on rapid saves
 */

// Configuration
const DEBOUNCE_MS = 3000; // Wait 3 seconds after last change before running

// Build absolute paths from current directory
const projectRoot = path.resolve(__dirname, '..');
const WATCH_PATHS = [
  path.join(projectRoot, 'modules/**/widgets/*.html'),
  path.join(projectRoot, 'modules/**/widgets/*.css'),
  path.join(projectRoot, 'modules/**/widgets/*.js'),
  path.join(projectRoot, 'modules/**/index.html'),
  path.join(projectRoot, 'assets/**/*.css')
];

// Agent selection based on file type
const AGENT_MAP = {
  widget: ['accessibility-auditor.js', 'widget-tester.js', 'canvas-lms-validator.js'],
  module: ['sports-content-reviewer.js'],
  styles: ['branding-checker.js']
};

// Track pending runs
const pendingRuns = new Map();

console.log('🔍 Agent File Watcher Started\n');
console.log('Watching:', WATCH_PATHS.join('\n         '));
console.log('\n📋 Auto-run configuration:');
console.log('  • Widget files → Accessibility, Widget Test, Canvas Validation');
console.log('  • Module pages → Content Review');
console.log('  • Style files → Branding Check');
console.log('\n⏱️  Debounce: 3 seconds (agents run 3s after last file save)\n');
console.log('Press Ctrl+C to stop watching\n');

// Initialize watcher
console.log('📂 Project root:', projectRoot);
console.log('📁 Full watch paths:');
WATCH_PATHS.forEach(p => console.log('   ', p));
console.log();

const watcher = chokidar.watch(WATCH_PATHS, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: true,
  awaitWriteFinish: {
    stabilityThreshold: 500,
    pollInterval: 100
  }
});

// Debug: Log when watcher is ready
watcher.on('ready', () => {
  console.log('✅ Watcher is ready and monitoring files');
  console.log('👀 Watching for changes...\n');
});

// Helper to determine agent type
function getAgentType(filePath) {
  if (filePath.includes('/widgets/') && !filePath.endsWith('index.html')) {
    return 'widget';
  } else if (filePath.endsWith('index.html')) {
    return 'module';
  } else if (filePath.match(/\.(css|scss)$/)) {
    return 'styles';
  }
  return null;
}

// Run agent with output
function runAgent(agentScript, filePath) {
  return new Promise((resolve) => {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🤖 Running: ${agentScript}`);
    console.log(`📄 File: ${filePath}`);
    console.log(`⏰ Time: ${new Date().toLocaleTimeString()}`);
    console.log('='.repeat(60));

    const agent = spawn('node', [agentScript, filePath], {
      cwd: __dirname,
      stdio: 'inherit'
    });

    agent.on('close', (code) => {
      if (code === 0) {
        console.log(`✅ ${agentScript} completed successfully\n`);
      } else {
        console.log(`⚠️  ${agentScript} exited with code ${code}\n`);
      }
      resolve();
    });

    agent.on('error', (err) => {
      console.error(`❌ Error running ${agentScript}:`, err.message);
      resolve();
    });
  });
}

// Queue and debounce agent runs
function scheduleAgentRun(filePath) {
  const agentType = getAgentType(filePath);
  if (!agentType) return;

  const agents = AGENT_MAP[agentType];
  const key = `${filePath}-${agentType}`;

  // Clear existing timeout for this file
  if (pendingRuns.has(key)) {
    clearTimeout(pendingRuns.get(key));
  }

  // Schedule new run
  const timeout = setTimeout(async () => {
    pendingRuns.delete(key);

    console.log(`\n📢 Change detected: ${path.basename(filePath)}`);
    console.log(`🎯 Running ${agents.length} agent(s)...`);

    // Run agents sequentially
    for (const agent of agents) {
      await runAgent(agent, filePath);
    }

    console.log(`\n✨ All agents completed for ${path.basename(filePath)}`);
    console.log(`👀 Watching for changes...\n`);
  }, DEBOUNCE_MS);

  pendingRuns.set(key, timeout);
  console.log(`⏱️  Change detected: ${path.basename(filePath)} (waiting ${DEBOUNCE_MS/1000}s...)`);
}

// Watch for file changes
watcher
  .on('change', (filePath) => {
    scheduleAgentRun(filePath);
  })
  .on('add', (filePath) => {
    console.log(`➕ New file detected: ${path.basename(filePath)}`);
    scheduleAgentRun(filePath);
  })
  .on('error', (error) => {
    console.error('❌ Watcher error:', error);
  });

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n👋 Stopping file watcher...');
  watcher.close();
  process.exit(0);
});
