// K-Nearest Neighbors Interactive Demo
class KNNDemo {
  constructor() {
    this.initializeData();
    this.initializeUI();
    this.initializePlot();
    this.bindEvents();
    this.updateVisualization();
    this.startStoryNavigation();
  }

  initializeData() {
    // Generate realistic height-gender dataset
    this.data = {
      males: [
        { height: 185.2, gender: 'Male', chest: 98 },
        { height: 178.5, gender: 'Male', chest: 94 },
        { height: 182.1, gender: 'Male', chest: 96 },
        { height: 175.8, gender: 'Male', chest: 92 },
        { height: 188.7, gender: 'Male', chest: 102 },
        { height: 179.3, gender: 'Male', chest: 95 },
        { height: 176.9, gender: 'Male', chest: 93 },
        { height: 183.4, gender: 'Male', chest: 97 },
        { height: 180.6, gender: 'Male', chest: 95 },
        { height: 177.2, gender: 'Male', chest: 94 },
        { height: 184.8, gender: 'Male', chest: 99 },
        { height: 181.5, gender: 'Male', chest: 96 },
        { height: 179.7, gender: 'Male', chest: 95 },
        { height: 186.3, gender: 'Male', chest: 100 },
        { height: 174.6, gender: 'Male', chest: 91 }
      ],
      females: [
        { height: 162.4, gender: 'Female', chest: 84 },
        { height: 168.1, gender: 'Female', chest: 87 },
        { height: 165.7, gender: 'Female', chest: 85 },
        { height: 159.3, gender: 'Female', chest: 82 },
        { height: 171.2, gender: 'Female', chest: 89 },
        { height: 163.8, gender: 'Female', chest: 84 },
        { height: 166.5, gender: 'Female', chest: 86 },
        { height: 158.9, gender: 'Female', chest: 81 },
        { height: 169.7, gender: 'Female', chest: 88 },
        { height: 164.3, gender: 'Female', chest: 85 },
        { height: 167.8, gender: 'Female', chest: 87 },
        { height: 161.6, gender: 'Female', chest: 83 },
        { height: 170.4, gender: 'Female', chest: 88 },
        { height: 157.2, gender: 'Female', chest: 80 },
        { height: 172.9, gender: 'Female', chest: 90 }
      ]
    };

    this.allData = [...this.data.males, ...this.data.females];
    
    // Initialize parameters
    this.k = 5;
    this.newHeight = 179;
    this.regressionK = 3;
    this.regressionHeight = 180;
  }

  initializeUI() {
    // Get control elements
    this.kValueSlider = document.getElementById('kValue');
    this.newHeightSlider = document.getElementById('newHeight');
    
    this.kValueDisplay = document.getElementById('kValueDisplay');
    this.newHeightDisplay = document.getElementById('newHeightDisplay');
    
    this.predictedGender = document.getElementById('predictedGender');
    this.confidence = document.getElementById('confidence');
    this.closestDistance = document.getElementById('closestDistance');
    
    this.addDataPointBtn = document.getElementById('addDataPoint');
    
    // Regression controls
    this.regressionHeightSlider = document.getElementById('regressionHeight');
    this.regressionKSlider = document.getElementById('regressionK');
    this.regressionHeightDisplay = document.getElementById('regressionHeightDisplay');
    this.regressionKDisplay = document.getElementById('regressionKDisplay');
    this.predictedChest = document.getElementById('predictedChest');
    this.regressionNeighbors = document.getElementById('regressionNeighbors');
    
    // Test tool controls
    this.testHeight = document.getElementById('testHeight');
    this.testK = document.getElementById('testK');
    this.runPredictionBtn = document.getElementById('runPrediction');
    this.neighborsDisplay = document.getElementById('neighborsDisplay');
    this.testPrediction = document.getElementById('testPrediction');
  }

  initializePlot() {
    this.plotDiv = document.getElementById('knnPlot');
  }

  bindEvents() {
    // Main KNN controls
    this.kValueSlider.addEventListener('input', () => {
      this.k = parseInt(this.kValueSlider.value);
      this.kValueDisplay.textContent = this.k;
      this.updateVisualization();
    });

    this.newHeightSlider.addEventListener('input', () => {
      this.newHeight = parseFloat(this.newHeightSlider.value);
      this.newHeightDisplay.textContent = this.newHeight;
      this.updateVisualization();
    });

    // Regression controls
    this.regressionHeightSlider.addEventListener('input', () => {
      this.regressionHeight = parseInt(this.regressionHeightSlider.value);
      this.regressionHeightDisplay.textContent = this.regressionHeight;
      this.updateRegressionPrediction();
    });

    this.regressionKSlider.addEventListener('input', () => {
      this.regressionK = parseInt(this.regressionKSlider.value);
      this.regressionKDisplay.textContent = this.regressionK;
      this.updateRegressionPrediction();
    });

    // Add data point functionality
    this.addDataPointBtn.addEventListener('click', () => {
      this.addNewDataPoint();
    });

    // Test tool
    this.runPredictionBtn.addEventListener('click', () => {
      this.runCustomPrediction();
    });

    // Story navigation
    document.querySelectorAll('.story-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const step = parseInt(e.target.dataset.step);
        this.showStep(step);
      });
    });
  }

  calculateDistance(height1, height2) {
    return Math.abs(height1 - height2);
  }

  findKNearestNeighbors(targetHeight, k) {
    // Calculate distances to all points
    const distances = this.allData.map(point => ({
      ...point,
      distance: this.calculateDistance(targetHeight, point.height)
    }));

    // Sort by distance and take k nearest
    distances.sort((a, b) => a.distance - b.distance);
    return distances.slice(0, k);
  }

  classifyKNN(targetHeight, k) {
    const neighbors = this.findKNearestNeighbors(targetHeight, k);
    
    // Count votes
    let maleVotes = 0;
    let femaleVotes = 0;
    
    neighbors.forEach(neighbor => {
      if (neighbor.gender === 'Male') {
        maleVotes++;
      } else {
        femaleVotes++;
      }
    });

    const prediction = maleVotes > femaleVotes ? 'Male' : 'Female';
    const confidence = Math.max(maleVotes, femaleVotes) / k;
    const closestDistance = neighbors[0].distance;

    return {
      prediction,
      confidence,
      closestDistance,
      neighbors,
      maleVotes,
      femaleVotes
    };
  }

  regressKNN(targetHeight, k) {
    const neighbors = this.findKNearestNeighbors(targetHeight, k);
    
    // Average the chest measurements
    const sum = neighbors.reduce((acc, neighbor) => acc + neighbor.chest, 0);
    const prediction = sum / k;

    return {
      prediction: prediction.toFixed(1),
      neighbors
    };
  }

  updateVisualization() {
    // Get KNN prediction
    const result = this.classifyKNN(this.newHeight, this.k);
    
    // Update UI
    this.predictedGender.textContent = result.prediction;
    this.predictedGender.className = `metric-value ${result.prediction.toLowerCase()}`;
    this.confidence.textContent = `${(result.confidence * 100).toFixed(0)}%`;
    this.closestDistance.textContent = `${result.closestDistance.toFixed(1)}cm`;

    // Create visualization
    this.createKNNPlot(result);
  }

  createKNNPlot(result) {
    // Male data points
    const maleTrace = {
      x: this.data.males.map(d => d.height),
      y: this.data.males.map(() => 1),
      mode: 'markers',
      type: 'scatter',
      name: '🚹 Males',
      marker: {
        color: '#3b82f6',
        size: 10,
        symbol: 'square'
      },
      hovertemplate: 'Height: %{x}cm<br>Gender: Male<extra></extra>'
    };

    // Female data points
    const femaleTrace = {
      x: this.data.females.map(d => d.height),
      y: this.data.females.map(() => 0),
      mode: 'markers',
      type: 'scatter',
      name: '🚺 Females',
      marker: {
        color: '#ec4899',
        size: 10,
        symbol: 'circle'
      },
      hovertemplate: 'Height: %{x}cm<br>Gender: Female<extra></extra>'
    };

    // Highlight K nearest neighbors
    const neighborHeights = result.neighbors.map(n => n.height);
    const neighborGenders = result.neighbors.map(n => n.gender);
    const neighborY = neighborGenders.map(g => g === 'Male' ? 1 : 0);

    const neighborsTrace = {
      x: neighborHeights,
      y: neighborY,
      mode: 'markers',
      type: 'scatter',
      name: `${this.k} Nearest Neighbors`,
      marker: {
        color: '#fbbf24',
        size: 15,
        symbol: 'star',
        line: {
          color: '#d97706',
          width: 2
        }
      },
      hovertemplate: 'Height: %{x}cm<br>Distance: %{customdata:.1f}cm<extra></extra>',
      customdata: result.neighbors.map(n => n.distance)
    };

    // New data point
    const newPointTrace = {
      x: [this.newHeight],
      y: [result.prediction === 'Male' ? 1 : 0],
      mode: 'markers',
      type: 'scatter',
      name: 'New Person',
      marker: {
        color: result.prediction === 'Male' ? '#1e40af' : '#be185d',
        size: 20,
        symbol: 'diamond',
        line: {
          color: '#000000',
          width: 3
        }
      },
      hovertemplate: `Height: ${this.newHeight}cm<br>Predicted: ${result.prediction}<br>Confidence: ${(result.confidence * 100).toFixed(0)}%<extra></extra>`
    };

    const layout = {
      title: {
        text: `KNN Classification (K=${this.k}) - Height: ${this.newHeight}cm`,
        font: { size: 18, family: 'Figtree', color: '#034638' }
      },
      xaxis: {
        title: 'Height (cm)',
        range: [150, 200],
        gridcolor: '#e5e7eb'
      },
      yaxis: {
        title: 'Gender',
        range: [-0.2, 1.2],
        tickvals: [0, 1],
        ticktext: ['Female 🚺', 'Male 🚹'],
        gridcolor: '#e5e7eb'
      },
      plot_bgcolor: '#ffffff',
      paper_bgcolor: '#ffffff',
      font: { family: 'Figtree' },
      showlegend: true,
      legend: {
        x: 1,
        y: 1,
        xanchor: 'right',
        bgcolor: 'rgba(255,255,255,0.8)',
        bordercolor: '#e5e7eb',
        borderwidth: 1
      },
      margin: { t: 60, r: 20, b: 60, l: 80 },
      hovermode: 'closest'
    };

    const config = {
      responsive: true,
      displayModeBar: false
    };

    Plotly.newPlot(this.plotDiv, [femaleTrace, maleTrace, neighborsTrace, newPointTrace], layout, config);
  }

  updateRegressionPrediction() {
    const result = this.regressKNN(this.regressionHeight, this.regressionK);
    this.predictedChest.textContent = result.prediction;

    // Display neighbors
    const neighborsHtml = result.neighbors.map((neighbor, index) => `
      <div class="neighbor-data">
        <span class="neighbor-height">${neighbor.height}cm</span> → 
        <span class="neighbor-chest">${neighbor.chest}cm chest</span>
        <span class="neighbor-distance">(dist: ${neighbor.distance.toFixed(1)}cm)</span>
      </div>
    `).join('');
    
    this.regressionNeighbors.innerHTML = `
      <h4>K=${this.regressionK} Nearest Neighbors:</h4>
      ${neighborsHtml}
      <div class="regression-calculation">
        <strong>Average:</strong> ${result.neighbors.map(n => n.chest).join(' + ')} ÷ ${this.regressionK} = ${result.prediction}cm
      </div>
    `;
  }

  addNewDataPoint() {
    const result = this.classifyKNN(this.newHeight, this.k);
    
    // Add to dataset (assume the prediction is correct for demonstration)
    const newPoint = {
      height: this.newHeight,
      gender: result.prediction,
      chest: result.prediction === 'Male' ? 95 : 85 // Rough estimate
    };

    if (result.prediction === 'Male') {
      this.data.males.push(newPoint);
    } else {
      this.data.females.push(newPoint);
    }

    this.allData = [...this.data.males, ...this.data.females];
    this.updateVisualization();
    
    // Show feedback
    this.addDataPointBtn.textContent = 'Point Added!';
    this.addDataPointBtn.style.backgroundColor = '#10b981';
    
    setTimeout(() => {
      this.addDataPointBtn.textContent = 'Add This Point to Dataset';
      this.addDataPointBtn.style.backgroundColor = '';
    }, 2000);
  }

  runCustomPrediction() {
    const height = parseFloat(this.testHeight.value);
    const k = parseInt(this.testK.value);
    
    if (isNaN(height) || isNaN(k) || k < 1 || k > 15) {
      this.testPrediction.textContent = '❌ Please enter valid values';
      return;
    }

    const result = this.classifyKNN(height, k);
    
    // Display neighbors
    const neighborsHtml = result.neighbors.map((neighbor, index) => `
      <div class="neighbor-item">
        <span class="rank">${index + 1}.</span>
        <span class="height">${neighbor.height}cm</span>
        <span class="gender ${neighbor.gender.toLowerCase()}">${neighbor.gender}</span>
        <span class="distance">dist: ${neighbor.distance.toFixed(1)}cm</span>
      </div>
    `).join('');
    
    this.neighborsDisplay.innerHTML = neighborsHtml;
    
    // Display result
    const genderIcon = result.prediction === 'Male' ? '🚹' : '🚺';
    this.testPrediction.innerHTML = `${genderIcon} ${result.prediction} (${(result.confidence * 100).toFixed(0)}% confidence)`;
    this.testPrediction.className = `test-prediction ${result.prediction.toLowerCase()}`;
  }

  // Story navigation system
  startStoryNavigation() {
    this.currentStep = 1;
    this.showStep(1);
    
    // Auto-advance through steps every 10 seconds
    setInterval(() => {
      if (this.currentStep < 4) {
        this.currentStep++;
        this.showStep(this.currentStep);
      } else {
        this.currentStep = 1;
        this.showStep(1);
      }
    }, 10000);
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
    if (title.includes('parametric')) {
      document.querySelectorAll('.knn-explanation, .story-step').forEach(el => {
        el.classList.add('concept-highlight');
      });
    } else if (title.includes('distance')) {
      document.querySelectorAll('[id*="Height"], .neighbor-example').forEach(el => {
        el.classList.add('concept-highlight');
      });
    } else if (title.includes('k')) {
      document.querySelectorAll('[id*="kValue"], [id*="testK"]').forEach(el => {
        el.classList.add('concept-highlight');
      });
    } else if (title.includes('lazy')) {
      document.querySelectorAll('.metrics, .predictor-section').forEach(el => {
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
  new KNNDemo();
  new ConceptHighlighter();
});