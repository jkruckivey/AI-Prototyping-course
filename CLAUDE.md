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
│   │   └── widgets/       # Week 1 interactive widgets (canonical location)
│   ├── Week 2/            # Supervised learning algorithms
│   │   └── widgets/       # Week 2 interactive widgets (canonical location)
│   ├── Week 3/            # Unsupervised learning and preprocessing
│   │   └── widgets/       # Week 3 interactive widgets (canonical location)
│   ├── Week 4/            # GenAI/LLM fundamentals
│   │   └── widgets/       # Week 4 interactive widgets (canonical location)
│   └── Week 5/            # Data Science with GenAI
│       └── widgets/       # Week 5 interactive widgets (canonical location)
├── demos/
│   ├── widgets/           # Legacy location - DO NOT USE for new widgets
│   │   └── ivey-widget-base.css  # Universal widget stylesheet
│   └── shared-demo.css    # Shared styles for main demos
├── archive/               # Legacy Canvas pages and experiments
├── amba template.html     # Master accessibility-compliant template
├── index.html            # Course hub landing page
├── styles.css            # Course hub styling
└── Documentation files   # Implementation guides and checklists
```

**IMPORTANT**: All widgets belong in `Development Files/Week X/widgets/` folders, NOT in `demos/widgets/`. The Development Files structure is the canonical, authoritative location.

## Course Components

### Canvas LMS Pages (Development Files/)
- **Week 1**: AI importance, data understanding, machine learning models
- **Week 2**: Supervised learning (linear regression, logistic regression, KNN, SVM, etc.)
- **Week 3**: Unsupervised learning (clustering, PCA, preprocessing, recommendations)
- **Week 4**: Model evaluation, cross-validation, business metrics
- **Week 5**: Deployment, monitoring, governance

### Interactive Widgets (Development Files/Week X/widgets/)
- **Canonical location**: `Development Files/Week X/widgets/` folders
- **Universal Pop-out Functionality**: All widgets equipped with pop-out buttons for full-window viewing
- **Universal stylesheet**: `ivey-widget-base.css` in each week's widgets folder
- **Week 1 widgets**: AI Evolution Timeline, AI Hierarchy Explorer, ROI Calculator, Understanding Data Segments
- **Week 2 widgets**: Supervised learning algorithm demos (linear/logistic regression, KNN, SVM)
- **Week 3 widgets**: Unsupervised learning demos (K-means, PCA, recommendations)
- **Week 4 widgets**: GenAI/LLM concepts (inference parameters, prompt patterns, shot learning, fine-tuning vs RAG)
- **Week 5 widgets**: Data Science with GenAI (PAL, code interpreter, customization decision, JSONL formatter)
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

## 2025-10-02: Week 4 Complete Rebuild - Generative AI Content
- **Objective**: Rebuild all Week 4 development files to align with Generative AI/LLM course materials
- **Status**: ✅ COMPLETED - All 7 Week 4 HTML pages created with GenAI content
- **Background**: Week 4 development files contained traditional ML evaluation content (metrics, cross-validation, business metrics) while video transcripts covered Generative AI, LLMs, transformers, prompt engineering, fine-tuning, RAG, and AI agents - a complete mismatch
- **Key Accomplishments**:
  - **Created w_4_00_intro.html**: Week 4 orientation with learning outcomes, GenAI introduction, NLP tasks, and week roadmap
  - **Created w_4_01_genai_llms.html**: Comprehensive coverage of Generative AI definition, LLMs vs traditional ML, foundation models (GPT/Claude/Gemini/Llama), capabilities, computational requirements, and access models
  - **Created w_4_02_transformers.html**: Transformer architecture deep-dive including RNN limitations, self-attention mechanism, multi-head attention, tokenization, embeddings, positional encoding, encoder/decoder patterns, and inference parameters (temperature, top-k, top-p)
  - **Created w_4_03_prompt_engineering.html**: Prompt engineering fundamentals, zero/one/few-shot learning, proven prompt patterns (persona, audience, structure, cognitive verifier, question refinement), chain of thought, ReAct, and best practices
  - **Created w_4_04_finetuning_rag.html**: Fine-tuning methods (full fine-tuning, PEFT/LoRA, instruction fine-tuning, RLHF), catastrophic forgetting, RAG architecture and components, fine-tuning vs RAG decision framework
  - **Created w_4_05_agents.html**: AI agents fundamentals, core capabilities (planning, tool use, memory, reflection), agent architectures (ReAct, plan-and-execute, multi-agent, autonomous), business use cases, frameworks, and challenges
  - **Created w_4_wrap_up.html**: Week 4 summary with comprehensive recap, key takeaways (GenAI stack, decision framework), practical next steps, reflection questions, and Week 5 preview

### Content Alignment with Video Transcripts
- **CSV Mapping**: Aligned page structure with detailed video segment suggestions from `week 4 suggestions.csv`
- **Transcript Coverage**:
  - Video timestamps 0:00-6:41: GenAI intro, LLMs, foundation models, computational requirements
  - Video timestamps 6:42-18:29: Transformer architecture, RNN limitations, self-attention, encoder/decoder patterns
  - Video timestamps 19:25-1:04:53: GenAI stack, lifecycle, prompt engineering patterns and techniques
  - Video timestamps 1:04:54-1:13:17: Fine-tuning methods, RLHF, RAG, LLM evaluation
  - Video timestamps 1:16:46-1:22:41: AI agents and agentic AI
- **Reviewer Feedback Incorporated**: Applied suggestions from CSV including clearer GenAI vs LLM definitions, improved flow between sections, focused visuals

### Technical Features
- **AMBA Template Compliance**: All pages follow dp-wrapper structure with proper accessibility
- **Accordion Panels**: Content organized in collapsible sections for Canvas LMS
- **Comprehensive Tables**: Comparison tables for LLMs vs traditional ML, fine-tuning vs RAG, agent architectures
- **Business Focus**: Extensive business use cases, decision frameworks, and practical applications throughout
- **Interactive Widget Placeholders**: Pages reference future widgets for prompt parameter adjustment, RAG visualization, agent reasoning chains

### Files Replaced
- Old w_4_00_intro.html (evaluation/metrics intro) → New w_4_00_intro.html (GenAI overview)
- Old w_4_01_metrics_fit.html (bias/variance, MSE/RMSE) → New w_4_01_genai_llms.html (GenAI, LLMs, foundation models)
- Old w_4_02_cross_validation_training.html (CV patterns, hyperparameter tuning) → New w_4_02_transformers.html (Transformer architecture)
- Old w_4_03_business_metrics.html (cost matrices, expected value) → New w_4_03_prompt_engineering.html (Prompt patterns, CoT, ReAct)
- Old w_4_04_mini_case.html (fraud detection case) → New w_4_04_finetuning_rag.html (Fine-tuning, PEFT, RAG)
- New w_4_05_agents.html (AI agents - no previous equivalent)
- Old w_4_wrap_up.html (metrics/CV review) → New w_4_wrap_up.html (GenAI week summary)

### Next Steps
- **Widget Development**: Create interactive widgets for inference parameters, prompt pattern examples, RAG visualization, agent reasoning flows
- **SCORM Packaging**: Package new Week 4 pages for Canvas LMS deployment
- **Testing**: Validate all accordion functionality, accessibility compliance, and Canvas embedding

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
## 2025-10-01: Week 1 Wrap-Up Video Embed
- **Objective**: Add 'Completing the Data Science Cycle' video to Week 1 wrap-up page
- **Changes**: Embedded Panopto video iframe at top of w_1_wrap_up.html before Quick Recap section
- **Video Content**: Deployment, model selection, training/testing data, evaluation metrics, AI building blocks summary

## 2025-10-02: Week 4 Widget Development, Embedding, and Consistency Updates
- **Objective**: Create interactive widgets for Week 4 GenAI content, embed them in HTML pages, ensure cross-course consistency, and organize widgets in Development Files structure
- **Status**: ✅ COMPLETED - 4 widgets created, embedded, and organized; intro page standardized
- **Widgets Created**:
  - **w4-inference-params.html** (800px height): Interactive exploration of LLM inference parameters
    - Temperature slider (0-2) with real-time softmax probability visualization
    - Top-k slider (1-100) for token selection limiting
    - Top-p slider (0-1) for nucleus sampling
    - 5 preset configurations: Factual Q&A, Code Generation, Chatbot, Creative Writing, Brainstorming
    - Shows next-token prediction with example sentence completion
    - Embedded in **w_4_02_transformers.html** (inference parameters section)

  - **w4-prompt-patterns.html** (900px height): Showcase of 6 proven prompt engineering patterns
    - Persona Pattern: Act as specific role/expert
    - Audience Pattern: Target specific audience level
    - Structure/Format Pattern: Define output structure
    - Cognitive Verifier Pattern: Break into sub-questions
    - Constraint Pattern: Define explicit limitations
    - Chain of Thought Pattern: Show step-by-step reasoning
    - Each pattern includes: before/after examples, template, explanation, example response, key insight
    - Embedded in **w_4_03_prompt_engineering.html** (prompt patterns section)

  - **w4-shot-learning.html** (800px height): Compare zero/one/few-shot learning approaches
    - 3 task examples: Sentiment Analysis, Entity Extraction, Support Ticket Classification
    - Interactive task selector with shot count buttons (0, 1, Few)
    - Shows complete prompt construction for each approach
    - Expected output examples for each learning type
    - Comparison cards with pros/cons and best use cases
    - Embedded in **w_4_03_prompt_engineering.html** (shot learning section)

  - **w4-finetuning-vs-rag.html** (900px height): Interactive decision tool for customization approach
    - 4-question questionnaire covering: primary goal, update frequency, data type, source citation needs
    - Scoring system calculates recommendations for fine-tuning, RAG, or combined approach
    - Personalized recommendation with implementation approach and examples
    - Cost considerations and trade-offs explained
    - Comprehensive comparison table included
    - Embedded in **w_4_04_finetuning_rag.html** (decision framework section)

- **Quiz Widget Removed**: User confirmed w4-wrap-quiz.html not needed (scrapped per request)

### Widget Embedding Locations
- **w_4_02_transformers.html**: Added inference parameters widget before "Helpful Tip" section
- **w_4_03_prompt_engineering.html**: Added shot learning widget after shot learning theory section, prompt patterns widget after ReAct section
- **w_4_04_finetuning_rag.html**: Added fine-tuning vs RAG decision tool before comparison table

### Technical Implementation
- All widgets use `ivey-widget-base.css` universal stylesheet
- Pop-out functionality included in all widgets
- Proper ARIA labels and accessibility compliance
- Responsive design for Canvas LMS embedding
- Local relative URLs for iframe sources (`widgets/widget-name.html`)

### Files Modified and Created
- **Development Files/Week 4/w_4_00_intro.html**: Standardized to match Week 1 format (removed learning outcomes, updated structure)
- **Development Files/Week 4/w_4_02_transformers.html**: Added 1 widget embed, updated iframe URL to local path
- **Development Files/Week 4/w_4_03_prompt_engineering.html**: Added 2 widget embeds, updated iframe URLs to local paths
- **Development Files/Week 4/w_4_04_finetuning_rag.html**: Added 1 widget embed, updated iframe URL to local path
- **Development Files/Week 4/widgets/** (folder created): Contains 4 new GenAI widgets + legacy widgets from previous evaluation-focused Week 4

### Alignment with Course Content
- Inference parameters widget directly supports temperature/top-k/top-p learning objectives
- Shot learning widget provides hands-on comparison of zero/one/few-shot techniques
- Prompt patterns widget reinforces 6 proven patterns with interactive examples
- Fine-tuning vs RAG decision tool helps students make informed customization choices

### Course Consistency Updates
- **Removed Learning Outcomes Section**: Week 4 intro page now matches Week 1-3 format (no standalone learning outcomes)
- **Updated Intro Structure**: Changed to "What this week is about" format consistent with other weeks
- **Standardized Heading Hierarchy**: Changed h2/h3 to h3/h4 for readiness checklist sections to match Week 1 pattern
- **Simplified Warm-up Section**: Moved warm-up to match Week 1-3 placement and structure
- **Consistent "Heads up" Callouts**: Aligned admin callout language with other weeks

### Widget Organization and File Structure
- **Created Development Files/Week 4/widgets/ folder**: All Week 4 widgets now stored locally alongside HTML pages
- **Copied 4 new GenAI widgets** to Development Files/Week 4/widgets/:
  - w4-inference-params.html
  - w4-shot-learning.html
  - w4-prompt-patterns.html
  - w4-finetuning-vs-rag.html
- **Updated iframe references**: Changed from GitHub Pages URLs to relative local paths (`widgets/widget-name.html`)
- **Matches Week 1 structure**: Development Files/Week 1/widgets/ contains 9 widgets; Week 4 now follows same pattern
- **Note**: demos/widgets/ folder still contains original copies for GitHub Pages deployment; Development Files versions are canonical

### Benefits of Local Widget Storage
- **Consistency**: Widgets in Development Files are canonical/most up-to-date versions (per user requirement)
- **Portability**: Week 4 HTML pages can be tested locally without GitHub Pages deployment
- **Maintainability**: Single source of truth for each week's widgets within that week's folder
- **Version control**: Week-specific widgets travel with their content pages
- **Flexibility**: Can update widgets without affecting GitHub Pages deployment until ready

## 2025-10-02: Week 4 Widget Visual Alignment with Course Standards
- **Objective**: Update Week 4 widgets to match the visual styling and structure of Week 1-3 widgets
- **Status**: ✅ COMPLETED - All 4 widgets updated with consistent Ivey branding
- **Changes Made**:
  - **Added widget headers**: Green gradient backgrounds (#034638 to #045a49) with purple border accent (#582C83)
  - **Updated container structure**: Changed `widget-container` to `dp-wrapper` to match Week 1 pattern
  - **Added Georgia serif font**: Widget titles now use Georgia font family for consistency
  - **Standardized spacing**: 16px padding, 8px border-radius, proper margins (-15px to extend header edge-to-edge)
  - **Consistent subtitle styling**: 0.9em font size, 95% opacity for all widget subtitles
  - **Updated all 4 widgets**: w4-inference-params.html, w4-shot-learning.html, w4-prompt-patterns.html, w4-finetuning-vs-rag.html

### Visual Design Elements Added
- **Header background**: `linear-gradient(135deg, #034638 0%, #045a49 100%)`
- **Bottom border accent**: 3px solid #582C83 (Ivey purple)
- **Widget title**: Georgia serif, 1.4em, white text
- **Widget subtitle**: 0.9em, 95% opacity, white text
- **Max width**: 800px for optimal readability
- **Body styling**: Arial sans-serif, white background, #333 text color

### Files Updated
- Development Files/Week 4/widgets/w4-inference-params.html
- Development Files/Week 4/widgets/w4-shot-learning.html
- Development Files/Week 4/widgets/w4-prompt-patterns.html
- Development Files/Week 4/widgets/w4-finetuning-vs-rag.html
- demos/widgets/w4-*.html (all 4 copied for GitHub Pages deployment)

### Alignment Achieved
- **Visual consistency**: Week 4 widgets now match Week 1-3 widget styling
- **Brand compliance**: Proper Ivey green and purple color scheme throughout
- **Professional appearance**: Headers with gradient backgrounds and serif titles
- **User experience**: Consistent widget interface across all weeks of the course


## 2025-10-02: Week 4 Widget Visual Refinements
- **Objective**: Fix color contrast issues and remove unnecessary UI elements
- **Status**: ✅ COMPLETED - Text visibility and interface cleaned up
- **Issues Fixed**:
  - **Table header text**: Changed from green (#034638) to white for visibility on green background
  - **Active button text**: Changed from green to white on green backgrounds (.shot-btn.active, .pattern-btn.active, .option-btn.selected)
  - **Progress indicators removed**: Hidden step dots (1, 2, 3, 4) from fine-tuning vs RAG widget - unnecessary clutter
  - **Completed dot text**: Fixed to white text on green background

### Color Fixes Applied
- All text on green backgrounds now uses white color for proper contrast
- Active/selected button states: white text on green background
- Table headers: white text on green background
- Removed decorative elements that added visual noise

### Files Updated
- Development Files/Week 4/widgets/w4-finetuning-vs-rag.html (table headers, progress dots, selected buttons)
- Development Files/Week 4/widgets/w4-shot-learning.html (active button text)
- Development Files/Week 4/widgets/w4-prompt-patterns.html (active button text)
- demos/widgets/w4-*.html (all synced)

### Result
- ✅ Clean, minimal interface
- ✅ Proper text contrast on all backgrounds
- ✅ No unnecessary UI elements
- ✅ Professional, focused design

## 2025-10-02: Week 5 Complete Rebuild - Data Science with Generative AI
- **Objective**: Rebuild all Week 5 development files to align with GenAI/Data Science video content
- **Status**: ✅ COMPLETED - All 6 Week 5 HTML pages created with GenAI data science content
- **Background**: Week 5 development files contained traditional ML deployment/monitoring/governance content while video transcript covered Data Science with GenAI, PAL, code interpreters, custom GPTs, and fine-tuning - a complete mismatch
- **Key Accomplishments**:
  - **Created w_5_00_intro.html**: Week 5 orientation on Data Science with Generative AI, orchestration libraries, why Python, evolution of LLMs to agentic systems
  - **Created w_5_01_pal_code_interpreter.html**: PAL framework, math problem solving, one-shot prompting, code interpreter capabilities (file operations, document analysis, complex problem solving)
  - **Created w_5_02_data_science_llms.html**: Complete data science workflows (file analysis, statistical analysis, visualizations, ML model training, PowerPoint/Excel generation, best practices)
  - **Created w_5_03_custom_gpts.html**: Custom GPT creation (personas, knowledge bases/RAG, capabilities, actions, guardrails, Math TAI teaching assistant example)
  - **Created w_5_04_openai_platform.html**: OpenAI Playground vs ChatGPT, parameter tuning, Dashboard evaluation, fine-tuning (task vs conversational, JSONL format, Marv sarcastic chatbot example, web scraping)
  - **Created w_5_wrap_up.html**: Week 5 recap, key takeaways, practical next steps, course conclusion, what's next (apply knowledge, continue learning, join AI community)

### Content Alignment with Video Transcript
- **Video Coverage Mapped to Pages**:
  - 0:00-9:00: PAL introduction, orchestration libraries → w_5_01_pal_code_interpreter.html
  - 9:00-58:00: Code interpreter, data analysis workflows, Excel/PDF processing → w_5_02_data_science_llms.html
  - 58:00-1:22:45: Statistical analysis, visualizations, ML models, PowerPoint generation → w_5_02_data_science_llms.html
  - 1:22:45-1:42:00: Custom GPTs, Math TAI teaching assistant, knowledge bases, actions → w_5_03_custom_gpts.html
  - 1:42:00-1:57:00: OpenAI Playground, Dashboard, parameter tuning → w_5_04_openai_platform.html
  - 1:57:00-2:09:48: Fine-tuning (task & conversational), JSONL format, Marv example → w_5_04_openai_platform.html
  - 2:09:48-2:19:00: Web scraping, chunking, vector stores, large documents → w_5_04_openai_platform.html

### Technical Features
- **AMBA Template Compliance**: All pages follow dp-wrapper structure with proper accessibility
- **Accordion Panels**: Content organized in collapsible sections for Canvas LMS
- **Comprehensive Tables**: Comparison tables for ChatGPT vs Playground, file types, custom GPT use cases, fine-tuning types
- **Code Examples**: JSONL format examples, JSON structure, Python code samples, prompt templates
- **Practical Guidance**: "AI as intern" metaphor, best practices, guardrails, trust but verify approach

### Pages Replaced
- Old w_5_00_intro.html (deployment/monitoring intro) → New w_5_00_intro.html (GenAI data science overview)
- Old w_5_01_deployment.html (deployment patterns, rollout) → New w_5_01_pal_code_interpreter.html (PAL, code interpreters)
- Old w_5_02_monitoring_drift.html (drift detection, calibration) → New w_5_02_data_science_llms.html (data science workflows)
- Old w_5_03_governance.html (risk tiers, model cards) → New w_5_03_custom_gpts.html (custom GPT assistants)
- New w_5_04_openai_platform.html (Playground, fine-tuning - no previous equivalent for this GenAI content)
- Old w_5_wrap_up.html (deployment recap) → New w_5_wrap_up.html (GenAI data science recap & course conclusion)

### Course Structure Now Complete
- **Week 1**: AI fundamentals, data understanding, ML models
- **Week 2**: Supervised learning algorithms
- **Week 3**: Unsupervised learning, preprocessing
- **Week 4**: Generative AI, LLMs, transformers, prompt engineering, fine-tuning, RAG, agents
- **Week 5**: Data science with GenAI, PAL, code interpreters, custom GPTs, OpenAI Platform, fine-tuning

### Result
- ✅ Complete alignment between Week 5 video transcript and HTML pages
- ✅ Comprehensive GenAI data science coverage
- ✅ Practical, hands-on focus with real examples
- ✅ Course now flows logically from traditional ML (Weeks 1-3) to GenAI (Weeks 4-5)
- ✅ Students experience complete AI journey: fundamentals → algorithms → GenAI → practical applications

## 2025-10-02: Week 4 GenAI Widget SCORM Packaging
- **Objective**: Create SCORM 1.2 packages for all 4 Week 4 GenAI widgets for Canvas LMS deployment
- **Status**: ✅ COMPLETED - All 4 widgets packaged and ready for upload

### SCORM Packages Created
1. **w4-inference-params-scorm.zip** (9.3K)
   - Title: "Inference Parameters Explorer"
   - Interactive exploration of temperature, top-k, and top-p parameters
   - Files: index.html, scormfunctions.js, ivey-widget-base.css, imsmanifest.xml

2. **w4-shot-learning-scorm.zip** (9.6K)
   - Title: "Zero/One/Few-Shot Learning"
   - Comparison of different shot learning approaches with examples
   - Files: index.html, scormfunctions.js, ivey-widget-base.css, imsmanifest.xml

3. **w4-prompt-patterns-scorm.zip** (11K)
   - Title: "Prompt Pattern Showcase"
   - 6 proven prompt engineering patterns with before/after examples
   - Files: index.html, scormfunctions.js, ivey-widget-base.css, imsmanifest.xml

4. **w4-finetuning-vs-rag-scorm.zip** (11K)
   - Title: "Fine-tuning vs RAG Decision Tool"
   - Interactive questionnaire for choosing customization approach
   - Files: index.html, scormfunctions.js, ivey-widget-base.css, imsmanifest.xml

### SCORM Package Structure
Each package contains:
- **index.html**: Widget renamed from original w4-*.html file
- **scormfunctions.js**: SCORM 1.2 API wrapper for LMS communication
- **ivey-widget-base.css**: Universal widget stylesheet
- **imsmanifest.xml**: SCORM manifest with unique identifiers

### Technical Details
- **SCORM Version**: 1.2 (ADL SCORM)
- **SCO Type**: webcontent
- **Completion Tracking**: SCORM API tracks initialization and completion
- **Unique Identifiers**: Each package has unique manifest identifier (W4_Inference_Params_001, etc.)
- **Canvas LMS Compatible**: Ready for direct upload to Canvas modules

### Storage Location
- **Directory**: Development Files/Week 4/SCORM files/
- **Package Folders**: w4-*-scorm/ (unzipped contents)
- **ZIP Files**: w4-*-scorm.zip (ready for Canvas upload)

### Next Steps for Canvas Deployment
1. Upload each ZIP file to Canvas as a SCORM package
2. Embed SCORM packages in appropriate Week 4 module pages
3. Test SCORM completion tracking in Canvas LMS
4. Verify all widgets function correctly within Canvas environment

## 2025-10-02: Week 4 Widget Color Fixes
- **Objective**: Fix color contrast and hover state issues identified during testing
- **Status**: ✅ COMPLETED - Purple hover states replaced with light green, parameter values now readable

### Issues Fixed
1. **Parameter value text**: Changed from dark green (#034638) to white on green background
   - Temperature, Top-K, Top-P value badges now have white text
   - Improved readability on green backgrounds

2. **Button hover states**: Changed from purple (#6d3a9e) to light green (#e8f5e9)
   - Preset buttons (Factual Q&A, Code Generation, etc.) now use light green hover
   - All interactive buttons across widgets use consistent light green hover
   - Matches existing Week 4 widget patterns

### Files Updated
- Development Files/Week 4/widgets/w4-inference-params.html (.param-value color, .preset-btn:hover)
- Development Files/Week 4/widgets/w4-shot-learning.html (hover states)
- Development Files/Week 4/widgets/w4-prompt-patterns.html (hover states)
- Development Files/Week 4/widgets/w4-finetuning-vs-rag.html (hover states)
- demos/widgets/w4-*.html (all synced)
- Development Files/Week 4/SCORM files/*/index.html (SCORM packages updated)
- All SCORM ZIP files recreated with fixes

### Color Scheme Finalized
- **Active/selected state**: Green background (#034638) with white text
- **Hover state**: Light green background (#e8f5e9) with dark green text
- **Parameter badges**: Green background with white text
- **No purple**: All purple colors removed from button states

## 2025-10-02: Fine-tuning vs RAG Widget Purple Panel Fix
- **Objective**: Remove purple gradient from recommendation panel
- **Status**: ✅ COMPLETED - Purple replaced with clean Ivey green

### Issue Fixed
- **Recommendation panel**: Changed from purple gradient to solid Ivey green (#034638)
  - Background: Purple gradient → Solid green
  - Text color: Dark green → White
  - Shadow: Purple tint → Green tint
  - Details background: Slightly increased opacity for better contrast

### Files Updated
- Development Files/Week 4/widgets/w4-finetuning-vs-rag.html
- demos/widgets/w4-finetuning-vs-rag.html
- Development Files/Week 4/SCORM files/w4-finetuning-vs-rag-scorm/index.html
- w4-finetuning-vs-rag-scorm.zip (recreated)

### Result
- ✅ All purple removed from all Week 4 widgets
- ✅ Consistent green color scheme throughout
- ✅ Clean, professional appearance

## 2025-10-02: Week 4 HTML Pages Updated with SCORM Embeds
- **Objective**: Replace local widget iframe references with Canvas SCORM package embeds
- **Status**: ✅ COMPLETED - All 4 widgets now embedded via Canvas SCORM packages

### SCORM Embeds Added
1. **w_4_02_transformers.html** - Inference Parameters Explorer (Package 49415)
2. **w_4_03_prompt_engineering.html** - Zero/One/Few-Shot Learning (Package 49414)
3. **w_4_03_prompt_engineering.html** - Prompt Pattern Showcase (Package 49416)
4. **w_4_04_finetuning_rag.html** - Fine-tuning vs RAG Decision Tool (Package 49417)

### Changes Made
- Replaced `<div class="dp-embed-wrapper"><iframe src="widgets/...">`
- With Canvas SCORM embed format: `<p><iframe style="overflow: hidden;" src="https://learn.ivey.ca/courses/6194/external_tools/retrieve?borderless=true&url=https://scone-prod.ca-central-1.inscloudgate.net/packages/[ID]/launch" width="1000" height="1000" loading="lazy"></iframe></p>`

### Files Updated
- Development Files/Week 4/w_4_02_transformers.html
- Development Files/Week 4/w_4_03_prompt_engineering.html (2 embeds)
- Development Files/Week 4/w_4_04_finetuning_rag.html

### Result
- ✅ All Week 4 widgets now served through Canvas SCORM packages
- ✅ SCORM tracking enabled for completion and progress
- ✅ Widgets accessible within Canvas LMS environment
- ✅ Ready for student use in Week 4 modules

## 2025-10-02: Week 5 Widget Development - Data Science with GenAI
- **Objective**: Create interactive widgets for Week 5 GenAI content (PAL, code interpreters, customization decision tool, JSONL formatter)
- **Status**: ✅ COMPLETED - 4 widgets created and deployed

### Widgets Created
1. **w5-pal-math-solver.html** (900px height): PAL and One-Shot Prompting Demo
   - Three-tab interface: "The Problem", "One-Shot Solution", "Why It Works"
   - Compares failed pure LLM approach vs successful PAL with Python execution
   - Tennis ball problem (5 + 2×3 = 11) and bakery problem (200 - 93 - 39 + 6 = 74)
   - Syntax-highlighted Python code blocks showing one-shot prompting pattern
   - Explains LLMs as pattern matchers, not calculators
   - Note: Modern LLMs (ChatGPT, Claude) have built-in code interpreters

2. **w5-customization-decision.html** (900px height): LLM Customization Decision Tool
   - Interactive 4-question questionnaire to recommend customization approach
   - Questions cover: primary goal, update frequency, data volume, technical constraints
   - Personalized recommendations: Prompt Engineering, RAG, Custom GPT, Fine-tuning, or Combined
   - Each recommendation includes: implementation steps, examples, pros/cons comparison table
   - Covers complete customization stack from zero-shot prompting to production fine-tuning + RAG

3. **w5-code-interpreter-demo.html** (900px height): Code Interpreter Workflow Simulation
   - Simulated ChatGPT code interpreter session analyzing sales data
   - Chat interface with file upload, statistical analysis, visualization generation, ML model training
   - Demonstrates complete workflow: CSV upload → summary statistics → Plotly chart → linear regression model
   - Shows Python code execution with syntax highlighting
   - Model performance metrics (R² = 0.847, MAE = $47.23)
   - Automated message progression with typing indicators

4. **w5-jsonl-formatter.html** (900px height): JSONL Training Data Formatter
   - Interactive tool to create properly formatted fine-tuning data
   - Two format options: Task fine-tuning (prompt-completion) and Conversational fine-tuning (messages array)
   - Task editor: Simple prompt-completion pairs for classification, translation, etc.
   - Conversational editor: System message + user-assistant pairs for chat-style fine-tuning
   - Real-time JSONL output with syntax highlighting
   - Copy to clipboard and download training_data.jsonl functionality
   - Example counter and validation

### Technical Implementation
- All widgets use `ivey-widget-base.css` universal stylesheet
- Pop-out functionality included for escaping Canvas iframe constraints
- Proper ARIA labels and accessibility compliance
- Responsive design for Canvas LMS embedding
- Plotly.js v2.28.0 for interactive visualizations (code interpreter demo)
- Consistent Ivey branding: Green headers (#034638) with purple accent (#582C83)

### Files Created
- Development Files/Week 5/widgets/w5-pal-math-solver.html (canonical location)
- Development Files/Week 5/widgets/w5-customization-decision.html (canonical location)
- Development Files/Week 5/widgets/w5-code-interpreter-demo.html (canonical location)
- Development Files/Week 5/widgets/w5-jsonl-formatter.html (canonical location)

**Note**: Widgets reside in Development Files structure, NOT in demos/widgets/ folder.

### Content Alignment
- **w5-pal-math-solver.html** aligns with Week 5 video transcript 0:00-9:00 (PAL introduction)
- **w5-customization-decision.html** supports w_5_01_pal_code_interpreter.html decision framework
- **w5-code-interpreter-demo.html** aligns with video 9:00-58:00 (data science workflows)
- **w5-jsonl-formatter.html** aligns with video 1:57:00-2:09:48 (fine-tuning JSONL format)

### Next Steps
- ✅ COMPLETED: Embed widgets in Week 5 HTML pages with iframe references
- ✅ COMPLETED: Create SCORM packages for Canvas LMS deployment
- Test widget functionality within Canvas environment
- Update widget inventory documentation

## 2025-10-02: Week 4 & Week 5 Widget Styling Standardization
- **Objective**: Update all Week 4 and Week 5 widgets to match Week 3 K-means styling
- **Status**: ✅ COMPLETED - All 8 widgets updated with consistent design system
- **Reference Widget**: Development Files/Week 3/widgets/w3-02-kmeans-clustering.html
- **User Request**: "this one is my favourite" - User wanted all Week 4/5 widgets to match this styling

### Week 3 K-means Styling Pattern (Reference Standard)
**Key Design Elements:**
- **Font Awesome Icons**: Added `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">`
- **Typography**: Changed to 'Figtree', system-ui, -apple-system, sans-serif
- **dp-has-icon Header**: Icon + title combination with Ivey green color (#034638)
- **dp-card System**: White cards with subtle shadows (0 2px 8px rgba(0,0,0,0.1))
- **dp-card.intro-card**: Light teal background (#f8fffe) with 4px solid left border (#034638)
- **Button Styling**: btn-primary (green #034638) and btn-secondary (purple #582C83)
- **Hover Effects**: translateY(-1px) lift effect with 0.3s ease transitions

### Widgets Updated (Manual One-by-One Approach)

**Week 4 Widgets (4 total):**
1. ✅ **w4-inference-params.html** - Added Font Awesome, dp-has-icon with sliders icon, intro card, controls-section styling, button classes
2. ✅ **w4-shot-learning.html** - Added Font Awesome, dp-has-icon with graduation cap icon, intro card, controls-section with tasks icon, button hover states
3. ✅ **w4-prompt-patterns.html** - Added Font Awesome, dp-has-icon with magic wand icon, intro card, pattern button styling enhancements
4. ✅ **w4-finetuning-vs-rag.html** - Added Font Awesome, dp-has-icon with balance scale icon, intro card, btn-primary/btn-secondary classes, hover lift

**Week 5 Widgets (4 total):**
1. ✅ **w5-pal-math-solver.html** - Added Font Awesome, dp-has-icon with calculator icon, intro card explaining PAL with one-shot prompting
2. ✅ **w5-customization-decision.html** - Added Font Awesome, dp-has-icon with layer-group icon, intro card for LLM Customization Stack
3. ✅ **w5-code-interpreter-demo.html** - Added Font Awesome, dp-has-icon with terminal icon, intro card describing simulation workflow
4. ✅ **w5-jsonl-formatter.html** - Added Font Awesome, dp-has-icon with file-code icon, intro card with JSONL format explanation

### Icon Choices
- **w4-inference-params**: `fas fa-sliders-h` (sliders icon for parameter controls)
- **w4-shot-learning**: `fas fa-graduation-cap` (learning icon for shot learning)
- **w4-prompt-patterns**: `fas fa-magic` (magic wand for pattern showcase)
- **w4-finetuning-vs-rag**: `fas fa-balance-scale` (balance for decision framework)
- **w5-pal-math-solver**: `fas fa-calculator` (calculator for math solver)
- **w5-customization-decision**: `fas fa-layer-group` (layers for customization stack)
- **w5-code-interpreter-demo**: `fas fa-terminal` (terminal for code execution)
- **w5-jsonl-formatter**: `fas fa-file-code` (code file for JSONL format)

### CSS Standardization Applied
All 8 widgets now include:
```css
body {
    font-family: 'Figtree', system-ui, -apple-system, sans-serif;
    background: white;
    color: #2c3e50;
    line-height: 1.6;
}

.dp-has-icon {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #034638;
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.dp-card.intro-card {
    border-left: 4px solid #034638;
    background: #f8fffe;
}

.btn-primary:hover {
    background: #0a5c4a;
    transform: translateY(-1px);
}

.btn-secondary:hover {
    background: #4c1d75;
    transform: translateY(-1px);
}
```

### Files Updated
- Development Files/Week 4/widgets/w4-inference-params.html
- Development Files/Week 4/widgets/w4-shot-learning.html
- Development Files/Week 4/widgets/w4-prompt-patterns.html
- Development Files/Week 4/widgets/w4-finetuning-vs-rag.html
- Development Files/Week 5/widgets/w5-pal-math-solver.html
- Development Files/Week 5/widgets/w5-customization-decision.html
- Development Files/Week 5/widgets/w5-code-interpreter-demo.html
- Development Files/Week 5/widgets/w5-jsonl-formatter.html

### Result
- ✅ Consistent visual design across all Week 4 and Week 5 widgets
- ✅ Matches user's favorite Week 3 K-means widget styling
- ✅ Professional appearance with Font Awesome icons
- ✅ Improved accessibility with semantic HTML structure
- ✅ Enhanced user experience with hover lift effects
- ✅ All widgets maintain Ivey branding standards

## 2025-10-02: Widget Differentiation Strategy - Week 4 vs Week 5 Decision Tools
- **Objective**: Address duplication between Week 4 and Week 5 customization decision widgets
- **Status**: ✅ COMPLETED - Week 4 widget enhanced for production/technical focus

### Issue Identified
- Both Week 4 (w4-finetuning-vs-rag.html) and Week 5 (w5-customization-decision.html) had similar questionnaires
- Week 4: 4 questions → Fine-tuning vs RAG vs Combined
- Week 5: 4 questions → Prompt Engineering vs RAG vs Custom GPT vs Fine-tuning vs Combined
- Significant overlap in question topics (primary goal, update frequency, data type, source citation)

### Differentiation Strategy Implemented
**Week 4 Widget** - "Fine-tuning vs RAG: Production Decision Framework"
- **Audience**: Production teams with ML/engineering resources evaluating advanced customization
- **Focus**: Technical depth, cost analysis, latency requirements, team capabilities
- **Questions**: 7 questions now (expanded from 4)
  1. Primary production goal (proprietary knowledge vs specialized behavior)
  2. **NEW: Latency requirements** (sub-second vs moderate vs flexible)
  3. Knowledge base dynamism (static vs periodic vs real-time)
  4. **NEW: Cost sensitivity** (high-volume cost-sensitive vs moderate vs quality-focus)
  5. Data assets (1000+ examples vs large corpus vs both)
  6. **NEW: ML engineering capability** (ML team vs software engineers vs limited resources)
  7. Source attribution importance (compliance critical vs helpful vs not needed)

**Week 5 Widget** - "LLM Customization Decision Tool"
- **Audience**: Beginners/generalists exploring the full customization stack
- **Focus**: Accessibility, broad overview, understanding the progression from simple to complex
- **Questions**: 4 questions (unchanged)
  1. Primary goal (general tasks, knowledge, behavior, specialized assistant)
  2. Knowledge update frequency
  3. Data volume (few examples vs documents vs hundreds vs large dataset)
  4. Technical constraints (no coding, light coding, full dev team, need citations)

### Week 4 Widget Enhancements
**Title Changes:**
- Old: "Fine-tuning vs RAG Decision Tool"
- New: "Fine-tuning vs RAG: Production Decision Framework"
- Added subtitle: "Advanced technical decision tool for production AI systems"

**New Technical Questions:**
- Latency requirements (critical <500ms vs moderate 1-3s vs flexible 3s+)
- Cost sensitivity (millions of requests/month vs moderate vs quality-focused)
- ML engineering capability (ML team vs software engineers vs limited resources)

**Production-Focused Recommendations:**
- **Fine-tuning**: Detailed implementation with PEFT/LoRA, vLLM/TGI deployment, concrete cost estimates ($100-2K training, $0.002-0.02/request)
- **RAG**: Technical specifics on chunking (500-1000 tokens), embedding models, vector databases (Pinecone/Weaviate/Qdrant), reranking strategies
- **Combined**: Multi-stage production approach with monitoring requirements, enterprise use cases

**Enhanced Comparison Table:**
- Added rows: Typical Latency, Cost per Request, Best at Scale, Team Expertise
- Specific numbers: Fine-tuning 50-500ms vs RAG 500ms-3s
- Cost breakdown: Fine-tuning $0.002-0.02 vs RAG $0.01-0.10 per request

**Info Box Addition:**
- Explains this is for production teams evaluating advanced customization
- Directs beginners to Week 5's "Customization Stack" tool first

### Clear Distinction Achieved
- **Week 5 = Entry point**: "What are all my options?" (includes prompt engineering, custom GPTs)
- **Week 4 = Deep dive**: "I need advanced customization - which one?" (production considerations)
- Natural learning progression: Week 5 teaches breadth, Week 4 teaches technical depth
- No longer duplicative - complementary tools serving different user needs

### Files Updated
- Development Files/Week 4/widgets/w4-finetuning-vs-rag.html (now 7 questions, production-focused, canonical location)

### Result
- ✅ Week 4 widget now targets production teams with technical depth (latency, cost, scale)
- ✅ Week 5 widget remains beginner-friendly with full customization stack overview
- ✅ Clear differentiation: Production decision framework (W4) vs Learning tool (W5)
- ✅ Complementary rather than duplicative

## 2025-10-17: Week 1 Uplimit Conversion - Markdown & Widget Rebranding
- **Objective**: Convert Week 1 Canvas LMS content to Uplimit platform format (markdown storyboards + Uplimit-branded widgets)
- **Status**: 🔄 IN PROGRESS - Markdown completed (100%), Widget rebranding started (22% - 2/9 widgets)
- **Background**: Week 1 HTML pages used AMBA template structure with Ivey/Canvas branding. Needed conversion to clean markdown for Uplimit platform and widget rebranding from Ivey colors to Uplimit neutral design system.

### Part 1: Markdown Storyboard Conversion (✅ COMPLETED)
- **Status**: ✅ 100% Complete - All 10 HTML pages converted to markdown format
- **Tool Used**: `uplimit-storyboard-builder` agent
- **Background**: Week 1 HTML pages used AMBA template structure with dp-wrapper framework, accordion panels, and embedded widgets. These needed conversion to clean markdown for Uplimit platform deployment.

### Files Converted
1. **w_1_00_intro.html** → **01-week-1-intro.md** (Week 1 orientation and overview)
2. **canvas-01-ai-importance.html** → **02-ai-importance.md** (AI concepts, context, business value)
3. **canvas-02-understanding-data.html** → **03-understanding-data.md** (Data journey, supermarket case)
4. **canvas-02a-data-science-framework.html** → **04-data-science-framework.md** (6-phase DS workflow)
5. **canvas-02b-supermarket-case-study.html** → **05-supermarket-case-study.md** (Applied case prompts)
6. **canvas-02c-big-data-dimensions.html** → **06-big-data-dimensions.md** (4Vs of big data)
7. **canvas-03-machine-learning-models.html** → **07-machine-learning-models.md** (ML families, selection guide)
8. **canvas-04-data-preprocessing.html** → **08-data-preprocessing.md** (Feature engineering, pipelines)
9. **canvas-05-evaluation-training.html** → **09-evaluation-training.md** (Metrics, experiments, monitoring)
10. **w_1_wrap_up.html** → **10-week-1-wrap-up.md** (Review, knowledge check, reflection)

### Conversion Approach
**Content Preservation:**
- All text content, headings, and learning objectives preserved
- Tables converted to markdown table format with proper headers
- Lists (bulleted and numbered) maintained with markdown syntax
- Accordions converted to heading/subheading structure
- Callouts preserved as emphasized sections with clear labels

**Uplimit-Specific Formatting:**
- Clean markdown headers (H1, H2, H3 hierarchy)
- Horizontal rules (`---`) for section separation
- Bold/italic emphasis where appropriate
- Widget embeds documented as structured blocks with:
  - Widget name/title
  - Type of interaction
  - Source reference (SCORM package ID or GitHub Pages URL)
  - Purpose/learning objectives
  - Estimated duration

**Widget References Documented:**
1. **AI Evolution Timeline** (SCORM Package 49225) - Historical AI milestones
2. **Customer Segmentation Explorer** (SCORM Package 49232) - Interactive flip cards
3. **Data Science Framework Tool** (SCORM Package 49233) - 6-phase workflow
4. **AI Hierarchy Explorer** (SCORM Package 49223) - AI→ML→DL relationships
5. **Data Preprocessing Explorer** (SCORM Package 49218) - Cleaning/feature creation
6. **Threshold Explorer** (GitHub Pages widget) - Precision/recall trade-offs

### Technical Details
- **Output location**: `Development Files/Uplimit/Week 1/`
- **File naming**: Sequential numbered prefix (01-10) for module order
- **Markdown format**: Standard markdown with GitHub-flavored extensions
- **Accessibility**: Canvas ARIA labels and skip links documented but not included in markdown
- **JavaScript**: Accordion functionality removed (replaced with static markdown structure)

### What Was Removed
- Canvas LMS-specific HTML (`dp-wrapper`, `dp-content-block` classes)
- AMBA template structure and dp-framework divs
- JavaScript accordion toggle functionality
- Canvas-specific iframe embedding patterns
- ARIA attributes and accessibility markup (documented separately)

### What Needs Follow-Up
- **Widget URLs**: Update SCORM package references to Uplimit-specific embed codes
- **Video embeds**: Convert Panopto video references to Uplimit video component format
- **Interactive elements**: Convert to Uplimit-specific iframe or component syntax
- **Quizzes**: Convert knowledge check sections to Uplimit quiz components
- **Reflection prompts**: Convert to Uplimit text response or discussion components

### Documentation Created
- **README.md**: Comprehensive conversion guide with file structure, widget inventory, follow-up tasks
- File mapping table showing original HTML to markdown conversions
- Widget reference documentation with SCORM package IDs
- Technical notes on conversion approach and limitations

### Benefits of Markdown Format
- **Platform-agnostic**: Can be used in Uplimit or other markdown-based platforms
- **Version control friendly**: Easy to track changes in git
- **Human-readable**: Clear, clean format for content review
- **Maintainable**: Simple text editing without HTML complexity
- **Accessible**: Screen readers handle markdown better than complex HTML

### Storage Location
- **Directory**: `Development Files/Uplimit/Week 1/`
- **Files**: 10 markdown files + README.md
- **Total**: 11 files, ~40KB total size

### Next Steps for Uplimit Deployment
1. Review markdown files for Uplimit platform compatibility
2. Update widget embed codes with Uplimit-specific syntax
3. Convert knowledge checks to Uplimit quiz components
4. Test markdown rendering in Uplimit preview mode
5. Adjust heading hierarchy or formatting as needed
6. Create corresponding Uplimit platform elements (text, video, widget, quiz)
7. Test complete Week 1 module in Uplimit staging environment

### Result
- ✅ All 10 Week 1 HTML pages converted to clean markdown
- ✅ Content structure and learning flow preserved
- ✅ Widget references documented with source information
- ✅ Comprehensive README created for future reference
- ✅ Ready for Uplimit platform integration with minor adjustments

### Part 2: Widget Rebranding to Uplimit Design System (🔄 IN PROGRESS - 22% Complete)
- **Status**: 🔄 2/9 widgets converted, 7 remaining
- **Tool Used**: `branding-checker` agent for analysis, manual conversion
- **Background**: Week 1 widgets use Ivey branding (green #034638, purple #582C83) and Canvas LMS classes. Need complete rebrand to Uplimit neutral design system (Geist font, neutral grays, minimal shadows).

#### Uplimit Base CSS Created
- **File**: `Development Files/Uplimit/Week 1/widgets/uplimit-base.css`
- **Features**: Complete Uplimit design token system with:
  - Geist font family with fallbacks
  - Neutral gray color scale (no brand colors)
  - Minimal button/card styles
  - Subtle shadows and 1px borders
  - Responsive utilities

#### Widgets Converted (2/9)
1. ✅ **canvas-01-ai-importance-timeline.html** - AI Evolution Timeline
   - All Ivey colors → Uplimit neutral grays
   - Geist font applied
   - Class names updated (dp-wrapper → widget-container)
   - Borders: 4px colored → 1px neutral
   - Shadows minimized to Uplimit standards

2. ✅ **canvas-02a-data-framework.html** - Data Science Framework
   - Color scheme converted to neutral grays
   - Interactive functionality preserved
   - Responsive design maintained

#### Widgets Remaining (7/9)
3. ❌ **canvas-02c-big-data-4vs.html** - Complex colored gradients need replacement
4. ❌ **canvas-02-understanding-data-segments.html** - Customer segmentation flip cards
5. ❌ **canvas-03-ml-models-hierarchy.html** - AI hierarchy with colored circles
6. ❌ **canvas-03-ml-models-matcher.html** - Drag-and-drop task matcher
7. ❌ **canvas-04-preprocessing-pipeline.html** - Pipeline visualization
8. ❌ **canvas-05-evaluation-threshold.html** - Plotly chart with custom colors
9. ❌ **w1-wrap-quiz.html** - Interactive quiz widget

#### Uplimit Branding Standards Applied
**Color Transformations:**
- `#034638` (Ivey Green) → `#2d3748` (Uplimit dark gray)
- `#582C83` (Ivey Purple) → `#2d3748` (Uplimit dark gray)
- Headings → `#1f2937` (darkest gray)
- Backgrounds → `#f9fafb` (lightest gray)
- Borders → `#d1d5db` (standard), `#e2e8f0` (light)
- Keep only: `#10b981` (success), `#ef4444` (error)

**Typography:**
- Font: Geist with system fallbacks
- Weights: 400 (normal), 500 (medium), 600 (semibold)
- Base size: 14px

**UI Updates:**
- Borders: 4px/2px solid → 1px solid
- Gradients: Removed all colored gradients
- Shadows: Minimal neutral shadows only
- Class names: dp-* → generic names

#### Documentation Created
- **CONVERSION_STATUS.md**: Comprehensive status tracking
  - Widget-by-widget checklist
  - Conversion time estimates (~50 min per widget)
  - Priority order recommendations
  - Uplimit design principles reference

#### Estimated Completion
- **Remaining Work**: 7 widgets × 50 minutes = ~6.5 hours
- **Next Priority**: w1-wrap-quiz.html (assessment widget, high visibility)

### Uplimit Folder Structure Created
```
Development Files/Uplimit/Week 1/
├── widgets/
│   ├── uplimit-base.css                                    ✅
│   ├── canvas-01-ai-importance-timeline.html              ✅
│   ├── canvas-02a-data-framework.html                     ✅
│   ├── canvas-02c-big-data-4vs.html                       ❌
│   ├── canvas-02-understanding-data-segments.html         ❌
│   ├── canvas-03-ml-models-hierarchy.html                 ❌
│   ├── canvas-03-ml-models-matcher.html                   ❌
│   ├── canvas-04-preprocessing-pipeline.html              ❌
│   ├── canvas-05-evaluation-threshold.html                ❌
│   └── w1-wrap-quiz.html                                  ❌
├── 01-week-1-intro.md                                      ✅
├── 02-ai-importance.md                                     ✅
├── 03-understanding-data.md                                ✅
├── 04-data-science-framework.md                            ✅
├── 05-supermarket-case-study.md                            ✅
├── 06-big-data-dimensions.md                               ✅
├── 07-machine-learning-models.md                           ✅
├── 08-data-preprocessing.md                                ✅
├── 09-evaluation-training.md                               ✅
├── 10-week-1-wrap-up.md                                    ✅
├── README.md                                               ✅
└── CONVERSION_STATUS.md                                    ✅
```

### Next Steps
1. Complete remaining 7 widget conversions using CONVERSION_STATUS.md checklist
2. Test all widgets in Uplimit platform
3. Begin Week 2-5 conversion using established pattern
4. Consider automated conversion script for efficiency
