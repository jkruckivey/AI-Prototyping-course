# Data Science Framework - From Question to Impact

## Overview

This page turns the high-level journey into a **repeatable workflow**—who does what, which artifacts get produced, and how value shows up in the business.

---

## Workflow: Steps → Roles → Artifacts

### 1) Problem Framing & Success Criteria

- **Goal**: Define the decision to be improved and the KPIs that matter
- **Roles**: Managers/SMEs set scope; DS translates to a modeling objective
- **Artifacts**: Problem brief; KPI baseline; decision owner identified
- **Pitfall**: Vague goals → mitigate with a one-pager signed off by stakeholders

---

### 2) Data Audit & Access

- **Goal**: Inventory sources (events, transactions, text, images), data rights, refresh cadence
- **Roles**: DS + Data Eng + Owner of systems; Legal/Privacy if needed
- **Artifacts**: Data dictionary; source-of-truth table; access paths
- **Pitfall**: Shadow datasets → mitigate with a central catalog

---

### 3) Preparation & Feature Engineering

- **Goal**: Clean, join, transform; craft features that express behavior (e.g., recency, frequency, amounts)
- **Artifacts**: Reproducible notebook/script; feature list with definitions
- **Pitfall**: Leakage (using future info) → mitigate with strict time-based splits

---

### 4) Modeling & Evaluation

- **Goal**: Train candidate models; compare with a common metric and baseline
- **Artifacts**: Leaderboard; error analysis; model card
- **Pitfall**: Overfitting; optimizing to a misaligned metric → include a business sanity check

---

### 5) Deployment & Decision Design

- **Goal**: Deliver scores where decisions happen (app, CRM, ops dashboard)
- **Artifacts**: API/report; rollout plan; human-in-the-loop guardrails
- **Pitfall**: "Last-mile" gap → plan scripts, alerts, and ownership up front

---

### 6) Monitoring, Drift & Iteration

- **Goal**: Track data/label drift, business KPIs, and equity/access impacts
- **Artifacts**: Monitoring dashboard; retraining cadence; incident playbook
- **Pitfall**: Set-and-forget models → establish owners and SLAs

---

## Interactive: Data Science Framework

**Widget**: Data Science Workflow Explorer
- **Type**: Interactive framework visualization
- **Source**: SCORM Package 49233
- **Purpose**: Explore the 6-phase workflow with role assignments and artifacts
- **Duration**: 3-4 minutes exploration

*Tip*: As you explore, note where **your team** owns steps vs. where partner teams must be involved.

---

## Quick Check

### Match the step to the artifact

- **Problem Framing** → Problem brief with KPIs
- **Preparation** → Feature list + definitions
- **Modeling** → Leaderboard + error analysis
- **Monitoring** → Drift dashboard + retrain plan

*Optional*: convert to a graded quiz later.

---

## Helpful Tip

Document features like you would business rules. Clear names + definitions reduce rework and speed future projects.
