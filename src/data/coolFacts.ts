// src/data/coolFacts.ts
export const extendedFacts: Record<string, string[]> = {
  JavaScript: [
    "Created in just 10 days in 1995 by Brendan Eich to enable interactivity in web browsers.",
    "Initially named Mocha, then LiveScript, before settling on JavaScript to ride Java's popularity.",
    "Uses a prototype-based object model instead of classical inheritance.",
    "Supports first-class functions, closures, and asynchronous programming with Promises and async/await.",
    "The language’s dynamic typing and event-driven, non-blocking I/O model make it ideal for web applications.",
    "Runs both in the browser and on the server side via environments like Node.js, powering huge ecosystems.",
  ],
  Python: [
    "Named after the British comedy series 'Monty Python's Flying Circus' to emphasize fun and readability.",
    "Emphasizes code readability with significant whitespace and a simple, clean syntax.",
    "Supports multiple programming paradigms including procedural, object-oriented, and functional styles.",
    "Has a vast ecosystem of libraries for data science, machine learning, web development, automation, and more.",
    "Uses dynamic typing and automatic memory management, simplifying rapid development.",
    "Widely used in academia and industry, especially popular in AI, scientific computing, and scripting.",
  ],
  Java: [
    "Developed by James Gosling at Sun Microsystems in 1995, promoting the 'Write Once, Run Anywhere' philosophy.",
    "Compiles to bytecode executed on the Java Virtual Machine (JVM), ensuring cross-platform portability.",
    "Strongly typed and strictly object-oriented with a focus on reliability and security.",
    "Includes a rich standard library and a huge ecosystem of third-party frameworks for enterprise applications.",
    "Uses automatic garbage collection to manage memory safely and efficiently.",
    "Has influenced many modern languages (e.g., Kotlin, Scala) and is foundational for Android development.",
  ],
  C: [
    "Developed in 1972, C gave programmers direct memory access and low-level control, forming the foundation for modern operating systems.",
    "Its simple, minimal syntax and powerful pointers influence many languages to this day.",
    "It enabled the creation of Unix and many embedded systems.",
    "C code compiles to highly efficient machine code, allowing fine-tuned performance.",
    "The language is procedural, with manual memory management via malloc and free.",
    "It remains heavily used in systems programming, firmware, and performance-critical apps."
  ],
  "C++": [
    "Extending C with object-oriented features, C++ became a powerful language for system/software development and game engines.",
    "It introduced classes, inheritance, and templates for generic programming.",
    "Supports both low-level memory manipulation and high-level abstractions.",
    "Widely used in performance-intensive applications like real-time simulations and video games.",
    "The Standard Template Library (STL) offers powerful algorithms and data structures.",
    "C++ remains highly complex but extremely versatile."
  ],
  "C#": [
    "Created by Microsoft, C# blends object-oriented and declarative programming styles and powers the .NET ecosystem and Unity game engine.",
    "It features garbage collection, strong static typing, and LINQ for expressive queries.",
    "Popular for desktop apps, enterprise software, and game development with Unity.",
    "Supports asynchronous programming via async/await keywords.",
    "Introduced pattern matching and records in recent versions.",
    "Integrates well with Windows APIs and cloud services."
  ],
  Ruby: [
    "Designed for developer happiness, Ruby introduced elegant syntax and powerful metaprogramming, famously used in Rails web framework.",
    "It promotes convention over configuration and DRY principles.",
    "Ruby's dynamic typing and reflective capabilities allow runtime code changes.",
    "The Ruby on Rails framework revolutionized web app development with rapid prototyping.",
    "Its object model is pure, where even primitives are objects.",
    "Though slower than compiled languages, it remains popular for startups and rapid development."
  ],
  Go: [
    "Created at Google, Go prioritizes simplicity and efficient concurrency, making it a top choice for cloud infrastructure and microservices.",
    "Go features goroutines and channels for lightweight concurrent programming.",
    "Its static typing and fast compilation speed suit large-scale systems.",
    "Go has a powerful standard library and built-in testing tools.",
    "It enforces formatting with 'gofmt' to keep code consistent.",
    "Popular in containerization tech like Docker and Kubernetes."
  ],
  Rust: [
    "Rust offers memory safety without garbage collection via its unique ownership model, quickly gaining popularity for safe system programming.",
    "Its borrow checker enforces rules preventing data races at compile time.",
    "Rust balances performance with safety, suitable for OS kernels and web assembly.",
    "Cargo, Rust’s package manager, simplifies dependency management.",
    "Rust’s expressive type system enables powerful abstractions without runtime cost.",
    "The community strongly focuses on documentation and tooling quality."
  ],
  Scala: [
    "Scala runs on the JVM and combines functional and object-oriented paradigms to build scalable, robust applications.",
    "It supports immutable data structures and pattern matching.",
    "Scala’s type inference reduces boilerplate while maintaining type safety.",
    "Widely used in big data platforms like Apache Spark.",
    "Enables concise DSLs for domain-specific programming.",
    "Offers interoperability with Java libraries and frameworks."
  ],
  Haskell: [
    "A purely functional language emphasizing strong static typing, Haskell is popular in academia and for domain-specific languages.",
    "It uses lazy evaluation to defer computation until needed.",
    "Haskell’s type system supports advanced concepts like monads and type classes.",
    "It encourages side-effect-free programming for safer, predictable code.",
    "Often used in formal verification and compiler research.",
    "Has influenced many modern functional programming languages."
  ],
  Kotlin: [
    "Kotlin is a modern JVM language that added null safety and concise syntax, officially endorsed for Android development.",
    "Supports both object-oriented and functional programming.",
    "Kotlin coroutines provide efficient asynchronous programming.",
    "It interoperates seamlessly with existing Java codebases.",
    "Adopted widely for server-side and multiplatform projects.",
    "Offers data classes and extension functions for cleaner code."
  ],
  TypeScript: [
    "A superset of JavaScript, TypeScript adds optional static typing and improved tooling, essential for large-scale app development.",
    "Type annotations help catch errors early during development.",
    "Supports modern JavaScript features and compiles down to plain JS.",
    "Widely used with frameworks like Angular, React, and Vue.",
    "Enables better refactoring and code navigation in IDEs.",
    "Facilitates scalable, maintainable codebases in complex projects."
  ],
  Elixir: [
    "Built on the Erlang VM, Elixir excels at building highly concurrent, fault-tolerant distributed systems.",
    "Leverages the actor model for processes and messaging.",
    "Its syntax is influenced by Ruby, making it approachable.",
    "Used heavily in telecommunications and real-time applications.",
    "Supports hot code swapping for zero-downtime upgrades.",
    "Has a growing ecosystem including the Phoenix web framework."
  ],
  R: [
    "R is specialized for statistics and data visualization, widely used by data scientists and statisticians worldwide.",
    "Includes powerful libraries for plotting like ggplot2.",
    "Supports vectorized operations for efficient data handling.",
    "Often integrated with other languages like C++ for performance.",
    "Used extensively in bioinformatics and social sciences.",
    "RStudio IDE offers an interactive environment for analysis."
  ],
  Lua: [
    "Lua is a lightweight scripting language popular in game development and embedded systems for its speed and simplicity.",
    "Designed to be embedded into host applications.",
    "Provides meta-programming with metatables and coroutines.",
    "Used in popular games like World of Warcraft and Roblox.",
    "Its simple syntax makes it easy to learn and extend.",
    "Supports just-in-time compilation with LuaJIT for speed."
  ],
  Dart: [
    "Created by Google, Dart powers Flutter, enabling fast cross-platform mobile, web, and desktop apps with a single codebase.",
    "Supports both ahead-of-time (AOT) and just-in-time (JIT) compilation.",
    "Features a reactive programming model ideal for UI.",
    "Strong typing and null safety improve code reliability.",
    "Includes a rich standard library and package manager (pub).",
    "Flutter’s widget system leverages Dart for high-performance apps."
  ],
  Prolog: [
    "Prolog is a logic programming language that uses formal logic for AI research, natural language processing, and theorem proving.",
    "Programs consist of facts and rules evaluated via pattern matching.",
    "Supports backtracking to explore different solution paths.",
    "Used in expert systems, theorem proving, and computational linguistics.",
    "Enables declarative problem-solving rather than imperative steps.",
    "One of the earliest logic programming languages, influencing AI research."
  ],
};
