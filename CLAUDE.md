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

## Accessibility Requirements

### WCAG 2.1 AA Compliance Standards
All course content and widgets must meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards for inclusive education.

### Visual Design Standards
#### **Color and Contrast**
- **Minimum contrast ratio**: 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold)
- **Color independence**: Information never conveyed by color alone
- **Brand colors tested**: All Ivey Green (`#034638`) and Purple (`#582C83`) combinations verified
- **Text on backgrounds**: White text on colored backgrounds, dark text on light backgrounds
- **Focus indicators**: Visible focus indicators for keyboard navigation (2px solid border)

#### **Typography**
- **Font family**: Figtree for primary text, system fonts as fallbacks
- **Minimum font size**: 14px for body text, 16px for interactive elements
- **Line height**: Minimum 1.5 for body text, 1.2 for headings
- **Text spacing**: Adequate margin and padding to prevent crowding
- **Responsive scaling**: Text scales appropriately across device sizes

### Keyboard Navigation Requirements
#### **Focus Management**
- **Logical tab order**: Sequential navigation through interactive elements
- **Visible focus indicators**: Clear visual indication of focused elements
- **Skip links**: "Skip to main content" links where appropriate
- **Keyboard shortcuts**: Pop-out functionality accessible via keyboard (Enter/Space on button)
- **No keyboard traps**: Users can navigate away from any focused element

#### **Interactive Elements**
- **Button accessibility**: All buttons have proper `role` and `aria-label` attributes
- **Form controls**: Proper labeling with `<label>` elements or `aria-labelledby`
- **Custom controls**: ARIA patterns for complex widgets (sliders, dropdowns)
- **Error handling**: Clear error messages associated with form fields

### Screen Reader Compatibility
#### **Semantic HTML Structure**
- **Proper heading hierarchy**: H1 → H2 → H3 progression without skipping levels
- **List markup**: `<ul>`, `<ol>`, `<li>` for grouped content
- **Table markup**: Proper `<th>`, `<td>`, `scope`, and `<caption>` elements
- **Form structure**: `<fieldset>` and `<legend>` for grouped form controls
- **Landmark roles**: `<main>`, `<nav>`, `<section>`, `<aside>` for page structure

#### **ARIA Implementation**
- **ARIA labels**: `aria-label` and `aria-labelledby` for non-text elements
- **ARIA descriptions**: `aria-describedby` for additional context
- **Live regions**: `aria-live` for dynamic content updates
- **State indicators**: `aria-expanded`, `aria-selected`, `aria-checked` for interactive states
- **Hidden content**: `aria-hidden="true"` for decorative elements

#### **Content Structure**
- **Page titles**: Descriptive `<title>` elements for each page
- **Headings**: Clear heading structure describing content hierarchy
- **Link text**: Descriptive link text (avoid "click here" or "read more")
- **Image alt text**: Meaningful alternative text for informative images
- **Decorative images**: Empty `alt=""` or `aria-hidden="true"` for decorative elements

### Widget-Specific Accessibility
#### **Interactive Widgets**
- **Chart accessibility**: Data tables or structured descriptions for Plotly visualizations
- **Control labeling**: Clear labels for sliders, dropdowns, and input controls
- **Status updates**: Screen reader announcements for calculation results
- **Error states**: Clear error messages and recovery instructions
- **Loading states**: Progress indicators and loading announcements

#### **Pop-out Functionality**
- **Button labeling**: "Open in full window" title and accessible text
- **Window management**: Proper focus management when opening new windows
- **Return navigation**: Clear path back to original context
- **Keyboard support**: Full keyboard accessibility in pop-out windows

### Canvas LMS Integration Accessibility
#### **AMBA Template Compliance**
- **dp-wrapper structure**: Maintains accessibility hierarchy
- **Accordion patterns**: Proper ARIA implementation for collapsible content
- **Icon usage**: Icons paired with text labels, not standalone
- **Progress indicators**: Accessible progress tracking
- **Module navigation**: Clear navigation between course sections

#### **Iframe Considerations**
- **Title attributes**: Descriptive titles for embedded widget iframes
- **Focus management**: Proper focus handling within iframes
- **Escape mechanisms**: Pop-out buttons provide iframe escape routes
- **Content warnings**: Notifications about embedded content behavior

### Mobile and Responsive Accessibility
#### **Touch Targets**
- **Minimum size**: 44x44px touch targets for interactive elements
- **Adequate spacing**: Minimum 8px between adjacent touch targets
- **Gesture alternatives**: Alternative access methods for gesture-based interactions
- **Orientation support**: Content adapts to portrait and landscape modes

#### **Responsive Design**
- **Zoom support**: Content readable and functional at 200% zoom
- **Reflow**: Content reflows without horizontal scrolling up to 320px width
- **Text scaling**: Interface remains functional with large text settings
- **Contrast maintenance**: Color contrast preserved across all screen sizes

### Testing Requirements
#### **Automated Testing**
- **WAVE accessibility scanner**: Regular automated accessibility audits
- **Axe DevTools**: Browser extension testing during development
- **Lighthouse accessibility**: Google Lighthouse accessibility scoring
- **Color contrast analyzers**: WebAIM and Colour Contrast Analyser tools

#### **Manual Testing**
- **Screen reader testing**: NVDA (Windows), JAWS, VoiceOver (Mac), TalkBack (Android)
- **Keyboard-only navigation**: Complete functionality without mouse
- **High contrast mode**: Windows High Contrast and macOS Increase Contrast
- **Browser zoom testing**: 200% zoom functionality verification
- **Mobile accessibility**: Testing with mobile screen readers

#### **User Testing**
- **Assistive technology users**: Testing with actual users of screen readers
- **Motor disability testing**: Testing with users who rely on keyboard navigation
- **Cognitive accessibility**: Testing with users who have learning differences
- **Low vision testing**: Testing with users who use magnification software

### Documentation and Compliance
#### **Accessibility Statements**
- **VPAT (Voluntary Product Accessibility Template)**: Compliance documentation
- **Accessibility conformance**: WCAG 2.1 AA conformance statements
- **Known limitations**: Documentation of any accessibility barriers
- **Contact information**: How to report accessibility issues

#### **Development Guidelines**
- **Code review checklist**: Accessibility review points for all code changes
- **Design system compliance**: Ensuring all components meet accessibility standards
- **Third-party evaluation**: Regular professional accessibility audits
- **Remediation timeline**: Process for addressing identified accessibility issues

### Legal and Institutional Requirements
#### **Compliance Standards**
- **AODA (Ontario)**: Accessibility for Ontarians with Disabilities Act compliance
- **Section 508 (US)**: Federal accessibility standards for educational content
- **EN 301 549 (EU)**: European accessibility standard for digital content
- **Ivey Business School policies**: Institution-specific accessibility requirements

#### **Documentation Requirements**
- **Accessibility testing reports**: Regular documentation of accessibility status
- **Remediation tracking**: Progress reports on accessibility improvements
- **User feedback integration**: Process for incorporating accessibility feedback
- **Training documentation**: Accessibility training for content creators

## Testing
- **Canvas Integration Testing** - Test embedded widgets in Canvas LMS environment
- **Accessibility Testing** - Comprehensive WCAG 2.1 AA compliance validation
- **Screen Reader Testing** - NVDA, JAWS, VoiceOver, and TalkBack compatibility
- **Keyboard Navigation Testing** - Complete functionality without mouse interaction
- **Responsive Testing** - Mobile/tablet layouts within Canvas constraints
- **Cross-browser Testing** - Chrome, Firefox, Safari, Edge compatibility
- **Template Validation** - AMBA template structure and dp-framework compliance
- **High Contrast Testing** - Windows High Contrast and macOS Increase Contrast modes
- **Zoom Testing** - 200% browser zoom functionality verification

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
- **Accessibility Priority**: WCAG 2.1 AA compliance is mandatory - test screen reader compatibility, keyboard navigation, color contrast, and semantic HTML structure
- **Pop-out Functionality**: Ensure all new widgets include pop-out button with proper ARIA labeling
- **Documentation Updates**: Update instructor guides, embedding templates, and accessibility documentation
- **GitHub Pages Deployment**: Remember widgets auto-deploy for Canvas embedding
- **Course Material Workflow**: SME content → Development Files → Canvas LMS integration
- **Accessibility Testing**: Use WAVE, axe DevTools, and manual screen reader testing for all changes
- **Semantic HTML**: Maintain proper heading hierarchy (H1→H2→H3), use landmark roles, and ensure keyboard navigation
- **Color Compliance**: All text must meet 4.5:1 contrast ratio, never rely on color alone for information
- **Mobile Accessibility**: 44x44px minimum touch targets, support for 200% zoom, landscape/portrait orientation

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

### 2025-09-30: Widget Bug Fixes and SCORM Package Updates
- **Objective**: Fix critical widget display issues and ensure consistent functionality across all versions
- **Status**: ✅ COMPLETED - Multiple widget fixes and SCORM packages updated
- **Key Accomplishments**:
  - **Fixed customer segmentation flip card text overlap**: Added `visibility: hidden` to prevent "Click to see strategy" text bleeding through flipped cards
  - **Fixed customer segmentation text alignment**: Added explicit `text-align: center` and improved line spacing for all back card content
  - **Redesigned AI hierarchy widget**: Replaced problematic concentric circles with side-by-side card layout to eliminate click accessibility issues
  - **Fixed broken evaluation widget iframe**: Replaced non-functional external SCORM reference (package 49236) with working threshold explorer widget
  - **Corrected funky hierarchy notation**: Changed confusing `AI &sup; ML &sup; DL` to clear `AI → ML → DL Hierarchy`
  - **Fixed SCORM Connected button issue**: Created updated SCORM package for evaluation warmup widget to use standard pop-out button
  - **Applied fixes to all widget variants**: Ensured consistency across main widgets, Week folders, SCORM versions, and IBS variants

### SCORM Packages Created/Updated
- `w1-understanding-data-segments-scorm-FIXED.zip` - Text overlap fix
- `w1-understanding-data-segments-scorm-FINAL-FIX.zip` - Comprehensive fix
- `w1-understanding-data-segments-scorm-ALIGNMENT-FIXED.zip` - Text alignment fix
- `ai-hierarchy-scorm-FIXED.zip` - Initial hierarchy fix attempt
- `ai-hierarchy-scorm-FIXED-v2.zip` - Click accessibility improvements
- `ai-hierarchy-scorm-REDESIGNED.zip` - Complete card-based redesign
- `w4-eval-warmup-FIXED.zip` - Evaluation warmup with standard pop-out button

### Files Updated
- **Customer Segmentation Widgets**: 5 files updated with text overlap and alignment fixes
- **AI Hierarchy Widget**: Complete redesign from concentric circles to card layout
- **Canvas Pages**: Fixed broken iframe references and corrected notation
- **SCORM Packages**: Multiple packages updated for Canvas deployment

## Session Continuation Instructions (September 30, 2025)

### Current State
- **All 79 widgets equipped with pop-out functionality** - Users can escape Canvas iframe constraints
- **Universal stylesheet implemented** - `ivey-widget-base.css` provides consistent design system
- **Flat file structure maintained** - All widgets in `demos/widgets/` for Canvas embedding compatibility
- **Comprehensive documentation created** - `WIDGET_INVENTORY.md` catalogs all widgets by type and week
- **Accessibility compliance achieved** - WCAG AA contrast standards met across all widgets
- **Widget display issues resolved** - Text overlap, alignment, and click accessibility problems fixed
- **SCORM packages updated** - Multiple packages available for Canvas deployment with latest fixes

### Recent Work Completed (September 30, 2025)
1. **Customer Segmentation Widget Fixes**: Resolved text overlap and alignment issues across all 5 versions
2. **AI Hierarchy Widget Redesign**: Complete overhaul from problematic concentric circles to accessible card layout
3. **Canvas Page Corrections**: Fixed broken iframe references and improved notation clarity
4. **SCORM Package Updates**: Created 7 new/updated SCORM packages ready for Canvas deployment
5. **Cross-Version Consistency**: Ensured fixes applied to main widgets, Week folders, SCORM versions, and IBS variants

### Widget Inventory Summary
- **79 Total Widgets**: Algorithm demos, quizzes, business tools, evaluation widgets
- **5 Week Categories**: w1-*, w2-*, w3-*, w4-*, w5-* plus canvas-* and legacy versions
- **Universal Features**: Pop-out buttons, responsive design, accessibility compliance
- **Technical Stack**: Vanilla JavaScript, Plotly.js v2.28.0, Ivey branding system

### Next Potential Tasks
1. **Accessibility Audit**: Comprehensive WCAG 2.1 AA compliance testing across all 79 widgets
2. **Screen Reader Testing**: Systematic testing with NVDA, JAWS, and VoiceOver
3. **Keyboard Navigation Validation**: Ensure all interactive elements are keyboard accessible
4. **Color Contrast Verification**: Automated testing of all color combinations
5. **Mobile Accessibility Testing**: Touch target sizing and gesture alternative validation
6. Test pop-out functionality across different browsers and Canvas environments
7. Add dark mode support using CSS variables already defined
8. Create widget preview/demo page for quick testing
9. Implement analytics tracking for widget usage patterns
10. Consider adding keyboard shortcuts for pop-out functionality

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
