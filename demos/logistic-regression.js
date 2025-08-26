// Enhanced Logistic Regression Step-by-Step Demo
class LogisticRegressionStepDemo {
  constructor() {
    this.currentStep = 1;
    this.initializeData();
    this.initializeNavigation();
    this.initializeInteractives();
    this.showStep(1);
  }

  initializeData() {
    // Realistic fruit classification dataset
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
    
    // Model parameters
    this.weight = 1.0;
    this.bias = 0.0;
    this.threshold = 0.5;
  }

  initializeNavigation() {
    // Step navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const step = parseInt(e.target.dataset.step);
        this.showStep(step);
      });
    });

    // Previous/Next buttons
    document.querySelectorAll('.next-step').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const next = parseInt(e.target.dataset.next);
        this.showStep(next);
      });
    });

    document.querySelectorAll('.prev-step').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prev = parseInt(e.target.dataset.prev);
        this.showStep(prev);
      });
    });
  }

  initializeInteractives() {
    // Step 3: Parameter controls
    this.initializeStep3Controls();
    
    // Step 4: Classification controls
    this.initializeStep4Controls();
    
    // Step 5: Practice controls
    this.initializeStep5Controls();
  }

  initializeStep3Controls() {
    const weightSlider = document.getElementById('weight');
    const biasSlider = document.getElementById('bias');
    const weightValue = document.getElementById('weightValue');
    const biasValue = document.getElementById('biasValue');

    if (weightSlider) {
      weightSlider.addEventListener('input', () => {
        this.weight = parseFloat(weightSlider.value);
        weightValue.textContent = this.weight.toFixed(1);
        this.updateStep3Predictions();
        this.updateSigmoidPlot();
      });
    }

    if (biasSlider) {
      biasSlider.addEventListener('input', () => {
        this.bias = parseFloat(biasSlider.value);
        biasValue.textContent = this.bias.toFixed(1);
        this.updateStep3Predictions();
        this.updateSigmoidPlot();
      });
    }

    // Initialize predictions
    setTimeout(() => this.updateStep3Predictions(), 100);
  }

  initializeStep4Controls() {
    const thresholdSlider = document.getElementById('threshold');
    const thresholdValue = document.getElementById('thresholdValue');
    const optimizeBtn = document.getElementById('optimizeParams');

    if (thresholdSlider) {
      thresholdSlider.addEventListener('input', () => {
        this.threshold = parseFloat(thresholdSlider.value);
        thresholdValue.textContent = this.threshold.toFixed(2);
        this.updateStep4Examples();
        this.updateClassificationPlot();
      });
    }

    if (optimizeBtn) {
      optimizeBtn.addEventListener('click', () => {
        this.findOptimalParameters();
      });
    }

    // Initialize examples and plot
    setTimeout(() => {
      this.updateStep4Examples();
      this.updateClassificationPlot();
    }, 100);
  }

  initializeStep5Controls() {
    const classifyBtn = document.getElementById('classifyFruit');
    const colorInput = document.getElementById('practiceColor');
    const weightInput = document.getElementById('practiceWeight');

    if (classifyBtn) {
      classifyBtn.addEventListener('click', () => {
        this.classifyPracticeFruit();
      });
    }

    if (colorInput) {
      colorInput.addEventListener('input', () => {
        this.classifyPracticeFruit();
      });
    }

    if (weightInput) {
      weightInput.addEventListener('input', () => {
        this.classifyPracticeFruit();
      });
    }

    // Initialize quiz
    this.initializeQuiz();
  }

  showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.demo-step').forEach(step => {
      step.classList.remove('active');
    });
    
    // Remove active class from nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Show target step
    const targetStep = document.getElementById(`step${stepNumber}`);
    const targetBtn = document.querySelector(`[data-step="${stepNumber}"]`);
    
    if (targetStep) {
      targetStep.classList.add('active');
    }
    
    if (targetBtn) {
      targetBtn.classList.add('active');
    }
    
    this.currentStep = stepNumber;

    // Initialize step-specific functionality
    if (stepNumber === 3) {
      setTimeout(() => this.updateSigmoidPlot(), 100);
    } else if (stepNumber === 4) {
      setTimeout(() => {
        this.updateStep4Examples();
        this.updateClassificationPlot();
      }, 100);
    } else if (stepNumber === 5) {
      setTimeout(() => this.classifyPracticeFruit(), 100);
    }
  }

  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }

  predictProbability(colorScore) {
    const z = this.weight * colorScore + this.bias;
    return this.sigmoid(z);
  }

  updateStep3Predictions() {
    // Update test case predictions
    const testInputs = [3, 5, 7];
    testInputs.forEach(input => {
      const prob = this.predictProbability(input);
      const percent = (prob * 100).toFixed(0);
      const predElement = document.getElementById(`pred${input}`);
      if (predElement) {
        predElement.textContent = `${percent}%`;
        predElement.style.color = prob >= 0.5 ? '#dc2626' : '#f97316'; // Apple vs Orange color
      }
    });
  }

  updateSigmoidPlot() {
    const plotDiv = document.getElementById('sigmoidPlot');
    if (!plotDiv) return;

    // Generate sigmoid curve data
    const x = [];
    const y = [];
    
    for (let color = 0; color <= 10; color += 0.1) {
      x.push(color);
      y.push(this.predictProbability(color));
    }

    const sigmoidTrace = {
      x: x,
      y: y,
      type: 'scatter',
      mode: 'lines',
      name: 'Sigmoid Curve',
      line: {
        color: '#034638',
        width: 4
      },
      hovertemplate: 'Color: %{x:.1f}<br>P(Apple): %{y:.3f}<extra></extra>'
    };

    // Add test points
    const testTrace = {
      x: [3, 5, 7],
      y: [3, 5, 7].map(x => this.predictProbability(x)),
      type: 'scatter',
      mode: 'markers',
      name: 'Test Points',
      marker: {
        color: '#582C83',
        size: 12,
        line: { color: 'white', width: 2 }
      },
      hovertemplate: 'Color: %{x}<br>Probability: %{y:.3f}<extra></extra>'
    };

    const layout = {
      title: 'Sigmoid Function Shape',
      xaxis: {
        title: 'Color Score',
        range: [0, 10]
      },
      yaxis: {
        title: 'P(Apple)',
        range: [0, 1]
      },
      plot_bgcolor: '#ffffff',
      paper_bgcolor: '#ffffff',
      font: { family: 'Figtree' },
      margin: { t: 50, r: 20, b: 50, l: 50 },
      showlegend: false,
      height: 300
    };

    const config = {
      responsive: true,
      displayModeBar: false
    };

    Plotly.newPlot(plotDiv, [sigmoidTrace, testTrace], layout, config);
  }

  updateStep4Examples() {
    // Update example walkthroughs
    this.updateExampleWalkthrough(1, 8.5, 'prob1', 'thresh1', 'result1');
    this.updateExampleWalkthrough(2, 5.2, 'prob2', 'thresh2', 'result2');
  }

  updateExampleWalkthrough(exampleNum, colorInput, probId, threshId, resultId) {
    const prob = this.predictProbability(colorInput);
    const probElement = document.getElementById(probId);
    const threshElement = document.getElementById(threshId);
    const resultElement = document.getElementById(resultId);

    if (probElement) probElement.textContent = prob.toFixed(2);
    if (threshElement) threshElement.textContent = this.threshold.toFixed(1);
    
    if (resultElement) {
      const isApple = prob >= this.threshold;
      resultElement.innerHTML = isApple ? '🍎 Apple' : '🍊 Orange';
      resultElement.className = `classification ${isApple ? 'apple' : 'orange'}`;
    }
  }

  updateClassificationPlot() {
    const plotDiv = document.getElementById('classificationPlot');
    if (!plotDiv) return;

    // Generate sigmoid curve
    const colorRange = [];
    const probabilities = [];
    
    for (let color = 0; color <= 10; color += 0.1) {
      colorRange.push(color);
      probabilities.push(this.predictProbability(color));
    }

    // Create data traces
    const sigmoidTrace = {
      x: colorRange,
      y: probabilities,
      type: 'scatter',
      mode: 'lines',
      name: 'Sigmoid Curve',
      line: { color: '#034638', width: 4 },
      hovertemplate: 'Color: %{x:.1f}<br>P(Apple): %{y:.3f}<extra></extra>'
    };

    // Threshold line
    const thresholdTrace = {
      x: [0, 10],
      y: [this.threshold, this.threshold],
      type: 'scatter',
      mode: 'lines',
      name: `Threshold (${this.threshold})`,
      line: { color: '#582C83', width: 2, dash: 'dash' }
    };

    // Data points - classified
    const appleTrace = {
      x: this.data.apples.map(d => d.color),
      y: this.data.apples.map(d => 1.05),
      type: 'scatter',
      mode: 'markers',
      name: '🍎 Apples',
      marker: { color: '#dc2626', size: 10 },
      hovertemplate: 'Color: %{x}<br>True: Apple<extra></extra>'
    };

    const orangeTrace = {
      x: this.data.oranges.map(d => d.color),
      y: this.data.oranges.map(d => -0.05),
      type: 'scatter',
      mode: 'markers',
      name: '🍊 Oranges',
      marker: { color: '#f97316', size: 10 },
      hovertemplate: 'Color: %{x}<br>True: Orange<extra></extra>'
    };

    const layout = {
      title: 'Live Classification Results',
      xaxis: {
        title: 'Color Score (0=Green, 10=Red)',
        range: [0, 10]
      },
      yaxis: {
        title: 'Probability of Apple',
        range: [-0.1, 1.15]
      },
      plot_bgcolor: '#ffffff',
      paper_bgcolor: '#ffffff',
      font: { family: 'Figtree' },
      showlegend: true,
      legend: { x: 1, y: 1, xanchor: 'right' },
      margin: { t: 60, r: 20, b: 60, l: 60 },
      height: 400
    };

    const config = {
      responsive: true,
      displayModeBar: false
    };

    Plotly.newPlot(plotDiv, [sigmoidTrace, thresholdTrace, appleTrace, orangeTrace], layout, config);
    
    // Update metrics
    this.updateClassificationMetrics();
  }

  updateClassificationMetrics() {
    let correct = 0;
    let applesCorrect = 0;
    let orangesCorrect = 0;
    let totalApples = this.data.apples.length;
    let totalOranges = this.data.oranges.length;

    this.allData.forEach(item => {
      const prob = this.predictProbability(item.color);
      const prediction = prob >= this.threshold ? 1 : 0;
      
      if (prediction === item.label) {
        correct++;
        if (item.label === 1) applesCorrect++;
        else orangesCorrect++;
      }
    });

    const accuracy = (correct / this.allData.length * 100).toFixed(0);
    
    const accuracyEl = document.getElementById('accuracy');
    const applesEl = document.getElementById('applesCorrect');
    const orangesEl = document.getElementById('orangesCorrect');
    
    if (accuracyEl) accuracyEl.textContent = `${accuracy}%`;
    if (applesEl) applesEl.textContent = `${applesCorrect}/${totalApples}`;
    if (orangesEl) orangesEl.textContent = `${orangesCorrect}/${totalOranges}`;
  }

  findOptimalParameters() {
    const btn = document.getElementById('optimizeParams');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Optimizing...';
    }

    // Simple grid search
    let bestAccuracy = 0;
    let bestWeight = this.weight;
    let bestBias = this.bias;

    for (let w = 0.5; w <= 3.0; w += 0.2) {
      for (let b = -3.0; b <= 3.0; b += 0.3) {
        let correct = 0;
        
        this.allData.forEach(item => {
          const z = w * item.color + b;
          const prob = this.sigmoid(z);
          const prediction = prob >= this.threshold ? 1 : 0;
          if (prediction === item.label) correct++;
        });

        const accuracy = correct / this.allData.length;
        if (accuracy > bestAccuracy) {
          bestAccuracy = accuracy;
          bestWeight = w;
          bestBias = b;
        }
      }
    }

    // Animate to optimal parameters
    this.animateToParameters(bestWeight, bestBias, () => {
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Find Best Parameters';
      }
    });
  }

  animateToParameters(targetWeight, targetBias, callback) {
    const startWeight = this.weight;
    const startBias = this.bias;
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      this.weight = startWeight + (targetWeight - startWeight) * easeProgress;
      this.bias = startBias + (targetBias - startBias) * easeProgress;
      
      // Update UI
      const weightSlider = document.getElementById('weight');
      const biasSlider = document.getElementById('bias');
      const weightValue = document.getElementById('weightValue');
      const biasValue = document.getElementById('biasValue');
      
      if (weightSlider) weightSlider.value = this.weight;
      if (biasSlider) biasSlider.value = this.bias;
      if (weightValue) weightValue.textContent = this.weight.toFixed(1);
      if (biasValue) biasValue.textContent = this.bias.toFixed(1);
      
      this.updateStep4Examples();
      this.updateClassificationPlot();
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        callback();
      }
    };

    requestAnimationFrame(animate);
  }

  classifyPracticeFruit() {
    const colorInput = document.getElementById('practiceColor');
    const weightInput = document.getElementById('practiceWeight');
    
    if (!colorInput || !weightInput) return;
    
    const color = parseFloat(colorInput.value);
    const weight = parseFloat(weightInput.value);
    const prob = this.predictProbability(color);
    const percent = Math.round(prob * 100);
    
    // Update display elements
    this.updatePredictionDisplay(color, prob, percent);
  }

  updatePredictionDisplay(input, prob, percent) {
    const elements = {
      inputDisplay: document.getElementById('inputDisplay'),
      probabilityDisplay: document.getElementById('probabilityDisplay'),
      percentDisplay: document.getElementById('percentDisplay'),
      probCompare: document.getElementById('probCompare'),
      comparisonSymbol: document.getElementById('comparisonSymbol'),
      thresholdCompare: document.getElementById('thresholdCompare'),
      comparisonResult: document.getElementById('comparisonResult'),
      finalClassification: document.getElementById('finalClassification'),
      confidenceFill: document.getElementById('confidenceFill'),
      confidenceText: document.getElementById('confidenceText')
    };

    // Update values
    if (elements.inputDisplay) elements.inputDisplay.textContent = input.toFixed(1);
    if (elements.probabilityDisplay) elements.probabilityDisplay.textContent = prob.toFixed(3);
    if (elements.percentDisplay) elements.percentDisplay.textContent = percent + '%';
    if (elements.probCompare) elements.probCompare.textContent = prob.toFixed(3);
    if (elements.thresholdCompare) elements.thresholdCompare.textContent = this.threshold.toFixed(1);
    
    const isApple = prob >= this.threshold;
    
    if (elements.comparisonSymbol) {
      elements.comparisonSymbol.textContent = isApple ? '≥' : '<';
    }
    
    if (elements.comparisonResult) {
      elements.comparisonResult.textContent = isApple ? '✅' : '❌';
    }
    
    if (elements.finalClassification) {
      elements.finalClassification.innerHTML = isApple ? '🍎 Apple' : '🍊 Orange';
      elements.finalClassification.className = `fruit-result ${isApple ? 'apple' : 'orange'}`;
    }
    
    if (elements.confidenceFill) {
      elements.confidenceFill.style.width = percent + '%';
      elements.confidenceFill.style.backgroundColor = isApple ? '#dc2626' : '#f97316';
    }
    
    if (elements.confidenceText) {
      const confidence = Math.abs(prob - 0.5) * 2; // Scale to 0-1
      let confidenceLevel;
      if (confidence > 0.7) confidenceLevel = 'High Confidence';
      else if (confidence > 0.3) confidenceLevel = 'Medium Confidence';
      else confidenceLevel = 'Low Confidence';
      
      elements.confidenceText.textContent = confidenceLevel;
    }
  }

  initializeQuiz() {
    document.querySelectorAll('.quiz-option').forEach(option => {
      option.addEventListener('click', (e) => {
        const question = e.target.closest('.quiz-question');
        const isCorrect = e.target.dataset.correct === 'true';
        const explanation = question.querySelector('.quiz-explanation');
        
        // Remove existing styles
        question.querySelectorAll('.quiz-option').forEach(opt => {
          opt.classList.remove('correct', 'incorrect');
        });
        
        // Style the clicked option
        e.target.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        // Show correct answer if wrong was clicked
        if (!isCorrect) {
          const correctOption = question.querySelector('[data-correct="true"]');
          if (correctOption) {
            correctOption.classList.add('correct');
          }
        }
        
        // Show explanation
        if (explanation) {
          explanation.classList.remove('hidden');
        }
      });
    });
  }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  new LogisticRegressionStepDemo();
});