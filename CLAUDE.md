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
- **79 widgets** in flat file structure for easy Canvas embedding
- **Universal Pop-out Functionality**: All widgets equipped with pop-out buttons for full-window viewing
- **Canvas-specific widgets** (canvas-*.html) for LMS embedding
- **AI Evolution Timeline**: Historical AI development exploration
- **AI Hierarchy Explorer**: Interactive AI → ML → Deep Learning relationships
- **ROI Calculator**: Business value calculation for AI projects
- **Algorithm Demonstrations**: Linear regression, logistic regression, K-means clustering
- **Business Applications**: Customer segmentation, data frameworks, infrastructure strategy
- **All widgets use**: `ivey-widget-base.css` universal stylesheet
- **Complete Inventory**: See `WIDGET_INVENTORY.md` for comprehensive widget catalog

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
- **Pop-out Functionality** - All widgets can break free from Canvas iframe constraints
- **Canvas LMS Integration** - Seamless embedding in course modules
- **Accessibility Compliance** - WCAG standards and screen reader support
- **Mobile Responsive** - Optimized for all device types
- **Progress Tracking** - Canvas LMS native progress monitoring

## Pop-out Button Implementation

### Universal Widget Enhancement
Every widget now includes a pop-out button that allows users to escape Canvas iframe size limitations and view widgets in a full browser window (1200x900px).

### Technical Implementation
```html
<!-- Pop-out button HTML -->
<button class="widget-popout-btn" id="popoutBtn" title="Open in full window">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
    <span>Pop Out</span>
</button>
```

### JavaScript Functionality
```javascript
// Pop-out functionality
document.getElementById('popoutBtn').addEventListener('click', function() {
    const currentUrl = window.location.href;
    const popoutUrl = currentUrl + (currentUrl.includes('?') ? '&' : '?') + 'standalone=true';

    const popoutWindow = window.open(
        popoutUrl,
        'WidgetPopout',
        'width=1200,height=900,resizable=yes,scrollbars=yes,status=yes'
    );

    if (popoutWindow) {
        popoutWindow.focus();
    }
});

// Check if in standalone mode
if (window.location.search.includes('standalone=true')) {
    document.body.classList.add('standalone-mode');
}
```

### CSS Styling
```css
.widget-popout-btn {
    position: fixed;
    top: 10px;
    right: 10px;
    background: var(--ivey-green);
    color: white;
    border: none;
    border-radius: 6px;
    padding: 8px 12px;
    cursor: pointer;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    transition: all 0.3s ease;
}

.standalone-mode .widget-popout-btn {
    display: none;
}
```

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
- **Objective**: Create consistent design system across all course widgets
- **Status**: ✅ COMPLETED - All widgets converted to use universal stylesheet
- **Key Accomplishments**:
  - Created `demos/widgets/ivey-widget-base.css` - comprehensive 586-line universal stylesheet
  - Converted all Week 1-5 widgets to use external CSS (reduced embedded CSS by 80%+)
  - Fixed accessibility issues: removed purple-to-green gradients, ensured white text on green backgrounds
  - Standardized quiz heights to 900px for consistent Canvas embedding
  - Updated all Plotly CDN references from `plotly-latest` to `plotly-2.28.0` for stability
  - Added preventive contrast fixes to utility classes (.bg-primary, .bg-secondary, .bg-accent)

### 2025-01-22: Universal Pop-out Button Implementation
- **Objective**: Add pop-out functionality to escape Canvas iframe constraints
- **Status**: ✅ COMPLETED - All 79 widgets equipped with pop-out buttons
- **Key Accomplishments**:
  - Added pop-out button to all widgets with consistent HTML template
  - Implemented JavaScript functionality for 1200x900px popup windows
  - Added standalone mode detection to hide buttons when already popped out
  - Maintained flat file structure in `demos/widgets/` for Canvas embedding compatibility
  - Created comprehensive widget inventory documentation (`WIDGET_INVENTORY.md`)
  - Ensured all CSS references work correctly in flat structure

## Session Continuation Instructions (January 22, 2025)

### Current State
- **All 79 widgets equipped with pop-out functionality** - Users can escape Canvas iframe constraints
- **Universal stylesheet implemented** - `ivey-widget-base.css` provides consistent design system
- **Flat file structure maintained** - All widgets in `demos/widgets/` for Canvas embedding compatibility
- **Comprehensive documentation created** - `WIDGET_INVENTORY.md` catalogs all widgets by type and week
- **Accessibility compliance achieved** - WCAG AA contrast standards met across all widgets

### Recent Work Completed
1. **Universal Pop-out Implementation**: Added pop-out buttons to all 79 widgets with JavaScript functionality
2. **File Structure Optimization**: Moved widgets back to flat structure to preserve Canvas iframe URLs
3. **CSS Path Updates**: Corrected all stylesheet references to work with flat structure
4. **Widget Inventory Documentation**: Created comprehensive catalog of all widgets with technical details
5. **CLAUDE.md Updates**: Added pop-out functionality documentation and updated project status

### Widget Inventory Summary
- **79 Total Widgets**: Algorithm demos, quizzes, business tools, evaluation widgets
- **5 Week Categories**: w1-*, w2-*, w3-*, w4-*, w5-* plus canvas-* and legacy versions
- **Universal Features**: Pop-out buttons, responsive design, accessibility compliance
- **Technical Stack**: Vanilla JavaScript, Plotly.js v2.28.0, Ivey branding system

### Next Potential Tasks
1. Test pop-out functionality across different browsers and Canvas environments
2. Add dark mode support using CSS variables already defined
3. Create widget preview/demo page for quick testing
4. Implement analytics tracking for widget usage patterns
5. Consider adding keyboard shortcuts for pop-out functionality

### File Locations
- **All Widgets**: `demos/widgets/*.html` (79 files in flat structure)
- **Universal CSS**: `demos/widgets/ivey-widget-base.css`
- **Widget Inventory**: `WIDGET_INVENTORY.md`
- **Course Pages**: `Development Files/Week X/` folders
- **Main demos**: `demos/` folder contains full algorithm demonstrations

### Git Commands for This Project
```bash
cd "C:\Users\jkruck\Ivey Business School\EdTech Lab - Documents\Github\AI Prototyping Learn"
git status
git add .
git commit -m "Your message here"
git push
```
