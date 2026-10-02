# 🟦 The TypeScript Field Guide
### Fun, structured documentation: from "what is a type?" to FAANG-level interviews

> 🧭 **How this guide works**
> - Everything is numbered: **Chapter → Section → Subsection** (`6` → `6.5` → `6.5.2`), so you can say "go read 7.5" to anyone.
> - Every chapter ends with a **🎯 Interview Corner**: the questions interviewers actually ask, with model answers and follow-ups.
> - 🧒 = beginner translation · 🔬 = go deeper · ⚠️ = trap · 🧪 = try it · 🎤 = say this out loud in an interview · 🏢 = FAANG-level twist

---

## 🗺️ The Question Map (01/10/26 Mental Model set)

Every question from the "TypeScript Mental Model" set is answered **in depth** in the chapter shown, and **in 60-second form** in Chapter 14.

| # | Question | Deep answer | Quick answer |
|---|---|---|---|
| 1 | What is TypeScript, and how does it differ from JavaScript? | 1.1, 1.2 | 14.1 |
| 1a | A `fetch` returns data annotated as `User`. Does TS protect you if the server sends something different? | 1.5 | 14.1 |
| 1b | What actually runs in the browser when you ship a TS project? | 1.4 | 14.1 |
| 2 | What are the basic types in TypeScript? | 2.1 | 14.2 |
| 2a | `any` vs `unknown`? | 2.2 | 14.2 |
| 2b | `[string, number]` vs `(string \| number)[]`? | 2.3 | 14.2 |
| 3 | What is the `void` type in the context of functions? | 3.1 | 14.3 |
| 3a | `void` vs `never`? | 3.3 | 14.3 |
| 4 | `interface` vs `type`? | 6.5 to 6.7 | 14.4 |
| 5 | Nominal vs structural types, and how they affect the type system | 7 | 14.5 |
| 6 | How would you use `never` and `undefined`? | 3.2, 3.4 | 14.6 |
| 7 | What is a type assertion, and when should you use it? | 10 | 14.7 |
| 7a | `let x: T = value` vs `value as T`? | 10.4 | 14.7 |
| 8 | How do you define optional parameters? | 8.2 | 14.8 |
| 8a | `greeting?: string` vs `greeting: string \| undefined`? | 8.3 | 14.8 |
| 9 | What is `tsconfig.json` and its basic uses? | 11 | 14.9 |
| 10 | Challenges of migrating a JS project to TS? | 12 | 14.10 |
| 11 | What is type inference? | 4 | 14.11 |
| 11a | After `let count = 0`, what happens on `count = "five"`? | 4.2.3 | 14.11 |
| 12 | What are type aliases and how do you use them? | 5 | 14.12 |
| 13 | What are optional properties? | 9.1 | 14.13 |
| 13a | How do you safely read `user.address.city` if `address` is optional? | 9.2 | 14.13 |
| 13b | How does the optional `?` relate to `??`? When to use which? | 9.3, 9.4 | 14.13 |

---

## 📚 Table of Contents

1. The Mental Model
2. Basic Types
3. `void`, `never` and `undefined`
4. Type Inference
5. Type Aliases
6. Interfaces (and `interface` vs `type`)
7. Structural vs Nominal Typing
8. Functions & Optional Parameters
9. Optional Properties & Missing Data (`?`, `?.`, `??`)
10. Type Assertions
11. `tsconfig.json`
12. Migrating JavaScript to TypeScript
13. The FAANG Question Bank
14. The 01/10/26 Question Set: 60-Second Answers

---

## 1. 🧭 The Mental Model

### 1.1 What TypeScript Is

#### 1.1.1 The one-sentence definition
**TypeScript is JavaScript plus a static type system, delivered by a compiler and a language service.** It is built by Microsoft, led by Anders Hejlsberg (who also designed C# and Turbo Pascal).

> 🎤 "TypeScript is a statically typed superset of JavaScript. It checks types before the code runs, then compiles to plain JavaScript, so the types themselves don't exist at runtime."

#### 1.1.2 Three things in a trench coat 🧥
When people say "TypeScript" they mean one of three things:

1. **The language:** JavaScript syntax plus type syntax (`: string`, `interface`, `<T>`, `as`).
2. **The type checker:** the engine that reads your code and decides whether the types line up.
3. **The language service (`tsserver`):** what powers autocomplete, hover tooltips, rename-symbol and "go to definition" in VS Code and other editors.

🧒 **Why this matters:** even if you write plain JavaScript in VS Code, the *language service* is already helping you. TypeScript's tooling is useful even before you write a single type.

#### 1.1.3 "Superset" explained
```text
┌───────────────── TypeScript ─────────────────┐
│  types · interfaces · generics · enums · ... │
│    ┌─────────────── JavaScript ───────────┐  │
│    │  everything you already know         │  │
│    └──────────────────────────────────────┘  │
└──────────────────────────────────────────────┘
```
- Every valid `.js` file is (syntactically) valid TypeScript. TS may *complain* about it, but it understands it.
- TypeScript only **adds** syntax. When compiled, the extra syntax is removed and what's left is JavaScript.
- 🔬 TypeScript tracks the ECMAScript standard closely: new JS syntax (optional chaining, `??`, `#private`) usually arrives in TS at the same time it reaches Stage 4.

#### 1.1.4 What TypeScript gives you, and what it does NOT
| ✅ It gives you | ❌ It does NOT give you |
|---|---|
| Errors at your desk instead of in production | Any runtime checks |
| Autocomplete that knows your data | Validation of data from servers, users or files |
| Safe, mechanical refactoring | Better runtime performance |
| Function signatures as documentation | Security (types are not a security boundary) |
| A shared vocabulary for teams | A different runtime. It's JavaScript all the way down. |

---

### 1.2 TypeScript vs JavaScript

#### 1.2.1 Side by side
| | JavaScript | TypeScript |
|---|---|---|
| Typing | **Dynamic**: types belong to *values*, checked while running | **Static**: types belong to *variables and expressions*, checked before running |
| Extension | `.js`, `.mjs`, `.cjs`, `.jsx` | `.ts`, `.mts`, `.cts`, `.tsx` |
| Runs in browser/Node? | Directly | Only after types are removed |
| Typical error discovery | By a user, in production 😬 | By you, in the editor 😌 |
| Autocomplete | Heuristic guesses | Exact |
| Refactoring | Search-and-hope | Compiler-verified |
| Learning curve | Lower | Higher (the type system is a language of its own) |

#### 1.2.2 The same bug in two languages
**JavaScript** (silent corruption):
```js
function add(a, b) {
  return a + b;
}

add(10, 20);     // 30
add("10", 20);   // "1020"  😱 no error, wrong answer, shipped to production
```

**TypeScript** (caught instantly):
```ts
function add(a: number, b: number): number {
  return a + b;
}

add(10, 20);     // ✅ 30
add("10", 20);   // ❌ Argument of type 'string' is not assignable to parameter of type 'number'
```

**JavaScript** (a crash waiting to happen):
```js
const user = { name: "Elvis", age: 25 };
user.age.toUpperCase();   // 💥 TypeError at runtime, but only when this line executes
```

**TypeScript:**
```ts
const user = { name: "Elvis", age: 25 };
user.age.toUpperCase();   // ❌ Property 'toUpperCase' does not exist on type 'number'
```

#### 1.2.3 Static vs dynamic typing
- 🧒 **Dynamic (JS):** variables are unlabeled boxes. Anything can go in anytime. The *value* knows what it is.
- 🧒 **Static (TS):** each box has a label. Only matching things may go in. The *compiler* knows what it is.
- 🔬 TypeScript is **gradually typed**: you can opt out per-value with `any` and opt in at your own pace. That's why migrations are possible.
- 🔬 JavaScript itself **stays dynamic at runtime**. TypeScript doesn't change how `"10" + 20` behaves; it only stops you from writing it.

#### 1.2.4 🏢 Is TypeScript "sound"?
No, and deliberately. A **sound** type system never lets a type-incorrect program run. TypeScript trades soundness for usability. Known escape hatches: `any`, type assertions, array covariance, method parameter bivariance, indexed access (`arr[99]` is typed as `T`), and `Object.keys` returning `string[]`. (See Chapter 13.) This is a classic senior-level answer: *"TypeScript's goal is to catch most bugs while staying compatible with JavaScript idioms, not to prove programs correct."*

---

### 1.3 Two Worlds: Compile Time vs Runtime

#### 1.3.1 The two worlds
Your project lives in **two worlds** at once. Confusing them is the root of most TypeScript misunderstandings.

| 🏗️ Compile-time world | 🏃 Runtime world |
|---|---|
| Where TypeScript lives | Where JavaScript lives |
| Types, interfaces, generics | Values, functions, objects |
| Ends when you build | Begins when code executes |
| Errors are cheap (red squiggle) | Errors are expensive (users see them) |
| Cannot see real data | Sees real data, but has no idea about your types |

🧠 **Analogy:** TypeScript is a **building inspector**. They review blueprints (code) before anyone moves in and write a report. Once people are inside (runtime), the inspector is gone. They never check what tenants actually carry through the door.

#### 1.3.2 Types and values live in different "namespaces"
TypeScript keeps two separate name tables: one for **types**, one for **values**.

```ts
interface User { name: string }        // type only. Exists only in compile-time world.
const user = { name: "Elvis" };        // value only. Exists at runtime.

class Dog {}                           // BOTH: a value (the constructor) and a type (instances)
enum Color { Red }                     // BOTH: a runtime object and a type

type Config = typeof config;           // `typeof` is the bridge: value → type
const config = { port: 3000 };
```

🔬 This is why you can write `type User = ...` and `const User = ...` in the same file: different tables. It is also why a bare `interface` can never appear in an `if` condition: it doesn't exist at runtime.

#### 1.3.3 Type erasure
**Type erasure** means every piece of type-only syntax is deleted when TypeScript produces JavaScript.

```ts
// Input: TypeScript
interface User { name: string }

function greet(user: User): string {
  return `Hello ${user.name}`;
}
```
```js
// Output: JavaScript (after types are erased)
function greet(user) {
  return `Hello ${user.name}`;
}
```

- ✂️ **Erased completely:** annotations, `interface`, `type`, generics, `as` casts, `import type`, `declare`.
- 🧱 **Survive in some form (they're real JS):** variables, functions, classes, and `enum` (compiled to an object).
- ⚠️ **Consequence:** you can never write `if (x instanceof User)` when `User` is an interface, and a `User` annotation never validates anything.

---

### 1.4 What Actually Runs in the Browser

#### 1.4.1 The pipeline
**The browser never sees TypeScript.** It receives JavaScript (plus CSS, HTML, assets). Here's the journey:

```text
  Your code (.ts / .tsx)
        │
        ├──────────────► 🔍 Type checker (tsc --noEmit / editor)
        │                    │  finds type errors; produces NO files
        │                    ▼
        │               errors shown to you (editor, CI)
        │
        ▼
  ✂️  Transpiler: tsc, esbuild, swc or Babel
        │  • strips types
        │  • rewrites newer syntax to your `target`
        ▼
  JavaScript modules (.js)
        │
        ▼
  📦 Bundler: Vite / webpack / Rollup / Turbopack / esbuild
        │  • merges modules, tree-shakes, minifies
        ▼
  main.[hash].js (+ source maps)  ──► CDN ──► 🌐 Browser executes JavaScript
```

#### 1.4.2 Type-checking and emitting are separate jobs
`tsc` does **both** (check + emit), but modern toolchains split them:

- **Transpile only (fast):** esbuild, swc, Babel and Vite's dev server just *strip types*. They do **not** check types. A file full of type errors can still run.
- **Type-check (slower):** `tsc --noEmit` (or your editor) reports errors but creates nothing.

```bash
npx tsc --noEmit        # check types only. Put this in CI.
```

⚠️ **Common beginner surprise:** "My app runs even though VS Code shows red errors." Yes. Type errors don't stop JavaScript from being produced unless you opt in:
```json
{ "compilerOptions": { "noEmitOnError": true } }
```
🔬 Frameworks differ: **Next.js** type-checks during `next build` (and fails the build on errors); **Vite** does not, so teams add `tsc --noEmit` to CI or use a checker plugin.

#### 1.4.3 TypeScript features that generate runtime code
Most TS syntax is erased, but a few features emit real JavaScript:

| Feature | What it becomes |
|---|---|
| `enum` | An object (often an IIFE) |
| `namespace` (non-ambient) | An IIFE building an object |
| Constructor **parameter properties** (`constructor(public x: number)`) | Assignments like `this.x = x` |
| Decorators | Helper calls |

```ts
// TS
enum Direction { Up, Down }
class Point { constructor(public x: number, public y: number) {} }
```
```js
// JS output (simplified)
var Direction;
(function (Direction) {
  Direction[Direction["Up"] = 0] = "Up";
  Direction[Direction["Down"] = 1] = "Down";
})(Direction || (Direction = {}));

class Point {
  constructor(x, y) { this.x = x; this.y = y; }
}
```
🔬 Since TS 5.8 you can set `"erasableSyntaxOnly": true` to forbid these, which keeps your code compatible with runtimes that simply strip types (like recent versions of Node).
⚠️ Because of this, "TypeScript = JavaScript minus types" is *almost* true, not *entirely* true.

#### 1.4.4 What does NOT ship, and what `target` does (and doesn't) do
- **Not shipped:** interfaces, type aliases, annotations, `.d.ts` files, `tsconfig.json`.
- **`target`** controls which **syntax** the output uses (e.g. `ES2022` keeps `class` fields; `ES5` rewrites to functions).
- ⚠️ **`target` does NOT polyfill APIs.** `Array.prototype.at()` won't magically exist in an old browser. You need a polyfill or a browserslist-aware tool.
- **`lib`** only tells the *checker* which APIs exist. If `lib` says `Promise.withResolvers` exists but the user's browser lacks it, you crash at runtime anyway.

#### 1.4.5 Source maps
Because the browser runs the *generated* JS, errors would show confusing line numbers. **Source maps** (`"sourceMap": true`) let devtools map them back to your `.ts` lines. Debug TS in the browser; run JS.

---

### 1.5 The `fetch` Trap: Does TypeScript Protect You From a Bad Server?

#### 1.5.1 The scenario
```ts
type User = { id: number; name: string; email: string };

async function getUser(id: number): Promise<User> {
  const res = await fetch(`/api/users/${id}`);
  const user: User = await res.json();   // ✅ compiles with zero complaints
  return user;
}
```
Now suppose the backend team renames a field and ships:
```json
{ "id": "42", "fullName": "Elvis" }
```
Your app does `user.name.toUpperCase()` and 💥 `TypeError: Cannot read properties of undefined`.

> ## 🚨 Answer: **No. TypeScript does not protect you.**
> TypeScript verified your *code*, not the *data that arrives later*.

#### 1.5.2 Why TypeScript can't protect you
1. **`res.json()` returns `Promise<any>`.** And `any` is assignable to *everything*, so `const user: User = <any>` is always accepted.
2. **Types are erased.** At runtime there is no `User` to check against.
3. **The compiler never sees the network.** It checks files on your machine at build time. The server is a different program, deployed separately, possibly at a different time.
4. **Annotations are promises, not checks.** `: User` means "I assert this is a User". Nobody opens the box.

🧠 **Analogy:** a customs form. You wrote "contents: books" on the box. The form is perfectly filled out. Nobody verified what's inside.

🔬 `JSON.parse(text)` also returns `any`. So does `localStorage.getItem(...)` after parsing, `request.body` in Express, and `process.env.X` is `string | undefined` (at least that one is honest).

#### 1.5.3 The fix ladder (from weakest to strongest)

**🪜 Step 0: Stop lying with `as`**
```ts
const user = (await res.json()) as User;  // still unchecked 😬. Same lie, different syntax.
```

**🪜 Step 1: Treat it as `unknown` and narrow with a type guard**
```ts
function isUser(value: unknown): value is User {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === "number" &&
    typeof v.name === "string" &&
    typeof v.email === "string"
  );
}

async function getUser(id: number): Promise<User> {
  const res = await fetch(`/api/users/${id}`);
  const data: unknown = await res.json();

  if (!isUser(data)) {
    throw new Error("Server returned invalid user data");
  }
  return data;  // ✅ now genuinely a User
}
```

**🪜 Step 2: Use a schema library (Zod, Valibot, ArkType)**: one definition, two products (runtime validation *and* the TypeScript type)
```ts
import { z } from "zod";

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

type User = z.infer<typeof UserSchema>;   // type generated FROM the schema. No drift.

async function getUser(id: number): Promise<User> {
  const res = await fetch(`/api/users/${id}`);
  return UserSchema.parse(await res.json());   // throws a descriptive error if invalid
}

// Or handle failure without throwing:
const result = UserSchema.safeParse(data);
if (!result.success) console.error(result.error.issues);
else console.log(result.data.name);            // typed ✅
```

**🪜 Step 3: Share a contract (OpenAPI codegen, tRPC, GraphQL codegen)**
These make frontend and backend *agree at compile time*. But a stale deploy or a bad actor can still break the agreement, so keep Step 2 at trust boundaries.

#### 1.5.4 Where are the "trust boundaries"? (validate at all of these)
- 🌐 HTTP responses and request bodies
- 📝 User input and form data
- 💾 `localStorage`, cookies, IndexedDB
- 🔗 URL params and query strings
- 🧪 Environment variables
- 📂 Files, third-party SDK callbacks, `postMessage`
- 🗄️ Database rows (especially with raw queries)

🧠 **Principle: "Parse, don't validate."** Convert untrusted `unknown` into a trusted typed value **once, at the edge**. After that, the rest of your code can trust the types.

#### 1.5.5 🎯 Interview Corner
- **Q: Does TypeScript protect you if the server sends something different?**
  **A:** No. The annotation is erased and `res.json()` returns `any`, so the compiler accepts any shape. Protection requires runtime validation at the boundary (type guards or a schema library like Zod), after which the types are trustworthy.
- **Follow-up: "Is `as User` any better?"** No. It silences the compiler; it checks nothing.
- **Follow-up: "How would you design this in a large codebase?"** Validate at the network boundary, derive types from schemas (`z.infer`), keep the internal domain strongly typed, optionally generate clients from OpenAPI/tRPC for compile-time agreement, and add contract tests.
- **Follow-up: "Why doesn't TypeScript just add runtime checks?"** Design goal: no runtime footprint and full JS compatibility (erasure). Runtime checking would add cost and change JS semantics. Schema libraries fill the gap.

---

### 1.6 Your Playground

#### 1.6.1 Zero setup: the online Playground
Go to `typescriptlang.org/play`. TypeScript on the left, errors as squiggles, the **JS output on the right**. It's the fastest way to *see type erasure* with your own eyes.

#### 1.6.2 A tiny local project
```bash
mkdir ts-lab && cd ts-lab
npm init -y
npm install -D typescript tsx      # tsx runs .ts files directly
npx tsc --init                     # generate tsconfig.json
mkdir src && touch src/index.ts
```
```bash
npx tsc --noEmit         # CHECK  (is my code consistent?)
npx tsx src/index.ts     # RUN    (execute it)
```
🧒 **Two jobs, two tools.** Checking and running are different steps. Many beginners think they are one. (See 1.4.2.)

---

## 2. 🎒 Basic Types

### 2.1 The Primitive Types

TypeScript has one type for each JavaScript primitive, plus a few of its own.

#### 2.1.1 `string`
```ts
let name: string = "Elvis";
let greeting: string = `Hello, ${name}`;   // template literals are strings
```

#### 2.1.2 `number`
```ts
let age: number = 25;
let price: number = 99.99;
let big: number = 1_000_000;       // numeric separators are allowed
let hex: number = 0xff;
let nope: number = NaN;            // ⚠️ NaN and Infinity are numbers
```
- 🧒 There is **no `int` or `float`.** All numbers are 64-bit floating point.
- ⚠️ `0.1 + 0.2 !== 0.3`. That's JavaScript, not TypeScript. For money, use integers (cents) or a decimal library.
- 🔬 Integers above `Number.MAX_SAFE_INTEGER` (2^53 − 1) lose precision. Use `bigint`.

#### 2.1.3 `boolean`
```ts
let isLoggedIn: boolean = true;
```
Only `true` or `false`. Not truthy/falsy values: `let b: boolean = 1` is an error.

#### 2.1.4 `bigint`
```ts
const huge: bigint = 12345678901234567890n;   // note the trailing n
const sum = huge + 1n;                        // ⚠️ you can't mix bigint and number: huge + 1 is an error
```
Requires `target` ES2020 or higher.

#### 2.1.5 `symbol`
```ts
const id: symbol = Symbol("id");              // guaranteed unique
const KEY: unique symbol = Symbol("key");     // a `unique symbol` is a type of exactly ONE symbol (used for branding, see 7.6)
```

#### 2.1.6 `null` and `undefined`
```ts
let a: null = null;
let b: undefined = undefined;
```
- 🧒 `null` = "I deliberately put nothing here". `undefined` = "nothing has been set".
- 🔬 With **`strictNullChecks`** (part of `strict`), `null` and `undefined` are **separate types** that you must opt into:
  ```ts
  let name: string = null;              // ❌ with strictNullChecks
  let maybe: string | null = null;      // ✅ explicit
  ```
- ⚠️ Without `strictNullChecks`, *every* type silently includes `null` and `undefined`. That's the "billion-dollar mistake" (Tony Hoare's phrase for null references) leaking back in. Always enable `strict`.

#### 2.1.7 The quick reference
| Type | Example values | Notes |
|---|---|---|
| `string` | `"hi"`, `` `x${1}` `` | |
| `number` | `42`, `3.14`, `NaN` | no int/float split |
| `boolean` | `true`, `false` | |
| `bigint` | `10n` | ES2020+ |
| `symbol` | `Symbol("x")` | rare in app code |
| `null` | `null` | intentional absence |
| `undefined` | `undefined` | unassigned/missing |

---

### 2.2 `any` vs `unknown`

#### 2.2.1 `any`: the "switch the type checker off" type
`any` tells the compiler: *"Stop checking this value. Trust me."*
```ts
let value: any = "hello";

value.foo.bar.baz();        // ✅ compiles (💥 crashes at runtime)
value = 42;                 // ✅
const n: number = value;    // ✅ any slips silently into anything
const s: string = value;    // ✅ even though it's a number right now!
```
⚠️ **`any` is contagious.** One `any` flows through assignments and function returns and quietly disables checking everywhere it touches:
```ts
const data = JSON.parse(text);        // any
const name = data.user.name;          // any (inferred from any)
const upper = name.toUpperCase();     // any. The whole chain is unchecked.
```
🔬 `any` is "gradual typing's escape hatch": it's *both* assignable to everything and from everything (except `never`).

#### 2.2.2 `unknown`: "I don't know yet, so prove it"
`unknown` also means "could be anything", but TypeScript **refuses to let you use it until you narrow it**.
```ts
let value: unknown = "hello";

value.toUpperCase();         // ❌ 'value' is of type 'unknown'
value + 1;                   // ❌
const s: string = value;     // ❌ unknown is NOT assignable to string

if (typeof value === "string") {
  value.toUpperCase();       // ✅ narrowed to string
}
```
Ways to narrow `unknown`:
```ts
function describe(x: unknown) {
  if (typeof x === "string") return x.toUpperCase();        // primitives
  if (typeof x === "number") return x.toFixed(2);
  if (x instanceof Date) return x.toISOString();            // classes
  if (Array.isArray(x)) return `array of ${x.length}`;      // arrays
  if (typeof x === "object" && x !== null && "name" in x) { // objects
    return String((x as { name: unknown }).name);
  }
  return "unsupported";
}
```

#### 2.2.3 Side-by-side
| | `any` | `unknown` |
|---|---|---|
| Assign **anything to it** | ✅ | ✅ |
| Assign **it to** `string`, `number`, etc. | ✅ (unsafe) | ❌ must narrow first |
| Read properties / call methods | ✅ (unchecked) | ❌ must narrow first |
| Safety | None | Full |
| Spreads through code | Yes (contagious) | No |
| Think of it as | "off switch" | "locked box" |

#### 2.2.4 🏢 The theory: top and bottom types
- **`unknown` is the top type:** every type is assignable *to* it. It's the set of all possible values.
- **`never` is the bottom type:** it's assignable *to* every type. It's the empty set. (See 3.2.)
- **`any` is outside the lattice:** it behaves as both top and bottom, which is exactly why it's dangerous.

Useful algebra:
```ts
type A = string | unknown;   // unknown   (unknown absorbs everything in a union)
type B = string & unknown;   // string    (unknown is the identity for intersection)
type C = string | any;       // any
type D = string & any;       // any
type E = string | never;     // string    (never vanishes in a union)
type F = string & never;     // never
```

#### 2.2.5 Where each shows up in real code
- `JSON.parse()`, `res.json()`, `req.body` (Express) → **`any`** (legacy decisions in the standard library). Immediately re-type them as `unknown` and validate.
- `catch (e)` → **`unknown`** under `strict` (`useUnknownInCatchVariables`).
- Generic function that accepts anything but doesn't touch it → **`unknown`** (e.g. `function log(x: unknown)`).
- Gradual migration of old JS → temporary **`any`**, with an eslint rule (`@typescript-eslint/no-explicit-any`) to track it.

#### 2.2.6 🎯 Interview Corner
- **Q: `any` vs `unknown`?**
  **A:** Both accept any value. `any` disables type checking: you can do anything with it and it infects whatever it touches. `unknown` is the type-safe counterpart: you can assign anything to it, but must narrow before using it. Prefer `unknown` for values whose type you genuinely don't know.
- **Follow-up: "Can you assign `unknown` to `any`?"** Yes. `unknown` is assignable only to `unknown` and `any`.
- **Follow-up: "What's `unknown` vs `object`?"** `object` means "a non-primitive" (not `null`). `unknown` includes primitives, `null` and `undefined`.
- **Follow-up: "What does `noImplicitAny` do?"** Errors when TS would have to *infer* `any` (e.g. an untyped parameter), so you can't get `any` by accident. It does not forbid writing `: any` explicitly.
- **Follow-up: "How do you get rid of `any` from `JSON.parse`?"** Assign to `unknown`, then validate with a type guard or schema (see 1.5.3).

---

### 2.3 Arrays vs Tuples

#### 2.3.1 Arrays: "a list of the same kind of thing"
```ts
const names: string[] = ["Elvis", "Jane"];
const scores: Array<number> = [10, 20, 30];       // same thing, generic syntax
const matrix: number[][] = [[1, 2], [3, 4]];
const mixed: (string | number)[] = ["a", 1, "b"]; // a union inside parentheses
const ro: readonly number[] = [1, 2, 3];          // can't push/mutate
```
⚠️ **Parentheses matter:** `string | number[]` means "a string, OR an array of numbers". `(string | number)[]` means "an array whose items are strings or numbers."

#### 2.3.2 Tuples: "a fixed-shape record where position means something"
```ts
const user: [string, number] = ["Elvis", 25];

const name = user[0];   // string
const age  = user[1];   // number
user[2];                // ❌ Tuple type '[string, number]' of length '2' has no element at index '2'
```
- 🧒 A tuple is like a **form with labeled slots**: slot 0 must be text, slot 1 must be a number, and there are exactly two slots.
- 🔬 You already use tuples: React's `useState` returns `[value, setValue]`; `Object.entries()` yields `[key, value]` pairs; `Map` constructors take `[key, value]` pairs.

#### 2.3.3 ⭐ `[string, number]` vs `(string | number)[]`
| | `[string, number]` (tuple) | `(string \| number)[]` (array) |
|---|---|---|
| Length | **Exactly 2** | Any length (0, 1, 1000...) |
| Order matters? | **Yes**: index 0 string, index 1 number | **No**: any mix in any order |
| `x[0]` type | `string` | `string \| number` |
| `x[1]` type | `number` | `string \| number` |
| `x[5]` | ❌ compile error | ✅ allowed (type `string \| number`, even though it may not exist) |

```ts
const t: [string, number] = ["Elvis", 25];       // ✅
const t2: [string, number] = [25, "Elvis"];      // ❌ wrong order
const t3: [string, number] = ["Elvis", 25, 99];  // ❌ too long

const a: (string | number)[] = ["Elvis", 25];            // ✅
const a2: (string | number)[] = [25, "Elvis"];           // ✅ order doesn't matter
const a3: (string | number)[] = ["a", 1, "b", 2, "c"];   // ✅ any length
```
**Assignability:** a tuple *is* an array, but an array is *not* a tuple.
```ts
const tup: [string, number] = ["a", 1];
const arr: (string | number)[] = tup;    // ✅ tuple → wider array
const back: [string, number] = arr;      // ❌ array might be any length/order
```

#### 2.3.4 Tuple superpowers
```ts
// Optional elements
type Entry = [string, number?];
const e1: Entry = ["x"];        // ✅
const e2: Entry = ["x", 1];     // ✅

// Labeled elements (documentation only, but great for hover tooltips)
type Range = [start: number, end: number];

// Rest elements
type StringThenNumbers = [string, ...number[]];
const s: StringThenNumbers = ["sum", 1, 2, 3];   // ✅

// Readonly tuples
const point: readonly [number, number] = [10, 20];
point[0] = 5;                                    // ❌ read-only

// Destructuring keeps positions typed
const [name, age] = user;                        // name: string, age: number
```

#### 2.3.5 Gotchas (⚠️ and 🏢)
**Inference prefers arrays, not tuples:**
```ts
const x = ["Elvis", 25];            // inferred (string | number)[]  ← array!
const y = ["Elvis", 25] as const;   // readonly ["Elvis", 25]        ← tuple of literals
const z: [string, number] = ["Elvis", 25];   // explicit annotation → tuple
```
**`push` is an unsound hole in tuples:**
```ts
const t: [string, number] = ["Elvis", 25];
t.push(99);          // ✅ compiles!! (length is now 3 at runtime, but TS still thinks 2)
const ro: readonly [string, number] = ["Elvis", 25];
ro.push(99);         // ❌ fixed by readonly
```
**Returning multiple values from a function:**
```ts
function minMax(nums: number[]): [number, number] {
  return [Math.min(...nums), Math.max(...nums)];
}
const [min, max] = minMax([3, 1, 4]);   // positional, like React hooks
```
💡 **Rule of thumb:** for 2 or 3 closely related values, use a tuple. For more, or when names matter, use an **object** (`{ min, max }`); names beat positions for readability.

#### 2.3.6 🎯 Interview Corner
- **Q: `[string, number]` vs `(string | number)[]`?**
  **A:** The tuple has a fixed length and position-specific types, so `t[0]` is `string` and `t[1]` is `number`. The array can be any length with any mix, and every index is `string | number`. A tuple is assignable to the array type, not vice versa.
- **Follow-up: "What is `const x = ["a", 1]` inferred as?"** `(string | number)[]`. Use `as const` or an annotation for a tuple.
- **Follow-up: "Can you mutate a tuple's length in TS?"** `push`/`pop` are allowed on mutable tuples (a known unsoundness). `readonly` tuples forbid it.

---

### 2.4 Types to Avoid (the "capitalized trap" and friends)
| Don't write | Why | Write instead |
|---|---|---|
| `String`, `Number`, `Boolean`, `Symbol` | Boxed wrapper *objects*, almost never what you mean | `string`, `number`, `boolean`, `symbol` |
| `Object` | Matches nearly everything (even primitives) | `object`, `Record<string, unknown>`, or a real shape |
| `{}` | Means "any non-nullish value" (a string passes!) | `object`, `unknown`, or a real shape |
| `Function` | Unchecked "any callable" | `(a: number) => string` |
| `any` | Switches checking off | `unknown` or a precise type |

```ts
let a: {} = "hello";        // ✅ (!!) a string is non-nullish
let b: object = "hello";    // ❌ strings aren't objects
let c: Object = 42;         // ✅ (!!) numbers have Object methods
```

---

### 2.5 Literal Types & Unions (the toolkit you'll need next)
```ts
type Direction = "up" | "down" | "left" | "right";   // a union of literal types
type Dice = 1 | 2 | 3 | 4 | 5 | 6;

let d: Direction = "up";      // ✅
d = "north";                  // ❌ Type '"north"' is not assignable to type 'Direction'
```
- 🧒 A **literal type** is a type with exactly one possible value. A **union** (`|`) combines types: "this OR that".
- 💡 Prefer a literal union over plain `string` whenever the set of values is fixed (status, role, theme). You get autocomplete and typo protection.
- ⚠️ Until you **narrow** a union you can only use what all members share (see the Narrowing notes).
```ts
function show(id: string | number) {
  id.toUpperCase();   // ❌ number has no toUpperCase
  if (typeof id === "string") id.toUpperCase();   // ✅ narrowed
}
```

---

### 2.6 Enums (quick tour)
```ts
enum Direction { Up, Down, Left, Right }           // numeric: 0,1,2,3 (reverse-mapped)
enum Role { Admin = "admin", User = "user" }       // string enum (no reverse mapping)

Direction[0];            // "Up"   (numeric enums map both ways)
const r: Role = Role.Admin;
const bad: Role = "admin";   // ❌ plain strings aren't Role
```
- Enums are one of the few TS features that **emit runtime code** (see 1.4.3).
- 🔬 Historically, any number was assignable to a numeric enum; TS 5.0 tightened out-of-range *literals*, but a plain `number` variable is still assignable.
- `const enum` is inlined at compile time; it interacts badly with `isolatedModules`/Babel/esbuild and library publishing.
- 💡 **Modern preference:** a string-literal union (`type Role = "admin" | "user"`) or an `as const` object, which add no runtime cost and interoperate with plain strings from APIs.
```ts
const ROLE = { Admin: "admin", User: "user" } as const;
type Role = (typeof ROLE)[keyof typeof ROLE];   // "admin" | "user"
```

---

### 2.7 🎯 Interview Corner: "What are the basic types?"
**A (structured answer):**
1. **Primitives:** `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`.
2. **Structured:** arrays (`T[]`), tuples (`[A, B]`), objects (`{ ... }`), functions (`(x: A) => B`).
3. **Special:** `any` (opt out), `unknown` (safe top type), `never` (bottom type), `void` (no useful return).
4. **Composites:** unions (`|`), intersections (`&`), literal types, enums.
> 🎤 Mention that `null`/`undefined` only behave as separate types under `strictNullChecks`; that shows you know real-world configuration.

---

## 3. 🕳️ `void`, `never` and `undefined`

> 🧒 **The "nothing" family.** JavaScript has several flavors of "nothing". TypeScript gives each one a precise job. Mixing them up is a favorite interview trap.

### 3.1 `void`

#### 3.1.1 What `void` means
`void` is the return type of a function whose **result is not meant to be used**.
```ts
function logMessage(message: string): void {
  console.log(message);      // no return statement
}

const result = logMessage("hi");   // result is `void`. At runtime it's `undefined`.
```
- 🧒 Think of a **"fire and forget"** action: `console.log`, `setTimeout`, an event handler. You don't care what comes back.
- ⚠️ `void` does **not** mean "nothing exists". It means "don't depend on the return value".

#### 3.1.2 What a `void`-returning function declaration may return
```ts
function a(): void { return; }            // ✅ bare return
function b(): void { return undefined; }  // ✅
function c(): void { return 5; }          // ❌ Type 'number' is not assignable to type 'void'
```

#### 3.1.3 ⭐ The quirk: `void` in a function *type* is more permissive
```ts
type Callback = () => void;

const cb1: Callback = () => 42;           // ✅ allowed! (returns a number)
const cb2: Callback = () => "hello";      // ✅ also allowed

const x = cb1();                          // x: void  (you can't use it as a number)
const n: number = cb1();                  // ❌ Type 'void' is not assignable to type 'number'
```
**Why?** So callbacks like `forEach` work with ordinary functions:
```ts
const nums: number[] = [];
[1, 2, 3].forEach((n) => nums.push(n));   // push returns a number, but forEach's callback is typed `=> void`
```
If TS forced the callback to return nothing, you'd have to wrap every one-liner in braces. The contract is *"I, the caller, will ignore whatever you return"*, not *"you must return nothing"*.

#### 3.1.4 `void` vs `undefined`
```ts
let v: void = undefined;        // ✅ only undefined (and null without strictNullChecks) fits in void
let u: undefined = undefined;   // ✅
let bad: void = 5;              // ❌
```
| | `void` | `undefined` |
|---|---|---|
| Meaning | "result is irrelevant" | "the value `undefined`" |
| In a function *type*, a function returning a value is assignable | ✅ | ❌ |
| Usable as a real value to inspect | No (checker blocks it) | Yes |
| Return type of a function with no `return` | Idiomatic | Allowed (TS 5.1+ doesn't require a `return` statement) |

#### 3.1.5 `void` with async and promises
```ts
async function save(): Promise<void> {     // resolves with nothing useful
  await db.write("x");
}
```
🔬 `void promise` (the JS operator) marks a deliberate "fire and forget", which silences `no-floating-promises` lint rules.

---

### 3.2 `never`

#### 3.2.1 The bottom type
`never` is the type with **no possible values** (the empty set).
- It's **assignable to every type** (vacuous truth: if no value exists, you can never break the rule).
- **Nothing is assignable to `never`** (except `never` itself).
```ts
let x: never;
x = 5;           // ❌
const s: string = x;   // ✅ never is assignable to everything
```

#### 3.2.2 Five ways you'll meet `never`
**1. A function that never returns normally** (throws, loops forever, exits)
```ts
function fail(message: string): never {
  throw new Error(message);
}
function forever(): never {
  while (true) {}
}
// In @types/node, process.exit() is declared as returning `never`
```
⚠️ **Inference quirk:** *function expressions and arrow functions* that always throw infer `never`; *function declarations* infer `void`. Annotate explicitly.
```ts
function a() { throw new Error("x"); }               // inferred: void
const b = function () { throw new Error("x"); };     // inferred: never
const c = () => { throw new Error("x"); };           // inferred: never
```

**2. A narrowed-away union (all cases handled)**
```ts
function f(x: string | number) {
  if (typeof x === "string") { /* x: string */ }
  else if (typeof x === "number") { /* x: number */ }
  else { x; /* x: never. Nothing left! */ }
}
```

**3. An impossible intersection**
```ts
type A = string & number;                         // never
type B = { kind: "a" } & { kind: "b" };           // never (disjoint discriminants collapse)
```

**4. A filtered conditional type**
```ts
type NoNull<T> = T extends null ? never : T;
type R = NoNull<string | null>;                   // string
```
`Exclude<T, U>` is literally `T extends U ? never : T`. In a union, `never` **disappears** (`string | never` is `string`), which is why it works as a filter.

**5. A mapped-type key you want to drop**
```ts
type OnlyStringProps<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];   // `as never` removes the key
};
type R2 = OnlyStringProps<{ a: string; b: number; c: string }>;   // { a: string; c: string }
```

#### 3.2.3 ⭐ The killer use: exhaustiveness checking
```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

function assertNever(x: never): never {
  throw new Error(`Unhandled case: ${JSON.stringify(x)}`);
}

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.size ** 2;
    default:       return assertNever(shape);   // ✅ shape is `never` here
  }
}
```
Now add `| { kind: "triangle"; base: number; height: number }` to `Shape` **and forget the case**: the `default` branch's `shape` is no longer `never`, so TypeScript errors **at compile time** exactly where you forgot. And if bad data sneaks in at runtime, `assertNever` throws instead of silently returning `undefined`. Two layers of safety.

#### 3.2.4 🏢 `never` to forbid things: mutually exclusive props
```ts
type ButtonProps =
  | { href: string; onClick?: never }          // link: onClick is forbidden
  | { onClick: () => void; href?: never };     // button: href is forbidden

const ok1: ButtonProps = { href: "/home" };
const ok2: ButtonProps = { onClick: () => {} };
const bad: ButtonProps = { href: "/home", onClick: () => {} };   // ❌ can't have both
```
`prop?: never` means "this property may only be absent". It's a classic FAANG-level technique for modeling XOR props.

---

### 3.3 `void` vs `never`
| | `void` | `never` |
|---|---|---|
| Does the function **return**? | Yes (with a meaningless value) | **No**, it never returns normally |
| Code after the call reachable? | Yes | **No** (TS marks it unreachable) |
| Set theory | One value: `undefined` | Zero values (empty set) |
| Role | Ordinary type | **Bottom** type |
| Typical use | `console.log`, callbacks | `throw` helpers, exhaustiveness checks, impossible states |
| Assignable *to* `string`? | ❌ | ✅ (vacuously) |

```ts
function log(): void { console.log("hi"); }
function fail(): never { throw new Error("boom"); }

function test() {
  log();
  console.log("reachable");
  fail();
  console.log("unreachable");   // TS flags this as unreachable code
}
```
🧠 **Mnemonic:** `void` = "returns, but ignore it". `never` = "doesn't come back".

---

### 3.4 `undefined` in Practice

#### 3.4.1 Where `undefined` appears (everywhere!)
- A variable declared but not assigned
- A missing function argument
- A missing object property
- `Array.prototype.find()` when nothing matches → `T | undefined`
- `Map.prototype.get()` → `V | undefined`
- A function without a `return`
- Optional properties and parameters (9.1, 8.2)

#### 3.4.2 Modeling "maybe there is no result"
```ts
function findUser(users: User[], id: number): User | undefined {
  return users.find((u) => u.id === id);
}

const user = findUser(users, 1);
user.name;                    // ❌ 'user' is possibly 'undefined'
if (user) user.name;          // ✅ narrowed
user?.name;                   // ✅ string | undefined
```
💡 The `| undefined` in the return type **forces every caller to deal with absence**. That's `undefined` doing a great job.

#### 3.4.3 `undefined` vs `null`: pick a convention
| | `undefined` | `null` |
|---|---|---|
| Typical meaning | "not provided / not set / not found" | "deliberately empty" |
| Comes from | The language itself (missing props, missing args) | APIs and JSON (`"middleName": null`), DOM (`querySelector`) |
| In JSON | Dropped (can't be serialized) | Preserved |
Choose one convention per codebase; many teams use `undefined` internally and `null` only where an external API demands it.

#### 3.4.4 Array indexing lies unless you ask it not to
```ts
const names = ["a", "b"];
const first = names[5];      // typed `string` (but is undefined at runtime!) 🐛
```
Enable **`noUncheckedIndexedAccess`** and TS becomes honest:
```ts
const first = names[5];      // string | undefined ✅
first.toUpperCase();         // ❌ must check first
```

#### 3.4.5 Combining `never` and `undefined` in type-level code
```ts
type Defined<T> = Exclude<T, undefined>;       // removes undefined from a union
type A = Defined<string | undefined>;          // string

// Filtering undefined out of an array
const maybe: (string | undefined)[] = ["a", undefined, "b"];

const strings = maybe.filter((x): x is string => x !== undefined);   // explicit type predicate: string[]
// TS 5.5+ can infer this predicate for simple callbacks: maybe.filter(x => x !== undefined)

// Making every optional property required (removing undefined with -?)
type AllRequired<T> = { [K in keyof T]-?: T[K] };   // this is how Required<T> works
```

---

### 3.5 🎯 Interview Corner
- **Q: What is `void`?**
  **A:** The return type of functions whose result isn't meant to be used, such as `console.log` or event handlers. Only `undefined` can be assigned to a `void` variable, but a function *type* returning `void` accepts functions that return anything, because callers ignore the result.
- **Follow-up: Difference between `void` and `never`?**
  **A:** `void` functions return (with a meaningless value); `never` functions never return normally (they throw or loop forever). `never` is the bottom type, assignable to everything, with no values; `void` has one: `undefined`.
- **Q: How would you use `never`?**
  **A:** (1) Exhaustiveness checks with `assertNever` in a `switch`; (2) helper functions that always throw; (3) filtering union members via conditional types (`Exclude`); (4) forbidding properties with `prop?: never` for mutually exclusive props; (5) it shows up automatically when intersections or narrowing become impossible.
- **Q: How would you use `undefined`?**
  **A:** To model absence honestly: `T | undefined` return types (`find`, `Map.get`), optional properties/parameters, and with `noUncheckedIndexedAccess` for array lookups. It forces callers to handle the missing case.
- **Follow-up: Why can `() => void` accept `() => number`?**
  **A:** Callback contracts say "the caller ignores the return". Without this, `arr.forEach(x => set.add(x))` would fail because `add` returns the set.
- **🏢 Follow-up: Why does `const f = () => { throw ... }` infer `never` but `function f() { throw ... }` infer `void`?**
  **A:** A deliberate TS rule: function expressions can be assumed to be used as callbacks where `never` is correct; declarations are hoisted and treated more conservatively. Annotate explicitly.

---

## 4. 🔮 Type Inference

### 4.1 What Is Type Inference?
**Type inference** is TypeScript figuring out types **without you writing them**, by examining values, return statements and context.

🧒 **Analogy:** a detective. You hand over a `25`; the detective deduces "that's a number" without a confession (`: number`).

```ts
const age = 25;                    // number (well, the literal 25, see 4.2)
const name = "Elvis";              // "Elvis"
const scores = [10, 20, 30];       // number[]
const user = { name: "Elvis", age: 25 };   // { name: string; age: number }
```
Inference makes TypeScript feel light. Most real-world code is mostly un-annotated, yet fully checked.

---

### 4.2 Inference for Variables

#### 4.2.1 `const` vs `let`
```ts
const a = "hi";     // type: "hi"     (a literal type: it can never change)
let b = "hi";       // type: string   (it can change, so TS widens it)

const n = 0;        // type: 0
let m = 0;          // type: number
```
This is called **literal widening**: for `let`, TS widens the literal to its general type because you might reassign.

#### 4.2.2 Why this matters
```ts
const direction = "up";          // "up"
let direction2 = "up";           // string

function move(d: "up" | "down") {}
move(direction);                 // ✅ "up" fits
move(direction2);                // ❌ Argument of type 'string' is not assignable to parameter of type '"up" | "down"'
```

#### 4.2.3 ⭐ "After `let count = 0`, what happens if you write `count = "five"`?"
```ts
let count = 0;        // TS infers: number
count = "five";       // ❌ Type 'string' is not assignable to type 'number'.
```
**Explanation, step by step:**
1. `let count = 0` has no annotation, so TS **infers** the type from the initializer: `0` → widened (because `let`) → `number`.
2. From then on, `count` is a `number` variable. That's its **declared type**.
3. Assigning `"five"` (a `string`) violates it → **compile-time error TS2322**.
4. ⚠️ At **runtime** (plain JavaScript) it would be perfectly fine, since JS has no such rule, and by default `tsc` still emits the JS even with that error (see 1.4.2).
5. If you *wanted* both: annotate explicitly: `let count: number | string = 0;`.

#### 4.2.4 `let` with no initializer
```ts
let x;                   // implicit any (but control-flow typed: see below)
x = 5;                   // x: number from here
x = "hi";                // x: string from here  (an "evolving let", only under noImplicitAny)

let y: string;           // ✅ better: say what it will be
y = "hi";
```
💡 Annotate declarations without initializers.

#### 4.2.5 Objects and arrays
Properties of object literals **widen** because objects are mutable:
```ts
const config = { mode: "dark", retries: 3 };
// { mode: string; retries: number }   ← "dark" widened to string!

function setMode(m: "dark" | "light") {}
setMode(config.mode);      // ❌ string isn't assignable to "dark" | "light"
```
Three fixes:
```ts
const c1 = { mode: "dark" } as const;            // readonly { readonly mode: "dark" }
const c2: { mode: "dark" | "light" } = { mode: "dark" };   // annotate
const c3 = { mode: "dark" } satisfies { mode: "dark" | "light" };  // validate, keep literal (see 10.5)
```
Arrays infer the **union of element types**:
```ts
const mixed = [1, "a", true];     // (string | number | boolean)[]
const empty = [];                 // evolving any[] (annotate: const empty: string[] = [])
```

---

### 4.3 Contextual Typing (inference from *where* it's used)
Sometimes the type comes from the **surrounding context**, not the value.
```ts
const nums = [1, 2, 3];
nums.map((n) => n * 2);           // n: number. Inferred from `nums`' element type.

window.addEventListener("click", (event) => {
  event.clientX;                  // event: MouseEvent. Inferred from "click"
});

type Handler = (name: string) => void;
const h: Handler = (name) => console.log(name.length);   // name: string, from the Handler type
```
⚠️ **No context = no inference:**
```ts
const f = (x) => x * 2;           // ❌ Parameter 'x' implicitly has an 'any' type (under noImplicitAny)
```

---

### 4.4 Inference for Return Types
```ts
function add(a: number, b: number) {
  return a + b;                   // return type inferred: number
}

function pick(flag: boolean) {
  return flag ? "yes" : 0;        // inferred: "yes" | 0
}
```
💡 **Best practice:** annotate return types on **exported / public** functions. Inference is great, but an explicit return type:
1. Documents the contract.
2. Catches mistakes *inside* the function (e.g. a branch returning the wrong thing).
3. Prevents the contract from silently changing when the body changes.
4. Speeds up checking in large codebases.
```ts
function getAge(): number {
  return "25";                    // ❌ caught because we declared the contract
}
```

---

### 4.5 Declared Type vs Narrowed Type
Inference and **control-flow analysis** work together. A variable has a **declared type** but TS tracks a **narrower type** as code flows.
```ts
let x: string | number = "hello";   // declared: string | number
x.toUpperCase();                    // ✅ assignment narrowed it to string

x = 42;
x.toFixed(2);                       // ✅ narrowed to number

function process(v: string | null) {
  if (v === null) return;
  v.toUpperCase();                  // ✅ narrowed to string after the guard
}
```
🔬 Narrowing can be lost inside callbacks that run *later*, because a `let` variable might be reassigned in between:
```ts
let value: string | null = getValue();
if (value !== null) {
  setTimeout(() => value.length, 0);
  // TS 5.4+: ✅ narrowing is preserved, because `value` is never reassigned after this point
  // Older TS, or if `value` is reassigned later: ❌ 'value' is possibly 'null'. Use `const` to be safe.
}
```

---

### 4.6 Generic Inference
```ts
function first<T>(items: T[]): T | undefined {
  return items[0];
}

first([1, 2, 3]);          // T inferred as number → number | undefined
first(["a", "b"]);         // T inferred as string
first([]);                 // T inferred as never → never | undefined → undefined
```
TS infers `T` from the arguments. You rarely need `first<number>(...)`.

---

### 4.7 When to Annotate, When to Infer
| Situation | Do this |
|---|---|
| `const x = 5` | Infer. Annotation adds noise. |
| Function **parameters** | **Annotate** (no context to infer from) |
| Exported function **return types** | **Annotate** (stable contract) |
| Empty array / object (`[]`, `{}`) | **Annotate** (nothing to infer from) |
| Variable declared without a value | **Annotate** |
| Object that must match a wider type | Annotate or use `satisfies` |
| Callbacks passed to typed functions | Infer (contextual typing) |
| Constants meant to be literal | `as const` |

> 🎤 "Don't annotate everything and don't rely on inference everywhere. Annotate at boundaries (parameters, public returns) and let inference handle the interior."

---

### 4.8 🎯 Interview Corner
- **Q: What is type inference?**
  **A:** TypeScript's ability to deduce types from values and context without explicit annotations: from initializers, return statements, and contextual positions like callback parameters. It's why most TS code reads like JS but is still fully checked.
- **Follow-up: After `let count = 0`, what happens if you write `count = "five"`?**
  **A:** Compile-time error: `Type 'string' is not assignable to type 'number'`. `let count = 0` infers `number`; the variable's declared type is fixed from then on. (At runtime, plain JS would allow it.)
- **Follow-up: What's the difference between `const x = "a"` and `let x = "a"`?**
  **A:** `const` keeps the literal type `"a"`; `let` widens to `string`.
- **Follow-up: What's inferred for `const x = [1, "a"]`?** `(string | number)[]`: a union array, not a tuple.
- **🏢 Follow-up: Why annotate return types of exported functions?** Contract stability, better error locality, and faster/more stable type checking (and `isolatedDeclarations` in newer TS requires it for fast `.d.ts` emit).
- **🏢 Follow-up: Is inference bidirectional?** Largely flows from value → type, but **contextual typing** flows from the expected type → the expression (e.g. callback parameters). TS combines both.

---

## 5. 🏷️ Type Aliases

### 5.1 What Is a Type Alias?
A **type alias** gives a **name** to any type using the `type` keyword.
```ts
type UserId = string;
type Point = { x: number; y: number };
```
🧒 It's a **sticky label**. You're not creating a new kind of thing, just a reusable nickname.

---

### 5.2 What You Can Name

#### 5.2.1 Primitives and unions
```ts
type ID = string | number;
type Status = "pending" | "paid" | "failed";
type Nullable<T> = T | null;
```

#### 5.2.2 Object shapes
```ts
type User = {
  readonly id: number;
  name: string;
  email?: string;          // optional property
};
```

#### 5.2.3 Function types
```ts
type Handler = (event: MouseEvent) => void;
type Comparator<T> = (a: T, b: T) => number;
```

#### 5.2.4 Tuples
```ts
type Coordinates = [lat: number, lng: number];
```

#### 5.2.5 Generics (type-level functions)
```ts
type Box<T> = { value: T };
type ApiResponse<T> = { success: boolean; data: T; error?: string };
type WithDefault<T = string> = { value: T };   // default type parameter

const r: ApiResponse<User[]> = { success: true, data: [] };
```

#### 5.2.6 Recursive types
```ts
type Json =
  | string | number | boolean | null
  | Json[]
  | { [key: string]: Json };

type Tree<T> = { value: T; children: Tree<T>[] };
```

#### 5.2.7 Type-level programming (a taste)
```ts
// Mapped type: transform every property
type ReadonlyAll<T> = { readonly [K in keyof T]: T[K] };

// Conditional type: if/else for types
type IsString<T> = T extends string ? true : false;
type A = IsString<"hi">;   // true
type B = IsString<42>;     // false

// Template literal types: build string types
type EventName = `on${Capitalize<"click" | "hover">}`;   // "onClick" | "onHover"
```
These only work with `type`, not `interface` (see 6.6.3).

---

### 5.3 ⚠️ Aliases Are Transparent: They Don't Create New Types
```ts
type UserId = string;
type OrderId = string;

function getUser(id: UserId) {}
const orderId: OrderId = "o-123";
getUser(orderId);        // ✅ compiles! UserId and OrderId are both just `string`
```
An alias is just another **name** for the same type. If you need distinct, non-interchangeable IDs, you need **branding** (see 7.6).

---

### 5.4 Composition: Build Big Types from Small Ones
```ts
type Address = { street: string; city: string };
type Timestamps = { createdAt: Date; updatedAt: Date };

type Customer = {
  name: string;
  address: Address;                 // nesting
} & Timestamps;                     // intersection: "has everything from both"

type CreateCustomer = Omit<Customer, "createdAt" | "updatedAt">;   // derive from existing
type UpdateCustomer = Partial<CreateCustomer>;
```
💡 **Derive types, don't duplicate them.** If `CreateCustomer` is copy-pasted from `Customer`, the two will drift apart.

---

### 5.5 Naming Conventions
- **PascalCase:** `User`, `PaymentStatus`.
- Describe **meaning**, not shape: `CreateUserInput`, `ApiResponse<T>`, `ButtonProps`.
- Common suffixes: `Props`, `Input`, `Request`, `Response`, `Options`, `State`, `Action`.
- ❌ Avoid vague names: `Data`, `Info`, `Thing`, `Stuff`, `X`.
- Don't prefix with `I` (`IUser`); it's a C#/Java habit that most TS style guides discourage.

---

### 5.6 Aliases vs Inline Types: When to Extract
```ts
// ❌ repeated inline shape
function create(user: { name: string; email: string }) {}
function update(user: { name: string; email: string }) {}

// ✅ extracted once
type UserInput = { name: string; email: string };
function create(user: UserInput) {}
function update(user: UserInput) {}
```
Extract when a shape is **used more than once** or when a name makes the code **self-documenting**.

---

### 5.7 🎯 Interview Corner
- **Q: What are type aliases and how do you use them?**
  **A:** `type Name = <any type>` creates a named reference to a type: object shapes, unions, intersections, tuples, function signatures, generics, mapped/conditional types. They improve reuse and readability, and they're fully erased at runtime.
- **Follow-up: Does `type UserId = string` create a new type?**
  **A:** No. It's an alias, fully interchangeable with `string`. For distinct IDs use branded types (`string & { __brand: "UserId" }`).
- **Follow-up: Can you extend a type alias?**
  **A:** Not with `extends` the way interfaces do, but you compose with intersections (`&`) or derive with utility types (`Omit`, `Pick`...).
- **Follow-up: Can type aliases be recursive?**
  **A:** Yes (since TS 3.7 for object/array/union recursion), as in the `Json` type above.
- **🏢 Follow-up: Can you reopen a type alias like an interface?** No. Aliases don't merge; a duplicate name is an error.

---

## 6. 📐 Interfaces (and `interface` vs `type`)

### 6.1 Interface Basics
An **interface** describes the **shape of an object**: what properties and methods it must have.
```ts
interface User {
  readonly id: number;        // cannot be reassigned
  name: string;
  email?: string;             // optional
  greet(): string;            // a method
}

const user: User = {
  id: 1,
  name: "Elvis",
  greet() { return `Hi, ${this.name}`; },
};
```

#### 6.1.1 Callable and constructable interfaces
```ts
interface Formatter {
  (value: number): string;               // call signature: the thing is a function
}
const fmt: Formatter = (n) => n.toFixed(2);

interface Constructor<T> {
  new (...args: any[]): T;               // construct signature
}
```

#### 6.1.2 Index signatures
```ts
interface Dictionary {
  [key: string]: number;
}
```

#### 6.1.3 🏢 Method syntax vs property syntax (a subtle difference)
```ts
interface A { handle(e: Animal): void }          // method syntax: parameters are BIVARIANT (looser)
interface B { handle: (e: Animal) => void }      // property syntax: CONTRAVARIANT under strictFunctionTypes (stricter)
```
Under `strictFunctionTypes`, a function expecting `Dog` is **not** safely assignable where a function expecting `Animal` is needed, but TS still allows it for *method-syntax* declarations (to keep common patterns like DOM/`Array` working). So `B` is stricter and safer than `A`.

---

### 6.2 Extending Interfaces
```ts
interface Person { name: string }
interface Employee extends Person { employeeId: number }
interface Manager extends Employee, Auditable { reports: Employee[] }   // multiple inheritance of shapes

const e: Employee = { name: "Elvis", employeeId: 123 };
```
An interface can also extend an object **type alias**, and even a **class**.

---

### 6.3 Declaration Merging (interfaces' signature trick)
Two interfaces with the **same name** in the same scope **merge** into one:
```ts
interface Window { appVersion: string }
interface Window { debug: boolean }
// Window now has BOTH appVersion and debug
```
This is how you **augment library or global types**:
```ts
declare global {
  interface Window { analytics: Analytics }
}

declare module "express-serve-static-core" {
  interface Request { user?: AuthUser }     // add `req.user` for your auth middleware
}
```
⚠️ **Downside:** accidental merging. Declare `interface User` in two files in the same scope and you silently get a combined type rather than an error. Type aliases error instead ("Duplicate identifier").

---

### 6.4 `implements`: Classes Promising to Match
```ts
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}
  makeSound() { console.log("Woof"); }
}
```
- `implements` only **checks** the class; it doesn't change it. It's erased at runtime.
- A class can implement **several** interfaces (`class A implements B, C`).
- A class can implement an object-type **alias** too (not a union).

---

### 6.5 ⭐ `interface` vs `type`: The Comparison
| Feature | `interface` | `type` |
|---|---|---|
| Object shapes | ✅ | ✅ |
| Unions (`A \| B`) | ❌ | ✅ |
| Tuples | ❌ (awkward) | ✅ |
| Primitives / literals alias | ❌ | ✅ |
| Mapped / conditional / template-literal types | ❌ | ✅ |
| Extending | `extends` | `&` (intersection) |
| **Declaration merging** | ✅ | ❌ |
| Class `implements` | ✅ | ✅ (object types only) |
| Implicit index signature compatibility | ❌ | ✅ |
| Same-named conflict | Merges | Error |
| Error messages / hover | Shows the **name** | Often expands the full structure |
| Typical extension-conflict behavior | **Error** at the `extends` | Silent `never` property |

---

### 6.6 The Deep Differences (the ones that matter in interviews)

#### 6.6.1 `extends` reports conflicts; `&` hides them
```ts
interface A { x: number }
interface B extends A { x: string }
// ❌ Interface 'B' incorrectly extends interface 'A'. Types of property 'x' are incompatible.

type A2 = { x: number };
type B2 = A2 & { x: string };
// ✅ no error! But B2["x"] is `number & string` = never → no real object can satisfy B2
```
The interface catches the mistake early; the intersection defers it to the moment you try to use it.

#### 6.6.2 Implicit index signatures
```ts
interface PointI { x: number; y: number }
type PointT = { x: number; y: number };

declare const pi: PointI;
declare const pt: PointT;

const r1: Record<string, number> = pi;   // ❌ Index signature for type 'string' is missing in type 'PointI'
const r2: Record<string, number> = pt;   // ✅
```
Type aliases of object literals get an implicit index signature; interfaces don't (because they might be merged/extended later).

#### 6.6.3 Only `type` can express these
```ts
type Result = Success | Failure;             // unions
type Pair = [string, number];                // tuples
type Keys = keyof User;                      // computed types
type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] };   // mapped + template
```

#### 6.6.4 Performance (🏢)
For big object hierarchies, `interface X extends Y` is cached by name and relationship, while intersections (`&`) are re-computed and can slow down the checker in very large codebases. This is why the TypeScript wiki suggests preferring interface `extends` for **object** hierarchies. For ordinary apps, it doesn't matter.

---

### 6.7 Which One Should You Use?
- The official handbook's guidance: *"Use `interface` until you need features from `type`."*
- Pragmatic rule used by many teams:
  - 🧱 **`interface`**: public object contracts, class contracts, anything you might **extend or augment** (libraries, global augmentation).
  - 🧬 **`type`**: unions, intersections, tuples, function types, mapped/conditional types, and "derived" types (`Pick`, `Omit`, `ReturnType<...>`).
- ✅ **The best rule is consistency within a project.** Pick one default, document it, and enforce it with a lint rule (`@typescript-eslint/consistent-type-definitions`).

> 🎤 "For plain object shapes they're nearly interchangeable. I choose `interface` when I want extension or declaration merging, and `type` when I need unions, tuples, mapped or conditional types, or utility-type compositions."

---

### 6.8 🎯 Interview Corner
- **Q: What are the differences between `interface` and `type`?**
  **A:** Both describe object shapes. Interfaces support `extends` and **declaration merging**, and are cached for performance. Types can represent **unions, tuples, primitives, mapped and conditional types**, compose with `&`, and can't be re-opened. Interfaces report incompatible `extends` as errors; intersections silently produce `never` properties. Aliases get implicit index signatures; interfaces don't.
- **Follow-up: When does declaration merging help?** Augmenting third-party or global types: `Window`, Express's `Request`, a UI library's theme interface.
- **Follow-up: Can a class implement a type alias?** Yes, if it's an object type (not a union).
- **🏢 Follow-up: Why can't I assign my interface to `Record<string, unknown>`?** Interfaces lack an implicit index signature (6.6.2); declare it as a `type` or add an explicit index signature.
- **🏢 Follow-up: Method vs property syntax in an interface?** Methods are bivariant; function-typed properties are contravariant under `strictFunctionTypes`, so they're stricter (6.1.3).

---

## 7. 🦆 Structural vs Nominal Typing

### 7.1 The Two Philosophies

#### 7.1.1 Definitions
- **Nominal typing:** two types are compatible only if they have the **same declared name or identity** (or an explicit inheritance relationship). Used by Java, C#, Swift, Rust.
- **Structural typing:** two types are compatible if they have the **same shape** (the same members with compatible types), regardless of names. Used by **TypeScript**, Go interfaces, OCaml.

🧠 **Analogy: a job application.**
- **Nominal** = "Are you a *Certified Chef*? Show me your badge." (identity matters)
- **Structural** = "Can you chop, sauté and plate? Great, you're hired." (capability matters)

#### 7.1.2 Why TypeScript chose structural
JavaScript is built on **duck typing** ("if it walks like a duck and quacks like a duck..."). Objects are created as anonymous literals, passed around by shape, and parsed from JSON. A nominal system would force classes and explicit `implements` everywhere. Structural typing lets TS model *existing* JavaScript code as it is.

---

### 7.2 Structural Typing in Action
```ts
interface Named { name: string }

const person = { name: "Elvis", age: 25, city: "Kigali" };
const n: Named = person;     // ✅ person has a `name: string`, which is all Named needs
```
```ts
class Cat   { name = "Tom"; meow() { return "meow"; } }
class Robot { name = "R2";  meow() { return "beep"; } }

const c: Cat = new Robot();  // ✅ same shape → compatible, even though Robot isn't a Cat
```
```ts
interface Customer { id: number }
interface Product  { id: number }
const cu: Customer = { id: 1 };
const pr: Product = cu;      // ✅ different names, same shape
```
**The rule:** `S` is assignable to `T` if `S` has **at least** everything `T` requires. Extra members on `S` are fine (that's **width subtyping**).

---

### 7.3 The Consequences

#### 7.3.1 👍 The upsides
- **Flexible and decoupled.** You don't have to import an interface just to satisfy it (like Go).
- **Easy testing and mocking.** A tiny stub with just the methods you need works:
  ```ts
  type Mailer = { send(to: string, body: string): Promise<void> };
  const fakeMailer: Mailer = { send: async () => {} };   // no class, no framework
  ```
- **Fits JSON and object literals**, which is the dominant data style in JS.
- **Gradual adoption:** existing JS objects usually "just fit".

#### 7.3.2 👎 The downsides
**Accidental compatibility (the classic bug):**
```ts
type UserId  = string;
type OrderId = string;

function deleteUser(id: UserId) {}
const orderId: OrderId = "ord_123";
deleteUser(orderId);          // ✅ compiles, 💥 deletes the wrong thing in production
```
**Unit confusion:**
```ts
type Meters = number;
type Feet = number;
const altitude: Feet = 30000;
const m: Meters = altitude;    // ✅ compiles. (This is how real spacecraft get lost.)
```
**Structural subtyping is unsound at a few edges:** `Object.keys(obj)` returns `string[]` rather than `(keyof T)[]` because `obj` might have *extra* properties (13.2).

---

### 7.4 Excess Property Checks: The Exception to "Extra is Fine"
If extras are always fine, why does this error?
```ts
interface Point { x: number; y: number }

const p: Point = { x: 1, y: 2, z: 3 };
// ❌ Object literal may only specify known properties, and 'z' does not exist in type 'Point'
```
Because TS applies an **extra check to fresh object literals**: an object literal written directly in a place where a type is expected. Extra properties there are probably typos (`colour` vs `color`).
```ts
const temp = { x: 1, y: 2, z: 3 };
const p2: Point = temp;                  // ✅ not "fresh" → only structural check applies

const p3 = { x: 1, y: 2, z: 3 } as Point;   // ✅ assertions skip the check too (see 10.4)

const p4: Point = { ...temp };           // ✅ spreads aren't checked for excess keys
```
> 🎤 "Excess property checking is a lint-like safeguard on fresh object literals; the underlying relation is still structural."

---

### 7.5 Where TypeScript Behaves *Nominally*
Structural is the default, but some features introduce nominal-like behavior:

**1. Classes with `private` / `protected` / `#private` members**
```ts
class A { private secret = 1; }
class B { private secret = 1; }

const a: A = new B();
// ❌ Types have separate declarations of a private property 'secret'
```
Private members are tied to the **declaration site**, so identical-looking classes become incompatible.

**2. Enums**
```ts
enum Color { Red, Green }
enum Fruit { Apple, Banana }

let c: Color = Fruit.Apple;   // ❌ different enum types, even though both are numeric
```

**3. `unique symbol` and branded types** (see below)

**4. `instanceof` and `class`** are *runtime* nominal checks (prototype chain), distinct from the compile-time structural checks.

---

### 7.6 Simulating Nominal Types: Branding
**Branding** attaches a phantom marker to a type so structurally-identical types become incompatible.
```ts
type Brand<T, B extends string> = T & { readonly __brand: B };

type UserId  = Brand<string, "UserId">;
type OrderId = Brand<string, "OrderId">;

// One controlled place where the "lie" is allowed: a validating constructor
function toUserId(raw: string): UserId {
  if (!raw.startsWith("usr_")) throw new Error("Invalid user id");
  return raw as UserId;
}
function toOrderId(raw: string): OrderId {
  if (!raw.startsWith("ord_")) throw new Error("Invalid order id");
  return raw as OrderId;
}

function deleteUser(id: UserId) {}

const uid = toUserId("usr_1");
const oid = toOrderId("ord_1");

deleteUser(uid);    // ✅
deleteUser(oid);    // ❌ Argument of type 'OrderId' is not assignable to parameter of type 'UserId'
deleteUser("usr_1");// ❌ a raw string must go through the constructor
```
- 🔬 The `__brand` property **doesn't exist at runtime**: it's zero-cost. At runtime these are plain strings.
- A `unique symbol` variant keeps the marker out of autocomplete:
  ```ts
  declare const brand: unique symbol;
  type Brand2<T, B> = T & { readonly [brand]: B };
  ```
- Schema libraries support it directly (e.g. Zod's `.brand<"UserId">()`).

---

### 7.7 How Structural Typing Shapes the Whole Type System (summary)
| Area | Effect |
|---|---|
| Assignability | By members, not names |
| Subtyping | "More properties" = subtype (width subtyping) |
| Interfaces vs classes vs literals | All interchangeable if shapes match |
| Testing | Trivial mocks |
| Narrowing (`in`, discriminated unions) | Based on which properties exist |
| Errors | "Property X is missing in type Y" instead of "not a Y" |
| Safety gaps | Accidental compatibility, `Object.keys`, excess-property special case |
| Nominal needs | Brands, private members, `unique symbol` |

---

### 7.8 🎯 Interview Corner
- **Q: What are nominal and structural types, and how do they affect TS?**
  **A:** Nominal systems compare types by declared name/identity; structural systems compare by shape. TypeScript is structural: a value is assignable to a type if it has at least the required members, regardless of what it's called. That makes TS flexible and great for modeling JS (duck typing, object literals, easy mocks), but it permits accidental compatibility, which we fix with branded types, private members or `unique symbol` when we need nominal behavior.
- **Follow-up: Are TS classes nominal?**
  **A:** Not by default; two classes with the same public shape are interchangeable. Adding `private`/`protected` members makes them effectively nominal.
- **Follow-up: How do you prevent mixing `UserId` and `OrderId`?**
  **A:** Branded types with a validating constructor (7.6).
- **Follow-up: Why doesn't `instanceof` work with interfaces?**
  **A:** Interfaces are erased; `instanceof` is a runtime prototype check. Use a type guard (`"swim" in x`) or a discriminant property instead.
- **🏢 Follow-up: Why does excess property checking exist if typing is structural?**
  **A:** It's a heuristic for fresh object literals, where extra keys are most likely typos. It deliberately doesn't apply once the object is stored in a variable.

---

## 8. ⚡ Functions & Optional Parameters

### 8.1 Typing a Function

#### 8.1.1 Parameters and return types
```ts
function add(a: number, b: number): number {
  return a + b;
}

add(1, 2);        // ✅
add(1);           // ❌ Expected 2 arguments, but got 1
add(1, 2, 3);     // ❌ Expected 2 arguments, but got 3
add(1, "2");      // ❌ string isn't assignable to number
```
🔬 TypeScript checks the **argument count** too; JavaScript silently ignores extras and fills missing ones with `undefined`.

#### 8.1.2 Function types and call signatures
```ts
type MathOp = (a: number, b: number) => number;
const subtract: MathOp = (a, b) => a - b;     // a, b inferred (contextual typing)

interface Comparator<T> { (a: T, b: T): number }   // call signature form
```

#### 8.1.3 Callbacks
```ts
function processUser(name: string, callback: (name: string) => void): void {
  callback(name);
}
processUser("Elvis", (n) => console.log(n.toUpperCase()));
```
🔬 A callback may declare **fewer** parameters than the type provides (it can ignore the rest), but never more:
```ts
[10, 20].forEach((value) => console.log(value));     // ✅ ignores index & array
[10, 20].forEach((v, i, arr, extra) => {});          // ❌ too many parameters
```

---

### 8.2 Optional Parameters

#### 8.2.1 The `?` syntax
Add `?` after the parameter name to say "the caller may leave this out".
```ts
function greet(name: string, greeting?: string): string {
  return `${greeting ?? "Hello"}, ${name}!`;
}

greet("Elvis");           // ✅ "Hello, Elvis!"
greet("Elvis", "Howdy");  // ✅ "Howdy, Elvis!"
```
**Inside the function**, `greeting` has type **`string | undefined`**, so you must handle `undefined` (here with `??`).

#### 8.2.2 Rules
- Optional parameters **must come after required ones**:
  ```ts
  function bad(a?: string, b: number) {}
  // ❌ A required parameter cannot follow an optional parameter.
  ```
- You can have **several** optional parameters, but beyond two or three, prefer an **options object**:
  ```ts
  type CreateUserOptions = { admin?: boolean; age?: number; locale?: string };

  function createUser(name: string, options: CreateUserOptions = {}) {
    const { admin = false, locale = "en" } = options;
    // ...
  }
  createUser("Elvis", { locale: "fr" });    // self-documenting, order-independent
  ```

#### 8.2.3 Optional vs default vs rest
| Style | Syntax | Inside the function | Caller sees |
|---|---|---|---|
| Optional | `x?: string` | `string \| undefined` | optional |
| Default | `x = "Hi"` | `string` (never undefined) | optional |
| Rest | `...xs: string[]` | `string[]` | zero or more extras |
```ts
function hello(name: string, greeting = "Hello") {   // type inferred: (name: string, greeting?: string) => string
  return `${greeting}, ${name}`;
}
```
⚠️ **A default value is applied only for `undefined`, not for `null`:**
```ts
function f(x: string | null = "default") { return x; }
f(undefined);   // "default"
f(null);        // null  ← default NOT used
```

---

### 8.3 ⭐ `greeting?: string` vs `greeting: string | undefined`
They look equivalent (and inside the function they are), but they differ for **callers**.

```ts
function a(greeting?: string)            { /* greeting: string | undefined */ }
function b(greeting: string | undefined) { /* greeting: string | undefined */ }

a();            // ✅ may omit the argument
b();            // ❌ Expected 1 arguments, but got 0

a(undefined);   // ✅
b(undefined);   // ✅ you can pass `undefined` explicitly
```
| | `greeting?: string` | `greeting: string \| undefined` |
|---|---|---|
| Caller may **omit** the argument | ✅ | ❌ must pass a value (even `undefined`) |
| Caller may pass `undefined` | ✅ | ✅ |
| Type inside the function | `string \| undefined` | `string \| undefined` |
| Must come last? | **Yes** (can't precede required params) | **No** |
| Communicates | "this is optional, a sensible default exists" | "this is required but can be explicitly empty" |

```ts
function c(first: string | undefined, second: string) {}   // ✅ legal: undefined-able param can precede a required one
function d(first?: string, second: string) {}              // ❌ illegal
```

#### 8.3.1 The same distinction applies to object **properties**
```ts
type A = { name?: string };                // key may be absent
type B = { name: string | undefined };     // key must be present (value may be undefined)

const a1: A = {};                          // ✅
const a2: A = { name: undefined };         // ✅ (unless exactOptionalPropertyTypes, see 9.6)
const b1: B = {};                          // ❌ Property 'name' is missing in type '{}'
const b2: B = { name: undefined };         // ✅
```
This matters at runtime too: `"name" in obj`, `Object.keys(obj)` and `JSON.stringify` all distinguish "missing key" from "key set to undefined" (`JSON.stringify` drops undefined-valued keys).

#### 8.3.2 Which should you use?
- Use **`?`** when the caller can sensibly skip it (most cases).
- Use **`T | undefined`** when you want callers to *consciously decide* (forcing explicitness), or when the param isn't last.

---

### 8.4 Rest Parameters and Tuples (a little deeper)
```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((t, n) => t + n, 0);
}
sum(1, 2, 3);

// Tuple-typed rest params: precise argument lists
function log(level: "info" | "error", ...parts: [string, number?]) {}
```

---

### 8.5 `void` Callbacks Revisited
A parameter typed `() => void` happily accepts functions that return values (see 3.1.3). But a *function declaration* annotated `: void` can't return a value.

---

### 8.6 Function Overloads
Use overloads when the **return type depends on the input type**:
```ts
function parse(input: string): number;       // overload signature 1
function parse(input: number): string;       // overload signature 2
function parse(input: string | number): number | string {   // implementation signature (hidden from callers)
  return typeof input === "string" ? Number(input) : String(input);
}

const a = parse("42");   // number
const b = parse(42);     // string
parse(true);             // ❌ No overload matches this call
```
- The **implementation signature is not callable** from outside.
- TS tries overloads **in order**; put the **most specific first**.
- 💡 Prefer **generics or unions** when the relationship is simple. Reach for overloads only when different inputs truly produce different output types.
```ts
// Often better than overloads: a conditional/generic return type
declare function wrap<T extends string | number>(x: T): T extends string ? string[] : number[];
```

---

### 8.7 The `this` Parameter (brief)
```ts
function handleClick(this: HTMLButtonElement, e: MouseEvent) {
  this.disabled = true;       // `this` is typed
}
```
`this` is a **fake first parameter** that exists only for the type checker (erased at runtime). Turn on `noImplicitThis` (part of `strict`) to catch accidental `this` usage.

---

### 8.8 🎯 Interview Corner
- **Q: How do you define optional parameters?**
  **A:** Add `?` after the name (`greeting?: string`), or give a default value (`greeting = "Hello"`). Optional parameters must follow required ones, and inside the function they have type `T | undefined` (default values remove the `undefined`).
- **Follow-up: `greeting?: string` vs `greeting: string | undefined`?**
  **A:** Inside the function they're the same. For callers, `?` lets you **omit** the argument; `string | undefined` requires you to **pass** a value (which may be `undefined`). Also, `?` params must come last, while `| undefined` params can appear anywhere.
- **Follow-up: Default vs optional?**
  **A:** Defaults supply a value when the arg is `undefined` (not `null`), so inside the function the type has no `undefined`. Optional params leave you to handle `undefined`.
- **Follow-up: What if a function has 6 optional params?**
  **A:** Use a single options object with optional properties and destructured defaults.
- **🏢 Follow-up: Overloads vs union parameters vs generics?**
  **A:** Union param: same behavior for all inputs. Generic: relationship between input and output type. Overloads: genuinely different signatures and return types per call shape. Overloads are the heaviest tool; avoid unless needed.

---

## 9. 🌫️ Optional Properties & Missing Data (`?`, `?.`, `??`)

### 9.1 Optional Properties

#### 9.1.1 What they are
An **optional property** may be **absent** from the object. Mark it with `?`.
```ts
type Address = { street: string; city: string };

type User = {
  id: number;
  name: string;
  email?: string;        // may be missing
  address?: Address;     // may be missing
};

const a: User = { id: 1, name: "Elvis" };                                   // ✅
const b: User = { id: 2, name: "Jane", email: "j@x.com" };                  // ✅
const c: User = { id: 3, name: "Sam", address: { street: "KG 7", city: "Kigali" } };  // ✅
```
- The type of `user.email` is **`string | undefined`**.
- 🧒 Think of a form with optional fields: you can leave them blank, but whoever **reads** the form must handle blanks.
- 🔬 Optional requires `strictNullChecks` to be meaningful: without it, `undefined` quietly belongs to every type anyway.

#### 9.1.2 Optional vs `| null`
```ts
type A = { middleName?: string };           // might be absent → string | undefined
type B = { middleName: string | null };     // always present, but explicitly empty → string | null
```
JSON from APIs often uses `null` for "empty". `?` does **not** include `null`. If the server can send `null`, say so: `string | null` or `string | null | undefined`.

#### 9.1.3 Where optional properties shine
- **Configuration options** (`{ retries?: number }`)
- **PATCH/update payloads** (`Partial<User>`)
- **Optional UI props** (`{ title?: string }`)
- **Progressively built objects** and form state

#### 9.1.4 Making all properties optional or required
```ts
type UpdateUser = Partial<User>;         // every property optional
type FullUser   = Required<User>;        // every property required (removes ?)
type Custom     = { [K in keyof User]-?: User[K] };   // `-?` removes optionality manually
```
⚠️ `Partial` is **shallow**: nested objects aren't made optional.

#### 9.1.5 Combining with `readonly`
```ts
type Config = { readonly id: string; timeout?: number };
```

---

### 9.2 ⭐ Safely Reading `user.address.city` When `address` Is Optional

#### 9.2.1 The problem
```ts
type User = { name: string; address?: Address };

function cityOf(user: User) {
  return user.address.city;
  // ❌ 'user.address' is possibly 'undefined'
}
```
At runtime, `undefined.city` would throw `TypeError: Cannot read properties of undefined (reading 'city')`. TypeScript is stopping you *before* that crash.

#### 9.2.2 The solution ladder (pick by what you want when `address` is missing)

**1️⃣ Optional chaining: "if missing, give me `undefined`"**
```ts
const city = user.address?.city;      // string | undefined ✅ never throws
```

**2️⃣ Optional chaining + nullish coalescing: "if missing, give me a default"**
```ts
const city = user.address?.city ?? "Unknown";    // string ✅
```

**3️⃣ Explicit guard (early return): "if missing, handle it right here"**
```ts
function cityOf(user: User): string {
  if (!user.address) return "Unknown";     // narrow with a guard
  return user.address.city;                // address: Address here ✅
}
```

**4️⃣ Throw if missing: "this must exist, otherwise it's a bug"**
```ts
function requireCity(user: User): string {
  if (!user.address) throw new Error(`User ${user.name} has no address`);
  return user.address.city;
}
```

**5️⃣ Destructuring with a default**
```ts
const { address = { street: "", city: "Unknown" } } = user;
address.city;     // ✅ (default applies for undefined only, not null)
```

**6️⃣ ❌ Non-null assertion (avoid)**
```ts
user.address!.city;     // compiles, but 💥 if address is actually missing
```

**7️⃣ Normalize at the boundary:** convert once so the rest of the code gets a stricter type
```ts
type NormalizedUser = Required<Pick<User, "name" | "address">>;

function normalize(user: User): NormalizedUser {
  return { name: user.name, address: user.address ?? { street: "", city: "Unknown" } };
}
```

#### 9.2.3 Optional chaining deep dive
```ts
user?.address?.city;           // when `user` itself might be null/undefined
user.addresses?.[0]?.city;     // optional element access
user.onSave?.();               // optional call: only calls if the function exists
```
**Short-circuiting:** if the part before `?.` is nullish, the **entire rest of the chain** is skipped:
```ts
const result = a?.b.c.d();     // if `a` is null/undefined, `.b.c.d()` is never evaluated → result is undefined
```
**What `?.` does NOT do:**
- It doesn't catch exceptions (`a?.b()` still throws if `b` exists but isn't a function).
- It only treats `null` and `undefined` as "missing" (not `0`, `""`, `false`).
- It always yields `undefined` (never `null`) when it short-circuits.

**Runtime note:** `?.` and `??` are native in ES2020+. With an older `target`, TypeScript rewrites them to ternaries (`a === null || a === void 0 ? void 0 : a.b`).

---

### 9.3 ⭐ How `?`, `?.` and `??` Relate (three tokens, three jobs)

They share a question mark but live in **different places** and do **different jobs**.

| Token | Where it appears | World | What it means |
|---|---|---|---|
| `prop?: T`, `param?: T` | In a **type or parameter declaration** | 🏗️ compile-time (erased) | "This value **may be absent**" |
| `a?.b`, `a?.[i]`, `a?.()` | In an **expression** (reading) | 🏃 runtime | "If `a` is null/undefined, **stop** and return `undefined`" |
| `a ?? b` | In an **expression** | 🏃 runtime | "If `a` is null/undefined, **use `b`** instead" |

🧠 **Road-trip analogy:**
- `?` = the **warning sign**: "⚠️ road may be missing ahead" (a declaration; changes nothing by itself).
- `?.` = **braking safely**: "if the road is missing, stop, don't drive off the cliff."
- `??` = **the spare route**: "if the road is missing, take this detour."

#### 9.3.1 Two layers, not two alternatives
- `?` is about **what the data can look like** (modeling). It tells the compiler to **force** you to deal with absence.
- `?.` and `??` are about **what you do when it's absent** (handling). They are the tools you use *because* the type told you it might be missing.
```ts
type User = { name: string; nickname?: string };      // ← `?` models possible absence

function label(user: User): string {
  return user.nickname ?? user.name;                  // ← `??` handles it at runtime with a fallback
}

function nicknameLength(user: User): number | undefined {
  return user.nickname?.length;                       // ← `?.` handles it by stopping safely
}
```
They are frequently **combined**:
```ts
const city = user.address?.city ?? "Unknown";
//                 ↑ `?.` stops safely     ↑ `??` supplies the fallback
```

#### 9.3.2 How each one "handles missing data"
| | Declares possibility | Prevents crash | Provides a fallback value |
|---|---|---|---|
| `?` (type) | ✅ | ❌ (it forces *you* to) | ❌ |
| `?.` | ❌ | ✅ | ❌ (result is `undefined`) |
| `??` | ❌ | ✅ (for the value it guards) | ✅ |

---

### 9.4 `??` vs `||` vs `&&` (and when each is right)

#### 9.4.1 Truthiness vs nullishness
- `||` falls back for **any falsy** value: `false`, `0`, `""`, `NaN`, `null`, `undefined`, `0n`.
- `??` falls back **only** for `null` and `undefined`.
```ts
const count = 0;
count || 10;    // 10  ❌ (0 is a valid count, but it's "falsy")
count ?? 10;    // 0   ✅

const name = "";
name || "Guest";   // "Guest"
name ?? "Guest";   // ""

const enabled = false;
enabled || true;   // true ❌ (can't ever be false!)
enabled ?? true;   // false ✅
```
| Value of `a` | `a \|\| "x"` | `a ?? "x"` |
|---|---|---|
| `"hello"` | `"hello"` | `"hello"` |
| `""` | `"x"` | `""` |
| `0` | `"x"` | `0` |
| `false` | `"x"` | `false` |
| `NaN` | `"x"` | `NaN` |
| `null` | `"x"` | `"x"` |
| `undefined` | `"x"` | `"x"` |

#### 9.4.2 Choosing
- ✅ **`??`**: when `0`, `""` or `false` are **legitimate values** (counts, flags, prices, text the user may clear). *This is the right default for "use a fallback if the value is missing."*
- ✅ **`||`**: when empty-ish values should **also** trigger the fallback (e.g. a display name where `""` means "not set").
- ✅ **`?.`**: when you want to **read through** something that may be missing and are fine getting `undefined` back.
- ✅ **`&&`**: for conditional logic, not for safe access. (`a && a.b` returns `0`/`""` when `a` is falsy, not `undefined`.)

#### 9.4.3 Assignment variants and a syntax rule
```ts
config.timeout ??= 5000;      // assign only if currently null/undefined
config.name ||= "Guest";      // assign if falsy
config.visible &&= check();   // assign if truthy

a ?? b || c;                  // ❌ SyntaxError: mixing ?? with || needs parentheses
(a ?? b) || c;                // ✅
```

#### 9.4.4 Decision guide: "which should I use?"
| Situation | Use |
|---|---|
| Describing data that may not exist | `?` (or `\| undefined` / `\| null`) |
| Reading a deep property that may be missing | `?.` |
| Need a default when value is missing | `??` |
| Missing is a **bug** and should fail loudly | Guard + `throw` |
| Empty string/0 should also use a default | `\|\|` |
| You **proved** it exists | Narrow it; avoid `!` |

---

### 9.5 Patterns for Cleaner Optional Data

#### 9.5.1 Avoid "optional soup": use a discriminated union
```ts
// ❌ ambiguous: can data AND error both exist? Neither?
type Response = { data?: User; error?: string; loading?: boolean };

// ✅ each state has exactly the fields it needs
type Response2 =
  | { status: "loading" }
  | { status: "success"; data: User }
  | { status: "error"; error: string };
```

#### 9.5.2 Defaults + options merging (watch out for `undefined` overriding)
```ts
const defaults = { retries: 3, timeout: 1000 };

function request(opts: { retries?: number; timeout?: number } = {}) {
  const merged = { ...defaults, ...opts };       // ⚠️ { retries: undefined } OVERRIDES the default with undefined!
  const safe = { retries: opts.retries ?? defaults.retries, timeout: opts.timeout ?? defaults.timeout };   // ✅
}
```

#### 9.5.3 Normalize at the boundary (see 9.2.2 step 7)
Convert loosely-typed external data into a strict internal type **once**; the rest of your app then deals with required fields only.

---

### 9.6 🏢 `exactOptionalPropertyTypes`
By default, `name?: string` accepts both a missing key **and** an explicit `undefined`. With **`exactOptionalPropertyTypes: true`**, an optional property means *only* "key may be absent":
```ts
type A = { name?: string };

const a: A = {};                    // ✅
const b: A = { name: undefined };   // ❌ with exactOptionalPropertyTypes (must write `name?: string | undefined` to allow it)
```
This lets you model "absent" and "explicitly undefined" as distinct states (useful for PATCH semantics where `undefined` might mean "clear this field").

---

### 9.7 🎯 Interview Corner
- **Q: What are optional properties?**
  **A:** Properties marked `?` that may be absent from an object. Their type is `T | undefined`, so consumers must handle absence. They're ideal for config options, update payloads and optional UI props.
- **Follow-up: How do you safely read `user.address.city` if `address` is optional?**
  **A:** Optional chaining: `user.address?.city` (type `string | undefined`), with a fallback via `??`: `user.address?.city ?? "Unknown"`. Or narrow with a guard (`if (!user.address) return ...`). Avoid `!` unless you've proven it's present.
- **Follow-up: How does the optional `?` relate to `??`? When do I use one vs the other?**
  **A:** They operate at different layers. `?` is a **type-level declaration** (compile-time, erased) that says a value may be absent and forces consumers to handle it. `??` is a **runtime operator** that supplies a fallback when a value is `null`/`undefined`. They're not alternatives: use `?` to model data that can be missing, and `?.`/`??` to consume it, often together (`user.address?.city ?? "Unknown"`).
- **Follow-up: `??` vs `||`?**
  **A:** `??` only falls back on `null`/`undefined`; `||` falls back on any falsy value, which wrongly replaces `0`, `""` and `false`. Prefer `??` for defaults.
- **Follow-up: What does `a?.b.c` do if `a` is null?**
  **A:** Short-circuits the whole chain and returns `undefined`; `.b.c` is never evaluated.
- **Follow-up: `{ x?: string }` vs `{ x: string | undefined }`?**
  **A:** The first allows the key to be absent; the second requires the key (value may be `undefined`).
- **🏢 Follow-up: How would you distinguish "field not provided" from "field explicitly cleared" in a PATCH API?**
  **A:** Use `exactOptionalPropertyTypes` plus `null` for "clear" (and absence for "unchanged"), or a discriminated union; never rely on `undefined` alone since JSON drops it.

---

## 10. 🙏 Type Assertions

### 10.1 What Is a Type Assertion?
A **type assertion** tells the compiler: *"I know more about this value's type than you do. Treat it as `T`."*
```ts
const value: unknown = "hello";
const text = value as string;       // "trust me, it's a string"
text.toUpperCase();                 // ✅ compiles
```
🧠 **Analogy:** putting a sticky note over a package's label that says "Contents: books". The label (type) changes; the package (value) doesn't. If it's actually a toaster, you'll find out when you open it (at runtime).

> ⚠️ **A type assertion is NOT a type conversion.** It has **zero runtime effect** and is fully erased. It changes only what TypeScript *believes*.
```ts
const n = "123" as unknown as number;   // TS: number. Runtime: still the string "123" 💥
const real = Number("123");             // ✅ actual conversion
```

---

### 10.2 Syntax Forms
```ts
const a = value as string;           // ✅ standard `as` syntax
const b = <string>value;             // angle-bracket syntax (not allowed in .tsx files because it clashes with JSX)

const el = document.getElementById("email") as HTMLInputElement;   // typical DOM use

const colors = ["red", "green"] as const;   // const assertion → readonly ["red", "green"]
const node = document.querySelector("#app")!;   // non-null assertion → removes null | undefined
```

---

### 10.3 The Rules: When TypeScript Allows an Assertion
TS lets you assert from type `S` to `T` only if the types **sufficiently overlap**: if `S` is assignable to `T` **or** `T` is assignable to `S`.
```ts
const animal: Animal = getAnimal();
const dog = animal as Dog;          // ✅ Dog is assignable to Animal (downcast)

const x = "hi" as number;
// ❌ Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other

const y = "hi" as unknown as number;   // ✅ the "double assertion" escape hatch (⚠️ red flag: you're overriding the compiler completely)
```
🧠 Going through `unknown` (or `any`) first launders the type. Use it only when you can justify it (e.g. a test double).

---

#### 10.3.1 What assertions can and can't do
| Can | Can't |
|---|---|
| Narrow a wide type (`Animal` → `Dog`) | Convert values at runtime |
| Widen a type (`string` → `string \| number`) | Make unrelated types compatible (without the double hop) |
| Pick a more specific type than TS inferred (`Element` → `HTMLInputElement`) | Add missing properties |

---

### 10.4 ⭐ `let x: T = value` vs `value as T`
```ts
type User = { name: string; age: number };

const a: User = { name: "Elvis" };
// ❌ Property 'age' is missing in type '{ name: string; }' but required in type 'User'

const b = { name: "Elvis" } as User;
// ✅ NO ERROR. 🐛 b.age is typed `number` but is actually `undefined` at runtime

const c: User = { name: "Elvis", age: 25, admin: true };
// ❌ Object literal may only specify known properties, and 'admin' does not exist in type 'User'

const d = { name: "Elvis", age: 25, admin: true } as User;
// ✅ no excess property check either
```
| | `const x: T = value` (**annotation**) | `const x = value as T` (**assertion**) |
|---|---|---|
| What it does | **Checks** `value` is assignable to `T` | **Overrides** the type to `T` |
| Missing required properties | ❌ error | ✅ allowed (a lie) |
| Excess property check on literals | ✅ | ❌ skipped |
| Can "downcast" to a more specific type | ❌ (value must already fit) | ✅ |
| Safety | **High**: compiler verifies | **Low**: you vouch |
| Mental model | "This **is** a `T`; prove it" | "Treat this **as** a `T`; I promise" |

```ts
// Narrowing difference
const m1: string | number = "hi";              // declared type stays string | number, but assignment narrows to string here
const m2 = "hi" as string | number;            // stays string | number
```
> 🎤 "An annotation asks the compiler to *verify*; an assertion tells it to *trust*. Prefer annotation whenever the value genuinely fits."

#### 10.4.1 The third option: `satisfies` (TS 4.9+)
`satisfies` **validates** against a type but **keeps the precise inferred type**:
```ts
type Colors = Record<string, string | number[]>;

const annotated: Colors = { red: [255, 0, 0], green: "#0f0" };
annotated.red.map((n) => n);      // ❌ 'annotated.red' is `string | number[]` (widened by the annotation)

const palette = { red: [255, 0, 0], green: "#0f0" } satisfies Colors;
palette.red.map((n) => n * 2);    // ✅ still number[]
palette.green.toUpperCase();      // ✅ still string
const bad = { red: true } satisfies Colors;   // ❌ still validated!
```
| Goal | Use |
|---|---|
| Verify and **widen** to the declared type | Annotation (`: T`) |
| Verify and **keep** the precise type | `satisfies T` |
| **Override** the compiler (you know better) | `as T` |

---

### 10.5 Other Assertion-Like Features
**Non-null assertion `!`:** removes `null`/`undefined` from the type.
```ts
const input = document.querySelector("#name")!;   // type: Element (no null)
```
Equivalent to `as NonNullable<typeof input>`. If wrong → runtime crash. Prefer a check:
```ts
const input = document.querySelector("#name");
if (!input) throw new Error("#name missing");
```

**`as const`:** freezes literal types and makes things `readonly`.
```ts
const config = { mode: "dark", retries: 3 } as const;
// { readonly mode: "dark"; readonly retries: 3 }
```

**Definite assignment assertion `!:`** (class properties initialized elsewhere, e.g. by a DI framework):
```ts
class Service {
  name!: string;      // "I promise it's assigned before use"
}
```

---

### 10.6 When to Use Assertions, and When Not To
#### ✅ Legitimate uses
- **DOM queries** where you know the element type: `document.getElementById("email") as HTMLInputElement`.
- **Narrowing event targets:** `(e.target as HTMLInputElement).value`.
- **After your own validation** that TS can't see (e.g. you checked a schema in another function).
- **`as const`** for literal inference.
- **Test doubles / partial mocks** (`{ ... } as unknown as Service`), kept to tests.
- **Bridging a gap in a library's types**, with a comment explaining why.

#### ❌ Misuses
- **Typing external data:** `await res.json() as User` (a lie; see 1.5).
- **Silencing an error you don't understand:** `as any` is the "make the red go away" button. It hides the bug.
- **"Converting" values:** `"5" as number` (use `Number("5")`).
- **Building objects incrementally and asserting at the end** (`{} as User`) instead of constructing them properly.

**Checklist before writing `as`:** *Can I prove this at runtime? Is there a type guard or schema I can use instead? Will a future change make this lie silently?*

---

### 10.7 Safer Alternatives to Assertions

#### 10.7.1 Type guards (checks that narrow)
```ts
const el = document.getElementById("email");
if (el instanceof HTMLInputElement) {
  el.value;                 // ✅ narrowed by a real runtime check
}
```

#### 10.7.2 Assertion functions: verify at runtime *and* narrow
```ts
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") throw new TypeError("Expected a string");
}

function process(input: unknown) {
  assertIsString(input);
  input.toUpperCase();      // ✅ narrowed to string after the call
}
```
```ts
function assertDefined<T>(value: T, message = "Value is missing"): asserts value is NonNullable<T> {
  if (value === null || value === undefined) throw new Error(message);
}
```

#### 10.7.3 Schema validation
```ts
const user = UserSchema.parse(json);     // real runtime check, then a trusted type (see 1.5.3)
```

#### 10.7.4 A typed helper that centralizes the one unavoidable assertion
```ts
function getEl<T extends HTMLElement>(selector: string, ctor: new () => T): T {
  const el = document.querySelector(selector);
  if (!(el instanceof ctor)) throw new Error(`${selector} is not a ${ctor.name}`);
  return el;                // ✅ no `as` needed
}
const email = getEl("#email", HTMLInputElement);
```

---

### 10.8 🎯 Interview Corner
- **Q: What is a type assertion and when should you use it?**
  **A:** A type assertion (`value as T`) tells TS to treat a value as type `T`. It's compile-time only, with no runtime check or conversion. Use it when you know something the compiler can't (DOM element types, narrowing after your own validation, `as const`), and prefer type guards, assertion functions, or schema validation whenever you can actually verify the claim.
- **Follow-up: What is the difference between `let x: T = value` and `value as T`?**
  **A:** The annotation makes the compiler **verify** `value` fits `T` (missing properties and excess properties are errors, contextual typing applies). The assertion **overrides** the type: it can hide missing properties, skip excess-property checks, and downcast. Annotation = "prove it", assertion = "trust me". For checking *without* widening, use `satisfies`.
- **Follow-up: Does `as` change the value at runtime?** No. It's erased. `"123" as unknown as number` is still a string.
- **Follow-up: Why does `"x" as number` error?** The types don't sufficiently overlap. You'd need `as unknown as number`, which is a red flag.
- **Follow-up: `!` vs `?.`?** `!` asserts non-null (compiler-only, crashes if wrong). `?.` actually checks at runtime and yields `undefined` when nullish.
- **🏢 Follow-up: `as` vs `satisfies` vs annotation?** Annotation widens to the declared type; `satisfies` validates and keeps the narrow inferred type; `as` overrides without validating.

---

## 11. ⚙️ `tsconfig.json`

### 11.1 What Is It and Why Does It Exist?
`tsconfig.json` is the **project configuration file** for TypeScript. Its presence marks the **root of a TypeScript project**, and it tells the compiler (and your editor):
1. **Which files** belong to the project (`include`, `exclude`, `files`)
2. **How strictly** to check them (`strict` and friends)
3. **What environment** you target (`target`, `lib`, `module`)
4. **Where output goes** and in what form (`outDir`, `declaration`, `sourceMap`, `noEmit`)

🧒 It's the **settings panel** for your type checker.

```bash
npx tsc --init      # generate a starter tsconfig.json
npx tsc             # compile using tsconfig.json
npx tsc app.ts      # ⚠️ compiles ONE file and IGNORES tsconfig.json
```
- Editors (VS Code) read the **nearest** `tsconfig.json` upward from the file you're editing, so errors in your editor match the compiler's.
- For JavaScript projects there's the sibling `jsconfig.json` (same idea, `allowJs` on by default).

---

### 11.2 Anatomy of a `tsconfig.json`
```json
{
  "extends": "./tsconfig.base.json",         // inherit settings from another file
  "compilerOptions": {                       // HOW to check and emit
    "target": "ES2022",
    "module": "NodeNext",
    "strict": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"],                   // WHICH files (glob patterns)
  "exclude": ["node_modules", "dist"],       // files to skip when expanding `include`
  "files": ["src/special.ts"],               // explicit list (rarely used)
  "references": [{ "path": "./packages/core" }]   // project references for monorepos
}
```
⚠️ **`exclude` only filters what `include` finds.** A file excluded by pattern **is still compiled if something imports it.**
🔬 With no `include`/`files`, TS takes all `.ts/.tsx/.d.ts` files in the folder and subfolders (minus `node_modules` and `outDir`).

---

### 11.3 The Options You'll Actually Use

#### 11.3.1 Language and environment
| Option | What it does | Typical value |
|---|---|---|
| `target` | Which **JS syntax version** to emit (`ES5`, `ES2020`, `ES2022`, `ESNext`) | `ES2022` |
| `lib` | Which **built-in API typings** exist (`ES2022`, `DOM`, `DOM.Iterable`) | `["ES2022", "DOM"]` for browsers; omit `DOM` for Node |
| `jsx` | How to treat JSX (`react-jsx`, `preserve`, `react`) | `react-jsx` |

⚠️ `target` ≠ polyfills, and `lib` only affects the **type checker's beliefs** (see 1.4.4).

#### 11.3.2 Modules
| Option | What it does |
|---|---|
| `module` | The module system of the **output** (and how TS interprets files): `ESNext`, `CommonJS`, `NodeNext` |
| `moduleResolution` | **How import paths are resolved**: `NodeNext` (real Node rules; relative ESM imports need `.js`), `Bundler` (for Vite/webpack/Next.js: no extensions required), `Node10` (legacy) |
| `baseUrl` / `paths` | Import **aliases** (`"@/*": ["./src/*"]`). ⚠️ type-check only; your bundler/runtime must resolve them too |
| `esModuleInterop` | Makes `import fs from "fs"` work with CommonJS modules (on by default with `NodeNext`) |
| `resolveJsonModule` | Lets you `import data from "./data.json"` with types |
| `isolatedModules` | Ensures each file can be transpiled **alone** (required by esbuild/swc/Babel); forbids things like re-exporting a type without `export type` |
| `verbatimModuleSyntax` | Imports/exports are emitted exactly as written; you must use `import type` for types |

#### 11.3.3 Emit
| Option | What it does |
|---|---|
| `outDir` / `rootDir` | Where compiled JS goes / where sources live |
| `noEmit` | Type-check only (typical when a bundler does the transpiling) |
| `noEmitOnError` | Don't output JS if there are type errors |
| `declaration` | Emit `.d.ts` files (needed when **publishing a library**) |
| `declarationMap`, `sourceMap` | Maps back to `.ts` for go-to-definition and debugging |
| `incremental` | Cache results (`.tsbuildinfo`) for faster rebuilds |

#### 11.3.4 JavaScript support (used during migration)
| Option | What it does |
|---|---|
| `allowJs` | Allow `.js` files in the project |
| `checkJs` | Type-check those `.js` files (using JSDoc and inference) |

#### 11.3.5 Library hygiene and speed
| Option | What it does |
|---|---|
| `skipLibCheck` | Skip type-checking **`.d.ts` files** (faster; hides conflicts between dependencies. Almost everyone turns it on) |
| `types` / `typeRoots` | Which `@types/*` packages are auto-included globally |

---

### 11.4 The `strict` Family
`"strict": true` turns on a bundle of checks. Know what's inside:
| Flag | What it catches |
|---|---|
| `noImplicitAny` | Variables/params that would silently become `any` |
| `strictNullChecks` | Separates `null`/`undefined` from other types (the big one 🐘) |
| `strictFunctionTypes` | Contravariant checking of function parameters (13.4) |
| `strictBindCallApply` | Correct typing for `.bind/.call/.apply` |
| `strictPropertyInitialization` | Class properties must be assigned in the constructor |
| `noImplicitThis` | `this` with an implicit `any` type |
| `useUnknownInCatchVariables` | `catch (e)` is `unknown`, not `any` |
| `alwaysStrict` | Emits `"use strict"` and parses in strict mode |

#### 11.4.1 "Beyond strict" flags worth knowing
| Flag | Effect |
|---|---|
| `noUncheckedIndexedAccess` | `arr[i]` and `obj[key]` become `T \| undefined` (3.4.4) |
| `exactOptionalPropertyTypes` | `x?: T` forbids explicit `undefined` (9.6) |
| `noImplicitOverride` | Requires the `override` keyword when overriding a method |
| `noImplicitReturns` | Every code path must return a value |
| `noFallthroughCasesInSwitch` | Catches missing `break` |
| `noUnusedLocals` / `noUnusedParameters` | Unused code errors |
| `noPropertyAccessFromIndexSignature` | Forces `obj["key"]` for index-signature props |

---

### 11.5 Ready-Made Presets

#### 11.5.1 A Node.js app/service (ESM)
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "outDir": "dist",
    "rootDir": "src",
    "sourceMap": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

#### 11.5.2 A Vite + React app (bundler does the emitting)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["src"]
}
```

#### 11.5.3 A library you publish to npm
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "dist",
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

#### 11.5.4 Next.js
Next.js generates and maintains its own `tsconfig.json` (bundler-style resolution, `noEmit`, `isolatedModules`, `incremental`, its editor plugin, and a `paths` alias like `"@/*": ["./src/*"]`). You mostly tighten `strict` and add flags.

---

### 11.6 Sharing and Splitting Configs

#### 11.6.1 `extends`
```json
// tsconfig.base.json (shared)
{ "compilerOptions": { "strict": true, "skipLibCheck": true } }

// packages/api/tsconfig.json
{ "extends": "../../tsconfig.base.json", "compilerOptions": { "outDir": "dist" }, "include": ["src"] }
```
Community presets exist too: `"extends": "@tsconfig/node22/tsconfig.json"`. Options from the child **override** the parent; `include`/`exclude`/`files` replace rather than merge.

#### 11.6.2 Project references (monorepos, 🏢)
```json
{ "files": [], "references": [{ "path": "./packages/core" }, { "path": "./packages/web" }] }
```
Each referenced project sets `"composite": true`. `tsc -b` then builds them **in dependency order, incrementally**, which is the standard answer to "our type-check takes 8 minutes".

---

### 11.7 Debugging Your Config
```bash
npx tsc --showConfig        # print the final, merged configuration
npx tsc --listFiles         # which files are in the program
npx tsc --explainFiles      # WHY each file is included
npx tsc --traceResolution   # how an import was resolved
```

---

### 11.8 🎯 Interview Corner
- **Q: What is `tsconfig.json` and what are its basic uses?**
  **A:** It's the project's TypeScript configuration. It marks the project root, lists which files to include, sets compiler options (target, module system, strictness), controls emit (output dir, declarations, source maps, or `noEmit` when a bundler transpiles), and can extend shared base configs or reference other projects. Editors read it too, so squiggles match the build.
- **Follow-up: What does `strict` do?** Enables a family of strict checks (`noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`, etc.). Always on for new projects.
- **Follow-up: `target` vs `lib`?** `target` = emitted **syntax**; `lib` = **which APIs the checker knows exist**. Neither polyfills.
- **Follow-up: `module` vs `moduleResolution`?** `module` = output module format; `moduleResolution` = how import specifiers are looked up (`NodeNext` follows Node's rules; `Bundler` follows bundler leniency).
- **Follow-up: Why does `tsc file.ts` ignore my config?** When you pass files on the command line, `tsconfig.json` is ignored.
- **Follow-up: Do `paths` aliases work at runtime?** No, they only affect type resolution. The bundler or runtime must be configured identically.
- **🏢 Follow-up: Why `isolatedModules`?** Single-file transpilers (esbuild, swc, Babel) can't see other files, so TS forbids constructs that need cross-file info (e.g. re-exporting types without `export type`, `const enum` across files).
- **🏢 Follow-up: What does `skipLibCheck` trade away?** Speed vs. detection of type conflicts inside `.d.ts` files of dependencies.

---

## 12. 🚚 Migrating JavaScript to TypeScript

### 12.1 Why Migrations Are Hard (and what's NOT hard)
- ✅ **Not hard:** the syntax. TS is a superset, so your JS already "runs".
- ❌ **Hard:** modeling **years of dynamic patterns**, wiring **build/test/lint tooling**, and **changing team habits**, all while still shipping features.

> 🎤 "The challenge isn't converting files; it's teaching the type system about code that was written without it, incrementally, without freezing the product."

---

### 12.2 The Playbook (incremental, not big-bang)

#### 12.2.1 Step by step
1. **Install and configure**, permissively first:
   ```json
   {
     "compilerOptions": {
       "allowJs": true,
       "checkJs": false,
       "noEmit": true,
       "strict": false,
       "target": "ES2022",
       "module": "ESNext",
       "moduleResolution": "Bundler"
     },
     "include": ["src"]
   }
   ```
2. **Wire the toolchain:** a transpiler (Babel preset-typescript / esbuild / swc / ts-loader), test runner (Vitest, or Jest with ts-jest/swc), ESLint with `typescript-eslint`, and editor support.
3. **Add `tsc --noEmit` to CI** (non-blocking at first, then blocking).
4. **Type-check JS gradually:** add `// @ts-check` to individual files (or flip `checkJs`) and describe types with **JSDoc**.
5. **Convert leaf modules first** (utils, constants, pure functions with no dependencies) → then work upward. Rename `.js` → `.ts`.
6. **Define core domain and API types** in a shared module (`User`, `Order`, `ApiResponse<T>`). These pay off everywhere.
7. **Add types for dependencies:** `@types/*`, or write your own `.d.ts` for untyped ones (see Chapter 20 notes in the earlier guide: `declare module "x"`).
8. **Ratchet strictness one flag at a time:** `noImplicitAny` → `strictNullChecks` (the biggest) → `strictFunctionTypes` → ... → full `strict`. Use per-directory tsconfigs if needed.
9. **Add runtime validation at boundaries** (API responses, storage, env). Types alone won't protect untrusted data (1.5).
10. **Lock in gains:** lint rules banning new `any` and bare `@ts-ignore`; track "type coverage"; fail CI on regressions.

#### 12.2.2 Tip: renames and git history
Do the `.js → .ts` rename as a **separate commit** (`git mv`) before editing so history/blame stay readable (`git log --follow`).

---

### 12.3 The Challenge Catalog
| # | Challenge | Why it happens | Typical fix |
|---|---|---|---|
| 1 | **Implicit `any` flood** when enabling `noImplicitAny` | Untyped params everywhere | Do it per-folder; add parameter types from usage/JSDoc; start with leaves |
| 2 | **`null`/`undefined` everywhere** (`strictNullChecks`) | JS code freely returns/assumes missing values | Guards, `?.`, `??`, early returns, honest `\| undefined` return types. Biggest single effort |
| 3 | **Objects built incrementally** (`const o = {}; o.a = 1; o.b = 2`) | TS wants the final shape upfront | Build in one literal, use `Partial<T>` then validate, or a builder |
| 4 | **Functions returning different types** per input | Dynamic overloading | Unions + narrowing, overloads, or generics |
| 5 | **Dynamic keys** (`obj[key]`) | Keys are `string`, not known keys | `keyof T`, `Record<K,V>`, index signatures, `in` guards |
| 6 | **`this`, prototypes, mixins, monkey-patching** | Pre-class JS patterns | Convert to classes/modules, `this:` parameters, module augmentation |
| 7 | **Untyped third-party libraries** | No built-in types | `@types/*`, own `declare module`, or a typed wrapper |
| 8 | **Globals** (`window.foo`, injected vars) | Not declared | `declare global { interface Window { ... } }` |
| 9 | **CommonJS vs ESM** mismatch | `require`/`module.exports` vs `import/export` | `esModuleInterop`, correct `module`/`moduleResolution`, migrate to `import`; watch default-export interop |
| 10 | **Build & test tooling breaks** | Bundler/Jest don't understand TS or path aliases | Babel/swc/esbuild preset, `ts-jest` or Vitest, mirror `paths` in `moduleNameMapper` |
| 11 | **Test mocks with partial objects** | Mocks don't match full types | Factory helpers, `Partial<T>`, `jest.Mocked<T>`, or a single contained `as unknown as T` |
| 12 | **JSON / API contracts** | Types lie about runtime data | Schema validation (Zod) at boundaries |
| 13 | **Slow type-checking** on huge repos | One giant program | `incremental`, project references, `skipLibCheck`, a faster transpiler for builds |
| 14 | **"Type gymnastics"** | Over-clever generics | Prefer simple, readable types; use utility types |
| 15 | **Team learning curve** | New concepts (generics, narrowing) | Pairing, shared conventions, training, lint rules, small PRs |
| 16 | **Delivery pressure** | Migration doesn't ship features | **Ratchet**: type every file you touch ("boy scout rule"); schedule dedicated blitzes |
| 17 | **Merge conflicts from renames** | Many branches in flight | Rename in isolated commits; migrate modules owned by few teams first |

---

### 12.4 Using Escape Hatches Responsibly
```ts
// ❌ silently ignores any error on the next line, forever
// @ts-ignore
doThing(wrongArgs);

// ✅ ignores ONE expected error, and FAILS when the error disappears (so stale ignores get found)
// @ts-expect-error: legacy API returns string here, tracked in TICKET-123
doThing(wrongArgs);
```
- Prefer **`@ts-expect-error` with a reason** over `@ts-ignore`.
- Treat `any` as **debt**: count it, ratchet it down, forbid new instances with `@typescript-eslint/no-explicit-any` and `ban-ts-comment`.

---

### 12.5 Before / After Examples

#### 12.5.1 Incrementally-built object
```js
// JS
const user = {};
user.name = "Elvis";
user.age = 25;
```
```ts
// TS ❌ Property 'name' does not exist on type '{}'
// TS ✅ build it in one go
const user = { name: "Elvis", age: 25 };
// or, if it genuinely builds up over time:
const draft: Partial<User> = {};
draft.name = "Elvis";
```

#### 12.5.2 Function with variable return types
```js
// JS
function getId(x) { return typeof x === "string" ? x : String(x); }
```
```ts
// TS
function getId(x: string | number): string {
  return typeof x === "string" ? x : String(x);
}
```

#### 12.5.3 Typing JS first with JSDoc and `@ts-check`
```js
// @ts-check

/**
 * @param {number} price
 * @param {number} [taxRate]   optional
 * @returns {number}
 */
function total(price, taxRate = 0.18) {
  return price * (1 + taxRate);
}
```

#### 12.5.4 `require` → `import`
```js
// JS (CommonJS)
const express = require("express");
module.exports = { handler };
```
```ts
// TS (ES modules)
import express from "express";
export { handler };
```

---

### 12.6 Measuring Progress
- **% of files converted** (`.ts` vs `.js`)
- **`any` count / type coverage** (tools such as `type-coverage`)
- **Strict flags enabled** (the "ratchet")
- **Type errors per week** and **runtime errors tied to type issues**
Display them on a dashboard; migrations stall when progress is invisible.

---

### 12.7 🎯 Interview Corner
- **Q: What challenges are associated with migrating an existing JavaScript project to TypeScript?**
  **A:** (1) **Modeling dynamic code:** incrementally built objects, polymorphic returns, dynamic keys, prototype/`this` tricks. (2) **Strictness cost:** `noImplicitAny` and especially `strictNullChecks` surface thousands of issues. (3) **Third-party types** and globals. (4) **Tooling:** bundler, Babel/esbuild, Jest, ESLint, path aliases, CJS/ESM interop. (5) **Boundary safety:** types don't validate API/JSON data. (6) **Team and process:** learning curve, merge conflicts, delivery pressure, and keeping the migration from stalling. The answer is an **incremental** migration: `allowJs`, leaf-first conversion, ratcheting strictness, CI enforcement and runtime validation at boundaries.
- **🏢 Follow-up: How would you migrate a 500k-line codebase?**
  **A:** Don't freeze features. Add TS tooling and a permissive config; make CI run `tsc --noEmit`; convert leaves and shared types first; use `@ts-expect-error` baselines and per-directory strict configs to ratchet; add lint rules against new `any`; track metrics; adopt "type what you touch"; validate at the boundary; and run training/pairing so conventions are consistent.
- **Follow-up: `noImplicitAny` first or `strictNullChecks` first?**
  **A:** Commonly `noImplicitAny` first (mechanical, improves inference), then `strictNullChecks` (hardest, but biggest bug-catcher), done folder by folder. Teams differ, but both are enabled incrementally.
- **Follow-up: What does `allowJs` give you?** Lets JS and TS coexist, so you can convert file by file.
- **Follow-up: `@ts-ignore` vs `@ts-expect-error`?** `@ts-expect-error` fails if the error goes away, so stale suppressions get cleaned up.
- **Follow-up: How do you prevent regression?** CI type-check, lint rules, strict flags enabled per directory, and a count of `any`/ignores that can only go down.