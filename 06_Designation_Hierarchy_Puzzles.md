# Designation / Post-based Arrangement  Complete Solving Guide

## 1. Model Overview

- **What it is:** A set of people is assigned distinct designations or posts such as CEO, General Manager, Manager and Executive. The task is to determine the complete seniority order or match each person with a post.
- **Why it appears in exams:** These puzzles test ordering, comparison, conditional reasoning and one-to-one matching. They are often combined with departments, floors, salaries, joining years or seating positions.
- **Key challenges:** Solvers may confuse seniority with age, treat immediately senior as merely senior, or assume that an unmentioned designation can be repeated.
- **Exam frequency:** Usually 1 set (510 questions), sometimes mixed with a floor or department arrangement.

## 2. Core Components & Terminology

- **Primary variable:** Person or employee.
- **Secondary variable:** Designation/post, department, floor, city, salary, joining year or gender.
- **Hierarchy:** A top-to-bottom order of posts, for example CEO > MD > GM > Manager > Executive.
- **Relationship types:** Senior to, junior to, immediately senior, immediately junior, above, below, between, either/or and not.

### Mini-glossary

| Term | Meaning |
|---|---|
| Senior to X | Holds a higher post than X; not necessarily immediately above |
| Junior to X | Holds a lower post than X |
| Immediately senior | Exactly one level above |
| Immediately junior | Exactly one level below |
| One post between | A gap of exactly one designation |
| Between X and Y | X and Y lie on opposite sides of the stated person; check whether order is fixed |
| At least two posts senior | There are two or more levels between the lower post and the person, depending on exam wording |
| Distinct posts | Every listed designation is used once unless repetition is explicitly allowed |

**Important:** A is senior to B gives only an inequality. It does not mean A is directly above B.

## 3. Prerequisite Checks (Before Solving)

- [ ] Count all people and all designations.
- [ ] Confirm whether every person and every post is distinct.
- [ ] Write the hierarchy from highest to lowest, or reverse it consistently.
- [ ] Separate designation clues from clues about age, experience or salary.
- [ ] Mark whether immediately, exactly, at least or not appears in a clue.
- [ ] Identify any fixed designation or direct personpost match.
- [ ] Check whether the hierarchy is complete or only partially ordered.

## 4. Step-by-Step Solving Methodology

### Phase 1: Diagram Preparation

For a five-level hierarchy, create numbered slots. Numbering from 1 at the top prevents confusion:

```text
Level 1 (highest):  [     ]
Level 2:            [     ]
Level 3:            [     ]
Level 4:            [     ]
Level 5 (lowest):   [     ]
```

If designations are known, write them first:

```text
1  CEO
2  Managing Director (MD)
3  General Manager (GM)
4  Manager
5  Executive
```

For a mixed puzzle, use a two-dimensional table:

```text
Person       Post       Department       Floor
--------     --------   --------------   -----
A            ?          ?                ?
B            ?          ?                ?
```

### Phase 2: Constraint Extraction & Prioritization

Classify clues before placing anything:

1. **Direct:** Ravi is the GM. Place it immediately.
2. **Exact-gap:** Neha is immediately junior to Ravi. Place adjacent slots.
3. **Comparative:** Kiran is senior to Meera. Record `Kiran > Meera`.
4. **Conditional:** If P is the MD, Q is the Manager. Keep it separate until P is tested.
5. **Negative:** T is not the CEO. Cross out only that slot.

Start with direct matches and immediate relationships. Then combine chains, use negative clues, and test conditional cases last.

### Phase 3: Iterative Placement

1. Write all posts in rank order.
2. Convert every clue into an inequality or fixed-distance relation.
3. Place the most restrictive chain first, such as `A > B > C`.
4. Cross out impossible slots after every placement.
5. Use one-to-one elimination: once a person gets a post, remove that post from everyone else.
6. If two cases remain, create small Case I / Case II branches.
7. Reject a case as soon as it violates one clue; do not complete an impossible branch.

Useful notation:

```text
P > Q       P is senior to Q
P >> Q      P is immediately senior to Q
P _ Q       one post lies between P and Q
P  CEO     P cannot be CEO
```

### Phase 4: Verification & Cross-Check

- Check every person appears exactly once.
- Check every designation appears exactly once.
- Read each clue against the final top-to-bottom order.
- Verify immediate clues by counting levels, not by visual closeness in a table.
- Ensure a conditional clue is satisfied in the chosen case.
- For questions asking could be true, retain at least one valid arrangement; for must be true, compare all valid cases.

## 5. Common Pitfalls & How to Avoid Them

| Pitfall | Prevention |
|---|---|
| Reading seniority as physical position without fixing direction | Write highest  lowest before solving. |
| Treating senior to as immediately senior | Reserve adjacency only for words such as immediately, just or directly. |
| Confusing age/experience with designation | Make separate columns for post, age and experience. |
| Forgetting one-to-one assignment | Cross out a post from all other rows after placement. |
| Ignoring an unused or unmentioned post | Count people and posts; leave no unexplained slot. |
| Continuing a case after a contradiction | Stop immediately and mark the branch invalid. |

## 6. Shortcut Techniques & Pattern Recognition

- **Chain compression:** From `A > B`, `B > C`, write `A > B > C`; this may force the top or bottom slots.
- **Extreme-position logic:** A person senior to everyone must be at the highest post; a person junior to everyone must be at the lowest post.
- **Immediate-pair blocking:** Treat `A >> B` as a two-slot block and slide it through the hierarchy.
- **Gap counting:** Two posts below A means `level(A) + 2`, not simply any lower post.
- **Fast elimination:** A person with three restrictions may have only one possible post; solve that row first.
- **Case comparison:** If two orders are possible, identify what is common to both. That common fact is often the answer to a definitely true question.

## 7. ASCII Diagram Examples

### Example 1: Basic Hierarchy

**Puzzle Statement:** Five employeesAsha, Bharat, Charu, Deepak and Eshahold the posts of CEO, MD, GM, Manager and Executive, one each.

1. Asha is senior to Bharat but junior to Charu.
2. Deepak is immediately junior to Asha.
3. Esha is junior to Bharat.

**Solution Walkthrough**

#### Setup

```text
1 CEO       [     ]
2 MD        [     ]
3 GM        [     ]
4 Manager   [     ]
5 Executive [     ]
```

#### Step 1: Build the chain

`Charu > Asha > Bharat > Esha` gives a four-person seniority chain. Therefore it must occupy four consecutive levels in that order.

#### Step 2: Apply the immediate clue

Deepak is immediately junior to Asha. Asha cannot be at level 5, and Bharat already follows Asha in the chain, so Deepak must take the level directly below Asha. The only valid arrangement is:

```text
1 CEO       [Charu ]
2 MD        [Asha  ]
3 GM        [Deepak]
4 Manager   [Bharat]
5 Executive [Esha  ]
```

**Final Answer**

| Person | Designation |
|---|---|
| Charu | CEO |
| Asha | MD |
| Deepak | GM |
| Bharat | Manager |
| Esha | Executive |

### Example 2: Mixed Designation and Department Puzzle

**Puzzle Statement:** Six employeesP, Q, R, S, T and Uhold the posts of Director, VP, GM, Senior Manager, Manager and Executive, one each. They work in HR, Finance, Sales, IT, Legal and Operations, one department each.

1. P is the Director.
2. The IT employee is immediately junior to S.
3. R is senior to S but junior to Q.
4. The Finance employee is the GM.
5. T is neither the Manager nor in HR.
6. T works in Legal and is junior to S.

**Solution Walkthrough**

#### Setup

```text
1 Director       [     ]
2 VP             [     ]
3 GM             [     ]
4 Senior Manager [     ]
5 Manager        [     ]
6 Executive      [     ]
```

#### Step 1: Use the seniority chain

`Q > R > S > U` is a four-person chain. Since P is Director and cannot be below Q, Q must be VP. The chain then occupies levels 25 or 26. Because U is junior to S and there are only two lower levels after level 4, test the possibilities.

#### Step 2: Use the Finance clue

Finance is GM, so the Finance employee is at level 3. R must be below Q and above S; the workable placement is R at level 3 and S at level 4. Thus U is level 5 or 6.

#### Step 3: Apply remaining exclusions

T is not Manager, so if U is level 5, T must be level 6. Since the IT employee is immediately junior to S, U must be the IT employee at level 5. The valid arrangement is:

```text
1 Director       [P     ]  department: Operations
2 VP             [Q     ]  department: Sales
3 GM             [R     ]  department: Finance
4 Senior Manager [S     ]  department: HR
5 Manager        [U     ]  department: IT
6 Executive      [T     ]  department: Legal
```

The IT employee U is immediately junior to S. T is neither Manager nor in HR, and T is in Legal and junior to S.

**Final Answer**

| Person | Designation | Department |
|---|---|---|
| P | Director | Operations |
| Q | VP | Sales |
| R | GM | Finance |
| S | Senior Manager | HR |
| U | Manager | Legal |
| T | Executive | IT |

## 8. Decision Tree / Quick Reference

```text
Are posts explicitly listed?
 Yes  Write highest-to-lowest slots.
 No   Derive the partial order from seniority clues.

Is there a direct personpost clue?
 Yes  Place it first and eliminate that post elsewhere.
 No   Start with the longest seniority chain.

Is immediately used?
 Yes  Make an adjacent two-slot block.
 No   Use only relative order.

Do multiple cases remain?
 Yes  Branch, prune contradictions, compare survivors.
 No   Verify every clue and answer the questions.
```

## 9. Self-Check Checklist for This Model

- [ ] All people placed exactly once.
- [ ] All designations used exactly once.
- [ ] Hierarchy direction is clearly marked.
- [ ] Every immediate relationship has exactly one level between its two entries.
- [ ] Senior/junior comparisons are true in the final order.
- [ ] Secondary attributes do not conflict with post assignments.
- [ ] All conditional and negative clues have been tested.
- [ ] For must be true, all remaining cases agree.

## 10. Practice Strategy & Time Management

- **Ideal time:** 57 minutes for a straightforward designation set; 810 minutes for a mixed hierarchy puzzle.
- **First read:** Identify the total posts, hierarchy direction and direct matches before drawing a table.
- **Best starting clue:** A fixed post, an extreme comparison, or the longest seniority chain.
- **Skip rule:** If no placement is possible after 23 minutes and several cases are still open, mark the set and return later.
- **Difficulty scaling:** Easy sets use direct and immediate clues; medium sets add departments or floors; hard sets use conditional clues, partial hierarchies and multiple valid cases.
- **Drill method:** Practise converting every clue into symbols (`>`, `>>`, ``) before solving. Then solve the same set once for accuracy and once under a five-minute timer.




--------------------------------
## How to approach this type of ranking puzzle in an exam

The biggest mistake is trying to place people immediately. Instead, **convert every statement into positions (1–9)** and solve systematically.

### Step 1: Draw the ranking scale

```
Pos : 1    2    3    4    5    6    7     8      9
Post: CEO  CFO  CTO  CMO  VP   GM   AGM   DGM   Manager
```

Think only in **position numbers**.

---

### Step 2: Translate every sentence into equations

```
B has odd number of seniors
→ Position(B) = 2,4,6,8
```

```
4 persons between B and H
→ |B − H| = 5
```

```
C is two designations senior to H
→ C = H − 2
```

```
Persons between B and C
= two less than seniors to E

Between(B,C) = Seniors(E) − 2

Since Seniors(E)=Position(E)-1,

Position(E)=Between(B,C)+3
```

```
A is four designations junior to G

A = G + 4
```

```
Juniors(G)=Seniors(F)+4

9−G = (F−1)+4

F = 6−G
```

This last equation is very useful.

---

## Step 3: Start with the strongest restriction

B can occupy only four places.

```
Possible positions of B

2
4
6
8
```

Now use

```
B ----- H
distance = 5
```

---

# Iteration 1

### Case 1

```
B = 2

1 2 3 4 5 6 7 8 9
  B         H
```

Since C is two senior to H,

```
1 2 3 4 5 6 7 8 9
  B     C   H
```

Between B and C = 2

Hence

```
Seniors(E)=4

E=5
```

But C is already at 5.

❌ Impossible.

---

### Case 2

```
B = 4

1 2 3 4 5 6 7 8 9
      B         H
```

Then

```
1 2 3 4 5 6 7 8 9
      B     C   H
```

Between B and C =2

Therefore

```
E=5
```

Current arrangement

```
1 2 3 4 5 6 7 8 9
      B E C   H
```

Keep this for now.

---

### Case 3

```
B = 6

H =1

C would be -1
```

Impossible.

❌ Eliminate.

---

### Case 4

```
B =8

1 2 3 4 5 6 7 8 9
    H         B
```

Since C is two senior to H,

```
1 2 3 4 5 6 7 8 9
C   H         B
```

Between B and C =6

Hence

```
Seniors(E)=8

E=9
```

Arrangement becomes

```
1 2 3 4 5 6 7 8 9
C   H         B E
```

Keep this also.

---

# Iteration 2

Now use

```
A = G + 4

F = 6 − G
```

Possible values are

| G | F   | A   |
| - | --- | --- |
| 1 | 5   | 5 ❌ |
| 2 | 4   | 6   |
| 3 | 3 ❌ |     |
| 4 | 2   | 8   |
| 5 | 1   | 9   |

Only three possibilities survive.

---

## Test Case 2 (B=4)

Already occupied

```
1 2 3 4 5 6 7 8 9
      B E C   H
```

Try each (G,F,A):

### G=2

```
A=6
F=4
```

But B already at 4.

❌

---

### G=4

But B already at 4.

❌

---

### G=5

But E already at 5.

❌

Therefore

```
Case 2 impossible.
```

---

# Iteration 3

Only Case 4 remains.

Current arrangement

```
1 2 3 4 5 6 7 8 9
C   H         B E
```

Available positions

```
2 4 5 6 7
```

Again test (G,F,A).

---

### G=2

```
A=6
F=4
```

Fits perfectly.

Update diagram

```
1 2 3 4 5 6 7 8 9
C G H F . A . B E
```

Remaining positions

```
5
7
```

Remaining persons

```
D
I
```

Given

```
D is not AGM
```

AGM = position 7

Hence

```
D=5
I=7
```

---

# Final arrangement

```
Position : 1     2     3     4     5    6    7    8      9
Post     : CEO   CFO   CTO   CMO   VP   GM   AGM  DGM   Manager
Person   : C     G     H     F     D    A    I    B      E
```

---

## Final designation table

| Person | Designation |
| ------ | ----------- |
| C      | CEO         |
| G      | CFO         |
| H      | CTO         |
| F      | CMO         |
| D      | VP          |
| A      | GM          |
| I      | AGM         |
| B      | DGM         |
| E      | Manager     |

---

## Exam strategy for ranking puzzles

1. **Draw the position line first** (1–9 or highest→lowest).
2. **Convert every clue into a mathematical relation** (`+2`, `-4`, `|A-B|=5`, etc.).
3. **Start with the clue having the fewest possibilities** (here, B's possible positions).
4. **After every placement, immediately eliminate impossible cases** instead of carrying all of them.
5. **Use derived equations** like `F = 6 − G`—they often reduce the puzzle dramatically.
6. **Keep updating a single ASCII line** rather than rewriting the entire arrangement each time.
7. **Reserve weak clues** (like "D is not AGM") until the end; they usually resolve the final ambiguity.



## How to approach this type of ranking puzzle in an exam

The biggest mistake is trying to place people immediately. Instead, **convert every statement into positions (1–9)** and solve systematically.

### Step 1: Draw the ranking scale

```
Pos : 1    2    3    4    5    6    7     8      9
Post: CEO  CFO  CTO  CMO  VP   GM   AGM   DGM   Manager
```

Think only in **position numbers**.

---

### Step 2: Translate every sentence into equations

```
B has odd number of seniors
→ Position(B) = 2,4,6,8
```

```
4 persons between B and H
→ |B − H| = 5
```

```
C is two designations senior to H
→ C = H − 2
```

```
Persons between B and C
= two less than seniors to E

Between(B,C) = Seniors(E) − 2

Since Seniors(E)=Position(E)-1,

Position(E)=Between(B,C)+3
```

```
A is four designations junior to G

A = G + 4
```

```
Juniors(G)=Seniors(F)+4

9−G = (F−1)+4

F = 6−G
```

This last equation is very useful.

---

## Step 3: Start with the strongest restriction

B can occupy only four places.

```
Possible positions of B

2
4
6
8
```

Now use

```
B ----- H
distance = 5
```

---

# Iteration 1

### Case 1

```
B = 2

1 2 3 4 5 6 7 8 9
  B         H
```

Since C is two senior to H,

```
1 2 3 4 5 6 7 8 9
  B     C   H
```

Between B and C = 2

Hence

```
Seniors(E)=4

E=5
```

But C is already at 5.

❌ Impossible.

---

### Case 2

```
B = 4

1 2 3 4 5 6 7 8 9
      B         H
```

Then

```
1 2 3 4 5 6 7 8 9
      B     C   H
```

Between B and C =2

Therefore

```
E=5
```

Current arrangement

```
1 2 3 4 5 6 7 8 9
      B E C   H
```

Keep this for now.

---

### Case 3

```
B = 6

H =1

C would be -1
```

Impossible.

❌ Eliminate.

---

### Case 4

```
B =8

1 2 3 4 5 6 7 8 9
    H         B
```

Since C is two senior to H,

```
1 2 3 4 5 6 7 8 9
C   H         B
```

Between B and C =6

Hence

```
Seniors(E)=8

E=9
```

Arrangement becomes

```
1 2 3 4 5 6 7 8 9
C   H         B E
```

Keep this also.

---

# Iteration 2

Now use

```
A = G + 4

F = 6 − G
```

Possible values are

| G | F   | A   |
| - | --- | --- |
| 1 | 5   | 5 ❌ |
| 2 | 4   | 6   |
| 3 | 3 ❌ |     |
| 4 | 2   | 8   |
| 5 | 1   | 9   |

Only three possibilities survive.

---

## Test Case 2 (B=4)

Already occupied

```
1 2 3 4 5 6 7 8 9
      B E C   H
```

Try each (G,F,A):

### G=2

```
A=6
F=4
```

But B already at 4.

❌

---

### G=4

But B already at 4.

❌

---

### G=5

But E already at 5.

❌

Therefore

```
Case 2 impossible.
```

---

# Iteration 3

Only Case 4 remains.

Current arrangement

```
1 2 3 4 5 6 7 8 9
C   H         B E
```

Available positions

```
2 4 5 6 7
```

Again test (G,F,A).

---

### G=2

```
A=6
F=4
```

Fits perfectly.

Update diagram

```
1 2 3 4 5 6 7 8 9
C G H F . A . B E
```

Remaining positions

```
5
7
```

Remaining persons

```
D
I
```

Given

```
D is not AGM
```

AGM = position 7

Hence

```
D=5
I=7
```

---

# Final arrangement

```
Position : 1     2     3     4     5    6    7    8      9
Post     : CEO   CFO   CTO   CMO   VP   GM   AGM  DGM   Manager
Person   : C     G     H     F     D    A    I    B      E
```

---

## Final designation table

| Person | Designation |
| ------ | ----------- |
| C      | CEO         |
| G      | CFO         |
| H      | CTO         |
| F      | CMO         |
| D      | VP          |
| A      | GM          |
| I      | AGM         |
| B      | DGM         |
| E      | Manager     |

---

## Exam strategy for ranking puzzles

1. **Draw the position line first** (1–9 or highest→lowest).
2. **Convert every clue into a mathematical relation** (`+2`, `-4`, `|A-B|=5`, etc.).
3. **Start with the clue having the fewest possibilities** (here, B's possible positions).
4. **After every placement, immediately eliminate impossible cases** instead of carrying all of them.
5. **Use derived equations** like `F = 6 − G`—they often reduce the puzzle dramatically.
6. **Keep updating a single ASCII line** rather than rewriting the entire arrangement each time.
7. **Reserve weak clues** (like "D is not AGM") until the end; they usually resolve the final ambiguity.

