# Data Science Framework - From Question to Impact

## Overview

This page turns the high-level journey into a **repeatable workflow**—who does what, which artifacts get produced, and how value shows up in the business.

---

## Workflow: Steps → Roles → Artifacts

### 1) Problem Framing & Success Criteria

- **Goal**: Define the decision to be improved and the KPIs that matter
- **Roles**: Business stakeholders/SMEs set scope; Data practitioners translate to modeling objective; Decision owners identified
- **Artifacts**: Problem brief; KPI baseline; clear success criteria
- **Pitfall**: Vague goals → mitigate with a one-pager signed off by stakeholders

---

### 2) Data Audit & Access

- **Goal**: Inventory sources (events, transactions, text, images), data rights, refresh cadence
- **Roles**: Data practitioners (analysts, engineers, scientists); System owners; Compliance/Legal (if handling sensitive data)
- **Artifacts**: Data inventory (what exists, where it lives, how to access); Data quality assessment
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

*Tip*: As you explore, note which roles own each step (analysts, engineers, business stakeholders) and where collaboration is critical.

---

## Quick Check

### Match the step to the artifact

- **Problem Framing** → Problem brief with KPIs
- **Preparation** → Feature list + definitions
- **Modeling** → Leaderboard + error analysis
- **Monitoring** → Drift dashboard + retrain plan

*Optional*: convert to a graded quiz later.

---

---

## How This Framework Applies to Your Role

The 6-phase workflow involves different contributors depending on organization size and structure. Here's how it maps to various roles:

### If You're a Data Analyst
- **Lead**: Steps 2-3 (data audit, preparation, feature engineering)
- **Support**: Step 4 (modeling - may partner with DS/ML engineers)
- **Collaborate**: Steps 1, 5-6 (problem framing, deployment, monitoring with stakeholders)

### If You're a Product Manager / Business Leader
- **Lead**: Step 1 (problem framing, defining KPIs)
- **Support**: Steps 5-6 (deployment design, monitoring dashboards)
- **Collaborate**: All steps (ensure business context informs technical decisions)

### If You're a Data Scientist / ML Engineer
- **Lead**: Steps 3-4 (feature engineering, modeling, evaluation)
- **Support**: Steps 2, 5 (data access, deployment architecture)
- **Collaborate**: Steps 1, 6 (problem translation, monitoring strategy)

### If You're a Software Engineer
- **Lead**: Step 5 (deployment, API design, integration)
- **Support**: Steps 2-3 (data pipelines, preprocessing automation)
- **Collaborate**: Steps 4, 6 (model requirements, monitoring infrastructure)

### If You're Exploring AI Careers
- **Focus**: Understand the complete workflow to identify which role(s) interest you
- **Practice**: Work through the framework with public datasets
- **Build**: Create portfolio projects demonstrating end-to-end thinking

### If You're in a Small Team / Startup
- You might wear multiple hats across all 6 steps - that's normal!
- Prioritize: Steps 1, 3, 4 (problem framing, preparation, modeling)
- Simplify: Use managed tools for deployment and monitoring initially

---

## AI Workflow Planning Assistant

Want to think through how this framework applies to a specific problem or your organization?

**[AI Roleplay Widget - Data Science Project Planning Coach]**

```
System Prompt: "You are a data science project advisor helping professionals plan AI projects using the 6-phase framework (Problem Framing, Data Audit, Preparation, Modeling, Deployment, Monitoring).

Guide learners through:
1. Translating a business problem into each framework phase
2. Identifying who should be involved at each step
3. Anticipating common pitfalls and mitigation strategies
4. Adapting the framework to their organization size (large enterprise, SMB, startup, solo learner)
5. Understanding which artifacts are critical vs nice-to-have

Adapt guidance to learner's role:
- **Analysts**: Focus on data audit, preparation, feature engineering
- **PMs/Leaders**: Focus on problem framing, success metrics, adoption
- **Engineers**: Focus on deployment, monitoring, scalability
- **Career explorers**: Provide overview and suggest which phases to learn first

Be practical and realistic about constraints (time, resources, data access). Help learners scope projects appropriately."

Welcome Message: "Let's think through how the 6-phase framework applies to a project you care about!

Describe:
- A business problem or decision you want to improve
- Your role (analyst, PM, engineer, student, etc.)
- Your organization context (large company, startup, solo project, etc.)

I'll help you:
- Map the problem to the framework phases
- Identify who should be involved
- Spot potential pitfalls
- Create a realistic project plan"
```

---

## Helpful Tip

Document features like you would business rules. Clear names + definitions reduce rework and speed future projects.

---

## AI Page Assistant: Framework Concepts

Have questions about the data science workflow, specific phases, or how to apply this framework?

**[AI Chat Widget - Framework Concepts Guide]**

```
System Prompt: "You are a data science educator helping professionals understand the 6-phase data science workflow from problem framing through monitoring.

Answer questions about:
- What each phase involves and why it matters
- Who typically owns each phase
- Common artifacts and deliverables
- Typical pitfalls and how to avoid them
- How the framework adapts to different organization sizes
- Sequencing and dependencies between phases
- Industry-specific applications

Provide examples from diverse industries (retail, healthcare, education, finance, SaaS, manufacturing, non-profit).

Be practical about real-world constraints. Acknowledge that small teams may compress or skip steps, while large organizations may have specialized roles for each phase."

Welcome Message: "I'm here to answer questions about the data science workflow framework!

Ask me anything like:
- 'What's the difference between problem framing and modeling?'
- 'Who should own the data audit phase?'
- 'How does this work in a small startup?'
- 'What are the most common pitfalls in feature engineering?'
- 'How do I adapt this framework to healthcare?'"
```
