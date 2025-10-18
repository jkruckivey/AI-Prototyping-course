# Audience Broadening Audit - Week 1
## Expanding from MSc Students to Uplimit's Diverse Learner Base

**Date**: October 17, 2025
**Purpose**: Identify MSc-specific language, assumptions, and examples that need updating for broader professional audience

---

## Executive Summary

The current Week 1 content assumes:
- **Target**: Graduate business students with management aspirations
- **Context**: Academic cohort learning, instructor-led
- **Background**: Business school foundation, strategic decision-making authority
- **Role**: Future executives/consultants

**Uplimit's broader audience includes:**
- Working professionals (analysts, engineers, product managers, marketers)
- Career transitioners with non-business backgrounds
- Individual contributors without managerial authority
- International learners from diverse industries
- Self-paced learners without cohort support
- Technical roles (data analysts, ML engineers) seeking business context
- Small business owners / entrepreneurs
- Non-profit, government, education sectors

---

## Critical Issues Found

### 🚨 Priority 1: Immediate Fixes Required

#### 1. **Explicit MSc Reference** (File: 10-week-1-wrap-up.md, Line 5)
```markdown
❌ CURRENT: "20250922 MSC Week 1 Vid 11 - Completing the Data Science Cycle"
✅ CHANGE TO: "Week 1 Wrap-Up: Completing the Data Science Cycle"
```

#### 2. **"Business Leaders" Framing Throughout**
- Files 01, 02, 04, 07, 09 repeatedly say "business leaders"
- Excludes individual contributors, analysts, engineers, students

**Examples:**
- File 01: "AI and Machine Learning **for business leaders**"
- File 07: "Key Takeaways **for Business Leaders**"

**Recommended Change:**
```markdown
❌ "for business leaders"
✅ "for professionals" OR "whether you're leading teams or contributing individually"
```

#### 3. **Authority Assumptions in Reflection Prompts**
Current prompts assume decision-making power:

**File 02 (line 93):**
```markdown
❌ "Identify one decision **in your team** that could benefit from assistance vs. full automation."
✅ "Identify one decision **in your current or target work context** (team, project, or industry)..."
```

**File 04 (line 69):**
```markdown
❌ "note where **your team** owns steps vs. where partner teams must be involved"
✅ "note where different roles own steps (analysts, engineers, business stakeholders)"
```

**File 05 (line 62):**
```markdown
❌ "Pick one proposed action... What **guardrail** prevents harm? How will you **measure** success?"
✅ "Pick one proposed action... What quality checks would you recommend? How would success be measured?"
```

**File 06 (line 63):**
```markdown
❌ "Name a decision **in your org** that would benefit most from Velocity vs Variety"
✅ "Think of a business decision (from your work, a case study, or an industry you follow) that would benefit most from..."
```

---

### ⚠️ Priority 2: Audience Adaptation Needed

#### 4. **Industry Diversity - Currently Retail/E-commerce Heavy**

**Current Example Distribution:**
- Retail/Supermarket: 40% (supermarket case study, merchandising, inventory)
- Finance: 15% (fraud, credit scoring)
- Tech/SaaS: 10% (clickstream, support tickets)
- Other: 35% (generic)

**Missing Industries:**
- Healthcare (patient outcomes, diagnosis support, appointment optimization)
- Education (student retention, personalized learning, grading support)
- Manufacturing (predictive maintenance, quality control)
- Non-profit (donor engagement, program effectiveness)
- Government (citizen services, resource allocation)
- Media/Entertainment (content recommendation, viewership forecasting)
- Transportation/Logistics (route optimization, demand prediction)

**Recommendation**: Add 2-3 examples per industry category in AI assistant knowledge base

#### 5. **Role Diversity - Currently Executive/Strategic Focus**

**Current Role Assumptions:**
- Manager with budget authority (pricing decisions, staffing)
- Strategic decision-maker (setting KPIs, signing off on projects)
- Team leader (assigning work, monitoring outcomes)

**Missing Roles:**
- Data analyst (exploring datasets, building reports)
- Product manager (feature prioritization, user research)
- Marketing specialist (campaign optimization, segmentation)
- Customer support agent (ticket routing, response suggestions)
- Sales representative (lead prioritization, churn risk alerts)
- Operations coordinator (scheduling, resource allocation)
- Software engineer (feature development informed by ML)

**Recommendation**: Add role-specific examples and adaptive AI prompts

#### 6. **Organization Size Assumptions**

**Current Examples Assume:**
- Large enterprise with multiple teams (data eng, DS, legal, privacy)
- Established data infrastructure
- Dedicated ML/DS resources
- Formal governance processes

**Missing Contexts:**
- Startups (limited resources, scrappy solutions, founder/operator hybrid roles)
- SMBs (one-person analytics, off-the-shelf tools)
- Freelancers/consultants (client-facing use cases)
- Side projects / personal learning (no organizational context)

**Recommendation**: Add "small team" and "individual learner" alternatives throughout

---

### 📝 Priority 3: Language & Tone Adjustments

#### 7. **Business Jargon Without Definitions**

**Undefined Terms Likely Unfamiliar to Career Transitioners:**
- Line 14 (File 05): "contribution margin" (no definition)
- Line 21 (File 05): "SKU" (not defined)
- Line 49 (File 05): "planogram app" (industry-specific)
- Line 50 (File 05): "POS" (point of sale not explained)
- Line 12 (File 04): "KPI baseline" (assumed knowledge)
- Line 84 (File 09): "inter-rater agreement" (research term)

**Recommendation**: Add hover definitions or AI assistant for terminology support

#### 8. **Academic Tone & Formality**

**Examples of Academic Language:**
- "Artifacts" (File 04) — consider "deliverables" or "outputs"
- "mitigate" (File 04) — consider "reduce" or "address"
- "cadence" (File 04, 06) — consider "frequency" or "schedule"
- "SMEs" (File 04) — spell out "Subject Matter Experts"

**Recommendation**: Maintain professionalism but increase conversational accessibility

---

## Detailed File-by-File Changes

### File 01: Week 1 Introduction

**Current Audience Assumption**: "business leaders", "strategic context"

**Recommended Changes:**

```diff
- We establish the foundation of **AI and Machine Learning** for business leaders.
+ We establish the foundation of **AI and Machine Learning** for professionals across roles and industries.

- You're ready to think strategically about **AI's role in business**
+ You're curious about **AI's role in modern work** (whether you're leading teams, analyzing data, building products, or exploring career options)

- You can identify **business problems** that might benefit from data-driven solutions
+ You can identify **problems or opportunities** in your work (or target industry) that might benefit from data-driven approaches
```

**Add AI Assistant:**
```markdown
## Start Here: Chat with Your AI Guide

Not sure if this course is right for you? Have questions about prerequisites?

[AI Chat Widget - Week 1 Orientation Assistant]
System Prompt: "You are a friendly, patient course advisor for learners from diverse backgrounds (business, technical, career transitioners). Help them assess readiness, clarify prerequisites, and suggest how to approach Week 1 based on their role (executive, analyst, engineer, student, entrepreneur). Provide role-specific tips and examples."

Welcome Message: "Welcome! I'm here to help you get oriented. What's your current role or what brings you to this course? (e.g., 'I'm a marketing analyst', 'I'm transitioning from teaching to tech', 'I run a small business')"
```

---

### File 02: AI Importance

**Current Audience Assumption**: Decision-makers with automation authority

**Recommended Changes:**

```diff
## Reflection

- *Quick prompt*: Identify one decision in your team that could benefit from assistance (copilot) vs. full automation. What data would you need to trust it?
+ *Quick prompt*: Think of a decision or task in your work (or an industry you're interested in). Would AI work better as a copilot (assisting humans) or full automation? What would make you trust it?
```

**Add Industry-Diverse Examples:**
```markdown
### Quick examples across industries

#### Healthcare
- Patient readmission risk scoring
- Appointment scheduling optimization
- Medical image analysis assistance

#### Education
- Student retention prediction
- Personalized learning paths
- Automated grading with human review

#### Manufacturing
- Predictive maintenance alerts
- Quality control vision systems
- Supply chain demand forecasting

#### Non-Profit
- Donor engagement prediction
- Program effectiveness measurement
- Grant application matching

(Include existing Operations, Sales, Support, Risk examples)
```

**Add AI Conversation Widget:**
```markdown
## Interactive: AI vs Automation for Your Context

Let's explore whether AI or rule-based automation fits a problem you care about.

[AI Roleplay Widget - AI vs Automation Advisor]
Role: AI Decision Advisor
Scenario: "Learner describes a task or decision from their work/industry. Guide them through determining whether rule-based automation or AI is more appropriate by asking:
1. How variable are the inputs? (same every time vs always different)
2. Can you write explicit rules? (yes, clear rules vs no, too complex)
3. How often do exceptions occur? (rarely vs frequently)
4. Does the process need to adapt over time? (static vs evolving)"

Welcome: "Describe a repetitive task or decision from your work (or an industry you know). I'll help you figure out if you need AI or if simpler automation would work better."
```

---

### File 03: Understanding Data

**Current Audience Assumption**: Retail/supermarket context familiar to all

**Recommended Changes:**

**Add Role Diversity:**
```markdown
### How This Applies to Your Role

**If you're a Data Analyst**: You'll likely lead the data audit and feature engineering phases.

**If you're a Product Manager**: You'll define success metrics and ensure the model supports user needs.

**If you're a Marketing Specialist**: You'll apply segmentation insights to campaign design and personalization.

**If you're an Engineer**: You'll integrate model outputs into applications and monitor performance.

**If you're Exploring AI**: Use this framework to understand how AI projects work, regardless of your specific role.
```

**Add Industry-Specific Case Variants:**
```markdown
### Other Industry Examples of Segmentation

**Education**: Segmenting students by learning style, engagement, and support needs → personalized intervention strategies

**Healthcare**: Segmenting patients by risk profile, treatment response, and care preferences → targeted preventive care

**SaaS**: Segmenting users by feature usage, support needs, and churn risk → product roadmap and retention strategies

**Non-profit**: Segmenting donors by giving patterns, cause interest, and engagement → stewardship and campaign strategies
```

---

### File 04: Data Science Framework

**Current Audience Assumption**: Teams with data engineers, legal, privacy resources

**Recommended Changes:**

```diff
### 2) Data Audit & Access

- **Roles**: DS + Data Eng + Owner of systems; Legal/Privacy if needed
+ **Roles**: Data practitioners (analysts, engineers, scientists); System owners; Compliance (if handling sensitive data)

- **Artifacts**: Data dictionary; source-of-truth table; access paths
+ **Artifacts**: Data inventory (what data exists, where it lives, how to access it); Data quality assessment
```

**Add Small Team / Individual Learner Context:**
```markdown
### Adapting This Framework to Your Context

**Large Organization**: You'll collaborate across specialized teams (data engineering, ML, legal, product)

**Small Team / Startup**: You might wear multiple hats (analyst + engineer + product) — that's normal! Prioritize steps 1, 3, 4.

**Individual Learning**: Focus on understanding the workflow. Use public datasets and skip deployment/monitoring until you're working on real projects.

**Freelancer / Consultant**: You'll likely guide clients through framing and evaluation while partnering with their technical teams for execution.
```

---

### File 05: Supermarket Case Study

**Current Audience Assumption**: Strategic authority over pricing, promotions, staffing

**Recommended Changes:**

**Add Role-Specific Prompts:**
```diff
## Case Prompts

### 1) Decision & KPI

- Define the **decision** (e.g., which products to discount next week) and primary **KPI** (e.g., contribution margin, units, or basket size). List any *constraints* (brand commitments, stock limits, fairness rules).
+ **For Decision-Makers**: Define the decision and KPI as written above.
+ **For Analysts**: What data would you need to model this decision? What metrics would you recommend tracking?
+ **For Engineers**: How would you deliver predictions to the teams making these decisions (API, dashboard, report)?
+ **For Learners**: Review the decision options. Which KPI would you optimize for and why?
```

**Add Industry Translation:**
```markdown
### Translating This Case to Other Industries

**Education**: Instead of "which products to discount", think "which students need intervention" (KPI: graduation rate, retention)

**Healthcare**: "which patients to prioritize for outreach" (KPI: readmission rate, preventable complications)

**SaaS**: "which users to target for upsell" (KPI: expansion revenue, feature adoption)

**Non-profit**: "which donors to engage for renewal" (KPI: retention rate, lifetime value)
```

---

### File 06: Big Data Dimensions

**Recommended Changes:**

**Add Beginner-Friendly Intro:**
```markdown
### New to "Big Data"?

You might hear "big data" and think "I don't work with millions of records." That's okay! These principles apply at any scale:

- **Volume**: Do you have enough examples for patterns to emerge? (Even "small" data has volume considerations)
- **Velocity**: How quickly do you need results? (Real-time vs batch)
- **Variety**: Are you combining different data types? (Numbers + text + images)
- **Veracity**: Can you trust your data? (Quality matters at any scale)

Start by understanding these concepts — you don't need "big data" infrastructure to benefit from thinking about the 4Vs.
```

---

### File 07: Machine Learning Models

**Current Audience Assumption**: Business strategy focus

**Add Technical Learner Path:**
```markdown
### For Technical Learners

If you're coming from a technical background (engineering, data analysis), you might want to:

1. **Try the code labs** (coming in Phase 3) to see these models in action
2. **Explore the math** (we'll provide links to deeper technical resources)
3. **Build intuition first** — understanding *when* to use each model type matters more than knowing every algorithm detail

If you're non-technical, **don't worry** — the interactive widgets and business examples will help you build intuition without code.
```

---

### File 08: Data Preprocessing

**Current Audience Assumption**: Familiar with ML pipeline concepts

**Add Beginner Context:**
```markdown
### Why This Matters (Even If You Don't Code)

Even if you'll never write preprocessing code yourself, understanding this topic helps you:

- **Ask better questions** of data teams ("Did we check for missing values? How did we handle outliers?")
- **Spot problems** in data quality that affect model reliability
- **Appreciate effort** — this is why data projects take longer than expected!
- **Evaluate vendors** — know what to ask when buying AI tools

If you *do* code, the interactive labs will give you hands-on practice.
```

---

### File 09: Model Evaluation & Training

**Add Role-Specific Guidance:**
```markdown
### Who Cares About Which Metrics?

**Data Scientists / ML Engineers**: You'll choose and optimize these metrics directly

**Product / Business Managers**: You'll translate these metrics to business KPIs and set success criteria

**Analysts**: You'll monitor these metrics and report on model performance

**Executives / Decision-Makers**: You'll ask "Is this working?" — understand enough to spot red flags

**Career Explorers**: Build intuition for how models are evaluated to prepare for any of the above roles
```

---

### File 10: Week 1 Wrap-Up

**Critical Fix:**
```diff
- **Video Embed**: 20250922 MSC Week 1 Vid 11 - Completing the Data Science Cycle
+ **Video Embed**: Week 1 Wrap-Up - Completing the Data Science Cycle
```

**Add AI-Powered Knowledge Check:**
```markdown
## Let's Review Together (Interactive AI Conversation)

Instead of a static quiz, let's have a conversation about what you learned.

[AI Chat Widget - Week 1 Review Conversation]
System Prompt: "You are a patient, encouraging tutor reviewing Week 1 concepts with learners from diverse backgrounds. Ask questions about: AI vs automation, data science workflow, 4Vs of big data, ML model families, preprocessing, and evaluation. Adapt difficulty based on responses. Provide explanations, not just correct/incorrect. Encourage learners to connect concepts to their own work context. If they struggle, offer hints and examples. Celebrate progress."

Welcome: "Let's review Week 1! I'll ask you some questions and we'll discuss your answers together. Ready to start?"

Example Questions:
1. "Can you explain the difference between AI and traditional automation in your own words?"
2. "You mentioned you work in [industry]. How might unsupervised learning help in your field?"
3. "What's one thing from Week 1 you could apply to a problem you care about?"
```

**Add Role-Adaptive Reflection:**
```diff
### Reflection & Transfer

- Where in your work could **data quality** or **feature engineering** make the biggest difference? Write 3–5 sentences or a short bullet list.
+ **Reflection Prompt** (adapt to your situation):
+
+ **If you're working**: Where in your current role could better data or features improve decisions?
+ **If you're job searching**: What AI skills from Week 1 would you highlight in interviews?
+ **If you're a student**: How might these concepts apply to a project or domain you're interested in?
+ **If you're exploring**: What surprised you most about how AI actually works vs. what you expected?
```

---

## Implementation Plan: Audience Broadening

### Phase 1A: Critical Fixes (Est. 2 hours)
1. ✅ Remove MSc reference in file 10
2. ✅ Replace "business leaders" with inclusive language (all 10 files)
3. ✅ Reframe reflection prompts for all levels (files 02, 04, 05, 06, 10)

### Phase 1B: AI Assistant Integration (Est. 20 hours)
4. ⏳ Add role-adaptive AI assistants to all 10 pages
5. ⏳ Configure assistants to detect and adapt to learner role/industry
6. ⏳ Replace static reflections with AI conversations

### Phase 2: Content Diversification (Est. 10 hours)
7. ⏳ Add 3+ examples per file from non-retail industries
8. ⏳ Add "How This Applies to Your Role" sections (analyst, PM, engineer, learner)
9. ⏳ Add "Small Team / Individual Learner" adaptations to framework content

### Phase 3: Beginner Scaffolding (Est. 8 hours)
10. ⏳ Add terminology support (hover definitions or AI glossary assistant)
11. ⏳ Add "New to Business?" and "New to Tech?" pathway guidance
12. ⏳ Create industry translation examples for case studies

---

## Measurable Success Criteria

**Audience Inclusivity:**
- ✅ No role assumptions in prompts (all can be answered by individual contributors)
- ✅ 5+ industries represented in examples per module
- ✅ 4+ role perspectives acknowledged (exec, analyst, engineer, learner)

**Accessibility:**
- ✅ Key business/technical terms defined or AI-assisted
- ✅ "New to [domain]" pathways provided
- ✅ All reflection prompts work for job seekers, students, and career explorers

**Engagement:**
- ✅ AI assistants adapt responses to learner role/industry
- ✅ Every learner sees themselves in at least 3 examples per module
- ✅ No learner feels "this isn't for me" based on current role

---

## Next Steps

1. **Quick wins**: Implement Phase 1A critical fixes (2 hours)
2. **AI integration**: Add role-adaptive AI assistants (Phase 1B)
3. **Content expansion**: Diversify examples and add role guidance (Phase 2)
4. **Scaffolding**: Add beginner support and terminology help (Phase 3)

**Recommendation**: Start with Phase 1A + 1B together to transform the learning experience quickly, then layer in content diversity and scaffolding iteratively.
