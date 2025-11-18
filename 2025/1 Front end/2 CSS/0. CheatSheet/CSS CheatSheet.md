# CSS Cheatsheet for Front-End Developers

## CSS Syntax & Structure

```css
selector {
  property: value;
  property: value;
}
```

## Ways to Include CSS

```html
<!-- External CSS (Recommended) -->
<link rel="stylesheet" href="styles.css" />

<!-- Internal CSS -->
<style>
  body {
    color: blue;
  }
</style>

<!-- Inline CSS (Avoid when possible) -->
<div style="color: red;">Content</div>
```

## Selectors (Most Important)

```css
/* Basic Selectors */
element {
} /* Tag selector */
.class-name {
} /* Class selector */
#id-name {
} /* ID selector */
* {
} /* Universal selector */

/* Combinators */
div p {
} /* Descendant - all p inside div */
div > p {
} /* Child - direct p children of div */
h1 + p {
} /* Adjacent sibling - p immediately after h1 */
h1 ~ p {
} /* General sibling - all p after h1 */

/* Attribute Selectors */
input[type="text"] {
}
a[href^="https"] {
} /* Starts with */
a[href$=".pdf"] {
} /* Ends with */
a[href*="example"] {
} /* Contains */

/* Pseudo-classes */
:hover {
} /* Mouse over */
:active {
} /* Being clicked */
:focus {
} /* Focused element */
:first-child {
} /* First child */
:last-child {
} /* Last child */
:nth-child(2) {
} /* Specific child */
:nth-child(odd) {
} /* Odd children */
:nth-child(even) {
} /* Even children */
:not(.class) {
} /* Not having class */

/* Pseudo-elements */
::before {
} /* Insert content before */
::after {
} /* Insert content after */
::first-line {
} /* Style first line */
::first-letter {
} /* Style first letter */
::selection {
} /* Selected text */
```

## Box Model - CRITICAL

```css
.element {
  width: 300px;
  height: 200px;
  padding: 20px; /* Space inside border */
  border: 2px solid black; /* Border around */
  margin: 10px; /* Space outside border */

  /* Total width = width + padding + border */
  /* Total height = height + padding + border */

  /* Box-sizing fixes this */
  box-sizing: border-box; /* Width/height INCLUDES padding & border */
  box-sizing: content-box; /* Default - adds padding & border */
}
```

## Display Property

```css
.block {
  display: block; /* Full width, starts new line */
  /* Examples: div, p, h1-h6, section */
}

.inline {
  display: inline; /* Only content width, no width/height */
  /* Examples: span, a, strong */
}

.inline-block {
  display: inline-block; /* Inline but with width/height */
}

.flex {
  display: flex; /* Flexbox layout */
}

.grid {
  display: grid; /* CSS Grid layout */
}

.none {
  display: none; /* Completely removed */
}
```

## Position Property

```css
.static {
  position: static; /* Default - normal flow */
}

.relative {
  position: relative; /* Relative to normal position */
  top: 10px;
  left: 20px;
}

.absolute {
  position: absolute; /* Relative to nearest positioned ancestor */
  top: 0;
  right: 0;
}

.fixed {
  position: fixed; /* Relative to viewport - stays on scroll */
  bottom: 0;
  left: 0;
}

.sticky {
  position: sticky; /* Scrolls until sticky point */
  top: 0;
}

/* Z-index controls stacking order */
.overlay {
  z-index: 100;
}
```

## Flexbox - Layout Master

```css
.container {
  display: flex;
  flex-direction: row; /* row, row-reverse, column, column-reverse */
  justify-content: center; /* Main axis: flex-start, center, flex-end, space-between, space-around, space-evenly */
  align-items: center; /* Cross axis: stretch, flex-start, center, flex-end, baseline */
  flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
  gap: 10px; /* Space between items */
}

.item {
  flex: 1; /* shorthand for flex-grow, flex-shrink, flex-basis */
  flex-grow: 1; /* Can grow if space available */
  flex-shrink: 1; /* Can shrink if needed */
  flex-basis: 100px; /* Initial size */
  align-self: flex-start; /* Override align-items for single item */
  order: 2; /* Change display order */
}
```

## CSS Grid - Powerful Layout

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Fraction units */
  grid-template-rows: 100px auto 50px;
  gap: 20px; /* Space between items */

  /* Named areas */
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.item {
  grid-column: 1 / 3; /* Start at line 1, end at line 3 */
  grid-row: 1 / 2; /* Start at line 1, end at line 2 */
  grid-area: header; /* Use named area */

  /* Shorthand */
  grid-area: 1 / 1 / 2 / 3; /* row-start / col-start / row-end / col-end */
}
```

## Colors & Backgrounds

```css
.colors {
  /* Color formats */
  color: red; /* Named */
  color: #ff0000; /* Hex */
  color: rgb(255, 0, 0); /* RGB */
  color: rgba(255, 0, 0, 0.5); /* RGB with opacity */
  color: hsl(0, 100%, 50%); /* HSL */
  color: hsla(0, 100%, 50%, 0.5); /* HSL with opacity */

  /* Background */
  background-color: #f0f0f0;
  background-image: url("image.jpg");
  background-repeat: no-repeat; /* repeat, repeat-x, repeat-y */
  background-position: center; /* top, bottom, left, right, center */
  background-size: cover; /* cover, contain, auto */
  background-attachment: fixed; /* scroll, fixed */

  /* Shorthand */
  background: #f0f0f0 url("image.jpg") no-repeat center / cover;
}
```

## Typography & Text

```css
.text {
  font-family: Arial, sans-serif; /* Fallback fonts */
  font-size: 16px; /* px, em, rem, % */
  font-weight: normal; /* normal, bold, 100-900 */
  font-style: normal; /* normal, italic, oblique */
  line-height: 1.5; /* Unitless recommended */

  text-align: left; /* left, right, center, justify */
  text-decoration: none; /* underline, overline, line-through */
  text-transform: none; /* uppercase, lowercase, capitalize */

  letter-spacing: 1px;
  word-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* x-offset y-offset blur color */
}
```

## Spacing & Sizing

```css
.spacing {
  /* Margin - outside */
  margin: 10px; /* All sides */
  margin: 10px 20px; /* Top/Bottom, Left/Right */
  margin: 10px 20px 15px 5px; /* Top, Right, Bottom, Left */
  margin-top: 10px;

  /* Padding - inside */
  padding: 10px; /* Same patterns as margin */

  /* Auto margin for centering */
  margin: 0 auto; /* Center block elements */
}

.sizing {
  width: 100%;
  height: 100vh; /* Viewport height */
  min-width: 300px;
  max-width: 1200px;
  min-height: 200px;
}
```

## Borders & Shadows

```css
.borders {
  border: 2px solid #000; /* width style color */
  border-width: 1px 2px 3px 4px;
  border-style: solid; /* solid, dashed, dotted, double */
  border-color: red;
  border-radius: 10px; /* Rounded corners */
  border-radius: 50%; /* Circle */

  /* Individual sides */
  border-top: 1px solid #000;
  border-right: 2px dashed red;
}

.shadows {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3); /* x y blur color */
  box-shadow: inset 0 0 10px #000; /* Inner shadow */
  text-shadow: 1px 1px 2px black; /* Text shadow */
}
```

## Transitions & Transforms

```css
.transitions {
  transition: all 0.3s ease; /* property duration timing-function delay */
  transition: opacity 0.5s linear 0.2s;

  /* Individual properties */
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease; /* ease, linear, ease-in, ease-out, ease-in-out */
  transition-delay: 0.1s;
}

.transforms {
  transform: translateX(50px); /* Move */
  transform: translateY(-20px);
  transform: translate(50px, -20px);

  transform: rotate(45deg); /* Rotate */
  transform: scale(1.2); /* Scale */
  transform: scaleX(1.5); /* Scale X only */
  transform: skew(10deg); /* Skew */

  /* Multiple transforms */
  transform: translateX(50px) rotate(45deg) scale(1.2);
}

/* Hover effect example */
.button {
  transition: all 0.3s ease;
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

## Responsive Design - MUST KNOW

```css
/* Mobile First Approach */
.container {
  width: 100%; /* Mobile styles */
  padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    width: 750px;
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 970px;
  }
}

/* Common Breakpoints */
/* Small phones: < 576px */
/* Phones: 576px - 767px */
/* Tablets: 768px - 991px */
/* Desktops: 992px - 1199px */
/* Large: 1200px+ */

/* Orientation */
@media (orientation: landscape) {
  .container {
    height: 100vh;
  }
}
```

## CSS Units

```css
.units {
  /* Absolute */
  width: 300px; /* Pixels */

  /* Relative */
  width: 50%; /* Percentage of parent */
  width: 50vw; /* Viewport width */
  height: 100vh; /* Viewport height */
  font-size: 2em; /* Relative to parent font-size */
  font-size: 2rem; /* Relative to root font-size */

  /* Text relative */
  width: 10ch; /* Character width */
  width: 10ex; /* x-height */
}
```

## CSS Variables (Custom Properties)

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size: 16px;
  --spacing: 20px;
  --border-radius: 8px;
}

.element {
  color: var(--primary-color);
  font-size: var(--font-size);
  margin: var(--spacing);
  border-radius: var(--border-radius);

  /* Fallback value */
  background: var(--unknown-var, #f0f0f0);
}
```

## Common Patterns & Tricks

```css
/* Center element horizontally */
.center-h {
  margin: 0 auto;
}

/* Center element vertically & horizontally */
.center-vh {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Full screen section */
.full-screen {
  width: 100vw;
  height: 100vh;
}

/* Clearfix for floats */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* Visually hidden but accessible */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
```

## Specificity Hierarchy (Important!)

```
1. !important           (Wins everything)
2. Inline styles        (style="color: red")
3. ID selectors         (#id)
4. Class selectors      (.class, :hover, [type])
5. Element selectors    (div, p)
6. Universal selector   (*)
```

## CSS Reset (Common Starting Point)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  line-height: 1.5;
}

body {
  font-family: Arial, sans-serif;
}
```

---

**Key Principles**:

- **Mobile First**: Design for mobile, then enhance for larger screens
- **DRY**: Don't Repeat Yourself - use classes and variables
- **Specificity**: Understand the cascade and selector weight
- **Flexbox**: Use for 1D layouts (rows or columns)
- **Grid**: Use for 2D layouts (both rows and columns)
- **Responsive**: Always test on different screen sizes

**Practice Tip**: Build small components first (buttons, cards, navbars), then combine them into layouts!