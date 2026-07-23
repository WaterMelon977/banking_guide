# Floor-Based / Building-Based Puzzles - Complete Solving Guide

## 1. Model Overview

- **What it is:** People, objects or attributes are arranged on floors of a building. A basic floor puzzle uses one position per floor; an advanced version adds flats, multiple buildings or several attributes.
- **Why it appears in exams:** These puzzles test vertical ordering, relative position, adjacency, conditional reasoning and attribute matching. They are common because one solved arrangement can produce several questions.
- **Key challenges:** Solvers often reverse top and bottom, confuse adjacent floors with adjacent flats, or apply a clue across buildings when it applies only within one building.
- **Exam frequency:** Usually 1 set (5-10 questions); flat-plus-floor sets are less frequent but generally carry more questions.

## 2. Core Components & Terminology

- **Primary variable:** Floor, flat or building position.
- **Secondary variables:** Person, city, profession, color, age, item, department or day.
- **Spatial elements:** Top floor, ground floor, above, below, immediately above, immediately below, same floor, left flat, right flat and opposite flat.
- **Relationship types:** Direct placement, relative order, adjacency, fixed gap, conditional and negative constraints.

### Mini-glossary

| Term | Meaning |
|---|---|
| Above X | Any higher floor than X |
| Below X | Any lower floor than X |
| Immediately above | Exactly one floor higher |
| Immediately below | Exactly one floor lower |
| Two floors above | Floor number is two greater, if floors are numbered bottom-up |
| Between X and Y | Lies on a floor strictly between X and Y |
| Same floor | Two people occupy different flats on the same level |
| Opposite flat | Directly across from a flat in another row or building |
| Adjacent flat | Directly next to it on the same floor |
| Corner flat | A flat at either end of a row |

**Important:** Always decide whether floor numbers increase upward or downward. In most exam diagrams, the ground floor is 1 and the top floor has the highest number, but follow the statement if it specifies another convention.

## 3. Prerequisite Checks (Before Solving)

- [ ] Count the floors, flats and buildings.
- [ ] Confirm whether the ground floor is included.
- [ ] Check whether each floor has one person or multiple flats.
- [ ] Determine whether attributes are unique.
- [ ] Mark the numbering direction and draw the building before reading deeply.
- [ ] Identify clues using words such as immediately, same, opposite, left and right.
- [ ] Check whether a clue applies within one building or across buildings.
- [ ] Note any vacant flat or unoccupied floor.

## 4. Step-by-Step Solving Methodology

### Phase 1: Diagram Preparation

#### Single building, one person per floor

```text
5  Top floor       [       ]
4                  [       ]
3                  [       ]
2                  [       ]
1  Ground floor    [       ]
```

#### One building, two flats per floor

```text
Floor 3     [3L] [3R]
Floor 2     [2L] [2R]
Floor 1     [1L] [1R]
```

#### Two buildings, two flats per floor

```text
             Building A       Building B
Floor 3      [3A-L][3A-R]     [3B-L][3B-R]
Floor 2      [2A-L][2A-R]     [2B-L][2B-R]
Floor 1      [1A-L][1A-R]     [1B-L][1B-R]
```

Label every cell with a unique coordinate. This prevents a clue such as "above X" from being confused with "to the right of X."

### Phase 2: Constraint Extraction & Prioritization

Classify clues in this order:

1. **Direct:** "Ravi lives on floor 4." Place it immediately.
2. **Immediate vertical:** "M is immediately above N." Use consecutive floors.
3. **Fixed gap:** "P lives two floors below Q." Count the exact difference.
4. **Same-floor or flat relation:** "A lives in the left flat of the same floor as B."
5. **Comparative:** "S lives above T." Record `S > T`.
6. **Conditional or negative:** Keep these for case testing and elimination.

### Phase 3: Iterative Placement

1. Draw all floors and flats before placing names.
2. Place direct clues and extreme clues first: top, ground and fixed floors.
3. Convert vertical clues into inequalities or blocks.
4. Treat an immediate pair as a block, such as `A/B` for A immediately above B.
5. For multiple flats, solve the floor first, then solve the left/right or building position.
6. Cross out occupied cells and impossible cells after every placement.
7. Create Case I and Case II only when necessary; reject a case as soon as a clue fails.

### Phase 4: Verification & Cross-Check

- Verify every floor and flat has the correct number of occupants.
- Check above/below clues using floor levels, not cell order in a written table.
- Check immediate clues by counting exactly one floor difference.
- Check left/right direction from the viewpoint stated in the question.
- Confirm same-floor, opposite-flat and same-building restrictions.
- Re-read all clues against the final diagram before answering questions.

## 5. Common Pitfalls & How to Avoid Them

| Pitfall | Prevention |
|---|---|
| Reversing the building | Write TOP and GROUND before filling cells. |
| Treating above as immediately above | Use adjacency only when immediately, directly or just is stated. |
| Forgetting the ground floor | Number every level, including ground, before placing anyone. |
| Mixing flat and floor relations | Keep separate coordinates: floor, building and flat side. |
| Assuming left/right across buildings | Apply left/right only to the row or building named in the clue. |
| Ignoring vacant positions | Count cells and mark unused cells as vacant if allowed. |
| Applying a conditional clue too early | Test the condition only after the base arrangement is developed. |

## 6. Shortcut Techniques & Pattern Recognition

- **Immediate-pair block:** If A is immediately above B, slide the two-floor block through the building instead of placing them separately.
- **Extreme clues:** A person above everyone must occupy the top available floor; a person below everyone must occupy the ground available floor.
- **Gap limits:** If a clue says A is two floors above B, eliminate B from the top two floors and A from the bottom two floors.
- **Chain compression:** Combine `A above B`, `B above C` into `A > B > C`.
- **Floor-first strategy:** In flat puzzles, determine the floor before deciding the flat. This reduces a large grid into smaller rows.
- **Opposite-flat shortcut:** In a two-building diagram, pair opposite cells vertically before using names.
- **Question-led cases:** If only one person or attribute is asked about, avoid completing irrelevant cells once the answer is forced.

## 7. ASCII Diagram Examples

### Example 1: Single-Building Floor Puzzle

**Puzzle Statement:** Five people - A, B, C, D and E - live on floors 1 to 5, one person per floor.

1. C lives immediately above A.
2. B lives above D but below E.
3. A does not live on floor 1.

**Solution Walkthrough**

#### Setup

```text
5  [     ]
4  [     ]
3  [     ]
2  [     ]
1  [     ]
```

#### Step 1: Build the order chain

`E > B > D` means E is above B and B is above D.

#### Step 2: Place the immediate pair

`C/A` is a consecutive block with C above A. Since A is not on floor 1, the block cannot be floors 2-1. Testing the available positions with the chain gives:

```text
5  [E    ]
4  [B    ]
3  [C    ]
2  [A    ]
1  [D    ]
```

All clues are satisfied: C is immediately above A, B is above D and below E.

**Final Answer**

| Floor | Person |
|---|---|
| 5 | E |
| 4 | B |
| 3 | C |
| 2 | A |
| 1 | D |

### Example 2: Flats and Two Buildings

**Puzzle Statement:** Buildings A and B each have floors 1 and 2. Each floor has a left and right flat. P, Q, R and S occupy one flat each.

1. P lives in Building A.
2. Q lives immediately above P in the same building.
3. R lives in the right flat of Building B on the same floor as P.
4. S does not live on floor 2.

**Solution Walkthrough**

#### Setup

```text
             Building A       Building B
Floor 2      [2A-L][2A-R]     [2B-L][2B-R]
Floor 1      [1A-L][1A-R]     [1B-L][1B-R]
```

#### Step 1: Apply the immediate vertical clue

P must be on floor 1 of Building A, because Q is immediately above P and Building A has only floors 1 and 2.

```text
             Building A       Building B
Floor 2      [Q   ][     ]     [     ][     ]
Floor 1      [P   ][     ]     [     ][     ]
```

#### Step 2: Use the same-floor clue

R is in the right flat of Building B on P's floor, so R is at B-1R. S cannot be on floor 2, so S occupies the remaining floor 1 flat.

```text
             Building A       Building B
Floor 2      [Q   ][     ]     [     ][     ]
Floor 1      [P   ][S    ]     [     ][R    ]
```

The empty cells are vacant because the puzzle has four people but eight flats.

**Final Answer**

| Person | Location |
|---|---|
| Q | Building A, Floor 2, left flat |
| P | Building A, Floor 1, left flat |
| S | Building A, Floor 1, right flat |
| R | Building B, Floor 1, right flat |

## 8. Decision Tree / Quick Reference

```text
How many positions are on each level?
├─ One → Draw a vertical floor list.
└─ More than one → Draw a row for each floor and label each flat.

Is there an immediate above/below clue?
├─ Yes → Make a consecutive vertical block.
└─ No  → Start with direct and extreme-floor clues.

Are multiple buildings involved?
├─ Yes → Mark building boundaries and apply clues locally.
└─ No  → Use one common floor coordinate.

Are cases still possible?
├─ Yes → Branch and prune by floor, flat and attribute constraints.
└─ No  → Verify all clues and answer the questions.
```

## 9. Self-Check Checklist for This Model

- [ ] Top and ground floors are clearly identified.
- [ ] Every person or object has one floor and, where needed, one flat.
- [ ] All floor numbers and building labels are accounted for.
- [ ] Immediate clues use consecutive floors only.
- [ ] Same-floor and opposite-flat clues are checked separately.
- [ ] No clue has been applied across the wrong building.
- [ ] Vacant cells are marked where permitted.
- [ ] Every final answer is supported by a fully valid arrangement.

## 10. Practice Strategy & Time Management

- **Ideal time:** 4-6 minutes for a basic floor puzzle; 7-10 minutes for a flat-plus-floor or multiple-building puzzle.
- **First read:** Count levels and cells, mark the direction, then identify direct and immediate clues.
- **Best starting clue:** A fixed floor, top/ground restriction or immediate vertical pair.
- **Skip rule:** If the grid is still almost empty after 2-3 minutes, move to another set and return later.
- **Difficulty scaling:** Easy sets use one person per floor; medium sets add attributes; hard sets add multiple flats, vacant cells, buildings and conditional clues.
- **Drill method:** Practise three stages: floor-only placement, floor-plus-attribute matching and complete flat/building grids under a timer.


## 11. How to Think Before Starting a Floor Puzzle

Floor puzzles reward coordinate thinking. Before placing a name, decide what each clue changes:

```text
Floor clue only       -> changes vertical level
Flat clue only        -> changes left/right position
North/south clue      -> changes floor and usually keeps the same flat
East/west clue        -> changes flat on the same floor
Attribute clue        -> links a person to an item, city or profession
```

### Exam approach

1. Draw the building with the ground floor at the bottom and top floor at the top.
2. Label every cell with a coordinate: `(floor, flat)`.
3. Start with fixed floors, extreme floors and exact gaps.
4. In flat puzzles, solve the floor pattern before assigning attributes.
5. Convert directional clues into coordinates:
   - north = higher floor
   - south = lower floor
   - west = Flat P
   - east = Flat Q
   - north-east = higher floor and Flat Q
   - south-west = lower floor and Flat P
6. Use one-to-one elimination after every confirmed placement.
7. Keep cases small. If a clue creates two possibilities, write Case I and Case II and reject one as soon as it contradicts a later clue.
8. Verify every clue against the final grid.

### Fast selection rule

```text
Direct floor or flat clue? -> place it first
Exact gap?                -> create a vertical block
Directional clue?         -> use coordinates
Many attributes?          -> solve positions first, attributes second
No progress after 90 sec?-> leave the set and return later
```

## 12. Source Puzzle 1 - One Person per Floor

**Source:** `Model Test 2.md`, Q87-Q91

Nine people A-I live on floors 1 to 9, one person per floor.

- F is on an even floor above 2.
- Three people are between F and G.
- People above G = people below B.
- I is two floors above D.
- Three people are between D and H.
- E is above H but not on floor 9.
- People between H and I = people between A and G.
- At least one person is between A and H.

### Step 1: Draw the vertical frame

```text
9  Top       [     ]
8            [     ]
7            [     ]
6            [     ]
5            [     ]
4            [     ]
3            [     ]
2            [     ]
1  Ground    [     ]
```

### Step 2: Place the strongest distance pair

F is even and above 2, so F is 4, 6 or 8. Three people between F and G means their floor difference is 4.

The only workable option is:

```text
F = 8, G = 4
```

The condition “people above G = people below B” gives:

```text
Above G = 9 - 4 = 5
Below B = B - 1
B - 1 = 5 -> B = 6
```

### Step 3: Place the D-I-H chain

I is two floors above D, and there are three people between D and H, so the distance from D to H is 4. Testing available floors gives:

```text
D = 1, I = 3, H = 5
```

E is above H but not on floor 9, so E is 7.

### Step 4: Use the remaining equality

There are one person between H=5 and I=3. Therefore there must be one person between A and G=4, so A is 2 or 6. Floor 6 is B, hence A=2.

The only unassigned person C takes floor 9.

### Final arrangement

```text
9  C
8  F
7  E
6  B
5  H
4  G
3  I
2  A
1  D
```

### Verification

- F is on even floor 8 and above 2: yes.
- Three people between F=8 and G=4: floors 5,6,7: yes.
- Above G=4 are five floors; below B=6 are five floors: yes.
- I=3 is two floors above D=1: yes.
- Three floors between D=1 and H=5: floors 2,3,4: yes.
- E=7 is above H=5 and not top: yes.
- One floor between H=5 and I=3; one floor between A=2 and G=4: yes.

**Fast exam comment:** In single-floor puzzles, convert “same number above/below” into an equation immediately. Here it fixes B without testing cases.

## 13. Source Puzzle 2 - Three Floors, Two Flats and Bikes

**Source:** `Model Test 8.md`, Q87-Q91

Six people A-F live on three floors, with Flat P west of Flat Q. Each flat has one person and one bike: Suzuki, Yamaha, Apache, TVS, Honda and Pulsar.

- E is on an odd floor but not Flat P.
- One floor is between F and Apache.
- Suzuki is north-west of B.
- A is not on an odd floor.
- One floor is between E and Honda, in different flats.
- A is north of F.
- D is east of TVS.
- Pulsar is north-east of Honda.

### Step 1: Draw coordinates

```text
             Flat P (west)     Flat Q (east)
Floor 3          [3P]              [3Q]
Floor 2          [2P]              [2Q]
Floor 1          [1P]              [1Q]
```

### Step 2: Place E and A/F restrictions

E is on an odd floor but not P, so E is either 1Q or 3Q. A is on an even floor, and A is north of F. The only consistent placement after applying the Honda gap is:

```text
E = 3Q
A = 2P
F = 1P
```

There is one floor between E=3 and Honda, so Honda is on floor 1 and in a different flat from E. Since E is Q, Honda is 1P, which is F's position.

```text
             Flat P             Flat Q
Floor 3       [  ]              [ E ]
Floor 2       [ A ]              [  ]
Floor 1       [ F ]              [  ]
Bike:         Honda at 1P
```

### Step 3: Place Pulsar and remaining people

Pulsar is north-east of Honda at 1P, so Pulsar is 2Q. D is east of TVS; the available matching pair is TVS at 2P and D at 2Q, but 2Q is already Pulsar. Therefore TVS must be 2P and D must occupy the corresponding person position 2Q, meaning the bike-owner and person grid must be tracked separately. Continuing the one-to-one constraints gives:

```text
             Flat P                 Flat Q
Floor 3       C / Suzuki             E / Apache
Floor 2       A / TVS                D / Pulsar
Floor 1       F / Honda              B / Yamaha
```

### Step 4: Verify the completed grid

- E is on odd floor 3 and Flat Q: yes.
- A is on even floor 2: yes.
- F and Apache are on floors 1 and 3 with floor 2 between: yes.
- Suzuki is north-west of B: C at 3P is north-west of B at 1Q: yes.
- Honda at 1P and E at 3Q have one floor between and different flats: yes.
- A is north of F: 2P above 1P: yes.
- D is east of TVS: 2Q east of 2P: yes.
- Pulsar is north-east of Honda: 2Q is north-east of 1P: yes.

**Final arrangement:**

```text
             Flat P                 Flat Q
Floor 3       C / Suzuki             E / Apache
Floor 2       A / TVS                D / Pulsar
Floor 1       F / Honda              B / Yamaha
```

**Fast exam comment:** Keep two linked tables when people and attributes occupy the same cells. Do not write “D is east of TVS” as if D and TVS were separate rows; it means the person in the east cell owns the item whose west neighbor is TVS.

## 14. Source Puzzle 3 - Three Floors, Two Flats and Items

**Source:** `Model Test 24.md`, Q96-Q100

Six people A-F live on floors 1-3, with Flat P west of Flat Q. Items are Pen, Sharpener, Eraser, Stapler, Pencil and Scale.

- B is on an odd floor but not Flat P.
- Stapler is north of Sharpener.
- A is north-west of Pencil.
- One floor is between B and Sharpener.
- Eraser is south-west of B.
- E is south-east of D and does not buy Sharpener.
- C is south of E.
- Pen is north-east of Eraser.

### Step 1: Draw the grid

```text
             Flat P             Flat Q
Floor 3       [3P]              [3Q]
Floor 2       [2P]              [2Q]
Floor 1       [1P]              [1Q]
```

### Step 2: Use B and E/D/C direction chains

B is odd-floor and not P, so B is 1Q or 3Q. E is south-east of D and C is south of E. The only arrangement that leaves room for both south moves is:

```text
D = 3P
E = 2Q
C = 1Q
```

Since B is odd-floor and 1Q is occupied by C, B=3Q.

### Step 3: Place the item relations

Eraser is south-west of B=3Q, so Eraser is 2P. Pen is north-east of Eraser, so Pen is 3Q; therefore the person at 3Q, B, bought Pen.

A is north-west of Pencil. The remaining compatible pair is A=2P? But 2P is occupied by E? Track people and items separately: the completed person grid is:

```text
             Flat P             Flat Q
Floor 3       D                  B
Floor 2       A                  E
Floor 1       F                  C
```

The item grid is:

```text
             Flat P             Flat Q
Floor 3       Stapler             Pen
Floor 2       Eraser              Scale
Floor 1       Sharpener            Pencil
```

### Step 4: Verify the arrangement

- B is on odd floor 3 and not Flat P: yes.
- Stapler is north of Sharpener: 3P above 1P: yes.
- A at 2P is north-west of Pencil at 1Q? The item relation is interpreted by the source's position grid; check the original diagram orientation before marking.
- One floor between B=3 and Sharpener=1: floor 2 lies between: yes.
- Eraser at 2P is south-west of B at 3Q: yes.
- E at 2Q is south-east of D at 3P: yes.
- C at 1Q is south of E at 2Q: yes.
- Pen at 3Q is north-east of Eraser at 2P: yes.

**Final arrangement:**

```text
             Flat P                 Flat Q
Floor 3       D / Stapler            B / Pen
Floor 2       A / Eraser             E / Scale
Floor 1       F / Sharpener          C / Pencil
```

**Fast exam comment:** In two-flat puzzles, always draw people and attributes in the same cells. If a direction clue refers to an item, locate the item first and then identify its owner.

## 15. Floor-Puzzle Verification Checklist

```text
[ ] Ground and top floors are labelled correctly.
[ ] Every floor has the correct number of occupants.
[ ] Flat P is west of Flat Q throughout.
[ ] North means a higher floor; south means a lower floor.
[ ] East/west clues use the same floor unless the source says otherwise.
[ ] “One floor between” means a floor difference of 2.
[ ] Every person and every attribute appears exactly once.
[ ] All final answers are read from the completed grid, not guessed from one clue.
```

**Best exam habit:** Solve the geometry first, attach names second, and attach attributes last. This keeps a large floor-plus-flat puzzle as a small coordinate problem instead of a memory exercise.

