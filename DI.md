# Data Interpretation (DI) - Maximum Attempts in Minimum Time

## 1. Objective

DI is mainly a chart-reading, question-selection and calculation-speed test. Since you currently solve about half the questions and lose time, the priority is:

```text
Read quickly -> choose cheap questions -> calculate cleanly -> leave expensive questions
```

Do not calculate every value in a chart before reading the questions.

## 2. Set Selection in a 20-Minute Quant Section

### Scan a set for 20 seconds

Check:

- Number of rows, categories and years.
- Units: people, thousands, lakhs, percentage or degrees.
- Whether values are exact, approximate or missing.
- Whether at least two questions are direct.
- Whether calculations require awkward percentages or repeated long arithmetic.

```text
Green: clear chart and 2+ direct questions -> take first
Yellow: readable chart with moderate calculation -> take second
Red: dense caselet, many missing values or repeated long calculation -> leave
```

### Take questions in this order

1. Direct total or difference.
2. Simple ratio.
3. Percentage with a familiar fraction.
4. Direct average.
5. Multi-step comparison or missing-value question.

If a single question crosses 90 seconds, leave it. If a set produces fewer than two answers in 3 minutes, switch or return later.

## 3. Universal DI Workflow

1. Read the title, units and scale.
2. Read all questions once.
3. Mark each as `D` direct, `R` ratio, `P` percentage, `A` average or `M` multi-step.
4. Solve `D -> R -> easy P -> A -> M`.
5. Write totals and intermediate values once for reuse.
6. Stop calculating values that no question uses.

Use a mini-table instead of repeatedly looking at a chart:

```text
Category     A     B     Difference
X            40    60    20
Y            50    75    25
```

## 4. Calculation Toolkit

```text
1/2  = 50%       1/3  = 33.33%       1/4  = 25%
1/5  = 20%       1/6  = 16.67%       1/8  = 12.5%
1/10 = 10%       1/12 = 8.33%        1/16 = 6.25%
1/20 = 5%        1/25 = 4%           1/40 = 2.5%
```

```text
Percentage change = (New - Old) / Old x 100
Average = Total / Number of values
Ratio: simplify before multiplying
```

For "A is what percent of B," use `A/B x 100`; B is the denominator.

### Speed rules

- Round only when answer options are well separated.
- Cancel factors before multiplying.
- Use `25% = one-fourth`, `12.5% = one-eighth` and similar anchors.
- Write units beside values.
- Estimate the answer range before exact calculation.

## 5. Table DI

### Method

1. Read row and column labels.
2. Identify columns reused by several questions.
3. Solve direct difference and ratio questions first.
4. Calculate totals only when needed.

### Worked example

```text
Store       January   February
A              120        150
B              100        140
C              160        120
D               80        100
```

**Ratio of February sales of A and C:**

```text
150 : 120 = 5 : 4
```

**Percentage increase in B:**

```text
(140 - 100) / 100 x 100 = 40%
```

**Average January sales:**

```text
(120 + 100 + 160 + 80) / 4 = 460/4 = 115
```

Take the ratio first, because it is the cheapest question.

## 6. Bar Graph DI

Read the axis scale before reading bar heights. In a double bar graph, compare the required pair directly. In a stacked graph, separate the components before using the total height.

### Worked example: single bar data

```text
Year       2021  2022  2023  2024
Output       40    50    45    65
```

**Percentage increase from 2021 to 2024:**

```text
(65 - 40) / 40 x 100 = 25/40 x 100 = 62.5%
```

### Double-bar shortcut

```text
Year       A     B
2021      40    30
2022      50    45
2023      60    50
```

Total difference is:

```text
(40-30) + (50-45) + (60-50) = 25
```

## 7. Line Graph DI

- Read the scale on both axes.
- For trend questions, compare adjacent points instead of calculating totals.
- For total questions, add values in an aligned column.
- Track increases and decreases as you read the line.

### Worked example

```text
Month      Jan   Feb   Mar   Apr   May
Visitors    20    30    25    35    40
```

**Total increase from January to May:**

```text
40 - 20 = 20
```

**Only decrease:** February to March, because 25 is less than 30.

Do not add all five values for a simple trend question.

## 8. Pie Chart DI

```text
360 degrees = 100%
90 degrees  = 25%
72 degrees  = 20%
60 degrees  = 16.67%
45 degrees  = 12.5%
36 degrees  = 10%
30 degrees  = 8.33%
```

### Worked example

**Total expenditure = 72,000. Travel sector = 45 degrees.**

```text
Travel share = 45/360 = 1/8
Travel amount = 72,000/8 = 9,000
```

Convert the angle to a familiar fraction before multiplying by the total.

## 9. Caselet DI

Caselets are paragraphs. Do not keep their numbers in memory.

### Method

1. Read the questions first.
2. Extract only relevant figures.
3. Convert the paragraph to a table or equations.
4. Translate "remaining," "more than" and "in the ratio" explicitly.

### Worked example

**Caselet:** A company has 600 employees. Sales is 25% of the total. HR has 60 more employees than Sales. The rest work in Operations.

```text
Sales = 25% of 600 = 150
HR = 150 + 60 = 210
Operations = 600 - 150 - 210 = 240
```

**Ratio of Operations to HR:**

```text
240 : 210 = 8 : 7
```

## 10. Mixed DI

Identify the common variable connecting the charts. Keep separate units and bases.

### Worked example

```text
City       Delhi   Pune   Jaipur
Total       400    300     500
```

Approved applications are 25% in Delhi, 40% in Pune and 20% in Jaipur.

```text
Delhi  = 25% of 400 = 100
Pune   = 40% of 300 = 120
Jaipur = 20% of 500 = 100
Total approved = 320
```

Do not add 25% + 40% + 20%. Each percentage has a different city total.

## 11. Missing DI

Find the equation with the fewest unknowns. Use row or column totals before attempting complicated relationships.

### Worked example

```text
Month       A     B     C     Total
January    40    50     ?      150
February   60    70    50      180
```

```text
C in January = 150 - 40 - 50 = 60
Ratio of January C to February C = 60 : 50 = 6 : 5
```

Check the missing value against any other total before using it.

## 12. Radar Graph / Multi-Axis DI

Treat a radar graph as a table. Do not compare visual area, and check the scale on every axis.

### Worked example

```text
Skill       A     B     C     D
Person P   60    40    80    50
Person Q   50    60    70    40
```

P's lead over Q is:

```text
A: 10     B: -20     C: 10     D: 10
```

P's greatest positive lead is 10, occurring in A, C and D. If a question expects one answer, check whether the original graph includes another condition or a different scale.

## 13. DI Question Selection by Type

### Take immediately

- Direct total or difference.
- Ratio reducible by cancellation.
- Percentage equal to a familiar fraction.
- Average of a small number of values.
- Approximation with widely separated options.

### Return later

- Multi-step percentage comparison.
- Average involving many categories.
- Missing DI with several unknown values.
- Caselet requiring repeated reading.
- Calculation with awkward decimals and close options.

## 14. Time Targets

```text
One direct DI question:       45-60 seconds
Two-question mini set:        about 2 minutes
Three-question mini set:     about 3 minutes
Full easy DI set:             4-5 minutes
```

These are targets, not reasons to rush. Accuracy must remain stable before reducing time.

## 15. Common Errors

| Error | Prevention |
|---|---|
| Wrong percentage denominator | Circle the reference value. |
| Wrong bar or line point | Read category and value together. |
| Ignoring units or scale | Write the unit next to the chart title. |
| Adding percentages from different bases | Apply each percentage to its own total first. |
| Averaging averages | Add group totals and divide by total count. |
| Solving every chart value | Calculate only values used by questions. |
| Spending too long on one set | Use the 3-minute set rule. |
| Comparing radar areas visually | Copy the spoke values into a table. |

## 16. Speed Improvement Plan

### Stage 1: Chart reading

Read title, units, labels and relevant values in under 20 seconds.

### Stage 2: Separate calculation drills

Practise percentages, ratios, averages, differences and approximation without a chart. This isolates calculation speed from reading speed.

### Stage 3: Set selection

Look at several sets and choose the easiest one without solving. Then check whether your choice actually produced the highest marks per minute.

### Stage 4: Timed solving

```text
One direct question: 45-60 seconds
Two-question set:   2 minutes
Three-question set: 3 minutes
Easy full set:      4-5 minutes
```

Reduce time only after accuracy is reliable.

## 17. Section-Level Attempt Plan

```text
0-5 minutes:   short Quant questions and direct DI questions
5-14 minutes:  easy arithmetic and one readable DI set
14-19 minutes: selected yellow DI or arithmetic questions
Final minute:  check units, signs, denominators and marked answers
```

If a DI set does not progress, abandon it without regret. A direct arithmetic question may be worth the same marks for a fraction of the time.

## 18. Final DI Checklist

- [ ] Did I read the unit and scale?
- [ ] Did I identify the easiest two questions first?
- [ ] Did I mark the percentage denominator?
- [ ] Did I simplify ratios before multiplying?
- [ ] Did I reuse totals and intermediate values?
- [ ] Did I avoid calculating unused chart entries?
- [ ] Did I leave a slow question after the time limit?
- [ ] Did I verify whether the answer is approximate or exact?

## 19. One-Page DI Algorithm

```text
Scan chart and units
        |
Read all questions once
        |
Mark direct, ratio, percentage, average and multi-step questions
        |
Solve direct questions first
        |
Reuse totals and simplify before multiplying
        |
Leave any question crossing 90 seconds
        |
Leave any set producing fewer than two answers in 3 minutes
        |
Return only to yellow questions with a clear next step
```

The fastest DI solver is not the person who calculates everything. It is the person who identifies the cheapest marks, uses the shortest calculation and leaves expensive questions without hesitation.

