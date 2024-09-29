
# GhostCMS Custom Theme Project

Welcome to the **GhostCMS Custom Theme Project**! This project is designed to create a responsive, dark mode compatible, and highly customizable theme for GhostCMS with a micro-blogging feature. The theme is tailored to have modern, sleek aesthetics with social media integrations, dark mode, dynamic navigation, and more.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Mermaid-based Architecture Diagram](#mermaid-based-architecture-diagram)
- [Dark Mode Implementation](#dark-mode-implementation)
- [How to Install and Run](#how-to-install-and-run)
- [Customization Guide](#customization-guide)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
The project integrates a responsive and minimalistic design with GhostCMS that includes:
- A micro-blogging feature similar to Twitter.
- Dynamic dark mode toggle that enhances user experience.
- Integration with social media links (Facebook, Twitter, RSS) in both the navbar and footer.

## Features
- **Micro-Blogging**: Posts tagged with #micro are displayed in a concise, tweet-like format.
- **Dark Mode**: Users can toggle between light and dark themes, and their preference is saved.
- **Responsive Design**: Adapts seamlessly to different screen sizes.
- **Social Media Integration**: Links to Facebook, Twitter, and RSS are integrated in the header and footer.
- **Customization**: Easily adaptable for different color schemes, layouts, and components.

## Project Structure
The project is organized as follows:
\`\`\`
.
├── assets
│   ├── built
│   │   ├── index.css
│   │   └── index.js
│   ├── css
│   │   ├── theme
│   │   │   ├── dark-mode-toggle.css
│   │   │   ├── footer.css
│   │   │   ├── global.css
│   │   │   ├── icons.css
│   │   │   └── readmore.css
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
\`\`\`

## Mermaid-based Architecture Diagram

The following Mermaid diagram provides a visual representation of the theme's architecture and interactions:

\`\`\`mermaid
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
\`\`\`

## Dark Mode Implementation
The dark mode feature is implemented using a combination of JavaScript and CSS. It toggles the `dark-mode` class on the HTML element, which then changes the appearance of various elements across the page.

Key Files:
- **JavaScript**: `assets/js/dark-mode-toggle.js`
- **CSS**: `assets/css/theme/dark-mode-toggle.css`

## How to Install and Run
1. Clone the repository:
    \`\`\`bash
    git clone https://github.com/yourusername/ghostcms-custom-theme.git
    \`\`\`
2. Navigate to your Ghost CMS theme directory and copy the theme folder.
3. Activate the theme from the Ghost admin panel.

## Customization Guide
- **Icons**: Replace SVG files located in `partials/icons/` to change social media icons.
- **Colors**: Modify color variables in `assets/css/theme/` files.
- **Fonts**: Update the `global.css` to include custom fonts.

## Contributing
We welcome contributions! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
