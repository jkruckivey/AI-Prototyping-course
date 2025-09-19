# AI Prototyping Course - Claude Code Reference

## Project Overview
Canvas LMS course development project converting Subject Matter Expert (SME) materials into self-paced AI/ML learning modules. The project transforms traditional course materials into an engaging, interactive Canvas LMS experience following strict accessibility and pedagogical standards.

## Repository
- **GitHub**: https://github.com/jkruckivey/AI-Prototyping-course.git
- **GitHub Pages**: https://jkruckivey.github.io/AI-Prototyping-course/
- **Local Path**: `C:\Users\jkruck\Ivey Business School\EdTech Lab - Documents\Github\AI Prototyping Learn`

## Project Structure
```
├── Course Materials/       # Original SME content organized by weeks
├── Development Files/      # 5-week structured HTML pages for Canvas LMS
│   ├── Week 1/            # AI fundamentals and importance
│   ├── Week 2/            # Supervised learning algorithms
│   ├── Week 3/            # Unsupervised learning and preprocessing
│   ├── Week 4/            # Model evaluation and business metrics
│   └── Week 5/            # Deployment and governance
├── demos/
│   ├── widgets/           # 60+ interactive Canvas-embeddable widgets
│   │   └── ivey-widget-base.css  # Universal widget stylesheet
│   └── shared-demo.css    # Shared styles for main demos
├── archive/               # Legacy Canvas pages and experiments
├── amba template.html     # Master accessibility-compliant template
├── index.html            # Course hub landing page
├── styles.css            # Course hub styling
└── Documentation files   # Implementation guides and checklists
```

## Course Components

### Canvas LMS Pages (Development Files/)
- **Week 1**: AI importance, data understanding, machine learning models
- **Week 2**: Supervised learning (linear regression, logistic regression, KNN, SVM, etc.)
- **Week 3**: Unsupervised learning (clustering, PCA, preprocessing, recommendations)
- **Week 4**: Model evaluation, cross-validation, business metrics
- **Week 5**: Deployment, monitoring, governance

### Interactive Widgets (demos/widgets/)
- **60+ widgets** organized by weeks (w1-*, w2-*, w3-*, w4-*, w5-*)
- **Canvas-specific widgets** (canvas-*.html) for LMS embedding
- **AI Evolution Timeline**: Historical AI development exploration
- **AI Hierarchy Explorer**: Interactive AI → ML → Deep Learning relationships
- **ROI Calculator**: Business value calculation for AI projects
- **Algorithm Demonstrations**: Linear regression, logistic regression, K-means clustering
- **Business Applications**: Customer segmentation, data frameworks, infrastructure strategy
- **All widgets now use**: `ivey-widget-base.css` universal stylesheet

## Key Technologies
- **AMBA Template System** - Accessibility-compliant Canvas LMS structure
- **Canvas dp-framework** - Ivey's Canvas integration system
- **Plotly.js v2.28.0** - Interactive visualizations (standardized version)
- **Vanilla JavaScript** - No framework dependencies
- **GitHub Pages** - Widget hosting for Canvas embedding
- **Responsive Design** - Mobile-friendly breakpoints

## Styling System
- **AMBA Template**: Master template with accessibility compliance
- **Canvas Widget Templates**: Optimized for 450px max width Canvas embedding
- **Ivey Branding**:
  - Primary: `#034638` (Ivey Green)
  - Accent: `#582C83` (Ivey Purple)
  - Classification colors: `#dc2626` (Apple Red), `#f97316` (Orange), `#3b82f6` (Male Blue), `#ec4899` (Female Pink)
- **dp-wrapper Framework**: Canvas LMS integration structure
- **Responsive Design**: Mobile-friendly breakpoints with accessibility standards

## Canvas Integration Architecture

### AMBA Template Structure
- **Page Intro/Title Block** with learning objectives
- **Accordion Panels** for content organization
- **Interactive Widget Sections** with embedded iframes
- **Quick Check** sections for knowledge validation
- **Accessibility Features** (ARIA labels, keyboard navigation, screen reader support)

### Widget Embedding Pattern
```html
<div class="dp-content-block content-block">
  <h2 class="dp-has-icon"><i class="dp-icon fas fa-icon"></i>&nbsp;Widget Title</h2>
  <div class="dp-embed-wrapper">
    <iframe src="https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/widget-name.html"
            width="100%" height="480" frameborder="0"></iframe>
  </div>
</div>
```

## Adding New Content

### New Canvas Pages
1. Use `amba template.html` as base template
2. Follow dp-wrapper structure and accessibility guidelines
3. Place in appropriate `Development Files/Week X/` folder
4. Test accordion functionality and responsive design

### New Widgets
1. Create widget using `demos/widgets/canvas-widget-template.html`
2. Create AMBA version with `-amba.html` suffix
3. Optimize for 450px max width Canvas embedding
4. Test across devices and screen readers
5. Add embedding code to instructor templates
6. Update documentation guides

## Development Commands
```bash
# Navigate to project
cd "C:\Users\jkruck\Ivey Business School\EdTech Lab - Documents\Github\AI Prototyping Learn"

# Check git status
git status

# Add and commit changes
git add .
git commit -m "Description of changes

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to GitHub (auto-deploys to GitHub Pages)
git push
```

## Testing
- **Canvas Integration Testing** - Test embedded widgets in Canvas LMS environment
- **Accessibility Testing** - Screen reader compatibility and keyboard navigation
- **Responsive Testing** - Mobile/tablet layouts within Canvas constraints
- **Cross-browser Testing** - Chrome, Firefox, Safari, Edge compatibility
- **Template Validation** - AMBA template structure and dp-framework compliance

## Deployment
- **GitHub Pages** - Widgets automatically deployed at https://jkruckivey.github.io/AI-Prototyping-course/
- **Canvas LMS Integration** - HTML pages copied into Canvas modules
- **Widget Embedding** - iframes point to GitHub Pages URLs
- **Local Development** - Test widgets locally before Canvas integration

## Educational Features
- **Accordion-based Content** - Organized, accessible content panels
- **Interactive Widgets** - Hands-on learning with real-time feedback
- **Canvas LMS Integration** - Seamless embedding in course modules
- **Accessibility Compliance** - WCAG standards and screen reader support
- **Mobile Responsive** - Optimized for all device types
- **Progress Tracking** - Canvas LMS native progress monitoring

## Common Issues
- **Canvas Embedding** - Use exact iframe dimensions and GitHub Pages URLs
- **AMBA Template Compliance** - Maintain dp-wrapper structure and accessibility features
- **Widget Responsiveness** - Test 450px max width constraint in Canvas
- **Accessibility** - Ensure ARIA labels and keyboard navigation work
- **Cross-browser Canvas** - Test embedded widgets across different browsers

## Future Enhancements
- **Advanced Algorithms**: Neural networks, ensemble methods
- **Business Case Studies**: Industry-specific AI applications
- **Assessment Tools**: Interactive quizzes and Canvas-integrated assessments
- **Video Integration**: Embedded learning videos with widget synchronization
- **Analytics Dashboard**: Learning progress and engagement metrics

## Notes for Claude Code
- **AMBA Template Compliance**: Always use amba template.html as base for new Canvas pages
- **Widget Development**: Create both standalone and AMBA versions of widgets
- **Canvas Optimization**: Maintain 450px max width for embedded widgets
- **Accessibility Priority**: Test screen reader compatibility and keyboard navigation
- **Documentation Updates**: Update instructor guides and embedding templates
- **GitHub Pages Deployment**: Remember widgets auto-deploy for Canvas embedding
- **Course Material Workflow**: SME content → Development Files → Canvas LMS integration

## Changelog

### 2025-08-26: Accessibility Update - Color Contrast
- **Objective**: Improve readability and accessibility by fixing color contrast issues across the application.
- **Changes**:
  - Introduced new, higher-contrast color variables in `styles.css` and `demos/shared-demo.css` for text and UI elements.
  - Updated CSS rules to use the new color variables, ensuring compliance with WCAG AA standards.
  - Affected elements include subtitles, labels, metric values, and various colored text elements within the interactive demos.
  - The new colors are darker shades of the original brand palette to maintain the visual identity while improving readability.

### 2025-01-09: Universal Widget Stylesheet Implementation
- **Objective**: Create consistent design system across all 60+ course widgets
- **Status**: ✅ COMPLETED - All widgets converted to use universal stylesheet
- **Key Accomplishments**:
  - Created `demos/widgets/ivey-widget-base.css` - comprehensive 586-line universal stylesheet
  - Converted all Week 1-5 widgets to use external CSS (reduced embedded CSS by 80%+)
  - Fixed accessibility issues: removed purple-to-green gradients, ensured white text on green backgrounds
  - Standardized quiz heights to 900px for consistent Canvas embedding
  - Updated all Plotly CDN references from `plotly-latest` to `plotly-2.28.0` for stability
  - Added preventive contrast fixes to utility classes (.bg-primary, .bg-secondary, .bg-accent)

## Session Continuation Instructions (January 9, 2025)

### Current State
- **All widgets now use universal stylesheet** (`ivey-widget-base.css`)
- **Design system fully implemented** with Ivey brand colors and Figtree font
- **Accessibility compliance achieved** - WCAG AA contrast standards met
- **No critical issues remaining** - comprehensive analysis found no contrast violations

### Recent Work Completed
1. **Widget Stylesheet Conversion (Weeks 1-5)**: All 60 HTML widgets converted to use external CSS
2. **Contrast Issue Resolution**: Fixed potential black text on green background issues
3. **Gradient Removal**: Replaced purple-to-green gradients with solid Ivey green
4. **Preventive Fixes**: Added white text color to all colored background utility classes

### Known Issues & Notes
- **404 Errors**: Some widgets may show 404 when opened directly in browser (they're designed for Canvas LMS embedding)
- **File Count**: 58 HTML widget files + 2 CSS files in `demos/widgets/` directory
- **Canvas widgets**: Files starting with `canvas-` use different styling patterns (not yet converted to universal CSS)

### Next Potential Tasks
1. Consider converting remaining `canvas-*.html` widgets to use universal stylesheet
2. Add dark mode support using CSS variables already defined
3. Create widget documentation/catalog showing all available widgets
4. Test widgets within actual Canvas LMS environment
5. Consider creating widget preview/demo page

### File Locations
- **Widgets**: `C:\Users\jkruck\Ivey Business School\EdTech Lab - Documents\Github\AI Prototyping Learn\demos\widgets\`
- **Universal CSS**: `demos/widgets/ivey-widget-base.css`
- **Main demos**: `demos/` folder contains full algorithm demonstrations

### Git Commands for This Project
```bash
cd "C:\Users\jkruck\Ivey Business School\EdTech Lab - Documents\Github\AI Prototyping Learn"
git status
git add .
git commit -m "Your message here"
git push
```
