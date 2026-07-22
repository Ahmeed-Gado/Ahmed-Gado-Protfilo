# AI Agent Portfolio Assistant (Chatbot)

This directory contains the code for a modern, dark-themed floating AI Chatbot designed specifically for a developer's portfolio website.

## 🚀 Features

*   **Interactive Assistant**: Greets visitors and answers questions intelligently.
*   **Professional Engineering Profile**: Pre-configured with a system prompt that highlights AI Engineering, IoT development, and full-stack software development.
*   **Next.js App Router API**: Secure backend `/api/chat/route.ts` that safely communicates with OpenAI without exposing your API keys.
*   **Auto-Scroll & Typing Indicator**: Feels like a real chat experience.
*   **Clickable Links**: The assistant can drop links to GitHub or live deployed apps, and they are automatically rendered as clickable hyperlinks.

## 🛠️ How to Integrate into an Existing Project

1.  **Copy the Component**:
    Copy `src/components/Chatbot.tsx` into your project's `components` directory.
2.  **Copy the API Route**:
    Copy `src/app/api/chat/route.ts` into your project at `app/api/chat/route.ts` (if using Next.js App Router).
3.  **Embed in Layout**:
    In your `app/layout.tsx` (or `pages/_app.tsx`), import and drop the `<Chatbot />` component so it persists across all pages.
    ```tsx
    import Chatbot from "@/components/Chatbot";
    // ... inside the body tag
    <Chatbot />
    ```

## 🔑 Setting up the API Key

The chatbot connects to OpenAI's GPT models.
1.  Create a file named `.env.local` at the root of your project.
2.  Add your OpenAI API key:
    ```
    OPENAI_API_KEY=sk-xxxx...
    ```
*(Note: If the key is missing, the chatbot gracefully falls back to a "Demo Mode" and simulates a response).*

## ✍️ Updating Your Skills & Projects

When you build new projects or learn new skills, you should teach your AI assistant about them!
Open `src/app/api/chat/route.ts` and modify the `SYSTEM_PROMPT` variable at the top of the file:

```typescript
export const SYSTEM_PROMPT = `
You are Ahmeed's AI Assistant...
...
2. Answer questions about his projects (NEW PROJECT 1, NEW PROJECT 2), skills (NEW SKILL), and experience.
`;
```

## 🎨 Customizing the Design

The Chatbot is built with **Tailwind CSS**. To change colors, find the `bg-indigo-600` classes in `Chatbot.tsx` and switch them to match your portfolio's accent color (e.g., `emerald-500`, `rose-600`).
