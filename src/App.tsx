import { LanguagesGrid } from "@/components/LanguagesGrid";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">Programming Paradigms Table</h1>
          <p className="text-slate-400 text-lg">Explore programming paradigms and languages.</p>
        </header>

        <LanguagesGrid />

        <footer className="text-center text-slate-600 text-sm mt-12">
          Built with React + Tailwind + Vite
        </footer>
      </div>
    </main>
  );
}
