# Linear Seating Arrangement â€“ Complete Solving Guide

## 1. Model Overview

- **What it is:** Persons arranged in a straight line (single row or parallel rows facing each other). Each person occupies a fixed position and has attributes like colors, ages, professions, or hobbies.

- **Why it appears in exams:** Tests logical deduction, spatial reasoning, constraint satisfaction, and multi-variable tracking. High-frequency model with consistent exam presence.

- **Key challenges:** 
  - Confusing left/right orientation when two rows face each other
  - Misinterpreting "adjacent" in parallel rows (does it mean same row or opposite rows?)
  - Losing track of attribute combinations as complexity increases
  - Rushing placement without validating all clues

- **Exam frequency:** **1-2 sets (8-10 questions) per prelim paper**. Often carries 8-10 marks. Often seen in Main exams too.

---

## 2. Core Components & Terminology

### Key Terms You Must Know:

| Term | Definition | Example |
|------|-----------|---------|
| **Adjacent** | Next to each other in the same row OR on the same seat in opposite rows (needs clarification from puzzle) | A is adjacent to B: A-B or B-A |
| **Immediate Left** | One position to the left (direction depends on puzzle frame) | If A is at position 3, immediate left is position 2 |
| **Immediate Right** | One position to the right | If A is at position 3, immediate right is position 4 |
| **Between** | Exactly in the middle of two persons | A at pos 2, B at pos 4 â†’ pos 3 is between them |
| **Facing** | Direction orientation (North/South or towards center/away) | Row 1 faces North, Row 2 faces South |
| **Opposite** | Persons sitting directly across in parallel rows | Row 1 pos 3 is opposite to Row 2 pos 3 |
| **Alternate** | Every second position (pattern of gaps) | Positions 1, 3, 5, 7... OR 2, 4, 6... |
| **End** | Extreme positions (1st or Last) | Leftmost or Rightmost person |

### Variables in Linear Seating:

- **Primary:** Person/Name
- **Secondary:** Age, Profession, Hobby, Color, City, Height
- **Positional:** Row number, Position number, Direction faced
- **Relational:** Adjacency, Distance, Gaps

---

## 3. Prerequisite Checks (Before Solving)

Before reading a single clue, extract this metadata:

- [ ] **How many persons total?** (Fixed or variable?)
- [ ] **How many rows?** (1 row, 2 rows, 3+ rows?)
- [ ] **Sitting in which direction?** (All North? Facing each other? Mixed?)
- [ ] **Are there gaps?** (All seats filled or vacant seats exist?)
- [ ] **How many attributes?** (Ages: 1 per person? Professions: same count as persons?)
- [ ] **Is left/right absolute or relative to person?** (Puzzle should clarify; if not, **assume absolute**: person 1 is leftmost)
- [ ] **Are names, numbers, or letters used?** (A, B, C or Aman, Brijesh, Chetan?)

**Example Metadata Check:**
```
Puzzle: 5 persons (A, B, C, D, E) sit in a row, all facing North. 
Each has a different color: Red, Blue, Green, Yellow, Orange.

Metadata:
âœ“ Persons: 5 (fixed)
âœ“ Rows: 1 (single row)
âœ“ Direction: All face North
âœ“ Gaps: No (all seats filled)
âœ“ Attributes: 5 colors for 5 persons
âœ“ Left/Right: Absolute (1st = leftmost)
```

---

## 4. Step-by-Step Solving Methodology

### Phase 1: Diagram Preparation

**Goal:** Create a visual template before reading clues.

**For Single Row (5 persons example):**
```
Position:   1      2      3      4      5
          +-----+-----+-----+-----+-----+
          |     |     |     |     |     |
          +-----+-----+-----+-----+-----+
Person:   ?     ?     ?     ?     ?
Attr1:    ?     ?     ?     ?     ?
Attr2:    ?     ?     ?     ?     ?
```

**For Double Row (Facing Each Other):**
```
Row 1:  Position   1      2      3      4      5
                 +-----+-----+-----+-----+-----+
                 |     |     |     |     |     |  (Facing South)
                 +-----+-----+-----+-----+-----+

Row 2:  Position   1      2      3      4      5
                 +-----+-----+-----+-----+-----+
                 |     |     |     |     |     |  (Facing North)
                 +-----+-----+-----+-----+-----+
```

**For Double Row (Same Direction):**
```
Row 1:  +-----+-----+-----+-----+-----+
        |     |     |     |     |     |  (Facing North)
        +-----+-----+-----+-----+-----+

Row 2:  +-----+-----+-----+-----+-----+
        |     |     |     |     |     |  (Facing North)
        +-----+-----+-----+-----+-----+
```

**Action:** 
- Draw the grid with position numbers clearly marked
- Label rows if multiple
- Leave columns for each attribute (Person, Profession, Age, Color, etc.)

---

### Phase 2: Constraint Extraction & Prioritization

**Goal:** Categorize clues by strength and interdependence.

**Clue Types:**

| Type | Example | Priority |
|------|---------|----------|
| **Direct** | "A sits at position 3" | â­â­â­ Start here |
| **Comparative** | "A sits to the left of B" | â­â­â­ High impact |
| **Adjacent** | "X and Y are adjacent" | â­â­ Medium |
| **Gap-based** | "There are 2 persons between A and C" | â­â­ Medium |
| **Negative** | "X is NOT next to Y" | â­ Eliminates later |
| **Conditional** | "If X is at 2, then Y is at 4" | â­â­ Context-dependent |

**Extraction Process:**

1. **List all clues** with their type.
2. **Identify anchor clues** (direct positioning, "A is at position X").
3. **Chain clues** (clues that reference anchor clues).
4. **Flag ambiguous clues** (unclear phrasing; make a note to revisit).

**Example:**
```
Puzzle Clues:
1. A sits at position 3. [Direct] â­â­â­
2. B sits to the left of C. [Comparative] â­â­â­
3. D is adjacent to A. [Adjacent] â­â­
4. E is at one of the ends. [Direct] â­â­â­
5. There are 2 persons between E and B. [Gap-based] â­â­
6. C is NOT adjacent to A. [Negative] â­

Solving Order: 1 â†’ 4 â†’ 2 â†’ 3 â†’ 5 â†’ 6
```

---

### Phase 3: Iterative Placement

**Goal:** Place persons step-by-step, testing feasibility after each clue.

**Algorithm:**

```
1. Apply the highest-priority clue â†’ place person(s) in diagram
2. Update "possible positions" for remaining persons
3. Read next clue â†’ apply constraints
4. Check for contradictions:
   - Does clue contradict previous placements?
   - Is there still at least one valid position for each person?
5. If contradition found â†’ BACKTRACK (undo last few steps)
6. If no contradiction â†’ move to next clue
7. Repeat until all persons are placed or only one arrangement fits
```

**Example Walkthrough (detailed in Section 7).**

**Key Principle:** 
- **Don't rush.** After each clue, ask: "Is this consistent with previous clues?"
- **Eliminate impossible combinations early.** If person A must be at 2, 3, or 5 but clue X says A is left of B, eliminate invalid combinations now.

---

### Phase 4: Verification & Cross-Check

**Before finalizing:**

1. **Re-read every clue** against your final diagram. âœ“ All clues satisfied?
2. **Check attribute counts.** Do all persons have all attributes? Are attributes unique (if puzzle requires)?
3. **Spatial logic double-check.** If A is adjacent to B, confirm they are exactly 1 position apart in the final diagram.
4. **Negative constraints.** Verify that all "X is NOT next to Y" clues are satisfied.

**Validation Checklist (for this model):**
- [ ] All 5 (or N) persons placed in unique positions?
- [ ] All attributes assigned to exactly one person?
- [ ] No two persons in the same position?
- [ ] Every clue verified against final diagram?
- [ ] Left/right orientation consistent throughout?
- [ ] If two rows: adjacency definition clear (same-row or opposite-row)?

---

## 5. Common Pitfalls & How to Avoid Them

### Pitfall 1: Confusing Left/Right in Opposite-Facing Rows

**Problem:** 
```
Row 1 (Facing South):  A  |  B  |  C
Row 2 (Facing North):  D  |  E  |  F

"B is to the left of E" â€” But LEFT from whose perspective? 
From the puzzle creator's absolute view? Or from B's perspective as they face South?
```

**Solution:**
- **Always clarify at the start:** The puzzle should state "from the reader's perspective" or "from each person's perspective."
- If unclear, **assume absolute perspective** (A is at position 1, which is leftmost globally).
- Note: This is a common source of confusion; re-read the puzzle statement if clues don't make sense.

---

### Pitfall 2: Mishandling "Adjacent" in Parallel Rows

**Problem:** 
```
Does "A and B are adjacent" mean:
(a) Same row, next to each other? OR
(b) Opposite rows, directly across?
```

**Solution:**
- Puzzle should clarify. If it says "A and B sit adjacent," typically means **same row**.
- If it means opposite rows, it usually says "A sits directly opposite to B" or "A and B are across from each other."
- When in doubt, **test both interpretations** against all clues and pick the one that satisfies all.

---

### Pitfall 3: Losing Track of Attribute Combinations

**Problem:** 
```
5 persons, 3 attributes each (Age, Color, Profession).
After reading 10 clues, you're unsure which person has which profession.
```

**Solution:**
- **Maintain a detailed grid.** Don't just place persons; simultaneously update attributes.
- Use a **process of elimination:** If A is not Red and not Blue, and we have Red, Blue, Green, then A is Green.
- **Color-code or mark** your diagram as you deduce attributes (even on paper, use shortcuts like "A:Red, B:?").

---

### Pitfall 4: Rushing Placement Without Validating All Clues First

**Problem:** 
You place A at position 3 based on clue 1. Then clue 5 contradicts it, but you've already built solutions on top of that placement.

**Solution:**
- **Read all clues first.** Don't start solving after clue 2.
- **Extract all clues,** categorize by priority, then START placement.
- **When you hit a contradiction,** backtrack only as far as needed, not restarting from scratch (unless necessary).

---

### Pitfall 5: Misinterpreting "Between" and Distance Clues

**Problem:** 
```
"There are 2 persons between A and C."
Does this mean:
(a) A is at 1, C is at 4 (positions 2 and 3 are "between")? OR
(b) A is at 1, C is at 3 (position 2 is "between")?
```

**Solution:**
- **"2 persons between" = 2 people in the gap.**
  - A at 1, C at 4: positions 2 and 3 are occupied (2 persons between). âœ“
  - A at 1, C at 3: position 2 is occupied (1 person between). âœ—

- **Confirm:** If puzzle says "2 gaps," interpret as "1 person" or count explicitly.

---

## 6. Shortcut Techniques & Pattern Recognition

### Shortcut 1: "Anchor & Expand"

If you find a direct clue (e.g., "A is at position 3"), place it immediately and check what clues reference it.

```
Clue: A at position 3.
Diagram:
Position:  1    2    3    4    5
         +----+----+----+----+----+
         | ?  | ?  | A  | ?  | ?  |
         +----+----+----+----+----+

Check: Which clues reference A?
- "B is to the left of A" â†’ B is at 1 or 2.
- "D is adjacent to A" â†’ D is at 2 or 4.
(Already narrowed 2 of 4 remaining positions!)
```

---

### Shortcut 2: "Ends First"

If a clue mentions an "end" (position 1 or 5 in a 5-person row), lock it in immediately.

```
Clue: "E is at one of the ends, and there are 2 persons between E and B."
â†’ E is at 1 or 5.
â†’ If E at 1, then B at 4 (2 between: 2, 3).
â†’ If E at 5, then B at 2 (2 between: 3, 4).
(Only 2 scenarios to test instead of 5Ã—5=25!)
```

---

### Shortcut 3: "Negative Constraint Elimination"

Collect all "X is NOT next to Y" clues. Use them to **eliminate impossible pairings** once you've narrowed positions.

```
- "A is NOT adjacent to B"
- "A is NOT adjacent to C"

If A is at position 3, then positions 2 and 4 are ruled out for B and C.
B and C must be at positions 1 or 5. (Instant narrowing!)
```

---

### Shortcut 4: "Comparative Chains"

If multiple clues state relative order (A left of B, B left of C), create a **chain** immediately.

```
- "A is to the left of B"
- "B is to the left of C"
- "D is to the left of A"

Chain: D â€” A â€” B â€” C (Left to Right order locked!)

In a 5-person row, possible positions:
- D=1, A=2, B=3, C=4 (E at 5)
- D=1, A=2, B=3, C=5 (E at 4)
- D=1, A=2, B=4, C=5 (E at 3)
- D=1, A=3, B=4, C=5 (E at 2)
- D=2, A=3, B=4, C=5 (E at 1)

(5 scenarios, far fewer than 5! = 120!)
```

---

### Shortcut 5: "Attribute Pairing"

If a clue links two attributes (e.g., "The person at position 2 is a Doctor and likes Tennis"), mark both simultaneously in your grid.

```
Clue: "The person at position 2 is a Doctor and likes Tennis."

Grid Update:
Position:  1    2      3    4    5
Person:    ?    ?      ?    ?    ?
Prof:      ?    Doctor ?    ?    ?
Hobby:     ?    Tennis ?    ?    ?

This reduces search space: Any clue about "Doctor" or "Tennis" now points to position 2!
```

---

## 7. ASCII Diagram Examples (Worked Solutions)

### Example 1: Single Row, 5 Persons, 2 Attributes

**Puzzle Statement:**

Five persons A, B, C, D, and E sit in a row facing North, each having a different profession: Doctor, Engineer, Lawyer, Teacher, and Chef. 

1. A sits at position 3.
2. B sits to the left of C.
3. D is adjacent to A.
4. E sits at one of the ends.
5. There are 2 persons between E and B.
6. C is NOT adjacent to A.

Determine the seating arrangement and answer the following:
- Who sits at position 4?
- Which profession does B have?

---

**Solution Walkthrough:**

#### Setup (Initial Structure):
```
Position:   1      2      3      4      5
          +-----+-----+-----+-----+-----+
          |     |     |     |     |     |  (Facing North)
          +-----+-----+-----+-----+-----+
Person:   ?     ?     ?     ?     ?
```

---

#### Step 1: Apply Clue 1 ("A sits at position 3")

```
Position:   1      2      3      4      5
          +-----+-----+-----+-----+-----+
          |     |     | A   |     |     |
          +-----+-----+-----+-----+-----+
Person:   ?     ?     A     ?     ?

Analysis: A is now fixed at position 3.
Remaining: B, C, D, E at positions 1, 2, 4, 5.
```

---

#### Step 2: Apply Clue 4 ("E sits at one of the ends")

```
Position:   1      2      3      4      5
          +-----+-----+-----+-----+-----+
          | E   |     | A   |     |  E  |  (E at 1 or 5)
          +-----+-----+-----+-----+-----+
Person:   E/?   ?     A     ?     E/?

Analysis: E is at position 1 OR position 5 (two scenarios to test).
Remaining: B, C, D at the other 4 positions.

**Scenario A: E at position 1**
Remaining: B, C, D at positions 2, 4, 5.

**Scenario B: E at position 5**
Remaining: B, C, D at positions 1, 2, 4.
```

---

#### Step 3: Apply Clue 5 ("There are 2 persons between E and B")

**Testing Scenario A (E at 1):**
- E at 1, then 2 persons between E and B means B is at 4.
  ```
  Position:   1      2      3      4      5
            +-----+-----+-----+-----+-----+
            | E   |     | A   | B   |     |
            +-----+-----+-----+-----+-----+
  Person:   E     ?     A     B     ?
  
  Remaining: C, D at positions 2, 5.
  ```

**Testing Scenario B (E at 5):**
- E at 5, then 2 persons between E and B means B is at 2.
  ```
  Position:   1      2      3      4      5
            +-----+-----+-----+-----+-----+
            |     | B   | A   |     | E   |
            +-----+-----+-----+-----+-----+
  Person:   ?     B     A     ?     E
  
  Remaining: C, D at positions 1, 4.
  ```

---

#### Step 4: Apply Clue 3 ("D is adjacent to A") and Clue 6 ("C is NOT adjacent to A")

**Testing Scenario A (E at 1, B at 4, C/D at 2, 5):**
- D adjacent to A (at 3) means D at 2 or 4.
- But B is at 4, so D must be at 2.
- C NOT adjacent to A means C NOT at 2 or 4.
- But positions 2 and 4 are taken, and only 5 remains.
- âœ“ C at 5.

```
Position:   1      2      3      4      5
          +-----+-----+-----+-----+-----+
          | E   | D   | A   | B   | C   |
          +-----+-----+-----+-----+-----+
Person:   E     D     A     B     C

Validation of Scenario A:
âœ“ Clue 1: A at 3 âœ“
âœ“ Clue 2: B left of C (4 < 5) âœ“
âœ“ Clue 3: D adjacent to A (2 and 3) âœ“
âœ“ Clue 4: E at end (1) âœ“
âœ“ Clue 5: 2 persons between E (1) and B (4): positions 2, 3 âœ“
âœ“ Clue 6: C NOT adjacent to A (5 is not 2 or 4) âœ“
```

**Testing Scenario B (E at 5, B at 2, C/D at 1, 4):**
- D adjacent to A (at 3) means D at 2 or 4.
- B is at 2, so D must be at 4.
- C NOT adjacent to A means C NOT at 2 or 4.
- C must be at 1.

```
Position:   1      2      3      4      5
          +-----+-----+-----+-----+-----+
          | C   | B   | A   | D   | E   |
          +-----+-----+-----+-----+-----+
Person:   C     B     A     D     E

Validation of Scenario B:
âœ“ Clue 1: A at 3 âœ“
âœ“ Clue 2: B left of C (2 < 1) âœ— FAILS!
```

**Scenario B fails clue 2.** Only Scenario A is valid.

---

#### Final Diagram:

```
Position:   1      2      3      4      5
          +-----+-----+-----+-----+-----+
          | E   | D   | A   | B   | C   |
          +-----+-----+-----+-----+-----+
Person:   E     D     A     B     C
```

---

**Final Answer:**

| Position | 1 | 2 | 3 | 4 | 5 |
|----------|---|---|---|---|---|
| Person   | E | D | A | B | C |

**Q1: Who sits at position 4?**
â†’ **B**

**Q2: Which profession does B have?**
â†’ This puzzle only establishes seating, not professions. (In a real puzzle, additional clues would assign professions. For now, B's profession is **not determined** from the given clues, but likely asked in the full puzzle set.)

---

### Example 2: Double Row, 4 Persons Each, 1 Attribute

**Puzzle Statement:**

Eight persons P, Q, R, S, T, U, V, W sit in two parallel rows of 4 persons each. Row 1 sits above Row 2, facing each other. Each person has a different city: Delhi, Mumbai, Bangalore, Chennai, Pune, Hyderabad, Kolkata, Jaipur.

1. P sits at position 2 in Row 1.
2. Q sits at position 4 in Row 2.
3. R is adjacent to P in the same row.
4. S sits directly opposite to P.
5. T is adjacent to S in the same row.
6. U is at position 1 in Row 2.
7. V is adjacent to Q in the same row.
8. W is opposite to V.

Determine the seating arrangement.

---

**Solution Walkthrough:**

#### Setup (Initial Structure):

```
Row 1:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 |     |     |     |     |  (Facing South)
                 +-----+-----+-----+-----+
Person:        ?     ?     ?     ?

Row 2:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 |     |     |     |     |  (Facing North)
                 +-----+-----+-----+-----+
Person:        ?     ?     ?     ?

Opposite Mapping:
Row 1 pos 1 â†” Row 2 pos 1
Row 1 pos 2 â†” Row 2 pos 2
Row 1 pos 3 â†” Row 2 pos 3
Row 1 pos 4 â†” Row 2 pos 4
```

---

#### Step 1: Apply Clue 1 ("P sits at position 2 in Row 1")

```
Row 1:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 |     | P   |     |     |
                 +-----+-----+-----+-----+

Row 2:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 |     |     |     |     |
                 +-----+-----+-----+-----+
```

---

#### Step 2: Apply Clue 4 ("S sits directly opposite to P")

Since P is at Row 1 pos 2, S is at Row 2 pos 2.

```
Row 1:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 |     | P   |     |     |
                 +-----+-----+-----+-----+

Row 2:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 |     | S   |     |     |
                 +-----+-----+-----+-----+
```

---

#### Step 3: Apply Clue 6 ("U is at position 1 in Row 2") and Clue 2 ("Q sits at position 4 in Row 2")

```
Row 1:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 |     | P   |     |     |
                 +-----+-----+-----+-----+

Row 2:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 | U   | S   |     | Q   |
                 +-----+-----+-----+-----+

Remaining in Row 2: Position 3 (one slot).
Remaining persons: T, V, W, R.
```

---

#### Step 4: Apply Clue 3 ("R is adjacent to P in the same row")

R is in Row 1 adjacent to P (at pos 2).
R is at Row 1 pos 1 or pos 3.

```
Row 1:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 | R?  | P   | R?  |     |
                 +-----+-----+-----+-----+

Remaining in Row 1: Positions 3, 4 (plus 1 if R not there).
Remaining persons in Row 1: R, and two of {T, V, W}.
```

---

#### Step 5: Apply Clue 5 ("T is adjacent to S in the same row")

T is in Row 2 adjacent to S (at pos 2).
T is at Row 2 pos 1 or pos 3.
But pos 1 is U, so **T is at Row 2 pos 3**.

```
Row 1:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 | R?  | P   | R?  |     |
                 +-----+-----+-----+-----+

Row 2:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 | U   | S   | T   | Q   |
                 +-----+-----+-----+-----+

Row 2 is now complete: U, S, T, Q.
Remaining in Row 1: R, V, W at positions 1, 3, 4.
```

---

#### Step 6: Apply Clue 7 ("V is adjacent to Q in the same row") and Clue 8 ("W is opposite to V")

V is in Row 2 adjacent to Q (at pos 4).
V is at Row 2 pos 3.
But Row 2 is complete: U, S, T, Q. **Contradiction!**

**Re-check:** Clue 7 says V is adjacent to Q. Q is at Row 2 pos 4. V must be at Row 2 pos 3. But T is already at Row 2 pos 3.

**Hmm, this suggests an error in my puzzle design. Let me revise it for correctness...**

*Actually, let's simplify: Perhaps V is in Row 1, adjacent to the person opposite Q.*

**Revised Interpretation:**
- Q is at Row 2 pos 4.
- The person opposite Q is at Row 1 pos 4.
- V is adjacent to Q means V is in Row 2 adjacent to Q, OR V is in Row 1 and "adjacent to Q's opposite" (less clear).

**For clarity, let's assume the simpler puzzle: V is at Row 1 pos 4 (opposite to Q at Row 2 pos 4), and we have a different adjacency clue.**

Let me simplify and revise this example:

---

#### **Revised Example 2 (Simplified Double Row):**

**Puzzle Statement (Revised):**

Eight persons P, Q, R, S, T, U, V, W sit in two parallel rows of 4 persons each. Row 1 sits above Row 2, facing each other.

1. P sits at position 2 in Row 1.
2. Q sits at position 4 in Row 2.
3. R is adjacent to P in the same row (Row 1).
4. S sits directly opposite to P.
5. T is adjacent to S in Row 2.
6. U is at position 1 in Row 2.
7. V is at position 1 in Row 1.
8. W sits opposite to R.

---

#### Revised Solution Walkthrough:

**Step 1-3: Place P, S, U, Q**
(Same as before)

```
Row 1:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 |     | P   |     |     |
                 +-----+-----+-----+-----+

Row 2:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 | U   | S   |     | Q   |
                 +-----+-----+-----+-----+
```

**Step 4: Apply Clue 7 ("V is at position 1 in Row 1")**

```
Row 1:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 | V   | P   |     |     |
                 +-----+-----+-----+-----+

Row 2:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 | U   | S   |     | Q   |
                 +-----+-----+-----+-----+
```

**Step 5: Apply Clue 3 ("R is adjacent to P in Row 1")**

R at Row 1 pos 3 (pos 1 is V, pos 2 is P).

```
Row 1:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 | V   | P   | R   |     |
                 +-----+-----+-----+-----+

Row 2:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 | U   | S   |     | Q   |
                 +-----+-----+-----+-----+

Remaining in Row 1: W at position 4.
```

**Step 6: Apply Clue 8 ("W is opposite to R")**

R is at Row 1 pos 3 â†’ W is at Row 2 pos 3.

```
Row 1:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 | V   | P   | R   |     |
                 +-----+-----+-----+-----+

Row 2:  Position   1      2      3      4
                 +-----+-----+-----+-----+
                 | U   | S   | W   | Q   |
                 +-----+-----+-----+-----+

Remaining in Row 1: Position 4 (only slot). 
But all persons are placed: V, P, R, ?, U, S, W, Q.
We're missing T!
```

**Revised again with T:**

Let me re-do this more carefully.

**Simpler Revised Puzzle:**

Six persons A, B, C, D, E, F sit in two parallel rows of 3 each.

1. A sits at position 2 in Row 1.
2. B is adjacent to A in Row 1.
3. C is directly opposite A.
4. D is adjacent to C in Row 2.
5. E is at position 1 in Row 1.
6. F is opposite to B.

---

**Solution:**

**Step 1: Place A, E, C, B**

```
Row 1:  Position   1      2      3
                 +-----+-----+-----+
                 | E   | A   |     |
                 +-----+-----+-----+

Row 2:  Position   1      2      3
                 +-----+-----+-----+
                 |     | C   |     |
                 +-----+-----+-----+

Remaining in Row 1: Position 3 (B or F).
Clue 2: B is adjacent to A (pos 2) â†’ B at pos 1 or 3.
Pos 1 is E, so B at pos 3.
```

```
Row 1:  Position   1      2      3
                 +-----+-----+-----+
                 | E   | A   | B   |
                 +-----+-----+-----+

Row 2:  Position   1      2      3
                 +-----+-----+-----+
                 |     | C   |     |
                 +-----+-----+-----+

Clue 6: F is opposite to B (pos 3 in Row 1) â†’ F at pos 3 in Row 2.
```

```
Row 1:  Position   1      2      3
                 +-----+-----+-----+
                 | E   | A   | B   |
                 +-----+-----+-----+

Row 2:  Position   1      2      3
                 +-----+-----+-----+
                 |     | C   | F   |
                 +-----+-----+-----+

Remaining in Row 2: Position 1 (D).
Clue 4: D is adjacent to C (pos 2) â†’ D at pos 1 or 3.
Pos 3 is F, so D at pos 1. âœ“
```

**Final Arrangement:**

```
Row 1:  Position   1      2      3
                 +-----+-----+-----+
                 | E   | A   | B   |
                 +-----+-----+-----+

Row 2:  Position   1      2      3
                 +-----+-----+-----+
                 | D   | C   | F   |
                 +-----+-----+-----+

Validation:
âœ“ Clue 1: A at pos 2 in Row 1
âœ“ Clue 2: B adjacent to A (pos 3, next to pos 2)
âœ“ Clue 3: C opposite A (Row 2 pos 2 â†” Row 1 pos 2)
âœ“ Clue 4: D adjacent to C (pos 1, next to pos 2)
âœ“ Clue 5: E at pos 1 in Row 1
âœ“ Clue 6: F opposite to B (Row 2 pos 3 â†” Row 1 pos 3)
```

---

**Final Answer:**

| Row | Pos 1 | Pos 2 | Pos 3 |
|-----|-------|-------|-------|
| 1   | E     | A     | B     |
| 2   | D     | C     | F     |

---

## 8. Decision Tree / Quick Reference

```
START: You have a Linear Seating Puzzle

    â†“
    Are there direct clues? (e.g., "A at position 3")
    â”œâ”€ YES â†’ Start with direct placements (Shortcut 1: Anchor & Expand)
    â””â”€ NO â†’ Check for "ends" or anchors (Shortcut 2: Ends First)

    â†“
    Are there comparative clues? (e.g., "A left of B")
    â”œâ”€ YES â†’ Chain them into order (Shortcut 4: Comparative Chains)
    â””â”€ NO â†’ Proceed with gap-based clues

    â†“
    Are there gap/distance clues? (e.g., "2 between A and C")
    â”œâ”€ YES â†’ Apply and test scenarios
    â””â”€ NO â†’ Use negative constraints next (Shortcut 3)

    â†“
    Two rows or one?
    â”œâ”€ ONE ROW â†’ Place persons left to right
    â””â”€ TWO ROWS â†’ Clarify "adjacent" and "opposite"; use dual grids

    â†“
    Fill grid iteratively, checking for contradictions after each clue.

    â†“
    Final validation:
    â”œâ”€ All persons placed? âœ“
    â”œâ”€ All clues satisfied? âœ“
    â””â”€ No attribute conflicts? âœ“

    â†“
    SOLVED!
```

---

## 9. Self-Check Checklist (Linear Seating)

Before submitting answers:

- [ ] All persons/entities placed in unique positions?
- [ ] All attributes assigned (if puzzle includes them)?
- [ ] Every clue verified against final diagram?
- [ ] No contradictions found (re-read clues)?
- [ ] Left/right orientation consistent and clearly defined?
- [ ] If two rows: opposite positions correctly mapped (1â†”1, 2â†”2, etc.)?
- [ ] "Adjacent" interpreted correctly (same row / opposite row)?
- [ ] "Between" clues interpreted correctly (count persons, not gaps)?
- [ ] Negative constraints all satisfied (X NOT next to Y, etc.)?
- [ ] Final diagram is clean and easy to reference for Q&A?

---

## 10. Practice Strategy & Time Management

### Ideal Time Allocation (Per Puzzle Set):

- **Reading & Understanding:** 1-2 minutes
- **Diagram Setup & Constraint Extraction:** 1-2 minutes
- **Iterative Placement & Testing:** 3-5 minutes
- **Verification & Cross-Check:** 1 minute
- **Total per 5-person puzzle:** 6-10 minutes
- **Total per full set (4-5 puzzles):** 25-50 minutes

### Time Management Tips for Prelims:

1. **Don't read all clues at once** for complex puzzles. Extract metadata, set up diagram, then read clues in priority order.
2. **If stuck after 8 minutes, move on.** Come back if time permits.
3. **Partial points:** If you can lock 2-3 persons confidently, answer those Qs first.
4. **Difficulty Scaling:** Easy puzzles (single row, 4 persons, direct clues) take ~5 min. Hard puzzles (double rows, uncertain numbers, ambiguous clues) take ~12-15 min.

### Practice Progression:

- **Week 1:** Single row, 4-5 persons, 2-3 attributes. Goal: ~5 min per puzzle.
- **Week 2:** Double rows, 3-4 persons each, mixed directions. Goal: ~7-8 min per puzzle.
- **Week 3:** Uncertain numbers, gaps, complex constraints. Goal: ~10 min per puzzle.
- **Week 4:** Full mock sets (25-30 puzzles). Target: Complete 4 puzzles in 25 min (Prelims pace).

---

## Summary

Linear Seating Arrangement puzzles are about **methodical placement, constraint satisfaction, and careful validation**. Master the four phases (Diagram Prep â†’ Constraint Extraction â†’ Iterative Placement â†’ Verification), use shortcuts to narrow search space, and maintain a clean diagram throughout. With practice, you'll spot patterns and solve confidently in 6-10 minutes per puzzle.

**Key Takeaway:** Start with anchors (direct or end positions), chain comparative clues, and eliminate impossible combinations early using negative constraints.

Good luck!

## 11. How to Think Before Starting a Linear Seating Puzzle

Do not place people immediately after reading the first clue. Use this exam sequence:

1. **Classify the layout:** one row, two rows, mixed directions or unknown length.
2. **Number positions:** use 1 at the left and increase to the right. For unknown length, leave blank cells but derive the length from extreme/end clues.
3. **Find the strongest anchor:** extreme position, exact gap, midpoint, immediate pair or fixed distance.
4. **Build equations:**
   - `A is third left of B` -> `A = B - 3`
   - `two people between A and B` -> distance 3
   - `A exactly between B and C` -> `A = (B+C)/2`
5. **Create cases only when needed:** usually an extreme-end clue creates two cases.
6. **Propagate every placement:** after fixing one person, apply all clues that mention that person.
7. **Reject contradictions immediately:** do not continue an impossible case.
8. **Complete the grid, then verify every clue.**

### Fast decision rule

```text
Direct position or extreme? -> place it first
Exact distance?             -> form a block or equation
Attribute clue?             -> solve position first, attribute second
Facing direction?           -> fix positions before interpreting left/right
No progress in 60-90 sec?   -> skip the set and return later
```

## 12. Source Puzzle 1 - Attribute-Linked Single Row

**Source:** `Model Test 19.md`, Q79-Q82

**Question data:** Six people A-F sit in a row facing north. Countries are Australia, Belgium, Canada, Denmark, Egypt and France.

- B is third right of Denmark.
- People right of D = people left of A.
- One person is between F and Egypt.
- D is immediately right of Australia.
- E and D are adjacent; E is right of B.
- France is immediately left of Canada.
- At least one person is between Canada and C.
- E and A are not Canada.

### Step 1: Build the position grid

```text
Position:  1    2    3    4    5    6
Person:   [ ]  [ ]  [ ]  [ ]  [ ]  [ ]
Country:  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]
```

### Step 2: Use the country block

France is immediately left of Canada, so treat them as `[France][Canada]`. D is immediately right of Australia, so use `[Australia][D]`.

B is third right of Denmark. E is right of B and adjacent to D. The position equations from the clues give the unique placement:

```text
Position:  1       2       3       4       5       6
Person:    C       A       F       B       D       E
Country:   Denmark France  Canada  Australia Egypt   Belgium
```

### Step 3: Verify the main inferences

```text
B at 4 = third right of Denmark at 1
D at 5 is immediately right of Australia at 4
France at 2 is immediately left of Canada at 3
E at 6 is right of B at 4 and adjacent to D at 5
F at 3 is two positions from Egypt at 5
```

**Final arrangement:** `C - A - F - B - D - E`.

**Fast exam comment:** Solve the country blocks before trying all six people. The `France-Canada` and `Australia-D` blocks reduce the search far more than the broad left/right clues.

## 13. Source Puzzle 2 - Variable-Length Single Row

**Source:** `Model Test 5.md`, Q90-Q92

**Question data:** People sit in a straight line facing north.

- Four people sit between M and W.
- T is third right of W.
- The number between S and W equals the number between T and R.
- R is at an extreme end.
- Fewer than four people sit to the right of B.
- One person sits between M and R.
- K is second left of S.
- H is exactly between K and W.
- B is third right of H.

### Step 1: Convert to equations

```text
|M-W| = 5
T = W + 3
|M-R| = 2
K = S - 2
H = (K + W)/2
B = H + 3
```

R is at an end. Test the two end cases; the valid case is R at position 1.

### Step 2: Place the end and distance chain

```text
Position:  1    2    3    4    5    6    7    8    9    10   11   12   13   14   15   16   17   18
Person:    R    ?    M    ?    ?    ?    ?    W    ?    ?    T    H    ?    ?    B    K    ?    S
```

Reasoning:

- R at 1 and one person between M and R -> M at 3.
- Four people between M and W -> W at 8.
- T third right of W -> T at 11.
- T and R have positions 11 and 1, so there are 9 people between them. Therefore S and W must also have 9 between them -> S at 18.
- K second left of S -> K at 16.
- H exactly between K and W -> H at 12.
- B third right of H -> B at 15.

### Step 3: Verify the unknown length

B at 15 has only three positions to its right: 16, 17 and 18. This satisfies â€œless than four people to the right of B.â€ The line therefore has 18 positions.

**Final arrangement:**

```text
1 R | 2 ? | 3 M | 4 ? | 5 ? | 6 ? | 7 ? | 8 W | 9 ? | 10 ? | 11 T | 12 H | 13 ? | 14 ? | 15 B | 16 K | 17 ? | 18 S
```

**Fast exam comment:** Unknown-length puzzles are solved by deriving the skeleton, not by guessing the total number of seats. Start with the extreme person and propagate fixed distances.

## 14. Source Puzzle 3 - Mixed-Direction Single Row

**Source:** `Model Test 3.md`, Q74-Q78

**Question data:** Eight people P, Q, R, S, T, U, V and W sit in a row. Some face north and some south. No adjacent people face the same direction.

- R is at an extreme end.
- T is second right of R.
- U faces south.
- Three people sit between R and V.
- S is not at an extreme and is not adjacent to T or R.
- W and P are adjacent.
- Two people sit between U and P.

### Step 1: Solve positions before directions

R must be at the left end because T is second to the right of R. Hence:

```text
R = 1, T = 3
V = 5       (three people between R and V)
```

U and P have two people between them, so their distance is 3. Testing remaining positions with `W-P` adjacent and S not adjacent to R/T gives:

```text
Position:  1    2    3    4    5    6    7    8
Person:    R    Q    T    U    V    S    P    W
```

### Step 2: Apply directions

U faces south. No adjacent people face the same direction, so directions must alternate:

```text
Position:  1    2    3    4    5    6    7    8
Person:    R    Q    T    U    V    S    P    W
Facing:    N    S    N    S    N    S    N    S
```

### Step 3: Verify

- R is at an extreme: yes.
- T is second right of R: 1 to 3: yes.
- Three people are between R and V: positions 2, 3 and 4: yes.
- S is not adjacent to T or R: S at 6: yes.
- W and P are adjacent: positions 8 and 7: yes.
- Two people are between U and P: positions 5 and 6: yes.
- Directions alternate: yes.

**Final arrangement:** `R - Q - T - U - V - S - P - W`, with alternating `N-S-N-S-N-S-N-S`.

**Fast exam comment:** In mixed-direction rows, solve positions first. Use directions only after the positional skeleton is fixed; otherwise left/right language can create unnecessary cases.

## 15. Source Puzzle 4 - Unknown-Length Row with Several Chains

**Source:** `Model Test 20.md`, Q86-Q88

**Question data:** People sit in a straight line facing north.

- Two people sit between T and V.
- R is second left of V.
- S is fifth right of T.
- F is second left of G.
- S is at an extreme end.
- People left of F = people right of U.
- X is immediately left of T.
- Three people sit between X and A.
- People between R and T = people left of A.
- Three people sit between H and G.

### Step 1: Anchor the extreme

S is fifth right of T, so S cannot be the left end. Set S at the right end. Let the total length be n:

```text
S = n
T = n - 5
X = n - 6
```

### Step 2: Use the T-V-R chain

There are two people between T and V, so `|T-V|=3`. R is second left of V, so `R=V-2`.

The condition involving A gives:

```text
people between R and T = people left of A
|R-T|-1 = A-1
```

Testing the feasible end positions gives `n=11`:

```text
S=11, T=6, X=5, V=9, R=7, A=1
```

### Step 3: Complete the remaining chains

- F is second left of G.
- Three people are between H and G.
- People left of F equal people right of U.

The only completion is:

```text
Position:  1    2    3    4    5    6    7    8    9    10   11
Person:    A    F    ?    G    X    T    R    H    V    U    S
```

### Step 4: Verify

```text
T=6, V=9 -> positions 7 and 8 lie between them
R=7 is second left of V=9
S=11 is fifth right of T=6
F=2 is second left of G=4
X=5 is immediately left of T=6
A=1 and X=5 have positions 2,3,4 between them
H=8 and G=4 have positions 5,6,7 between them
```

**Final arrangement:** `A - F - ? - G - X - T - R - H - V - U - S`.

**Fast exam comment:** Introduce `n` only for the extreme/end relation. Once S is fixed as the right end, every major position becomes an equation and the unknown row length can be derived quickly.

## 17. Source Puzzle 1 Revisited - How to Use the Completed Grid

**Source:** `Model Test 19.md`, Q79-Q82, revisited for question handling.

Use the completed grid from Puzzle 1:

```text
Position:  1       2       3       4       5       6
Person:    C       A       F       B       D       E
Country:   Denmark France  Canada  Australia Egypt   Belgium
```

### Question-style deductions

- **Who belongs to Belgium?** E, because Belgium is position 6.
- **Who belongs to Canada?** F, because Canada is position 3.
- **Position of A from Belgium:** A at 2, Belgium at 6 -> fourth to the left.
- **Which pair does not fit a positional group?** Compare each proposed person-country pair against the grid rather than reconstructing the puzzle.

### Fast exam comment

Once one arrangement is complete, stop solving and answer all questions from the grid. Do not re-read the original clues for every question.

## 18. Final Verification Method for Any Source Puzzle

Use this compact check before marking an answer:

```text
1. Every named person appears once.
2. Every position is occupied once, except explicitly vacant cells.
3. Exact distances are counted as people between, not seat difference.
4. Immediate clues are exactly one position apart.
5. Direction clues are applied from the correct person's viewpoint.
6. Attribute blocks are checked against the final row.
7. Negative clues are verified last.
```

### Best exam habit

Do not ask, â€œWhat can I place next?â€ Ask, â€œWhich clue reduces the most positions?â€ That question naturally leads you to anchors, distance blocks, extreme positions and short chains - the fastest route through a linear seating set.



## 16. Source Puzzle 5 - Variable-Length Row with an Exact Midpoint

**Source:** `Model Test 5.md`, Q90-Q92

**Question data:** People sit in a straight line facing north.

- Four people sit between M and W.
- T sits third to the right of W.
- As many people sit between S and W as between T and R.
- R is at an extreme end.
- Less than four people sit to the right of B.
- One person sits between M and R.
- K sits second to the left of S.
- H sits exactly between K and W.
- B sits third to the right of H.

### Step 1: Anchor the extreme and the first distance

S cannot be the left extreme because T is five positions to its left. Therefore S is at the right end. Let the total number of positions be n.

```text
S = n
T = n - 5
W = T - 3 = n - 8
```

R is an extreme. Testing R at the right end conflicts with S, so:

```text
R = 1
```

One person between M and R gives:

```text
M = 3
```

Four people between M and W gives:

```text
W = 8
T = 11
S = 16?  (not yet; use the equal-gap clue before fixing n)
```

### Step 2: Use the equal-gap clue

Between T=11 and R=1 there are 9 people. Therefore there must be 9 people between S and W=8. Hence:

```text
S = 18
```

So the row length is 18.

### Step 3: Complete the midpoint chain

```text
K = S - 2 = 16
H = (K + W)/2 = (16+8)/2 = 12
B = H + 3 = 15
```

### Step 4: Final arrangement

```text
Position:  1    2    3    4    5    6    7    8    9    10   11   12   13   14   15   16   17   18
Person:    R    ?    M    ?    ?    ?    ?    W    ?    ?    T    H    ?    ?    B    K    ?    S
```

### Step 5: Verify the high-impact clues

- M and W: positions 3 and 8 have four people between them.
- T is third right of W: 8 to 11.
- T and R: positions 1 and 11 have nine people between them.
- S and W: positions 8 and 18 have nine people between them.
- K is second left of S: 16 and 18.
- H is exactly between K and W: 12 is midpoint of 8 and 16.
- B is third right of H: 15.
- B has only three people to its right: positions 16, 17 and 18.

**Fast exam comment:** Midpoint clues are powerful. Convert “H is exactly between K and W” into `2H = K + W`; this is faster and safer than testing seats visually.

-----------------------------------------------
Using your **Expert Exam Solver v3** format.

*Note:* The clues determine the arrangement **up to rotation** (rotating the whole circle gives equivalent answers). I fix **A at the top** for convenience. Also, since everyone faces the centre, **Right = Anticlockwise**. 

---
use above prompt to solve Seven persons - A, B, C, D, E, F and G sit around a circular table and face the centre. Each of them is from different cityJaipur, Meerut, Pune, Agra, Bhopal, Ranchi and Surat. All the information given below is not necessarily in the same order. C sits second to the right of the one who is from Jaipur. Three persons sit between the ones who is from Jaipur and Pune. G sits fifth to the left of the one who is from Pune and is an immediate neighbour of the one who is from Agra. E sits second to the left of the one who is from Agra. D sits fourth to the right A who is from Ranchi. F is not from Jaipur. F and the one who is from Meerut are immediate neighbours. G is not from Bhopal.
# Initial Setup

```
             (0)
              ?
      (6) ?       ? (1)

   (5) ?             ? (2)

      (4) ?       ? (3)
```

We need to determine:

* Person positions
* City of each person

---

# Clue 1

**C sits second to the right of the one who is from Jaipur.**

```
Jaipur --(2 right)--> C
```

Only a relation is obtained.

---

# Clue 2

**Three persons sit between Jaipur and Pune.**

With 7 people,

```
Jaipur -----4 seats----- Pune
```

Jaipur and Pune are opposite (distance 4).

---

# Clue 3

**G sits fifth to the left of Pune and is an immediate neighbour of Agra.**

Since 5 left = 2 right,

```
Pune --2 right--> G
```

Also,

```
Agra - G
```

(adjacent)

Combining Clues 1–3 gives

```
Jaipur --4--> Pune --2R--> G
Jaipur --2R--> C
```

---

# Clue 4

**E sits second to the left of Agra.**

```
Agra --2 left--> E
```

---

# Clue 5

**D sits fourth to the right of A who is from Ranchi.**

Fix A at Position 0.

```
             A(Ranchi)

      ?               ?

   ?                     ?

      ?               D
```

So D is fixed opposite-right of A.

---

# Clue 6

**F is not from Jaipur.**

Only eliminates Jaipur for F.

---

# Clue 7

**F and Meerut are immediate neighbours.**

```
Meerut - F
```

---

# Clue 8

**G is not from Bhopal.**

Eliminates Bhopal for G.

---

# Combining all clues

Testing the remaining possibilities leaves **one valid arrangement (up to rotation).**

---

# Final Arrangement

### Persons

```
                A
          B           G

      C                   D

          E           F
```

Clockwise from A:

| Position | Person |
| -------- | ------ |
| 1        | A      |
| 2        | B      |
| 3        | G      |
| 4        | D      |
| 5        | F      |
| 6        | E      |
| 7        | C      |

---

### Cities

| Person | City   |
| ------ | ------ |
| A      | Ranchi |
| B      | Jaipur |
| C      | Bhopal |
| D      | Agra   |
| E      | Meerut |
| F      | Pune   |
| G      | Surat  |

---

# Verification

✓ C is second right of Jaipur (B → C)

✓ Jaipur and Pune have 3 persons between them (B ↔ F)

✓ G is fifth left (2 right) of Pune

✓ G is neighbour of Agra

✓ E is second left of Agra

✓ D is fourth right of A

✓ F is not Jaipur

✓ F and Meerut are neighbours

✓ G is not from Bhopal

---

## Final Answer

| Person | City   |
| ------ | ------ |
| A      | Ranchi |
| B      | Jaipur |
| C      | Bhopal |
| D      | Agra   |
| E      | Meerut |
| F      | Pune   |
| G      | Surat  |
--------------------------------

14 persons sit in two parallel rows containing seven persons in each row. A, B, C, D, E, F and G – sit in row 1 and face north while P, Q, R, S, T, U and V – sit in row 2 and face south. But not necessarily in the same order. Persons of row 1 face the persons of row 2 Three persons sit between B and D. D sits at one of the ends. Two persons sit between Q and the one who faces B. One person sits between Q and T. U sits fourth to the right of S but does not sit opposite to D. One person sits between A and the one who faces S. G sits immediate right of C. P does not face C. Number of persons sit to the right of F and V are equal.


Let the positions be numbered **1 to 7 from left to right**.

* **Row 1** faces **North**.
* **Row 2** faces **South** (so "right" for Row 2 is towards our left).

---

### Step 1: Place D and B

* D sits at one of the ends.
* Three persons sit between B and D.

Only valid placement:

```
1   2   3   4   5   6   7
C   G   B   E   A   F   D
```

(derived after using all remaining clues)

---

### Step 2: Use G immediately right of C

Since Row 1 faces North,

```
C G
```

must be consecutive.

---

### Step 3: Use U fourth to the right of S

For Row 2 (faces South), right means **left** from our view.

Hence

```
S _ _ _ U
```

This fixes

```
U at 3, S at 7
```

---

### Step 4: One person between A and the person facing S

S is at position 7.

The person facing S must be at Row 1 position 7.

One person between A and that position gives

```
A at position 5.
```

---

### Step 5: Q and T

* Two persons between Q and the one facing B.
* One person between Q and T.

Since B is at position 3,

```
Q = position 6
T = position 4
```

---

### Step 6: Remaining clues

* P does not face C.
* Persons to the right of F and V are equal.

This gives

```
F = position 6
V = position 2
```

Remaining position is occupied by R and P.

---

# Final Arrangement

```
                (Facing North)

Pos →      1    2    3    4    5    6    7
Row 1 :    C    G    B    E    A    F    D
            ↑    ↑    ↑    ↑    ↑    ↑    ↑
            ↓    ↓    ↓    ↓    ↓    ↓    ↓
Row 2 :    R    V    U    T    P    Q    S

                (Facing South)
```

---

## Verification

* ✓ Three persons between **B** and **D**
* ✓ D at an end
* ✓ Two persons between **Q** and the one facing **B**
* ✓ One person between **Q** and **T**
* ✓ U is fourth to the right of S (south-facing)
* ✓ U not opposite D
* ✓ One person between A and the one facing S
* ✓ G immediate right of C
* ✓ P does not face C
* ✓ Persons to the right of F and V are equal

**Final Answer**

| Position | Row 1 (North) | Row 2 (South) |
| :------: | :-----------: | :-----------: |
|     1    |       C       |       R       |
|     2    |       G       |       V       |
|     3    |       B       |       U       |
|     4    |       E       |       T       |
|     5    |       A       |       P       |
|     6    |       F       |       Q       |
|     7    |       D       |       S       |
