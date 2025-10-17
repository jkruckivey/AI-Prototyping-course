# Big Data Dimensions (4Vs)

## Overview

This page zeroes in on the **4Vs**—what each means in practice, quick examples, and the quality traps to watch for.

---

## Definitions & Quick Examples

### Volume

Scale/amount of data (e.g., years of transactions, image libraries).

**Examples**:
- Retail: multi-year SKU-level purchases
- Vision: millions of labelled images

---

### Velocity

Speed of data generation/consumption (streams vs batches).

**Examples**:
- Ops: sensor events multiple times per second
- Web: live clickstream scoring for offers

---

### Variety

Different types/formats (text, audio, images, tables, graphs).

**Examples**:
- Support: tickets + chat logs + satisfaction scores
- Risk: transactions + network graph + geolocation

---

### Veracity

Trustworthiness/quality—missing values, bias, noise, labels.

**Examples**:
- Marketing: duplicate customers, mismatched IDs
- Finance: inconsistent time zones or definitions

---

## Quality Matters

**Garbage in → garbage out**: prioritize data lineage, validation rules, and label audits.

**Bias checks**: examine representation across groups and measure disparate error rates.

**Business fit**: match data refresh cadence to decision frequency (don't stream what you deploy monthly).

---

## Reflection

*Quick prompt*: Name a decision in your org that would benefit most from **Velocity** (real-time) vs **Variety** (more data types). What would you need to trust the result (Veracity)?

---

## Helpful Tip

When scoping projects, commit to 1-2 **must-have Vs**. Trying to maximize all four at once usually slows delivery.
