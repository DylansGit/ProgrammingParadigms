// src/data/paradigmExplanations.ts

export interface ParadigmDetail {
  name: string;
  description: string;
  history: string;
  coreConcepts: string[];
  pros: string[];
  cons: string[];
  exampleLanguages: string[];
}

export const paradigmExplanations: Record<string, ParadigmDetail> = {
  OOP: {
    name: "Object-Oriented Programming (OOP)",
    description:
      "A programming paradigm organized around objects, which encapsulate state (data) and behavior (methods). It models software as a collection of interacting objects.",
    history:
      "Emerging in the 1960s with Simula, OOP was popularized by Smalltalk in the 1970s and later mainstreamed by languages like C++ and Java. It revolutionized software design by promoting modularity and reuse.",
    coreConcepts: [
      "Encapsulation: Bundling data with methods that operate on that data.",
      "Inheritance: Creating new classes from existing ones to promote code reuse.",
      "Polymorphism: Ability to process objects differently based on their data type or class.",
      "Abstraction: Hiding complex implementation details behind simple interfaces.",
    ],
    pros: [
      "Improves modularity and maintainability.",
      "Facilitates code reuse through inheritance.",
      "Models real-world entities naturally.",
      "Supports dynamic dispatch and polymorphism.",
    ],
    cons: [
      "Can lead to overly complex class hierarchies.",
      "Sometimes encourages premature optimization and over-engineering.",
      "May introduce performance overhead due to indirection.",
    ],
    exampleLanguages: ["Java", "C++", "C#", "Python", "Ruby"],
  },

  FP: {
    name: "Functional Programming (FP)",
    description:
      "A paradigm treating computation as the evaluation of mathematical functions, emphasizing immutability, first-class and higher-order functions, and avoiding side effects.",
    history:
      "Rooted in lambda calculus by Alonzo Church in the 1930s, FP saw renewed interest with languages like Lisp in the 1950s and Haskell in the 1990s. It's influential in concurrent and parallel computing.",
    coreConcepts: [
      "Pure functions: Functions with no side effects and deterministic outputs.",
      "Immutability: Data cannot be modified after creation.",
      "First-class and higher-order functions: Functions are treated as values.",
      "Recursion: Repetition via function calls instead of loops.",
      "Lazy evaluation: Computation deferred until needed.",
    ],
    pros: [
      "Easier reasoning about code due to pure functions.",
      "Helps avoid bugs caused by mutable shared state.",
      "Facilitates parallel and concurrent execution.",
      "Functions as first-class citizens enable expressive abstractions.",
    ],
    cons: [
      "Steeper learning curve for imperative programmers.",
      "Potential performance costs with heavy recursion or copying immutable data.",
      "Debugging can be harder due to abstraction layers.",
    ],
    exampleLanguages: ["Haskell", "Lisp", "Erlang", "Elixir", "Scala"],
  },

  Procedural: {
    name: "Procedural Programming",
    description:
      "A paradigm based on structured procedures or routines (functions), focusing on a sequence of computational steps to be carried out.",
    history:
      "Procedural programming emerged in the 1950s and 1960s with languages like Fortran and C, building on imperative programming concepts to improve readability and modularity.",
    coreConcepts: [
      "Sequential execution: Code runs step-by-step.",
      "Procedure calls: Reusable blocks of code.",
      "Local/global variables and state changes.",
      "Control flow via loops, conditionals, and branches.",
    ],
    pros: [
      "Simple and straightforward model.",
      "Good for tasks with clear linear steps.",
      "Efficient low-level memory control.",
    ],
    cons: [
      "Can lead to spaghetti code if not well-structured.",
      "Less emphasis on data encapsulation.",
      "Harder to model complex, real-world entities.",
    ],
    exampleLanguages: ["C", "Pascal", "BASIC", "Fortran"],
  },

  Declarative: {
    name: "Declarative Programming",
    description:
      "A style of programming where the developer specifies what the program should accomplish, rather than how to accomplish it.",
    history:
      "Declarative paradigms evolved as alternatives to imperative programming, gaining traction with SQL for databases, and logic and functional languages.",
    coreConcepts: [
      "Focus on the logic of computation without explicit control flow.",
      "Examples include SQL, HTML, functional programming languages, and logic programming.",
      "Describes 'what' instead of 'how'.",
    ],
    pros: [
      "Often shorter, more readable code.",
      "Allows the compiler/interpreter to optimize execution.",
      "Improves correctness and maintainability.",
    ],
    cons: [
      "Can be less intuitive for developers accustomed to imperative style.",
      "Performance may depend heavily on implementation.",
      "Limited control over execution details.",
    ],
    exampleLanguages: ["SQL", "HTML", "Haskell", "Prolog"],
  },

  Logic: {
    name: "Logic Programming",
    description:
      "A paradigm based on formal logic where programs consist of a set of facts and rules, and computation is performed via inference and pattern matching.",
    history:
      "Logic programming began with Prolog in the 1970s, aimed at symbolic reasoning, AI, and theorem proving.",
    coreConcepts: [
      "Programs declare relations using facts and rules.",
      "Computation is query-based, using unification and backtracking.",
      "Non-deterministic computation and automatic search.",
    ],
    pros: [
      "Highly expressive for problems involving constraints and symbolic logic.",
      "Concise representation of complex relations.",
      "Useful in AI, natural language processing, and expert systems.",
    ],
    cons: [
      "Can be inefficient for some problem types.",
      "Steep learning curve.",
      "Less widely adopted outside research domains.",
    ],
    exampleLanguages: ["Prolog", "Datalog"],
  },
};
