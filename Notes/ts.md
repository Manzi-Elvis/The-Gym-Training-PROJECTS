> **How to use these notes**
>     For every concept: **Understand the idea → See the JavaScript equivalent → Write the TypeScript → Explain it aloud → Practice it.**
>     A strong TypeScript developer knows what TypeScript protects you from, what happens at runtime, and how the type system models the program.

> **TypeScript Fundamentals**
>     > What is TypeScript
>         TypeScript is a **statically typed superset of JavaScript** that adds a type system and better tooling. It is transformed into JavaScript before running, because browsers and Node.js only execute JavaScript.
>         Mental model: JavaScript lets you discover problems while running. TypeScript lets the compiler warn you before running.
>         ```ts
>         function add(a: number, b: number): number {
>             return a + b;
>         }
>         add("10", 20); // Error at compile time
>         ```
>         **Interview answer:** "TypeScript is a statically typed superset of JavaScript. It adds static typing, interfaces, generics and better tooling, and compiles to JavaScript, so types don't exist at runtime."
>     > TypeScript vs JavaScript
>         | JavaScript | TypeScript |
>         | --- | --- |
>         | Dynamically typed | Statically typed |
>         | Runs directly | Compiled/transformed first |
>         | Errors surface at runtime | Many errors caught before running |
>         | `.js` | `.ts` / `.tsx` |
>         TypeScript does **not** make JavaScript runtime-safe. Types are erased, so untrusted data still needs runtime validation.
>     > Why TypeScript
>         Catches mistakes early, gives better autocomplete, makes refactoring safer, documents function contracts, and helps large teams work together.
>         **Interview answer:** "It moves many classes of errors from runtime to development time and improves tooling, documentation and refactoring."
>     > Static vs dynamic typing
>         Dynamic (JS): a variable can hold any type over time. Static (TS): the compiler knows what a variable should hold.
>         ```ts
>         let value: number = 10;
>         value = "hello"; // Error
>         ```
>         JavaScript itself stays dynamically typed at runtime. TypeScript only adds checking on top.
>     > Compile time vs runtime
>         **Compile time:** TypeScript analyzes your code and reports errors (`Type 'string' is not assignable to type 'number'`).
>         **Runtime:** the generated JavaScript executes. It knows nothing about your `interface User`.
>     > Type erasure
>         Type information is removed when TypeScript produces JavaScript.
>         ```ts
>         function greet(name: string): string { return `Hello ${name}`; }
>         ```
>         becomes
>         ```js
>         function greet(name) { return `Hello ${name}`; }
>         ```
>         **Critical lesson:** `type User = { name: string }` does not validate incoming data.
>     > .ts vs .tsx
>         `.ts` is normal TypeScript. `.tsx` is TypeScript plus JSX, used for React components.
>     > Compiler and setup
>         ```bash
>         npm install -D typescript     # or: pnpm add -D typescript
>         npx tsc --init                # create tsconfig.json
>         npx tsc                       # compile
>         npx tsc --noEmit              # type-check only (great for CI)
>         ```
>         ```json
>         { "scripts": { "build": "tsc", "check": "tsc --noEmit" } }
>         ```
>         Typical layout: `src/index.ts` → `dist/index.js` → `node dist/index.js`.

> **Type System Fundamentals**
>     > Basic types
>         ```ts
>         let name: string = "Elvis";
>         let age: number = 25;          // no separate int/float
>         let ok: boolean = true;
>         let big: bigint = 123n;
>         let id: symbol = Symbol("id");
>         let a: null = null;            // intentional absence
>         let b: undefined = undefined;  // not assigned / not provided
>         ```
>     > Type inference
>         TypeScript works out types automatically: `const age = 25` is `number`, `[10, 20]` is `number[]`.
>         **Rule:** don't annotate everything, and don't rely on inference everywhere. Annotate where the type communicates an important contract (function parameters, public APIs).
>     > Arrays
>         ```ts
>         const names: string[] = ["Elvis", "Jane"];
>         const users: Array<User> = [];            // equivalent syntax
>         const matrix: number[][] = [[1, 2], [3, 4]];
>         const nums: readonly number[] = [1, 2];   // push() is an error
>         ```
>         Use `readonly` for inputs a function must not modify.
>     > Tuples
>         A tuple is a fixed-position structure.
>         ```ts
>         const user: [string, number] = ["Elvis", 25];
>         type Maybe = [string, number?];                 // optional element
>         const point: readonly [number, number] = [10, 20];
>         ```
>         **Array = collection of similar values. Tuple = fixed-position structure.**
>     > Object types
>         ```ts
>         type User = {
>             readonly id: number;   // cannot be reassigned
>             name: string;
>             age?: number;          // optional
>         };
>         ```

> **Functions**
>     > Parameters and return types
>         ```ts
>         function add(a: number, b: number): number { return a + b; }
>         ```
>         Return types can be inferred, but explicit ones are useful on important APIs.
>     > Optional, default and rest parameters
>         ```ts
>         function greet(name: string, title?: string) {}          // title: string | undefined
>         function hello(name: string, greeting = "Hello") {}
>         function sum(...nums: number[]): number { return nums.reduce((t, n) => t + n, 0); }
>         ```
>     > Function types and callbacks
>         ```ts
>         type MathOp = (a: number, b: number) => number;
>         const add: MathOp = (a, b) => a + b;
>
>         function processUser(name: string, cb: (name: string) => void) { cb(name); }
>         ```
>     > void
>         `void` means the return value isn't meant to be used. It doesn't mean "nothing exists".
>     > Function overloads
>         Multiple callable signatures for one implementation.
>         ```ts
>         function format(value: string): string;
>         function format(value: number): string;
>         function format(value: string | number): string { return String(value); }
>         ```
>         The implementation signature isn't visible to callers. If all inputs behave the same, a union is simpler. Use overloads when different inputs produce meaningfully different types.
>         ```ts
>         function createElement(tag: "div"): HTMLDivElement;
>         function createElement(tag: "button"): HTMLButtonElement;
>         function createElement(tag: string): HTMLElement { return document.createElement(tag); }
>         ```

> **Unions, Intersections & Literal Types**
>     > Union types (`|`)
>         "This **or** that", never "both".
>         ```ts
>         type ID = string | number;
>         ```
>     > Literal types
>         ```ts
>         type Direction = "up" | "down" | "left" | "right";
>         type StatusCode = 200 | 404 | 500;
>         type Theme = "light" | "dark" | "system";
>         ```
>         Prefer these over arbitrary `string` for fixed sets (status, role, theme, direction).
>     > Intersection types (`&`)
>         "This **and** that". Great for combining object shapes.
>         ```ts
>         type WithId = { id: string };
>         type WithTimestamps = { createdAt: Date; updatedAt: Date };
>         type Entity = WithId & WithTimestamps;
>         ```
>     > Union vs intersection
>         `A | B` = A OR B. `A & B` = A AND B.

> **Special Types**
>     > any
>         Disables type checking. Avoid unless truly necessary.
>     > unknown
>         "I don't know the type yet". You must narrow it before using it.
>         ```ts
>         let a: any = "hi";      a.doesNotExist();  // allowed (unsafe)
>         let b: unknown = "hi";  b.doesNotExist();  // error
>         ```
>         **Interview answer:** "`any` disables type checking; `unknown` must be narrowed before use. I prefer `unknown` when the type is genuinely unknown."
>     > never
>         A value that never successfully occurs: functions that always throw or never end.
>         ```ts
>         function fail(msg: string): never { throw new Error(msg); }
>         ```
>     > void vs never
>         `void`: returns, but the result isn't meant to be used. `never`: never returns normally.
>     > object
>         Any non-primitive value. Prefer describing the actual shape with a type or interface.

> **Type Narrowing**
>     > What is narrowing
>         Reducing a broad type to a more specific one using information from the code.
>         ```ts
>         function print(value: string | number) {
>             if (typeof value === "string") value.toUpperCase(); // string
>             else value.toFixed(2);                              // number
>         }
>         ```
>     > Narrowing techniques
>         ```ts
>         typeof value === "string"      // primitives
>         animal instanceof Dog          // class instances
>         "bark" in animal               // property existence
>         value === null                 // equality
>         if (name) { ... }              // truthiness (careful: "", 0, false are falsy)
>         ```
>     > Control-flow narrowing
>         TypeScript follows your program's flow.
>         ```ts
>         function example(value: string | null) {
>             if (value === null) return;
>             console.log(value.length); // value is string here
>         }
>         ```
>     > Discriminated unions
>         A shared literal property lets TypeScript narrow the whole object.
>         ```ts
>         type State<T> =
>             | { status: "loading" }
>             | { status: "success"; data: T }
>             | { status: "error"; message: string };
>         ```

> **Type Guards and Predicates**
>     > Custom type guards
>         A runtime check that tells TypeScript how to narrow a type.
>         ```ts
>         function isUser(value: unknown): value is User {
>             return typeof value === "object" && value !== null && "name" in value;
>         }
>         ```
>     > `value is Type`
>         "If this function returns true, treat the value as this type."
>         ```ts
>         function isString(value: unknown): value is string {
>             return typeof value === "string";
>         }
>         ```
>         **Caution:** TypeScript trusts your guard. A wrong guard creates silent bugs.
>     > Type assertions (`as`)
>         "I know more than the compiler." This does **not** validate or convert anything.
>         ```ts
>         const input = document.querySelector("#email") as HTMLInputElement;
>         const user = JSON.parse(data) as User;      // dangerous: nothing is validated
>         const n = "123" as unknown as number;       // still a string at runtime!
>         const real = Number("123");                 // actual conversion
>         ```
>     > Non-null assertion (`!`)
>         `document.querySelector("#app")!` promises it isn't null. If you're wrong, it fails at runtime. Use sparingly.

> **Interfaces & Type Aliases**
>     > Type aliases
>         Name any type: objects, unions, functions, tuples.
>         ```ts
>         type ID = string | number;
>         type Calculator = (a: number, b: number) => number;
>         ```
>         Naming: describe the meaning (`CreateUserInput`, `ApiResponse`). Avoid `Data`, `Thing`, `Stuff`.
>     > Interfaces
>         Describe the structure of an object, including methods.
>         ```ts
>         interface User {
>             readonly id: number;
>             name: string;
>             age?: number;
>             greet(): string;
>         }
>         ```
>     > Extending and implementing
>         ```ts
>         interface Employee extends Person { employeeId: number }
>
>         class Dog implements Animal {
>             constructor(public name: string) {}
>             makeSound() { console.log("Woof"); }
>         }
>         ```
>     > Interface vs type
>         Both describe object shapes and overlap heavily. Use `interface` for extensible object/class contracts; use `type` for unions, intersections, tuples, primitives and complex compositions.
>         **Interview answer:** "Interfaces are great for extension and object-oriented contracts. Type aliases are more flexible because they can represent unions, intersections and tuples."

> **Object Type System**
>     > Nested objects
>         ```ts
>         type Address = { city: string; country: string };
>         type User = { name: string; address: Address };
>         ```
>     > Index signatures
>         For dynamic keys.
>         ```ts
>         type Scores = { [username: string]: number };
>         ```
>     > Structural typing
>         Compatibility depends on **shape**, not declared name.
>         ```ts
>         type User = { name: string };
>         const person = { name: "Elvis", age: 25 };
>         const user: User = person; // OK
>         ```
>     > Excess property checks
>         Fresh object literals are checked more strictly.
>         ```ts
>         const user: User = { name: "Elvis", age: 25 }; // Error: 'age' not in User
>         ```
>         **Interview answer:** "TypeScript uses structural typing. Excess property checks are an extra safeguard applied to object literals."
>     > Null and undefined handling
>         ```ts
>         let name: string = null;          // Error with strictNullChecks
>         let user: User | null = null;     // explicit
>         user?.address?.city               // optional chaining
>         const username = input ?? "Guest" // only for null/undefined (unlike ||)
>         ```
>         Prefer explicit checks over `!`.

> **Enums**
>     > Numeric and string enums
>         ```ts
>         enum Direction { Up, Down, Left, Right }
>         enum Role { Admin = "admin", User = "user" }
>         ```
>     > const enum
>         Special compilation behavior (inlined). Understand the implications before using it in libraries or complex build setups.
>     > Enum vs union literals
>         ```ts
>         type OrderStatus = "pending" | "paid" | "shipped";
>         ```
>         Often simpler than an enum. Enums exist at runtime; unions are type-only.

> **Generics**
>     > What are generics
>         Reusable code that preserves type information. `T` is a type placeholder: "whatever type the caller gives me".
>         ```ts
>         function identity<T>(value: T): T { return value; }
>         identity("Elvis"); // string
>         identity(25);      // number
>         ```
>     > Generic functions, inference and multiple parameters
>         ```ts
>         function first<T>(items: T[]): T | undefined { return items[0]; }
>         function pair<T, U>(a: T, b: U) { return [a, b] as const; }
>         ```
>         TypeScript usually infers `T` for you.
>     > Generic interfaces, aliases and classes
>         ```ts
>         interface ApiResponse<T> { success: boolean; data: T }
>         type Box<T> = { value: T };
>
>         class Storage<T> {
>             constructor(private value: T) {}
>             getValue(): T { return this.value; }
>         }
>         ```
>     > Generic constraints (`extends`)
>         ```ts
>         function getLength<T extends { length: number }>(value: T): number {
>             return value.length;
>         }
>         getLength("hello");  // OK
>         getLength(123);      // Error
>         ```
>     > Practical generics
>         ```ts
>         interface Repository<T> {
>             findById(id: number): Promise<T | null>;
>             save(entity: T): Promise<T>;
>         }
>         type ListProps<T> = { items: T[]; render: (item: T) => React.ReactNode };
>         ```

> **keyof**
>     > What is keyof
>         Produces a union of an object type's keys.
>         ```ts
>         type User = { name: string; age: number };
>         type UserKey = keyof User; // "name" | "age"
>         ```
>     > Safe property access
>         ```ts
>         function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
>             return obj[key];
>         }
>         getProperty(user, "name");   // string
>         getProperty(user, "email");  // Error
>         ```

> **Indexed Access Types**
>     > Basics
>         ```ts
>         type Name = User["name"];               // string
>         type Values = User[keyof User];         // string | number
>         type Users = { name: string }[];
>         type Single = Users[number];            // element type
>         ```
>     > `T[K]`
>         Extremely common in generic APIs (see `getProperty` above).

> **typeof in TypeScript**
>     > JavaScript typeof vs TypeScript typeof
>         In expressions, `typeof "hi"` is a runtime operator that returns `"string"`. In type positions, `typeof` extracts the type of a value.
>         ```ts
>         const config = { host: "localhost", port: 3000 };
>         type Config = typeof config;
>         type ConfigKey = keyof typeof config; // "host" | "port"
>
>         function add(a: number, b: number) { return a + b; }
>         type AddFn = typeof add;
>         ```

> **Utility Types**
>     > Object utilities
>         ```ts
>         Partial<User>            // all optional (great for updates)
>         Required<User>           // all required
>         Readonly<User>           // all readonly
>         Pick<User, "id" | "name">
>         Omit<User, "id">
>         Record<string, number>
>         ```
>     > Union utilities
>         ```ts
>         type Role = "admin" | "user" | "guest";
>         Exclude<Role, "admin">            // "user" | "guest"
>         Extract<Role, "admin" | "guest">  // "admin" | "guest"
>         NonNullable<string | null | undefined> // string
>         ```
>     > Function and class utilities
>         ```ts
>         ReturnType<typeof getUser>
>         Parameters<typeof createUser>   // [string, number]
>         InstanceType<typeof User>
>         Awaited<Promise<string>>        // string
>         ```

> **Classes**
>     > Properties, constructors and methods
>         ```ts
>         class User {
>             constructor(public name: string, public readonly id: number) {}
>             greet(): string { return `Hello ${this.name}`; }
>         }
>         ```
>         Parameter properties (`public name` in the constructor) declare and assign in one step.
>     > Visibility
>         `public` (default): anywhere. `private`: inside the class. `protected`: class and subclasses. `readonly`: cannot be reassigned. `static`: belongs to the class itself.
>     > Getters and setters
>         ```ts
>         get fullName() { return `${this.first} ${this.last}`; }
>         set age(v: number) { if (v < 0) throw new Error("Invalid age"); this._age = v; }
>         ```
>     > Inheritance and abstract classes
>         ```ts
>         abstract class Animal {
>             abstract makeSound(): void;
>             move() { console.log("Moving"); }
>         }
>         class Dog extends Animal { makeSound() { console.log("Woof"); } }
>         ```
>         Abstract classes can't be instantiated. Subclasses must implement abstract members.

> **Modules**
>     > Import and export
>         ```ts
>         export function add(a: number, b: number) { return a + b; }
>         export default function App() {}
>         import { add } from "./math";
>         import App from "./App";
>         export { UserService } from "./UserService"; // re-export
>         ```
>     > Type-only imports and exports
>         ```ts
>         import type { User } from "./types";
>         export type User = { id: number; name: string };
>         ```
>     > ESM vs CommonJS
>         ESM: `import` / `export`. CommonJS: `require()` / `module.exports`. Modern Node projects can use ESM.

> **tsconfig.json**
>     > Key options
>         `target`: JS version to emit. `module`: module output/resolution. `lib`: available built-in APIs. `rootDir` / `outDir`: source and output folders. `strict`: strong type checking (highly recommended). `noImplicitAny`, `strictNullChecks`: part of strict. `sourceMap`: debugging. `declaration`: emit `.d.ts` (for libraries). `esModuleInterop`: CJS/ESM import compatibility. `paths`: import aliases (runtime support depends on your tooling). `noEmit`: type-check only.
>     > Recommended starting point
>         ```json
>         {
>           "compilerOptions": {
>             "target": "ES2022",
>             "module": "NodeNext",
>             "moduleResolution": "NodeNext",
>             "strict": true,
>             "noEmit": true,
>             "esModuleInterop": true,
>             "skipLibCheck": true
>           },
>           "include": ["src"]
>         }
>         ```
>         Adjust for Node, React, Next.js, NestJS or libraries.

> **TypeScript + JavaScript**
>     > Migrating gradually
>         Convert one module at a time (`app.js` → `app.ts`). JSDoc can add types to JS files:
>         ```js
>         /** @param {number} a @param {number} b @returns {number} */
>         function add(a, b) { return a + b; }
>         ```
>     > @types and DefinitelyTyped
>         `npm install -D @types/node` adds types for JS packages. DefinitelyTyped is the community-maintained collection.
>     > Untyped libraries
>         Install `@types/...`, write your own declaration, wrap the library, use `unknown` and validate, or use `any` only as a last resort.

> **Declaration Files**
>     > .d.ts and declare
>         Describe types without implementation.
>         ```ts
>         declare function greet(name: string): string;
>         declare const API_URL: string;
>         ```
>     > Ambient and module declarations
>         ```ts
>         declare global { interface Window { myAppVersion: string } }
>         declare module "my-legacy-library" {
>             export function hello(name: string): string;
>         }
>         ```

> **Error Handling**
>     > try / catch with unknown
>         Caught errors are commonly `unknown` in strict setups.
>         ```ts
>         try { riskyOperation(); }
>         catch (error: unknown) {
>             if (error instanceof Error) console.error(error.message);
>         }
>         ```
>     > Safe helper and custom errors
>         ```ts
>         function getErrorMessage(error: unknown): string {
>             return error instanceof Error ? error.message : "Unknown error";
>         }
>
>         class NotFoundError extends Error {
>             constructor(message: string) { super(message); this.name = "NotFoundError"; }
>         }
>         ```

> **Async TypeScript**
>     > Promise<T>
>         `Promise<User>` = a promise that eventually resolves to a `User`.
>         ```ts
>         async function getUser(): Promise<User> { ... }
>         ```
>     > Typed fetch
>         ```ts
>         async function fetchUsers(): Promise<User[]> {
>             const response = await fetch("/api/users");
>             return response.json(); // NOT validated
>         }
>         ```
>         The annotation doesn't validate the JSON.

> **TypeScript + APIs**
>     > Request, response, DTO and error types
>         ```ts
>         type CreateUserRequest = { name: string; email: string };
>         type ApiError = { message: string; code: string };
>         type PaginatedResponse<T> = { data: T[]; page: number; limit: number; total: number };
>         type ApiResponse<T> = { success: boolean; data: T; message?: string };
>         ```
>         DTO = Data Transfer Object, commonly used in NestJS for incoming request data.
>     > Runtime data vs TypeScript types
>         **TypeScript checks your code. Runtime validation checks external data.**
>         ```ts
>         const data: unknown = JSON.parse(json); // validate/narrow before trusting
>         ```
>         Validate: HTTP responses, user input, env variables, files, databases and third-party APIs.
>         ```
>         User input → HTTP request → JSON → Runtime validation → TypeScript model → Business logic
>         ```

> **Best Practices**
>     > Habits
>         Use `strict` mode. Prefer inference when obvious. Prefer `unknown` over `any`. Avoid unnecessary assertions. Model data accurately (no `data: any`). Keep types reusable and named meaningfully. Don't over-engineer types. Validate external data. Keep compile-time and runtime concerns separate.
>     > Separate layers
>         Different layers, different types: `DatabaseUser` → `User` → `UserResponse` → `UserViewModel`.

> **Practical Patterns**
>     > Result type
>         ```ts
>         type Result<T> =
>             | { success: true; data: T }
>             | { success: false; error: string };
>
>         const result = findUser();
>         if (result.success) console.log(result.data.name);
>         else console.error(result.error);
>         ```
>     > State, event and repository types
>         ```ts
>         type UserCreatedEvent = { type: "USER_CREATED"; userId: number };
>         interface UserRepository {
>             findById(id: number): Promise<User | null>;
>             create(data: CreateUserDto): Promise<User>;
>         }
>         ```
>         Also: config types, form types, DB models, and generic utilities like `groupBy<T, K extends keyof T>`.

> **Interview Fundamentals**
>     > Core answers
>         **TypeScript:** statically typed superset of JavaScript, types erased at runtime.
>         **Static vs dynamic:** types checked before execution vs during it.
>         **Compile time vs runtime:** analysis/transformation vs execution of generated JS.
>         **Inference:** determining a type without an explicit annotation.
>         **`never` vs `void`:** `void` = return value not meant to be used; `never` = never returns normally.
>         **Union vs intersection:** `|` = one of several; `&` = combines requirements.
>         **Enum vs union:** enums can exist at runtime; unions are type-only and often simpler.
>     > Intermediate answers
>         **Generics:** reusable code that preserves input/output type relationships.
>         **keyof:** union of an object type's property keys.
>         **typeof:** runtime operator in JS; extracts a value's type in TS type positions.
>         **Narrowing:** using control-flow info to reduce a broad type to a specific one.
>         **Type guard:** a runtime check that lets TypeScript narrow a type.
>         **Utility types:** built-in generic types that transform others (`Partial`, `Pick`, `Omit`, `Record`, `ReturnType`).
>         **Structural typing:** compatibility by shape rather than type name.
>         **Overloads:** multiple call signatures for one implementation.
>         **Declaration files:** `.d.ts` files describing types without implementation.
>         **Strict mode:** a collection of stronger checks; preferred for production.

> **Practice & Revision**
>     > Exercises
>         Write typed functions (e.g. `calculateAverage`). Convert JS to TS. Build interfaces and reusable aliases. Model statuses with unions and handle every case. Practice narrowing with `boolean`, `null` and `undefined`. Implement `first<T>()`. Apply `Pick`, `Partial`, `Omit`, `Readonly` to a `User`. Type an API response. Practice React (props, state, events, refs, context, hooks), Node (`process.env`, fs, HTTP) and NestJS (controller, service, module, DTO, guard, pipe, interceptor).
>     > Questions to answer without notes
>         What is TypeScript? Why use it? What is type erasure? `any` vs `unknown`? What is `never`? Union vs intersection? What is narrowing? What is a type guard? Interface vs type? What are generics, `keyof`, `typeof`, indexed access, utility types, structural typing, overloads, declaration files, strict mode? Can TypeScript validate API JSON? Why is runtime validation still needed?
>     > Explain a concept without notes
>         Pick a topic (e.g. Generics) and explain: what it is, why it exists, what problem it solves, basic syntax, a practical example, when to use it and when to avoid it.
>     > Weak-area tracker
>         Rate each area (Basic types, Inference, Functions, Unions, Narrowing, Generics, Utility types, Modules, tsconfig, API typing) from 0 to 100% and focus your next session on the weakest.

> **The Big Picture**
>     > Mental model
>         ```
>         Source (.ts) → Type checking → Errors (fix) or Valid code → JavaScript → Runtime
>         ```
>         TypeScript types give compile-time protection. They do **not** replace runtime validation.
>     > Five core ideas
>         1. **Types describe values.**
>         2. **Inference reduces unnecessary annotations.**
>         3. **Unions model alternatives.**
>         4. **Generics preserve relationships** between input and output types.
>         5. **Narrowing makes broad types usable.**
>     > Suggested learning order
>         **Foundation:** Fundamentals, Basic Types, Arrays & Tuples, Objects, Functions, Type Aliases.
>         **Core type system:** Unions & Literals, Interfaces, Enums, Narrowing, Assertions, Generics, keyof/typeof, Indexed Access, Intersections.
>         **Type transformation:** Utility Types, Overloads, Classes, Compatibility, Null/Undefined.
>         **Project TypeScript:** Modules, tsconfig, JS → TS, Declaration Files, Error Handling, Async, APIs.
>         **Production habits:** Best Practices, Practical Patterns.
>         **Interview:** Fundamentals, Practice & Revision.
>     > What "good at TypeScript" means
>         Looking at `fetch(...).then(res => res.json())` and writing a typed `async function getUser(id: number): Promise<User>`, then remembering: *the type tells the compiler what I expect; it doesn't prove the server returned that structure.*
>         Aim for code that is correct, understandable, maintainable, reusable, safe, easy to refactor and easy to test.