import chokidar from 'chokidar';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Agent File Watcher for AI Prototyping Learn
 *
 * Automatically runs agents when files are saved
 * - Widget HTML changes trigger Plotly validation and widget tests
 * - Week content changes trigger pedagogy reviews
 * - Debounced to avoid multiple runs on rapid saves
 */

// Configuration
const DEBOUNCE_MS = 3000; // Wait 3 seconds after last change before running

// Watch directories directly (better Windows compatibility)
const projectRoot = path.resolve(__dirname, '..');
const WATCH_PATHS = [
  path.join(projectRoot, 'demos'),
  path.join(projectRoot, 'Week-1'),
  path.join(projectRoot, 'Week-2'),
  path.join(projectRoot, 'Week-3'),
  path.join(projectRoot, 'Week-4'),
  path.join(projectRoot, 'Week-5'),
  path.join(projectRoot, 'assets')
];

// Agent selection based on file type
const AGENT_MAP = {
  widget: ['accessibility-auditor.js', 'plotly-validator.js', 'widget-tester.js'],
  week: ['ml-pedagogy-checker.js'],
  styles: ['branding-checker.js']
};

// Track pending runs
const pendingRuns = new Map();

console.log('🔍 Agent File Watcher Started\n');
console.log('Watching:', WATCH_PATHS.join('\n         '));
console.log('\n📋 Auto-run configuration:');
console.log('  • Widget files → Accessibility, Plotly Validation, Widget Test');
console.log('  • Week content → ML Pedagogy Review');
console.log('  • Style files → Branding Check');
console.log('\n⏱️  Debounce: 3 seconds (agents run 3s after last file save)\n');
console.log('Press Ctrl+C to stop watching\n');

// Initialize watcher
console.log('📂 Project root:', projectRoot);
console.log('📁 Watching directories:');
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
  // Normalize path separators
  const normalizedPath = filePath.replace(/\\/g, '/');

  // Only watch specific file types
  const ext = path.extname(filePath);
  if (!['.html', '.css', '.js'].includes(ext)) {
    return null;
  }

  if (normalizedPath.includes('/widgets/') || normalizedPath.includes('/demos/')) {
    return 'widget';
  } else if (normalizedPath.includes('Week-')) {
    return 'week';
  } else if (ext === '.css') {
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
