# Instructor Implementation Checklist
## Canvas AI Widget Integration - Step-by-Step Guide

---

## ✅ **Pre-Implementation Setup**

### **1. Technical Verification**
- [ ] **Test Widget URLs**: Verify all 4 widgets load at GitHub Pages URLs
  - https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-ai-evolution.html
  - https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-ai-hierarchy.html  
  - https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-roi-calculator.html
  - https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-ai-approach-matcher.html

- [ ] **Canvas iframe Settings**: Confirm Canvas allows iframe embedding from GitHub Pages
- [ ] **Mobile Testing**: Test widgets on Canvas mobile app (iOS/Android)
- [ ] **Browser Compatibility**: Verify widgets work in Chrome, Firefox, Safari, Edge
- [ ] **Screen Reader Testing**: Test accessibility compliance with NVDA/JAWS

### **2. Content Preparation**
- [ ] **Review Course Alignment**: Ensure widgets match your specific course objectives
- [ ] **Customize Instructions**: Adapt instructional templates to your teaching style
- [ ] **Prepare Discussion Questions**: Create widget-related discussion prompts
- [ ] **Design Assessments**: Plan assignments that incorporate widget insights

---

## 📚 **Canvas Page Setup**

### **Phase 1: AI Evolution Timeline (Pages 1-2)**

#### **Canvas Page Creation:**
- [ ] **Create Canvas Page**: "AI Evolution & Core Concepts"
- [ ] **Add Course Content**: Copy relevant text from "What is AI.pdf" pages 1-2
- [ ] **Insert Widget Placement**: After evolution introduction, before hierarchy section

#### **Implementation Code:**
```html
<!-- Copy this into Canvas HTML editor using Ivey dp- framework -->
<div class="dp-content-block content-block" data-category="" data-title="AI Evolution Timeline">
    <h3 class="dp-has-icon"><i class="dp-icon fas fa-clock" aria-hidden="true"></i>&nbsp;Interactive AI Evolution Explorer</h3>
    <p>The reading above introduced how AI has evolved through distinct phases over the past 70 years. The timeline below lets you explore each era of AI development in detail.</p>
    
    <div class="dp-card card h-100 w-100">
        <h5 class="card-header dp-ignore-theme">Your Task</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Click through each time period (1950s-60s, 1980s, 2000s, 2020s)</li>
            <li class="list-group-item">Specific examples of AI capabilities in that era</li>
            <li class="list-group-item">Real-world applications and limitations</li>
            <li class="list-group-item">How each phase built upon the previous one</li>
        </ul>
    </div>
    
    <blockquote>
        <p><strong>Key Question:</strong> <em>How did the shift from rule-based systems to machine learning fundamentally change what AI could accomplish?</em></p>
        <p><strong>Time Estimate:</strong> 3-5 minutes of exploration</p>
    </blockquote>

    <!-- Widget iframe embed -->
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

- [ ] **Test Student View**: Preview from student perspective
- [ ] **Set Availability**: Configure page visibility and release dates

### **Phase 2: AI Hierarchy Explorer (Page 2)**

#### **Canvas Page Integration:**
- [ ] **Locate Placement**: Find "[GRAPHIC: Hierarchical Venn Diagram]" placeholder text
- [ ] **Replace Static Content**: Remove placeholder, add interactive widget

#### **Implementation Code:**
```html
<!-- Copy this into Canvas HTML editor using Ivey dp- framework -->
<div class="dp-content-block content-block" data-category="" data-title="AI Hierarchy Explorer">
    <h3 class="dp-has-icon"><i class="dp-icon fas fa-sitemap" aria-hidden="true"></i>&nbsp;Interactive AI Hierarchy Visualization</h3>
    <p>Rather than a static diagram, explore the relationship between Artificial Intelligence, Machine Learning, and Deep Learning through this interactive visualization.</p>
    
    <div class="dp-card card h-100 w-100">
        <h5 class="card-header dp-ignore-theme">Your Task</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Click on each nested circle to discover precise definitions</li>
            <li class="list-group-item">Real business examples for each level (AI, ML, Deep Learning)</li>
            <li class="list-group-item">How the concepts build upon each other</li>
        </ul>
    </div>
    
    <div class="dp-card card" style="border-left: 4px solid #17a2b8;">
        <div class="card-body">
            <h5 class="card-title dp-ignore-theme">Strategic Insight</h5>
            <p>Pay attention to how different business problems require different levels of AI sophistication.</p>
            <p><strong>Reflection Question:</strong> <em>Which level of AI would be most appropriate for a current challenge in your organization?</em></p>
        </div>
    </div>

    <!-- Widget iframe embed -->
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

- [ ] **Verify Integration**: Ensure widget flows naturally with surrounding text
- [ ] **Test Functionality**: Click through all three levels (AI, ML, DL)

### **Phase 3: AI ROI Calculator (Page 3)**

#### **Canvas Page Integration:**
- [ ] **Locate Placement**: After "The Four Pillars of AI Business Value" section
- [ ] **Context Setup**: Ensure students understand business value concepts first

#### **Implementation Code:**
```html
<!-- Copy this into Canvas HTML editor using Ivey dp- framework -->
<div class="dp-content-block content-block" data-category="" data-title="AI ROI Calculator">
    <h3 class="dp-has-icon"><i class="dp-icon fas fa-calculator" aria-hidden="true"></i>&nbsp;AI Business Case Calculator</h3>
    <p>You've learned that AI delivers value through Automation, Personalization, Prediction, and Optimization. Now quantify that value using real business scenarios.</p>
    
    <div class="dp-card card h-100 w-100">
        <h5 class="card-header dp-ignore-theme">Your Task</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Start with realistic numbers</strong> from your industry or organization</li>
            <li class="list-group-item"><strong>Experiment with different efficiency gains</strong> (10%, 30%, 50%)</li>
            <li class="list-group-item"><strong>Note how implementation costs affect payback periods</strong></li>
            <li class="list-group-item"><strong>Observe the insights provided</strong> for different ROI scenarios</li>
        </ul>
    </div>
    
    <div class="dp-card card" style="border-left: 4px solid #28a745;">
        <div class="card-body">
            <h5 class="card-title dp-ignore-theme">Business Context</h5>
            <p>The calculator uses the same ROI methodology that consulting firms use for actual AI implementation proposals.</p>
            <p><strong>Discussion Point:</strong> <em>What efficiency gain percentage would you need to justify AI investment in your context?</em></p>
        </div>
    </div>

    <!-- Widget iframe embed -->
    <div class="dp-embed-wrapper">
        <iframe 
            src="https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-roi-calculator.html" 
            width="100%" height="480" frameborder="0"
            style="border: 1px solid #ddd; border-radius: 4px;"
            title="AI ROI Calculator">
        </iframe>
    </div>
</div>
```

- [ ] **Business Context Check**: Ensure calculator aligns with course business focus
- [ ] **Test Scenarios**: Try different input combinations to verify calculations

### **Phase 4: AI Approach Matcher (Pages 7-8)**

#### **Canvas Page Integration:**
- [ ] **Locate Placement**: After "AI Taxonomy for Business Leaders" introduction
- [ ] **Learning Prerequisites**: Ensure students understand Expert Systems vs ML concepts

#### **Implementation Code:**
```html
<!-- Instructional text for Canvas -->
<p><strong>🎯 AI Approach Decision Trainer</strong></p>
<p>Now that you understand different AI approaches (Expert Systems vs. Machine Learning types), practice matching business scenarios to optimal solutions.</p>
<p><strong>Your Task:</strong> For each business scenario, select the most appropriate AI approach and see how well you understand the strategic decision factors.</p>
<p><strong>Learning Goal:</strong> Develop intuition for matching business problems to AI solutions.</p>
<p><strong>Challenge:</strong> Try to score 5/6 or better to demonstrate mastery of AI approach selection.</p>

<!-- Widget iframe embed -->
<iframe 
  src="https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-ai-approach-matcher.html" 
  width="470" height="480" frameborder="0"
  style="border: none; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
  title="AI Approach Matcher">
</iframe>
```

- [ ] **Scenario Relevance**: Verify business scenarios match your course industry focus
- [ ] **Test Feedback**: Try wrong answers to see if explanations are helpful

### **Phase 5: Executive Exercise Integration (Page 6)**

#### **Canvas Page Integration:**
- [ ] **Locate Placement**: During Executive Reflection Exercise, Step 3 (Impact Assessment)
- [ ] **Context Adaptation**: Frame as personal business analysis tool

#### **Implementation Code:**
```html
<!-- Instructional text for Canvas -->
<p><strong>💼 Personal ROI Analysis for Your AI Opportunities</strong></p>
<p>You've identified specific AI opportunities in your organization during Steps 1-2. Now quantify their potential business impact to support your Priority Matrix creation.</p>
<p><strong>Your Task:</strong> For each of the three AI opportunities you identified:</p>
<ol>
<li><strong>Estimate current costs</strong> of the problem (time, money, inefficiency)</li>
<li><strong>Project realistic efficiency gains</strong> AI could deliver</li>
<li><strong>Research implementation costs</strong> from industry benchmarks</li>
<li><strong>Calculate ROI and payback periods</strong> for each opportunity</li>
</ol>
<p><strong>Strategic Application:</strong> Use these ROI calculations to complete Step 4's Priority Matrix. High-ROI opportunities with reasonable payback periods should rank higher in feasibility.</p>
<p><strong>Pro Tip:</strong> Be conservative with efficiency estimates—it's better to under-promise and over-deliver in AI implementations.</p>

<!-- Widget iframe embed (same ROI calculator, different context) -->
<iframe 
  src="https://jkruckivey.github.io/AI-Prototyping-course/demos/widgets/canvas-roi-calculator.html" 
  width="470" height="480" frameborder="0"
  style="border: none; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
  title="AI ROI Calculator - Personal Analysis">
</iframe>
```

- [ ] **Exercise Integration**: Ensure widget supports the Priority Matrix activity
- [ ] **Personal Context**: Verify students understand this is for their own analysis

---

## 🎓 **Pedagogical Enhancement**

### **Discussion Board Setup**
- [ ] **Create Discussion Topics** for each widget:
  - "Most Surprising AI Evolution Discovery"
  - "AI Hierarchy Applications in Your Industry"
  - "ROI Assumptions and Business Case Validation"
  - "Strategic AI Decision-Making Challenges"

- [ ] **Set Discussion Parameters**:
  - Initial post: 150-200 words with widget reference
  - Peer responses: 2 responses, 50-75 words each
  - Due dates aligned with widget release schedule

### **Assessment Integration Options**

#### **Option A: Low-Stakes Participation**
- [ ] **Widget Completion Tracking**: Monitor page analytics for engagement
- [ ] **Discussion Integration**: Require widget insights in posts (10 points each)
- [ ] **Reflection Questions**: Add widget-based questions to existing quizzes

#### **Option B: Formal Assignment Integration**
- [ ] **AI Evolution Analysis** (100 points): Timeline widget + research assignment
- [ ] **AI Hierarchy Application** (100 points): Hierarchy widget + industry analysis
- [ ] **AI Business Case Development** (150 points): ROI widget + formal proposal
- [ ] **AI Implementation Strategy** (150 points): All widgets + strategic plan

#### **Option C: Case Study Enhancement**
- [ ] **Widget-Enhanced Cases**: Reference widget insights in case discussions
- [ ] **Comparative Analysis**: Use widgets to compare different AI approaches
- [ ] **Strategic Recommendations**: Support case recommendations with widget data

### **Live Session Integration**
- [ ] **Demo Widgets** during synchronous sessions
- [ ] **Screen Share** widget interactions for class discussion
- [ ] **Q&A Integration**: Use widget examples to answer student questions
- [ ] **Breakout Activities**: Small groups explore widgets together

---

## 📊 **Analytics & Assessment**

### **Canvas Analytics Monitoring**
- [ ] **Page View Tracking**: Monitor which widgets get most engagement
- [ ] **Time on Page**: Identify widgets where students spend appropriate time
- [ ] **Completion Rates**: Track how many students engage with each widget
- [ ] **Mobile Usage**: Monitor mobile vs desktop widget access

### **Student Feedback Collection**
- [ ] **Mid-Course Survey**: Ask about widget usefulness and technical issues
- [ ] **End-of-Course Evaluation**: Include widget-specific feedback questions
- [ ] **Informal Check-ins**: Ask about widget experience during live sessions
- [ ] **Technical Issues**: Monitor and respond to widget loading problems

### **Learning Outcome Assessment**
- [ ] **Concept Understanding**: Compare quiz performance on widget-covered topics
- [ ] **Application Quality**: Assess improvement in AI business case development
- [ ] **Strategic Thinking**: Evaluate decision-making quality in AI approach selection
- [ ] **Engagement Metrics**: Correlate widget use with overall course performance

---

## 🔧 **Troubleshooting & Support**

### **Common Technical Issues**

#### **Widget Won't Load**
- [ ] Check Canvas iframe security settings
- [ ] Verify GitHub Pages URL accessibility  
- [ ] Test from different browsers/devices
- [ ] Contact Canvas technical support if needed

#### **Mobile Display Issues**
- [ ] Test widgets in Canvas mobile app
- [ ] Verify responsive design works on tablets
- [ ] Check touch interactions function properly
- [ ] Provide desktop alternative if mobile fails

#### **Student Access Problems**
- [ ] Confirm page availability settings
- [ ] Check prerequisite requirements
- [ ] Verify student enrollment status
- [ ] Test with different Canvas user roles

### **Content Customization Options**

#### **Industry-Specific Adaptations**
- [ ] **Healthcare**: Modify ROI examples for medical settings
- [ ] **Financial Services**: Adapt scenarios for banking/insurance
- [ ] **Manufacturing**: Focus on operational efficiency examples
- [ ] **Retail**: Emphasize customer experience applications

#### **Course Level Adjustments**
- [ ] **Executive Education**: Increase business complexity, reduce technical detail
- [ ] **Undergraduate**: Add more foundational context, simpler scenarios
- [ ] **Graduate**: Include advanced strategic considerations
- [ ] **Professional Development**: Focus on immediate application opportunities

---

## 📅 **Implementation Timeline**

### **Week -2: Pre-Launch Preparation**
- [ ] Complete all technical testing and Canvas setup
- [ ] Finalize instructional text customizations
- [ ] Prepare discussion questions and assessment rubrics
- [ ] Create backup plans for technical issues

### **Week -1: Final Checks**
- [ ] Student preview testing with beta users
- [ ] Instructor walkthrough of complete widget sequence
- [ ] Technical support contact information ready
- [ ] Communication plan for widget introduction

### **Week 1: Launch & Monitor**
- [ ] Introduce interactive learning approach to students
- [ ] Monitor initial engagement and technical performance
- [ ] Collect and respond to early feedback
- [ ] Adjust timing or instructions based on student needs

### **Weeks 2-4: Optimize & Enhance**
- [ ] Analyze engagement patterns and learning outcomes
- [ ] Refine discussion questions based on student responses
- [ ] Address any recurring technical or pedagogical issues
- [ ] Plan advanced integration for future course iterations

---

## 🏆 **Success Criteria**

### **Technical Success Indicators**
- [ ] **>90% uptime** for all widget URLs
- [ ] **<5% technical support requests** related to widgets
- [ ] **Mobile compatibility** confirmed across devices
- [ ] **Fast loading times** (<3 seconds) for all widgets

### **Educational Success Indicators**
- [ ] **>85% student engagement** with widget interactions
- [ ] **Improved learning outcomes** on AI concept assessments
- [ ] **Higher quality** business case development in assignments
- [ ] **Positive student feedback** (>4/5 rating) on widget usefulness

### **Implementation Success Indicators**
- [ ] **Smooth integration** with existing Canvas workflow
- [ ] **Minimal instructor overhead** for widget maintenance
- [ ] **Scalable approach** for future course offerings
- [ ] **Enhanced course reputation** through innovative pedagogy

---

## 📞 **Support Resources**

### **Technical Support Contacts**
- **Canvas Support**: [Your institution's Canvas help desk]
- **GitHub Pages Issues**: Monitor repository at https://github.com/jkruckivey/AI-Prototyping-course
- **Widget Development**: [Contact information for technical updates]

### **Pedagogical Support Resources**
- **Instructional Design Team**: [Your institution's ID support]
- **Faculty Development**: [Professional development resources]
- **Peer Instructors**: [Other faculty using similar approaches]

### **Documentation References**
- **Widget Placement Map**: WIDGET-PLACEMENT-MAP.html
- **Instructional Templates**: INSTRUCTOR-WIDGET-TEMPLATES.md
- **Pedagogical Guide**: CANVAS-PEDAGOGICAL-INTEGRATION-GUIDE.md
- **Canvas Embedding Guide**: CANVAS-EMBEDDING-GUIDE.md

---

**🎯 Implementation Confidence Check**: Complete this checklist systematically to ensure successful widget integration that enhances student learning while maintaining instructional quality and technical reliability.