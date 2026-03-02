# Step 1: Defining Project Types and Structure

In this step, I am setting up a formal structure for your projects. Instead of using raw objects, we are defining exactly what data a project should contain. This makes the code more robust and easier to maintain.

## Actions Taken

1. Created a new directory: `types/`
2. Created a new file: `types/project.ts`

## Why this is better

- **Type Safety**: If you forget to add a `title` or `techStack` to a project later, the code will warn you immediately.
- **Theme Standardization**: We define a set of allowed themes (e.g., 'blue', 'purple', 'emerald'). The website will then know exactly how to style these without you having to write complex CSS/Tailwind strings every time.

## Type Definition Preview

```typescript
export type ProjectTheme = "blue" | "purple" | "emerald" | "orange" | "rose";

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  theme: ProjectTheme;
}
```
