# Machine Learning Models - Business Overview

## What This Page Covers

Four core approaches—**Supervised**, **Unsupervised**, **Reinforcement**, and **Self-Supervised**—and how to match them to business problems and data.

---

## AI → ML → DL Hierarchy

### Understanding the AI Hierarchy

To navigate AI strategically, it helps to see how **AI** contains **Machine Learning**, which in turn contains **Deep Learning**. Use this as a map to match technology level to the problem.

**Widget**: AI Hierarchy Explorer
- **Type**: Interactive hierarchy visualization
- **Source**: SCORM Package 49223
- **Purpose**: Understand relationships between AI, ML, and DL
- **Duration**: 3-4 minutes exploration

---

## The Four Model Families

### 3.1 Supervised Learning

Learn from labeled examples to predict outcomes—approvals, churn, demand.

#### Classification: Predicting Categories

- **Use for**: spam vs not spam, fraud vs legit, image label
- **Business fit**: consistent decisions at scale; auditable criteria

**Example**: Bank approvals—Train on past applications (approved/denied). Model learns signals (income, credit score, employment) → faster, more consistent decisions.

---

#### Regression: Predicting Numbers

- **Use for**: sales forecasting, pricing, capacity/demand
- **Business fit**: financial planning, inventory, staffing

**Example**: Real estate valuations—Train on historical sales and property features to estimate price → competitive pricing, faster analysis.

---

#### Forecasting: Predicting Future Trends

- **Use for**: demand planning, cash-flow projections, capacity needs
- **Business fit**: inventory optimization, staffing, financial planning

**Example**: Retail demand—Multi-year sales with seasonality/holiday features → fewer stockouts, lower carrying costs.

---

### 3.2 Unsupervised Learning

Find structure without labels—discover segments/patterns before deciding what to predict.

#### Clustering & Anomaly Detection

- **Use for**: customer segments, product groupings, outlier detection
- **Business fit**: personalization, merchandising, risk reduction

**Example**: E-commerce clusters customers into natural groups (bargain hunters, premium buyers, researchers) → targeted offers and navigation.

---

### 3.3 Reinforcement Learning

Optimize sequential actions via trial-and-error feedback to maximize long-run reward.

#### Optimization & Control

- Dynamic pricing, routing, ad bidding, resource allocation
- Needs safe exploration + guardrails

**Example**: Ride-sharing optimizes driver positioning with feedback from pickup times & satisfaction → shorter waits, higher utilization.

---

### 3.4 Self-Supervised Learning

Create your own labels from the data structure—powerful for language, vision, and audio.

#### NLP & Representation Learning

- Document understanding, summarization, search/retrieval

**Example**: Legal team triages contracts with a model pretrained on legal text to surface risk clauses for review → faster, more consistent screening.

---

## Selecting the Right Approach

### Quick Decision Guide

| ML Type | Have... | Want... | Example |
|---------|---------|---------|---------|
| Supervised | Labeled history (X → y) | Predict approvals/churn/demand | Credit decisions; forecast |
| Unsupervised | Unlabeled data | Discover segments/patterns | Customer clustering |
| Reinforcement | Safe environment | Optimize sequential decisions | Routing; pricing |
| Self-Supervised | Lots of text/images/audio | Understand/generate content | Contract triage |

---

## Learning Objective

**Students can match supervised, unsupervised, reinforcement, and self-supervised approaches to specific business problems based on available data and desired outcomes.**

---

## Strategic Guidance

**Match sophistication to need**: automation & tabular predictions may need classic ML; complex language/vision/audio often benefits from deep learning. Optimize for *business impact*, not only model metrics.

---

## Machine Learning Building Blocks and Workflow

### Phase 1: Data Collection & Understanding

- Inventory sources, assess quality/governance, feasibility
- **Critical**: poor data quality is the #1 failure point

---

### Phase 2: Preprocessing & Feature Engineering

- Clean/encode/scale; engineer domain-relevant features
- **Plan time**: often 60-80% of effort

---

### Phase 3: Model Training & Tuning

- Try candidates; tune; validate
- **Need**: DS expertise + business context

---

### Phase 4: Evaluation & Selection

- Compare on a common metric and baseline
- **Balance**: accuracy, interpretability, cost, maintenance

---

### Phase 5: Deployment & Integration

- Deliver scores where work happens (app/CRM/dashboard)
- **Change mgmt**: adoption > model metrics

---

### Phase 6: Monitoring, Drift & Iteration

- Track data/label drift; retrain cadence; incident playbook
- **Mindset**: AI is a continuous-improvement loop

---

## The Iterative Nature of AI Success

Value compounds as data improves, features mature, and processes integrate predictions into decisions.

---

## Key Takeaways for Business Leaders

- **Systematic workflow** beats ad-hoc experiments
- **Preprocessing** largely determines success
- **Integration & adoption** drive ROI

---

## Helpful Tip

Pair model type with decision cadence: real-time personalization ≠ quarterly batch scoring.
