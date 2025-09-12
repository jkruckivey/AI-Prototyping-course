# Canvas Widget Integration Templates for Instructors

## 🎯 Copy-Paste Ready Ivey Canvas Framework Code

These templates provide pedagogically-sound **Ivey Canvas dp- framework** code to place widgets in Canvas. Each template uses proper `dp-content-block`, `dp-card`, and `dp-embed-wrapper` structures that work seamlessly with Ivey's Canvas environment.

---

## 📍 **Widget 1: AI Evolution Timeline**

### **Canvas Placement:** After introducing AI evolution concept (Page 1-2)

### **Ivey Canvas Framework Code:**
```html
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

### **Learning Objectives Alignment:**
- Students understand AI's historical progression
- Students connect technological evolution to business capability evolution
- Students recognize patterns in technology adoption cycles

---

## 📍 **Widget 2: AI Hierarchy Explorer** 

### **Canvas Placement:** Replacing static diagram placeholder (Page 2)

### **Ivey Canvas Framework Code:**
```html
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
            <p>Pay attention to how different business problems require different levels of AI sophistication. A simple automation task might need only basic AI, while complex pattern recognition requires deep learning.</p>
            <p><strong>Reflection Question:</strong> <em>Which level of AI would be most appropriate for a current challenge in your organization?</em></p>
            <p><strong>Time Estimate:</strong> 3-4 minutes of exploration</p>
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

### **Learning Objectives Alignment:**
- Students grasp nested AI concept relationships
- Students match business problems to appropriate AI approaches
- Students understand strategic technology selection criteria

---

## 📍 **Widget 3: AI ROI Calculator**

### **Canvas Placement:** After "Four Pillars of AI Business Value" (Page 3)

### **Instructional Text Template:**
```
📊 **AI Business Case Calculator**

You've learned that AI delivers value through Automation, Personalization, Prediction, and Optimization. Now quantify that value using real business scenarios.

**Your Task:** Use the calculator below to explore AI's financial impact:
1. **Start with realistic numbers** from your industry or organization
2. **Experiment with different efficiency gains** (10%, 30%, 50%)
3. **Note how implementation costs affect payback periods**
4. **Observe the insights provided** for different ROI scenarios

**Business Context:** The calculator uses the same ROI methodology that consulting firms use for actual AI implementation proposals.

**Discussion Point:** *What efficiency gain percentage would you need to justify AI investment in your context?*

**Time Estimate:** 5-7 minutes of scenario testing
```

### **Learning Objectives Alignment:**
- Students quantify abstract ROI concepts with concrete numbers
- Students understand investment decision-making criteria
- Students connect AI capabilities to measurable business outcomes

---

## 📍 **Widget 4: ROI Calculator (Executive Exercise)**

### **Canvas Placement:** During Step 3 - Impact Assessment (Page 6)

### **Instructional Text Template:**
```
💼 **Personal ROI Analysis for Your AI Opportunities**

You've identified specific AI opportunities in your organization during Steps 1-2. Now quantify their potential business impact to support your Priority Matrix creation.

**Your Task:** For each of the three AI opportunities you identified:
1. **Estimate current costs** of the problem (time, money, inefficiency)
2. **Project realistic efficiency gains** AI could deliver
3. **Research implementation costs** from industry benchmarks
4. **Calculate ROI and payback periods** for each opportunity

**Strategic Application:** Use these ROI calculations to complete Step 4's Priority Matrix. High-ROI opportunities with reasonable payback periods should rank higher in feasibility.

**Pro Tip:** Be conservative with efficiency estimates—it's better to under-promise and over-deliver in AI implementations.

**Expected Outcome:** Data-driven prioritization of your organization's AI opportunities
```

### **Learning Objectives Alignment:**
- Students apply theoretical ROI concepts to personal business context
- Students create evidence-based AI implementation priorities  
- Students develop realistic expectations for AI project outcomes

---

## 🎓 **Pedagogical Best Practices**

### **Before Each Widget:**
1. **Set Context:** Connect to preceding reading material
2. **Define Task:** Clear instructions on how to interact
3. **Highlight Learning Goal:** What insight should emerge
4. **Provide Time Estimate:** Help students manage their learning time

### **After Each Widget:**
1. **Reflection Questions:** Encourage deeper thinking
2. **Discussion Prompts:** Enable peer learning opportunities  
3. **Application Challenges:** Connect to student's real-world context
4. **Next Steps:** Bridge to following content

### **Canvas Integration Tips:**
- **Visual Separation:** Use Canvas's text formatting to make widget introductions stand out
- **Consistent Format:** Use the same template structure for all widgets
- **Mobile Considerations:** Keep instructions concise for mobile learners
- **Accessibility:** Provide alternative text descriptions for screen readers

---

## 📋 **Quick Implementation Checklist**

### **For Each Widget Placement:**
- [ ] Copy appropriate instructional text template
- [ ] Customize time estimates based on your course pace
- [ ] Add widget iframe code below the instructional text
- [ ] Include reflection questions aligned with your learning objectives
- [ ] Test on mobile devices to ensure good student experience
- [ ] Consider adding follow-up discussion board questions

### **Course-Level Integration:**
- [ ] Ensure widget sequence flows logically with reading progression
- [ ] Connect widget insights to upcoming assignments or discussions
- [ ] Provide instructor notes on how to reference widgets during live sessions
- [ ] Plan assessment questions that reference widget exploration

---

## 🔄 **Customization Guidelines**

### **Adapt Text for Your Context:**
- **Industry Focus:** Modify examples to match your student demographics
- **Course Level:** Adjust complexity for undergraduate vs executive education
- **Time Constraints:** Scale interaction time to fit your session structure
- **Assessment Integration:** Connect widgets to specific graded activities

### **Example Customizations:**
```
For Executive MBA: "Consider how this applies to your current strategic planning process..."
For Undergraduate: "Think about companies you know that might use this approach..."
For Healthcare Focus: "Healthcare organizations implementing AI typically see..."
For Tech Industry: "In software development contexts, this type of AI is used for..."
```

These templates ensure consistent, pedagogically-sound widget integration that maximizes learning impact while maintaining professional instructional design standards.