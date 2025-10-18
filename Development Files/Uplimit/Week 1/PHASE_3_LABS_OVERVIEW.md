# Phase 3: Hands-On Python Labs - Complete Overview
## Interactive Coding Experience for Week 1

**Status**: ✅ Design Complete | 🔄 Implementation Ready
**Total Labs**: 5
**Estimated Total Time**: 3-4 hours (learner-paced)
**Difficulty Range**: Beginner to Advanced

---

## Design Philosophy

All Phase 3 labs follow these principles:

### 1. **Progressive Difficulty**
- **Level 1 (Run)**: Execute pre-written code, observe outputs
- **Level 2 (Modify)**: Change parameters, experiment with variations
- **Level 3 (Write)**: Complete code challenges from scratch
- **Level 4 (Extend)**: Advanced optional challenges

### 2. **Dual-Path Learning**
- **Non-technical path**: "What's happening here?" explanations, skip code if desired
- **Technical path**: Hands-on coding with AI assistant support

### 3. **AI-Assisted Learning**
- Every lab includes AI Code Assistant for debugging, explanations, hints
- Socratic guidance ("Why do you think...?" vs direct answers)
- Adaptive to learner's technical level

### 4. **Real-World Context**
- Every lab uses realistic business scenarios
- Translate technical outputs to business insights
- Connect to Week 1 concepts

### 5. **Immediate Feedback**
- Interactive visualizations show results instantly
- Check Your Understanding quizzes after each section
- AI validates approach and provides hints

---

## Lab 1: Customer Segmentation with K-means Clustering

**Status**: ✅ COMPLETED
**File**: `lab-01-customer-segmentation.md`
**Time**: 30-45 minutes
**Difficulty**: Beginner

### Learning Objectives
- Apply unsupervised learning to discover customer segments
- Use the elbow method to choose optimal cluster count
- Interpret cluster profiles and create business recommendations
- Visualize high-dimensional data with PCA

### Lab Structure
1. **Explore the Data** (Beginner): Load, inspect, visualize relationships
2. **Prepare Data** (Intermediate): Feature selection, scaling
3. **Apply K-means** (Beginner-Intermediate): Elbow method, clustering
4. **Interpret Clusters** (Intermediate): Profile analysis, naming segments
5. **Business Recommendations** (Application): Strategy development
6. **Advanced Challenges** (Optional): Different k values, silhouette analysis, predict new customers

### Key Features
- ✅ Pre-loaded e-commerce dataset (1,000 customers)
- ✅ 5 features (income, spending score, purchases, avg value, recency)
- ✅ Interactive elbow curve visualization
- ✅ PCA 2D visualization with cluster coloring
- ✅ Business strategy template
- ✅ AI Code Assistant for debugging and concept explanations

### Sample Outputs
- Scatter plots showing feature relationships
- Elbow curve for optimal k selection
- 2D PCA visualization with colored clusters
- Cluster profile comparison table
- Business recommendation framework

---

## Lab 2: Data Preprocessing & Feature Engineering

**Status**: ✅ COMPLETED
**File**: `lab-02-data-preprocessing.md`
**Time**: 40-50 minutes
**Difficulty**: Beginner to Intermediate

### Learning Objectives
- Handle missing values with appropriate strategies
- Detect and cap outliers
- Encode categorical variables (label encoding, one-hot encoding)
- Engineer new features from existing data
- Identify and prevent data leakage
- Build a complete preprocessing pipeline

### Lab Structure
1. **Explore Messy Data** (Beginner): Identify missing values, outliers, inconsistencies
2. **Handle Missing Values** (Intermediate): Median/mode imputation strategies
3. **Handle Outliers** (Intermediate): Winsorization, capping extreme values
4. **Encode Categoricals** (Intermediate-Advanced): Label vs one-hot encoding
5. **Feature Engineering** (Advanced): Create derived features, interaction terms
6. **Spot Data Leakage** (Critical): Identify and remove leakage
7. **Scale Features** (Final step): StandardScaler preparation

### Key Features
- ✅ Intentionally messy banking dataset (800 customers, 13 features)
- ✅ Real data quality issues: missing values, outliers, inconsistent text
- ✅ Missing data heatmap visualization
- ✅ Before/after boxplot comparisons
- ✅ Data leakage examples (what NOT to do!)
- ✅ Complete preprocessing pipeline summary

### Sample Outputs
- Missing value heatmap
- Outlier detection boxplots (before/after capping)
- Encoding transformation tables
- Feature engineering formulas and results
- Leakage detection warnings
- Preprocessing transformation summary

---

## Lab 3: Model Evaluation & Threshold Tuning

**Status**: 📝 DESIGN COMPLETE (implementation template ready)
**File**: `lab-03-evaluation-metrics.md` (to be created)
**Time**: 35-45 minutes
**Difficulty**: Beginner to Intermediate

### Learning Objectives
- Understand precision, recall, F1, and accuracy
- Visualize confusion matrices
- Tune classification thresholds for business objectives
- Calculate business costs/benefits of model decisions
- Compare models using ROC curves and AUC

### Lab Structure
1. **Fraud Detection Scenario** (Context): Credit card fraud model evaluation
2. **Confusion Matrix Basics** (Beginner): TP, FP, TN, FN explained visually
3. **Metrics Explained** (Intermediate): Precision, recall, F1, accuracy formulas
4. **Interactive Threshold Tuning** (Advanced): Slider to adjust threshold, see impact
5. **Business Cost Analysis** (Application): Calculate $ impact of FP vs FN
6. **ROC Curve & AUC** (Advanced): Compare multiple models

### Key Features
- 🔄 Interactive threshold slider (0.1 to 0.9)
- 🔄 Real-time confusion matrix updates
- 🔄 Live precision/recall/F1 recalculation
- 🔄 Business cost calculator (fraud investigation cost vs fraud loss)
- 🔄 ROC curve visualization with AUC scores
- 🔄 Multiple model comparison (logistic regression, random forest, XGBoost)

### Sample Outputs
- Confusion matrix heatmap (updates with threshold)
- Precision-recall curve
- ROC curve with AUC annotation
- Business cost breakdown table
- Metric comparison across thresholds

### Interactive Widget Design
```python
# Threshold slider widget
threshold = widgets.FloatSlider(
    value=0.5, min=0.1, max=0.9, step=0.05,
    description='Threshold:', continuous_update=False
)

# Real-time metric updates
def update_metrics(threshold):
    y_pred = (y_prob >= threshold).astype(int)
    # Recalculate confusion matrix, precision, recall, F1
    # Update visualizations
    # Recalculate business costs
```

---

## Lab 4: Leakage Detective Game

**Status**: 📝 DESIGN COMPLETE
**File**: `lab-04-leakage-detective.md` (to be created)
**Time**: 20-30 minutes
**Difficulty**: Beginner to Intermediate (puzzle/game format)

### Learning Objectives
- Recognize data leakage in various scenarios
- Understand temporal leakage (using future information)
- Identify target leakage (using the target to create features)
- Prevent train/test contamination
- Build intuition for time-based splits

### Lab Structure
1. **What is Data Leakage?** (Concept review)
2. **Scenario 1**: Customer churn prediction (spot the leakage!)
3. **Scenario 2**: Stock price prediction (temporal leakage)
4. **Scenario 3**: Medical diagnosis (target leakage)
5. **Scenario 4**: Loan default prediction (train/test contamination)
6. **Scenario 5**: Time series forecasting (look-ahead bias)
7. **Build Your Defense** (Create leakage checklist)

### Game Mechanics
**Format**: Interactive multiple-choice scenarios with instant feedback

**Each scenario includes**:
- Business context and modeling goal
- 5-7 features proposed for the model
- **Your task**: Identify which features contain leakage
- **Feedback**: Explanation of why each feature does/doesn't leak
- **Score**: Track correct identifications (gamification!)

### Example Scenario
```
Scenario 2: Predict Customer Churn (Next 30 Days)

Context: You're building a model to identify customers likely to churn in the next month.

Proposed Features:
1. ✅ Account age (months since signup)
2. ✅ Average monthly usage (last 6 months)
3. ✅ Number of support tickets (last 3 months)
4. ❌ Cancellation date [LEAKAGE: This IS the target!]
5. ❌ Post-churn survey score [LEAKAGE: Survey happens AFTER churn]
6. ✅ Days since last login
7. ❌ Next month's usage [LEAKAGE: Using future data]

Click each feature to reveal if it contains leakage.
Score: __ / 7 correct
```

### Key Features
- 🔄 5 realistic scenarios across industries
- 🔄 Instant feedback with explanations
- 🔄 Score tracking and leaderboard
- 🔄 "Hint" button for struggling learners
- 🔄 Final leakage prevention checklist download
- 🔄 AI assistant for discussing edge cases

### Sample Outputs
- Scenario presentations with clickable features
- Leakage explanation pop-ups
- Final score summary (e.g., "8/10 - Leakage Detective!")
- Downloadable leakage prevention checklist

---

## Lab 5: Feature Engineering Workshop

**Status**: 📝 DESIGN COMPLETE
**File**: `lab-05-feature-engineering.md` (to be created)
**Time**: 40-50 minutes
**Difficulty**: Intermediate to Advanced

### Learning Objectives
- Create time-based features (recency, frequency, monetary - RFM)
- Engineer aggregation features (rolling windows, cumulative sums)
- Build interaction features (products, ratios)
- Extract features from text data (length, keywords, sentiment)
- Create domain-specific features (industry knowledge)
- Evaluate feature importance

### Lab Structure
1. **E-commerce Sales Prediction** (Business context)
2. **Time-Based Features** (Beginner-Intermediate): Recency, seasonality, day-of-week
3. **Aggregation Features** (Intermediate): Rolling averages, cumulative metrics
4. **Interaction Features** (Intermediate): Feature products, ratios, polynomial
5. **Text Feature Extraction** (Advanced): Product description mining
6. **Domain Features** (Advanced): Industry-specific transformations
7. **Feature Importance Analysis** (Evaluation): Which features matter most?

### Key Features
- 🔄 Real e-commerce dataset (transactions, products, customers)
- 🔄 Step-by-step feature creation with code
- 🔄 Feature importance plot (random forest)
- 🔄 Before/after model performance comparison
- 🔄 Feature engineering best practices checklist
- 🔄 AI feature suggestion assistant

### Example Feature Engineering Tasks

**Task 1: RFM Features (E-commerce Classic)**
```python
# Recency: Days since last purchase
df['days_since_last_purchase'] = (today - df['last_purchase_date']).dt.days

# Frequency: Number of purchases in last 365 days
df['purchases_last_year'] = df.groupby('customer_id')['transaction_id'].transform('count')

# Monetary: Total spend in last 365 days
df['total_spend_last_year'] = df.groupby('customer_id')['amount'].transform('sum')
```

**Task 2: Time-Based Features**
```python
# Extract temporal features
df['day_of_week'] = df['purchase_date'].dt.dayofweek
df['is_weekend'] = (df['day_of_week'] >= 5).astype(int)
df['month'] = df['purchase_date'].dt.month
df['is_holiday_season'] = df['month'].isin([11, 12]).astype(int)
```

**Task 3: Aggregation Features**
```python
# Rolling 30-day average purchase amount
df['rolling_30d_avg'] = df.groupby('customer_id')['amount'].transform(
    lambda x: x.rolling(window=30, min_periods=1).mean()
)

# Cumulative purchase count
df['cumulative_purchases'] = df.groupby('customer_id').cumcount() + 1
```

**Task 4: Interaction Features**
```python
# Product of related features
df['lifetime_value_proxy'] = df['avg_order_value'] * df['purchase_frequency']

# Ratio features
df['discount_usage_rate'] = df['orders_with_discount'] / (df['total_orders'] + 1)
```

### Sample Outputs
- Feature engineering code snippets with explanations
- Feature importance bar chart (top 20 features)
- Model performance comparison (baseline vs engineered features)
  - Before: R² = 0.65, MAE = $45
  - After: R² = 0.82, MAE = $28 (38% improvement!)
- Feature correlation heatmap
- Feature engineering best practices checklist

---

## Lab Integration with Week 1 Content

### How Labs Connect to Week 1 Modules

| Week 1 Module | Related Lab(s) | Concepts Practiced |
|---------------|----------------|-------------------|
| 02-ai-importance | Lab 1 | Supervised vs unsupervised learning |
| 03-understanding-data | Lab 1, Lab 5 | Data exploration, segmentation |
| 04-data-science-framework | All Labs | Complete DS workflow in practice |
| 06-big-data-dimensions | Lab 2 | Data quality (Veracity) |
| 07-machine-learning-models | Lab 1, Lab 3 | Clustering, classification, evaluation |
| 08-data-preprocessing | Lab 2, Lab 4 | Cleaning, encoding, leakage prevention |
| 09-evaluation-training | Lab 3 | Metrics, thresholds, business trade-offs |

### Lab Sequencing Logic

**Recommended Order**:
1. **Lab 1** (Segmentation) → Gentle introduction, visualization-heavy, immediate business value
2. **Lab 2** (Preprocessing) → Foundational skills needed for all modeling
3. **Lab 4** (Leakage Game) → Critical concept, interactive/fun format provides break
4. **Lab 3** (Evaluation) → Build on Lab 1/2, understand model performance
5. **Lab 5** (Feature Engineering) → Advanced synthesis, pulls everything together

**Alternative Order** (for more technical learners):
- Start with Lab 2 (get data ready)
- Lab 5 (engineer features)
- Lab 1 (apply clustering)
- Lab 3 (evaluate)
- Lab 4 (review leakage concepts)

---

## AI Code Assistant Configuration

All labs include the same AI assistant framework with lab-specific knowledge:

### Base System Prompt Template
```
You are a patient Python tutor helping learners complete [LAB NAME] focused on [TOPIC].

Help with:
- Explaining what code blocks do (line-by-line if needed)
- Debugging errors (syntax, runtime, logic)
- Answering conceptual questions ([KEY CONCEPTS])
- Guiding interpretation of outputs ([VISUALIZATIONS])
- Suggesting extensions and improvements
- Connecting code to Week 1 concepts

Adapt to learner level:
- **Beginners**: Explain line-by-line, use analogies, avoid jargon, celebrate small wins
- **Intermediate**: Focus on concepts, guide to solutions with questions
- **Advanced**: Discuss trade-offs, optimizations, production considerations

Pedagogy:
- Use Socratic questioning ("What do you think this line does?")
- Provide hints before full solutions
- Encourage experimentation ("What happens if you change X to Y?")
- Connect code outputs to business value
- Normalize mistakes and errors as part of learning

When learners struggle:
- Break problems into smaller steps
- Provide simplified examples
- Offer alternative explanations
- Link to Week 1 readings for concept review
```

### Lab-Specific Customizations

**Lab 1 (Segmentation)**:
- Key concepts: K-means, elbow method, PCA, clustering interpretation
- Common questions: "Why scale data?", "How to choose k?", "What is inertia?"

**Lab 2 (Preprocessing)**:
- Key concepts: Missing value strategies, outlier handling, encoding types, leakage
- Common questions: "Mean vs median?", "One-hot vs label encoding?", "What is leakage?"

**Lab 3 (Evaluation)**:
- Key concepts: Confusion matrix, precision/recall, threshold tuning, business costs
- Common questions: "Precision vs recall?", "When to optimize which metric?", "How to choose threshold?"

**Lab 4 (Leakage)**:
- Key concepts: Temporal leakage, target leakage, train/test contamination
- Common questions: "Is this leakage?", "How to prevent it?", "Time-based splits?"

**Lab 5 (Feature Engineering)**:
- Key concepts: RFM, rolling windows, interactions, domain knowledge
- Common questions: "What features to create?", "How to measure importance?", "When is enough enough?"

---

## Non-Technical Learner Support

### "What's Happening Here?" Sections

Every code block includes a plain-language explanation:

**Example from Lab 1**:
```python
kmeans = KMeans(n_clusters=4, random_state=42)
kmeans.fit(X_scaled)
```

**What's happening here?**
> We're asking the algorithm to find 4 natural groupings in our customer data. The `random_state=42` ensures we get the same results each time we run it (important for reproducibility!). The `.fit()` method is where the math happens—the algorithm looks at all 1,000 customers and assigns each to one of 4 clusters based on similarity.

### "Non-Technical Summary" Sections

Every lab ends with a business-focused summary for learners who skipped the code:

**Example from Lab 2**:
> **What happened in this lab?**
> We cleaned messy banking data through 7 steps: fixing missing values, capping outliers, standardizing text, converting categories to numbers, creating new predictive features, removing "cheating" features (data leakage), and scaling everything to the same range. A model trained on this clean data will be 10x more accurate than one trained on the messy original data.

### Skip-the-Code Option

Each lab includes navigation to jump to results:
- [Skip to Results & Interpretation](#part-4)
- [Skip to Business Recommendations](#part-5)
- [Skip to Non-Technical Summary](#non-technical-summary)

---

## Advanced Challenges Summary

### Lab 1 Advanced Challenges
1. Experiment with different k values (3, 5, 6)
2. Include age in clustering, observe changes
3. Use Silhouette Score for objective k selection
4. Predict cluster for new customers

### Lab 2 Advanced Challenges
1. Build a reusable preprocessing function
2. Try K-NN imputation instead of median/mode
3. Create interaction features (credit × balance)
4. Write automated leakage detection function

### Lab 3 Advanced Challenges
1. Optimize threshold for specific business cost structure
2. Compare 3+ models with ROC curves
3. Implement custom evaluation metrics
4. Create a decision support dashboard

### Lab 4 Advanced Challenges
1. Create your own leakage scenario
2. Build automated leakage detection tool
3. Analyze real-world case studies of leakage failures
4. Develop time-series cross-validation strategy

### Lab 5 Advanced Challenges
1. Automated feature generation (featuretools)
2. Feature selection with LASSO/regularization
3. Time-series specific feature engineering
4. Domain-specific feature libraries

---

## Implementation Checklist

### For Each Lab

**Content Development** (per lab: ~10-12 hours):
- [ ] Write all code blocks with comments
- [ ] Create synthetic datasets (CSV files)
- [ ] Generate visualization outputs (save as examples)
- [ ] Write "What's happening here?" explanations
- [ ] Create Check Your Understanding quizzes
- [ ] Design advanced challenges
- [ ] Write non-technical summary
- [ ] Configure AI Code Assistant

**Testing** (per lab: ~2-3 hours):
- [ ] Run all code blocks, verify outputs
- [ ] Test on Google Colab (Uplimit environment)
- [ ] Check for common beginner errors
- [ ] Validate quiz answers
- [ ] Test AI assistant prompts
- [ ] Get pilot learner feedback

**Integration** (per lab: ~1-2 hours):
- [ ] Link to relevant Week 1 modules
- [ ] Add to course navigation
- [ ] Create prerequisite notes
- [ ] Add estimated time and difficulty tags
- [ ] Upload datasets to accessible location
- [ ] Configure Uplimit platform widgets

---

## Estimated Effort

| Lab | Design | Development | Testing | Total Hours |
|-----|--------|-------------|---------|-------------|
| Lab 1: Segmentation | ✅ Done | 10h | 2h | 12h |
| Lab 2: Preprocessing | ✅ Done | 10h | 2h | 12h |
| Lab 3: Evaluation | ✅ Done | 12h | 3h | 15h |
| Lab 4: Leakage Game | ✅ Done | 8h | 2h | 10h |
| Lab 5: Feature Engineering | ✅ Done | 12h | 3h | 15h |
| **TOTAL** | **Done** | **52h** | **12h** | **64h** |

**Current Status**: Design 100% complete, Implementation 31% complete (Labs 1-2 fully developed)

---

## Next Steps

### Immediate (Complete Week 1 Labs)
1. ✅ Finalize Lab 1 (Customer Segmentation) - DONE
2. ✅ Finalize Lab 2 (Data Preprocessing) - DONE
3. 🔄 Develop Lab 3 (Evaluation Metrics) - ~15 hours
4. 🔄 Develop Lab 4 (Leakage Detective Game) - ~10 hours
5. 🔄 Develop Lab 5 (Feature Engineering) - ~15 hours

### Medium-term (Testing & Refinement)
6. Pilot test with 5-10 learners from diverse backgrounds
7. Collect feedback on difficulty, pacing, clarity
8. Refine based on common stuck points
9. Add more hints/scaffolding where needed
10. Create instructor solution guides

### Long-term (Scale to Weeks 2-5)
11. Design Phase 3 labs for Week 2 (Supervised Learning algorithms)
12. Design Phase 3 labs for Week 3 (Unsupervised Learning + Preprocessing)
13. Design Phase 3 labs for Week 4 (GenAI/LLM hands-on)
14. Design Phase 3 labs for Week 5 (Data Science with GenAI)

---

## Success Metrics

**Engagement**:
- % of learners who start each lab
- % who complete each lab
- Time spent per lab (target: within estimated time ±50%)

**Learning Outcomes**:
- Check Your Understanding quiz scores (target: >80% correct)
- Code execution success rate (target: >90% with AI assistant)
- Advanced challenge attempt rate (target: >30%)

**Satisfaction**:
- Learner ratings (target: 4.5+/5)
- "This helped me understand [concept]" survey responses (target: >85% agree)
- "I can now apply this to my work" (target: >75% agree)

**Technical Quality**:
- Code error rate (target: <5% of learners encounter unresolvable errors)
- AI assistant helpfulness rating (target: 4+/5)
- Dataset clarity rating (target: 4.5+/5)

---

## Conclusion

Phase 3 provides hands-on, interactive coding experiences that transform Week 1 from passive learning to active practice. By the end of all 5 labs, learners will have:

✅ Segmented customers with unsupervised learning
✅ Cleaned messy data and engineered features
✅ Evaluated models and tuned decision thresholds
✅ Identified and prevented data leakage
✅ Built end-to-end ML preprocessing pipelines

**Impact**: Learners gain **practical skills** they can apply immediately, not just theoretical knowledge. The combination of Phase 1 (AI assistants), Phase 2 (industry diversity), and Phase 3 (hands-on labs) creates a truly Uplimit-native, AI-first learning experience.

---

**Document Version**: 1.0
**Last Updated**: October 17, 2025
**Status**: Design Complete | Ready for Full Implementation
