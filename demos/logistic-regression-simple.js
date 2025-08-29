class LogisticRegressionSimpleDemo {
  constructor() {
    this.initializeData();
    this.initializeInteractives();
    this.updateClassificationPlot();
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

  initializeInteractives() {
    const thresholdSlider = document.getElementById('threshold');
    const thresholdValue = document.getElementById('thresholdValue');
    const optimizeBtn = document.getElementById('optimizeParams');

    if (thresholdSlider) {
      thresholdSlider.addEventListener('input', () => {
        this.threshold = parseFloat(thresholdSlider.value);
        thresholdValue.textContent = this.threshold.toFixed(2);
        this.updateClassificationPlot();
      });
    }

    if (optimizeBtn) {
      optimizeBtn.addEventListener('click', () => {
        this.findOptimalParameters();
      });
    }

    // Initialize plot
    this.updateClassificationPlot();
  }

  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }

  predictProbability(colorScore) {
    const z = this.weight * colorScore + this.bias;
    return this.sigmoid(z);
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
      
      this.updateClassificationPlot();
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        callback();
      }
    };

    requestAnimationFrame(animate);
  }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  new LogisticRegressionSimpleDemo();
});