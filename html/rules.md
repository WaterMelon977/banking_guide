# SBI PO Prelims Study Portal – Project Specification

## Project Goal

Build a **static HTML study portal** for **SBI PO Prelims** revision that feels like a professionally typeset academic book rather than a modern web application.

The website should have:

- Clean LaTeX-inspired design
- Excellent readability
- Minimal JavaScript
- Static HTML pages
- No backend
- No databases
- No AI-generated content
- Fast loading
- Print-friendly layout

---

# Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- KaTeX (preferred) or MathJax for equations
- Google Fonts (optional)

No frameworks:

- ❌ React
- ❌ Vue
- ❌ Angular
- ❌ Bootstrap
- ❌ Tailwind

---

# Design Philosophy

The website should resemble:

- university lecture notes
- printed textbooks
- LaTeX PDFs
- mathematical handbooks
- old academic journals

NOT:

- flashy dashboards
- startup landing pages
- AI-generated UI
- neumorphism
- glassmorphism

The overall feeling should be:

> "A printed SBI preparation book converted into HTML."

---

# File Structure

```
study-site/
│
├── index.html
├── quant.html
├── reasoning.html
│
├── arithmetic.html
├── di.html
├── quadratic.html
├── series.html
├── simplification.html
│
├── box_stack.html
├── hierarchy.html
├── seating.html
├── calendar_puzzles.html
│
├── styles.css
├── script.js
│
└── assets/
```

---

# Site Architecture

## 1. Homepage

**index.html**

Purpose:

- Entry page
- Revision strategy
- Exam approach
- Navigation

### Layout

```
------------------------------------------------
SBI PO Prep

[ Quant ▼ ]      [ Reasoning ▼ ]

-----------------------------------------------

Exam Strategy

...

Revision Approach

...

Time Management

...

Common Mistakes

...

Footer
```

---

# Homepage Navigation

Two dropdown menus.

---

## Quantitative Aptitude

Contains

- Quant Home
- Arithmetic
- Data Interpretation
- Quadratic Equations
- Number Series
- Simplification

---

## Reasoning

Contains

- Reasoning Home
- Box Stack
- Floor Puzzle
- Seating Arrangement
- Blood Relation
- Hierarchy
- Calendar Puzzle
- Ranking
- Direction
- Syllogism

(Add new pages whenever needed.)

---

# Dropdown Behaviour

Requirements

- Click to open
- Click outside → close
- Click page link → close
- Smooth transition
- Highlight current page

No hover menus.

---

# Topic Hub Pages

## quant.html

Contains cards/buttons linking to

- Arithmetic
- DI
- Quadratic
- Series
- Simplification

Simple overview page.

---

## reasoning.html

Contains links to every reasoning topic.

---

Each hub includes

```
Home > Quantitative Aptitude
```

or

```
Home > Reasoning
```

---

# Topic Pages

Every HTML topic page uses the same layout.

Example:

```
Home > Quantitative Aptitude > Arithmetic

Heading

Notes

Examples

Formula

Shortcuts

Questions

Tips
```

---

# Breadcrumb Navigation

Always visible.

Example

```
Home > Reasoning > Seating Arrangement
```

Rules

- Home clickable
- Parent clickable
- Current page bold
- Small font
- Top aligned
- Light gray

---

# Reading Layout

Single-column.

Desktop

- max width ≈ 750px

Margins

- around 60px

Mobile

- responsive
- margins reduced

---

# Typography

## Heading Font

Use one:

- EB Garamond
- Lora
- Playfair Display
- Georgia

Large title

Approx

```
42–48px
```

---

## Body Font

Serif

Examples

- Georgia
- Lora

Size

```
16–18px
```

Line height

```
1.7
```

Paragraph spacing

Generous.

---

## Code

Monospace

Examples

```
Courier New
JetBrains Mono
```

Light gray background.

---

# Mathematical Rendering

Support LaTeX.

Preferred

KaTeX.

Alternative

MathJax.

Example

Inline

```
$y=ax^2+bx+c$
```

Display

```
$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$
```

Important equations should appear centered.

---

# Sticky Header (Optional)

Minimal.

Left

```
SBI PO Prep
```

Right

```
Quant ▼

Reasoning ▼
```

or

Sidebar on desktop.

---

# Footer

Very minimal.

Contains

- Last Updated
- Home link

Example

```
--------------------------------

Last Updated:
23 July 2026

Back to Home

--------------------------------
```

---

# Color Palette

Background

```
#f5f3f0
```

Alternative

```
#fafaf8
```

---

Primary Text

```
#2c2c2c
```

---

Accent

Choose one

```
#8b6914
```

or

```
#6b5344
```

---

Links

```
#0066cc
```

Always underlined.

---

Borders

```
#d9d7d5
```

---

# Layout Rules

Use lots of whitespace.

Spacing system

```
8px

16px

24px

32px

48px
```

No clutter.

---

# Hover Effects

Only subtle.

Buttons

- light background

Links

- darker blue
- underline slightly thicker

No animations beyond

```
0.2 seconds
```

---

# Visual Restrictions

Avoid

- gradients
- glassmorphism
- neon
- heavy shadows
- oversized buttons
- floating cards
- excessive borders
- parallax
- hero banners

The site should feel timeless.

---

# Accessibility

Use semantic HTML.

Include

- header
- nav
- main
- article
- footer

Include

Skip to content link.

Proper heading hierarchy

```
h1

h2

h3
```

Readable contrast.

Keyboard-friendly navigation.

---

# Performance

Requirements

- Very fast loading
- No external images
- No unnecessary JavaScript
- One global stylesheet
- One small JavaScript file

---

# Global Stylesheet

```
styles.css
```

Responsible for

- typography
- layout
- buttons
- dropdowns
- breadcrumbs
- footer
- code blocks
- math styling

---

# JavaScript

Only for

- dropdown menus
- closing menus
- optional collapsible sections
- optional dark mode
- optional search

Keep under ~150 lines if possible.

---

# Optional Enhancements

## Print Mode

Create print stylesheet.

Requirements

- white background
- black text
- no navigation
- no dropdowns
- page-break friendly

---

## Dark Mode

Simple toggle.

Default

Light mode.

---

## Search

Small client-side search.

No backend.

---

## Collapsible Sections

Examples

```
▼ Formula

▼ Examples

▼ Tricks

▼ Practice Questions

▼ Common Mistakes
```

Pure JavaScript.

---

# Content Philosophy

Every page should read like high-quality printed notes.

Focus on

- clarity
- structure
- typography
- readability

Never resemble

- ChatGPT output
- AI-generated notes
- flashy web templates

The website should look like a polished SBI preparation handbook converted directly into HTML.

---

# Overall Design Goal

The final result should resemble:

- A LaTeX-generated revision book
- A university mathematics handbook
- A printed coaching institute notebook
- A clean academic reference manual

rather than

- A startup website
- A SaaS dashboard
- A modern UI template
- An AI-generated webpage