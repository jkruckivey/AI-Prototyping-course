# Canvas Course Content Standards - WCAG 2.1 AA Compliance

This document establishes the standards and requirements for creating accessible Canvas course content based on our implementation of the AI Fundamentals course.

## Table of Contents
- [Page Structure Standards](#page-structure-standards)
- [Table Accessibility Requirements](#table-accessibility-requirements)  
- [Interactive Widget Standards](#interactive-widget-standards)
- [iframe Integration Requirements](#iframe-integration-requirements)
- [Typography and Design Standards](#typography-and-design-standards)
- [Testing and Validation Checklist](#testing-and-validation-checklist)

## Page Structure Standards

### Heading Hierarchy
- **Required**: Use semantic heading structure (h2, h3, h4, h5, h6)
- **Canvas Integration**: Start with h2 as main page heading (Canvas provides h1)
- **Logical Flow**: Maintain proper nesting without skipping levels
- **Example Structure**:
  ```html
  <h2>Main Topic</h2>
  <h3>Major Section</h3>
  <h4>Subsection</h4>
  <h5>Detail Level</h5>
  <h6>Specific Instructions</h6>
  ```

### Content Organization
- **Clean Structure**: Remove custom CSS styling - use Canvas native classes
- **Semantic HTML**: Use proper HTML5 semantic elements (section, article, aside)
- **Content Flow**: Organize content logically for screen readers

## Table Accessibility Requirements

### Mandatory Table Elements
All tables MUST include these accessibility features:

```html
<table class="ic-Table ic-Table--hover-row" role="table" aria-label="[Descriptive table purpose]">
  <caption>[Detailed table description]</caption>
  <thead>
    <tr>
      <th scope="col">[Column Header]</th>
      <th scope="col">[Column Header]</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">[Row Header]</th>
      <td>[Data Cell]</td>
    </tr>
  </tbody>
</table>
```

### Required Attributes
- **`class="ic-Table ic-Table--hover-row"`**: Canvas native styling
- **`role="table"`**: Explicit table role
- **`aria-label="[description]"`**: Comprehensive table purpose description
- **`<caption>`**: Detailed table description as first child element
- **`scope="col"`**: All column headers
- **`scope="row"`**: All row headers (use `<th>` elements, not `<td>`)

### Table Caption Examples
- "Six-step data science framework showing business focus, executive role, and time investment for each step"
- "Customer segmentation results showing strategy and business outcomes for each segment" 
- "Business value by data type showing applications and competitive advantages"
- "Two-system approach - operational databases vs data warehouses"

## Interactive Widget Standards

### Semantic Structure Requirements
Interactive widgets must use proper semantic HTML:

```html
<div class="widget-grid" role="tablist" aria-label="[Widget purpose]">
  <button class="widget-card active" 
          data-target="item1" 
          role="tab" 
          aria-selected="true" 
          aria-controls="item1-content" 
          id="item1-tab" 
          tabindex="0">
    <div class="icon" aria-hidden="true">🔍</div>
    <div class="title">[Item Title]</div>
    <div class="description">[Item Description]</div>
  </button>
</div>

<div class="detail-panel">
  <div class="detail-content active" 
       data-target="item1" 
       role="tabpanel" 
       id="item1-content" 
       aria-labelledby="item1-tab">
    [Content Details]
  </div>
</div>
```

### Required Interactive Elements
- **Button Elements**: Use `<button>` for all clickable items, never `<div>`
- **ARIA Roles**: Complete tablist/tab/tabpanel pattern
- **State Management**: Proper aria-selected and tabindex management
- **Focus Indicators**: Visible focus styling with outline

### Keyboard Navigation Requirements
All interactive widgets must support:

```javascript
// Required keyboard event handlers
switch(e.key) {
  case 'ArrowRight':
  case 'ArrowDown':
    // Navigate to next item
    break;
  case 'ArrowLeft':
  case 'ArrowUp':
    // Navigate to previous item
    break;
  case 'Home':
    // Navigate to first item
    break;
  case 'End':
    // Navigate to last item
    break;
  case 'Enter':
  case ' ':
    // Activate current item
    break;
}
```

### Screen Reader Support
- **Live Regions**: Use aria-live for dynamic content updates
- **Announcements**: Announce state changes to screen readers
- **Hidden Elements**: Use aria-hidden="true" for decorative icons
- **Screen Reader Only Content**: Include sr-only class for additional context

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## iframe Integration Requirements

### Accessibility Attributes
All embedded widgets must include comprehensive accessibility markup:

```html
<iframe
  title="[Detailed widget description and interaction instructions]"
  src="[widget-url]?compact=1&maxWidth=760"
  width="100%"
  height="[appropriate-height]"
  loading="lazy"
  scrolling="no"
  allowfullscreen
  role="application"
  aria-label="[Complete description of widget functionality]">
</iframe>
```

### Required iframe Attributes
- **`title`**: Detailed description including interaction instructions
- **`role="application"`**: Indicates interactive application content
- **`aria-label`**: Comprehensive functionality description
- **URL Parameters**: Include `?compact=1&maxWidth=760` for Canvas integration
- **`loading="lazy"`**: Performance optimization
- **`scrolling="no"`**: Prevent iframe scrollbars
- **`allowfullscreen`**: Enable full accessibility features

### iframe Title Examples
- "Interactive Data Framework Explorer - Click through steps to explore executive roles and business impact in the 6-step data science framework"
- "Customer Segmentation Explorer - Interactive exploration of three customer segments discovered through data analysis"
- "Activity Progress Tracker - Track completion of executive AI learning activities"

## Typography and Design Standards

### Color Accessibility
- **Primary Colors**: Must meet WCAG AA contrast ratios (4.5:1 minimum)
- **Ivey Branding**: 
  - Primary Green: `#034638`
  - Secondary Green: `#0a6b4a`  
  - Accent Purple: `#582C83`
- **Text Contrast**: Ensure sufficient contrast against background colors
- **Interactive States**: Maintain contrast in hover and focus states

### Font Requirements
- **Primary Font**: Georgia, serif (for readability and academic tone)
- **Size Guidelines**: Minimum 16px base font size
- **Line Height**: 1.4-1.6 for optimal readability
- **Font Weight**: Use appropriate weights for hierarchy (normal, bold)

### Focus Indicators
```css
.interactive-element:focus {
  outline: 2px solid #034638;
  outline-offset: 2px;
}
```

## Testing and Validation Checklist

### Manual Testing Requirements
- [ ] **Keyboard Navigation**: Tab through all interactive elements
- [ ] **Screen Reader**: Test with NVDA, JAWS, or VoiceOver
- [ ] **Focus Management**: Verify visible focus indicators
- [ ] **Color Contrast**: Use tools like WebAIM Contrast Checker
- [ ] **Zoom Testing**: Test at 200% zoom level
- [ ] **Mobile Accessibility**: Test on mobile devices with screen readers

### Automated Testing Tools
- **axe-core**: Browser extension for accessibility scanning
- **WAVE**: Web accessibility evaluation tool  
- **Lighthouse**: Accessibility audit in Chrome DevTools
- **Pa11y**: Command line accessibility testing

### Canvas Integration Testing
- [ ] **iframe Embedding**: Test widgets load properly in Canvas
- [ ] **Responsive Design**: Verify layout works in Canvas iframe constraints
- [ ] **URL Parameters**: Confirm ?compact=1 parameter functions correctly
- [ ] **Cross-browser**: Test in Chrome, Firefox, Safari, Edge
- [ ] **Mobile Canvas**: Test Canvas mobile app compatibility

## Implementation Standards Summary

### Page Creation Workflow
1. **Structure**: Start with semantic HTML5 and proper heading hierarchy
2. **Tables**: Implement complete accessibility markup with captions and scope attributes
3. **Widgets**: Use proper semantic elements with full ARIA support
4. **iframes**: Include comprehensive accessibility attributes and testing
5. **Testing**: Validate with both automated tools and manual testing
6. **Documentation**: Update this standards document as requirements evolve

### Quality Gates
- **No Custom CSS**: Use Canvas native classes only
- **WCAG 2.1 AA**: Meet all Level AA success criteria
- **Screen Reader Compatible**: Test with actual assistive technology
- **Keyboard Accessible**: Full functionality without mouse
- **Mobile Friendly**: Responsive design that works on all devices

### Maintenance Requirements
- **Regular Audits**: Quarterly accessibility testing
- **Standards Updates**: Update document as WCAG guidelines evolve  
- **Team Training**: Ensure all content creators understand requirements
- **Tool Updates**: Keep testing tools and browser extensions current

---

## Additional Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Canvas Accessibility Documentation](https://community.canvaslms.com/t5/Canvas-Accessibility/gh-p/accessibility)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Screen Reader Testing Guide](https://webaim.org/articles/screenreader_testing/)

---

*This document was created based on the implementation of WCAG 2.1 AA standards for the AI Fundamentals Canvas course. Last updated: September 2025.*