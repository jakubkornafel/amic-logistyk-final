# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for AMIC Logistyk featuring an AI chatbot interface. The project is a simple HTML/CSS/JavaScript website that embeds a third-party chatbot service.

## Project Structure

```
chatbot-website/
├── index.html      # Main HTML page with complete website structure
├── script.js       # JavaScript for smooth scrolling, navigation, and UI interactions
└── styles.css      # CSS with AMIC brand colors and responsive design
```

## Development Commands

This is a static website project that doesn't require build tools or package managers. To work with the project:

- **Local Development**: Open `chatbot-website/index.html` directly in a browser or serve via any HTTP server
- **Testing**: No automated tests are configured - manual testing via browser is used

## Architecture Notes

### Frontend Structure
- **Single Page Application**: All content is in one HTML file with section-based navigation
- **Embedded Chatbot**: Uses ChatLab.com iframe integration with API key `96bc7f2f-05ad-4db0-9aad-5f07d6e9e7f2`
- **Static Assets**: No external dependencies beyond the iframe embed

### Key Components
- **Navigation**: Smooth scrolling between sections (#home, #chat, #about)
- **Hero Section**: Gradient background showcasing AMIC branding
- **Chat Interface**: Full-width iframe embedding the chatbot service
- **Feature Cards**: Interactive hover effects for service descriptions

### Brand Identity
- **Color Palette**: Green (#8BC34A), Orange (#FF9800), Yellow (#FFC107), Red (#E53935)
- **Logo**: Circular design with four colored segments representing the brand colors
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px

### JavaScript Functionality
- Smooth scrolling navigation
- Active nav link highlighting based on scroll position
- Iframe loading states with fallback timeout
- Scroll-to-top button with dynamic visibility
- Feature card hover animations
- Mobile-responsive behavior detection