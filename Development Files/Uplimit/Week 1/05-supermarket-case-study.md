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

## Reflection

Pick one proposed action (e.g., price change for a category). What **data** is most critical? What **guardrail** prevents harm? How will you **measure** success?
