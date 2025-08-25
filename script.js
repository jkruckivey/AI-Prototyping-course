// AI Prototyping Course - Main Page Interactions
class CourseHub {
  constructor() {
    this.initializeAnimations();
    this.initializeInteractions();
  }

  initializeAnimations() {
    // Animate cards on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe demo cards
    document.querySelectorAll('.demo-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    // Observe info cards
    document.querySelectorAll('.info-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
  }

  initializeInteractions() {
    // Add hover effects to demo cards
    document.querySelectorAll('.demo-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        if (!card.classList.contains('coming-soon')) {
          this.highlightCard(card);
        }
      });

      card.addEventListener('mouseleave', () => {
        this.unhighlightCard(card);
      });
    });

    // Add click tracking for analytics (if needed)
    document.querySelectorAll('.demo-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const demoName = e.target.closest('.demo-card').querySelector('h3').textContent;
        console.log(`Demo accessed: ${demoName}`);
        
        // Optional: Add analytics tracking here
        // gtag('event', 'demo_access', { demo_name: demoName });
      });
    });
  }

  highlightCard(card) {
    // Add subtle glow effect
    card.style.boxShadow = '0 12px 40px rgba(3,70,56,.15), 0 0 0 1px rgba(3,70,56,.1)';
    
    // Slightly scale the icon
    const icon = card.querySelector('.demo-icon');
    if (icon) {
      icon.style.transform = 'scale(1.1)';
      icon.style.transition = 'transform 0.3s ease';
    }
  }

  unhighlightCard(card) {
    // Reset effects
    card.style.boxShadow = '';
    
    const icon = card.querySelector('.demo-icon');
    if (icon) {
      icon.style.transform = 'scale(1)';
    }
  }
}

// Enhanced feature for course progression tracking
class ProgressTracker {
  constructor() {
    this.completedDemos = this.loadProgress();
    this.updateProgressDisplay();
  }

  loadProgress() {
    try {
      const saved = localStorage.getItem('course-progress');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  saveProgress() {
    try {
      localStorage.setItem('course-progress', JSON.stringify(this.completedDemos));
    } catch (e) {
      console.warn('Could not save progress:', e);
    }
  }

  markDemoCompleted(demoName) {
    if (!this.completedDemos.includes(demoName)) {
      this.completedDemos.push(demoName);
      this.saveProgress();
      this.updateProgressDisplay();
    }
  }

  updateProgressDisplay() {
    // Add completion indicators to completed demos
    this.completedDemos.forEach(demoName => {
      const demoCards = document.querySelectorAll('.demo-card');
      demoCards.forEach(card => {
        const title = card.querySelector('h3')?.textContent;
        if (title === demoName) {
          this.addCompletionBadge(card);
        }
      });
    });
  }

  addCompletionBadge(card) {
    // Check if badge already exists
    if (card.querySelector('.completion-badge')) return;

    const badge = document.createElement('div');
    badge.className = 'completion-badge';
    badge.innerHTML = '✓ Completed';
    badge.style.cssText = `
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: #10b981;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      z-index: 2;
    `;
    
    card.style.position = 'relative';
    card.appendChild(badge);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CourseHub();
  new ProgressTracker();
  
  // Optional: Add welcome message for first-time visitors
  const isFirstVisit = !localStorage.getItem('course-visited');
  if (isFirstVisit) {
    localStorage.setItem('course-visited', 'true');
    console.log('Welcome to the AI Prototyping Course! Start with Linear Regression to build your foundation.');
  }
});

// Export for potential testing or extension
window.CourseHub = CourseHub;
window.ProgressTracker = ProgressTracker;