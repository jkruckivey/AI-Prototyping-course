# AI Agents for AI Prototyping Learn

Custom Claude AI agents tailored for the AI Prototyping Learn course with 60+ interactive ML widgets.

## 🤖 Available Agents

### Universal Agents (All Projects)
1. **Accessibility Auditor** - WCAG 2.1 AA compliance checker
2. **Branding Checker** - Ivey design system enforcer (#034638 green, #582C83 purple)
3. **Widget Tester** - Interactive functionality and calculation tester

### AI/ML Specific Agents
4. **Plotly Validator** - Plotly.js v2.28.0 technical correctness and educational effectiveness
5. **ML Pedagogy Checker** - Learning progression and conceptual accuracy for ML education

## 🚀 Quick Start

### Setup
Your `.env` file with API key is already configured!

### Run Individual Agents
```bash
cd .agents

# Check accessibility
node accessibility-auditor.js "../demos/widgets/linear-regression.html"

# Validate Plotly implementation
node plotly-validator.js "../demos/widgets/linear-regression.html"

# Review ML pedagogy
node ml-pedagogy-checker.js "../Week-2/supervised-learning.html"

# Test widget functionality
node widget-tester.js "../demos/widgets/knn-classifier.html"

# Check branding consistency
node branding-checker.js "../demos/widgets/"
```

### Use NPM Scripts
```bash
cd .agents

# Validate single Plotly widget
npm run validate:plotly "../demos/widgets/linear-regression.html"

# Review pedagogy
npm run review:pedagogy "../Week-2/index.html"

# Test widget
npm run test:widget "../demos/widgets/pca-visualization.html"

# Audit all widgets (60+ files, takes time!)
npm run audit:all-widgets

# Validate all Plotly visualizations
npm run validate:all-plotly

# Audit specific week
WEEK=2 npm run audit:week
```

## 📊 Agent Capabilities

### Accessibility Auditor
**Checks:**
- WCAG 2.1 AA compliance
- Color contrast (Ivey green #034638, purple #582C83)
- Keyboard navigation for sliders/controls
- Screen reader support for dynamic updates
- Canvas LMS iframe compatibility

**Output:** `accessibility-report.md`

### Plotly Validator
**Checks:**
- Plotly.js v2.28.0 API correctness
- Educational visualization effectiveness
- ML/AI concept accuracy (regression, classification, clustering, etc.)
- Ivey design system colors in traces
- Interactive element performance (30+ fps)
- Canvas LMS embedding compatibility
- Export functionality (PNG download)

**Output:** `plotly-validation-report.md`

### ML Pedagogy Checker
**Checks:**
- Learning progression (Week 1-5 complexity)
- ML conceptual accuracy (algorithms, parameters, metrics)
- Interactive learning design (cause-effect clarity)
- Pedagogical techniques (concrete→abstract, multiple representations)
- Student engagement potential
- Business context relevance
- Assessment alignment with outcomes

**Output:** `pedagogy-review-report.md`

Built for **Ivey Business School EdTech Lab** - AI Prototyping Learn Course
