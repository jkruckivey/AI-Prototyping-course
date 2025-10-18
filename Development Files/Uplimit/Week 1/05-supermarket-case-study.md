# Supermarket Case Study

## Context

Use a realistic supermarket scenario to connect **data**, **modeling choices**, and **business outcomes** (pricing, promos, assortment, staffing).

---

## Case Prompts

### 1) Decision & KPI

Define the **decision** (e.g., which products to discount next week) and primary **KPI** (e.g., contribution margin, units, or basket size). List any *constraints* (brand commitments, stock limits, fairness rules).

---

### 2) Data inventory

**Available Data Sources**:

- Transactions (SKU, price, promo, units, margin)
- Calendar (holiday flags, payday cycles, seasons)
- Store ops (inventory on hand, staffing, shelf space)
- External (weather, local events, competitor price checks)

**Quality check**: missing promos? price overrides? time-zones? dedupe customer IDs?

---

### 3) Modeling options

#### Forecasting (Supervised)
Predict demand by SKU/store/week including price & promo features. Useful for inventory and labor planning.

#### Segmentation (Unsupervised)
Cluster stores or customers to tailor assortments and promo strategies.

#### Recommendation
Next-best offer or basket-aware suggestions online or at POS (guardrails for sensitive items).

#### Cautions
Avoid leakage (e.g., using future inventory) and measure net lift, not clicks. Watch fairness metrics across neighborhoods.

---

### 4) Experiment & Rollout

- **Design**: A/B stores or time-based ramp. Pre-register KPI and duration
- **Last-mile**: surface recommendations in the tools where decisions happen (planogram app, POS prompts, promo calendar)
- **Monitoring**: dashboard for lift, substitution effects, margin impact, and fairness

---

### 5) Governance & Guardrails

Document data rights, privacy, and equity considerations. Assign owners for model changes and incident response. Provide opt-outs and human review for sensitive decisions.

---

## Reflection: Applying the Framework

**[AI Roleplay Widget - Case Study Application Coach]**

```
System Prompt: "You are a data science advisor helping professionals apply the 6-phase framework to real problems. Guide learners through thinking about data requirements, quality checks, guardrails, and success metrics for a proposed AI application.

For the supermarket case (or an analogous problem in their industry):
- Help them identify critical data sources
- Discuss quality/guardrails (fairness, privacy, safety)
- Define measurable success criteria
- Anticipate what could go wrong

Adapt to learner's role:
- **Analysts**: Focus on data audit and feature engineering
- **PMs/Leaders**: Focus on KPIs, stakeholder alignment, adoption
- **Engineers**: Focus on data pipelines, deployment, monitoring
- **Career explorers**: Help them understand cross-functional thinking

Ask follow-up questions to deepen their analysis. Be Socratic."

Welcome Message: "Let's apply the data science framework to a real scenario!

Pick one of these (or describe your own):
1. Supermarket: Personalized promotions
2. Healthcare: Patient readmission prevention
3. Education: Early intervention for at-risk students
4. SaaS: Churn prediction and retention

Tell me:
- Which scenario interests you (or describe your own)
- Your role or perspective
- What question you want to explore

I'll help you think through data, guardrails, and success metrics."
```

**If you prefer to reflect independently:**

Pick one proposed action from this case (or translate to your industry):
- What **data** would be most critical?
- What **quality checks or guardrails** would prevent harm (fairness, privacy, accuracy)?
- How would you **measure success** (business KPI + model metric)?
