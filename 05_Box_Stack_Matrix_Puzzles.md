# Box / Stack / Matrix Puzzles - Complete Solving Guide

## 1. Model Overview

- **What it is:** In a box puzzle, boxes are arranged vertically or in a row and contain names, colors or items. In a matrix puzzle, several categories such as people, cities, professions and days must be matched one-to-one.
- **Why it appears in exams:** These models test ordering, attribute matching, elimination and the ability to combine direct and indirect clues. They are often compact but produce many questions from one arrangement.
- **Key challenges:** Solvers may confuse top-to-bottom order, treat a row or column as an arrangement rather than a category, or mark an uncertain match as confirmed too early.
- **Exam frequency:** Usually 1 set (5-10 questions); matrix sets are often mixed with dates, cities, departments or professions.

## 2. Core Components & Terminology

- **Primary variable:** Box position, row, column, person or day.
- **Secondary variables:** Color, item, city, profession, department, age or month.
- **Spatial elements:** Top, bottom, middle, above, below, left, right, adjacent and between.
- **Relationship types:** Direct match, order, fixed gap, same row, different row, conditional, negative and one-to-one exclusion.

### Mini-glossary

| Term | Meaning |
|---|---|
| Top box | Highest position in a vertical stack |
| Bottom box | Lowest position in a vertical stack |
| Middle box | Central position; for an odd number of boxes, there is one middle |
| Immediately above/below | Exactly one position away vertically |
| Between X and Y | X and Y are on opposite sides of the stated position |
| One box between | Exactly one position separates the two boxes |
| Same row | Two entries share a row in a matrix or grid |
| One-to-one | Each person, city or profession is used exactly once |
| Cannot be same | Cross out the pair, but do not eliminate either item completely |
| Matrix | A table used to record possible and impossible matches |

**Important:** A matrix cell marked `X` is impossible. A blank cell is still undecided. Use a check mark only when the match is certain.

## 3. Prerequisite Checks (Before Solving)

- [ ] Count the boxes, rows, columns and attribute categories.
- [ ] Confirm whether the stack is vertical, horizontal or both.
- [ ] Check whether the number of people equals the number of cities, professions or days.
- [ ] Identify all unique categories and repeated categories, if any.
- [ ] Determine whether the middle position is unique.
- [ ] Note whether order is top-to-bottom, left-to-right or chronological.
- [ ] Check for vacant boxes or unused attributes.
- [ ] Separate direct matches from comparative and conditional clues.

## 4. Step-by-Step Solving Methodology

### Phase 1: Diagram Preparation

#### Vertical box stack

```text
Box 1 - Top       [       ]
Box 2             [       ]
Box 3 - Middle    [       ]
Box 4             [       ]
Box 5 - Bottom    [       ]
```

For a horizontal stack:

```text
Left       [1] [2] [3] [4] [5]       Right
```

For a matrix, create a row for the primary entities and columns for attributes:

```text
Person     City       Profession    Day
------     --------   ------------   -----
A          ?          ?              ?
B          ?          ?              ?
C          ?          ?              ?
D          ?          ?              ?
```

For difficult matching sets, create possibility grids:

```text
             Delhi  Pune  Jaipur  Kochi
A              ?      X      ?       ?
B              ?      ?      X       ?
C              X      ?      ?       ?
D              ?      ?      ?       X
```

### Phase 2: Constraint Extraction & Prioritization

Classify clues before solving:

1. **Direct:** "The red box contains the watch." Place the match.
2. **Position:** "The blue box is third from the top." Fix its location.
3. **Immediate:** "A is immediately above B." Use adjacent positions.
4. **Order:** "C is above D." Record `C > D`.
5. **Attribute relation:** "The person from Pune is a doctor." Link two categories.
6. **Negative:** "E did not visit Delhi." Mark the pair as `X`.
7. **Conditional:** "If F is on Monday, G is in Mumbai." Test only in a relevant case.

Start with fixed positions, direct matches and the longest order chain. Apply negative clues after the main structure has been established.

### Phase 3: Iterative Placement

1. Number the boxes or list the primary rows in a fixed order.
2. Place direct positions and extreme positions first.
3. Combine order clues into chains, such as `A > B > C`.
4. Use one-to-one elimination after every confirmed match.
5. For a matrix, mark impossible pairs immediately, then look for a row or column with one remaining possibility.
6. If a clue links two attributes indirectly, use an intermediate table rather than guessing.
7. Create cases only when both possibilities remain logically valid; prune a case at the first contradiction.

Useful notation:

```text
A > B       A is above or before B
A >> B      A is immediately above or before B
A _ B       exactly one position lies between A and B
A = Delhi   confirmed match
A != Delhi  impossible match
```

### Phase 4: Verification & Cross-Check

- Verify every box has the correct occupant and attribute.
- Check the direction of every positional clue.
- Confirm that each category is used exactly once when the puzzle is one-to-one.
- Re-read indirect clues through the completed matches.
- For a matrix, inspect every row and every column for duplicate assignments.
- For a "could be true" question, check at least one valid case; for a "must be true" question, compare every surviving case.

## 5. Common Pitfalls & How to Avoid Them

| Pitfall | Prevention |
|---|---|
| Reversing top and bottom | Label the stack before placing any box. |
| Treating above as immediately above | Use adjacency only when the clue says immediately or directly. |
| Filling a matrix from a weak assumption | Keep uncertain cells blank and use `X` for only proven exclusions. |
| Forgetting one-to-one elimination | Once a match is confirmed, cross it out in every other row. |
| Confusing category names with people | Use separate headings for each parameter. |
| Missing a fixed gap | Count positions explicitly rather than estimating visually. |
| Stopping after one valid case | For must-be-true questions, test all remaining cases. |

## 6. Shortcut Techniques & Pattern Recognition

- **Middle-position rule:** In an odd stack, a clue placing an item above two and below two fixes the middle box immediately.
- **Block sliding:** Treat `A/B/C` as a single order block when clues make the sequence consecutive.
- **Extreme elimination:** If A is above B and A cannot be top, eliminate the highest possible placements for B as well.
- **Single-cell rule:** In a possibility grid, one remaining blank in a row or column is a confirmed match.
- **Pair closure:** If a person is ruled out of every city except one, assign that city without needing another clue.
- **Chain transfer:** If A is from Delhi, Delhi is on Tuesday and the Tuesday person is a doctor, A is the doctor.
- **Case comparison:** Facts common to all valid arrangements are strong candidates for definite-answer questions.
- **Question-led solving:** If the question concerns one box only, stop once that box's position is forced.

## 7. ASCII Diagram Examples

### Example 1: Box Stack Puzzle

**Puzzle Statement:** Five boxes contain a book, camera, pen, watch and vase, one item per box. The boxes are stacked from top to bottom.

1. The watch is in the top box.
2. The camera is immediately above the pen.
3. The book is below the pen but above the vase.
4. The vase is in the bottom box.

**Solution Walkthrough**

#### Setup

```text
1 Top       [       ]
2           [       ]
3 Middle    [       ]
4           [       ]
5 Bottom    [       ]
```

#### Step 1: Place the fixed item

```text
1 Top       [Watch  ]
2           [       ]
3 Middle    [       ]
4           [       ]
5 Bottom    [       ]
```

#### Step 2: Build the order

`Camera > Pen > Book > Vase`. Four items must appear in that order. Since Watch is already at the top, the chain occupies boxes 2-5. The vase is therefore at the bottom, which agrees with clue 4.

```text
1 Top       [Watch  ]
2           [Camera ]
3 Middle    [Pen    ]
4           [Vase   ]
5 Bottom    [Book   ]
```

This example demonstrates an essential habit: verify the final stack against every clue. The camera is immediately above the pen, and the book is below the pen but above the vase.

```text
1 Top       [Watch  ]
2           [Camera ]
3 Middle    [Pen    ]
4           [Book   ]
5 Bottom    [Vase   ]
```



### Example 2: Tabular / Matrix Arrangement

**Puzzle Statement:** Asha, Bharat, Charu and Dev visited Delhi, Pune, Jaipur and Kochi on Monday, Tuesday, Wednesday and Thursday. Each person visited one city on one day and had a different profession: Doctor, Engineer, Lawyer and Teacher.

1. Asha visited Pune.
2. The person visiting Kochi was an Engineer.
3. Bharat visited on Monday.
4. Charu is a Lawyer and did not visit Delhi.
5. Dev visited Kochi on Thursday.
6. The Doctor visited on Tuesday.

**Solution Walkthrough**

#### Initial matrix

```text
Person     City       Day        Profession
------     --------   --------   ----------
Asha       Pune       ?          ?
Bharat     ?          Monday     ?
Charu      ?          ?          Lawyer
Dev        Kochi      Thursday   ?
```

#### Step 1: Use direct links

Dev is Kochi/Thursday. Asha is Pune. Charu is Lawyer and not Delhi, so Charu cannot be the Delhi visitor.

#### Step 2: Use the day and profession clues

The Doctor is on Tuesday. Jaipur is Engineer. The remaining city and day combinations must be assigned without duplication. A valid completed table is:

```text
Person     City       Day        Profession
------     --------   --------   ----------
Asha       Pune       Tuesday    Doctor
Bharat     Delhi      Monday     Teacher
Charu      Jaipur     Wednesday  Lawyer
Dev        Kochi      Thursday   Engineer
```

#### Step 3: Verify

- Asha is in Pune.
- The Kochi visitor, Dev, is the Engineer according to clue 2.

All clues now agree, so the table is valid. This demonstrates why the matrix should be used as a proof table: every direct, indirect and negative clue must agree before the arrangement is accepted.

The lesson is to use a matrix as a proof table: every direct, indirect and negative clue must agree. Do not accept a table merely because every row is filled.

## 8. Decision Tree / Quick Reference

```text
Is the puzzle mainly about positions?
â”œâ”€ Yes, vertical or horizontal â†’ Draw numbered boxes.
â””â”€ No, several attributes      â†’ Draw a person/attribute matrix.

Is there a fixed position or direct match?
â”œâ”€ Yes â†’ Place it first and eliminate duplicates.
â””â”€ No  â†’ Start with the longest order chain or most restricted row.

Does an immediate clue appear?
â”œâ”€ Yes â†’ Treat the entries as a consecutive block.
â””â”€ No  â†’ Use relative order and gap elimination.

Does a row or column have one option left?
â”œâ”€ Yes â†’ Confirm the match and propagate elimination.
â””â”€ No  â†’ Continue with indirect clues or controlled cases.
```

## 9. Self-Check Checklist for This Model

- [ ] Stack direction and box numbering are clear.
- [ ] Every box or primary row is assigned exactly once.
- [ ] Every attribute is used exactly once when required.
- [ ] Immediate and fixed-gap clues have been counted correctly.
- [ ] All `X` entries are based on actual clues, not guesses.
- [ ] Every confirmed match has been eliminated elsewhere.
- [ ] Indirect links have been followed through the correct intermediate category.
- [ ] All surviving cases agree before answering a must-be-true question.

## 10. Practice Strategy & Time Management

- **Ideal time:** 4-6 minutes for a box stack; 6-9 minutes for a medium matrix; 8-10 minutes for a dense multi-attribute table.
- **First read:** Count positions and categories, then mark direct clues and fixed positions.
- **Best starting clue:** A top/bottom/middle placement, a direct person-attribute match or a row with very few possibilities.
- **Skip rule:** If no row, column or position becomes restricted after 2-3 minutes, move to another set and return later.
- **Difficulty scaling:** Easy sets use one stack and direct clues; medium sets add attributes; hard sets use four or more categories, conditions and multiple cases.
- **Drill method:** Practise box ordering separately from matrix matching, then combine them. Use a timer and spend the final minute checking every clue rather than rushing to the questions.



----------------------------------------------------

Nine boxes - A, B, C, D, E, F, G, H and I are kept one above
another in a single stack, but not necessarily in the same
order. Only one box is kept between box E and box G. Box I
is kept three boxes above box G. Box E is kept four boxes
below box H. As many boxes are kept between box H and
box I as between box D and box E. Box E is kept above box
D. Box F is kept immediately below box C. Only two boxes
are kept between box A and box F. Box B is kept above box
A

Let **Position 1 = Top** and **Position 9 = Bottom**.

## Step 1

**Only one box is between E and G.**

```text
E _ G
or
G _ E
```

---

## Step 2

**I is three boxes above G.**

```text
I
_
_
G
```

(distance = 3)

---

## Step 3

**E is four boxes below H.**

```text
H
_
_
_
E
```

(distance = 4)

---

## Step 4

**Boxes between H & I = Boxes between D & E.**
Also, **E is above D.**

These clues together determine the relative positions of **H, I, E, D**.

---

## Step 5

**F is immediately below C.**

```text
C
F
```

---

## Step 6

**Two boxes are between A and F.**

```text
A _ _ F
or
F _ _ A
```

---

## Step 7

**B is above A.**

This fixes the remaining positions uniquely.

---

# Final Stack (Top → Bottom)

| Position |  Box  |
| :------: | :---: |
|     1    | **B** |
|     2    | **H** |
|     3    | **C** |
|     4    | **F** |
|     5    | **I** |
|     6    | **E** |
|     7    | **A** |
|     8    | **G** |
|     9    | **D** |

---

## Verification

* ✓ One box between **E** and **G**
* ✓ **I** is three boxes above **G**
* ✓ **E** is four boxes below **H**
* ✓ Boxes between **H & I** = Boxes between **D & E** (2 each)
* ✓ **E** is above **D**
* ✓ **F** immediately below **C**
* ✓ Two boxes between **A** and **F**
* ✓ **B** is above **A**

### Final Answer

```text
TOP

B
H
C
F
I
E
A
G
D

BOTTOM
```

------------------------------------------------