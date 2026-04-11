# Chapter One | Online Bookstore

## About
Project: Chapter One – Independent Bookstore Website
Course: Web Development
Students: Alessandra Spino, Denise Trimm

## Project Scope & Vision

### Purpose
Chapter One is meant to feel like an online version of a small, independent bookstore. The goal is to let users browse a curated selection of books in a way that's simple, clean, and enjoyable, while also giving a basic idea of how an online shopping experience works.

### Mission
Chapter One's mission is to create a warm and welcoming space where people can discover new books, revisit familiar favourites, and browse a carefuly curated selection. The focus is on thoughtful curation, ease of use, and making the experience feel approachable.

### Target Audience
This website is designed for:
- People who enjoy reading
- Readers looking for book recommendations
- Anyone interested in discovering a mix of popular titles and lesser-known books
- Those who appreciate independent bookstores and curated selections

### Goals
The main goals of this project are to:
- Create a simple and easy-to-use interface for browsing books
- Ensure the website follows accessibility guidelines (color contrast, semantic HTML, keyboard navigation, etc.)
- Keep the design consistent across both light and dark modes
- Simulate basic e-commerce features like filtering and adding items to a card
- Build a layout that works well across different screen sizes

### Scope
This project includes:
- Multiple pages (Home, Books, Cart, About, Contact)
- A book catalogue (JavaScript)
- A filtering system based on book genre
- A basic cart system where users can add/delete items
- A simple way to access light mode and dark mode
- A simple way to switch language (English and French)
- A responsive layout built with SCSS, Flexbox, and Grid
- Accessibility features (HTML, ARIA attributes, and keyboard navigation)

## Project Structure
```
web-dev-team-project/
├── .git/
├── .gitignore
├── .vscode/
├── AI_USAGE_REPORT.md
├── LICENSE
├── README.md
├── wireframes.pdf
├── css/
│   └── main.css
├── sass/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _layout.scss
│   ├── _components.scss
│   └── main.scss
├── js/
│   ├── script.js
│   ├── data.js
│   └── labels.js
├── en/
│   ├── index.html
│   ├── books.html
│   ├── about.html
│   ├── cart.html
│   └── contact.html
├── fr/
│   ├── index.html
│   ├── books.html
│   ├── about.html
│   ├── cart.html
│   └── contact.html
├── images/
└── media/

```
<!-- TODO - Maybe remove media folder as it is unused -->
## Wireframes
Basic balsamiq wireframes can be found [here](wireframes.pdf).
---

## Collaboration Summary
This project was completed collaboratively, with both team members contributing to the design, development, and refinement of the website.

Responsibilities were shared across key areas, including HTML structure, SCSS styling, and JavaScript functionality. Roles were assigned based on individual strengths and familiarity with different tools. For example, one member focused more on the JavaScript logic and dynamic rendering of content, while the other focused more on layout, styling, and accessibility. Both members contributed to the overall structure and design decisions to ensure consistency across the project.

Throughout the process, we regularly communicated to ensure consistency in design and functionality. Changes were discussed before being implemented, and feedback was shared to improve both the visual design and overall user experience.

Version control (GitHub) was used throughout the project to manage updates, track changes, and maintain a clear commit history. This allowed us to review each other’s work, make adjustments when needed, and maintain a consistent structure across the project.

Overall, the collaboration was cooperative, with both members contributing to the final result while focusing on different aspects of the project, such as functionality, layout, styling, and accessibility.

---

## SASS installation for development
1. Ensure SASS is installed `npm install -g sass`
2. Compile SASS to CSS and watch for changes `sass sass/main.scss css/main.css --watch`



