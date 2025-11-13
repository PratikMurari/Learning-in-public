# Sass Vs Scss

Sass and SCSS are two syntaxes of the same Sass preprocessor: SCSS uses CSS-like braces and semicolons, while the original indented Sass syntax relies on indentation and newlines; both provide identical features and compile to the same CSS.​

SCSS is a superset of CSS and is the most widely used today, whereas the indented Sass syntax is older and less common.

- Documentation: https://sass-lang.com/guide/

## What they are

- Sass is a CSS preprocessor that adds variables, nesting, mixins, and functions to streamline styling across projects.

- Sass can be written in two syntaxes, SCSS (.scss) and the indented Sass syntax (.sass) that are feature-equivalent and compile to identical CSS output.

## Key differences

| Aspect            | SCSS (.scss)                                  | Sass (indented) (.sass)                            |
| ----------------- | --------------------------------------------- | -------------------------------------------------- |
| Syntax            | CSS-like with braces and semicolons.          | Indentation and newlines; no braces or semicolons. |
| CSS compatibility | Superset of CSS; any valid CSS is valid SCSS. | Different syntax; not a direct superset of CSS.    |
| Adoption          | Most commonly used today.                     | Original/older syntax; less common now.            |
| Features          | Same Sass features; compiles to CSS.          | Same Sass features; compiles to CSS.               |

## Which to choose

- Choose SCSS if you want an easy transition from plain CSS, smoother team onboarding, and alignment with most modern docs and examples.

- Choose the indented Sass syntax if you prefer a minimal, whitespace driven style and don’t mind diverging from vanilla CSS syntax.

## Quick example

Below are minimal examples to illustrate the syntactic differences.

**SCSS**

```scss
$primary: #0aa;
.button {
  color: $primary;
  &:hover {
    color: darken($primary, 10%);
  }
}
```

**SASS**

```scss
$primary: #0aa
.button
  color: $primary
  &:hover
    color: darken($primary, 10%)
```

## Bottom line

Functionally, there is no feature difference, only syntax. Choose the style your team reads and maintains best; SCSS is the default for most modern projects.​
