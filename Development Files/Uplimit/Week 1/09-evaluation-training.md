# Model Evaluation & Training

## From Offline Metrics to Real Business Impact

Good models don't just score well in notebooks—they improve decisions in production. This page connects **metrics**, **experiments**, and **monitoring** to make evaluation meaningful and actionable.

---

## Core Metrics

### Classification (precision, recall, F1)

#### Choosing the right trade-off

Optimize for *precision* when false positives are costly; optimize for *recall* when missing positives is riskier. Use **F1** when both matter. Calibrate scores so thresholds are meaningful.

---

### Regression (MAE, RMSE, MAPE)

#### Error shapes & units

**MAE** is in business units and robust to outliers; **RMSE** penalizes large errors; **MAPE** is scale-free but undefined at zero—consider *SMAPE* when needed.

---

### Ranking/Retrieval (AUC, PR-AUC, NDCG)

#### When the order matters

Use **PR-AUC** for rare positives; **NDCG** when you care about top-k quality (e.g., recommendations).

---

### Business Sanity Check

Always pair model metrics with a **business KPI** (e.g., margin, retention, SLA). A small metric lift can be a big win—or irrelevant—depending on the decision it drives.

---

## Experiments & Rollouts

### A/B and time-based experiments

- **Design**: define primary KPI, horizon, and guardrails *before* launch
- **Unit of randomization**: user, store, or time window—avoid spillover
- **Readouts**: average effect + distribution; segment by key cohorts for equity

---

### Decision design & the last mile

- Surface scores where actions happen (CRM, POS, Ops dashboards)
- Provide explanations, confidence, and next-best-actions
- Define ownership and on-call for incidents

---

## Monitoring & Drift

### What to track

- Input drift & label drift
- Performance by segment for fairness/equity
- Business KPIs; alert on regressions

---

### Retraining cadence & data pipelines

Codify a retrain schedule (e.g., monthly/quarterly) with *versioned data*, *model cards*, and rollback plans.

---

## Human-in-the-loop & Feedback

Close the loop between model outputs and human judgment to improve quality and trust.

### Labeling strategies & guidance

- Lightweight guidance & examples for consistent labels
- Spot checks and adjudication for edge cases
- Measure inter-rater agreement; refine definitions

---

### Feedback channels in production

- Thumbs-up/down or override reasons captured at point of use
- Triage queue for low-confidence items
- Route examples back to training set

---

## Interactive: Evaluation Lab

**Widget**: Threshold Explorer
- **Type**: Interactive evaluation metrics explorer
- **Source**: GitHub Pages widget (w4-threshold-explorer.html)
- **Purpose**: Explore why evaluation metrics matter; see how accuracy alone can be misleading
- **Features**:
  - Adjust classification threshold
  - See precision/recall trade-offs in real-time
  - Understand business implications
- **Duration**: 5-6 minutes exploration

---

## Quick Check

### Pick the metric

**Scenario**: Flag potentially fraudulent transactions for review. Which is more critical—precision or recall—and why? *Hint*: Review capacity may be limited.

---

### Rollout choice

Would you prefer an A/B at the *store* level or a *time-ramp*? State the KPI and any guardrails you'd set before launch.

---

---

## Who Cares About Which Metrics?

Understanding evaluation metrics matters differently depending on your role:

### Data Scientists / ML Engineers
- You'll **choose and optimize** these metrics directly
- **Trade-offs** between precision/recall, bias/variance are your daily decisions
- **Communicate** metric improvements to non-technical stakeholders

### Product Managers / Business Leaders
- You'll **translate** these metrics to business KPIs and set success criteria
- **Ask**: "What does 85% accuracy mean for revenue/cost/risk?"
- **Set guardrails**: Define minimum acceptable performance before launch

### Data Analysts
- You'll **monitor** these metrics post-deployment and report on model health
- **Detect drift**: Spot when performance degrades over time
- **Investigate**: Understand why metrics change and recommend actions

### Software Engineers
- You'll **integrate** model outputs into applications and services
- **Understand thresholds**: How model scores translate to user experiences
- **Build monitoring**: Implement logging and alerting for model performance

### Career Explorers
- **Build intuition** for how models are evaluated to prepare for any of the above roles
- **Ask questions**: "How do we know if this model is working?"
- **Connect concepts**: Link technical metrics to real-world impact

---

## AI Evaluation Concepts Guide

Questions about metrics, experiments, or how to evaluate AI systems?

**[AI Chat Widget - Evaluation & Training Guide]**

```
System Prompt: "You are an ML evaluation expert helping professionals understand how to measure and validate model performance.

Answer questions about:
- Classification metrics (accuracy, precision, recall, F1, AUC)
- Regression metrics (MAE, RMSE, MAPE)
- When to use which metric for different problems
- Precision vs recall trade-offs
- A/B testing and experiment design
- Monitoring and drift detection
- Translating model metrics to business KPIs

Adapt explanations to learner's role:
- **Technical roles**: Discuss metric formulas, optimization, implementation
- **Business roles**: Focus on what metrics mean for decisions and outcomes
- **Analysts**: Emphasize monitoring, reporting, and investigation

Use concrete examples across industries. Explain threshold tuning visually with the widget."

Welcome Message: "I'm here to help you understand model evaluation and metrics!

Ask me anything like:
- 'What's the difference between accuracy and F1 score?'
- 'When should I optimize for precision vs recall?'
- 'How do I run an A/B test for my model?'
- 'What does 90% accuracy actually mean for my business?'
- 'How do I know if my model is still working after deployment?'"
```

---

## Helpful Tip

Always include a *business sanity check* alongside model metrics—define the decision, KPI, and acceptable risk before modeling.
