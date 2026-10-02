# 🟦 TypeScript for Beginners: The Friendly, Detailed Edition

> 🧭 **Who this is for:** you know a bit of JavaScript and want TypeScript to finally *click*.
> 🗝️ **How to read each topic:** 🧒 plain-English version → 🔬 the deeper detail → ⚠️ the trap beginners fall into → ✍️ something to try.
> 🎤 = a line you can say out loud in an interview.

---

- 🧪 **0. Your Playground (do this first)**
  - 🧒 **You need somewhere to experiment.** Reading about types is like reading about swimming. Get in the water.
  - 🌐 **Option A: the online Playground (zero setup)**
    - Go to `typescriptlang.org/play`
    - Type TypeScript on the left. Errors appear instantly as red squiggles. The plain JavaScript output shows on the right.
    - Best for trying the examples in these notes.
  - 💻 **Option B: a tiny local project**
    - ```bash
      mkdir ts-playground && cd ts-playground
      npm init -y
      npm install -D typescript tsx     # tsx lets you run .ts files directly
      npx tsc --init                    # creates tsconfig.json
      mkdir src && touch src/index.ts
      ```
    - Write something in `src/index.ts`, then use the two commands you'll use all the time:
    - ```bash
      npx tsc --noEmit            # CHECK: find type errors, produce nothing
      npx tsx src/index.ts        # RUN: execute the file
      ```
  - 🔬 **Two different jobs, two different tools**
    - *Type-checking* (is my code consistent?) is done by `tsc`
    - *Running* (do the thing) is done by Node, or a helper like `tsx`
    - Many beginners think these are one step. They aren't. This idea shows up everywhere.
  - 🧒 **In VS Code,** the red squiggles *are* the TypeScript compiler talking to you. Hover over them. They're friendlier than they look.

---

- 🚀 **1. TypeScript Fundamentals**
  - 🤔 **What is TypeScript?**
    - 🧒 **Plain English:** TypeScript is JavaScript with **labels on your data**. The labels say "this is a number", "this is a user with a name and an email". A tool then checks that you used everything consistently.
    - 🧠 **Analogy:** a spell-checker for your code logic. Your word processor underlines `teh` before you print. TypeScript underlines `user.nmae` before you ship.
    - 🔬 **"Superset" means:** every valid JavaScript file is already valid TypeScript. TypeScript only *adds* things. You can adopt it one file at a time.
    - 🔬 **Who made it:** Microsoft (led by Anders Hejlsberg, who also designed C#).
    - ```text
      ┌────────────── TypeScript ──────────────┐
      │  types, interfaces, generics, ...      │
      │    ┌────────── JavaScript ──────────┐  │
      │    │ everything you already know    │  │
      │    └────────────────────────────────┘  │
      └────────────────────────────────────────┘
      ```
  - 🐛 **The problem TypeScript solves (a real JavaScript bug)**
    - ```js
      function add(a, b) {
        return a + b;
      }

      console.log(add(10, 20));   // 30   ✅
      console.log(add("10", 20)); // "1020" 😱 (string glued to number, no error!)
      ```
    - JavaScript never complains. The bug sneaks into production.
    - Now the TypeScript version:
    - ```ts
      function add(a: number, b: number): number {
        return a + b;
      }

      add(10, 20);   // ✅
      add("10", 20); // ❌ Argument of type 'string' is not assignable to parameter of type 'number'
      ```
    - 🧒 `a: number` reads "a is a number". That `: type` part is called a **type annotation**.
  - 🧠 **Mental model**
    - JS: "write it, run it, **discover** what's broken" 💥
    - TS: "write it, the compiler **warns** you, then run it" 🚨
  - 🎤 **Say it in an interview**
    - "TypeScript is a statically typed superset of JavaScript from Microsoft. It adds types, interfaces and generics, and compiles to plain JavaScript. The types exist only during development, not at runtime."
  - ✍️ **Try it:** paste the `add` example into the Playground. Hover the red squiggle. Read the message out loud.

  - ⚔️ **TypeScript vs JavaScript**
    - 🧒 They are not rivals. TS is JS plus a safety layer.
    - | | JavaScript | TypeScript |
      |---|---|---|
      | Typing | Dynamic (types known while running) | Static (types known before running) |
      | File | `.js` | `.ts` / `.tsx` |
      | Runs in browser/Node? | Directly | After being turned into JS |
      | Bugs found | Often at runtime, by users 😬 | Many at your desk, by the compiler 😌 |
      | Autocomplete | Guesses | Knows exactly |
    - ```js
      // JavaScript: crashes ONLY when this line runs
      const user = { name: "Elvis", age: 25 };
      user.age.toUpperCase(); // TypeError: user.age.toUpperCase is not a function
      ```
    - ```ts
      // TypeScript: red squiggle the moment you type it
      const user = { name: "Elvis", age: 25 };
      user.age.toUpperCase(); // ❌ Property 'toUpperCase' does not exist on type 'number'
      ```
    - ⚠️ **TS does NOT make your app crash-proof.** It checks *your code*, not the data that arrives later (more on this below).

  - 💪 **Why bother? (the real benefits)**
    - 🐛 **Catch bugs early:** typos, wrong argument types, missing properties
    - ✨ **Better autocomplete:** type `user.` and see exactly what exists
    - 🔧 **Safe refactoring:** rename a property and TS shows every place that breaks
    - 📖 **Self-documenting code:** a function signature tells you what it needs
    - 👥 **Teamwork:** other developers can't accidentally misuse your function
    - ```ts
      interface User {
        id: number;
        name: string;
        email: string;
      }

      function sendEmail(user: User) {
        console.log(user.email);
      }
      // Anyone reading this knows exactly what sendEmail expects.
      ```
    - 🎤 "TypeScript moves many classes of errors from runtime to development time, and improves tooling and refactoring."

  - 🧊 **Static typing vs dynamic typing**
    - 🧒 **Dynamic (JavaScript):** a variable is a box that can hold anything, anytime.
    - 🧒 **Static (TypeScript):** each box has a label, and only that kind of thing may go inside.
    - ```js
      // JavaScript: totally allowed
      let value = 10;
      value = "hello";
      value = true;
      ```
    - ```ts
      // TypeScript
      let value: number = 10;
      value = "hello"; // ❌ Type 'string' is not assignable to type 'number'
      ```
    - 🔬 JavaScript itself is still dynamic when it runs. TypeScript adds checking *before* it runs.

  - ⏱️ **Compile time vs runtime (the most important idea)**
    - 🏗️ **Compile time:** you're writing code and TS reads it. No code has run yet. Errors here are free to fix.
    - 🏃 **Runtime:** the JavaScript is actually running, for real users. Errors here are expensive.
    - ```ts
      const age: number = "twenty";
      // Compile time: ❌ Type 'string' is not assignable to type 'number'
      ```
    - 🔬 **Surprising fact:** by default, `tsc` still produces the JavaScript file *even if there are type errors*. The errors are warnings for you. (Add `"noEmitOnError": true` to block output on errors.)
    - 🧠 **Analogy:** TypeScript is a building inspector. They write a report before people move in. They don't change how the building behaves once people are inside.

  - 🧹 **Type erasure: types disappear!**
    - 🧒 When your code is converted to JavaScript, every type annotation is deleted.
    - ```ts
      // What you write (TypeScript)
      function greet(name: string): string {
        return `Hello ${name}`;
      }
      ```
    - ```js
      // What actually runs (JavaScript)
      function greet(name) {
        return `Hello ${name}`;
      }
      ```
    - **Erased completely:** annotations, `interface`, `type`, generics
    - **Kept (they exist at runtime):** variables, functions, classes, `enum`
    - 🚨 **The big consequence:** this does **not** validate incoming data:
    - ```ts
      type User = { name: string };

      const user = JSON.parse('{"name": 123}') as User;
      console.log(user.name.toUpperCase());
      // TypeScript: ✅ no error (you promised it's a User)
      // Runtime:   💥 user.name.toUpperCase is not a function
      ```
    - 🎤 "Types are erased at compile time, so external data still needs runtime validation."

  - 📄 **File types**
    - `.ts` → normal TypeScript
    - `.tsx` → TypeScript + JSX (React components)
    - `.d.ts` → type declarations only, no logic (covered in section 21)
    - ```tsx
      function Welcome() {
        return <h1>Hello</h1>; // JSX needs a .tsx file
      }
      ```

  - 🛠️ **Setup cheat sheet (what each command does)**
    - ```bash
      npm install -D typescript   # add TS to the project (dev-only tool)
      npx tsc --init              # create tsconfig.json (the settings file)
      npx tsc                     # compile all files per tsconfig
      npx tsc app.ts              # compile one file (ignores tsconfig)
      npx tsc --noEmit            # just check types, create no files (great for CI)
      ```
    - `npx` runs a tool from your project's `node_modules`
    - ```json
      {
        "scripts": {
          "build": "tsc",
          "check": "tsc --noEmit"
        }
      }
      ```
    - A typical project:
    - ```text
      my-app/
      ├── src/
      │   └── index.ts      ← you write this
      ├── dist/
      │   └── index.js      ← compiler creates this
      ├── package.json
      └── tsconfig.json
      ```
    - Run the output with `node dist/index.js`. Newer Node versions can even run simple `.ts` files directly by stripping the types.

---

- 🧱 **2. Type System Fundamentals**
  - 🧒 **The core idea:** every value has a **type**, which is a rule about what you can do with it. A `number` can be added. A `string` can be uppercased. Types stop you from doing the wrong thing.
  - ✍️ **The annotation syntax:** `name: Type`
    - ```ts
      let city: string = "Kigali";
      const year: number = 2026;
      function double(n: number): number { return n * 2; }
      //                 ^ param type    ^ return type
      ```

  - 🎒 **Basic (primitive) types**
    - 🔤 **`string`:** text
      - ```ts
        let name: string = "Elvis";
        let greeting: string = `Hello ${name}`; // template strings are strings too
        ```
    - 🔢 **`number`:** all numbers (there is no separate int and float)
      - ```ts
        let age: number = 25;
        let price: number = 99.99;
        let hex: number = 0xff;
        ```
      - ⚠️ Same quirks as JS: `0.1 + 0.2` isn't exactly `0.3`, and `NaN` is a `number`.
    - ✅ **`boolean`:** `true` or `false`
      - ```ts
        let isLoggedIn: boolean = true;
        ```
    - 🐘 **`bigint`:** integers too big for `number` (note the `n`)
      - ```ts
        const huge: bigint = 12345678901234567890n; // needs target ES2020+
        ```
    - 🆔 **`symbol`:** a guaranteed-unique value (rare in everyday code)
      - ```ts
        const id: symbol = Symbol("id");
        ```
    - 🕳️ **`null` and `undefined`**
      - `null` = "I deliberately put nothing here"
      - `undefined` = "nothing was ever set"
      - ```ts
        let selectedUser: User | null = null;   // none chosen yet, on purpose
        let nickname: string | undefined;       // never assigned
        ```
      - With `strict` on, `null` and `undefined` are **not** allowed in a `string` slot. That one rule prevents a huge class of bugs ("cannot read properties of undefined").
    - 🧱 **`object`:** any non-primitive. Too vague to be useful, so describe the shape instead:
      - ```ts
        let vague: object = { name: "Elvis" };      // meh

        type User = { name: string };
        let clear: User = { name: "Elvis" };        // better
        ```

  - 🔮 **Type inference: TypeScript is smart, let it work**
    - 🧒 You often don't need to write the type. TS can see it from the value.
    - ```ts
      const age = 25;               // TS infers: number
      const username = "Elvis";     // TS infers: string
      const loggedIn = true;        // TS infers: boolean
      const scores = [10, 20, 30];  // TS infers: number[]
      ```
    - 🔬 **`const` vs `let` makes a difference (a neat detail)**
    - ```ts
      const a = "hi";  // type is the exact literal "hi"
      let b = "hi";    // type is string (it could change later)
      ```
    - ⚠️ **Common mistake:** declaring an empty variable. TS can't infer.
    - ```ts
      let value;            // implicitly 'any' (bad)
      let value2: string;   // fine, assigned later
      ```
    - 📏 **When to annotate (rule of thumb)**
      - ✅ **Annotate:** function parameters, exported functions' return types, empty arrays/objects, anything where you want a contract
      - ❌ **Skip:** obvious things like `const name: string = "Elvis"`
    - ```ts
      function calculateTotal(price: number, tax: number): number {
        return price + tax;   // params annotated (contract), body inferred
      }
      ```
    - 🎤 "Don't annotate everything and don't rely on inference everywhere. Annotate where the type communicates an important contract."

  - 📚 **Arrays**
    - 🧒 A list where **every item is the same type**.
    - ```ts
      const names: string[] = ["Elvis", "John", "Jane"];
      const scores: number[] = [10, 20, 30];
      const alsoNames: Array<string> = ["a", "b"];  // same thing, different syntax
      ```
    - `string[]` is the style most people use.
    - **Arrays of objects:**
    - ```ts
      type User = { id: number; name: string };

      const users: User[] = [
        { id: 1, name: "Elvis" },
        { id: 2, name: "Jane" },
      ];
      ```
    - **Arrays of arrays (a grid):**
    - ```ts
      const matrix: number[][] = [
        [1, 2],
        [3, 4],
      ];
      ```
    - **Mixed arrays need a union:**
    - ```ts
      const mixed: (string | number)[] = ["Elvis", 25, "Rwanda"];
      ```
    - ⚠️ Don't write `string | number[]`. That means "a string, OR an array of numbers".
    - 🔒 **Readonly arrays:** "look, don't touch"
    - ```ts
      const numbers: readonly number[] = [1, 2, 3];
      numbers.push(4); // ❌ Property 'push' does not exist on type 'readonly number[]'

      function sum(nums: readonly number[]): number {
        return nums.reduce((total, n) => total + n, 0);
      }
      // This function promises not to modify the caller's array.
      ```

  - 🎟️ **Tuples: fixed-length, fixed-position arrays**
    - 🧒 An array where **position 0 is one type and position 1 is another**. Think of a form with fixed slots.
    - ```ts
      const user: [string, number] = ["Elvis", 25];

      const name = user[0];   // string
      const age = user[1];    // number
      user[2];                // ❌ Tuple type '[string, number]' has no element at index 2
      ```
    - **Optional and readonly elements:**
    - ```ts
      type Entry = [string, number?];
      const e1: Entry = ["Elvis"];
      const e2: Entry = ["Elvis", 25];

      const point: readonly [number, number] = [10, 20];
      ```
    - 🔬 **You've seen tuples already:** React's `useState` returns one: `[value, setValue]`.
    - 🧠 **Array = a bag of similar things. Tuple = a form with labeled slots.**
    - 🎤 "Use tuples for small fixed-structure data. For anything bigger, use an object, since names are clearer than positions."

  - 📦 **Object shapes**
    - 🧒 Describe an object by listing its properties and their types.
    - ```ts
      const user: {
        name: string;
        age: number;
      } = {
        name: "Elvis",
        age: 25,
      };
      ```
    - Inline types get ugly fast. Give it a name with a **type alias**:
    - ```ts
      type User = {
        name: string;
        age: number;
      };

      const user: User = { name: "Elvis", age: 25 };
      ```
    - **Optional properties (`?`):** may be missing
    - ```ts
      type User = {
        name: string;
        age?: number;   // type is number | undefined
      };

      const a: User = { name: "Elvis" };            // ✅
      const b: User = { name: "Elvis", age: 25 };   // ✅
      ```
    - **Readonly properties:** can be set once, never changed
    - ```ts
      type Account = {
        readonly id: number;
        name: string;
      };

      const acc: Account = { id: 1, name: "Main" };
      acc.name = "Savings"; // ✅
      acc.id = 2;           // ❌ Cannot assign to 'id' because it is a read-only property
      ```
    - **Nested objects:**
    - ```ts
      type Address = { city: string; country: string };
      type Person = { name: string; address: Address };

      const p: Person = {
        name: "Elvis",
        address: { city: "Kigali", country: "Rwanda" },
      };
      console.log(p.address.city);
      ```
    - **Index signatures (keys you can't list in advance):**
    - ```ts
      type Scores = { [username: string]: number };

      const scores: Scores = { Elvis: 100, John: 90 };
      scores["Jane"] = 85; // ✅ any string key allowed
      ```
    - ✍️ **Try it:** model a `Product` with `id`, `name`, `price`, optional `description`, and read-only `sku`.

---

- ⚡ **3. Functions**
  - 🧒 **A function has an input contract (parameters) and an output contract (return type).** TypeScript checks both.
  - 🎛️ **Parameter types and return types**
    - ```ts
      function add(a: number, b: number): number {
        return a + b;
      }

      add(2, 3);        // ✅ 5
      add(2);           // ❌ Expected 2 arguments, but got 1
      add(2, "3");      // ❌ string not assignable to number
      add(2, 3, 4);     // ❌ Expected 2 arguments, but got 3
      ```
    - 🔬 **TS also checks the argument COUNT.** JavaScript silently lets you pass too many or too few.
    - ⚠️ **If you promise a return type, you must keep the promise:**
    - ```ts
      function getAge(): number {
        return "25"; // ❌ Type 'string' is not assignable to type 'number'
      }
      ```
    - 🔮 **Return types can be inferred:**
    - ```ts
      const multiply = (a: number, b: number) => a * b;  // returns number (inferred)
      ```
    - ✅ Still, writing the return type on important/exported functions catches mistakes inside the function body.
    - 🧩 **Contextual typing (free types for callbacks):**
    - ```ts
      const nums = [1, 2, 3];
      nums.map((n) => n * 2);   // n is inferred as number, no annotation needed
      ```

  - 🎚️ **Optional, default and rest parameters**
    - **Optional (`?`):** caller may skip it. Inside, it might be `undefined`, so check first.
    - ```ts
      function greet(name: string, title?: string) {
        if (title) {
          return `Hello ${title} ${name}`;
        }
        return `Hello ${name}`;
      }

      greet("Elvis");           // ✅
      greet("Elvis", "Dr.");    // ✅
      ```
    - **Default values:** gives the parameter a fallback (and TS infers its type)
    - ```ts
      function greetDefault(name: string, greeting = "Hello") {
        return `${greeting}, ${name}`;   // greeting is string
      }
      ```
    - **Rest parameters:** collect many arguments into an array
    - ```ts
      function sum(...numbers: number[]): number {
        return numbers.reduce((total, n) => total + n, 0);
      }
      sum(1, 2, 3, 4); // 10
      ```
    - ⚠️ **Optional ≠ `| undefined`:**
    - ```ts
      function a(x?: string) {}            // caller may omit x
      function b(x: string | undefined) {} // caller MUST pass x (even if undefined)

      a();  // ✅
      b();  // ❌ Expected 1 arguments, but got 0
      ```
    - Also: required parameters can't come after optional ones.

  - 🔌 **Function types and callbacks**
    - 🧒 A **function type** describes the shape of a function: parameters in, return type out.
    - ```ts
      type MathOperation = (a: number, b: number) => number;

      const add: MathOperation = (a, b) => a + b;        // a and b inferred
      const subtract: MathOperation = (a, b) => a - b;
      ```
    - **Callbacks (a function passed to a function):**
    - ```ts
      function processUser(name: string, callback: (name: string) => void) {
        callback(name);
      }

      processUser("Elvis", (name) => {
        console.log(name.toUpperCase()); // name is string
      });
      ```
    - **Inline arrow-function type:**
    - ```ts
      const greet: (name: string) => string = (name) => `Hello ${name}`;
      ```

  - 🕳️ **`void`: "no useful return value"**
    - ```ts
      function logMessage(message: string): void {
        console.log(message);
      }
      ```
    - 🧒 `void` means "don't use the result". It doesn't mean "nothing exists".
    - 🔬 **A neat quirk:** a callback typed as returning `void` may actually return something. TS just says "I won't let you rely on it".

  - 🎭 **Function overloads: one function, several costumes**
    - 🧒 Sometimes the return type depends on the input type. Overloads describe each valid combo.
    - ```ts
      function format(value: string): string;      // overload 1
      function format(value: number): string;      // overload 2
      function format(value: string | number): string {   // implementation
        return String(value);
      }

      format("hello"); // ✅
      format(123);     // ✅
      format(true);    // ❌ No overload matches this call
      ```
    - 🔬 Callers only see the overload signatures. The implementation signature is hidden from them.
    - **When overloads really help (return type changes with input):**
    - ```ts
      function createElement(tag: "div"): HTMLDivElement;
      function createElement(tag: "button"): HTMLButtonElement;
      function createElement(tag: string): HTMLElement {
        return document.createElement(tag);
      }

      const d = createElement("div");     // HTMLDivElement
      const b = createElement("button");  // HTMLButtonElement
      ```
    - ⚠️ **Don't overuse them.** If every input behaves the same, a union is simpler:
    - ```ts
      function format(value: string | number): string {
        return String(value);
      }
      ```
    - ✍️ **Try it:** write `double(x: number)` and `double(x: string)` overloads that return `number` and `string` respectively.

---

- 🔀 **4. Unions, Intersections & Literal Types**
  - 🍕 **Union types (`|`): "this OR that"**
    - 🧒 A value can be one of several types. Like a form field that accepts a phone number *or* an email.
    - ```ts
      let id: string | number;

      id = 123;      // ✅
      id = "abc";    // ✅
      id = true;     // ❌ boolean isn't allowed
      ```
    - ```ts
      function printId(id: string | number) {
        console.log(id);
      }
      ```
    - **Name a union with a type alias:**
    - ```ts
      type ID = string | number;
      type Value = string | number | boolean;
      ```
    - ⚠️ **The #1 beginner surprise:** until you narrow, you can only use what *all* members share.
    - ```ts
      function shout(id: string | number) {
        id.toUpperCase();
        // ❌ Property 'toUpperCase' does not exist on type 'string | number'
        //    (a number has no toUpperCase!)
      }

      function shoutFixed(id: string | number) {
        if (typeof id === "string") {
          id.toUpperCase(); // ✅ narrowed to string (see section 6)
        }
      }
      ```
    - 🧠 A union says "it's one of these", not "it's all of these".

  - 🎯 **Literal types: exact allowed values**
    - 🧒 Instead of "any string", say "only these specific strings".
    - ```ts
      let direction: "left" | "right";

      direction = "left";   // ✅
      direction = "right";  // ✅
      direction = "up";     // ❌ Type '"up"' is not assignable to type '"left" | "right"'
      ```
    - Works for numbers and booleans too:
    - ```ts
      type StatusCode = 200 | 404 | 500;
      type Enabled = true;
      ```
    - 🎨 **Where literals shine (real examples):**
    - ```ts
      type Role = "admin" | "user" | "moderator";
      type Status = "pending" | "processing" | "completed" | "failed";
      type Theme = "light" | "dark" | "system";
      type Direction = "up" | "down" | "left" | "right";
      ```
    - 💡 Benefits: autocomplete suggests the valid values, and typos like `"admn"` become compile errors.
    - 🔬 **Literal widening trap:**
    - ```ts
      const config = { theme: "dark" };
      // config.theme is type string (not "dark"), because objects are mutable

      const config2 = { theme: "dark" } as const;
      // config2.theme is the literal "dark", and the object is readonly
      ```

  - 🧬 **Intersection types (`&`): "this AND that"**
    - 🧒 Combine several types into one that has **everything**.
    - ```ts
      type Person = { name: string };
      type Employee = { employeeId: number };

      type EmployeePerson = Person & Employee;

      const e: EmployeePerson = { name: "Elvis", employeeId: 123 }; // needs BOTH
      ```
    - **Practical use: reusable building blocks**
    - ```ts
      type WithId = { id: string };
      type WithTimestamps = { createdAt: Date; updatedAt: Date };

      type Post = WithId & WithTimestamps & { title: string };
      ```
    - ⚠️ **Conflicts become `never`:** `string & number` is impossible, so nothing satisfies it.
    - 🧠 **Union vs intersection**
      - `A | B` → A **or** B (wider: more things allowed)
      - `A & B` → A **and** B (narrower for primitives, but *more properties* for objects)
    - ✍️ **Try it:** create `type PaymentStatus = "pending" | "paid" | "failed"` and a function that returns a message for each.

---

- 🎩 **5. Special Types**
  - 🕳️ **`any`: the "turn the safety net off" type**
    - 🧒 `any` tells TypeScript "stop checking this". Everything is allowed, including mistakes.
    - ```ts
      let value: any = "hello";

      value.foo.bar.baz();     // ✅ no complaint, 💥 crashes at runtime
      value = 42;              // ✅
      const n: number = value; // ✅ (any quietly slips into other types)
      ```
    - ⚠️ `any` is **contagious:** one `any` can leak through your code and silently disable checks everywhere it touches.
    - ✅ OK when: migrating old JS, or a truly unavoidable edge case. Otherwise avoid.
  - 🔒 **`unknown`: the safe "I don't know yet"**
    - 🧒 `unknown` also means "could be anything", but TypeScript **makes you check** before you use it.
    - ```ts
      let a: any = "hello";
      a.doesNotExist();         // ✅ allowed (dangerous)

      let b: unknown = "hello";
      b.doesNotExist();         // ❌ 'b' is of type 'unknown'
      b.toUpperCase();          // ❌ same

      if (typeof b === "string") {
        b.toUpperCase();        // ✅ narrowed to string
      }
      ```
    - 🧠 **`any` = "trust me, I'm fine". `unknown` = "prove it first."**
    - 🔬 Perfect for: parsed JSON, `catch` errors, function parameters that accept anything.
    - ```ts
      function process(data: unknown) {
        if (typeof data === "string") console.log(data.toUpperCase());
        else if (typeof data === "number") console.log(data.toFixed(2));
        else console.log("Unsupported type");
      }
      ```
    - 🎤 "`any` disables type checking. `unknown` must be narrowed before use. I prefer `unknown` when the type is genuinely unknown."
  - 💀 **`never`: "this can't happen"**
    - 🧒 A value that never exists. Used for functions that **never finish normally**.
    - ```ts
      function fail(message: string): never {
        throw new Error(message);   // always throws, never returns
      }

      function forever(): never {
        while (true) {}             // never ends
      }
      ```
    - 🌟 **The best beginner use: exhaustive checks.** TS yells if you forget a case.
    - ```ts
      type Shape =
        | { kind: "circle"; radius: number }
        | { kind: "square"; size: number };

      function area(shape: Shape): number {
        switch (shape.kind) {
          case "circle":
            return Math.PI * shape.radius ** 2;
          case "square":
            return shape.size ** 2;
          default: {
            const _exhaustive: never = shape;   // if you add a new Shape and forget a case → ❌ error here
            return _exhaustive;
          }
        }
      }
      ```
  - 🆚 **`void` vs `never`**
    - | | Function behavior | Example |
      |---|---|---|
      | `void` | Finishes, but the return value is unimportant | `console.log` wrapper |
      | `never` | Never finishes normally | `throw`, infinite loop |
    - ```ts
      function log(): void { console.log("hello"); }
      function crash(): never { throw new Error("Failed"); }
      ```
  - 🏁 **Quick chooser**
    - Know the type → use it
    - Don't know the type → `unknown` (then narrow)
    - Truly can't type it → `any` (last resort)
    - Function never returns → `never`
    - Function returns nothing useful → `void`

---

- 🔍 **6. Type Narrowing**
  - 🧒 **The idea:** a union is a wide type ("string OR number"). **Narrowing** is how you prove to TypeScript which one it is *right now*, so you can use it safely.
  - 🧠 **Analogy:** a parcel marked "fragile OR heavy". You open the box and look, and then you know how to carry it.
  - 🔦 **The basic example**
    - ```ts
      function print(value: string | number) {
        // Here: value is string | number
        if (typeof value === "string") {
          console.log(value.toUpperCase()); // value is string
        } else {
          console.log(value.toFixed(2));    // value is number (the only option left)
        }
      }
      ```
    - TS understands the `if`/`else` and updates its knowledge in each branch.
  - 🧰 **Your narrowing toolkit**
    - 🔤 **`typeof`:** for primitives (`"string"`, `"number"`, `"boolean"`, `"undefined"`, `"function"`, `"object"`)
      - ```ts
        function process(value: string | number) {
          if (typeof value === "string") return value.toUpperCase();
          return value.toFixed(2);
        }
        ```
    - 🏛️ **`instanceof`:** for class instances
      - ```ts
        class Dog { bark() { console.log("Woof"); } }
        class Cat { meow() { console.log("Meow"); } }

        function speak(animal: Dog | Cat) {
          if (animal instanceof Dog) animal.bark();
          else animal.meow();
        }
        ```
    - 🔑 **`in`:** does this property exist?
      - ```ts
        type Fish = { swim(): void };
        type Bird = { fly(): void };

        function move(animal: Fish | Bird) {
          if ("swim" in animal) animal.swim();
          else animal.fly();
        }
        ```
    - ⚖️ **Equality:** `===`, `!==`
      - ```ts
        function shout(value: string | null) {
          if (value === null) return;
          console.log(value.toUpperCase()); // string
        }
        ```
    - ✅ **Truthiness:** `if (value)`
      - ```ts
        function printName(name?: string) {
          if (name) {
            console.log(name.toUpperCase());
          }
        }
        ```
      - ⚠️ **Truthiness trap:** `""`, `0`, `NaN` and `false` are also falsy.
      - ```ts
        function showCount(count?: number) {
          if (count) { console.log(count); }  // 🐛 skips 0, which is a valid count!
          if (count !== undefined) { console.log(count); }  // ✅ correct
        }
        ```
  - 🌊 **Control-flow narrowing**
    - TS reads your code like a flowchart. An early `return` narrows everything after it.
    - ```ts
      function example(value: string | null) {
        if (value === null) {
          return;
        }
        // From here down, value is string
        console.log(value.length);
      }
      ```
  - 🏷️ **Discriminated unions: the superpower pattern**
    - 🧒 Give every variant a shared **tag** property with a literal value. Checking the tag narrows the entire object.
    - ```ts
      type LoadingState = { status: "loading" };
      type SuccessState = { status: "success"; data: string[] };
      type ErrorState   = { status: "error"; message: string };

      type State = LoadingState | SuccessState | ErrorState;

      function render(state: State) {
        switch (state.status) {
          case "loading":
            return "Loading...";
          case "success":
            return state.data.join(", ");   // data exists only here ✅
          case "error":
            return `Oops: ${state.message}`; // message exists only here ✅
        }
      }
      ```
    - 💡 You'll use this pattern constantly for API results, UI state and events.
  - ✍️ **Try it:** write `formatValue(v: string | number | boolean | null)` that returns a string for every case.

---

- 🛡️ **7. Type Guards & Assertions**
  - 🧒 **Type guards** are *your own* narrowing checks, packaged as reusable functions. **Assertions** are you telling TypeScript to simply believe you.
  - 👮 **Custom type guards (`value is Type`)**
    - 🧒 A function that returns `boolean` **and** teaches TS what the type is when it returns `true`.
    - ```ts
      function isString(value: unknown): value is string {
        return typeof value === "string";
      }

      const input: unknown = "hello";
      if (isString(input)) {
        console.log(input.toUpperCase()); // input is string here ✅
      }
      ```
    - 🌟 **A more useful one: checking an object's shape**
    - ```ts
      type User = { name: string };

      function isUser(value: unknown): value is User {
        return (
          typeof value === "object" &&
          value !== null &&
          "name" in value &&
          typeof (value as { name: unknown }).name === "string"
        );
      }

      const data: unknown = { name: "Elvis" };
      if (isUser(data)) {
        console.log(data.name); // ✅
      }
      ```
    - ⚠️ **TS trusts your guard.** If your check is sloppy (say it forgets to check `name` is a string), TS will happily believe it anyway. Be thorough.
    - **Guards for arrays:**
    - ```ts
      function isNumberArray(value: unknown): value is number[] {
        return Array.isArray(value) && value.every((v) => typeof v === "number");
      }
      ```
  - 🙏 **Type assertions (`as`): "trust me, compiler"**
    - 🧒 You're saying: "I know more about this value than you do."
    - ```ts
      const value: unknown = "hello";
      const text = value as string;   // you vouch for it
      ```
    - ✅ **Reasonable use:** things TS genuinely can't know, like DOM elements
    - ```ts
      const input = document.querySelector("#email") as HTMLInputElement;
      input.value;   // TS only knew it was 'Element | null' before
      ```
    - 🚨 **Dangerous use:** assertions don't *check* anything
    - ```ts
      const user = JSON.parse('{"wrong": "data"}') as User;
      user.name.toUpperCase();   // compiles ✅, crashes at runtime 💥
      ```
    - 🚨 **They also don't convert anything:**
    - ```ts
      const value = "123" as unknown as number;
      // TS now believes it's a number. At runtime it's STILL the string "123".

      const real = Number("123");   // ✅ this is how you actually convert
      ```
    - 🧠 `as` changes **what TypeScript believes**, never **what the value is**.
    - ❗ **Non-null assertion (`!`)**
      - ```ts
        const element = document.querySelector("#app")!; // "I promise it's not null"
        ```
      - If you're wrong, you get a runtime crash. Prefer a real check:
      - ```ts
        const el = document.querySelector("#app");
        if (el) {
          el.textContent = "Hi";
        }
        ```
  - 🎤 "Assertions silence the compiler. Type guards give the compiler real evidence. I prefer guards."

---

- 🏷️ **8. Interfaces & Type Aliases**
  - 📛 **Type aliases (`type`)**
    - 🧒 A **name tag** for any type. Reuse it everywhere instead of retyping.
    - ```ts
      type ID = string | number;                       // a union
      type Point = { x: number; y: number };           // an object
      type Calculator = (a: number, b: number) => number;  // a function
      type Pair = [string, number];                    // a tuple
      ```
    - 🏷️ **Naming tips**
      - ✅ Describe meaning: `User`, `CreateUserInput`, `ApiResponse`, `PaymentStatus`
      - ❌ Avoid vague names: `Data`, `Thing`, `Stuff`, `X`
  - 📐 **Interfaces (`interface`)**
    - 🧒 A **blueprint** for the shape of an object (and what classes should look like).
    - ```ts
      interface User {
        readonly id: number;     // can't be reassigned
        name: string;
        age?: number;            // optional
        greet(): string;         // a method
      }

      const user: User = {
        id: 1,
        name: "Elvis",
        greet() {
          return `Hello ${this.name}`;
        },
      };
      ```
    - **Extending an interface (inheritance for shapes):**
    - ```ts
      interface Person { name: string }
      interface Employee extends Person { employeeId: number }

      const emp: Employee = { name: "Elvis", employeeId: 123 };
      ```
    - **Describing a function:**
    - ```ts
      interface Calculator {
        (a: number, b: number): number;
      }
      const add: Calculator = (a, b) => a + b;
      ```
    - **Classes promising to follow an interface (`implements`):**
    - ```ts
      interface Animal {
        name: string;
        makeSound(): void;
      }

      class Dog implements Animal {
        constructor(public name: string) {}
        makeSound() { console.log("Woof"); }
      }
      ```
  - ⚖️ **`interface` vs `type`: which one?**
    - 🧒 For plain object shapes, they're nearly interchangeable. Don't stress.
    - ```ts
      interface UserA { name: string }
      type UserB = { name: string };
      ```
    - **Differences that matter:**
    - | | `interface` | `type` |
      |---|---|---|
      | Object shapes | ✅ | ✅ |
      | Unions (`A \| B`) | ❌ | ✅ |
      | Tuples, primitives, function types | Limited | ✅ |
      | Extending | `extends` | `&` intersection |
      | Declaration merging | ✅ (same name merges) | ❌ (duplicate name is an error) |
    - 🔬 **Declaration merging (interfaces only):**
    - ```ts
      interface Window { myAppVersion: string }
      interface Window { debug: boolean }
      // Both merge into one Window with both properties. Handy for extending library types.
      ```
    - 📏 **A simple rule:** `interface` for object/class contracts you may extend; `type` for unions, intersections, tuples and more complex combos. Be consistent within a project.
    - 🎤 "Both describe object shapes. Interfaces are great for extension and OOP contracts. Type aliases are more flexible because they can represent unions, intersections and tuples."

---

- 🏗️ **9. Object Type System**
  - 🦆 **Structural typing: "if it quacks like a duck"**
    - 🧒 TypeScript doesn't care what your type is *called*. It cares whether the value has the **right shape**.
    - ```ts
      type User = { name: string };

      const person = { name: "Elvis", age: 25 };
      const user: User = person;   // ✅ person has a 'name: string', that's enough
      ```
    - 🧠 **Contrast with Java/C#:** they ask "what class are you?". TypeScript asks "do you have what I need?".
    - Two differently-named types with the same shape are compatible:
    - ```ts
      interface Customer { name: string }
      interface Employee { name: string }

      const c: Customer = { name: "A" };
      const e: Employee = c;   // ✅ same shape
      ```
  - 🚧 **Excess property checks: the "fresh object" rule**
    - 🧒 When you write an object literal *directly* where a type is expected, TS also complains about **extra** properties (likely typos).
    - ```ts
      type User = { name: string };

      const a: User = { name: "Elvis", age: 25 };
      // ❌ Object literal may only specify known properties, and 'age' does not exist in type 'User'

      const person = { name: "Elvis", age: 25 };
      const b: User = person;   // ✅ not a fresh literal, so only the shape is checked
      ```
    - 🎤 "Structural typing checks compatibility by shape. Excess property checks are an extra safeguard for object literals."
  - 🕳️ **Null and undefined handling**
    - **`strictNullChecks`** (part of `strict`) separates `null`/`undefined` from everything else
    - ```ts
      let name: string = null;            // ❌ with strict
      let maybeName: string | null = null; // ✅ say it explicitly
      ```
    - **Optional chaining (`?.`):** stop safely if something is missing
    - ```ts
      const city = user?.address?.city;   // string | undefined, never crashes
      ```
      Instead of: `if (user && user.address) { user.address.city }`
    - **Nullish coalescing (`??`):** fallback only for `null`/`undefined`
    - ```ts
      const username = input ?? "Guest";

      const count = 0;
      count || 10;   // 10 ❌ (0 is falsy, so || replaces it)
      count ?? 10;   // 0  ✅ (0 is a real value)
      ```
    - **Explicit checks beat `!`:**
    - ```ts
      function getUsername(user: User | null) {
        if (!user) return "Guest";
        return user.name;
      }
      ```
  - 🧱 **Combining ideas:** a typical "real" object type
    - ```ts
      type Product = {
        readonly id: number;
        name: string;
        price: number;
        tags: string[];
        description?: string;
        dimensions: { width: number; height: number };
        status: "draft" | "published";
      };
      ```

---

- 🔢 **10. Enums**
  - 🧒 An **enum** is a named set of constants. "These are the only allowed options, and they have names."
  - 🔢 **Numeric enums**
    - ```ts
      enum Direction {
        Up,      // 0
        Down,    // 1
        Left,    // 2
        Right,   // 3
      }

      const d = Direction.Up;     // 0
      Direction[0];               // "Up" (numeric enums map both ways)
      ```
  - 🔤 **String enums (more readable in logs and APIs)**
    - ```ts
      enum Role {
        Admin = "admin",
        User = "user",
      }

      function setRole(role: Role) { console.log(role); }
      setRole(Role.Admin);   // ✅ "admin"
      setRole("admin");      // ❌ plain strings aren't accepted
      ```
  - 🧊 **`const enum`:** gets inlined at compile time (no runtime object). It has tricky interactions with some build tools, so understand the implications before using it, especially in libraries.
  - 🥊 **Enum vs union literal: the modern debate**
    - ```ts
      // Enum: exists at runtime as a real JS object
      enum OrderStatus { Pending = "pending", Paid = "paid", Shipped = "shipped" }

      // Union literal: type-only, zero runtime code
      type OrderStatus2 = "pending" | "paid" | "shipped";
      ```
    - The union is usually simpler and plays nicely with plain strings from APIs.
    - 🧰 **When you want the values at runtime too, use an `as const` object:**
    - ```ts
      const ORDER_STATUS = {
        Pending: "pending",
        Paid: "paid",
        Shipped: "shipped",
      } as const;

      type OrderStatus3 = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];
      // "pending" | "paid" | "shipped"
      ```
    - 🎤 "Enums create named constants with a runtime representation. Union literals are type-only and often simpler for a fixed set of values."

---

- 🧪 **11. Generics**
  - 🧒 **The problem:** you want a function that works on *any* type but still remembers which type it was.
  - 😬 **Attempt 1: use `any`** (loses information)
    - ```ts
      function identity(value: any): any {
        return value;
      }

      const result = identity("hello");  // result is 'any'. TS forgot it was a string.
      result.toFixed();                  // ✅ no error, 💥 crash
      ```
  - 🎁 **Attempt 2: generics** (remembers the type)
    - ```ts
      function identity<T>(value: T): T {
        return value;
      }

      const a = identity("hello");  // string
      const b = identity(25);       // number
      ```
    - 🧠 **`T` is a type placeholder: "whatever type the caller gives me".** It's like a function parameter, but for types.
    - `T` is just a convention. Others: `U`, `K`, `V`, or descriptive names like `TItem`.
    - **Explicit vs inferred:**
    - ```ts
      identity<string>("hello");  // you specify T
      identity("hello");          // TS infers T = string (usual)
      ```
  - 🧩 **Generics in functions**
    - ```ts
      function first<T>(items: T[]): T | undefined {
        return items[0];
      }

      first([1, 2, 3]);          // number | undefined
      first(["a", "b"]);         // string | undefined
      first([]);                 // undefined
      ```
    - **Multiple type parameters:**
    - ```ts
      function pair<T, U>(a: T, b: U): [T, U] {
        return [a, b];
      }
      const p = pair("Elvis", 25);   // [string, number]
      ```
    - **Generic objects:**
    - ```ts
      function createResponse<T>(data: T) {
        return { success: true, data };
      }
      const r = createResponse({ id: 1 });  // { success: boolean; data: { id: number } }
      ```
  - 🧱 **Generic interfaces, type aliases and classes**
    - ```ts
      interface ApiResponse<T> {
        success: boolean;
        data: T;
      }

      type User = { id: number; name: string };

      const res: ApiResponse<User> = {
        success: true,
        data: { id: 1, name: "Elvis" },
      };

      type Box<T> = { value: T };
      const numBox: Box<number> = { value: 42 };
      ```
    - ```ts
      class Storage<T> {
        constructor(private value: T) {}
        getValue(): T { return this.value; }
      }

      const s = new Storage<string>("Hello");
      s.getValue();   // string
      ```
  - 🚧 **Constraints (`extends`): "T must at least look like this"**
    - 🧒 Without a constraint, TS knows nothing about `T`, so it won't let you touch properties.
    - ```ts
      function getLength<T>(value: T) {
        return value.length;   // ❌ Property 'length' does not exist on type 'T'
      }

      function getLengthOk<T extends { length: number }>(value: T): number {
        return value.length;   // ✅
      }

      getLengthOk("hello");      // ✅ strings have length
      getLengthOk([1, 2, 3]);    // ✅ arrays have length
      getLengthOk(123);          // ❌ numbers don't
      ```
  - 🌍 **Real-world generics**
    - ```ts
      // A repository for ANY entity type
      interface Repository<T> {
        findById(id: number): Promise<T | null>;
        save(entity: T): Promise<T>;
      }

      // A reusable utility
      function reverse<T>(items: T[]): T[] {
        return [...items].reverse();
      }
      ```
    - ```tsx
      // A generic React component prop type
      type ListProps<T> = {
        items: T[];
        render: (item: T) => React.ReactNode;
      };
      ```
  - 🎤 "Generics let us write reusable code while preserving relationships between input and output types, instead of using `any`."
  - ✍️ **Try it:** write `last<T>(items: T[]): T | undefined` and `wrapInArray<T>(value: T): T[]`.

---

- 🔑 **12. `keyof`**
  - 🧒 `keyof` takes an object type and gives you **a union of its property names**.
  - ```ts
    type User = {
      name: string;
      age: number;
    };

    type UserKey = keyof User;   // "name" | "age"

    let key: UserKey = "name";   // ✅
    key = "email";               // ❌ not a key of User
    ```
  - 🛡️ **Why it's useful: safe property access**
    - ❌ **Without it, the key could be any string:**
    - ```ts
      function getValue(obj: object, key: string) {
        return obj[key];   // ❌ implicitly any, and no safety
      }
      ```
    - ✅ **With generics + `keyof`, TS ensures the key exists AND knows the result type:**
    - ```ts
      function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
      }

      const user = { name: "Elvis", age: 25 };

      const n = getProperty(user, "name");   // string
      const a = getProperty(user, "age");    // number
      getProperty(user, "email");            // ❌ "email" isn't a key of user
      ```
    - 🔬 Read `K extends keyof T` as: "K must be one of T's keys".

---

- 🎯 **13. Indexed Access Types**
  - 🧒 **Reach into a type to grab the type of one of its properties.** Same bracket idea as `obj["key"]`, but for types.
  - ```ts
    type User = {
      name: string;
      age: number;
    };

    type Name = User["name"];   // string
    type Age = User["age"];     // number
    ```
  - 📚 **Get an array's element type with `[number]`**
    - ```ts
      type Users = { name: string }[];
      type SingleUser = Users[number];   // { name: string }
      ```
  - 🔑 **Combine with `keyof` to get all value types**
    - ```ts
      type UserValues = User[keyof User];   // string | number
      ```
  - 🌟 **`T[K]` in generics** (you already used it in `getProperty`)
    - ```ts
      function get<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
      }
      ```
    - If `T` is `{ name: string; age: number }` and `K` is `"name"`, then `T[K]` is `string`.
  - 💡 **Real use:** derive a type from an API model instead of retyping it
    - ```ts
      type Product = { id: number; price: number; status: "draft" | "live" };
      type ProductStatus = Product["status"];   // "draft" | "live"
      ```

---

- 🪞 **14. `typeof` in TypeScript**
  - 🧒 `typeof` has **two lives**. Context decides which one you get.
  - 🏃 **Life 1: JavaScript runtime operator (returns a string)**
    - ```ts
      typeof "hello";    // "string"
      typeof 42;         // "number"
      typeof {};         // "object"
      ```
    - Used for narrowing (section 6).
  - 🏗️ **Life 2: TypeScript type operator (grabs the type of a value)**
    - Use it where a *type* is expected:
    - ```ts
      const user = { name: "Elvis", age: 25 };
      type User = typeof user;     // { name: string; age: number }
      ```
    - **Extremely handy: build the type from the value, so they never drift apart**
    - ```ts
      const config = { host: "localhost", port: 3000 };

      type Config = typeof config;               // { host: string; port: number }
      type ConfigKey = keyof typeof config;      // "host" | "port"
      ```
    - **Works with functions too:**
    - ```ts
      function add(a: number, b: number) { return a + b; }
      type AddFunction = typeof add;   // (a: number, b: number) => number
      ```
  - 🎤 "`typeof` in JS is a runtime operator returning a string. In a type position, TypeScript's `typeof` extracts the type of an existing value."

---

- 🧰 **15. Utility Types (built-in type power tools)**
  - 🧒 **Utility types transform an existing type into a new one**, so you don't retype the same shape over and over. We'll use this `User` throughout:
  - ```ts
    type User = {
      id: number;
      name: string;
      email: string;
      age: number;
    };
    ```
  - 🧱 **Object utilities**
    - ✏️ **`Partial<T>`: make everything optional** (perfect for "update" operations)
      - ```ts
        type UpdateUser = Partial<User>;
        // { id?: number; name?: string; email?: string; age?: number }

        function updateUser(id: number, changes: Partial<User>) { /* ... */ }
        updateUser(1, { name: "New name" });   // ✅ only send what changed
        ```
    - 📌 **`Required<T>`: make everything required**
      - ```ts
        type Config = { host?: string; port?: number };
        type FullConfig = Required<Config>;   // { host: string; port: number }
        ```
    - 🔒 **`Readonly<T>`: make everything read-only**
      - ```ts
        const user: Readonly<User> = { id: 1, name: "Elvis", email: "e@x.com", age: 25 };
        user.name = "X";   // ❌ Cannot assign to 'name' because it is a read-only property
        ```
    - 🎯 **`Pick<T, K>`: keep only these keys**
      - ```ts
        type UserPreview = Pick<User, "id" | "name">;   // { id: number; name: string }
        ```
    - ✂️ **`Omit<T, K>`: remove these keys**
      - ```ts
        type CreateUserInput = Omit<User, "id">;   // the DB makes the id, so clients don't send it
        ```
    - 📖 **`Record<K, V>`: an object with keys of type K and values of type V**
      - ```ts
        type Scores = Record<string, number>;
        const scores: Scores = { Elvis: 100, John: 90 };

        type Role = "admin" | "user" | "guest";
        const permissions: Record<Role, boolean> = {
          admin: true,
          user: true,
          guest: false,   // forgetting a role → ❌ error (nice completeness check!)
        };
        ```
  - 🍕 **Union utilities**
    - ```ts
      type Role = "admin" | "user" | "guest";
      ```
    - ➖ **`Exclude<T, U>`: remove members from a union**
      - ```ts
        type PublicRole = Exclude<Role, "admin">;   // "user" | "guest"
        ```
    - ✅ **`Extract<T, U>`: keep only matching members**
      - ```ts
        type Selected = Extract<Role, "admin" | "guest">;   // "admin" | "guest"
        ```
    - 🚫 **`NonNullable<T>`: remove `null` and `undefined`**
      - ```ts
        type Value = string | null | undefined;
        type SafeValue = NonNullable<Value>;   // string
        ```
  - ⚙️ **Function and class utilities**
    - 📤 **`ReturnType<T>`: what a function returns**
      - ```ts
        function getUser() {
          return { id: 1, name: "Elvis" };
        }
        type UserResult = ReturnType<typeof getUser>;   // { id: number; name: string }
        ```
    - 📥 **`Parameters<T>`: a function's parameters as a tuple**
      - ```ts
        function createUser(name: string, age: number) {}
        type CreateUserParams = Parameters<typeof createUser>;   // [name: string, age: number]
        ```
    - 🏛️ **`InstanceType<T>`: the type a class constructor creates**
      - ```ts
        class Person { constructor(public name: string) {} }
        type PersonInstance = InstanceType<typeof Person>;   // Person
        ```
    - ⏳ **`Awaited<T>`: unwrap a Promise**
      - ```ts
        type Result = Awaited<Promise<string>>;   // string
        ```
  - 🧩 **Combine them (this is where it gets fun)**
    - ```ts
      // An update payload: everything optional, but id can't change
      type UpdateUserInput = Partial<Omit<User, "id">>;
      // { name?: string; email?: string; age?: number }
      ```
  - 🎤 "Utility types are built-in generic types that transform existing types, for example `Partial`, `Pick`, `Omit`, `Record` and `ReturnType`."
  - ✍️ **Try it:** from a `Product` type, derive `ProductPreview` (Pick), `ProductDraft` (Partial), and `ProductWithoutId` (Omit).

---

- 🏛️ **16. Classes**
  - 🧒 A **class** is a blueprint for objects that bundle **data** (properties) and **behavior** (methods). TypeScript adds types and access control.
  - 🧱 **Properties, constructor and methods**
    - ```ts
      class User {
        name: string;
        age: number;

        constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
        }

        greet(): string {
          return `Hello, I'm ${this.name}`;
        }
      }

      const u = new User("Elvis", 25);
      u.greet();
      ```
  - ✂️ **Parameter properties: the shortcut TS developers love**
    - Adding an access keyword to a constructor parameter **declares and assigns it** in one step.
    - ```ts
      class User {
        constructor(
          public name: string,
          public age: number,
        ) {}
      }
      // Identical to the long version above.
      ```
  - 🚪 **Access modifiers**
    - 🌍 **`public`:** anywhere (the default)
    - 🔐 **`private`:** only inside the class
    - 🧬 **`protected`:** the class and its subclasses
    - 🧊 **`readonly`:** can be set once (in the constructor), never changed
    - ```ts
      class BankAccount {
        private balance = 0;

        deposit(amount: number) {
          this.balance += amount;
        }

        getBalance() {
          return this.balance;
        }
      }

      const acc = new BankAccount();
      acc.deposit(100);
      acc.balance;   // ❌ 'balance' is private
      ```
    - ⚠️ **TS `private` is a compile-time check only.** After compiling to JS, it's a normal property. For true runtime privacy, use JavaScript's `#balance` syntax.
  - 🧊 **`static`: belongs to the class, not instances**
    - ```ts
      class MathUtils {
        static add(a: number, b: number) {
          return a + b;
        }
      }
      MathUtils.add(2, 3);   // no `new` needed
      ```
  - 🎛️ **Getters and setters**
    - ```ts
      class Person {
        constructor(private firstName: string, private lastName: string) {}

        get fullName() {
          return `${this.firstName} ${this.lastName}`;
        }
      }
      new Person("Elvis", "M").fullName;   // used like a property
      ```
    - ```ts
      class Temperature {
        private _celsius = 0;

        set celsius(value: number) {
          if (value < -273.15) throw new Error("Below absolute zero");
          this._celsius = value;
        }
        get celsius() { return this._celsius; }
      }
      ```
  - 🧬 **Inheritance (`extends`) and `protected`**
    - ```ts
      class Animal {
        constructor(protected name: string) {}
        move() { console.log(`${this.name} is moving`); }
      }

      class Dog extends Animal {
        bark() { console.log(`${this.name} says Woof`); }   // protected is accessible here
      }

      const d = new Dog("Rex");
      d.move();
      d.bark();
      d.name;   // ❌ protected: not accessible outside
      ```
  - 📜 **`implements`: promise to follow an interface**
    - ```ts
      interface Flyable { fly(): void }

      class Bird implements Flyable {
        fly() { console.log("Flying"); }
      }
      ```
  - 🧩 **Abstract classes: partial blueprints**
    - 🧒 Can't be created directly. Subclasses **must** fill in the abstract parts.
    - ```ts
      abstract class Shape {
        abstract area(): number;     // subclasses must implement
        describe() { return `Area is ${this.area()}`; }   // shared logic
      }

      class Circle extends Shape {
        constructor(private radius: number) { super(); }
        area() { return Math.PI * this.radius ** 2; }
      }

      new Shape();               // ❌ Cannot create an instance of an abstract class
      new Circle(5).describe();  // ✅
      ```
  - 💡 In modern TS/React code, many developers prefer plain functions and objects over classes. Classes are common in NestJS and OOP-heavy codebases.

---

- 🔗 **17. Type Compatibility (the "do these fit?" rules)**
  - 🧒 **Assignability:** can a value of type A go into a slot of type B? TS checks the **shape**.
  - ✅ **Simple cases**
    - ```ts
      let s: string = "hello";   // ✅
      let n: string = 123;       // ❌
      ```
  - 🔼 **Subtypes and wider types**
    - A *more specific* value can go into a *wider* slot, not the other way around.
    - ```ts
      const literal: "dark" = "dark";
      const wide: string = literal;      // ✅ "dark" is a string
      const back: "dark" = wide;         // ❌ any string isn't necessarily "dark"
      ```
    - ```ts
      type WithName = { name: string };
      type WithNameAndAge = { name: string; age: number };

      const full: WithNameAndAge = { name: "Elvis", age: 25 };
      const small: WithName = full;   // ✅ has everything WithName needs
      const bad: WithNameAndAge = small;  // ❌ missing 'age'
      ```
  - 🔌 **Function compatibility**
    - ```ts
      type Handler = (name: string) => void;

      const ok: Handler = (name) => console.log(name);   // ✅
      const alsoOk: Handler = () => console.log("hi");   // ✅ ignoring params is fine
      const bad: Handler = (name: string, extra: number) => {};  // ❌ requires more than provided
      ```
  - 🏛️ **Class compatibility**
    - Classes are also compared by shape, **except** `private`/`protected` members, which only match if they came from the same declaration.
  - 🧠 **Mental model:** "Does this value have *at least* what the slot requires?"

---

- 📦 **18. Modules**
  - 🧒 **Modules let you split code into files** and share pieces between them. Any file with a top-level `import` or `export` is a module.
  - 📤 **Exporting**
    - ```ts
      // src/math.ts
      export function add(a: number, b: number) {
        return a + b;
      }

      export const PI = 3.14159;

      export type Point = { x: number; y: number };   // types can be exported too
      ```
  - 📥 **Importing**
    - ```ts
      // src/index.ts
      import { add, PI } from "./math";
      import type { Point } from "./math";   // type-only import, erased at runtime
      ```
  - 🏷️ **Default exports**
    - ```ts
      // App.ts
      export default function App() {}

      // elsewhere
      import App from "./App";   // you can name it anything
      ```
    - 💡 Many teams prefer **named exports** because names stay consistent and refactoring is easier.
  - 🔁 **Re-exports (a tidy public API)**
    - ```ts
      // services/index.ts
      export { UserService } from "./UserService";
      export { OrderService } from "./OrderService";
      ```
  - 🏷️ **`import type` and `export type`**
    - ```ts
      import type { User } from "./types";
      export type { User };
      ```
    - Makes it obvious the import is types-only and guarantees it disappears from the output.
  - 🧬 **ESM vs CommonJS**
    - **ES Modules (modern):** `import x from "x"` / `export`
    - **CommonJS (older Node):** `const fs = require("fs")` / `module.exports = {}`
    - ⚠️ **Node ESM gotcha:** with `"module": "NodeNext"`, relative imports in ESM files need the `.js` extension, even though you write `.ts` files:
    - ```ts
      import { add } from "./math.js";   // yes, .js (TS knows it maps to math.ts)
      ```
  - 🧭 **Module resolution:** how TS finds the file behind `import ... from "./models/User"`. Controlled by `module` / `moduleResolution` in `tsconfig.json`.

---

- ⚙️ **19. `tsconfig.json`**
  - 🧒 The **settings file** that tells TypeScript how strictly to check and how to compile. Created by `npx tsc --init`.
  - 🎛️ **The options you'll actually meet**
    - 🎯 **`target`:** which JavaScript version to output
      - ```json
        { "compilerOptions": { "target": "ES2022" } }
        ```
    - 📦 **`module` / `moduleResolution`:** how imports are handled (`"NodeNext"` for modern Node)
    - 📚 **`lib`:** which built-in APIs TS knows about
      - ```json
        { "lib": ["ES2022", "DOM"] }
        ```
      - Include `"DOM"` only for browser code.
    - 📁 **`rootDir` / `outDir`:** where sources live, where output goes
    - 🔒 **`strict`: turn this on.** It enables a bundle of strong checks.
      - ```json
        { "strict": true }
        ```
      - Includes `noImplicitAny` (no silent `any`) and `strictNullChecks` (null/undefined are separate types).
    - 🗺️ **`sourceMap`:** debug your `.ts` instead of the generated JS
    - 📄 **`declaration`:** emit `.d.ts` files (needed when publishing a library)
    - 🔌 **`esModuleInterop`:** smoother mixing of CommonJS and ESM imports
    - 🧭 **`paths`:** import aliases
      - ```json
        {
          "compilerOptions": {
            "baseUrl": ".",
            "paths": { "@/*": ["./src/*"] }
          }
        }
        ```
      - ⚠️ `paths` only helps the *type checker*. Your bundler/runtime (Vite, Next.js, tsx, etc.) must also understand the alias.
    - 🔍 **`noEmit`:** check types, create no files
    - ⏭️ **`skipLibCheck`:** skip checking third-party `.d.ts` files (faster, avoids unrelated errors)
  - 🌱 **A solid starter config**
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
    - Adjust per project type: Node, React, Next.js, NestJS or a library each have recommended presets.

---

- 🔄 **20. TypeScript + JavaScript Interop**
  - 🐢 **Migrating gradually**
    - Rename one file at a time: `app.js` → `app.ts`
    - Add `"allowJs": true` to let TS and JS files live together
    - Start with `"strict": false`, then tighten later
  - 📝 **JSDoc: types inside plain JS**
    - ```js
      /**
       * @param {number} a
       * @param {number} b
       * @returns {number}
       */
      function add(a, b) {
        return a + b;
      }
      ```
  - 📥 **`@types` packages and DefinitelyTyped**
    - 🧒 Some JavaScript libraries don't ship types. The community maintains them in **DefinitelyTyped**, published as `@types/...`.
    - ```bash
      npm install -D @types/node
      npm install -D @types/express
      ```
    - Many modern libraries include their own types, so you often need nothing extra.
  - 🤷 **Untyped library? Your options**
    - Install `@types/package-name` if it exists
    - Write your own declaration file (next section)
    - Wrap the library in your own typed function
    - Treat its results as `unknown` and validate
    - `any` only as a last resort

---

- 📄 **21. Declaration Files (`.d.ts`)**
  - 🧒 A **declaration file** describes types **without** any implementation. It's like a menu: it lists what exists and its shape, but the kitchen is elsewhere.
  - 📣 **`declare`: "this exists somewhere else"**
    - ```ts
      declare function greet(name: string): string;
      declare const API_URL: string;
      ```
  - 🌍 **Extending global types (like `window`)**
    - ```ts
      // src/globals.d.ts
      declare global {
        interface Window {
          myAppVersion: string;
        }
      }
      export {};   // makes the file a module
      ```
    - Now `window.myAppVersion` type-checks.
  - 🧩 **Typing a JS library that has no types**
    - ```ts
      // src/types/legacy.d.ts
      declare module "my-legacy-library" {
        export function hello(name: string): string;
      }
      ```
    - Now `import { hello } from "my-legacy-library"` is typed.
  - 🧰 If types already exist, just install them: `npm i -D @types/package-name`.
  - 🎤 "Declaration files, usually `.d.ts`, describe the types of code without providing implementation, commonly for JS libraries."

---

- 🧯 **22. Error Handling**
  - 🧒 In JavaScript you can `throw` **anything**: a string, a number, an object. That's why TypeScript treats caught errors carefully.
  - 🧪 **`try / catch` with `unknown`**
    - With `strict` on, the caught variable is `unknown` (not `Error`), so you must narrow it.
    - ```ts
      try {
        riskyOperation();
      } catch (error) {
        console.log(error.message);   // ❌ 'error' is of type 'unknown'

        if (error instanceof Error) {
          console.log(error.message); // ✅
        }
      }
      ```
    - Being explicit is fine too: `catch (error: unknown)`.
  - 🛟 **A reusable helper**
    - ```ts
      function getErrorMessage(error: unknown): string {
        if (error instanceof Error) return error.message;
        if (typeof error === "string") return error;
        return "Unknown error";
      }

      try {
        riskyOperation();
      } catch (e) {
        console.error(getErrorMessage(e));
      }
      ```
  - 🧨 **Custom error classes**
    - ```ts
      class NotFoundError extends Error {
        constructor(message: string) {
          super(message);
          this.name = "NotFoundError";
        }
      }

      try {
        throw new NotFoundError("User not found");
      } catch (e) {
        if (e instanceof NotFoundError) {
          console.log("404:", e.message);   // handle this one specifically
        } else {
          throw e;                           // re-throw what you don't handle
        }
      }
      ```
  - 🎁 **An alternative: return errors instead of throwing** (see the `Result` type in section 25)

---

- ⏳ **23. Async TypeScript & APIs**
  - ⏳ **`Promise<T>`: "a value that will arrive later"**
    - 🧒 `Promise<User>` means "a promise that eventually gives me a `User`".
    - ```ts
      const promise: Promise<string> = Promise.resolve("Hello");
      ```
    - **Async functions always return a Promise:**
    - ```ts
      async function getNumber(): Promise<number> {
        return 42;    // TS wraps it: you return number, callers get Promise<number>
      }

      async function logIt(): Promise<void> {
        console.log("done");
      }
      ```
    - **Using `await` unwraps the type:**
    - ```ts
      async function main() {
        const n = await getNumber();   // number (not Promise<number>)
      }
      ```
    - **Several promises at once:**
    - ```ts
      const [user, posts] = await Promise.all([fetchUser(1), fetchPosts(1)]);
      // user: User, posts: Post[], each keeps its own type
      ```
  - 🌐 **Typing API data**
    - ```ts
      type User = { id: number; name: string; email: string };

      async function fetchUser(id: number): Promise<User> {
        const response = await fetch(`/api/users/${id}`);
        return response.json();   // ⚠️ response.json() returns Promise<any>
      }
      ```
    - 🚨 **The big gotcha:** `response.json()` returns `any`, so the `Promise<User>` annotation is a **hope**, not a **guarantee**.
  - 🧾 **Common API type patterns**
    - ```ts
      type CreateUserRequest = { name: string; email: string };
      type UserResponse = { id: number; name: string; email: string };
      type ApiError = { message: string; code: string };

      type ApiResponse<T> = {
        success: boolean;
        data: T;
        message?: string;
      };

      type PaginatedResponse<T> = {
        data: T[];
        page: number;
        limit: number;
        total: number;
      };

      type UserPage = PaginatedResponse<UserResponse>;
      ```
    - 📌 **DTO = Data Transfer Object:** a type/class describing data going in or out of an API. NestJS uses them heavily.
    - ```ts
      class CreateUserDto {
        name!: string;
        email!: string;
      }
      ```
  - 🚨 **Golden rule: TypeScript checks your code. Runtime validation checks external data.**
    - **External data includes:** HTTP responses, user input, env variables, files, databases, third-party APIs.
    - 🧒 Imagine the server sends `{ "name": 123 }`. Your type says `name: string`. TS can't know, because types are erased.
    - ```text
      User input → HTTP request → JSON → Runtime validation → TypeScript model → Business logic
      ```
  - 🛡️ **Validate by hand (the idea)**
    - ```ts
      function isUser(value: unknown): value is User {
        return (
          typeof value === "object" &&
          value !== null &&
          typeof (value as any).id === "number" &&
          typeof (value as any).name === "string" &&
          typeof (value as any).email === "string"
        );
      }

      async function fetchUserSafe(id: number): Promise<User> {
        const response = await fetch(`/api/users/${id}`);
        const data: unknown = await response.json();

        if (!isUser(data)) {
          throw new Error("Server returned invalid user data");
        }
        return data;   // now it's genuinely a User
      }
      ```
  - 🧰 **Or use a validation library (very common in real projects): Zod**
    - ```ts
      import { z } from "zod";

      const UserSchema = z.object({
        id: z.number(),
        name: z.string(),
        email: z.string().email(),
      });

      type User = z.infer<typeof UserSchema>;   // the TS type is generated FROM the schema

      const user = UserSchema.parse(data);      // throws if data is invalid, otherwise typed ✅
      ```
    - One schema gives you **runtime validation + the TypeScript type**, with no duplication.
  - 🎤 "TypeScript types describe what I expect. They don't prove the server returned that structure. External data needs runtime validation."

---

- ✅ **24. Best Practices**
  - 🔒 **Turn on `strict`**
    - It's the single biggest quality boost. Start new projects strict from day one.
  - 🔮 **Infer when obvious, annotate contracts**
    - ```ts
      const name = "Elvis";                       // ✅ obvious, skip annotation
      function add(a: number, b: number): number { return a + b; }  // ✅ contract, annotate
      ```
  - 🙅 **Avoid `any`, prefer `unknown`**
    - ```ts
      function process(data: any) {}       // 😬
      function processSafe(data: unknown) {   // ✅ then narrow
        if (typeof data === "string") console.log(data);
      }
      ```
  - 🙏 **Use assertions sparingly**
    - `as User` doesn't validate. Prefer type guards or schema validation.
  - 🎯 **Model data accurately**
    - ```ts
      type Bad  = { data: any };
      type Good = { id: number; name: string };
      ```
  - ♻️ **Reuse types instead of repeating inline shapes**
    - ```ts
      type CreateUserInput = { name: string; email: string };
      function createUser(input: CreateUserInput) {}
      ```
  - 🧘 **Don't over-engineer types**
    - If a type needs a paragraph to explain, simplify. `type Role = "admin" | "user"` beats a clever abstraction.
  - 🏷️ **Meaningful names:** `CreateUserRequest`, `UserResponse`, `PaymentStatus` ✅ vs `Data`, `Thing`, `X` ❌
  - 🪜 **Separate layers: different jobs, different types**
    - ```text
      DatabaseUser → User (domain) → UserResponse (API) → UserViewModel (UI)
      ```
    - ```ts
      type DbUser = { id: number; email: string; password_hash: string };
      type UserResponse = Omit<DbUser, "password_hash">;   // never leak the hash!
      ```
  - 🛡️ **Validate all external data** (HTTP, user input, env vars, files, DBs, third-party APIs)
  - 🧠 **Keep compile-time and runtime separate in your head:** types → compile time. Values → runtime.

---

- 🧙 **25. Practical Patterns**
  - 🎁 **Result type: errors as values**
    - 🧒 Instead of throwing, return an object that says "success with data" or "failure with a reason". TypeScript then forces you to handle both.
    - ```ts
      type Result<T> =
        | { success: true; data: T }
        | { success: false; error: string };

      function findUser(id: number): Result<User> {
        if (id === 1) {
          return { success: true, data: { id: 1, name: "Elvis" } };
        }
        return { success: false, error: "User not found" };
      }

      const result = findUser(1);

      if (result.success) {
        console.log(result.data.name);   // ✅ data exists here
      } else {
        console.error(result.error);     // ✅ error exists here
      }
      ```
  - 🔄 **UI/loading state (discriminated union)**
    - ```ts
      type State<T> =
        | { status: "loading" }
        | { status: "success"; data: T }
        | { status: "error"; message: string };
      ```
    - TS knows exactly which fields exist for each `status`, so you can't read `data` while loading.
  - 📡 **Event types**
    - ```ts
      type AppEvent =
        | { type: "USER_CREATED"; userId: number }
        | { type: "USER_DELETED"; userId: number }
        | { type: "LOGIN_FAILED"; reason: string };

      function handle(event: AppEvent) {
        switch (event.type) {
          case "USER_CREATED": console.log("new", event.userId); break;
          case "LOGIN_FAILED": console.log(event.reason); break;
        }
      }
      ```
  - 🗄️ **Repository interface (database access contract)**
    - ```ts
      interface UserRepository {
        findById(id: number): Promise<User | null>;
        create(data: CreateUserDto): Promise<User>;
      }
      ```
  - ⚛️ **React typing basics**
    - ```tsx
      type UserCardProps = { name: string; age: number };

      function UserCard({ name, age }: UserCardProps) {
        return (
          <div>
            <h2>{name}</h2>
            <p>{age}</p>
          </div>
        );
      }
      ```
    - ```tsx
      const [user, setUser] = useState<User | null>(null);          // state that may be empty
      const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {   // typed event
        console.log(e.target.value);
      };
      ```
  - 🧰 **Generic helper: `groupBy`**
    - ```ts
      function groupBy<T, K extends keyof T>(items: T[], key: K): Record<string, T[]> {
        const result: Record<string, T[]> = {};
        for (const item of items) {
          const groupKey = String(item[key]);
          (result[groupKey] ??= []).push(item);
        }
        return result;
      }

      groupBy([{ role: "admin" }, { role: "user" }], "role");   // ✅
      ```
  - 📋 **Also common:** config types, form types (`LoginForm`), database models, DTOs

---

- 🎤 **26. Interview Cheat Sheet**
  - 🟢 **Basics**
    - **What is TypeScript?** A statically typed superset of JavaScript. Types are erased at compile time.
    - **Static vs dynamic typing?** Types checked before running vs while running.
    - **Compile time vs runtime?** Compile time: TS analyzes and transforms code. Runtime: the resulting JS executes.
    - **What is inference?** TS figures out types without annotations.
    - **`any` vs `unknown`?** `any` disables checking. `unknown` must be narrowed first. Prefer `unknown`.
    - **`never` vs `void`?** `void`: returns but the value is unimportant. `never`: never returns normally.
    - **Union vs intersection?** `|` = one of. `&` = all of.
    - **Enum vs union literal?** Enums exist at runtime. Unions are type-only and often simpler.
    - **`type` vs `interface`?** Both describe objects. Interfaces extend and merge. Types handle unions and tuples.
  - 🟡 **Intermediate**
    - **Generics?** Reusable code that keeps input and output types linked (`<T>`).
    - **`keyof`?** Union of an object type's keys.
    - **`typeof`?** JS: runtime string. TS: extracts the type of a value.
    - **Narrowing?** Using control flow (`typeof`, `in`, `instanceof`, equality) to get a more specific type.
    - **Type guards?** Runtime checks (`value is T`) that teach TS about a type.
    - **Utility types?** Built-in transformers: `Partial`, `Pick`, `Omit`, `Record`, `ReturnType`.
    - **Structural typing?** Compatibility by shape, not by name.
    - **Overloads?** Several signatures, one implementation.
    - **Declaration files?** `.d.ts` files describing types without implementation.
    - **Strict mode?** A bundle of stronger checks, preferred for production.
  - 🔴 **The "gotcha" questions interviewers love**
    - **Does TS validate API JSON?** No. Types are erased. Use runtime validation (Zod or a type guard).
    - **Is `as User` safe?** No. It silences the compiler, it doesn't check anything.
    - **Is TS `private` truly private?** Only at compile time. Use `#private` for runtime privacy.
    - **Why `unknown` in `catch`?** Anything can be thrown, so you must narrow before using it.

---

- 🏋️ **27. Practice Gym**
  - 💪 **Beginner reps**
    - Convert this JS to TS:
      - ```js
        function createUser(name, age) {
          return { name, age };
        }
        ```
    - Create `User`, `Product` and `Order` types with optional and readonly fields
    - Write a function that handles every member of `type PaymentStatus = "pending" | "paid" | "failed"`
    - Write `process(value: string | number | boolean | null)` that safely handles each type
  - 🏃 **Intermediate reps**
    - Implement `first<T>(items: T[]): T | undefined` and test with numbers, strings and objects
    - From one `User` type, derive `UserPreview` (Pick), `UpdateUser` (Partial), `UserWithoutId` (Omit), `ImmutableUser` (Readonly)
    - Build `type ApiResponse<T>` and use it as `ApiResponse<User[]>`
    - Write a type guard `isUser(value: unknown): value is User`
  - 🏔️ **Real-project reps**
    - ⚛️ **React:** typed props, `useState<T>`, events, forms, refs, context, custom hooks
    - 🟩 **Node:** type `process.env`, filesystem calls, HTTP handlers
    - 🐈 **NestJS:** Controller, Service, Module, DTO, Guard, Pipe, Interceptor, then a full CRUD API
  - 🧠 **The Explain-It test (the best way to know you understand)**
    - Pick a topic (say, Generics), close the notes, and explain out loud:
    - 1. What it is
    - 2. Why it exists
    - 3. What problem it solves
    - 4. The basic syntax
    - 5. A practical example
    - 6. When to use it
    - 7. When to avoid it
    - If you can do that without reciting a definition, you really understand it.
  - 📊 **Weak-spot tracker (copy this and fill it in)**
    - ```text
      Topic              Confidence (0-100)
      Basic types        ____
      Inference          ____
      Functions          ____
      Unions/Literals    ____
      Narrowing          ____
      Generics           ____
      Utility types      ____
      Modules/tsconfig   ____
      API typing         ____
      ```
    - Next study session: attack the lowest scores first.

---

- 🆘 **Bonus A: Decoding Common Error Messages**
  - 🧒 TypeScript errors look scary but are very literal. Here's what they mean.
  - 🔴 **`Type 'X' is not assignable to type 'Y'`**
    - You put the wrong kind of value in a slot.
    - ```ts
      const age: number = "25";   // 'string' is not assignable to 'number'
      ```
    - ✅ Fix the value, or widen the type (`number | string`) if both are truly allowed.
  - 🔴 **`Property 'x' does not exist on type 'Y'`**
    - You used a property TS doesn't know about (often a typo, or the type is a union you haven't narrowed).
    - ✅ Check spelling, or narrow with `typeof` / `in` / `instanceof` first.
  - 🔴 **`'x' is possibly 'undefined'` / `Object is possibly 'null'`**
    - The value might be missing.
    - ```ts
      function len(s?: string) {
        return s.length;      // ❌ 's' is possibly 'undefined'
        return s?.length;     // ✅ optional chaining
      }
      ```
  - 🔴 **`Parameter 'x' implicitly has an 'any' type`**
    - `strict` wants you to say what the parameter is.
    - ✅ Add an annotation: `(x: string) => ...`
  - 🔴 **`Cannot find name 'X'`**
    - Typo, missing import, or missing types (try `npm i -D @types/node` for Node globals).
  - 🔴 **`Argument of type 'X' is not assignable to parameter of type 'Y'`**
    - Same as the first one, but for a function call. Check what the function expects.
  - 🔴 **`Expected N arguments, but got M`**
    - You passed too many or too few arguments.
  - 🔴 **`Object literal may only specify known properties`**
    - Excess property check. You added an extra field (maybe a typo).
  - 💡 **How to read any TS error:** read the **last line** first (it's usually the actual mismatch), then work upward for the context.

---

- 📖 **Bonus B: Mini Glossary**
  - 🧒 Plain-English definitions to keep nearby.
  - **Type:** a rule about what values are allowed and what you can do with them
  - **Annotation:** writing a type yourself (`: string`)
  - **Inference:** TS figuring out the type for you
  - **Compile / transpile:** converting TS into JavaScript
  - **Type erasure:** types being deleted during that conversion
  - **Union (`|`):** one of several types
  - **Intersection (`&`):** all of several types combined
  - **Literal type:** an exact value used as a type (`"admin"`)
  - **Narrowing:** proving which member of a union you have
  - **Type guard:** a check that narrows (`value is T`)
  - **Assertion (`as`):** telling TS to trust you (no checking)
  - **Generic (`<T>`):** a type placeholder filled in by the caller
  - **Constraint (`extends`):** a requirement on a generic
  - **Utility type:** a built-in generic that transforms types
  - **Structural typing:** compatibility by shape
  - **Declaration file (`.d.ts`):** types without implementation
  - **DTO:** Data Transfer Object, a shape for data entering or leaving an API

---

- 🧠 **The Big Picture**
  - 🗺️ **The journey of your code**
    - ```text
      Source (.ts)
          │
          ▼
      Type checking ──► ❌ errors → you fix them (before anyone runs the code)
          │
          ▼ ✅
      JavaScript (types erased)
          │
          ▼
      Runtime (browser / Node)
      ```
  - ⚖️ **Types protect compile time. Validation protects runtime.**
  - 🖐️ **The five ideas to never forget**
    - 1️⃣ **Types describe values**
      - ```ts
        const age: number = 25;
        ```
    - 2️⃣ **Inference cuts the noise**
      - ```ts
        const age = 25;   // TS already knows: number
        ```
    - 3️⃣ **Unions model alternatives**
      - ```ts
        type ID = string | number;
        ```
    - 4️⃣ **Generics keep relationships intact**
      - ```ts
        function identity<T>(value: T): T { return value; }
        ```
    - 5️⃣ **Narrowing makes wide types usable**
      - ```ts
        function process(value: string | number) {
          if (typeof value === "string") return value.toUpperCase();
          return value.toFixed(2);
        }
        ```
  - 🏆 **What "good at TypeScript" really means**
    - You look at JavaScript like this:
    - ```js
      function getUser(id) {
        return fetch(`/users/${id}`).then((res) => res.json());
      }
      ```
    - ...and write the typed version:
    - ```ts
      type User = { id: number; name: string; email: string };

      async function getUser(id: number): Promise<User> {
        const response = await fetch(`/users/${id}`);
        return response.json();
      }
      ```
    - ...and then *still* remember: **"the type says what I *expect*, not what the server *sent*."** That's the difference between knowing TypeScript syntax and understanding TypeScript engineering.
  - 🎯 **Your real goal:** code that's correct, readable, maintainable, reusable, safe, and easy to refactor.
  - 🗓️ **Suggested study path**
    - **Week 1: Foundation** → sections 1 to 5, practice with the Playground
    - **Week 2: Core type system** → sections 6 to 14 (narrowing and generics deserve extra time)
    - **Week 3: Type tools & classes** → sections 15 to 17
    - **Week 4: Real projects** → sections 18 to 25, then convert a small JS project to TS
    - **Ongoing:** sections 26 and 27 as your revision loop