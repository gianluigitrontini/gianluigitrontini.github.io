---
name: "EntreLibros"
repoName: "entrelibros"
description: "Find new adventures on paper; Recommend your favorite book to your friends; Do you remember that one they told you about? All this... and more!"
image: "/images/projects/entrelibros-banner.png"
logo: "/images/projects/logos/entrelibros-logo.png"
status: "Active"
linkToProject: "https://entrelibros.net"
hidden: false
tech_stack: ["html", "css", "tailwind", "twig", "javascript", "git"]
type: "Web Application"
date: "2022-01-01"
year_label: "2022"
---

# Entrelibros

Entrelibros is Spanish alternative to Goodreads. Here you can find a lot of reviews about books, and you can even submit your own.

The project was built using Symfony, and the frontend relies on Twig - a PHP template engine. For styling, we used SCSS and Tailwind.

At first, when I was handed the project, most of the UI Elements were already built by my colleague Elena. However, important features were missing and the layout was not responsive.

One of the first things I focused on was building the Carousel for showing all the new book in specific categories in the Homepage. I relied on a library for the scroll-on-the-X-axis gestures. I made the distinction of what can be hovered and what can't. On mobile, the title and the author, were placed below the book cover. On desktop, it appears while hovering.

![Entrelibros](https://github.com/gianluigitrontini/preview-images/blob/main/entrelibros-overview-github.jpg?raw=true)

Also the book/author page had to be designed and developed from scratch.
