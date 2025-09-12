# Ivey Canvas Embedding Guide for AI Learning Widgets

## 🎯 Ready-to-Embed Widgets for Ivey Canvas Framework

Your AI learning widgets are optimized for Ivey's Canvas dp- framework at:
**https://jkruckivey.github.io/AI-Prototyping-course/**

## 📊 Available Widgets

### 1. AI Automation ROI Calculator
**Purpose:** Calculate business value from AI automation projects  
**Best for:** Business strategy, economics, and AI implementation courses  
**Size:** 450×460px  
**Features:** Real-time calculations, business insights, responsive design  

### 2. AI Hierarchy Explorer  
**Purpose:** Interactive visualization of AI → ML → Deep Learning relationships  
**Best for:** Introductory AI concepts and foundational understanding  
**Size:** 450×500px  
**Features:** Click-to-explore, animated transitions, educational content  

### 3. AI Evolution Timeline
**Purpose:** Journey through AI development from 1950s to present  
**Best for:** AI history, context setting, and technological evolution  
**Size:** 450×430px  
**Features:** Era exploration, historical context, capability comparisons  

## 🚀 Ivey Canvas dp- Framework Embedding Code

### Copy & Paste Ready - Ivey Canvas Integration

#### ROI Calculator Widget
```html
<div class="dp-content-block content-block" data-category="" data-title="AI ROI Calculator">
    <h3 class="dp-has-icon"><i class="dp-icon fas fa-calculator" aria-hidden="true"></i>&nbsp;AI Business Case Calculator</h3>
    <p>Calculate business value from AI automation projects using realistic scenarios.</p>
    
    <div class="dp-card card h-100 w-100">
        <h5 class="card-header dp-ignore-theme">Interactive Features</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Real-time ROI calculations</li>
            <li class="list-group-item">Business insights and recommendations</li>
            <li class="list-group-item">Responsive design for all devices</li>
        </ul>
    </div>

    <div class="dp-embed-wrapper">
        <iframe 
            src="https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-roi-calculator.html" 
            width="100%" height="480" frameborder="0"
            style="border: 1px solid #ddd; border-radius: 4px;"
            title="AI Automation ROI Calculator">
        </iframe>
    </div>
</div>
```

#### AI Hierarchy Explorer Widget
```html
<div class="dp-content-block content-block" data-category="" data-title="AI Hierarchy Explorer">
    <h3 class="dp-has-icon"><i class="dp-icon fas fa-sitemap" aria-hidden="true"></i>&nbsp;Interactive AI Hierarchy</h3>
    <p>Explore the relationship between AI, Machine Learning, and Deep Learning through interactive visualization.</p>
    
    <div class="dp-card card" style="border-left: 4px solid #17a2b8;">
        <div class="card-body">
            <h5 class="card-title dp-ignore-theme">Learning Focus</h5>
            <p>Click-to-explore nested concepts with business examples and strategic applications.</p>
        </div>
    </div>

    <div class="dp-embed-wrapper">
        <iframe 
            src="https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-ai-hierarchy.html" 
            width="100%" height="520" frameborder="0"
            style="border: 1px solid #ddd; border-radius: 4px;"
            title="AI Hierarchy Explorer">
        </iframe>
    </div>
</div>
```

#### AI Evolution Timeline Widget
```html
<div class="dp-content-block content-block" data-category="" data-title="AI Evolution Timeline">
    <h3 class="dp-has-icon"><i class="dp-icon fas fa-clock" aria-hidden="true"></i>&nbsp;AI Evolution Timeline</h3>
    <p>Journey through AI development from the 1950s to present day, exploring capabilities and limitations of each era.</p>
    
    <div class="dp-card card" style="border-left: 4px solid #28a745;">
        <div class="card-body">
            <h5 class="card-title dp-ignore-theme">Historical Context</h5>
            <p>Interactive exploration of technological evolution and business capability development over 70+ years.</p>
        </div>
    </div>

    <div class="dp-embed-wrapper">
        <iframe 
            src="https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-ai-evolution.html" 
            width="100%" height="450" frameborder="0"
            style="border: 1px solid #ddd; border-radius: 4px;"
            title="AI Evolution Timeline">
        </iframe>
    </div>
</div>
```

## 📚 Ivey Canvas Implementation Steps

### Method 1: Ivey Canvas Page Embedding (Recommended)
1. **Navigate:** Canvas course → Pages → Create new page
2. **Switch to HTML Editor:** Click `<>` icon in rich text editor
3. **Paste dp- framework code:** Copy the complete `dp-content-block` structure above
4. **Save & Publish:** Widget appears with proper Ivey styling and navigation

### Method 2: Canvas Assignment Embedding
1. **Navigate:** Canvas course → Assignments → Create assignment  
2. **Assignment Details:** Set points, due dates, etc.
3. **Description:** Switch to HTML editor and paste iframe code
4. **Submission Type:** Set to "No Submission" for exploration activities

### Method 3: Canvas Module Embedding
1. **Navigate:** Canvas course → Modules → Add item
2. **Item Type:** Select "External URL"
3. **URL:** Use the direct widget URLs:
   - ROI Calculator: `https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-roi-calculator.html`
   - AI Hierarchy: `https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-ai-hierarchy.html`
   - Evolution Timeline: `https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-ai-evolution.html`

## ✅ Widget Features

### Design & Branding
- **Ivey Professional Styling:** Georgia serif headings, Ivey Green/Purple palette
- **Canvas-Optimized Size:** 450px width fits perfectly in Canvas modules
- **Mobile Responsive:** Works seamlessly in Canvas mobile apps
- **Accessible Design:** WCAG AA compliant with keyboard navigation

### Technical Features
- **Self-Contained:** No external dependencies to manage
- **Fast Loading:** Lightweight, optimized for quick display
- **Cross-Browser:** Works in Chrome, Firefox, Safari, Edge
- **Secure:** No external API calls or data collection

### Educational Value
- **Interactive Learning:** Hands-on exploration vs passive reading
- **Immediate Feedback:** Real-time calculations and responses
- **Concept Reinforcement:** Visual learning with contextual information
- **Engagement Tracking:** PostMessage API ready for analytics

## 🔧 Customization Options

### Iframe Styling
You can customize the iframe appearance by modifying the `style` attribute:

```html
<!-- Minimal border -->
style="border: 1px solid #ddd; border-radius: 4px;"

<!-- Shadow effect -->
style="border: none; box-shadow: 0 2px 8px rgba(0,0,0,0.15);"

<!-- Full width responsive -->
style="border: none; width: 100%; max-width: 470px;"
```

### Widget URLs for Direct Access
- **Demo Page:** https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-embedding-demo.html
- **ROI Calculator:** https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-roi-calculator.html
- **AI Hierarchy:** https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-ai-hierarchy.html
- **Evolution Timeline:** https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-ai-evolution.html

## 📱 Mobile Compatibility

All widgets are optimized for Canvas mobile apps:
- **Responsive Design:** Adapts to phone and tablet screens
- **Touch-Friendly:** Large buttons and touch targets
- **Performance Optimized:** Fast loading on mobile networks
- **Canvas App Compatible:** Works within Canvas mobile application

## 🎓 Pedagogical Applications

### ROI Calculator
- **Business Courses:** AI investment decisions, cost-benefit analysis
- **Economics:** Technology ROI concepts, automation impact
- **Strategy:** Digital transformation planning, resource allocation

### AI Hierarchy Explorer  
- **Computer Science:** Foundational AI concepts, algorithm classification
- **Business Technology:** Understanding AI capabilities and limitations
- **General Education:** Technology literacy, AI awareness

### Evolution Timeline
- **Technology History:** AI development milestones, innovation patterns
- **Business Context:** Technology adoption cycles, industry transformation
- **Critical Thinking:** Understanding technological progress and implications

## 🚀 Quick Test

**Test URL:** https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-embedding-demo.html

This demo page shows all three widgets embedded exactly as they'll appear in Canvas, with specifications and usage examples.

## 💡 Tips for Canvas Instructors

1. **Start Small:** Embed one widget in a test course first
2. **Student Instructions:** Add brief instructions above the widget
3. **Learning Objectives:** Connect widget interactions to specific learning goals
4. **Assessment Integration:** Use widgets for exploration before graded activities
5. **Mobile Testing:** Preview on mobile to ensure good student experience

---

**Questions or Issues?** Your widgets are hosted on GitHub Pages and ready for immediate Canvas deployment!