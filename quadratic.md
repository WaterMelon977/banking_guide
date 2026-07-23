# Quadratic Equations - Fast-Scoring Guide

## 1. Objective

Quadratic equations are high-return questions because the same small set of methods repeats:

- Compare roots of two equations.
- Find the roots directly.
- Determine whether roots are real, equal or distinct.
- Use signs and factorization to compare `x` and `y`.

```text
Standard form: ax^2 + bx + c = 0
Discriminant: D = b^2 - 4ac
Roots: x = (-b +/- sqrt(D))/(2a)
```

## 2. Question Selection and Time Targets

### Take immediately

- Both equations factor easily.
- The roots are small integers.
- Signs alone decide the comparison.
- The discriminant is a perfect square.

### Return later

- Large coefficients with no visible factorization.
- Irrational roots when answer options require detailed comparison.
- A question where each equation has two roots and the comparison depends on which roots are selected.

```text
Easy quadratic:       20-35 seconds
Moderate quadratic:   35-50 seconds
No visible method:    skip after about 20 seconds
```

## 3. Factorization Method

For:

```text
x^2 - 11x + 30 = 0
```

Find two numbers whose product is 30 and sum is -11:

```text
(x - 5)(x - 6) = 0
x = 5 or 6
```

### For a coefficient before x squared

For:

```text
2x^2 - 7x + 3 = 0
```

```text
(2x - 1)(x - 3) = 0
x = 1/2 or 3
```

## 4. Discriminant Method

For `ax^2 + bx + c = 0`:

```text
D > 0 -> two distinct real roots
D = 0 -> equal real roots
D < 0 -> no real roots
```

The sum and product of roots are:

```text
Sum = -b/a
Product = c/a
```

These relationships may solve a question without finding both roots.

## 5. Root-Comparison Method

Suppose the question gives equations for `x` and `y` and asks whether `x > y`, `x < y`, `x >= y`, `x <= y` or the relationship cannot be established.

### Step 1: Solve or factor both equations

Write both possible roots.

### Step 2: Compare the relevant roots

If the question's convention selects the larger root, compare larger roots. If it does not specify which root is selected, the relationship may be indeterminate.

### Step 3: Use signs first

- Any positive root is greater than any negative root.
- If both roots are positive, compare approximate values.
- If both roots are negative, the root closer to zero is greater.

## 6. Solved Questions

### Q1 - Source pattern: Model Test 19, Q66

Compare the larger roots:

```text
I.  3x^2 - 16x + 21 = 0
II. 3y^2 - 13y + 14 = 0
```

Factor:

```text
I:  (3x - 7)(x - 3) = 0
    x = 7/3, 3

II: (3y - 7)(y - 2) = 0
    y = 7/3, 2
```

Larger roots: `x = 3`, `y = 7/3`.

**Answer: x > y**

### Q2 - Source pattern: Model Test 19, Q67

```text
I.  4x^2 + 16x + 15 = 0
II. 2y^2 + 13y + 21 = 0
```

Factor:

```text
I:  (2x + 3)(2x + 5) = 0
    x = -3/2, -5/2

II: (2y + 7)(y + 3) = 0
    y = -7/2, -3
```

Larger roots: `x = -3/2`, `y = -3`.

**Answer: x > y**

### Q3 - Source pattern: Model Test 19, Q68

```text
I.  2x^2 + 15x + 28 = 0
II. 4y^2 + 20y + 21 = 0
```

Factor:

```text
I:  (2x + 7)(x + 4) = 0
    x = -7/2, -4

II: (2y + 3)(2y + 7) = 0
    y = -3/2, -7/2
```

If the larger roots are compared, `x = -7/2` and `y = -3/2`.

**Answer: x < y**

### Q4 - Source pattern: Model Test 19, Q69

```text
I.  6x^2 - 13x + 6 = 0
II. 4y^2 - 16y + 15 = 0
```

Factor:

```text
I:  (3x - 2)(2x - 3) = 0
    x = 2/3, 3/2

II: (2y - 3)(2y - 5) = 0
    y = 3/2, 5/2
```

The larger roots are `x = 3/2` and `y = 5/2`.

**Answer: x < y**

### Q5 - Source pattern: Model Test 19, Q70

```text
I.  x^2 + 10x + 21 = 0
II. y^2 + 7y + 10 = 0
```

Factor:

```text
I:  (x + 3)(x + 7) = 0
    x = -3, -7

II: (y + 5)(y + 2) = 0
    y = -5, -2
```

The larger roots are `x = -3` and `y = -2`.

**Answer: x < y**

## 7. Additional Practice

### Q6 - Factorization

```text
x^2 - 9x + 20 = 0
```

```text
(x - 4)(x - 5) = 0
```

**Roots: 4 and 5**

### Q7 - Non-monic equation

```text
3x^2 - 10x + 3 = 0
```

```text
(3x - 1)(x - 3) = 0
```

**Roots: 1/3 and 3**

### Q8 - Equal roots

Find `k` if `x^2 - 6x + k = 0` has equal roots.

```text
D = (-6)^2 - 4(1)(k) = 0
36 - 4k = 0
k = 9
```

**Answer: 9**

### Q9 - Root nature

Determine the nature of roots of `2x^2 + 3x + 5 = 0`.

```text
D = 3^2 - 4(2)(5) = 9 - 40 = -31
```

**Answer: no real roots**

### Q10 - Sum/product shortcut

If the roots of `3x^2 - 12x + 9 = 0` are `p` and `q`, find `p+q` and `pq`.

```text
p+q = -(-12)/3 = 4
pq = 9/3 = 3
```

**Answer: p+q = 4, pq = 3**

## 8. Common Traps

| Trap | Prevention |
|---|---|
| Comparing the smaller root in one equation with the larger root in another | State which root is being compared. |
| Forgetting negative-number order | `-2 > -5`; the number closer to zero is larger. |
| Losing the denominator in a non-monic equation | Use the complete factorization. |
| Treating `D < 0` as equal roots | Equal roots require `D = 0`. |
| Spending too long on an unfactorable equation | Try the discriminant or skip after 20 seconds. |
| Assuming a relationship when both roots are possible | If root selection is unspecified, choose the indeterminate option. |

## 9. Fast Revision Table

```text
Equation form                 First check
x^2 + bx + c                 Factor using sum/product
ax^2 + bx + c               Split middle term or use factor pairs
Equal-root question          Set D = 0
Nature of roots               Calculate D
Root comparison               Factor both and compare signs/values
Large coefficients            Use sum/product or approximate roots
```

## 10. Five-Minute Drill

```text
Minute 1: 2 monic factorization questions
Minute 2: 2 non-monic factorization questions
Minute 3: 2 x-vs-y comparisons
Minute 4: 2 discriminant questions
Minute 5: review sign and root-selection errors
```

Track errors as:

```text
F = factorization error
D = discriminant error
S = sign/comparison error
R = root-selection error
T = time error
```

## 11. Exam-Day Algorithm

```text
Scan both equations
        |
Can both factor in under 20 seconds?
        | yes
Factor and compare roots
        |
        no
Check discriminant or sum/product
        |
Still unclear after 40-50 seconds?
        |
Skip and return later
```

Quadratic equations become scoring questions when factorization is automatic. The key habit is to compare signs first, calculate only the roots required and leave an opaque equation before it consumes the section.


## 12. Fifteen Real Model-Test Questions with Fast Solutions

The following are exact quadratic-comparison questions from the supplied model tests. For consistency, the comparison uses the larger root of each equation, as used in the standard bank-exam `x` versus `y` format. Always follow the root-selection convention stated in the original question.

### Model Test 1: Q42-Q46

#### Q11 - Model Test 1, Q42

```text
I. x^2 + 13x + 40 = 0
II. y^2 + 7y + 12 = 0
```

```text
I:  (x+5)(x+8)=0 -> x = -5, -8
II: (y+3)(y+4)=0 -> y = -3, -4
```

Larger roots: `x=-5`, `y=-3`.

**Answer: x < y**

**Fastest approach:** Factor using product 40 and sum -13; no discriminant is needed.

#### Q12 - Model Test 1, Q43

```text
I. x^2 = 49
II. y^2 - 15y + 56 = 0
```

```text
I:  x = -7, 7
II: (y-7)(y-8)=0 -> y = 7, 8
```

The possible x-values never exceed the possible y-values.

**Answer: x <= y**

**Fastest approach:** Remember that `x^2=49` gives both `+7` and `-7`; do not keep only +7.

#### Q13 - Model Test 1, Q44

```text
I. 3x^2 - 13x + 12 = 0
II. 2y^2 - 9y + 10 = 0
```

```text
I:  (3x-4)(x-3)=0 -> x = 4/3, 3
II: (2y-5)(y-2)=0 -> y = 5/2, 2
```

Larger roots: `3 > 5/2`.

**Answer: x > y**

**Fastest approach:** Use the product of first and last coefficients to split the middle term.

#### Q14 - Model Test 1, Q45

```text
I. 3x^2 + 10x + 8 = 0
II. 3y^2 + 10y + 7 = 0
```

```text
I:  (3x+4)(x+2)=0 -> x = -4/3, -2
II: (3y+7)(y+1)=0 -> y = -7/3, -1
```

Larger roots: `-4/3 < -1`.

**Answer: x < y**

**Fastest approach:** For negative roots, the value closer to zero is larger.

#### Q15 - Model Test 1, Q46

```text
I. 2x^2 - 17x + 36 = 0
II. 2y^2 - 15y + 28 = 0
```

```text
I:  (2x-9)(x-4)=0 -> x = 9/2, 4
II: (2y-7)(y-4)=0 -> y = 7/2, 4
```

Larger roots: `9/2 > 4`.

**Answer: x > y**

**Fastest approach:** Spot the factor pairs `(9,4)` and `(7,4)` quickly; compare only the larger roots.

### Model Test 2: Q41-Q45

#### Q16 - Model Test 2, Q41

```text
I. x^2 - 17x + 72 = 0
II. y^2 - 9y + 20 = 0
```

```text
I:  (x-8)(x-9)=0 -> x = 8, 9
II: (y-4)(y-5)=0 -> y = 4, 5
```

**Answer: x > y**

**Fastest approach:** For positive roots, compare the larger factor immediately.

#### Q17 - Model Test 2, Q42

```text
I. 9x^2 - 15x + 4 = 0
II. y^2 - 5y + 6 = 0
```

```text
I:  (3x-1)(3x-4)=0 -> x = 1/3, 4/3
II: (y-2)(y-3)=0 -> y = 2, 3
```

**Answer: x < y**

**Fastest approach:** Do not compare coefficients; compare the actual roots.

#### Q18 - Model Test 2, Q43

```text
I. x^2 - x - 12 = 0
II. y^2 + 7y + 12 = 0
```

```text
I:  (x-4)(x+3)=0 -> x = 4, -3
II: (y+3)(y+4)=0 -> y = -3, -4
```

Larger roots: `4 > -3`.

**Answer: x > y**

**Fastest approach:** One positive root is automatically greater than both negative y-roots.

#### Q19 - Model Test 2, Q44

```text
I. 2x^2 + 17x + 21 = 0
II. 2y^2 + 5y + 3 = 0
```

```text
I:  (2x+3)(x+7)=0 -> x = -3/2, -7
II: (2y+3)(y+1)=0 -> y = -3/2, -1
```

Larger roots: `-3/2 < -1`.

**Answer: x < y**

**Fastest approach:** Both equations share one root; compare the other roots only after identifying the larger root in each.

#### Q20 - Model Test 2, Q45

```text
I. 3x^2 + 10x + 8 = 0
II. 3y^2 + 7y + 4 = 0
```

```text
I:  (3x+4)(x+2)=0 -> x = -4/3, -2
II: (3y+4)(y+1)=0 -> y = -4/3, -1
```

Larger roots: `-4/3 < -1`.

**Answer: x < y**

**Fastest approach:** Since one root is common, compare the remaining roots and remember negative-number order.

### Model Test 19: Q66-Q70

#### Q21 - Model Test 19, Q66

```text
I. 3x^2 - 16x + 21 = 0
II. 3y^2 - 13y + 14 = 0
```

```text
I:  (3x-7)(x-3)=0 -> x = 7/3, 3
II: (3y-7)(y-2)=0 -> y = 7/3, 2
```

**Answer: x > y**

**Fastest approach:** The roots share `7/3`; compare the other roots.

#### Q22 - Model Test 19, Q67

```text
I. 4x^2 + 16x + 15 = 0
II. 2y^2 + 13y + 21 = 0
```

```text
I:  (2x+3)(2x+5)=0 -> x = -3/2, -5/2
II: (2y+7)(y+3)=0 -> y = -7/2, -3
```

Larger roots: `-3/2 > -3`.

**Answer: x > y**

**Fastest approach:** When all roots are negative, compare the root with the smaller absolute value.

#### Q23 - Model Test 19, Q68

```text
I. 2x^2 + 15x + 28 = 0
II. 4y^2 + 20y + 21 = 0
```

```text
I:  (2x+7)(x+4)=0 -> x = -7/2, -4
II: (2y+3)(2y+7)=0 -> y = -3/2, -7/2
```

Larger roots: `-7/2 < -3/2`.

**Answer: x < y**

**Fastest approach:** Factor both and compare the larger negative root, not the more negative root.

#### Q24 - Model Test 19, Q69

```text
I. 6x^2 - 13x + 6 = 0
II. 4y^2 - 16y + 15 = 0
```

```text
I:  (3x-2)(2x-3)=0 -> x = 2/3, 3/2
II: (2y-3)(2y-5)=0 -> y = 3/2, 5/2
```

**Answer: x < y**

**Fastest approach:** Both equations share 3/2; compare the remaining larger root, 3/2 versus 5/2.

#### Q25 - Model Test 19, Q70

```text
I. x^2 + 10x + 21 = 0
II. y^2 + 7y + 10 = 0
```

```text
I:  (x+3)(x+7)=0 -> x = -3, -7
II: (y+5)(y+2)=0 -> y = -5, -2
```

Larger roots: `-3 < -2`.

**Answer: x < y**

**Fastest approach:** Factor immediately; for negatives, -2 is greater than -3.

## 13. Fastest Quadratic Decision Rules

```text
Can factor in 20 seconds? -> Factor and compare.
Cannot factor?             -> Check discriminant or approximate roots.
Both roots negative?       -> Compare the root closer to zero.
One positive, one negative?-> Positive root is larger.
Same root appears twice?   -> Compare the remaining roots.
x^2 = a^2?                -> Remember both +a and -a.
```

## 14. Five-Minute Quadratic Drill

```text
Minute 1: 2 monic equations
Minute 2: 2 non-monic equations
Minute 3: 2 x-vs-y comparisons
Minute 4: 2 negative-root comparisons
Minute 5: review factorization and sign errors
```

For every wrong answer, label the error:

```text
F = factorization
S = sign/order of negative numbers
R = wrong root selected
D = discriminant
T = time spent
```

