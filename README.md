# AI Prototyping Course - Interactive Learning Hub

A comprehensive Canvas LMS course with 60+ interactive widgets for teaching AI and machine learning concepts, designed for educational use with professional Ivey branding and accessibility compliance.

## 🎯 Course Overview

This AI Prototyping course provides a complete 5-week curriculum with hands-on demonstrations:

### Course Structure
- **Week 1**: AI fundamentals, data understanding, machine learning models
- **Week 2**: Supervised learning (linear regression, logistic regression, KNN, SVM, trees)
- **Week 3**: Unsupervised learning (clustering, PCA, preprocessing, recommendations)
- **Week 4**: Model evaluation, cross-validation, business metrics, threshold optimization
- **Week 5**: Deployment, monitoring, governance, and AI ethics

### Interactive Components
- **60+ Canvas-ready widgets** with consistent Ivey branding
- **Full algorithm demonstrations** in the main demos folder
- **AMBA template compliance** for accessibility (WCAG AA standards)
- **Universal design system** with `ivey-widget-base.css`
- **Canvas LMS integration** with dp-framework support

### Learning Objectives
- Master core ML algorithms through hands-on interaction
- Understand business applications and evaluation metrics
- Learn deployment best practices and governance
- Develop practical AI implementation skills
- Build foundation for advanced AI topics

## 🏗️ Project Architecture

### Canvas LMS Integration
- **Development Files/**: 5 weeks of structured Canvas pages
- **demos/widgets/**: 60+ embeddable interactive widgets
- **AMBA template compliance**: Accessibility and pedagogical standards
- **GitHub Pages deployment**: Automatic widget hosting

### Universal Design System
- **Consistent Ivey branding**: #034638 green, #582C83 purple, Figtree font
- **Responsive design**: Optimized for Canvas embedding
- **Accessibility first**: WCAG AA contrast standards, screen reader support
- **Plotly.js v2.28.0**: Standardized visualizations across all widgets

## 🚀 Getting Started

### Simple Setup
1. Open `index.html` in any modern web browser
2. Start adjusting parameters and exploring concepts
3. No installation or server required

### For Development
```bash
# Clone or download the files
# Serve with any local server for best experience
python -m http.server 8000
# or
npx serve .
```

## 📚 How to Use

### For Students
1. **Explore the basics**: Adjust slope and intercept sliders to see how they affect the line
2. **Understand errors**: Watch how MSE changes as you move the line
3. **Find the optimum**: Click "Find Best Fit" to see the algorithm in action
4. **Try multi-dimensional**: Use the prediction tool to see how multiple features work

### For Instructors
- Use as a live demo during lectures
- Assign as pre-class exploration
- Reference specific concepts by clicking concept cards
- Extend with additional datasets or features

## 🔧 Technical Details

### Technologies
- **Vanilla JavaScript**: No framework dependencies
- **Plotly.js**: Interactive charts and visualizations
- **CSS Grid/Flexbox**: Responsive layout
- **Modern Web APIs**: Smooth animations and interactions

### Key Components
- `LinearRegressionDemo` class: Core functionality and visualization
- `ConceptHighlighter` class: Educational interaction features
- Real linear regression math: Proper least-squares calculation
- Responsive design: Works on desktop and mobile

### Data
- Sample dataset: Years of experience vs salary
- 15 realistic data points for clear pattern recognition
- Multi-dimensional model with experience, education, and location factors

## 📈 Educational Benefits

### Conceptual Understanding
- **Visual learning**: See math concepts in action
- **Interactive exploration**: Learn by doing, not just reading
- **Immediate feedback**: Understand cause and effect relationships

### Practical Skills
- **Parameter intuition**: Develop feel for how parameters affect models
- **Optimization awareness**: Understand the training process
- **Multi-dimensional thinking**: Bridge from simple to complex models

## 🎨 Customization

### Adding New Datasets
```javascript
// In script.js, modify the data object:
this.data = {
  x: [your, x, values],
  y: [your, y, values]
};
```

### Styling
- Modify `styles.css` for visual customization
- CSS custom properties make theming easy
- Responsive design adapts to different screen sizes

### Extended Features
- Add more loss functions (MAE, Huber, etc.)
- Include regularization (Ridge, Lasso)
- Add polynomial regression demonstration
- Include confidence intervals

## 🤝 Course Integration

### Pre-Class Work
- Students explore basic concepts independently
- Builds intuition before formal math introduction

### In-Class Demonstration
- Live parameter adjustment during lecture
- Students can follow along on their devices
- Interactive Q&A using the visualization

### Post-Class Practice
- Homework assignments using the tool
- Extended exploration of multi-dimensional concepts
- Foundation for more advanced ML topics

## 📱 Browser Support

- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- 📱 Mobile browsers (with touch-friendly controls)

---

Built with ❤️ for AI/ML education. Perfect for introductory courses, bootcamps, and self-study.