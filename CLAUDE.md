# AI Prototyping Course - Claude Code Reference

## Project Overview
Interactive learning hub for machine learning concepts with hands-on demonstrations. Built for educational use with professional Ivey branding.

## Repository
- **GitHub**: https://github.com/jkruckivey/AI-Prototyping-course.git
- **Local Path**: `C:\Users\jkruck\Ivey Business School\EdTech Lab - Documents\Github\linear-regression-demo`

## Project Structure
```
├── index.html              # Main course hub landing page
├── styles.css              # Course hub styling
├── script.js               # Course hub interactions and progress tracking
├── README.md               # Project documentation
├── demos/
│   ├── shared-demo.css     # Shared stylesheet for all demos
│   ├── linear-regression.html    # Linear regression demo
│   ├── linear-regression.js      # Linear regression functionality  
│   ├── logistic-regression.html  # Logistic regression demo
│   ├── logistic-regression.js    # Logistic regression functionality
│   ├── knn.html            # K-Nearest Neighbors demo
│   └── knn.js              # KNN functionality
```

## Available Demos
1. **Linear Regression** - MBA salary prediction with parameter adjustment
2. **Logistic Regression** - Apple vs Orange classification with sigmoid function
3. **K-Nearest Neighbors** - Height-based gender classification and chest circumference regression

## Key Technologies
- **Plotly.js** - Interactive visualizations (loaded via CDN)
- **Vanilla JavaScript** - No framework dependencies
- **CSS Grid/Flexbox** - Responsive layouts
- **Figtree Font** - Google Fonts integration

## Styling System
- **Shared CSS**: `demos/shared-demo.css` used by all demo pages
- **Ivey Branding**: 
  - Primary: `#034638` (Ivey Green)
  - Accent: `#582C83` (Ivey Purple) 
  - Classification colors: `#dc2626` (Apple Red), `#f97316` (Orange), `#3b82f6` (Male Blue), `#ec4899` (Female Pink)
- **Responsive Design**: Mobile-friendly breakpoints

## Demo Architecture
Each demo follows consistent structure:
- **4-step storytelling** with navigation controls
- **Interactive parameter controls** with real-time updates
- **Plotly visualization** with educational annotations
- **Concept explanation cards** with click highlighting
- **Custom prediction tools** for hands-on testing

## Adding New Demos
1. Create `demos/[algorithm-name].html` using existing demo as template
2. Create `demos/[algorithm-name].js` with interactive functionality
3. Add demo card to main `index.html` in demos grid
4. Extend `demos/shared-demo.css` if algorithm-specific styles needed
5. Test all interactive features work correctly
6. Commit and push to GitHub

## Development Commands
```bash
# Navigate to project
cd "C:\Users\jkruck\Ivey Business School\EdTech Lab - Documents\Github\linear-regression-demo"

# Check git status
git status

# Add and commit changes
git add .
git commit -m "Description of changes

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to GitHub
git push
```

## Testing
- **Manual testing** - Open demos in browser and test all interactive features
- **Responsive testing** - Check mobile/tablet layouts
- **Cross-browser testing** - Verify in Chrome, Firefox, Safari, Edge
- No automated test suite currently implemented

## Deployment
- **Static hosting** - All files are client-side, no server required
- **GitHub Pages compatible** - Can deploy directly from repository
- **Local development** - Simply open `index.html` in browser

## Educational Features
- **Progress tracking** - LocalStorage-based completion tracking
- **Concept highlighting** - Click concept cards to highlight related UI elements
- **Interactive storytelling** - Auto-advancing narrative with manual controls
- **Real-time feedback** - Immediate visual response to parameter changes

## Common Issues
- **Plotly.js loading** - Ensure CDN connection for visualizations
- **Path references** - Use relative paths for demo navigation
- **CSS conflicts** - All demos share single stylesheet, test style changes across all demos

## Future Enhancements
- Neural Networks demo
- Decision Trees demo  
- Classification algorithms comparison
- Clustering (K-means) demo
- Optimization/Gradient Descent visualization

## Notes for Claude Code
- Always test new demos thoroughly before committing
- Maintain consistent Ivey branding across all new features
- Follow existing naming conventions and file structure
- Update this CLAUDE.md file when making significant changes
- Shared CSS approach means style changes affect all demos

## Changelog

### 2025-08-26: Accessibility Update - Color Contrast
- **Objective**: Improve readability and accessibility by fixing color contrast issues across the application.
- **Changes**:
  - Introduced new, higher-contrast color variables in `styles.css` and `demos/shared-demo.css` for text and UI elements.
  - Updated CSS rules to use the new color variables, ensuring compliance with WCAG AA standards.
  - Affected elements include subtitles, labels, metric values, and various colored text elements within the interactive demos.
  - The new colors are darker shades of the original brand palette to maintain the visual identity while improving readability.
