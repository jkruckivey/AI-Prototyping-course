# Linear Regression Interactive Demo

An interactive web application for teaching linear regression concepts, designed to complement AI/ML coursework.

## 🎯 Learning Objectives

Students will understand:
- How linear regression finds the best-fitting line through data
- The role of parameters (slope β, intercept ε) in the model
- Mean Squared Error (MSE) as a loss function
- The optimization process that minimizes prediction errors
- Multi-dimensional regression and hyperplanes

## ✨ Features

### Interactive Visualization
- **Real-time parameter adjustment**: Drag sliders to change slope and intercept
- **Live MSE calculation**: See how errors change as you adjust the line
- **Error visualization**: Dotted lines show prediction errors for each data point
- **Auto-fit functionality**: Find the mathematically optimal line with one click

### Educational Components
- **Concept cards**: Click to highlight related interface elements
- **Multi-dimensional examples**: Compare 1D, 3D, and N-dimensional regression
- **Salary prediction tool**: Try multi-dimensional regression with real parameters

### Course Integration
Based on the linear regression module covering:
- Parameters vs hyperparameters
- Loss functions and optimization
- Dimensionality and hyperplanes
- Training process visualization

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