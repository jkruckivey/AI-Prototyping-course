class AIFundamentalsDemo {
  constructor() {
    this.currentStep = 1;
    this.currentEra = '1950s';
    this.currentLevel = 'ai';
    this.currentPillar = 'automation';
    this.currentIndustry = 'healthcare';
    this.assessmentAnswers = {};
    
    this.initializeNavigation();
    this.initializeTimelineDemo();
    this.initializeHierarchyDemo();
    this.initializePillarsDemo();
    this.initializeIndustryExplorer();
    this.initializeDecisionTool();
  }

  initializeNavigation() {
    // Step navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    const steps = document.querySelectorAll('.demo-step');
    
    navButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetStep = parseInt(e.target.dataset.step);
        this.showStep(targetStep);
      });
    });

    // Next/Previous buttons
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('next-step')) {
        const nextStep = parseInt(e.target.dataset.next);
        this.showStep(nextStep);
      }
      if (e.target.classList.contains('prev-step')) {
        const prevStep = parseInt(e.target.dataset.prev);
        this.showStep(prevStep);
      }
    });
  }

  showStep(step) {
    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('active');
      if (parseInt(btn.dataset.step) === step) {
        btn.classList.add('active');
      }
    });

    // Update step content
    document.querySelectorAll('.demo-step').forEach(stepEl => {
      stepEl.classList.remove('active');
    });
    document.getElementById(`step${step}`).classList.add('active');

    this.currentStep = step;

    // Initialize step-specific features
    if (step === 3) {
      this.initializePillarCharts();
    }
  }

  initializeTimelineDemo() {
    const timelineButtons = document.querySelectorAll('.timeline-btn');
    const eraContents = document.querySelectorAll('.era-content');
    
    timelineButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const era = e.target.dataset.era;
        this.showEra(era);
      });
    });
  }

  showEra(era) {
    // Update timeline buttons
    document.querySelectorAll('.timeline-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.era === era) {
        btn.classList.add('active');
      }
    });

    // Update era content
    document.querySelectorAll('.era-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(`era-${era}`).classList.add('active');

    this.currentEra = era;
  }

  initializeHierarchyDemo() {
    const levelButtons = document.querySelectorAll('.level-btn');
    const circles = document.querySelectorAll('[data-level]');
    
    levelButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const level = e.target.dataset.level;
        this.showHierarchyLevel(level);
      });
    });

    // Add click handlers to circles
    circles.forEach(circle => {
      circle.addEventListener('click', (e) => {
        const level = e.target.dataset.level || e.target.closest('[data-level]').dataset.level;
        if (level) {
          this.showHierarchyLevel(level);
        }
      });
    });
  }

  showHierarchyLevel(level) {
    // Update buttons
    document.querySelectorAll('.level-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.level === level) {
        btn.classList.add('active');
      }
    });

    // Update content
    document.querySelectorAll('.level-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(`level-${level}`).classList.add('active');

    // Highlight corresponding circle
    document.querySelectorAll('[data-level]').forEach(circle => {
      circle.classList.remove('highlighted');
    });
    document.querySelector(`[data-level="${level}"]`).classList.add('highlighted');

    this.currentLevel = level;
  }

  initializePillarsDemo() {
    const pillarCards = document.querySelectorAll('.pillar-card');
    
    pillarCards.forEach(card => {
      card.addEventListener('click', (e) => {
        const pillar = e.target.closest('.pillar-card').dataset.pillar;
        this.showPillar(pillar);
      });
    });

    // Initialize calculators and interactive elements
    this.initializeROICalculator();
    this.initializePersonalizationDemo();
    this.initializePredictionDemo();
    this.initializeOptimizationDemo();
  }

  showPillar(pillar) {
    // Update pillar cards
    document.querySelectorAll('.pillar-card').forEach(card => {
      card.classList.remove('active');
      if (card.dataset.pillar === pillar) {
        card.classList.add('active');
      }
    });

    // Update content
    document.querySelectorAll('.pillar-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(`pillar-${pillar}`).classList.add('active');

    this.currentPillar = pillar;
  }

  initializeROICalculator() {
    const calculateBtn = document.getElementById('calculateROI');
    if (calculateBtn) {
      calculateBtn.addEventListener('click', () => {
        this.calculateAutomationROI();
      });
    }

    // Add real-time calculation
    ['tasksPerDay', 'minutesPerTask', 'hourlyWage'].forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener('input', () => {
          this.calculateAutomationROI();
        });
      }
    });
  }

  calculateAutomationROI() {
    const tasksPerDay = parseInt(document.getElementById('tasksPerDay')?.value || 100);
    const minutesPerTask = parseInt(document.getElementById('minutesPerTask')?.value || 10);
    const hourlyWage = parseInt(document.getElementById('hourlyWage')?.value || 25);

    const dailyMinutes = tasksPerDay * minutesPerTask;
    const dailyHours = dailyMinutes / 60;
    const dailyCost = dailyHours * hourlyWage;
    const annualCost = dailyCost * 250; // 250 working days
    const automationSavings = annualCost * 0.7; // 70% automation

    document.getElementById('annualCost').textContent = `$${annualCost.toLocaleString()}`;
    document.getElementById('automationSavings').textContent = `$${Math.round(automationSavings).toLocaleString()}/year`;
  }

  initializePersonalizationDemo() {
    const profileButtons = document.querySelectorAll('.profile-btn');
    
    profileButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const profile = e.target.dataset.profile;
        this.showPersonalizationProfile(profile);
      });
    });
  }

  showPersonalizationProfile(profile) {
    // Update profile buttons
    document.querySelectorAll('.profile-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.profile === profile) {
        btn.classList.add('active');
      }
    });

    // Update recommendations
    document.querySelectorAll('.recommendations').forEach(rec => {
      rec.classList.remove('active');
    });
    document.getElementById(`recommendations-${profile}`).classList.add('active');
  }

  initializePredictionDemo() {
    // Create demand forecast chart
    this.createDemandForecastChart();
    
    // Add interactive elements for prediction showcase
    this.updateMachineStatus();
  }

  createDemandForecastChart() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const historical = [100, 95, 110, 105, 120, 135, 140, 145, 130, 160, 155, 180];
    const predicted = [185, 190, 200, 195, 210, 225];

    const trace1 = {
      x: months,
      y: historical,
      mode: 'lines+markers',
      name: 'Historical Sales',
      line: { color: '#2563eb', width: 3 },
      marker: { size: 8 }
    };

    const trace2 = {
      x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      y: predicted,
      mode: 'lines+markers',
      name: 'AI Prediction',
      line: { color: '#dc2626', width: 3, dash: 'dash' },
      marker: { size: 8 }
    };

    const layout = {
      title: 'Sales Demand Forecast',
      xaxis: { title: 'Month' },
      yaxis: { title: 'Units Sold (000s)' },
      showlegend: true,
      height: 300,
      margin: { t: 50, r: 20, b: 60, l: 60 }
    };

    const chartDiv = document.getElementById('demandForecastChart');
    if (chartDiv) {
      Plotly.newPlot(chartDiv, [trace1, trace2], layout, { displayModeBar: false, responsive: true });
    }
  }

  updateMachineStatus() {
    // Simulate changing machine parameters
    setInterval(() => {
      const tempElement = document.querySelector('.temp-value');
      const vibrationElement = document.querySelector('.vibration-value');
      const runtimeElement = document.querySelector('.runtime-value');
      
      if (tempElement) {
        const temp = 75 + Math.random() * 8; // 75-83°C
        tempElement.textContent = `${temp.toFixed(1)}°C`;
      }
      
      if (vibrationElement) {
        const vibration = 4.0 + Math.random() * 0.8; // 4.0-4.8 Hz
        vibrationElement.textContent = `${vibration.toFixed(1)} Hz`;
      }
      
      if (runtimeElement) {
        const currentRuntime = parseInt(runtimeElement.textContent) || 2847;
        runtimeElement.textContent = `${currentRuntime + 1} hours`;
      }
    }, 3000);
  }

  initializeOptimizationDemo() {
    const sliders = ['demandLevel', 'competitionLevel', 'seasonalityLevel'];
    
    sliders.forEach(sliderId => {
      const slider = document.getElementById(sliderId);
      if (slider) {
        slider.addEventListener('input', () => {
          this.updateOptimizationPricing();
        });
      }
    });

    this.updateOptimizationPricing();
  }

  updateOptimizationPricing() {
    const demand = parseInt(document.getElementById('demandLevel')?.value || 6);
    const competition = parseInt(document.getElementById('competitionLevel')?.value || 4);
    const seasonality = parseInt(document.getElementById('seasonalityLevel')?.value || 7);

    // Update value displays
    const demandLabels = ['Very Low', 'Low', 'Low', 'Medium-', 'Medium', 'Medium+', 'High-', 'High', 'High+', 'Very High'];
    const competitionLabels = ['None', 'Very Low', 'Low', 'Low-Med', 'Medium', 'Medium+', 'High-', 'High', 'Very High', 'Extreme'];
    const seasonalityLabels = ['Off Season', 'Very Low', 'Low', 'Low-Med', 'Medium', 'Medium+', 'High-', 'High', 'Peak', 'Peak+'];

    document.getElementById('demandValue').textContent = demandLabels[demand - 1];
    document.getElementById('competitionValue').textContent = competitionLabels[competition - 1];
    document.getElementById('seasonalityValue').textContent = seasonalityLabels[seasonality - 1];

    // Calculate optimized price
    const basePrice = 650;
    const demandMultiplier = 1 + (demand - 5) * 0.03; // ±15% for extreme values
    const competitionMultiplier = 1 - (competition - 5) * 0.02; // ±10% for extreme values
    const seasonalityMultiplier = 1 + (seasonality - 5) * 0.025; // ±12.5% for extreme values

    const optimizedPrice = Math.round(basePrice * demandMultiplier * competitionMultiplier * seasonalityMultiplier);
    
    document.getElementById('optimizedPrice').textContent = optimizedPrice.toLocaleString();

    // Update reasoning
    const demandChange = Math.round((demandMultiplier - 1) * 100);
    const competitionChange = Math.round((competitionMultiplier - 1) * 100);
    const seasonalityChange = Math.round((seasonalityMultiplier - 1) * 100);

    const reasoningItems = document.querySelectorAll('.reasoning-item');
    if (reasoningItems.length >= 3) {
      reasoningItems[0].textContent = `${demandLabels[demand - 1]} demand → ${demandChange >= 0 ? '+' : ''}${demandChange}%`;
      reasoningItems[1].textContent = `${competitionLabels[competition - 1]} competition → ${competitionChange >= 0 ? '+' : ''}${competitionChange}%`;
      reasoningItems[2].textContent = `${seasonalityLabels[seasonality - 1]} → ${seasonalityChange >= 0 ? '+' : ''}${seasonalityChange}%`;
    }
  }

  initializeIndustryExplorer() {
    const industryButtons = document.querySelectorAll('.industry-btn');
    
    industryButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const industry = e.target.dataset.industry;
        this.showIndustry(industry);
      });
    });
  }

  showIndustry(industry) {
    // Update industry buttons
    document.querySelectorAll('.industry-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.industry === industry) {
        btn.classList.add('active');
      }
    });

    // Update industry content
    document.querySelectorAll('.industry-details').forEach(details => {
      details.classList.remove('active');
    });
    document.getElementById(`industry-${industry}`).classList.add('active');

    this.currentIndustry = industry;
  }

  initializeDecisionTool() {
    const optionButtons = document.querySelectorAll('.option-btn');
    
    optionButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const questionCard = e.target.closest('.question-card');
        const questionNum = questionCard.dataset.question;
        const value = e.target.dataset.value;
        
        // Store answer
        this.assessmentAnswers[questionNum] = value;
        
        // Update UI
        questionCard.querySelectorAll('.option-btn').forEach(optBtn => {
          optBtn.classList.remove('selected');
        });
        e.target.classList.add('selected');
        
        // Check if all questions answered
        this.checkAssessmentComplete();
      });
    });
  }

  checkAssessmentComplete() {
    if (Object.keys(this.assessmentAnswers).length === 4) {
      this.generateRecommendation();
    }
  }

  generateRecommendation() {
    const answers = this.assessmentAnswers;
    let recommendation = this.determineRecommendation(answers);
    
    document.getElementById('recommendedApproach').textContent = recommendation.name;
    document.getElementById('recommendationReasoning').textContent = recommendation.reasoning;
    
    // Update implementation guide
    const guideDiv = document.getElementById('implementationGuide');
    guideDiv.innerHTML = `
      <h4>📋 Implementation Roadmap</h4>
      <div class="implementation-steps">
        ${recommendation.steps.map((step, index) => `
          <div class="impl-step">
            <div class="step-number">${index + 1}</div>
            <div class="step-content">${step}</div>
          </div>
        `).join('')}
      </div>
      
      <div class="implementation-metrics">
        <h5>Expected Outcomes:</h5>
        <div class="outcome-grid">
          ${recommendation.outcomes.map(outcome => `
            <div class="outcome-item">${outcome}</div>
          `).join('')}
        </div>
      </div>
    `;

    // Update next steps
    const stepsDiv = document.getElementById('nextStepsList');
    stepsDiv.innerHTML = recommendation.nextSteps.map(step => `
      <div class="step-item">${step}</div>
    `).join('');
  }

  determineRecommendation(answers) {
    // Simple decision tree logic based on answers
    const { '1': problemType, '2': dataType, '3': transparency, '4': timeline } = answers;
    
    if (problemType === 'rules' && transparency === 'critical') {
      return {
        name: '🔧 Expert Systems',
        reasoning: 'Your need for rule-based decisions with critical transparency requirements makes expert systems the ideal choice. You can maintain full audit trails and regulatory compliance.',
        steps: [
          'Define clear business rules and decision criteria',
          'Map existing human decision-making processes',
          'Build rule-based logic with decision trees',
          'Implement explanation capabilities',
          'Test with subject matter experts'
        ],
        outcomes: [
          '100% explainable decisions',
          '3-6 month implementation',
          'Easy regulatory compliance',
          'Consistent rule application'
        ],
        nextSteps: [
          'Document your current decision-making rules',
          'Identify key stakeholders for rule validation',
          'Evaluate expert system platforms',
          'Create pilot project scope'
        ]
      };
    }
    
    if (problemType === 'complex' && timeline === 'patient') {
      return {
        name: '🎮 Reinforcement Learning',
        reasoning: 'Your complex optimization needs and patience for sophisticated solutions make reinforcement learning perfect. This approach will continuously optimize your decisions.',
        steps: [
          'Define optimization objectives and constraints',
          'Set up simulation environment',
          'Design reward systems',
          'Train RL agents with historical data',
          'Deploy with continuous learning'
        ],
        outcomes: [
          'Self-improving performance',
          'Handles complex trade-offs',
          '12+ month implementation',
          'Ongoing optimization'
        ],
        nextSteps: [
          'Identify your optimization variables',
          'Collect historical decision data',
          'Partner with RL specialists',
          'Plan extended development timeline'
        ]
      };
    }
    
    if (dataType === 'unstructured') {
      return {
        name: '🧬 Deep Learning',
        reasoning: 'Your large unstructured datasets require deep learning\'s pattern recognition capabilities. This approach excels with images, text, and complex data.',
        steps: [
          'Prepare and clean unstructured data',
          'Design neural network architecture',
          'Train models with labeled examples',
          'Validate performance metrics',
          'Deploy with monitoring systems'
        ],
        outcomes: [
          'State-of-the-art accuracy',
          'Handles complex patterns',
          '9-18 month implementation',
          'Scales with data volume'
        ],
        nextSteps: [
          'Audit your unstructured data quality',
          'Create labeled training datasets',
          'Evaluate cloud ML platforms',
          'Build ML engineering capabilities'
        ]
      };
    }
    
    // Default to Machine Learning for most other combinations
    return {
      name: '📊 Machine Learning',
      reasoning: 'Your pattern recognition needs with structured data make machine learning the optimal choice. This balanced approach offers good performance with reasonable complexity.',
      steps: [
        'Clean and prepare historical data',
        'Select appropriate ML algorithms',
        'Train models with cross-validation',
        'Evaluate model performance',
        'Deploy with monitoring and updates'
      ],
      outcomes: [
        'Good predictive accuracy',
        'Adapts to new data',
        '6-12 month implementation',
        'Proven business value'
      ],
      nextSteps: [
        'Assess your data quality and quantity',
        'Define success metrics clearly',
        'Choose ML platform or partner',
        'Start with proof-of-concept project'
      ]
    };
  }

  initializePillarCharts() {
    // This would initialize any charts needed for the pillars section
    // Called when step 3 becomes active
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
      'evolution': ['.era-content.active'],
      'hierarchy': ['.level-content.active'],
      'pillars': ['.pillar-content.active'],
      'industry': ['.industry-details.active'],
      'decision': ['.recommendation-display']
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
  
  .highlighted {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
    transition: all 0.3s ease;
  }
  
  .option-btn.selected {
    background: linear-gradient(135deg, #034638, #582C83);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(3, 70, 56, 0.3);
  }
  
  .pillar-card:hover, .industry-btn:hover, .level-btn:hover, .timeline-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease;
  }
  
  .network-diagram {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: #f8fafc;
    border-radius: 12px;
    margin: 20px 0;
  }
  
  .network-layer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .layer-label {
    font-size: 0.9em;
    font-weight: 600;
    color: #475569;
    margin-bottom: 10px;
  }
  
  .neurons {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .neuron {
    width: 20px;
    height: 20px;
    background: #3b82f6;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = highlightStyles;
document.head.appendChild(styleSheet);

// Initialize demo when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const demo = new AIFundamentalsDemo();

  // Add progress tracking
  let completedSections = new Set();
  
  // Track section completion
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('next-step')) {
      const currentStep = demo.currentStep;
      completedSections.add(currentStep);
      
      // Update progress (could be stored in localStorage)
      localStorage.setItem('aiFundamentalsProgress', JSON.stringify([...completedSections]));
    }
  });

  // Load previous progress
  const savedProgress = localStorage.getItem('aiFundamentalsProgress');
  if (savedProgress) {
    completedSections = new Set(JSON.parse(savedProgress));
    // Could add visual indicators for completed sections
  }

  // Add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && demo.currentStep < 5) {
      demo.showStep(demo.currentStep + 1);
    }
    if (e.key === 'ArrowLeft' && demo.currentStep > 1) {
      demo.showStep(demo.currentStep - 1);
    }
  });
});

// Export for testing
window.AIFundamentalsDemo = AIFundamentalsDemo;
window.ConceptHighlighter = ConceptHighlighter;