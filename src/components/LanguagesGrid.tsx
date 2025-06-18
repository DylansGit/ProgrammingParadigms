import { languages } from "@/data/languages";
import { LanguageCard } from "./LanguageCard";

export function LanguagesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-10 max-w-7xl mx-auto">
      {languages.map((language) => (
        <div key={language.name} className="relative"> {/* <-- Add this wrapper */}
          <LanguageCard language={language} />
        </div>
      ))}
    </div>
  );
}
