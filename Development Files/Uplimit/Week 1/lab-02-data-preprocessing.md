# Lab 2: Data Preprocessing & Feature Engineering

## Learning Objectives

By the end of this lab, you'll be able to:
- Handle missing values using different strategies
- Detect and handle outliers
- Encode categorical variables (one-hot, label encoding)
- Create new features from existing data (feature engineering)
- Identify and prevent data leakage
- Build a complete preprocessing pipeline

**Time**: 40-50 minutes
**Difficulty**: Beginner to Intermediate

---

## Why This Lab Matters

**"Garbage in, garbage out"** is the iron law of machine learning.

In Week 1, you learned that data preprocessing consumes 60-80% of a data scientist's time. This lab shows you *why*—and teaches you how to transform messy, real-world data into clean, model-ready features.

**For non-coders**: You'll understand what data teams do when they "clean the data" and why it takes so long.

**For technical learners**: You'll get hands-on practice with pandas, scikit-learn preprocessing, and real-world data quality issues.

---

## The Business Context

You're a data analyst at a bank building a model to predict customer churn (will customers close their accounts?). You've received a messy dataset from multiple source systems:

- **CRM system**: Customer demographics and account info
- **Transaction system**: Banking activity logs
- **Support system**: Customer service interactions

**Your task**: Clean this data, handle missing values, encode categories, and engineer predictive features before modeling.

---

## Dataset Overview

**Banking Customer Data (800 customers)**:

**Demographic Features**:
- `customer_id`: Unique ID
- `age`: Customer age (some missing!)
- `gender`: M/F (categorical)
- `education`: Education level (categorical, messy!)
- `marital_status`: Single/Married/Divorced (some missing!)

**Account Features**:
- `account_balance`: Current balance (has outliers!)
- `credit_score`: 300-850 (some missing!)
- `num_products`: Number of banking products (1-4)
- `tenure_months`: How long they've been a customer

**Activity Features**:
- `num_transactions_last_month`: Transaction count
- `avg_transaction_amount`: Average transaction size
- `num_complaints`: Customer service complaints (last year)
- `inactive_months`: Months without activity (has missing!)

**Target**:
- `churned`: 1 if customer churned, 0 if active (for future modeling)

**Data Quality Issues** (intentional for learning!):
- ✗ Missing values in multiple columns
- ✗ Outliers in account_balance
- ✗ Inconsistent text formatting in education
- ✗ Categorical variables need encoding
- ✗ Features at different scales

---

## Lab Setup

**[Interactive Python Environment]**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.impute import SimpleImputer
```

**Dataset loaded as:**
```python
df = pd.read_csv('banking_customers_messy.csv')
```

---

## Part 1: Explore the Messy Data (Beginner Level)

### Task 1.1: First Look at the Data

```python
# Display basic info
print("Dataset shape:", df.shape)
print("\nFirst 10 rows:")
print(df.head(10))

print("\n" + "="*60 + "\n")

# Data types
print("Data types:")
print(df.dtypes)

print("\n" + "="*60 + "\n")

# Summary statistics
print("Summary statistics:")
print(df.describe())
```

**[Run Code]**

**What to notice**:
- How many rows and columns?
- Are all numeric columns actually numeric types?
- Do the min/max values make sense? (Watch for outliers!)

---

### Task 1.2: Identify Missing Values

```python
# Count missing values
missing_counts = df.isnull().sum()
missing_percent = (df.isnull().sum() / len(df)) * 100

missing_df = pd.DataFrame({
    'Missing Count': missing_counts,
    'Missing %': missing_percent
}).sort_values('Missing Count', ascending=False)

print("Missing Values Report:")
print(missing_df[missing_df['Missing Count'] > 0])

print("\n" + "="*60 + "\n")

# Visualize missing data pattern
plt.figure(figsize=(12, 6))
sns.heatmap(df.isnull(), cbar=False, yticklabels=False, cmap='viridis')
plt.title('Missing Data Pattern (Yellow = Missing)', fontsize=14, fontweight='bold')
plt.xlabel('Features')
plt.tight_layout()
plt.show()
```

**[Run Code]**

**Questions**:
- Which columns have the most missing values?
- Is the missingness random or patterned?
- Can you think of why certain fields might be missing?

---

### Task 1.3: Detect Outliers

```python
# Visualize distributions and outliers
numeric_cols = ['age', 'account_balance', 'credit_score', 'num_transactions_last_month',
                'avg_transaction_amount', 'tenure_months']

fig, axes = plt.subplots(2, 3, figsize=(15, 10))
axes = axes.flatten()

for i, col in enumerate(numeric_cols):
    axes[i].boxplot(df[col].dropna(), vert=True)
    axes[i].set_title(f'{col}', fontweight='bold')
    axes[i].set_ylabel('Value')
    axes[i].grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

print("Potential Outliers Detected:")
print("\nAccount Balance outliers (> $500k or < -$100k):")
outliers_balance = df[(df['account_balance'] > 500000) | (df['account_balance'] < -100000)]
print(f"Found {len(outliers_balance)} extreme balance outliers")

print("\nAge outliers (< 18 or > 100):")
outliers_age = df[(df['age'] < 18) | (df['age'] > 100)]
print(f"Found {len(outliers_age)} age outliers")
```

**[Run Code]**

**What to notice**:
- Which features have extreme outliers (dots far from the box)?
- Are these outliers errors or legitimate extreme values?
- How should you handle them?

---

## Part 2: Handle Missing Values (Intermediate Level)

### Task 2.1: Choose Missing Value Strategies

Different columns need different approaches:

**Strategy Decision Tree**:
1. **Numeric continuous** (age, credit_score) → Mean or Median imputation
2. **Numeric count** (inactive_months) → Median or Mode
3. **Categorical** (marital_status, education) → Mode or "Unknown" category
4. **Target-dependent** → Advanced: Group-based imputation

```python
# Create a copy for preprocessing
df_clean = df.copy()

print("Missing Value Strategy Plan:\n")

# Age: Use median (robust to outliers)
age_median = df_clean['age'].median()
print(f"1. Age: Fill {df_clean['age'].isnull().sum()} missing values with median = {age_median:.1f}")

# Credit Score: Use median
credit_median = df_clean['credit_score'].median()
print(f"2. Credit Score: Fill {df_clean['credit_score'].isnull().sum()} missing with median = {credit_median:.1f}")

# Marital Status: Use mode (most common)
marital_mode = df_clean['marital_status'].mode()[0]
print(f"3. Marital Status: Fill {df_clean['marital_status'].isnull().sum()} missing with mode = '{marital_mode}'")

# Inactive Months: Fill with 0 (assumption: missing means no inactivity recorded)
print(f"4. Inactive Months: Fill {df_clean['inactive_months'].isnull().sum()} missing with 0 (assume active)")

print("\n" + "="*60)
```

**[Run Code]**

---

### Task 2.2: Apply Missing Value Imputation

```python
# Apply the imputation strategies
df_clean['age'].fillna(age_median, inplace=True)
df_clean['credit_score'].fillna(credit_median, inplace=True)
df_clean['marital_status'].fillna(marital_mode, inplace=True)
df_clean['inactive_months'].fillna(0, inplace=True)

# Verify no missing values remain in these columns
print("After Imputation - Missing Values Check:")
print(df_clean[['age', 'credit_score', 'marital_status', 'inactive_months']].isnull().sum())

print("\n✅ Missing values handled!")
print(f"\nTotal missing values remaining in dataset: {df_clean.isnull().sum().sum()}")
```

**[Run Code]**

---

## Part 3: Handle Outliers and Data Quality Issues (Intermediate)

### Task 3.1: Cap Extreme Outliers

Some outliers are data errors. We'll use **winsorization** (cap at percentiles).

```python
# Cap account_balance at 1st and 99th percentiles
lower_bound = df_clean['account_balance'].quantile(0.01)
upper_bound = df_clean['account_balance'].quantile(0.99)

print(f"Account Balance Bounds:")
print(f"  1st percentile: ${lower_bound:,.2f}")
print(f"  99th percentile: ${upper_bound:,.2f}")

# Count outliers before capping
outliers_before = ((df_clean['account_balance'] < lower_bound) |
                   (df_clean['account_balance'] > upper_bound)).sum()

print(f"\nOutliers to be capped: {outliers_before}")

# Apply capping
df_clean['account_balance'] = df_clean['account_balance'].clip(lower=lower_bound, upper=upper_bound)

print("✅ Outliers capped!")

# Visualize before/after
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

axes[0].boxplot(df['account_balance'].dropna())
axes[0].set_title('Before: Account Balance (With Outliers)', fontweight='bold')
axes[0].set_ylabel('Balance ($)')

axes[1].boxplot(df_clean['account_balance'])
axes[1].set_title('After: Account Balance (Outliers Capped)', fontweight='bold')
axes[1].set_ylabel('Balance ($)')

plt.tight_layout()
plt.show()
```

**[Run Code]**

---

### Task 3.2: Fix Inconsistent Text Data

The `education` column has messy formatting:

```python
# Check unique education values
print("Education values (before cleaning):")
print(df_clean['education'].value_counts())

print("\n" + "="*60 + "\n")

# Clean education column
df_clean['education'] = df_clean['education'].str.strip()  # Remove whitespace
df_clean['education'] = df_clean['education'].str.title()  # Standardize capitalization

# Map variations to standard categories
education_mapping = {
    'Highschool': 'High School',
    'High School': 'High School',
    'Bachelors': 'Bachelor',
    'Bachelor': 'Bachelor',
    'Masters': 'Master',
    'Master': 'Master',
    'Phd': 'PhD',
    'Doctorate': 'PhD'
}

df_clean['education'] = df_clean['education'].replace(education_mapping)

print("Education values (after cleaning):")
print(df_clean['education'].value_counts())

print("\n✅ Text data standardized!")
```

**[Run Code]**

---

## Part 4: Encode Categorical Variables (Intermediate to Advanced)

### Task 4.1: Label Encoding for Ordinal Categories

**Education** has a natural order: High School < Bachelor < Master < PhD

```python
# Create ordinal mapping
education_order = {
    'High School': 1,
    'Bachelor': 2,
    'Master': 3,
    'PhD': 4
}

df_clean['education_encoded'] = df_clean['education'].map(education_order)

print("Education Label Encoding:")
print(df_clean[['education', 'education_encoded']].drop_duplicates().sort_values('education_encoded'))

print("\n✅ Ordinal encoding applied!")
```

**[Run Code]**

---

### Task 4.2: One-Hot Encoding for Nominal Categories

**Gender** and **Marital Status** have no natural order—use one-hot encoding.

```python
# One-hot encode gender and marital_status
df_encoded = pd.get_dummies(df_clean, columns=['gender', 'marital_status'],
                             prefix=['gender', 'marital'], drop_first=True)

print("One-Hot Encoding Applied:")
print("\nNew columns created:")
new_cols = [col for col in df_encoded.columns if col.startswith(('gender_', 'marital_'))]
print(new_cols)

print("\nSample rows:")
print(df_encoded[['customer_id'] + new_cols].head())

print("\n✅ Nominal categories encoded!")
```

**[Run Code]**

**Why `drop_first=True`?**
- Gender: If `gender_M=0`, we know it's F. No need for both columns (avoids multicollinearity).
- Same for marital status

---

## Part 5: Feature Engineering (Advanced Level)

### Task 5.1: Create Derived Features

Let's create new features that might be predictive of churn:

```python
# 1. Account age (years)
df_encoded['account_age_years'] = df_encoded['tenure_months'] / 12

# 2. Average monthly balance
df_encoded['avg_monthly_balance'] = df_encoded['account_balance'] / (df_encoded['tenure_months'] + 1)

# 3. Transaction intensity (transactions per month of tenure)
df_encoded['transaction_intensity'] = df_encoded['num_transactions_last_month'] / (df_encoded['tenure_months'] + 1)

# 4. Complaint rate (complaints per product)
df_encoded['complaint_rate'] = df_encoded['num_complaints'] / (df_encoded['num_products'] + 1)

# 5. Engagement score (composite metric)
df_encoded['engagement_score'] = (
    df_encoded['num_transactions_last_month'] * 2 +
    df_encoded['num_products'] * 10 -
    df_encoded['num_complaints'] * 5 -
    df_encoded['inactive_months'] * 3
)

# 6. Risk flag (low credit + high complaints)
df_encoded['high_risk'] = ((df_encoded['credit_score'] < 600) &
                            (df_encoded['num_complaints'] > 2)).astype(int)

print("New Features Created:\n")
print(df_encoded[['customer_id', 'account_age_years', 'avg_monthly_balance',
                   'transaction_intensity', 'complaint_rate',
                   'engagement_score', 'high_risk']].head())

print("\n✅ Feature engineering complete!")
```

**[Run Code]**

**Why these features?**
- **Account age**: Older customers might be more loyal
- **Avg monthly balance**: Wealth relative to tenure
- **Transaction intensity**: How active are they?
- **Complaint rate**: Dissatisfaction signal
- **Engagement score**: Composite health metric
- **High risk**: Combination of credit and complaints

---

### Task 5.2: Spot the Data Leakage! (Critical!)

**🚨 DANGER ZONE: Data Leakage Example 🚨**

```python
# ❌ BAD: Creating a feature that uses future information
# If we're predicting churn, this feature "cheats" by using the target
df_encoded['BAD_churn_indicator'] = df_encoded['churned']  # This is the target!

# ❌ BAD: Average balance of churned customers
# This calculates stats AFTER we know who churned
churned_avg_balance = df_encoded[df_encoded['churned'] == 1]['account_balance'].mean()
df_encoded['BAD_churned_customer_avg'] = churned_avg_balance

print("🚨 LEAKAGE EXAMPLES (DO NOT USE IN PRODUCTION!):\n")
print(df_encoded[['customer_id', 'churned', 'BAD_churn_indicator',
                   'BAD_churned_customer_avg']].head())

print("\n" + "="*60)
print("Why is this leakage?")
print("- We're using the TARGET (churned) to create features")
print("- In production, we won't know who churned yet!")
print("- Model will look amazing in training but fail in real world")
print("="*60)

# ✅ GOOD: Remove leakage features
df_encoded = df_encoded.drop(columns=['BAD_churn_indicator', 'BAD_churned_customer_avg'])

print("\n✅ Leakage features removed!")
```

**[Run Code]**

**Key lesson**: Never use information from the future or from the target variable when creating features!

---

## Part 6: Scale Features (Final Preprocessing Step)

### Task 6.1: Standardize Numeric Features

```python
# Select numeric features to scale
numeric_features = ['age', 'account_balance', 'credit_score', 'num_products',
                    'tenure_months', 'num_transactions_last_month', 'avg_transaction_amount',
                    'num_complaints', 'inactive_months', 'account_age_years',
                    'avg_monthly_balance', 'transaction_intensity', 'complaint_rate',
                    'engagement_score']

# Initialize scaler
scaler = StandardScaler()

# Fit and transform
df_encoded[numeric_features] = scaler.fit_transform(df_encoded[numeric_features])

print("Feature Scaling Applied (StandardScaler):")
print("\nScaled features (first 5 rows):")
print(df_encoded[numeric_features].head())

print("\nVerify: Mean ≈ 0, Std ≈ 1")
print(df_encoded[numeric_features].describe().loc[['mean', 'std']])

print("\n✅ All features scaled and ready for modeling!")
```

**[Run Code]**

---

## Part 7: Final Preprocessing Pipeline Summary

### Task 7.1: Compare Before and After

```python
print("="*70)
print("PREPROCESSING TRANSFORMATION SUMMARY")
print("="*70)

print(f"\n📊 BEFORE:")
print(f"  - Rows: {len(df)}")
print(f"  - Columns: {len(df.columns)}")
print(f"  - Missing values: {df.isnull().sum().sum()}")
print(f"  - Categorical columns: {df.select_dtypes(include='object').shape[1]}")

print(f"\n📊 AFTER:")
print(f"  - Rows: {len(df_encoded)}")
print(f"  - Columns: {len(df_encoded.columns)}")
print(f"  - Missing values: {df_encoded.isnull().sum().sum()}")
print(f"  - Categorical columns: {df_encoded.select_dtypes(include='object').shape[1]}")

print(f"\n✨ TRANSFORMATIONS APPLIED:")
print(f"  1. ✅ Missing value imputation (4 columns)")
print(f"  2. ✅ Outlier capping (account_balance)")
print(f"  3. ✅ Text standardization (education)")
print(f"  4. ✅ Label encoding (education → ordinal)")
print(f"  5. ✅ One-hot encoding (gender, marital_status)")
print(f"  6. ✅ Feature engineering (6 new features created)")
print(f"  7. ✅ Data leakage prevention (checked and removed)")
print(f"  8. ✅ Feature scaling (StandardScaler on {len(numeric_features)} features)")

print(f"\n🎯 RESULT: Clean, model-ready dataset!")
print("="*70)
```

**[Run Code]**

---

## 🎯 Check Your Understanding

1. **Why did we use median instead of mean for age imputation?**
   - [ ] Median is faster to calculate
   - [ ] Median is robust to outliers
   - [ ] Mean doesn't work with missing data
   - [ ] Median is always better

2. **What's the difference between one-hot encoding and label encoding?**
   - [ ] One-hot is for numbers, label is for text
   - [ ] One-hot creates binary columns, label assigns numbers
   - [ ] They're the same thing
   - [ ] One-hot is always better

3. **Which of these is data leakage?**
   - [ ] Using last month's transactions to predict this month's churn
   - [ ] Using customer age to predict churn
   - [ ] Using the churn target to create a feature
   - [ ] Using account balance to predict churn

4. **Why do we scale features before modeling?**
   - [ ] To make the data look prettier
   - [ ] To ensure features contribute equally to distance-based algorithms
   - [ ] To remove outliers
   - [ ] Scaling is optional and doesn't matter

5. **How many missing values should remain after proper preprocessing?**
   - [ ] As few as possible (ideally 0)
   - [ ] At least 10%
   - [ ] Doesn't matter
   - [ ] More than before

---

## 🚀 Advanced Challenges (Optional)

### Challenge 1: Build a Preprocessing Function

Create a reusable preprocessing function:

```python
def preprocess_customer_data(df_raw):
    """
    Complete preprocessing pipeline for customer churn data.

    Parameters:
    df_raw (DataFrame): Raw customer data

    Returns:
    DataFrame: Cleaned, encoded, and scaled data ready for modeling
    """
    df = df_raw.copy()

    # TODO: Implement all preprocessing steps
    # 1. Handle missing values
    # 2. Cap outliers
    # 3. Clean text
    # 4. Encode categoricals
    # 5. Engineer features
    # 6. Scale numerics

    return df

# Test your function
# df_processed = preprocess_customer_data(df)
```

---

### Challenge 2: Handle Missing Values with K-NN Imputation

Instead of simple median/mode, try K-NN imputation (uses similar customers to fill missing values):

```python
from sklearn.impute import KNNImputer

# Select numeric columns with missing values
knn_imputer = KNNImputer(n_neighbors=5)

numeric_cols_with_missing = ['age', 'credit_score', 'inactive_months']
df_clean[numeric_cols_with_missing] = knn_imputer.fit_transform(
    df_clean[numeric_cols_with_missing]
)

print("K-NN Imputation completed!")
print("Missing values:", df_clean[numeric_cols_with_missing].isnull().sum())
```

**How it works**: For each missing value, find 5 most similar customers and use their average.

---

### Challenge 3: Create Interaction Features

Sometimes the *combination* of features is more predictive than individual features:

```python
# Example interaction features
df_encoded['credit_x_balance'] = df_encoded['credit_score'] * df_encoded['account_balance']
df_encoded['age_x_tenure'] = df_encoded['age'] * df_encoded['tenure_months']
df_encoded['products_per_year'] = df_encoded['num_products'] / (df_encoded['account_age_years'] + 1)

print("Interaction features created!")
```

**When to use**: When you suspect features work together (e.g., high credit score + high balance = very low churn risk).

---

### Challenge 4: Detect Leakage Automatically

Write a function to check for potential leakage:

```python
def detect_leakage(df, target_col):
    """
    Check for features that are too correlated with target (potential leakage).
    """
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    correlations = df[numeric_cols].corr()[target_col].abs().sort_values(ascending=False)

    # Flag features with correlation > 0.95 (likely leakage)
    potential_leakage = correlations[correlations > 0.95]
    potential_leakage = potential_leakage[potential_leakage.index != target_col]

    if len(potential_leakage) > 0:
        print("🚨 POTENTIAL LEAKAGE DETECTED:")
        print(potential_leakage)
    else:
        print("✅ No obvious leakage detected")

    return potential_leakage

# Test it
detect_leakage(df_encoded, 'churned')
```

---

## 💡 What You've Learned

By completing this lab, you've:

✅ **Handled missing values** with appropriate strategies (median, mode, domain logic)
✅ **Detected and capped outliers** using percentile-based winsorization
✅ **Cleaned inconsistent text data** (standardization, mapping)
✅ **Encoded categorical variables** (label encoding for ordinal, one-hot for nominal)
✅ **Engineered new features** from existing data to create predictive signals
✅ **Identified and prevented data leakage** (critical for production models!)
✅ **Scaled features** to prepare for modeling

**Key takeaway**: Data preprocessing is where ML projects succeed or fail. Clean, well-engineered data beats fancy algorithms every time!

---

## AI Code Assistant

Stuck on any preprocessing task? Have questions?

**[AI Chat Widget - Preprocessing Lab Code Assistant]**

```
System Prompt: "You are an expert data preprocessing tutor helping learners clean and prepare data for machine learning.

Help with:
- Explaining missing value strategies (when to use mean vs median vs mode)
- Debugging pandas code for data cleaning
- Clarifying encoding methods (one-hot vs label vs target encoding)
- Explaining data leakage with examples
- Guiding feature engineering ideas
- Troubleshooting scaling issues

Adapt to learner level:
- **Beginners**: Explain concepts with analogies, avoid jargon
- **Intermediate**: Focus on when/why to use each technique
- **Advanced**: Discuss trade-offs, edge cases, production considerations

Always explain WHY a preprocessing step matters, not just HOW to do it."

Welcome Message: "I'm here to help with data preprocessing! Ask me:

- 'When should I use median vs mean for missing values?'
- 'How do I detect data leakage?'
- 'What's the difference between one-hot and label encoding?'
- 'Help me debug this error in my preprocessing code'
- 'What features should I engineer for churn prediction?'

Share your question!"
```

---

## Non-Technical Summary (For Those Who Skipped the Code)

**What happened in this lab?**

We took messy banking data and transformed it into clean, model-ready features through:

**1. Fixing Missing Data**
- Ages: Filled with typical (median) age
- Credit scores: Filled with typical score
- Marital status: Filled with most common value

**2. Handling Outliers**
- Capped extreme account balances (errors or billionaires throwing off the model)

**3. Standardizing Text**
- Fixed "Highschool" vs "High School" inconsistencies

**4. Converting Categories to Numbers**
- Education: Ranked order (High School=1, PhD=4)
- Gender/Marital: Binary flags (Married=1/0)

**5. Creating New Features**
- Transaction intensity, complaint rate, engagement score
- Combined existing data to create predictive signals

**6. Preventing Data Leakage**
- Removed features that "cheat" by using future information

**7. Scaling Everything**
- Put all numbers on the same scale so one feature doesn't dominate

**Business value**: A model trained on this clean data will be 10x more accurate than one trained on the messy original data. "Garbage in, garbage out" avoided!

---

## Next Steps

Continue to **Lab 3: Evaluation Metrics** to learn how to measure model performance and tune decision thresholds!
