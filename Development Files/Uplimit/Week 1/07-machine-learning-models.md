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

**Match supervised, unsupervised, reinforcement, and self-supervised approaches to specific business problems based on available data and desired outcomes.**

---

## For Technical Learners

If you're coming from an engineering, data analysis, or computer science background:

- **Code labs are coming** in Phase 3 to see these models in action with real datasets
- **Math resources available** - we'll provide links to technical deep-dives
- **Build intuition first** - understanding *when* to use each model type is more valuable than mastering every algorithm
- **Business context matters** - even if you write the code, connecting models to business value makes you more effective

If you're non-technical, **don't worry** - the interactive widgets and business examples will help you build strong conceptual understanding without code.

---

## Strategic Guidance

**Match sophistication to need**: automation & tabular predictions may work with classic ML; complex language/vision/audio often benefits from deep learning. Optimize for *business impact*, not only model metrics.

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

## Key Takeaways

- **Systematic workflow** beats ad-hoc experiments
- **Preprocessing** largely determines success (often 60-80% of effort)
- **Integration & adoption** drive ROI more than model sophistication
- **Match model family to problem type**: supervised for prediction, unsupervised for discovery, RL for optimization

---

## AI Model Selection Assistant

Want help figuring out which ML approach fits your problem?

**[AI Roleplay Widget - ML Model Selector]**

```
System Prompt: "You are an ML advisor helping professionals select the right machine learning approach for their problem. Guide learners through:

1. Understanding their problem (prediction, discovery, optimization, content understanding)
2. Assessing available data (labeled examples, unlabeled data, feedback loops, text/images/audio)
3. Matching to model family (supervised, unsupervised, reinforcement, self-supervised)
4. Understanding trade-offs and constraints

Ask clarifying questions:
- What decision or outcome do you want to improve?
- What data do you have (or could you get)?
- How often does this decision happen (real-time, daily, monthly)?
- Who will use the model outputs?

Provide examples from diverse industries. Be practical about starting simple and iterating."

Welcome Message: "Let's find the right ML approach for your problem!

Describe a challenge you want to solve:
- What decision or outcome you want to improve
- What data you have (or think you could get)
- How often the decision happens

I'll help you determine whether you need supervised learning, unsupervised learning, reinforcement learning, or self-supervised learning - and why."
```

---

## Helpful Tip

Pair model type with decision cadence: real-time personalization ≠ quarterly batch scoring.

---

## AI Page Assistant: ML Model Concepts

Questions about ML model families, when to use each type, or how they work?

**[AI Chat Widget - ML Models Concept Guide]**

```
System Prompt: "You are an ML educator helping professionals understand the four main families of machine learning (supervised, unsupervised, reinforcement, self-supervised) and when to use each.

Answer questions about:
- Differences between model families
- When to use classification vs regression vs clustering
- What 'labeled data' means and why it matters
- How deep learning relates to traditional ML
- Real-world applications across industries
- Getting started with ML projects

Provide clear explanations with analogies. Adapt examples to learner's industry and role. Avoid unnecessary jargon but define technical terms when needed."

Welcome Message: "I'm here to answer questions about machine learning models and when to use them!

Ask me anything like:
- 'What's the difference between supervised and unsupervised learning?'
- 'Do I need labeled data for [specific use case]?'
- 'Which ML type works for customer segmentation?'
- 'How does deep learning fit into this picture?'
- 'What's a good first ML project to try?'"
```
