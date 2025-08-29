class LinearRegressionSimpleDemo {
  constructor() {
    // Sample data: Years of experience vs Salary (in thousands)
    this.data = {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 20],
      y: [35, 42, 48, 55, 58, 65, 70, 75, 82, 90, 95, 105, 120, 135, 150]
    };
    
    // Initial parameters
    this.slope = 7.3;
    this.intercept = 37;
    
    this.initializeControls();
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
    document.getElementById('currentMSE').textContent = mse.toFixed(2);
    document.getElementById('currentEquation').textContent = `Salary = ${this.slope.toFixed(1)} × Experience + ${this.intercept.toFixed(0)}`;

    // Update performance insights
    const avgError = Math.sqrt(mse);
    document.getElementById('perfMSE').textContent = mse.toFixed(2);
    document.getElementById('perfAvgError').textContent = `$${avgError.toFixed(1)}k`;
    document.getElementById('perfInterpretation').textContent = this.getInterpretation(mse);
    document.getElementById('modelInterpretation').textContent = `With current parameters, each year of experience adds $${(this.slope * 1000).toLocaleString()} to salary, starting from a base of $${(this.intercept * 1000).toLocaleString()}.`;


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

    Plotly.newPlot('regressionPlot', [...traces, ...errorLines], layout, {
      displayModeBar: false,
      responsive: true
    });
  }

  getInterpretation(mse) {
    if (mse < 50) return 'Excellent fit!';
    if (mse < 100) return 'Great fit!';
    if (mse < 250) return 'Good fit.';
    if (mse < 500) return 'Decent fit.';
    return 'Poor fit.';
  }
}

// Initialize the demo when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new LinearRegressionSimpleDemo();
});