# HTML Cheatsheet for Front-End Developers

## Document Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Title</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

## Basic Tags

```html
<h1>
  to
  <h6>
    <!-- Headings (h1 largest, h6 smallest) -->
    <p>
      <!-- Paragraph -->
      <br />
      <!-- Line break (self-closing) -->
    </p>

    <hr />
    <!-- Horizontal rule (self-closing) -->
    <!-- Comment -->
    <!-- HTML comment -->
  </h6>
</h1>
```

## Text Formatting

```html
<strong>Bold</strong> or <b>Bold</b> <em>Italic</em> or <i>Italic</i>
<u>Underline</u>
<mark>Highlighted</mark>
<small>Small text</small>
<del>Deleted text</del>
<ins>Inserted text</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>
```

## Links & Navigation

```html
<a href="url">Link Text</a>
<a href="#section-id">Jump to section</a>
<a href="mailto:email@example.com">Send Email</a>
<a href="tel:+1234567890">Call Us</a>
<a href="page.html" target="_blank">Open in new tab</a>
```

## Lists

```html
<!-- Unordered List -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>

<!-- Description List -->
<dl>
  <dt>Term</dt>
  <dd>Description</dd>
</dl>
```

## Images

```html
<img src="image.jpg" alt="Description" width="300" height="200" />
<img src="image.jpg" alt="Description" loading="lazy" />
<!-- Lazy loading -->
```

## Tables

```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
    </tr>
  </tfoot>
</table>
```

## Forms

```html
<form action="/submit" method="POST">
  <!-- Text Input -->
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <!-- Email -->
  <input type="email" name="email" placeholder="Enter email" />

  <!-- Password -->
  <input type="password" name="password" />

  <!-- Number -->
  <input type="number" name="age" min="1" max="100" />

  <!-- Date -->
  <input type="date" name="birthdate" />

  <!-- Checkbox -->
  <input type="checkbox" id="subscribe" name="subscribe" />
  <label for="subscribe">Subscribe</label>

  <!-- Radio Buttons -->
  <input type="radio" id="male" name="gender" value="male" />
  <label for="male">Male</label>

  <!-- Dropdown -->
  <select name="country">
    <option value="us">United States</option>
    <option value="ca">Canada</option>
  </select>

  <!-- Textarea -->
  <textarea name="message" rows="4" cols="50"></textarea>

  <!-- File Upload -->
  <input type="file" name="file" />

  <!-- Submit Button -->
  <input type="submit" value="Submit" />
  <button type="submit">Submit</button>
</form>
```

## Semantic HTML5

```html
<header>
  <!-- Site header -->
  <nav>
    <!-- Navigation menu -->
    <main>
      <!-- Main content -->
      <section>
        <!-- Thematic grouping -->
        <article>
          <!-- Self-contained content -->
          <aside>
            <!-- Sidebar content -->
            <footer>
              <!-- Site footer -->
              <figure>
                <!-- Images, diagrams -->
                <figcaption>
                  <!-- Figure caption -->
                  <time> <!-- Date/time --></time>
                </figcaption>
              </figure>
            </footer>
          </aside>
        </article>
      </section>
    </main>
  </nav>
</header>
```

## Media Elements

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
</audio>

<video controls width="400">
  <source src="video.mp4" type="video/mp4" />
</video>

<iframe src="https://example.com" width="300" height="200"></iframe>
```

## Div & Span

```html
<div>Block-level container</div>
<span>Inline container</span>
```

## Global Attributes

```html
<div id="unique-id"></div>
<!-- Unique identifier -->
<div class="class-name"></div>
<!-- CSS class -->
<div style="color: red;"></div>
<!-- Inline styles -->
<div data-custom="value"></div>
<!-- Custom data attributes -->
<div title="Tooltip text"></div>
<!-- Tooltip -->
<div hidden></div>
<!-- Hide element -->
<div contenteditable="true"></div>
<!-- Editable content -->
```

## Meta Tags (for head section)

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Page description" />
<meta name="keywords" content="HTML, CSS, JavaScript" />
<meta name="author" content="Author Name" />
```

## Common Character Entities

```html
&nbsp;
<!-- Non-breaking space -->
&lt;
<!-- Less than < -->
&gt;
<!-- Greater than > -->
&amp;
<!-- Ampersand & -->
&copy;
<!-- Copyright © -->
&reg;
<!-- Registered trademark ® -->
```

## Quick Tips

- Always include `alt` attribute in images for accessibility
- Use semantic HTML for better SEO and accessibility
- `id` must be unique, `class` can be reused
- Forms need `name` attribute for data submission
- Use `required` attribute for form validation
- `target="_blank"` opens link in new tab

---

**Remember**: HTML provides structure, CSS adds styling, and JavaScript adds interactivity. Keep practicing and this will become second nature!
