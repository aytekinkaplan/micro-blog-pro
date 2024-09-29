# GhostCMS Custom Theme Project

## Overview

Welcome to the GhostCMS Custom Theme Project! This project aims to create a responsive, dark mode compatible, and highly customizable theme for GhostCMS with a micro-blogging feature. The theme boasts modern, sleek aesthetics with social media integrations, dynamic navigation, and more.

## Table of Contents

-   [Features](#features)
-   [Project Structure](#project-structure)
-   [Architecture Diagram](#architecture-diagram)
-   [Dark Mode Implementation](#dark-mode-implementation)
-   [Installation](#installation)
-   [Customization Guide](#customization-guide)
-   [Contributing](#contributing)
-   [License](#license)

## Features

-   **Micro-Blogging**: Posts tagged with #micro are displayed in a concise, tweet-like format.
-   **Dark Mode**: Users can toggle between light and dark themes, with preferences saved.
-   **Responsive Design**: Seamlessly adapts to different screen sizes.
-   **Social Media Integration**: Facebook, Twitter, and RSS links in both header and footer.
-   **Customization**: Easily adaptable for various color schemes, layouts, and components.

## Project Structure

```
.
├── assets
│   ├── built
│   │   ├── index.css
│   │   └── index.js
│   ├── css
│   │   └── theme
│   │       ├── dark-mode-toggle.css
│   │       ├── footer.css
│   │       ├── global.css
│   │       ├── icons.css
│   │       └── readmore.css
│   └── js
│       ├── dark-mode-toggle.js
│       └── index.js
├── partials
│   ├── icons
│   │   ├── facebook.hbs
│   │   ├── twitter.hbs
│   │   └── rss.hbs
│   ├── micro-card.hbs
│   └── card.hbs
├── layouts
│   ├── default.hbs
│   ├── index.hbs
│   └── post.hbs
└── README.md
```

## Architecture Diagram

The following Mermaid diagram illustrates the theme's architecture and interactions:

<antArtifact identifier="theme-architecture-diagram" type="application/vnd.ant.mermaid" title="Theme Architecture Diagram">
graph TD;
    A[Header/Navbar] -->|Contains| B[Dark Mode Toggle];
    A -->|Contains| C[RSS Icon];
    B -->|Toggles| D[Dark Mode Styles];
    C -->|Links to| E[RSS Feed];
    D -->|Applies to| F[Content Area];
    F -->|Contains| G[Micro Blog Cards];
    F -->|Contains| H[Regular Blog Cards];
    F -->|Adapts to| I[Footer with Social Icons];
    I -->|Contains| J[Twitter Icon];
    I -->|Contains| K[Facebook Icon];
