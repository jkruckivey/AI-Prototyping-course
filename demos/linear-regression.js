class LinearRegressionDemo {
  constructor() {
    // Sample data: Years of experience vs Salary (in thousands)
    this.data = {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 20],
      y: [35, 42, 48, 55, 58, 65, 70, 75, 82, 90, 95, 105, 120, 135, 150]
    };
    
    // Initial parameters
    this.slope = 1.0;
    this.intercept = 20;
    
    // Story state
    this.currentStep = 1;
    
    // Multi-dimensional model parameters (for Canadian salary prediction)
    this.multiDimModel = {
      experienceCoeff: 7.3,   // $7.3k CAD per year of experience
      educationCoeff: 10.9,   // $10.9k CAD per education level
      locationCoeff: 4.1,     // $4.1k CAD per location score point
      baseIntercept: 37       // Base salary of $37k CAD
    };
    
    this.initializeControls();
    this.initializeStoryNavigation();
    this.updateVisualization();
  }

  initializeControls() {
    // Slope control
    const slopeSlider = document.getElementById('slope');
    const slopeValue = document.getElementById('slopeValue');
    slopeSlider.addEventListener('input', (e) => {
      this.slope = parseFloat(e.target.value);
      slopeValue.textContent = this.slope.toFixed(1);
      this.updateVisualization();
    });

    // Intercept control
    const interceptSlider = document.getElementById('intercept');
    const interceptValue = document.getElementById('interceptValue');
    interceptSlider.addEventListener('input', (e) => {
      this.intercept = parseFloat(e.target.value);
      interceptValue.textContent = this.intercept;
      this.updateVisualization();
    });

    // Auto-fit button
    document.getElementById('findBestFit').addEventListener('click', () => {
      this.findBestFit();
    });

    // Multi-dimensional prediction
    document.getElementById('predictSalary').addEventListener('click', () => {
      this.predictMultiDimensional();
    });
  }

  initializeStoryNavigation() {
    const storyButtons = document.querySelectorAll('.story-btn');
    storyButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const step = parseInt(e.target.dataset.step);
        this.showStoryStep(step);
      });
    });

    // Auto-advance story every 4 seconds
    this.startAutoAdvance();
  }

  showStoryStep(step) {
    // Hide all steps
    document.querySelectorAll('.story-step').forEach(stepEl => {
      stepEl.classList.remove('active');
    });

    // Show selected step
    document.getElementById(`step${step}`).classList.add('active');

    // Update button states
    document.querySelectorAll('.story-btn').forEach(btn => {
      btn.classList.remove('active');
      if (parseInt(btn.dataset.step) === step) {
        btn.classList.add('active');
      }
    });

    this.currentStep = step;
  }

  startAutoAdvance() {
    // Auto-advance through story steps
    setInterval(() => {
      this.currentStep = (this.currentStep % 4) + 1;
      this.showStoryStep(this.currentStep);
    }, 6000); // Change every 6 seconds
  }

  calculatePredictions() {
    return this.data.x.map(x => this.slope * x + this.intercept);
  }

  calculateMSE() {
    const predictions = this.calculatePredictions();
    const errors = this.data.y.map((actual, i) => Math.pow(actual - predictions[i], 2));
    return errors.reduce((sum, error) => sum + error, 0) / errors.length;
  }

  findBestFit() {
    // Simple linear regression: calculate optimal slope and intercept
    const n = this.data.x.length;
    const sumX = this.data.x.reduce((sum, x) => sum + x, 0);
    const sumY = this.data.y.reduce((sum, y) => sum + y, 0);
    const sumXY = this.data.x.reduce((sum, x, i) => sum + x * this.data.y[i], 0);
    const sumX2 = this.data.x.reduce((sum, x) => sum + x * x, 0);

    // Calculate optimal parameters
    const optimalSlope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const optimalIntercept = (sumY - optimalSlope * sumX) / n;

    // Animate to optimal values
    this.animateToValues(optimalSlope, optimalIntercept);
  }

  animateToValues(targetSlope, targetIntercept) {
    const startSlope = this.slope;
    const startIntercept = this.intercept;
    const duration = 1500; // 1.5 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      this.slope = startSlope + (targetSlope - startSlope) * easeProgress;
      this.intercept = startIntercept + (targetIntercept - startIntercept) * easeProgress;

      // Update UI
      document.getElementById('slope').value = this.slope;
      document.getElementById('intercept').value = this.intercept;
      document.getElementById('slopeValue').textContent = this.slope.toFixed(1);
      document.getElementById('interceptValue').textContent = Math.round(this.intercept);

      this.updateVisualization();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }

  updateVisualization() {
    const predictions = this.calculatePredictions();
    const mse = this.calculateMSE();

    // Update MSE display
    document.getElementById('mse').textContent = mse.toFixed(2);

    // Create plotly traces
    const traces = [
      {
        x: this.data.x,
        y: this.data.y,
        mode: 'markers',
        type: 'scatter',
        name: 'Actual Data',
        marker: {
          color: '#ef4444',
          size: 10,
          line: { color: 'white', width: 2 }
        }
      },
      {
        x: this.data.x,
        y: predictions,
        mode: 'lines',
        type: 'scatter',
        name: `Line: y = ${this.slope.toFixed(1)}x + ${this.intercept.toFixed(0)}`,
        line: { color: '#2563eb', width: 3 }
      }
    ];

    // Add error lines
    const errorLines = [];
    this.data.x.forEach((x, i) => {
      errorLines.push({
        x: [x, x],
        y: [this.data.y[i], predictions[i]],
        mode: 'lines',
        type: 'scatter',
        showlegend: false,
        line: { color: '#6b7280', width: 1, dash: 'dot' },
        hoverinfo: 'skip'
      });
    });

    const layout = {
      title: {
        text: 'Years of Experience vs Salary',
        font: { size: 16, color: '#1f2937' }
      },
      xaxis: {
        title: 'Years of Experience',
        showgrid: true,
        gridcolor: '#e5e7eb'
      },
      yaxis: {
        title: 'Salary ($k)',
        showgrid: true,
        gridcolor: '#e5e7eb'
      },
      plot_bgcolor: '#f9fafb',
      paper_bgcolor: 'white',
      font: { family: 'Inter, sans-serif' },
      margin: { t: 60, r: 20, b: 60, l: 60 },
      showlegend: true,
      legend: { x: 0, y: 1 }
    };

    Plotly.newPlot('scatterPlot', [...traces, ...errorLines], layout, {
      displayModeBar: false,
      responsive: true
    });
  }

  predictMultiDimensional() {
    const experience = parseFloat(document.getElementById('experience').value);
    const education = parseFloat(document.getElementById('education').value);
    const location = parseFloat(document.getElementById('location').value);

    const prediction = 
      this.multiDimModel.experienceCoeff * experience +
      this.multiDimModel.educationCoeff * education +
      this.multiDimModel.locationCoeff * location +
      this.multiDimModel.baseIntercept;

    // Add some realistic variation
    const finalPrediction = Math.round(prediction * 1000); // Convert to actual dollars

    document.getElementById('salaryPrediction').textContent = 
      finalPrediction.toLocaleString();

    // Animate the result
    const resultDiv = document.querySelector('.prediction-result');
    resultDiv.style.transform = 'scale(1.05)';
    resultDiv.style.background = '#10b981';
    
    setTimeout(() => {
      resultDiv.style.transform = 'scale(1)';
    }, 200);
  }
}

// Enhanced educational features
class ConceptHighlighter {
  static highlightConcept(conceptName) {
    // Remove existing highlights
    document.querySelectorAll('.concept-highlight').forEach(el => {
      el.classList.remove('concept-highlight');
    });

    // Add highlight to relevant elements
    const highlights = {
      'parameters': ['.control-group'],
      'mse': ['.metric'],
      'optimization': ['#findBestFit'],
      'dimensionality': ['.dimension-example']
    };

    if (highlights[conceptName]) {
      highlights[conceptName].forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          el.classList.add('concept-highlight');
        });
      });

      // Remove highlights after 3 seconds
      setTimeout(() => {
        document.querySelectorAll('.concept-highlight').forEach(el => {
          el.classList.remove('concept-highlight');
        });
      }, 3000);
    }
  }
}

// Add concept highlighting styles
const highlightStyles = `
  .concept-highlight {
    box-shadow: 0 0 0 3px #fbbf24 !important;
    border-radius: 8px !important;
    transition: box-shadow 0.3s ease !important;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = highlightStyles;
document.head.appendChild(styleSheet);

// Add interactive concept cards
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the demo
  const demo = new LinearRegressionDemo();

  // Add click handlers to concept cards for highlighting
  document.querySelectorAll('.concept-card').forEach((card, index) => {
    card.addEventListener('click', () => {
      const concepts = ['parameters', 'mse', 'optimization', 'dimensionality'];
      ConceptHighlighter.highlightConcept(concepts[index]);
    });
    
    // Add cursor pointer style
    card.style.cursor = 'pointer';
  });

  // Add educational tooltips
  const addTooltip = (element, text) => {
    element.title = text;
    element.style.cursor = 'help';
  };

  // Add tooltips to sliders
  addTooltip(document.getElementById('slope'), 
    'The slope (β) determines how steeply the line rises. Higher values = steeper lines.');
  addTooltip(document.getElementById('intercept'), 
    'The intercept (ε) is where the line crosses the y-axis when x = 0.');
});

// Export for potential testing or extension
window.LinearRegressionDemo = LinearRegressionDemo;
window.ConceptHighlighter = ConceptHighlighter;