# Programming Paradigms Interactive Map 🧠💻

This project is a visual, interactive reference for exploring programming languages and their associated paradigms. Designed to be both educational and aesthetic, it helps developers, students, and enthusiasts understand how different languages relate to major programming paradigms like Functional, Object-Oriented, Declarative, Logic-based, Procedural, and more.

---

## ✨ Features

- 🧩 **Interactive language cards** with paradigm badges
- 🧭 **Hover tooltips** showing language details and paradigm descriptions
- 🌀 **Animated UI** using Framer Motion
- 🖼️ **Modern grid layout** with Tailwind CSS
- 📚 **Expandable structure** for adding new languages or paradigms
- 🌐 **Deployable to GitHub Pages**

---

## 🧱 Tech Stack

- **Frontend**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Language**: TypeScript (`.tsx`)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Hosting**: GitHub Pages (optional)

---

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/programming-paradigms.git
cd programming-paradigms
2. Install dependencies

npm install
3. Run the development server

npm run dev
App will be live at http://localhost:5173

🗂️ Folder Structure

/src
  /components
    Table.tsx         → Renders the interactive language grid
    LanguageCard.tsx  → Displays each language with paradigms
    Tooltip.tsx       → Shows hover-based popups
  /data
    languages.ts      → Core language & paradigm mapping data
  /styles
    index.css         → Tailwind styles
main.tsx              → React entry point
App.tsx               → Root component
🌍 Deployment (GitHub Pages)
To deploy this project to GitHub Pages:

1. Update vite.config.ts

export default defineConfig({
  base: "/programming-paradigms/", // your repo name
  ...
});
2. Build and push

npm run build
npm run deploy
You can use vite-plugin-gh-pages or manually push the dist/ folder to a gh-pages branch.

🧠 Future Ideas
Group by paradigm (not just by language)

Add historical timelines

Search & filter bar

Drag-and-zoom visualization

Paradigm-focused detail popups

📄 License
MIT License.
Use freely for education and fun. Contributions welcome.

🙌 Built by Dylan Singer
Passionate about programming, education, and clean UI.
Let me know if you learned something — or spotted a mistake!