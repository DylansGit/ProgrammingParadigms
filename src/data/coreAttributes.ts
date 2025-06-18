// src/data/coreAttributes.ts

export interface CoreAttributes {
  memoryModel: string;
  compilationModel: string;
  runtimeEnvironment: string;
  typicalUseCases: string[];
  executionModel: string;
  abstractionLevel: string;
}

export const coreAttributesByLanguage: Record<string, CoreAttributes> = {
  JavaScript: {
    memoryModel:
      "JavaScript uses garbage collection with mark-and-sweep algorithms to automatically manage memory, avoiding manual deallocation. Objects and closures are dynamically allocated on the heap.",
    compilationModel:
      "Modern JavaScript engines (e.g., V8, SpiderMonkey) employ Just-In-Time (JIT) compilation, optimizing hot code paths during runtime for performance while maintaining dynamic typing.",
    runtimeEnvironment:
      "JavaScript primarily runs in browsers and on servers (Node.js), utilizing an event-driven, single-threaded runtime with an event loop to handle asynchronous I/O and concurrency.",
    typicalUseCases: [
      "Interactive web front-end development",
      "Server-side scripting and APIs via Node.js",
      "Cross-platform mobile and desktop apps",
      "IoT and embedded scripting",
      "Real-time data streaming and microservices",
    ],
    executionModel:
      "JavaScript executes code using an event loop with non-blocking asynchronous callbacks, promises, and async/await constructs for concurrency without traditional threads.",
    abstractionLevel:
      "High-level, dynamically typed language with prototype-based inheritance and first-class functions, emphasizing flexibility and rapid development.",
  },

  Python: {
    memoryModel:
      "Python uses reference counting combined with a cyclic garbage collector to manage memory automatically. Objects are allocated on the heap, with no manual memory management required.",
    compilationModel:
      "Python source code is compiled into bytecode (.pyc files) interpreted by the CPython virtual machine; alternative implementations (PyPy) use JIT compilation for performance.",
    runtimeEnvironment:
      "Python runs in an interpreted environment with a Global Interpreter Lock (GIL) which enforces single-thread execution per process, though concurrency is supported via multiprocessing and async frameworks.",
    typicalUseCases: [
      "Scientific computing and data analysis",
      "Machine learning and AI",
      "Web backend development",
      "Scripting and automation",
      "Education and prototyping",
    ],
    executionModel:
      "Sequential interpreted execution with support for asynchronous programming using asyncio, and parallelism via multiprocessing.",
    abstractionLevel:
      "High-level, dynamically typed language emphasizing readability and developer productivity, supporting multiple paradigms: procedural, object-oriented, and functional.",
  },

  Java: {
    memoryModel:
      "Java features automatic memory management with generational garbage collectors (e.g., G1, CMS), managing heap allocation and deallocation without programmer intervention.",
    compilationModel:
      "Java source is compiled to platform-independent bytecode executed on the Java Virtual Machine (JVM), with runtime Just-In-Time (JIT) compilation optimizing performance.",
    runtimeEnvironment:
      "The JVM provides a sandboxed runtime with security, multithreading, and cross-platform portability, making Java ubiquitous across platforms.",
    typicalUseCases: [
      "Enterprise-grade applications",
      "Android mobile development",
      "Big data and distributed systems",
      "Embedded systems",
      "Financial services and middleware",
    ],
    executionModel:
      "Preemptive multi-threading managed by the JVM, supporting concurrency primitives and synchronization mechanisms.",
    abstractionLevel:
      "Statically typed, class-based object-oriented language with strict type safety, exception handling, and a rich standard library.",
  },

  C: {
    memoryModel:
      "C offers manual memory management with direct access to physical memory through pointers, allowing fine-grained control but requiring explicit allocation and deallocation.",
    compilationModel:
      "Compiled directly to platform-specific machine code by ahead-of-time (AOT) compilers, producing highly efficient executables.",
    runtimeEnvironment:
      "Minimal runtime support, typically running close to the operating system, ideal for systems programming and embedded development.",
    typicalUseCases: [
      "Operating system kernels",
      "Embedded firmware",
      "High-performance computing",
      "Real-time systems",
      "Systems and hardware drivers",
    ],
    executionModel:
      "Sequential, procedural execution with no inherent concurrency support; concurrency must be managed manually via OS APIs.",
    abstractionLevel:
      "Low-level procedural language with no built-in abstractions like objects or exceptions, but providing maximal control over hardware.",
  },

  "C++": {
    memoryModel:
      "Extends C's manual memory model with deterministic object lifetimes, RAII (Resource Acquisition Is Initialization), and smart pointers for safer resource management.",
    compilationModel:
      "AOT compiled into efficient native machine code with support for template metaprogramming enabling compile-time code generation.",
    runtimeEnvironment:
      "Minimal runtime, suitable for systems programming with support for exceptions and RTTI (Run-Time Type Information).",
    typicalUseCases: [
      "Game engines and graphics",
      "Real-time simulations",
      "Embedded systems",
      "Financial modeling",
      "High-performance applications",
    ],
    executionModel:
      "Sequential execution with manual thread and synchronization management, plus modern concurrency support from the standard library.",
    abstractionLevel:
      "Multi-paradigm language supporting procedural, object-oriented, and generic programming with high abstraction capabilities.",
  },

  "C#": {
    memoryModel:
      "Automatic memory management via garbage collection in the .NET runtime, including generational collectors and finalizers for resource cleanup.",
    compilationModel:
      "Compiled to Common Intermediate Language (CIL), executed by the Common Language Runtime (CLR) with JIT compilation.",
    runtimeEnvironment:
      "Runs on the .NET runtime supporting cross-platform execution, security, and interoperability with native APIs.",
    typicalUseCases: [
      "Windows desktop apps",
      "Web backend with ASP.NET",
      "Game development with Unity",
      "Cloud services on Azure",
      "Enterprise software",
    ],
    executionModel:
      "Managed multithreading with support for async/await pattern enabling scalable asynchronous programming.",
    abstractionLevel:
      "Statically typed, object-oriented language with modern features like LINQ, delegates, and pattern matching.",
  },

  Ruby: {
    memoryModel:
      "Uses a garbage collector with generational and incremental collection strategies, managing memory transparently to the programmer.",
    compilationModel:
      "Interpreted language with YARV (Yet Another Ruby VM) executing bytecode; some implementations support JIT compilation.",
    runtimeEnvironment:
      "Runs in a managed VM environment designed for simplicity and developer productivity.",
    typicalUseCases: [
      "Web development with Ruby on Rails",
      "Scripting and automation",
      "Prototyping",
      "DevOps tools",
      "Domain-specific languages",
    ],
    executionModel:
      "Sequential interpreted execution with support for fibers and evented concurrency via gems like EventMachine.",
    abstractionLevel:
      "Dynamic, reflective, object-oriented language emphasizing expressiveness and human-friendly syntax.",
  },

  Go: {
    memoryModel:
      "Uses concurrent garbage collection optimized for low-latency and high-throughput, with manual control over allocations discouraged.",
    compilationModel:
      "Statically compiled language with fast compilation times producing native binaries without runtime dependencies.",
    runtimeEnvironment:
      "Includes a lightweight runtime with goroutine scheduler and channels for concurrency support.",
    typicalUseCases: [
      "Cloud-native services",
      "Container orchestration (Kubernetes)",
      "Network servers and proxies",
      "Command-line tools",
      "Microservices",
    ],
    executionModel:
      "Concurrent execution via goroutines managed by the Go scheduler, avoiding OS thread overhead for lightweight concurrency.",
    abstractionLevel:
      "Statically typed language focusing on simplicity, concurrency primitives, and fast execution.",
  },

  Rust: {
    memoryModel:
      "No garbage collector; uses a unique ownership and borrowing system enforced at compile time to ensure memory safety and prevent data races.",
    compilationModel:
      "Compiled ahead of time into highly optimized native machine code with zero-cost abstractions.",
    runtimeEnvironment:
      "Minimal runtime, suitable for systems programming with no hidden costs or runtime GC pauses.",
    typicalUseCases: [
      "Systems programming",
      "WebAssembly modules",
      "Embedded devices",
      "Game engines",
      "Safe concurrent applications",
    ],
    executionModel:
      "Sequential or concurrent execution with safe, statically enforced concurrency primitives.",
    abstractionLevel:
      "Systems programming language with fine-grained control and modern abstractions, without sacrificing performance or safety.",
  },

  Scala: {
    memoryModel:
      "Runs on JVM and uses JVM garbage collection; supports immutability and functional data structures to reduce memory churn.",
    compilationModel:
      "Compiles to JVM bytecode; supports advanced compile-time macros and type inference.",
    runtimeEnvironment:
      "Runs on JVM, interoperates seamlessly with Java libraries, and supports multiple execution environments.",
    typicalUseCases: [
      "Big data platforms (Apache Spark)",
      "Reactive applications",
      "Web backends",
      "Distributed systems",
      "Domain-specific languages",
    ],
    executionModel:
      "Supports concurrent and parallel execution with Futures, Akka actors, and reactive streams.",
    abstractionLevel:
      "Combines object-oriented and functional programming paradigms with expressive type system.",
  },

  Haskell: {
    memoryModel:
      "Uses lazy evaluation with garbage collection, enabling deferred computation and memory efficiency.",
    compilationModel:
      "Compiled to native code or bytecode (GHC, Hugs), with advanced optimization techniques.",
    runtimeEnvironment:
      "Managed runtime supporting pure functional semantics and advanced type system features.",
    typicalUseCases: [
      "Academic research",
      "Domain-specific languages",
      "Formal verification",
      "Compiler development",
      "High-assurance software",
    ],
    executionModel:
      "Purely functional execution model with monads to handle side effects and concurrency.",
    abstractionLevel:
      "High-level purely functional language emphasizing type safety and mathematical correctness.",
  },

  Kotlin: {
    memoryModel:
      "Runs on JVM and uses JVM garbage collection; supports null safety to prevent common runtime errors.",
    compilationModel:
      "Compiles to JVM bytecode, JavaScript, or native binaries via Kotlin/Native.",
    runtimeEnvironment:
      "Runs on JVM, JavaScript engines, or native platforms, enabling multiplatform development.",
    typicalUseCases: [
      "Android app development",
      "Backend services",
      "Multiplatform mobile/web/desktop apps",
      "Serverless functions",
      "DSL creation",
    ],
    executionModel:
      "Supports coroutines for efficient asynchronous programming and concurrency.",
    abstractionLevel:
      "Statically typed, modern language with concise syntax and full Java interoperability.",
  },

  TypeScript: {
    memoryModel:
      "Follows JavaScript’s memory model with garbage collection and dynamic allocation managed by underlying engines.",
    compilationModel:
      "Transpiled to plain JavaScript; static type checking occurs at compile time but no runtime type enforcement.",
    runtimeEnvironment:
      "Runs anywhere JavaScript runs, since it compiles to JavaScript; development tooling benefits from static types.",
    typicalUseCases: [
      "Large-scale web applications",
      "Node.js server apps",
      "Frontend frameworks (React, Angular, Vue)",
      "Cross-platform desktop apps",
      "Tooling and library development",
    ],
    executionModel:
      "Same as JavaScript, with event loop and asynchronous non-blocking I/O.",
    abstractionLevel:
      "Statically typed superset of JavaScript adding optional typing and compile-time safety.",
  },

  Elixir: {
    memoryModel:
      "Runs on BEAM VM with lightweight process isolation and garbage collection per process, avoiding global pauses.",
    compilationModel:
      "Compiles to BEAM bytecode executed by the Erlang virtual machine for fault-tolerant distributed systems.",
    runtimeEnvironment:
      "BEAM VM supports massive concurrency with thousands of lightweight processes and message passing.",
    typicalUseCases: [
      "Telecommunications",
      "Real-time web apps",
      "Distributed systems",
      "Fault-tolerant servers",
      "Scalable APIs",
    ],
    executionModel:
      "Actor-model concurrency with immutable data and message passing.",
    abstractionLevel:
      "Functional programming language focused on concurrency, fault tolerance, and scalability.",
  },

  R: {
    memoryModel:
      "Uses copy-on-write semantics and garbage collection to manage memory efficiently in statistical computing workloads.",
    compilationModel:
      "Interpreted language with bytecode compilation to improve performance.",
    runtimeEnvironment:
      "Runs in interactive R environments and integrates with other languages like C/C++ for performance.",
    typicalUseCases: [
      "Statistical analysis",
      "Data visualization",
      "Bioinformatics",
      "Machine learning",
      "Research and academia",
    ],
    executionModel:
      "Sequential interpreted execution with vectorized operations for performance.",
    abstractionLevel:
      "High-level language specialized for data analysis and visualization with rich statistical libraries.",
  },

  Lua: {
    memoryModel:
      "Uses incremental garbage collection optimized for embedded systems with constrained resources.",
    compilationModel:
      "Source code compiled to bytecode interpreted by the Lua VM; also supports Just-In-Time (JIT) compilation with LuaJIT.",
    runtimeEnvironment:
      "Designed to be embedded in host applications, providing a lightweight and extensible scripting engine.",
    typicalUseCases: [
      "Game scripting",
      "Embedded devices",
      "Configuration and automation",
      "Real-time applications",
      "Extension scripting",
    ],
    executionModel:
      "Sequential interpreted execution with coroutines for cooperative multitasking.",
    abstractionLevel:
      "Lightweight, dynamically typed scripting language emphasizing extensibility and simplicity.",
  },

  Dart: {
    memoryModel:
      "Uses generational garbage collection with efficient allocation for fast app responsiveness.",
    compilationModel:
      "Supports ahead-of-time (AOT) compilation for optimized native binaries and just-in-time (JIT) compilation for rapid development.",
    runtimeEnvironment:
      "Runs in Dart VM and compiles to JavaScript for web apps; primary language for Flutter UI framework.",
    typicalUseCases: [
      "Cross-platform mobile apps",
      "Web applications",
      "Desktop apps",
      "Server-side development",
      "UI-driven applications",
    ],
    executionModel:
      "Single-threaded event loop with asynchronous futures and streams for concurrency.",
    abstractionLevel:
      "Optimized for UI development with reactive programming model and sound static typing.",
  },

  Prolog: {
    memoryModel:
      "Uses backtracking and logical inference with controlled memory use, including trail and choice point stacks.",
    compilationModel:
      "Interpreted or compiled to intermediate code executed by a logic programming engine.",
    runtimeEnvironment:
      "Logic programming environment optimized for declarative problem-solving and symbolic computation.",
    typicalUseCases: [
      "Artificial intelligence",
      "Natural language processing",
      "Expert systems",
      "Theorem proving",
      "Knowledge representation",
    ],
    executionModel:
      "Non-deterministic execution with backtracking search over logical rules and facts.",
    abstractionLevel:
      "High-level declarative logic programming language focused on symbolic reasoning and problem solving.",
  },
};
