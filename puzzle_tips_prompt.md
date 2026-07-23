# Master Prompt: Generate SBI PO/IBPS PO Puzzle Solving Tips

## Context & Objective
You are an expert reasoning coach preparing intermediate-level puzzle solvers (those who have attempted some puzzles but struggle with consistency) for SBI PO/IBPS PO Prelims. Your task is to create a **structured, step-by-step solving methodology** for puzzle models commonly asked in competitive exams.

**Target Audience:** Intermediate solvers preparing for bank exams
**Depth Level:** Medium depth with structured steps and worked examples
**Output Format:** Markdown with ASCII diagrams
**Include:** 1-2 sample puzzles per model with full solutions

---

## Prompt Template (Use for Each Model)

```
# [PUZZLE MODEL NAME] – Complete Solving Guide

## 1. Model Overview
- **What it is:** Brief definition (2-3 sentences)
- **Why it appears in exams:** Strategic importance and frequency (Prelims marks weight)
- **Key challenges:** Common mistakes intermediate solvers make
- **Exam frequency:** How often this appears (e.g., "1-2 sets per exam")

## 2. Core Components & Terminology
Identify and explain:
- **Primary variable:** (e.g., Person, Position, Attributes)
- **Secondary variables:** (e.g., Colors, Professions, Ages)
- **Spatial/Logical elements:** (e.g., Rows, Circles, Directions)
- **Relationship types:** (e.g., "Left of", "Adjacent to", "Opposite")

Provide a **mini-glossary** of critical terms used in this model type.

## 3. Prerequisite Checks (Before Solving)
List what to verify from the problem statement:
- [ ] Number of persons/entities?
- [ ] Are there gaps or uncertain numbers?
- [ ] What is the total attribute count?
- [ ] Any implicit constraints?
- [ ] Facing directions specified or inferred?

## 4. Step-by-Step Solving Methodology

### Phase 1: Diagram Preparation
- How to set up the base structure (ASCII diagram)
- What grid/layout to use
- How to label positions clearly
- Example: Show the INITIAL blank diagram

### Phase 2: Constraint Extraction & Prioritization
- How to categorize clues (Direct, Conditional, Comparative)
- Which clues to start with (ordering strategy)
- How to handle negative constraints ("X is NOT next to Y")
- Red flags: Clues that lock multiple variables at once

### Phase 3: Iterative Placement
- Algorithm: Start with high-impact clues
- How to test feasibility after each placement
- When to backtrack vs. retry
- Pruning: Eliminating impossible combinations early

### Phase 4: Verification & Cross-Check
- Mandatory checks before finalizing
- How to spot logical contradictions
- Validation checklist for this model

## 5. Common Pitfalls & How to Avoid Them
List 4-5 typical mistakes intermediate solvers make:
- Misinterpretation of spatial language
- Overlooking implicit constraints
- Rushing placement without checking all clues
- [Model-specific pitfall]
- [Model-specific pitfall]

**For each pitfall:** Provide a fix/prevention strategy.

## 6. Shortcut Techniques & Pattern Recognition
- Quick heuristics to narrow search space
- Pattern spotting tips (e.g., "If X is adjacent to 3 people, X must be in the middle")
- Time-saving tricks specific to this model
- When to use elimination vs. direct placement

## 7. ASCII Diagram Examples

### Example 1: [Sample Puzzle 1]

**Puzzle Statement:**
[Full puzzle text here]

**Solution Walkthrough:**

#### Setup (Initial Structure):
```
[ASCII diagram showing blank/initial state]
```

#### Step 1: [Clue Name/Number]
```
[ASCII diagram after applying first clue(s)]
Reasoning: [Brief explanation]
```

#### Step 2: [Clue Name/Number]
```
[ASCII diagram after this clue]
Reasoning: [Brief explanation]
```

#### Step 3-N: [Continue pattern]
```
[Final diagram]
```

**Final Answer:**
[Tabular summary of all persons and their attributes]

---

### Example 2: [Sample Puzzle 2]

**Puzzle Statement:**
[Full puzzle text here]

**Solution Walkthrough:**
[Repeat structure above with ASCII diagrams at each step]

**Final Answer:**
[Tabular summary]

## 8. Decision Tree / Quick Reference
Provide a flowchart or decision tree:
- "If clues are about relative positioning → start here"
- "If uncertain number of people → check this first"
- "If attributes are scattered → use tabular method"

## 9. Self-Check Checklist for This Model
Before submitting answers:
- [ ] All persons placed?
- [ ] All attributes assigned?
- [ ] Every clue verified against final diagram?
- [ ] No contradictions found?
- [ ] [Model-specific check]
- [ ] [Model-specific check]

## 10. Practice Strategy & Time Management
- Ideal time per puzzle of this type: ___ minutes (Prelims)
- How many clues to read before starting diagram?
- When to skip and move to next puzzle
- Difficulty scaling: Easy vs. Medium vs. Hard variants

---
```

## Prompt Execution Instructions

### How to Use This Prompt:

1. **For Each Puzzle Model (6 models total), follow this structure:**
   - Copy the template above
   - Replace `[PUZZLE MODEL NAME]` with actual model (e.g., "Linear Seating Arrangement")
   - Fill in Sections 1-10 with model-specific guidance
   - Include 1-2 fully worked examples with ASCII diagrams
   - Ensure examples progress from easy to medium difficulty

2. **Output Format Requirements:**
   - Use **Markdown** (.md) for all deliverables
   - ASCII diagrams for ALL arrangements (no images)
   - Bold key terms, bullet points for clarity
   - Code blocks for diagram/table presentations

3. **Model Priority Order (Start with):**
   1. **Linear Seating Arrangement** (Most common, highest frequency)
   2. **Circular Seating Arrangement** (Very common)
   3. **Square/Rectangular Seating** (Common variant)
   4. **Floor-Based / Building Puzzles** (High weightage)
   5. **Box / Stack / Matrix Puzzles** (Medium frequency)
   6. **Designation / Hierarchy Puzzles** (Often mixed with seating)

4. **Quality Checklist for Output:**
   - [ ] Each section is self-contained but flows logically
   - [ ] ASCII diagrams are clear and scalable (work for 4-10 people)
   - [ ] At least 1 solved example walkthrough with step-by-step diagrams
   - [ ] Pitfalls are concrete (tied to common exam mistakes)
   - [ ] Time estimates are realistic for Prelims pace
   - [ ] Final diagram/table in examples clearly shows answer format

---

## Example of Expected Output (Linear Seating Sample)

When you apply this prompt to **Linear Seating Arrangement**, the output should look like:

```markdown
# Linear Seating Arrangement – Complete Solving Guide

## 1. Model Overview
- **What it is:** Persons arranged in a straight line (single row or parallel rows). Each person has a fixed position and attributes.
- **Why it appears:** Tests logical deduction, spatial reasoning, and constraint satisfaction.
- **Key challenges:** Confusing left/right orientation, mishandling parallel rows, losing track of attribute combinations.
- **Exam frequency:** 1-2 sets (8-10 questions) per prelim paper.

## 2. Core Components & Terminology
- **Positions:** 1st, 2nd, 3rd... from left/right (clarify direction at start)
- **Adjacent:** Next to each other (can be tricky in parallel rows)
- **Immediate left/right:** One position away
- **Between:** Exactly in the middle of two persons
- **Facing:** Direction orientation (North/South for rows facing each other)

[... continues with full sections ...]
```

---

## Advanced Tips for Prompt Refinement

1. **If you want ASCII diagrams to be more visual:** Specify box-drawing characters (`┌─┐│└┘`).
2. **If examples should include multiple difficulty levels:** Add "Easy variant" and "Hard variant" sections.
3. **If you need integration with flashcards or spaced repetition:** Add a "Flashcard Deck" section with key Q&As.
4. **If targeting speed optimization:** Add "Speed Drilling Mode" with time limits per step.

---

## Final Deliverable Structure

Create **6 separate markdown files**, one per model:

```
📁 SBI_PO_Puzzle_Guides/
├── 01_Linear_Seating_Arrangement.md
├── 02_Circular_Seating_Arrangement.md
├── 03_Square_Rectangular_Seating.md
├── 04_Floor_Building_Puzzles.md
├── 05_Box_Stack_Matrix_Puzzles.md
└── 06_Designation_Hierarchy_Puzzles.md
```

Each file follows the template above with 1-2 fully solved examples and ASCII diagrams at every step.

---

## Success Criteria

✅ Intermediate solver can read Section 1-3 and immediately understand what puzzle they're facing
✅ Step-by-step methodology (Section 4) is detailed enough to apply to ANY puzzle of that type
✅ Worked examples clearly show diagram evolution (not just final answer)
✅ Pitfalls section prevents the solver from repeating common mistakes
✅ Time management section helps prioritize in exam conditions
✅ ASCII diagrams are clear without needing external tools
