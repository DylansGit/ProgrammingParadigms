export type Paradigm = "OOP" | "FP" | "Procedural" | "Declarative" | "Logic";

export interface Language {
  name: string;
  year: number;
  paradigms: Paradigm[];
  link: string;
  description: string;
}

export const languages: Language[] = [
  {
    name: "JavaScript",
    year: 1995,
    paradigms: ["OOP", "FP", "Declarative"],
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description:
      "Created for interactive web pages, JavaScript evolved to support multiple paradigms including functional and declarative, powering the modern web and beyond."
  },
  {
    name: "Python",
    year: 1991,
    paradigms: ["OOP", "Procedural", "Declarative"],
    link: "https://www.python.org/",
    description:
      "Designed for readability and simplicity, Python's versatility and vast ecosystem made it a staple for everything from scripting to machine learning."
  },
  {
    name: "Java",
    year: 1995,
    paradigms: ["OOP", "Procedural"],
    link: "https://www.oracle.com/java/",
    description:
      "Invented to run anywhere on any device, Java brought the promise of platform independence and enterprise-level object-oriented design."
  },
  {
    name: "C",
    year: 1972,
    paradigms: ["Procedural"],
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    description:
      "A powerful low-level language designed for system programming and portability, foundational to many modern languages."
  },
  {
    name: "C++",
    year: 1985,
    paradigms: ["OOP", "Procedural"],
    link: "https://isocpp.org/",
    description:
      "An extension of C with object-oriented features, widely used for performance-critical applications like games and real-time systems."
  },
  {
    name: "C#",
    year: 2000,
    paradigms: ["OOP", "Declarative"],
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    description:
      "Microsoft’s language for the .NET framework, blending modern syntax, strong typing, and declarative programming for building Windows and web apps."
  },
  {
    name: "Ruby",
    year: 1995,
    paradigms: ["OOP", "FP", "Procedural"],
    link: "https://www.ruby-lang.org/",
    description:
      "Focused on developer happiness, Ruby emphasizes elegant syntax and metaprogramming, popularized by the Rails web framework."
  },
  {
    name: "Go",
    year: 2009,
    paradigms: ["Procedural"],
    link: "https://golang.org/",
    description:
      "Created by Google for simplicity and concurrency, Go is prized for its straightforward syntax and efficiency in networked services."
  },
  {
    name: "Rust",
    year: 2010,
    paradigms: ["OOP", "FP", "Procedural"],
    link: "https://www.rust-lang.org/",
    description:
      "Focused on safety and performance, Rust provides memory safety without garbage collection, making it ideal for systems programming."
  },
  {
    name: "Scala",
    year: 2004,
    paradigms: ["OOP", "FP"],
    link: "https://www.scala-lang.org/",
    description:
      "Runs on the JVM and combines functional and object-oriented paradigms, targeting scalable, concurrent systems."
  },
  {
    name: "Haskell",
    year: 1990,
    paradigms: ["FP"],
    link: "https://www.haskell.org/",
    description:
      "A pure functional language emphasizing immutability and strong static typing, widely used in academia and specialized applications."
  },
  {
    name: "Kotlin",
    year: 2011,
    paradigms: ["OOP", "FP"],
    link: "https://kotlinlang.org/",
    description:
      "Designed as a modern alternative for the JVM with null safety and concise syntax, Kotlin has become official for Android development."
  },
  {
    name: "TypeScript",
    year: 2012,
    paradigms: ["OOP", "FP", "Declarative"],
    link: "https://www.typescriptlang.org/",
    description:
      "A superset of JavaScript adding static types and modern features, enabling better tooling and large-scale application development."
  },
  {
    name: "Elixir",
    year: 2011,
    paradigms: ["FP"],
    link: "https://elixir-lang.org/",
    description:
      "Built on the Erlang VM, Elixir excels in fault-tolerant, distributed systems and real-time applications."
  },
  {
    name: "R",
    year: 1993,
    paradigms: ["Declarative"],
    link: "https://www.r-project.org/",
    description:
      "Specialized in statistical computing and data visualization, R is widely used by data scientists and statisticians."
  },
  {
    name: "Lua",
    year: 1993,
    paradigms: ["Procedural", "Declarative"],
    link: "https://www.lua.org/",
    description:
      "Lightweight and embeddable, Lua is popular in game development and embedded systems for scripting."
  },
  {
    name: "Dart",
    year: 2011,
    paradigms: ["OOP", "FP"],
    link: "https://dart.dev/",
    description:
      "Created by Google to build fast apps on multiple platforms, powering frameworks like Flutter."
  },
  {
    name: "Prolog",
    year: 1972,
    paradigms: ["Logic"],
    link: "https://en.wikipedia.org/wiki/Prolog",
    description:
      "A logic programming language focusing on rule-based logical queries, used primarily in AI and computational linguistics."
  },
];
