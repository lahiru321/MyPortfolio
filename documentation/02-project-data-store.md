# Step 2: Centralizing Project Data

In this step, I've moved your project information out of the UI component and into a dedicated data file. This is a critical step in professional web development that separates "data" from "logic."

## Actions Taken

1. Created a new directory: `constants/`
2. Created a new file: `constants/projects-data.ts`
3. Moved all hardcoded projects from `projects.tsx` into this new file.

## Why this is better

- **Zero Hardcoding**: You no longer need to find specific lines in a large TSX file to add or edit a project.
- **Simplified Styling**: Notice that we removed the hex codes and complex Tailwind strings. We simply say `theme: "cyan"`. This makes it incredibly easy to experiment with different looks without touching CSS.
- **Maintainability**: This file can now be used in other parts of your site if needed (e.g., a "latest project" widget on the homepage).

## Data Store Preview

```typescript
{
    title: "E-commerce Gaming Site",
    description: "...",
    techStack: ["Next.js", "Superbase", "Cryptomus", "Spline"],
    liveUrl: "https://...",
    githubUrl: "https://...",
    theme: "cyan",
}
```
