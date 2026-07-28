# skill.md
# SBI PO Quant Question Classifier

## Objective

Classify every SBI PO / SBI Clerk Quantitative Aptitude question into **exactly one** topic.

This skill is **only a classifier**.

It must:
- Identify the correct topic.
- Return exactly one category.
- Follow deterministic classification rules.

It must **not**:
- Solve the question.
- Explain concepts.
- Give hints.
- Suggest shortcuts.
- Estimate difficulty.
- Return confidence scores.
- Output reasoning.

---

# Scope

Applicable for:

- SBI PO Prelims
- SBI Clerk Prelims
- SBI PO Mains Quant
- Previous Year Questions
- SBI-pattern mock questions

---

# Classification Hierarchy

```
Data Interpretation

Arithmetic
├── Percentage
├── Ratio & Proportion
├── Partnership
├── Profit & Loss
├── Discount
├── Marked Price
├── Successive Discount
├── Simple & Compound Interest
├── Average
├── Mixture & Alligation
├── Time & Work
├── Pipes & Cisterns
├── Time, Speed & Distance
├── Train
├── Boat & Stream
├── Relative Speed
├── Ages
├── Mensuration
├── Probability & Permutation
├── Number System
└── Miscellaneous

Approximation / Simplification

Number Series

Quadratic Equations

Data Sufficiency

Quantity Comparison

Miscellaneous
```

---

# Output Format

Return **only** one of the following formats.

For Arithmetic:

```
Arithmetic
└── Time & Work
```

Example:

```
Arithmetic
└── Profit & Loss
```

For non-Arithmetic:

```
Data Interpretation
```

```
Approximation / Simplification
```

```
Number Series
```

```
Quadratic Equations
```

```
Data Sufficiency
```

```
Quantity Comparison
```

```
Miscellaneous
```

Do not return anything else.

---

# Global Classification Rules

## Rule 1

Every question must belong to **exactly one** category.

Never classify a question into multiple topics.

---

## Rule 2

Choose the **most appropriate** category.

Never return multiple subtopics.

---

## Rule 3

Ignore the mathematics used internally.

Always classify according to what the question is fundamentally testing.

---

## Rule 4

If multiple concepts appear, choose the dominant topic using the priority rules.

---

## Rule 5

If the question cannot reasonably fit any supported topic,

Return

```
Miscellaneous
```

---

# Data Interpretation

All Data Interpretation questions belong to one single category.

Always classify the following as

```
Data Interpretation
```

This includes:

- Table DI
- Pie Chart
- Line Graph
- Bar Graph
- Radar Graph
- Mixed Graphs
- Missing Image DI
- Missing Table DI
- Arithmetic DI
- Comparison DI
- Paragraph DI
- Caselet DI
- Data-based sets
- Image-based DI
- Any shared data set followed by multiple questions

If a question depends on a common table, graph, chart, paragraph, image or dataset, it is always:

```
Data Interpretation
```

Do not classify DI questions into arithmetic topics even if calculations involve:

- Percentage
- Ratio
- Average
- Profit & Loss
- Discount
- SI & CI
- Time & Work
- Boats
- Trains
- Ages

The presence of shared data always takes precedence.

---

# Approximation / Simplification

Includes

- Simplification
- Approximation
- Decimal approximation
- Fraction approximation
- Square-root approximation
- Cube-root approximation
- BODMAS simplification

Always return

```
Approximation / Simplification
```

---

# Number Series

Includes

- Missing Number Series
- Wrong Number Series
- Pattern Series

Always return

```
Number Series
```

---

# Quadratic Equations

Includes

- Comparing roots
- Solving quadratic equations
- Root comparison

Always return

```
Quadratic Equations
```

---

# Data Sufficiency

Includes

- Two Statement DS
- Three Statement DS
- Statement Sufficiency

Always return

```
Data Sufficiency
```

---

# Quantity Comparison

Includes

- Quantity I vs Quantity II
- Column Comparison
- Value Comparison

Always return

```
Quantity Comparison
```

---

# Arithmetic Classification Rules

## Percentage

Use when the primary concept is:

- Percentage
- Percentage Increase
- Percentage Decrease
- Percentage Change

Do not use if another more specific topic applies.

---

## Ratio & Proportion

Use only when the main concept is:

- Ratio
- Proportion
- Direct Proportion
- Inverse Proportion
- Sharing

Do not classify here if it is actually:

- Partnership
- Mixture
- Ages
- Boats
- Trains
- Time & Work

---

## Partnership

Always prefer Partnership over Ratio.

Keywords:

- Investment
- Partner
- Profit Sharing
- Capital

---

## Profit & Loss

Use when the question is fundamentally about:

- Cost Price
- Selling Price
- Gain
- Loss

Do not classify here if the question is mainly about Discount, Marked Price or Successive Discount.

---

## Discount

Prefer Discount over Profit & Loss.

Keywords:

- Discount
- Discount Percentage

---

## Marked Price

Prefer Marked Price over Discount.

Keywords:

- Marked Price
- List Price
- MRP

---

## Successive Discount

Highest priority in the pricing hierarchy.

Whenever multiple discounts are applied,

Always classify as

```
Arithmetic
└── Successive Discount
```

---

## Simple & Compound Interest

Includes

- SI
- CI
- Difference between SI and CI

---

## Average

Includes

- Mean
- Average Marks
- Average Age
- Average Score
- Replacement

---

## Mixture & Alligation

Always prefer Mixture over Ratio.

Keywords:

- Mixing
- Dilution
- Concentration
- Alligation

---

## Time & Work

Includes

- Men
- Women
- Workers
- Efficiency
- Machines
- Work Completion

Do not classify Pipes questions here.

---

## Pipes & Cisterns

Always prefer Pipes over Time & Work.

Keywords:

- Tank
- Pipe
- Inlet
- Outlet
- Leakage

---

## Time, Speed & Distance

Generic motion questions.

Do not classify here if the question is actually:

- Train
- Boat
- Relative Speed

---

## Train

Always prefer Train over Time, Speed & Distance.

Keywords:

- Platform
- Pole
- Crossing
- Train Length

---

## Boat & Stream

Always prefer Boat over Time, Speed & Distance.

Keywords:

- Upstream
- Downstream
- River
- Stream

---

## Relative Speed

Use only when relative motion is the main concept and the question is not specifically about trains or boats.

---

## Ages

Always classify age-related questions here, even if equations or algebra are used.

---

## Mensuration

Includes

- Area
- Perimeter
- Volume
- Surface Area
- Cube
- Cuboid
- Cylinder
- Cone
- Sphere
- Rectangle
- Square
- Circle
- Triangle

---

## Probability & Permutation

Includes

- Probability
- Permutation
- Combination
- Arrangement
- Selection

---

## Number System

Includes

- Divisibility
- Factors
- Multiples
- Prime Numbers
- Composite Numbers
- Remainders
- Cyclicity
- Units Digit
- LCM
- HCF

---

## Arithmetic Miscellaneous

Use only when an Arithmetic question does not belong to any listed Arithmetic topic.

Examples:

- Algebra
- Linear Equations
- Surds & Indices
- Logarithms
- Coordinate Geometry
- Decimal Manipulation
- Fraction Manipulation
- Clock
- Calendar
- Any uncommon arithmetic topic appearing in SBI

Return

```
Arithmetic
└── Miscellaneous
```

---

# Priority Rules

Always choose the most specific topic.

Pricing hierarchy

```
Successive Discount
↓
Marked Price
↓
Discount
↓
Profit & Loss
↓
Percentage
```

Ratio hierarchy

```
Partnership
↓
Ratio & Proportion
```

Mixture hierarchy

```
Mixture & Alligation
↓
Ratio & Proportion
```

Work hierarchy

```
Pipes & Cisterns
↓
Time & Work
```

Motion hierarchy

```
Train
↓
Boat & Stream
↓
Relative Speed
↓
Time, Speed & Distance
```

General hierarchy

- Specific topic always wins over a generic topic.
- Never classify using Percentage if a more specific arithmetic topic exists.
- Never classify using Ratio if a specialised arithmetic topic exists.
- Never duplicate classifications.

---

# Final Validation Checklist

Before returning the result, verify:

- Exactly one topic selected.
- No duplicate categories.
- Arithmetic always includes exactly one subtopic.
- Non-Arithmetic never includes subtopics.
- No explanation.
- No reasoning.
- No confidence score.
- No difficulty estimate.
- Output exactly matches the specified format.
- Priority rules have been applied.
- Data Interpretation always overrides arithmetic classification whenever the question is based on shared data.