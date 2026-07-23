# Scheduling / Calendar Puzzles - Complete Solving Guide

## 1. Model Overview

- **What it is:** People, events or appointments are assigned to months, dates, days and sometimes time slots. Every clue restricts either the calendar position or a linked attribute.
- **Why it appears in exams:** These puzzles test chronological order, date gaps, weekday relationships, time intervals, overlap and conditional scheduling.
- **Key challenges:** Solvers often count dates incorrectly, confuse calendar order with weekday order, or read "after" as "immediately after."
- **Exam frequency:** Usually 1 set (5-10 questions); month and date sets are common, while time-slot schedules are often combined with departments or people.

## 2. Core Components & Terminology

- **Primary variable:** Month, date, day or time slot.
- **Secondary variables:** Person, event, city, topic, department, room or priority.
- **Calendar elements:** Before, after, earlier, later, first half, second half, odd date, even date, weekday and consecutive date.
- **Schedule elements:** Morning/evening, time interval, duration, overlap, immediately before, immediately after and free slot.

### Mini-glossary

| Term | Meaning |
|---|---|
| Before X | Any earlier calendar position or time |
| After X | Any later position; not necessarily immediately later |
| Immediately before | The directly preceding date, day or time slot |
| Between X and Y | A position strictly inside the interval from X to Y |
| Two days after | Add exactly two calendar days unless the clue specifies working days |
| Consecutive days | No date or day gap between the positions |
| Alternate days | A one-day gap between successive scheduled days |
| First half of month | Usually dates 1-15 unless the puzzle defines another range |
| Second half of month | Usually dates 16 onward |
| Overlap | Two events occupy some or all of the same time |
| Free slot | A time position not assigned to any event |

**Important:** Distinguish calendar dates from weekdays. For example, "two days after Monday" is Wednesday, but "two dates after 12 June" is 14 June only when the intervening calendar has no special restriction.

## 3. Prerequisite Checks (Before Solving)

- [ ] Count the months, dates, weekdays and time slots.
- [ ] Check whether dates are within one month or across multiple months.
- [ ] Note the number of days in each relevant month.
- [ ] Confirm whether weekends or holidays are excluded.
- [ ] Determine whether appointments can overlap.
- [ ] Check whether every person/event is assigned exactly once.
- [ ] Identify fixed dates, fixed weekdays and fixed time slots.
- [ ] Mark whether a clue says calendar days, working days, weeks or hours.

## 4. Step-by-Step Solving Methodology

### Phase 1: Diagram Preparation

#### Month and date timeline

```text
Month:       January     February     March       April
Order:          1           2           3           4
Person:       [  ]         [  ]         [  ]         [  ]
Event:        [  ]         [  ]         [  ]         [  ]
```

For exact dates, use a numbered strip:

```text
Date:       10   11   12   13   14   15   16
Event:     [ ]  [ ]  [ ]  [ ]  [ ]  [ ]  [ ]
```

#### Day/time schedule

```text
             9-10   10-11   11-12   12-1   1-2
Monday       [  ]    [  ]    [  ]    [  ]   [  ]
Tuesday      [  ]    [  ]    [  ]    [  ]   [  ]
```

For a weekly schedule, write the days in chronological order. Do not place Monday next to Sunday unless the puzzle explicitly treats the week as circular.

### Phase 2: Constraint Extraction & Prioritization

Classify the clues:

1. **Direct:** "Ravi's appointment is on 12 March." Place it immediately.
2. **Fixed weekday/time:** "The audit is on Tuesday at 10 a.m." Fix both dimensions.
3. **Order:** "P's meeting is before Q's meeting." Record `P < Q`.
4. **Exact gap:** "S's event is three days after T's event." Count the exact interval.
5. **Restriction:** "U's appointment is not on a weekend." Eliminate those dates.
6. **Conditional:** "If V is on Wednesday, W is at 2 p.m." Test only in a relevant case.

Start with fixed dates and times, then exact gaps, then chains of order clues. Apply broad before/after and conditional clues after the tight structure is visible.

### Phase 3: Iterative Placement

1. Write the entire calendar or schedule in chronological order.
2. Place direct clues and fixed time slots.
3. Translate date gaps carefully. A three-day gap means three calendar increments, not three empty cells.
4. Combine chains such as `A before B before C`.
5. Cross out impossible dates, weekdays and time slots.
6. For events with duration, shade all occupied slots, not just the starting slot.
7. Create cases only where needed and reject a case immediately after a contradiction.

Useful notation:

```text
A < B       A occurs before B
A << B      A occurs immediately before B
A + 2       A occurs two calendar positions later
A != Friday A cannot be on Friday
```

### Phase 4: Verification & Cross-Check

- Confirm every event has the correct date, day and time.
- Recalculate all date differences from the final calendar.
- Check month lengths when a gap crosses a month boundary.
- Check that appointments do not overlap unless overlap is allowed.
- Verify weekday/date combinations where the puzzle provides a starting weekday.
- For a must-be-true question, compare every surviving schedule case.

## 5. Common Pitfalls & How to Avoid Them

| Pitfall | Prevention |
|---|---|
| Treating after as immediately after | Use adjacency only for immediately, directly or just. |
| Counting the starting date as day one | For "three days after 10th," count 11, 12, 13. |
| Ignoring month length | Write the dates continuously across month boundaries. |
| Confusing weekday and date | Keep separate columns for date and weekday. |
| Forgetting event duration | Mark every occupied time interval. |
| Assuming weekends are excluded | Exclude them only when the clue says working days or weekdays. |
| Accepting an incomplete schedule | Test every clue against the complete calendar before answering. |

## 6. Shortcut Techniques & Pattern Recognition

- **Date conversion:** Write a short continuous sequence around the relevant dates rather than calculating mentally.
- **Extreme-date logic:** An event after all others must be at the latest available date; one before all others must be earliest.
- **Gap blocks:** Treat consecutive appointments as a block, such as `A/B/C` for three consecutive days.
- **Parity shortcut:** If a clue says events occur on alternate dates, preserve odd/even date parity unless a month boundary changes the pattern.
- **Slot capacity:** If a two-hour event occupies 10-12, cross out 10-11 and 11-12 for every conflicting event.
- **Chain compression:** Combine `A before B` and `B two days before C` into one chronological chain.
- **Calendar anchor:** If one date and its weekday are known, derive nearby weekdays instead of treating them as independent variables.
- **Case comparison:** A fact common to all valid schedules is usually the answer to a definite-position question.

## 7. ASCII Diagram Examples

### Example 1: Month-Based Puzzle

**Puzzle Statement:** Four people - A, B, C and D - were born in January, March, May and July, one person per month.

1. A was born before C.
2. B was born immediately after A in the listed month order.
3. D was born after C.

**Solution Walkthrough**

#### Setup

```text
January   [    ]
March     [    ]
May       [    ]
July      [    ]
```

#### Step 1: Place the consecutive pair

A and B must occupy consecutive listed months. Possible blocks are January-March, March-May or May-July.

#### Step 2: Apply the remaining order clues

The chain is `A < B`, `A < C < D`. The only block that leaves two positions after A for C and D is January-March. Therefore:

```text
January   [A   ]
March     [B   ]
May       [C   ]
July      [D   ]
```

**Final Answer**

| Month | Person |
|---|---|
| January | A |
| March | B |
| May | C |
| July | D |

### Example 2: Day/Time Scheduling Puzzle

**Puzzle Statement:** Four meetings - HR, IT, Sales and Audit - are scheduled in four one-hour slots: Monday 10 a.m., Monday 11 a.m., Tuesday 10 a.m. and Tuesday 11 a.m.

1. Audit is on Tuesday.
2. IT is immediately before Sales in the chronological schedule.
3. HR is on Monday.

**Solution Walkthrough**

#### Setup

```text
Order  Slot             Meeting
1      Mon 10 a.m.      [     ]
2      Mon 11 a.m.      [     ]
3      Tue 10 a.m.      [     ]
4      Tue 11 a.m.      [     ]
```

#### Step 1: Place day restrictions

Audit is fixed in slot 4 and HR is fixed in slot 1. IT/Sales must form a consecutive pair in the remaining slots.

#### Step 2: Test the pairs

The only remaining consecutive slots are 2-3, so IT must be in slot 2 and Sales in slot 3.

The unique schedule is:

```text
Order  Slot             Meeting
1      Mon 10 a.m.      [HR    ]
2      Mon 11 a.m.      [Sales ]
3      Tue 10 a.m.      [Audit ]
4      Tue 11 a.m.      [IT    ]
```

This example demonstrates how fixed time slots reduce the remaining schedule to one consecutive pair.

## 8. Decision Tree / Quick Reference

```text
Are positions calendar dates or months?
 Months  Draw the months in chronological order.
 Dates   Write a continuous date strip and check month lengths.

Are positions days and time slots?
 Yes  Number all slots chronologically.
 No   Use a month/date table.

Is there an exact gap or consecutive clue?
 Yes  Make a block and slide it through the available slots.
 No   Start with fixed dates, days or times.

Do multiple schedules remain?
 Yes  Compare cases and use the question wording carefully.
 No   Verify dates, weekdays, durations and all restrictions.
```

## 9. Self-Check Checklist for This Model

- [ ] All dates, months, days and time slots are listed in chronological order.
- [ ] Every person or event is assigned exactly once.
- [ ] Exact date gaps have been counted correctly.
- [ ] Month boundaries and month lengths have been checked.
- [ ] Weekday and date information are mutually consistent.
- [ ] Event durations and overlaps are handled correctly.
- [ ] Conditional clues have been tested only in relevant cases.
- [ ] The final schedule is unique when the question requires a unique answer.

## 10. Practice Strategy & Time Management

- **Ideal time:** 4-6 minutes for month/order puzzles; 6-9 minutes for date and time-slot schedules.
- **First read:** Count slots, write the chronological order and mark fixed dates or times.
- **Best starting clue:** A fixed appointment, exact gap, consecutive block or extreme date.
- **Skip rule:** If date calculations remain unclear after 2-3 minutes, move to another set and return later.
- **Difficulty scaling:** Easy sets use months and simple order clues; medium sets add exact dates; hard sets add weekdays, durations, overlap and conditional clues.
- **Drill method:** Practise date-gap conversion separately, then combine it with person/event matching. Reserve the last minute for a full calendar verification.



-------------------------------

Seven persons K, L, M, N, O, P and Q - were born (not in given
order) on same date of same month but in different year –
1955, 1961, 1972, 1987, 1998, 2006, 2017. Consider base
year 2025 for age calculation.
M’s age is the cube of a number. 11 years difference between
M and K. Three persons are in between K and P. N is 32 years
older to Q. L’s age is the cube of a number. Age difference
between L and K is more than 10 years


### Step 1: Calculate ages (Base year = 2025)

| Year | Age |
| ---- | --: |
| 1955 |  70 |
| 1961 |  64 |
| 1972 |  53 |
| 1987 |  38 |
| 1998 |  27 |
| 2006 |  19 |
| 2017 |   8 |

---

## Clue 1

**M's age is a cube.**

Cube ages = **64, 27, 8**

---

## Clue 2

**L's age is a cube.**

So L is also among **64, 27, 8**.

---

## Clue 3

**M and K differ by 11 years.**

Possible pairs:

* (64,53) ✓
* (27,38) ✓
* (8,19) ✓

---

## Clue 4

**N is 32 years older than Q.**

Only possible pair:

* **70 & 38**

Therefore,

* **N = 70**
* **Q = 38**

---

## Clue 5

**Age difference between L and K is more than 10 years.**

This eliminates several possibilities.

---

## Clue 6

**Three persons are between K and P.**

Arrange people by age (oldest → youngest).
Three persons between them means **distance = 4 positions**.

Testing the remaining possibilities leaves only one valid arrangement.

---

# Final Age Order (Oldest → Youngest)

| Position | Person | Age | Birth Year |
| :------: | :----: | :-: | :--------: |
|     1    |    N   |  70 |    1955    |
|     2    |    M   |  64 |    1961    |
|     3    |    K   |  53 |    1972    |
|     4    |    Q   |  38 |    1987    |
|     5    |    L   |  27 |    1998    |
|     6    |    O   |  19 |    2006    |
|     7    |    P   |  8  |    2017    |

---

## Verification

* ✓ M's age is a cube → **64**
* ✓ L's age is a cube → **27**
* ✓ M and K differ by 11 years → **64 − 53 = 11**
* ✓ N is 32 years older than Q → **70 − 38 = 32**
* ✓ L and K differ by more than 10 years → **53 − 27 = 26**
* ✓ Three persons are between K and P (Positions 3 & 7)

### Final Answer

* **N → 1955 (70)**
* **M → 1961 (64)**
* **K → 1972 (53)**
* **Q → 1987 (38)**
* **L → 1998 (27)**
* **O → 2006 (19)**
* **P → 2017 (8)**


------------------------------------------------------
Seven persons P, Q, R, S, T, U and V - do different activities
in seven different months i.e., January, March, April, June,
July, August and November. The activities are – Yoga,
meditation, dancing, hiking, cycling, camping and reading. Cycling is done in the month of 30 days. Three persons are
in between S and the one who does cycling. One person is in
between S and T. Number of persons after T is same as
before the one who does Yoga. P is just before the one who
does dancing. More than three persons are in between P and
V who does meditation. Hiking is done in the month of 30
days before R. Reading is done before Q who does not do
hiking. 


Arrange the months in chronological order:

| Position | Month    |
| -------: | -------- |
|        1 | January  |
|        2 | March    |
|        3 | April    |
|        4 | June     |
|        5 | July     |
|        6 | August   |
|        7 | November |

---

## Stepwise deductions

### 1. P is just before the one who does dancing.

So,

```text
P → immediately before Dancing
```

---

### 2. V does meditation.

```text
V → Meditation
```

---

### 3. More than three persons are between P and V.

With 7 positions, this means the distance is at least 5.

---

### 4. One person is between S and T.

```text
S _ T
or
T _ S
```

---

### 5. Persons after T = persons before Yoga.

If T is at position (x),

[
\text{Yoga position}=7-x
]

---

### 6. Cycling is in a 30-day month.

30-day months among the given months:

* April
* June
* November

---

### 7. Three persons are between S and Cycling.

Distance = 4.

---

### 8. Hiking is done in a 30-day month before R.

---

### 9. Reading is before Q, and Q does not do hiking.

---

Combining all the clues gives a unique arrangement.

# Final Arrangement

| Month        | Person | Activity       |
| ------------ | ------ | -------------- |
| **January**  | **P**  | **Reading**    |
| **March**    | **Q**  | **Dancing**    |
| **April**    | **S**  | **Yoga**       |
| **June**     | **U**  | **Hiking**     |
| **July**     | **T**  | **Camping**    |
| **August**   | **V**  | **Meditation** |
| **November** | **R**  | **Cycling**    |

---

## Verification

* ✓ Cycling is in a 30-day month (**November**)
* ✓ Three persons between **S** and Cycling
* ✓ One person between **S** and **T**
* ✓ Persons after **T** = persons before **Yoga** (2 = 2)
* ✓ **P** is just before Dancing
* ✓ More than three persons between **P** and **V**
* ✓ Hiking is in a 30-day month before **R**
* ✓ Reading is before **Q**
* ✓ **Q** does not do Hiking

**Answer (Month-wise):**

| January         | March           | April        | June           | July            | August             | November        |
| --------------- | --------------- | ------------ | -------------- | --------------- | ------------------ | --------------- |
| **P – Reading** | **Q – Dancing** | **S – Yoga** | **U – Hiking** | **T – Camping** | **V – Meditation** | **R – Cycling** |
-----------------------------------------------------

