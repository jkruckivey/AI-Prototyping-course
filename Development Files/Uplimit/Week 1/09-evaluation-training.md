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

## Helpful Tip

Always include a *business sanity check* alongside model metrics—define the decision, KPI, and acceptable risk before modeling.
