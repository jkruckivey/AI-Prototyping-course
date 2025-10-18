# Lab 1: Customer Segmentation with K-means Clustering

## Learning Objectives

By the end of this lab, you'll be able to:
- Load and explore a real customer dataset
- Apply K-means clustering to discover customer segments
- Visualize and interpret segment characteristics
- Translate technical results to business insights
- Understand when unsupervised learning is appropriate

**Time**: 30-45 minutes
**Difficulty**: Beginner (no prior coding required)

---

## Why This Lab Matters

Remember the supermarket segmentation case from Week 1? In this lab, you'll actually **do** customer segmentation using real data. You'll:

- Discover hidden patterns in customer behavior (without labeled data!)
- See how data science finds segments that aren't obvious from demographics
- Practice translating technical outputs (cluster assignments) to business actions

**For non-coders**: Don't worry! We provide all the code. Your job is to run it, understand what's happening, and interpret the business implications.

**For technical learners**: You'll write code to segment customers, visualize results, and optionally extend the analysis with advanced techniques.

---

## The Business Context

You're working with an e-commerce company that wants to personalize their marketing. They have customer data (purchase history, engagement, demographics) but don't know how to group customers meaningfully.

**Your task**: Use K-means clustering to discover natural customer segments, then recommend tailored strategies for each group.

---

## Dataset Overview

**Customer Data (1,000 customers)**:
- `customer_id`: Unique identifier
- `age`: Customer age (18-75)
- `annual_income`: Income in thousands ($15k-$150k)
- `spending_score`: Engagement/spending score (1-100, calculated by company)
- `num_purchases`: Total purchases in last 12 months
- `avg_purchase_value`: Average order value
- `days_since_last_purchase`: Recency

**Note**: This is synthetic data for learning, but modeled on real e-commerce patterns.

---

## Lab Setup

**[Interactive Python Environment - Pre-loaded]**

The following libraries are already imported:
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
```

**Dataset is pre-loaded as:**
```python
df = pd.read_csv('ecommerce_customers.csv')
```

---

## Part 1: Explore the Data (Beginner Level)

### Task 1.1: Load and Inspect

**Your task**: Run this code to see the first few rows and basic statistics.

```python
# Display first 10 rows
print("First 10 customers:")
print(df.head(10))

print("\n" + "="*50 + "\n")

# Display summary statistics
print("Dataset Summary:")
print(df.describe())

print("\n" + "="*50 + "\n")

# Check for missing values
print("Missing values:")
print(df.isnull().sum())
```

**[Run Code]**

**What to notice**:
- How many customers do we have?
- What's the range of ages, incomes, and spending scores?
- Are there any missing values? (Spoiler: no, this data is clean!)

---

### Task 1.2: Visualize Relationships

**Your task**: Run this code to see how different customer features relate.

```python
# Create scatter plots to explore relationships
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Age vs Spending Score
axes[0, 0].scatter(df['age'], df['spending_score'], alpha=0.6, c='steelblue')
axes[0, 0].set_xlabel('Age')
axes[0, 0].set_ylabel('Spending Score')
axes[0, 0].set_title('Age vs Spending Score')
axes[0, 0].grid(True, alpha=0.3)

# Income vs Spending Score
axes[0, 1].scatter(df['annual_income'], df['spending_score'], alpha=0.6, c='coral')
axes[0, 1].set_xlabel('Annual Income (k$)')
axes[0, 1].set_ylabel('Spending Score')
axes[0, 1].set_title('Income vs Spending Score')
axes[0, 1].grid(True, alpha=0.3)

# Number of Purchases vs Average Purchase Value
axes[1, 0].scatter(df['num_purchases'], df['avg_purchase_value'], alpha=0.6, c='mediumseagreen')
axes[1, 0].set_xlabel('Number of Purchases')
axes[1, 0].set_ylabel('Average Purchase Value ($)')
axes[1, 0].set_title('Purchase Frequency vs Order Size')
axes[1, 0].grid(True, alpha=0.3)

# Days Since Last Purchase vs Spending Score
axes[1, 1].scatter(df['days_since_last_purchase'], df['spending_score'], alpha=0.6, c='mediumpurple')
axes[1, 1].set_xlabel('Days Since Last Purchase')
axes[1, 1].set_ylabel('Spending Score')
axes[1, 1].set_title('Recency vs Engagement')
axes[1, 1].grid(True, alpha=0.3)

plt.tight_layout()
plt.show()
```

**[Run Code]**

**Questions to explore**:
- Do you see any visual patterns or groupings?
- Is there a relationship between income and spending score?
- What about age and spending behavior?

---

## Part 2: Prepare Data for Clustering (Intermediate Level)

### Task 2.1: Select Features for Clustering

We'll use these features to find segments:
- `annual_income`
- `spending_score`
- `num_purchases`
- `avg_purchase_value`
- `days_since_last_purchase`

**Why not age?** Age alone doesn't drive behavior as much as income and engagement patterns. (You can experiment with including it later!)

```python
# Select features for clustering
features = ['annual_income', 'spending_score', 'num_purchases',
            'avg_purchase_value', 'days_since_last_purchase']

X = df[features].copy()

print(f"Selected {len(features)} features for clustering:")
print(X.head())
```

**[Run Code]**

---

### Task 2.2: Scale the Data

**Why scale?** K-means uses distance calculations. If one feature (like income) ranges from 15,000-150,000 and another (spending_score) ranges from 1-100, income will dominate. Scaling puts everything on the same scale.

```python
# Initialize the scaler
scaler = StandardScaler()

# Fit and transform the data
X_scaled = scaler.fit_transform(X)

# Convert back to DataFrame for easier viewing
X_scaled_df = pd.DataFrame(X_scaled, columns=features)

print("Original data (first 5 rows):")
print(X.head())

print("\nScaled data (first 5 rows):")
print(X_scaled_df.head())

print("\nNotice: All features now have mean ≈ 0 and standard deviation ≈ 1")
```

**[Run Code]**

---

## Part 3: Apply K-means Clustering (Beginner to Intermediate)

### Task 3.1: Find the Optimal Number of Clusters

**The problem**: K-means needs you to specify *k* (number of clusters). But how many segments should we create?

**The solution**: Use the "Elbow Method" - try different values of k and see where adding more clusters stops helping much.

```python
# Try k values from 2 to 10
inertias = []
K_range = range(2, 11)

for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(X_scaled)
    inertias.append(kmeans.inertia_)

# Plot the elbow curve
plt.figure(figsize=(10, 6))
plt.plot(K_range, inertias, 'bo-', linewidth=2, markersize=8)
plt.xlabel('Number of Clusters (k)', fontsize=12)
plt.ylabel('Inertia (Within-Cluster Sum of Squares)', fontsize=12)
plt.title('Elbow Method: Finding Optimal k', fontsize=14, fontweight='bold')
plt.grid(True, alpha=0.3)
plt.xticks(K_range)

# Highlight potential elbow points
plt.axvline(x=4, color='red', linestyle='--', alpha=0.5, label='Possible elbow (k=4)')
plt.axvline(x=5, color='orange', linestyle='--', alpha=0.5, label='Possible elbow (k=5)')
plt.legend()
plt.show()

print("Inertia values for each k:")
for k, inertia in zip(K_range, inertias):
    print(f"k={k}: {inertia:.2f}")
```

**[Run Code]**

**What to look for**: The "elbow" is where the curve starts to flatten. That's where adding more clusters gives diminishing returns.

**Question**: Based on the plot, how many clusters would you choose? (There's no single "right" answer—4 or 5 are both reasonable!)

---

### Task 3.2: Apply K-means with Chosen k

Let's use **k=4** (you can experiment with 5 later!).

```python
# Apply K-means with k=4
k_optimal = 4
kmeans = KMeans(n_clusters=k_optimal, random_state=42, n_init=10)
kmeans.fit(X_scaled)

# Add cluster assignments to original dataframe
df['cluster'] = kmeans.labels_

print(f"✅ K-means completed! Assigned {len(df)} customers to {k_optimal} clusters.\n")

# Show cluster sizes
print("Cluster sizes:")
print(df['cluster'].value_counts().sort_index())

print("\n" + "="*50 + "\n")

# Show first few customers with their cluster assignments
print("Sample customers with cluster assignments:")
print(df[['customer_id', 'age', 'annual_income', 'spending_score', 'cluster']].head(10))
```

**[Run Code]**

---

## Part 4: Interpret and Visualize Clusters (Intermediate Level)

### Task 4.1: Cluster Profiles

**Your task**: Understand what makes each cluster unique.

```python
# Calculate mean values for each cluster
cluster_profiles = df.groupby('cluster')[features + ['age']].mean()

print("Cluster Profiles (Average values):\n")
print(cluster_profiles.round(2))

print("\n" + "="*50 + "\n")

# Highlight key differences
print("Key Characteristics:\n")
for cluster in range(k_optimal):
    cluster_data = cluster_profiles.loc[cluster]
    print(f"📊 Cluster {cluster}:")
    print(f"   - Income: ${cluster_data['annual_income']:.0f}k")
    print(f"   - Spending Score: {cluster_data['spending_score']:.0f}")
    print(f"   - Avg Purchase Value: ${cluster_data['avg_purchase_value']:.0f}")
    print(f"   - Purchases/year: {cluster_data['num_purchases']:.0f}")
    print(f"   - Days since last purchase: {cluster_data['days_since_last_purchase']:.0f}")
    print()
```

**[Run Code]**

**Your turn**: Based on these profiles, can you name each cluster? Examples:
- "High-value loyalists"
- "Bargain hunters"
- "At-risk churners"
- "Window shoppers"

---

### Task 4.2: Visualize Clusters in 2D

Since we have 5 features, we can't plot them all at once. Let's use **PCA** (Principal Component Analysis) to reduce to 2 dimensions for visualization.

```python
# Reduce to 2 dimensions with PCA for visualization
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

# Create scatter plot
plt.figure(figsize=(12, 8))
colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A']

for cluster in range(k_optimal):
    cluster_points = X_pca[df['cluster'] == cluster]
    plt.scatter(cluster_points[:, 0], cluster_points[:, 1],
                c=colors[cluster], label=f'Cluster {cluster}',
                alpha=0.6, s=100, edgecolors='black', linewidth=0.5)

# Plot cluster centers (transformed to PCA space)
centers_pca = pca.transform(kmeans.cluster_centers_)
plt.scatter(centers_pca[:, 0], centers_pca[:, 1],
            c='black', marker='X', s=300, linewidths=3,
            label='Centroids', edgecolors='yellow')

plt.xlabel(f'First Principal Component ({pca.explained_variance_ratio_[0]*100:.1f}% variance)', fontsize=12)
plt.ylabel(f'Second Principal Component ({pca.explained_variance_ratio_[1]*100:.1f}% variance)', fontsize=12)
plt.title('Customer Segments Visualization (K-means Clustering)', fontsize=14, fontweight='bold')
plt.legend(fontsize=11)
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()

print(f"Note: These 2 dimensions capture {pca.explained_variance_ratio_.sum()*100:.1f}% of the variance in the data.")
```

**[Run Code]**

**What to notice**:
- Are the clusters well-separated?
- Do you see any overlap between clusters?
- The cluster centers (X markers) show the "average" customer in each group

---

## Part 5: Business Recommendations (Application Level)

### Task 5.1: Name Your Segments

Based on the cluster profiles from Task 4.1, assign business-friendly names:

**[Fill in your segment names]**

- **Cluster 0**: _____________________
- **Cluster 1**: _____________________
- **Cluster 2**: _____________________
- **Cluster 3**: _____________________

---

### Task 5.2: Strategy Recommendations

For each segment, recommend a marketing/retention strategy.

**Example template**:
```python
# Create strategy recommendations
strategies = {
    0: {
        'name': 'Your Name Here',
        'strategy': 'Your recommended strategy',
        'tactics': ['Tactic 1', 'Tactic 2', 'Tactic 3']
    },
    # ... fill in for clusters 1, 2, 3
}

# Display recommendations
for cluster, info in strategies.items():
    print(f"📈 {info['name']} (Cluster {cluster})")
    print(f"   Strategy: {info['strategy']}")
    print(f"   Tactics:")
    for tactic in info['tactics']:
        print(f"      • {tactic}")
    print()
```

**[Run Code after filling in your strategies]**

---

## 🎯 Check Your Understanding

Answer these questions based on your analysis:

1. **How many distinct customer segments did you find?**
   - [ ] 2
   - [ ] 3
   - [ ] 4
   - [ ] 5

2. **Which cluster has the highest spending score?**
   - Cluster ___

3. **Which cluster might be at risk of churning?** (Hint: look at days_since_last_purchase)
   - Cluster ___

4. **Why did we scale the data before clustering?**
   - [ ] To make the algorithm run faster
   - [ ] To ensure all features contribute equally to distance calculations
   - [ ] To remove outliers
   - [ ] To create more clusters

5. **Is this supervised or unsupervised learning?**
   - [ ] Supervised (we had labels)
   - [ ] Unsupervised (we discovered patterns without labels)

---

## 🚀 Advanced Challenges (Optional)

Ready to go deeper? Try these extensions:

### Challenge 1: Experiment with Different k

Modify the code to try k=5 or k=3. How do the segments change? Which k value creates the most actionable business segments?

### Challenge 2: Include Age in Clustering

Add `'age'` to the features list and re-run the clustering. Do the segments change significantly? Why or why not?

### Challenge 3: Silhouette Analysis

The elbow method is subjective. Try **Silhouette Score** for a more objective measure:

```python
from sklearn.metrics import silhouette_score

silhouette_scores = []

for k in range(2, 11):
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    labels = kmeans.fit_predict(X_scaled)
    score = silhouette_score(X_scaled, labels)
    silhouette_scores.append(score)
    print(f"k={k}: Silhouette Score = {score:.3f}")

# Plot silhouette scores
plt.figure(figsize=(10, 6))
plt.plot(range(2, 11), silhouette_scores, 'go-', linewidth=2, markersize=8)
plt.xlabel('Number of Clusters (k)')
plt.ylabel('Silhouette Score')
plt.title('Silhouette Analysis: Higher is Better')
plt.grid(True, alpha=0.3)
plt.show()
```

**Higher silhouette score = better-defined clusters**

---

### Challenge 4: Predict Cluster for New Customers

A new customer signs up with these characteristics:
- Income: $75k
- Spending score: 65
- Purchases: 12
- Avg purchase value: $150
- Days since last purchase: 20

Which cluster do they belong to?

```python
# New customer data
new_customer = pd.DataFrame({
    'annual_income': [75],
    'spending_score': [65],
    'num_purchases': [12],
    'avg_purchase_value': [150],
    'days_since_last_purchase': [20]
})

# Scale using the same scaler
new_customer_scaled = scaler.transform(new_customer)

# Predict cluster
predicted_cluster = kmeans.predict(new_customer_scaled)[0]

print(f"New customer assigned to: Cluster {predicted_cluster}")
print(f"Recommended strategy: {strategies[predicted_cluster]['strategy']}")
```

---

## 💡 What You've Learned

By completing this lab, you've:

✅ **Applied unsupervised learning** to discover natural customer segments
✅ **Worked with real data** (loading, exploring, visualizing)
✅ **Prepared data for ML** (feature selection, scaling)
✅ **Used the elbow method** to choose optimal cluster count
✅ **Interpreted cluster profiles** and translated to business insights
✅ **Made data-driven recommendations** for each segment

**Key takeaway**: Unsupervised learning finds patterns in data *without labels*—perfect for discovery tasks like segmentation!

---

## AI Code Assistant

Stuck on any part of the lab? Have questions about the code or concepts?

**[AI Chat Widget - Clustering Lab Code Assistant]**

```
System Prompt: "You are a patient Python tutor helping learners complete a customer segmentation lab using K-means clustering.

Help with:
- Explaining what each code block does
- Debugging errors in code execution
- Answering conceptual questions (why scale data? what is PCA? how does K-means work?)
- Guiding interpretation of cluster profiles
- Suggesting business names for segments
- Helping with advanced challenges

Adapt to learner level:
- **Beginners**: Explain line-by-line, use analogies, avoid jargon
- **Intermediate**: Focus on concepts, guide to solutions
- **Advanced**: Discuss trade-offs, suggest optimizations

When learners ask 'why does this code...', explain the purpose before the mechanics. Encourage experimentation."

Welcome Message: "I'm here to help with the clustering lab! Ask me anything:

- 'Why do we scale the data?'
- 'What does this error mean?'
- 'How do I interpret these cluster profiles?'
- 'Help me name my segments based on the data'
- 'What's the difference between K-means and hierarchical clustering?'

Share your question or paste your error message!"
```

---

## Non-Technical Summary (For Those Who Skipped the Code)

**What happened in this lab?**

We took 1,000 e-commerce customers and let an algorithm (K-means) discover natural groupings based on:
- Income
- Engagement (spending score)
- Purchase frequency
- Order size
- Recency

**The algorithm found 4 distinct segments** without us telling it what to look for. Each segment has different characteristics:

**Example segments** (your actual results may vary):
1. **High-Value Loyalists**: High income, high spending, frequent purchases
2. **Bargain Hunters**: Lower income, moderate spending, infrequent large orders
3. **At-Risk Customers**: Haven't purchased recently, declining engagement
4. **Window Shoppers**: Browse often but low spending

**Business value**: Instead of generic marketing to all customers, you can now:
- Send VIP offers to high-value loyalists
- Create discount campaigns for bargain hunters
- Launch win-back campaigns for at-risk customers
- Design engagement tactics for window shoppers

**This is the power of unsupervised learning**—finding actionable patterns in data without needing labeled examples!

---

## Next Steps

Continue to **Lab 2: Data Preprocessing** to learn how to clean messy data and engineer powerful features for ML models.
