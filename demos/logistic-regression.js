// Logistic Regression Interactive Demo
class LogisticRegressionDemo {
  constructor() {
    this.initializeData();
    this.initializeUI();
    this.initializePlot();
    this.bindEvents();
    this.updateVisualization();
    this.startStoryNavigation();
  }

  initializeData() {
    // Generate realistic fruit classification dataset (metric units)
    this.data = {
      apples: [
        { color: 7.2, weight: 0.145, label: 1, fruit: 'Apple' },
        { color: 8.1, weight: 0.152, label: 1, fruit: 'Apple' },
        { color: 6.8, weight: 0.138, label: 1, fruit: 'Apple' },
        { color: 7.9, weight: 0.160, label: 1, fruit: 'Apple' },
        { color: 8.5, weight: 0.142, label: 1, fruit: 'Apple' },
        { color: 7.4, weight: 0.155, label: 1, fruit: 'Apple' },
        { color: 8.8, weight: 0.148, label: 1, fruit: 'Apple' },
        { color: 7.1, weight: 0.163, label: 1, fruit: 'Apple' },
        { color: 8.3, weight: 0.150, label: 1, fruit: 'Apple' },
        { color: 7.6, weight: 0.144, label: 1, fruit: 'Apple' }
      ],
      oranges: [
        { color: 4.2, weight: 0.180, label: 0, fruit: 'Orange' },
        { color: 3.8, weight: 0.195, label: 0, fruit: 'Orange' },
        { color: 4.9, weight: 0.172, label: 0, fruit: 'Orange' },
        { color: 3.5, weight: 0.188, label: 0, fruit: 'Orange' },
        { color: 4.6, weight: 0.175, label: 0, fruit: 'Orange' },
        { color: 3.2, weight: 0.192, label: 0, fruit: 'Orange' },
        { color: 4.1, weight: 0.168, label: 0, fruit: 'Orange' },
        { color: 3.9, weight: 0.185, label: 0, fruit: 'Orange' },
        { color: 4.4, weight: 0.177, label: 0, fruit: 'Orange' },
        { color: 3.7, weight: 0.190, label: 0, fruit: 'Orange' }
      ]
    };

    this.allData = [...this.data.apples, ...this.data.oranges];
    
    // Initialize parameters
    this.slope = 1.0;
    this.shift = 5.0;
    this.threshold = 0.5;
  }

  initializeUI() {
    // Get control elements
    this.slopeSlider = document.getElementById('slope');
    this.shiftSlider = document.getElementById('shift');
    this.thresholdSlider = document.getElementById('threshold');
    
    this.slopeValue = document.getElementById('slopeValue');
    this.shiftValue = document.getElementById('shiftValue');
    this.thresholdValue = document.getElementById('thresholdValue');
    
    this.accuracyDisplay = document.getElementById('accuracy');
    this.applesCountDisplay = document.getElementById('applesCount');
    this.orangesCountDisplay = document.getElementById('orangesCount');
    
    this.findBestFitBtn = document.getElementById('findBestFit');
    this.predictBtn = document.getElementById('predictFruit');
    
    // Prediction inputs
    this.colorInput = document.getElementById('colorInput');
    this.weightInput = document.getElementById('weightInput');
    
    // Prediction display elements
    this.probabilityFill = document.getElementById('probabilityFill');
    this.probabilityText = document.getElementById('probabilityText');
    this.predictedClass = document.getElementById('predictedClass');
  }

  initializePlot() {
    this.plotDiv = document.getElementById('classificationPlot');
  }

  bindEvents() {
    // Parameter controls
    this.slopeSlider.addEventListener('input', () => {
      this.slope = parseFloat(this.slopeSlider.value);
      this.slopeValue.textContent = this.slope.toFixed(1);
      this.updateVisualization();
    });

    this.shiftSlider.addEventListener('input', () => {
      this.shift = parseFloat(this.shiftSlider.value);
      this.shiftValue.textContent = this.shift.toFixed(1);
      this.updateVisualization();
    });

    this.thresholdSlider.addEventListener('input', () => {
      this.threshold = parseFloat(this.thresholdSlider.value);
      this.thresholdValue.textContent = this.threshold.toFixed(2);
      this.updateVisualization();
    });

    // Best fit button
    this.findBestFitBtn.addEventListener('click', () => {
      this.findOptimalParameters();
    });

    // Prediction functionality
    this.predictBtn.addEventListener('click', () => {
      this.makePrediction();
    });

    // Real-time prediction updates
    this.colorInput.addEventListener('input', () => {
      this.makePrediction();
    });

    this.weightInput.addEventListener('input', () => {
      this.makePrediction();
    });

    // Story navigation
    document.querySelectorAll('.story-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const step = parseInt(e.target.dataset.step);
        this.showStep(step);
      });
    });
  }

  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }

  predictProbability(colorScore) {
    const z = this.slope * (colorScore - this.shift);
    return this.sigmoid(z);
  }

  updateVisualization() {
    // Generate sigmoid curve
    const colorRange = [];
    const probabilities = [];
    
    for (let color = 0; color <= 10; color += 0.1) {
      colorRange.push(color);
      probabilities.push(this.predictProbability(color));
    }

    // Create scatter plot data
    const appleTrace = {
      x: this.data.apples.map(d => d.color),
      y: this.data.apples.map(d => 1.02), // Slightly above 1 for visibility
      mode: 'markers',
      type: 'scatter',
      name: '🍎 Apples',
      marker: {
        color: '#dc2626',
        size: 12,
        symbol: 'circle'
      },
      hovertemplate: 'Color: %{x}<br>Fruit: Apple<extra></extra>'
    };

    const orangeTrace = {
      x: this.data.oranges.map(d => d.color),
      y: this.data.oranges.map(d => -0.02), // Slightly below 0 for visibility
      mode: 'markers',
      type: 'scatter',
      name: '🍊 Oranges',
      marker: {
        color: '#f97316',
        size: 12,
        symbol: 'circle'
      },
      hovertemplate: 'Color: %{x}<br>Fruit: Orange<extra></extra>'
    };

    // Sigmoid curve
    const sigmoidTrace = {
      x: colorRange,
      y: probabilities,
      mode: 'lines',
      type: 'scatter',
      name: 'Sigmoid Curve',
      line: {
        color: '#034638',
        width: 4,
        shape: 'spline'
      },
      hovertemplate: 'Color: %{x:.1f}<br>P(Apple): %{y:.3f}<extra></extra>'
    };

    // Decision threshold line
    const thresholdTrace = {
      x: [0, 10],
      y: [this.threshold, this.threshold],
      mode: 'lines',
      type: 'scatter',
      name: `Decision Threshold (${this.threshold})`,
      line: {
        color: '#582C83',
        width: 2,
        dash: 'dash'
      },
      hovertemplate: 'Threshold: %{y:.2f}<extra></extra>'
    };

    const layout = {
      title: {
        text: 'Logistic Regression: Apple vs Orange Classification',
        font: { size: 18, family: 'Figtree', color: '#034638' }
      },
      xaxis: {
        title: 'Color Score (0=Green, 10=Red)',
        range: [0, 10],
        gridcolor: '#e5e7eb',
        showgrid: true
      },
      yaxis: {
        title: 'Probability of Apple',
        range: [-0.1, 1.1],
        gridcolor: '#e5e7eb',
        showgrid: true,
        tickformat: '.2f'
      },
      plot_bgcolor: '#ffffff',
      paper_bgcolor: '#ffffff',
      font: { family: 'Figtree' },
      showlegend: true,
      legend: {
        x: 1,
        y: 1,
        xanchor: 'right',
        yanchor: 'top',
        bgcolor: 'rgba(255,255,255,0.8)',
        bordercolor: '#e5e7eb',
        borderwidth: 1
      },
      margin: { t: 60, r: 20, b: 60, l: 60 },
      hovermode: 'x unified'
    };

    const config = {
      responsive: true,
      displayModeBar: false
    };

    Plotly.newPlot(this.plotDiv, [sigmoidTrace, thresholdTrace, appleTrace, orangeTrace], layout, config);
    
    // Update metrics
    this.updateMetrics();
  }

  updateMetrics() {
    let correctPredictions = 0;
    let applesClassified = 0;
    let orangesClassified = 0;

    this.allData.forEach(item => {
      const probability = this.predictProbability(item.color);
      const prediction = probability >= this.threshold ? 1 : 0;
      
      if (prediction === item.label) {
        correctPredictions++;
      }
      
      if (prediction === 1) {
        applesClassified++;
      } else {
        orangesClassified++;
      }
    });

    const accuracy = (correctPredictions / this.allData.length * 100).toFixed(1);
    
    this.accuracyDisplay.textContent = `${accuracy}%`;
    this.applesCountDisplay.textContent = applesClassified;
    this.orangesCountDisplay.textContent = orangesClassified;
  }

  findOptimalParameters() {
    this.findBestFitBtn.disabled = true;
    this.findBestFitBtn.textContent = 'Finding Optimal...';

    // Simple optimization to maximize accuracy
    let bestAccuracy = 0;
    let bestSlope = this.slope;
    let bestShift = this.shift;

    for (let slope = 0.5; slope <= 3.0; slope += 0.1) {
      for (let shift = 2.0; shift <= 8.0; shift += 0.2) {
        let correct = 0;
        
        this.allData.forEach(item => {
          const z = slope * (item.color - shift);
          const probability = this.sigmoid(z);
          const prediction = probability >= this.threshold ? 1 : 0;
          
          if (prediction === item.label) {
            correct++;
          }
        });

        const accuracy = correct / this.allData.length;
        if (accuracy > bestAccuracy) {
          bestAccuracy = accuracy;
          bestSlope = slope;
          bestShift = shift;
        }
      }
    }

    // Animate to optimal parameters
    this.animateToParameters(bestSlope, bestShift);
  }

  animateToParameters(targetSlope, targetShift) {
    const startSlope = this.slope;
    const startShift = this.shift;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing function
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      this.slope = startSlope + (targetSlope - startSlope) * easeProgress;
      this.shift = startShift + (targetShift - startShift) * easeProgress;
      
      // Update UI
      this.slopeSlider.value = this.slope;
      this.shiftSlider.value = this.shift;
      this.slopeValue.textContent = this.slope.toFixed(1);
      this.shiftValue.textContent = this.shift.toFixed(1);
      
      this.updateVisualization();
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.findBestFitBtn.disabled = false;
        this.findBestFitBtn.textContent = 'Find Optimal Parameters';
      }
    };

    requestAnimationFrame(animate);
  }

  makePrediction() {
    const colorScore = parseFloat(this.colorInput.value);
    const weight = parseFloat(this.weightInput.value);
    
    const probability = this.predictProbability(colorScore);
    const percentProb = (probability * 100).toFixed(1);
    
    // Update probability bar
    this.probabilityFill.style.width = `${probability * 100}%`;
    this.probabilityText.textContent = `${percentProb}%`;
    
    // Determine classification
    const isApple = probability >= this.threshold;
    const confidence = isApple ? probability : (1 - probability);
    
    if (isApple) {
      this.predictedClass.innerHTML = '🍎 Apple';
      this.predictedClass.style.color = '#dc2626';
      this.probabilityFill.style.backgroundColor = '#dc2626';
    } else {
      this.predictedClass.innerHTML = '🍊 Orange';
      this.predictedClass.style.color = '#f97316';
      this.probabilityFill.style.backgroundColor = '#f97316';
    }
  }

  // Story navigation system
  startStoryNavigation() {
    this.currentStep = 1;
    this.showStep(1);
  }

  showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.story-step').forEach(step => {
      step.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.story-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Show selected step
    const targetStep = document.getElementById(`step${stepNumber}`);
    const targetBtn = document.querySelector(`[data-step="${stepNumber}"]`);
    
    if (targetStep) {
      targetStep.classList.add('active');
    }
    
    if (targetBtn) {
      targetBtn.classList.add('active');
    }
    
    this.currentStep = stepNumber;
  }
}

// Concept highlighter for educational interaction
class ConceptHighlighter {
  constructor() {
    this.bindConceptCards();
  }

  bindConceptCards() {
    document.querySelectorAll('.concept-card').forEach(card => {
      card.addEventListener('click', () => {
        this.highlightConcept(card);
      });
    });
  }

  highlightConcept(card) {
    const title = card.querySelector('h3').textContent.toLowerCase();
    
    // Remove existing highlights
    document.querySelectorAll('.concept-highlight').forEach(el => {
      el.classList.remove('concept-highlight');
    });
    
    // Add temporary highlight class
    card.classList.add('concept-highlight');
    
    // Highlight related elements based on concept
    if (title.includes('sigmoid')) {
      document.querySelectorAll('[id*="slope"], [id*="shift"]').forEach(el => {
        el.classList.add('concept-highlight');
      });
    } else if (title.includes('decision')) {
      document.querySelectorAll('[id*="threshold"]').forEach(el => {
        el.classList.add('concept-highlight');
      });
    } else if (title.includes('classification')) {
      document.querySelectorAll('.prediction-examples, .metric').forEach(el => {
        el.classList.add('concept-highlight');
      });
    }
    
    // Remove highlights after 3 seconds
    setTimeout(() => {
      document.querySelectorAll('.concept-highlight').forEach(el => {
        el.classList.remove('concept-highlight');
      });
    }, 3000);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new LogisticRegressionDemo();
  new ConceptHighlighter();
});