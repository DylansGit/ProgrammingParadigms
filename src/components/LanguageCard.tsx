import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { extendedFacts } from "@/data/coolFacts";
import type { Paradigm, Language } from "@/data/languages";
import { paradigmExplanations } from "@/data/paradigmExplanations";
import { coreAttributesByLanguage } from "@/data/coreAttributes";
import { codeSnippets } from "@/data/codeSnippets";

interface LanguageCardProps {
  language: Language; // Type for the language info passed to the card
}

// Animation variants for the floating info bubbles
const bubbleVariants = {
  hidden: { opacity: 0, scale: 0 },  // Bubble starts invisible and scaled down
  visible: { opacity: 1, scale: 1 }, // Bubble fully visible and normal scale
};

export function LanguageCard({ language }: LanguageCardProps) {
  // Fetch code snippet data for the language or fallback example snippet
  const snippet = codeSnippets[language.name] || {
    problem: "No example problem available",
    code: `// Example ${language.name} snippet
function greet() {
  console.log("Hello from ${language.name}!");
}`
  };

  // State for overall card hover
  const [isCardHovered, setIsCardHovered] = useState(false);

  // State tracking which paradigm badge (if any) is hovered
  const [hoveredParadigm, setHoveredParadigm] = useState<Paradigm | null>(null);

  // Position info for paradigm bubble relative to card container
  // Also tracks if bubble should appear on left or right side of badge
  const [hoveredParadigmPos, setHoveredParadigmPos] = useState<{ x: number; y: number; side: "left" | "right" } | null>(null);

  // Toggles for showing core attributes and code snippet sections
  const [showCoreAttributes, setShowCoreAttributes] = useState(false);
  const [showCodeSnippet, setShowCodeSnippet] = useState(false);

  const bubbleCount = 5; // Number of bubbles shown below card
  const cardRef = useRef<HTMLDivElement>(null); // Ref to card div for positioning calculations

  // When mouse enters card area, set hovered state only if no badge is hovered
  const handleCardPointerEnter = () => {
    if (!hoveredParadigm) setIsCardHovered(true);
  };

  // When mouse leaves card, remove hover state
  const handleCardPointerLeave = () => setIsCardHovered(false);

  // When mouse enters a paradigm badge:
  // - Set hovered paradigm state
  // - Disable card hover to avoid conflicting bubbles
  // - Calculate badge's center position relative to card container
  // - Decide if bubble should appear to left or right of badge
  const handleBadgePointerEnter = (p: Paradigm, e: React.PointerEvent<HTMLDivElement>) => {
    setHoveredParadigm(p);

    if (cardRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const badgeRect = e.currentTarget.getBoundingClientRect();

      // Center position of badge relative to card container top-left corner
      const xCenter = badgeRect.left + badgeRect.width / 2 - cardRect.left;
      const yCenter = badgeRect.top + badgeRect.height / 2 - cardRect.top;

      // Show bubble on the opposite side of the badge’s horizontal position
      const side = xCenter < cardRect.width / 2 ? "right" : "left";

      setHoveredParadigmPos({ x: xCenter, y: yCenter, side });
    }

    setIsCardHovered(false); // Disable card hover bubbles when badge is hovered
  };

  // When mouse leaves badge, clear paradigm hover and position
  const handleBadgePointerLeave = () => {
    setHoveredParadigm(null);
    setHoveredParadigmPos(null);
  };

  // Get core attribute data for current language or default placeholders
  const coreAttributes = coreAttributesByLanguage[language.name] || {
    memoryModel: "N/A",
    compilationModel: "N/A",
    runtimeEnvironment: "N/A",
    typicalUseCases: [],
    executionModel: "N/A",
    abstractionLevel: "N/A",
  };

  // Basic fallback example snippet text if none exists in codeSnippets
  const exampleCodeSnippet = `// Example ${language.name} snippet
function greet() {
  console.log("Hello from ${language.name}!");
}`;

  return (
    <>
      {/* Main card container */}
      <motion.div
        ref={cardRef}
        onPointerEnter={handleCardPointerEnter}
        onPointerLeave={handleCardPointerLeave}
        className="relative bg-slate-800 rounded-xl p-6 shadow-lg cursor-pointer"
        initial={{ opacity: 0, y: 20 }} // Animate from below with opacity 0
        animate={{ opacity: 1, y: 0, scale: isCardHovered ? 1.05 : 1 }} // Scale up on hover
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        layout // Animate layout changes smoothly
      >
        {/* Language name with external link, stopping event bubbling so card doesn’t unhover */}
        <h2 className="text-xl font-bold text-blue-400 hover:underline">
          <a
            href={language.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {language.name}
          </a>
        </h2>

        {/* Language year and description */}
        <p className="text-slate-400 mb-2 italic">Since {language.year}</p>
        <p className="text-slate-300">{language.description}</p>

        {/* Paradigm badges */}
        <div className="flex flex-wrap gap-3 mt-4">
          {language.paradigms.map((p: Paradigm) => (
            <div
              key={p}
              className="relative bg-green-600 rounded-full px-4 py-1 text-xs font-semibold cursor-help"
              onPointerEnter={(e) => handleBadgePointerEnter(p, e)}
              onPointerLeave={handleBadgePointerLeave}
            >
              {p}
            </div>
          ))}
        </div>

        {/* Toggle buttons for core attributes and code snippet */}
        <div className="mt-6 flex gap-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded"
            onClick={() => setShowCoreAttributes(!showCoreAttributes)}
          >
            {showCoreAttributes ? "Hide Core Attributes" : "Show Core Attributes"}
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded"
            onClick={() => setShowCodeSnippet(!showCodeSnippet)}
          >
            {showCodeSnippet ? "Hide Example Code" : "Show Example Code"}
          </button>
        </div>

        {/* Core attributes section, wider than card content with horizontal negative margins */}
        <AnimatePresence>
          {showCoreAttributes && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 overflow-hidden bg-gray-900 rounded p-4 text-sm text-slate-300 space-y-2"
              style={{
                width: "calc(100% + 3rem)",  // make box wider than padded card content
                marginLeft: "-1.5rem",        // shift left edge outside card padding
                marginRight: "-1.5rem",       // shift right edge outside card padding
                maxWidth: "600px",            // prevent extreme wide on large screens
              }}
            >
              <p><strong>Memory Model:</strong> {coreAttributes.memoryModel}</p>
              <p><strong>Compilation Model:</strong> {coreAttributes.compilationModel}</p>
              <p><strong>Runtime Environment:</strong> {coreAttributes.runtimeEnvironment}</p>
              <p><strong>Typical Use Cases:</strong> {coreAttributes.typicalUseCases.join(", ")}</p>
              <p><strong>Execution Model:</strong> {coreAttributes.executionModel}</p>
              <p><strong>Abstraction Level:</strong> {coreAttributes.abstractionLevel}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Code snippet section with problem description and code block */}
        <AnimatePresence>
          {showCodeSnippet && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 bg-gray-900 rounded p-4 text-xs font-mono text-green-400 whitespace-pre-wrap overflow-x-auto"
            >
              <h4 className="mb-2 font-semibold">{snippet.problem}</h4>
              <pre>{snippet.code}</pre>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating info bubbles below the card, shown only when card hovered but no paradigm hovered */}
      <AnimatePresence>
        {isCardHovered && !hoveredParadigm && (
          <motion.div
            className="absolute flex gap-4 mt-2 left-0 right-0 justify-center"
            style={{
              bottom: "-120px",
              pointerEvents: "none", // prevent mouse events so bubbles don't interfere
              zIndex: 1000,
              transition: "bottom 0.3s ease",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            {Array.from({ length: bubbleCount }).map((_, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate={{
                  ...bubbleVariants.visible,
                  y: [0, -6, 0, 6, 0], // vertical floating animation for subtle life
                }}
                exit="hidden"
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
                className="bg-gradient-to-tr from-green-600 to-blue-500 text-white rounded-lg shadow-lg text-sm font-semibold select-none p-4 max-w-[280px] min-w-[200px]"
              >
                {extendedFacts[language.name]?.[i] || "Interesting fact coming soon!"}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Paradigm info bubble positioned to left or right of hovered badge */}
      <AnimatePresence>
        {hoveredParadigm && hoveredParadigmPos && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: hoveredParadigmPos.y,
              left: hoveredParadigmPos.side === "right" ? hoveredParadigmPos.x + 20 : "auto",
              right: hoveredParadigmPos.side === "left" ? `calc(100% - ${hoveredParadigmPos.x}px + 20px)` : "auto",
              transform: "translateY(-50%)",
              pointerEvents: "auto", // allow interaction inside bubble
              zIndex: 9999,
              width: "700px",          // wide for multi-column info layout
              background: "linear-gradient(135deg, #000000cc, #222222ee)",
              padding: "1rem 2rem",
              borderRadius: "0.75rem",
              color: "white",
              fontSize: "0.875rem",
              fontWeight: 600,
              boxShadow: "0 10px 15px rgba(0,0,0,0.7), 0 4px 6px rgba(0,0,0,0.6)",
              userSelect: "none",      // prevent text selection to avoid flicker
              display: "flex",         // horizontal layout with wrapping
              flexWrap: "wrap",
              gap: "1.5rem",
              overflow: "hidden",      // no scroll, rely on good text wrapping
            }}
            className="select-none"
          >
            {/* Left column: Name & Description */}
            <div style={{ flex: "1 1 45%", minWidth: 300 }}>
              <h4 className="font-bold mb-3 text-lg">{paradigmExplanations[hoveredParadigm].name}</h4>
              <p className="mb-4">{paradigmExplanations[hoveredParadigm].description}</p>
            </div>

            {/* Right columns grid: Core Concepts, Pros, Cons, Example Languages */}
            <div
              style={{
                flex: "1 1 50%",
                minWidth: 320,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              <div>
                <strong>Core Concepts:</strong>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  {paradigmExplanations[hoveredParadigm].coreConcepts.map((concept, i) => (
                    <li key={i}>{concept}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong>Pros:</strong>
                <ul className="list-disc list-inside mt-1 space-y-1 text-green-300">
                  {paradigmExplanations[hoveredParadigm].pros.map((pro, i) => (
                    <li key={i}>{pro}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong>Cons:</strong>
                <ul className="list-disc list-inside mt-1 space-y-1 text-red-400">
                  {paradigmExplanations[hoveredParadigm].cons.map((con, i) => (
                    <li key={i}>{con}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong>Example Languages:</strong>
                <p className="mt-1">{paradigmExplanations[hoveredParadigm].exampleLanguages.join(", ")}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
