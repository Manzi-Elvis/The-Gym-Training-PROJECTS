# 🟦 TypeScript: From JS Dev to TS Pro

> 🧭 **The loop for every concept:** Understand it → See the JS version → Write the TS → Explain it out loud → Practice it.
> 🎯 **The real goal:** know *what TS protects you from*, *what survives to runtime*, and *how types model your program*.

---

- 🚀 **1. TypeScript Fundamentals**
  - 🤔 **What is TypeScript?**
    - JavaScript **+ a safety net** 🕸️
    - A *superset* of JS: all valid JS is valid TS
    - Gets turned into plain JS before running (browsers and Node only speak JS)
    - 🧠 **Mental model**
      - JS: "run it and find out what breaks" 💥
      - TS: "the compiler warns you first" 🚨
    - ```ts
      function add(a: number, b: number): number {
        return a + b;
      }
      add("10", 20); // ❌ caught before running
      ```
    - 🎤 **Say it in an interview:** "A statically typed superset of JavaScript that adds types, interfaces, generics and tooling, then compiles to JS. Types don't exist at runtime."
  - ⚔️ **TypeScript vs JavaScript**
    - JS: dynamic, runs directly, errors show up at runtime
    - TS: static, gets compiled, many errors caught early
    - ⚠️ **TS does NOT make runtime safe.** Types are erased.
  - 💪 **Why bother?**
    - Early bug catching 🐛
    - Autocomplete that actually knows things ✨
    - Fearless refactoring 🔧
    - Code that documents itself 📖
  - ⏱️ **Compile time vs runtime**
    - 🏗️ *Compile time:* TS reads your code and complains
    - 🏃 *Runtime:* JS runs, and it has **never heard of your `interface User`**
  - 🧹 **Type erasure**
    - TS types vanish in the output
    - ```ts
      function greet(name: string): string { return `Hi ${name}`; }
      // becomes → function greet(name) { return `Hi ${name}`; }
      ```

    - 🚨 `type User = { name: string }` does **not** validate incoming data
  - 🛠️ **Setup cheat sheet**
    - ```bash
      npm install -D typescript
      npx tsc --init        # make tsconfig.json
      npx tsc               # compile
      npx tsc --noEmit      # just check types (perfect for CI)
      ```
    - `.ts` = plain TS, `.tsx` = TS + JSX (React)

- 🧱 **2. Type System Fundamentals**
  - 🎒 **Basic types**
    - `string`, `number` (no int/float split), `boolean`, `bigint` (`123n`), `symbol`
    - `null` = "intentionally empty", `undefined` = "not set"
  - 🔮 **Type inference** (TS is smart, let it work)
    - `const age = 25` → TS already knows it's `number`
    - 📏 **Rule:** annotate *contracts* (function params, public APIs), skip the obvious
  - 📚 **Arrays**
    - ```ts
      const names: string[] = ["Elvis", "Jane"];
      const grid: number[][] = [[1, 2], [3, 4]];
      const locked: readonly number[] = [1, 2]; // push() ❌
      ```
  - 🎟️ **Tuples** (fixed-position arrays)
    - ```ts
      const user: [string, number] = ["Elvis", 25];
      ```
    - 🧠 **Array = a bag of similar things. Tuple = a fixed-slot form.**
  - 📦 **Object shapes**
    - ```ts
      type User = {
        readonly id: number;  // can't change
        name: string;
        age?: number;         // optional
      };
      ```

- ⚡ **3. Functions**
  - 🎛️ **Typed params and returns**
    - ```ts
      function add(a: number, b: number): number { return a + b; }
      ```
  - 🎚️ **Optional, default, rest**
    - ```ts
      function greet(name: string, title?: string) {}   // title: string | undefined
      function hi(name: string, greeting = "Hello") {}
      function sum(...nums: number[]) {}
      ```
  - 🔌 **Function types and callbacks**
    - ```ts
      type MathOp = (a: number, b: number) => number;
      function run(cb: (name: string) => void) {}
      ```
  - 🕳️ **`void`** = "don't use my return value" (not "nothing exists")
  - 🎭 **Overloads** (one function, several costumes)

    - ```ts
      function format(v: string): string;
      function format(v: number): string;
      function format(v: string | number): string { return String(v); }
      ```

    - 💡 If every input behaves the same, a plain union is simpler

- 🔀 **4. Unions, Intersections & Literals**
  - 🍕 **Union `|`** → "this **OR** that"
    - `type ID = string | number`
  - 🎯 **Literal types** → exact allowed values
    - ```ts
      type Direction = "up" | "down" | "left" | "right";
      type Theme = "light" | "dark" | "system";
      ```
    - Better than a loose `string` for fixed sets
  - 🧬 **Intersection `&`** → "this **AND** that"
    - ```ts
      type Entity = { id: string } & { createdAt: Date };
      ```
  - 🧠 `A | B` = either. `A & B` = both.

- 🎩 **5. Special Types**
  - 🕳️ **`any`** → turns the safety net **off** (avoid it)
  - 🔒 **`unknown`** → "I don't know yet, so check first"
    - ```ts
      let a: any = "hi";     a.nope();  // ✅ allowed (scary)
      let b: unknown = "hi"; b.nope();  // ❌ blocked (good)
      ```
    - 🎤 "I prefer `unknown` when I genuinely don't know the type."
  - 💀 **`never`** → can't happen (always throws or never ends)
    - ```ts
      function fail(msg: string): never { throw new Error(msg);}
  - 🆚 **`void` vs `never`**
    - `void`: returns, but ignore it
    - `never`: never returns normally

- 🔍 **6. Type Narrowing**
  - 🔦 **What it is:** shrinking a wide type into a specific one
    - ```ts
      function print(v: string | number) {
        if (typeof v === "string") v.toUpperCase(); // string here
        else v.toFixed(2);                          // number here
      }
      ```
  - 🧰 **Your narrowing toolkit**
    - `typeof` → primitives
    - `instanceof` → classes
    - `"bark" in animal` → property checks
    - `=== null` → equality
    - truthiness ⚠️ `""`, `0`, `false` are also falsy
  - 🌊 **Control-flow narrowing:** TS follows your `if`/`return`
    - ```ts
      if (value === null) return;
      value.length; // ✅ now it's a string
      ```
  - 🏷️ **Discriminated unions** (a shared "tag" does the narrowing for you)
    - ```ts
      type State<T> =
        | { status: "loading" }
        | { status: "success"; data: T }
        | { status: "error"; message: string };
      ```

- 🛡️ **7. Type Guards & Assertions**
  - 👮 **Custom type guard** (`value is Type`)
    - ```ts
      function isString(v: unknown): v is string {
        return typeof v === "string";
      }
      ```
    - ⚠️ TS trusts your guard, so a wrong one means silent bugs
  - 🙏 **Assertions (`as`)** = "trust me, compiler"
    - ```ts
      const el = document.querySelector("#email") as HTMLInputElement; // ok
      const user = JSON.parse(data) as User; // 😬 validates NOTHING
      const n = "123" as unknown as number;  // still a string!
      Number("123");                         // real conversion
      ```
    - `!` (non-null assertion) = "I swear it's not null". Use sparingly.

- 🏷️ **8. Interfaces & Type Aliases**
  - 📛 **Type alias:** a name for any type (objects, unions, functions, tuples)
    - Name by *meaning*: `CreateUserInput` ✅, `Data` / `Stuff` ❌
  - 📐 **Interface:** the blueprint of an object
    - ```ts
      interface User {
        readonly id: number;
        name: string;
        age?: number;
        greet(): string;
      }
      interface Employee extends User { employeeId: number }
      class Dog implements Animal { /* ... */ }
      ```
  - ⚖️ **`interface` vs `type`**
    - Both describe objects and overlap a lot
    - `interface` → extensible object/class contracts
    - `type` → unions, intersections, tuples, fancy combos

- 🏗️ **9. Object Type System**
  - 🪆 **Nested shapes:** `type User = { address: Address }`
  - 🗝️ **Index signatures** (dynamic keys): `{ [username: string]: number }`
  - 🦆 **Structural typing** ("if it quacks like a `User`...")
    - Compatibility = **shape**, not name
    - ```ts
      const person = { name: "Elvis", age: 25 };
      const user: User = person; // ✅ has what User needs
      ```
  - 🚧 **Excess property checks:** fresh object literals get stricter treatment
    - `const u: User = { name: "E", age: 25 }` ❌ ('age' not in User)
  - 🕳️ **Null & undefined**
    - Turn on `strictNullChecks`
    - `user?.address?.city` → optional chaining
    - `input ?? "Guest"` → only replaces `null`/`undefined` (unlike `||`)

- 🔢 **10. Enums**
  - ```ts
    enum Role { Admin = "admin", User = "user" }
    ```

  - `const enum` has special compile behavior, so know the trade-offs first
  - 🥊 **Enum vs union literal**
    - Enums exist at runtime 🏃
    - `type Status = "pending" | "paid"` is type-only and usually simpler ✨

- 🧪 **11. Generics** (types with a "fill in later" slot)
  - 🎁 **The idea:** `T` = "whatever type the caller gives me"
    - ```ts
      function identity<T>(value: T): T { return value; }
      identity("Elvis"); // string
      identity(25);      // number
      ```
  - 🧩 **Where generics show up**
    - Functions: `first<T>(items: T[]): T | undefined`
    - Interfaces: `interface ApiResponse<T> { success: boolean; data: T }`
    - Aliases: `type Box<T> = { value: T }`
    - Classes: `class Storage<T> { constructor(private v: T) {} }`
  - 🚧 **Constraints (`extends`)**
    - ```ts
      function getLength<T extends { length: number }>(v: T) { return v.length; }
      getLength("hi");  // ✅
      getLength(123);   // ❌
      ```
  - 🌍 **Real life:** `Repository<T>`, `ApiResponse<T>`, `ListProps<T>` in React

- 🔑 **12. `keyof`**
  - Gives a union of an object's keys
    - ```ts
      type UserKey = keyof User; // "name" | "age"
      ```
  - 🛡️ **Safe property access**
    - ```ts
      function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
      }
      getProperty(user, "email"); // ❌ doesn't exist
      ```

- 🎯 **13. Indexed Access Types**
  - ```ts
    type Name = User["name"];            // string
    type Values = User[keyof User];      // string | number
    type Item = Users[number];           // array element type
    ```
  - `T[K]` is the star of generic APIs

- 🪞 **14. `typeof` in TypeScript**
  - Two lives
    - 🏃 *Runtime:* `typeof "hi"` → `"string"`
    - 🏗️ *Type position:* grabs the type of a value
  - ```ts
    const config = { host: "localhost", port: 3000 };
    type Config = typeof config;
    type ConfigKey = keyof typeof config; // "host" | "port"
      ```

- 🧰 **15. Utility Types** (built-in type power tools)
  - 🧱 **Objects**
    - `Partial<T>` → everything optional (great for updates)
    - `Required<T>` → everything required
    - `Readonly<T>` → everything locked
    - `Pick<T, K>` → keep only these keys
    - `Omit<T, K>` → drop these keys
    - `Record<K, V>` → dictionary
  - 🍕 **Unions**
    - `Exclude<T, U>` → remove members
    - `Extract<T, U>` → keep matching members
    - `NonNullable<T>` → drop `null` and `undefined`
  - ⚙️ **Functions and more**
    - `ReturnType<typeof fn>`, `Parameters<typeof fn>`
    - `InstanceType<typeof Class>`
    - `Awaited<Promise<string>>` → `string`

- 🏛️ **16. Classes**
  - ```ts
    class User {
      constructor(public name: string, public readonly id: number) {}
      greet() { return `Hello ${this.name}`; }
    }
  ```
  - 🚪 **Visibility:** `public` (anywhere) · `private` (class only) · `protected` (class + subclasses)
  - ⚙️ **Extras:** `readonly`, `static`, getters/setters
  - 🏗️ **Abstract classes:** can't be instantiated, subclasses must fill in the blanks

- 📦 **17. Modules**
  - Named: `export const x` / `import { x } from "./a"`
  - Default: `export default App` / `import App from "./App"`
  - Re-export: `export { UserService } from "./UserService"`
  - Types only: `import type { User } from "./types"`
  - ESM (`import`/`export`) vs CommonJS (`require`/`module.exports`)

- ⚙️ **18. `tsconfig.json`**
  - 🎛️ **Greatest hits**
    - `target` → JS version out
    - `module` / `moduleResolution` → how imports work
    - `strict` → **turn this on** 🔥
    - `outDir` / `rootDir` → where stuff goes
    - `noEmit` → check only
    - `esModuleInterop`, `paths`, `sourceMap`, `declaration`, `lib`
  - 🌱 **Solid starter**
    - ```json
      {
        "compilerOptions": {
          "target": "ES2022",
          "module": "NodeNext",
          "moduleResolution": "NodeNext",
          "strict": true,
          "noEmit": true,
          "esModuleInterop": true,
          "skipLibCheck": true
        },
        "include": ["src"]
      }
      ```

- 🔗 **19. TS + JS Interop**
  - 🐢 **Migrate gradually**, one file at a time (`.js` → `.ts`)
  - 📝 JSDoc can add types to plain JS
  - 📥 `npm i -D @types/node` → types for JS packages (via DefinitelyTyped)
  - 🤷 **Untyped library?** Install `@types`, write a declaration, wrap it, use `unknown` + validate

- 📄 **20. Declaration Files (`.d.ts`)**
  - Types with no implementation
    - ```ts
      declare function greet(name: string): string;
      declare module "legacy-lib" { export function hello(n: string): string }
      declare global { interface Window { myAppVersion: string } }
    ```

- 🧯 **21. Error Handling**
  - Caught errors are `unknown`, so narrow them
    - ```ts
      try { risky(); }
      catch (error: unknown) {
        if (error instanceof Error) console.error(error.message);
      }
     ```
  - 🛟 **Helper**
    - ```ts
      const getErrorMessage = (e: unknown) => e instanceof Error ? e.message : "Unknown error";
     ```
  - 🧨 **Custom errors:** `class NotFoundError extends Error { ... }`

- ⏳ **22. Async TypeScript**
  - `Promise<User>` = "a promise that eventually gives a `User`"
  - ```ts
    async function fetchUsers(): Promise<User[]> {
      const res = await fetch("/api/users");
      return res.json(); // ⚠️ NOT validated
    }
    ```

- 🌐 **23. TypeScript + APIs**
  - 🧾 **Common types**
    - ```ts
      type ApiResponse<T> = { success: boolean; data: T; message?: string };
      type PaginatedResponse<T> = { data: T[]; page: number; limit: number; total: number };
    ```
    - DTO = Data Transfer Object (NestJS loves these)
  - 🚨 **Golden rule**
    - **TypeScript checks your code. Runtime validation checks external data.**
    - `const data: unknown = JSON.parse(json);` → validate, *then* trust
    - Validate: HTTP responses, user input, env vars, files, DB results, third-party APIs
    - 🌊 `User input → HTTP → JSON → validation → TS model → business logic`

- ✅ **24. Best Practices**
  - 🔒 Use `strict`
  - 🔮 Infer when it's obvious
  - 🙅 No casual `any`, prefer `unknown`
  - 🙏 Fewer assertions
  - 🎯 Model data accurately (no `data: any`)
  - ♻️ Reusable, well-named types
  - 🧘 Don't over-engineer
  - 🪜 Separate layers: `DatabaseUser` → `User` → `UserResponse` → `UserViewModel`

- 🧙 **25. Practical Patterns**
  - 🎁 **Result type**
    - ```ts
      type Result<T> =
        | { success: true; data: T }
        | { success: false; error: string };
     ```
  - 📡 **Event type:** `{ type: "USER_CREATED"; userId: number }`
  - 🗄️ **Repository:** `findById(id): Promise<User | null>`
  - Also: config types, form types, DB models, generic helpers like `groupBy<T, K extends keyof T>`

- 🎤 **26. Interview Cheat Sheet**
  - 🟢 **Basics**
    - **TypeScript:** typed superset of JS, types erased at runtime
    - **Static vs dynamic:** checked before vs during execution
    - **Inference:** TS figures out the type without annotation
    - **Union vs intersection:** one of vs all of
    - **Enum vs union:** runtime object vs type-only
  - 🟡 **Intermediate**
    - **Generics:** reusable code that keeps input/output types linked
    - **keyof:** union of an object's keys
    - **typeof:** runtime operator in JS, type extractor in TS
    - **Narrowing:** TS uses control flow to get more specific
    - **Type guard:** runtime check TS can learn from
    - **Utility types:** built-in type transformers
    - **Structural typing:** shape over name
    - **Overloads:** multiple signatures, one implementation
    - **`.d.ts`:** types without implementation
    - **Strict mode:** stronger checks, preferred in production

- 🏋️ **27. Practice Gym**
  - 💪 **Reps**
    - Convert JS to TS
    - Handle every case in a union
    - Write `first<T>()`
    - Apply `Pick` / `Partial` / `Omit` / `Readonly` to a `User`
    - Type an API response
    - Type React props, state, events and hooks
    - Type Node `process.env`
    - Build a NestJS CRUD with DTOs
  - 🧠 **Explain-it test**
    - Pick a topic and explain: what it is → why it exists → the problem it solves → syntax → example → when to use → when to avoid
  - 📊 **Weak-spot tracker**
    - Rate each area 0 to 100%, then attack the lowest ones first

- 🧠 **The Big Picture**
  - 🗺️ `.ts source → type check → ❌ fix / ✅ JavaScript → runtime`
  - Types protect **compile time**. Validation protects **runtime**.
  - 🖐️ **The five ideas to never forget**
    - 1️⃣ Types describe values
    - 2️⃣ Inference cuts the noise
    - 3️⃣ Unions model alternatives
    - 4️⃣ Generics keep relationships intact
    - 5️⃣ Narrowing makes wide types usable
  - 🏆 **"Good at TS" means**
    - Writing `Promise<User>` and *still* remembering: "the type says what I **expect**, not what the server **sent**"
    - Code that's correct, readable, maintainable, reusable, safe and easy to refactor