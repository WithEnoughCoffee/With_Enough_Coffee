# With Enough Coffee ☕

Autumn Nash's personal blog — built with [Astro](https://astro.build/).

## Local Development

```bash
npm install
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production
npm run preview    # Preview production build
```

## Writing Posts

Add Markdown files to `posts/` with this frontmatter:

```markdown
---
title: Your Post Title
slug: your-post-slug
description: A short description of your post
tags:
  - tag1
  - tag2
added: "Feb 27 2026"
---

Your content here!
```

## Customization

- **Site title/subtitle**: `src/settings/settings.json`
- **About page**: `src/pages/about.md`
- **Navigation links**: `src/components/Header.astro`
- **Styling**: `src/style/`
- **Favicon & images**: `public/`