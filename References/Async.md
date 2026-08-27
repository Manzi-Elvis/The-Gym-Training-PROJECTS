# Async JavaScript — 160 Practice Exercises

Matches the curriculum's 6-level structure. Use as the exercise bank for modules 00–07+ and beyond.

| Level | Focus | Exercises |
|---|---|---:|
| 🟢 1 | Async fundamentals | 25 |
| 🟡 2 | Promises & async/await | 30 |
| 🔵 3 | Concurrency & Event Loop | 30 |
| 🟠 4 | Browser Async APIs | 25 |
| 🔴 5 | Advanced Async JavaScript | 30 |
| 🟣 6 | Production/FAANG-style challenges | 20 |
| **TOTAL** | | **160** |

---

## 🟢 Level 1 — Async Fundamentals (25)

1. Explain the difference between synchronous and asynchronous code with a minimal example.
2. Predict the console output order for a script mixing `console.log`, `setTimeout(fn, 0)`, and more `console.log`.
3. Write a function using `setTimeout` to delay execution by N milliseconds.
4. Implement a simple countdown timer using `setInterval` and `clearInterval`.
5. Explain why JavaScript is described as "single-threaded" and what that implies for async code.
6. Convert a synchronous blocking loop into a non-blocking version using `setTimeout` chunking.
7. Write an error-first callback function (Node-style `(err, data) => {}`).
8. Demonstrate "callback hell" with 3+ nested async operations, then describe why it's problematic.
9. Explain the call stack and trace it through a small recursive function.
10. Write a function `delay(ms)` that logs "done" after ms milliseconds using a callback.
11. Explain the difference between `setTimeout(fn, 0)` and calling `fn()` directly.
12. Predict output order: two `setTimeout` calls with different delays plus synchronous code.
13. Implement a basic pub/sub (event emitter) pattern using callbacks.
14. Explain what "blocking the main thread" means and give a real-world example that causes it.
15. Write a function that simulates an async API call using `setTimeout` and a callback.
16. Explain the difference between concurrency and parallelism in the context of JS.
17. Trace through and explain the output of nested `setTimeout` calls with increasing delays.
18. Implement a retry-once wrapper around a callback-based function that may fail.
19. Explain what happens when an exception is thrown inside a `setTimeout` callback.
20. Write a simple debounce function using `setTimeout` (callback-based, no Promises).
21. Write a simple throttle function using `setTimeout`.
22. Explain the difference between `setInterval` drift and using recursive `setTimeout`.
23. Implement a basic "load resource" simulation with success/failure callback paths.
24. Explain why callbacks alone make error handling hard to compose across multiple async steps.
25. Given a snippet with multiple `setTimeout` calls of the same delay, explain why execution order still depends on scheduling order.

---

## 🟡 Level 2 — Promises & async/await (30)

1. Create a Promise from scratch that resolves after a delay.
2. Create a Promise that rejects and handle it with `.catch()`.
3. Chain three `.then()` calls, each depending on the previous result.
4. Rewrite a callback-based function to return a Promise instead.
5. Use `.finally()` to run cleanup code regardless of success/failure.
6. Explain and demonstrate the difference between `Promise.resolve()` and `new Promise(...)`.
7. Implement `Promise.all` usage to fetch three "resources" in parallel.
8. Implement `Promise.allSettled` usage and explain when you'd prefer it over `Promise.all`.
9. Implement `Promise.race` to timeout a slow operation.
10. Implement `Promise.any` and explain how it differs from `Promise.race`.
11. Convert a `.then()` chain into equivalent `async/await` code.
12. Write an `async` function that awaits two operations sequentially and explain the timing cost vs. running them in parallel.
13. Rewrite the sequential version to run both operations concurrently using `Promise.all` + `await`.
14. Use `try/catch` inside an `async` function to handle a rejected Promise.
15. Explain what happens if you `await` a non-Promise value.
16. Write an `async` function that has to loop over an array and `await` an async call for each item sequentially.
17. Rewrite the above to run all iterations concurrently instead.
18. Explain the pitfall of using `.forEach()` with an `async` callback and why it doesn't wait.
19. Fix a broken `.forEach()` + async example using `for...of` with `await`.
20. Explain what an "unhandled promise rejection" is and how to prevent one.
21. Demonstrate a Promise chain where a `.then()` returns another Promise (chaining/flattening).
22. Explain why returning a value inside `.then()` differs from returning a Promise inside `.then()`.
23. Write a function that wraps `setTimeout` in a Promise (a basic `sleep(ms)` utility).
24. Demonstrate error propagation: an error thrown early in a chain is caught by a later `.catch()`.
25. Explain microtask timing: why does a resolved Promise's `.then()` run before a `setTimeout(fn, 0)`?
26. Implement a `timeout(promise, ms)` helper that rejects if the original Promise takes too long.
27. Explain the difference between throwing inside an `async` function vs. calling `Promise.reject()`.
28. Write an async function that retries a failing Promise-returning call up to N times.
29. Explain what happens to a Promise chain when you forget to `return` inside a `.then()`.
30. Compare readability/error-handling tradeoffs between `.then()` chains and `async/await` on the same example.

---

## 🔵 Level 3 — Concurrency & Event Loop (30)

1. Explain the JS event loop: call stack, task queue (macrotasks), and microtask queue.
2. Predict output order mixing `console.log`, a resolved Promise `.then()`, and `setTimeout(fn, 0)`.
3. Explain the difference between a macrotask and a microtask, with examples of each.
4. Trace a script with nested Promises and `setTimeout` calls and predict full output order.
5. Explain what `queueMicrotask()` does and when you'd use it directly.
6. Explain the Node.js-specific `process.nextTick()` and how it differs from microtasks.
7. Explain `setImmediate()` in Node.js and how it relates to the event loop phases.
8. Demonstrate microtask starvation: an infinite chain of `.then()` calls blocking macrotasks.
9. Explain how `requestAnimationFrame` timing relates to the browser's rendering pipeline vs. the event loop.
10. Compare `setTimeout(fn, 0)` vs `requestAnimationFrame(fn)` for scheduling visual updates.
11. Explain the Node.js event loop phases (timers, pending callbacks, poll, check, close callbacks).
12. Write code demonstrating that multiple `await` points yield control back to the event loop.
13. Explain how the browser's rendering step interacts with microtasks and macrotasks.
14. Predict output for a script combining async/await functions, `.then()` chains, and `setTimeout`.
15. Explain what "starving the event loop" means and how to avoid it in a CPU-heavy synchronous loop.
16. Break a long synchronous computation into chunks using `setTimeout` or `MessageChannel` to keep the UI responsive.
17. Explain how Web Workers relate to concurrency in JS (true parallelism vs. the single-threaded model).
18. Explain race conditions in async JS and construct an example where two async writes conflict.
19. Fix the race condition from the previous exercise using proper sequencing or locking.
20. Explain what happens when you call `await` inside a `for` loop vs. `map()` with async functions.
21. Demonstrate the difference in total execution time between awaiting in sequence vs. `Promise.all`.
22. Explain how errors inside microtasks propagate differently than errors inside macrotasks.
23. Trace through code using `queueMicrotask` nested inside another `queueMicrotask`.
24. Explain how async/await is implemented under the hood in terms of generators and the event loop.
25. Demonstrate a scenario where `setTimeout(fn, 0)` doesn't actually run "immediately" due to queued microtasks.
26. Explain "task starvation" caused by recursive `process.nextTick()` calls in Node.js.
27. Write an example showing UI freeze from a long synchronous task, then fix it using async chunking.
28. Explain how `MessageChannel`/`postMessage` can be used as a macrotask scheduling trick.
29. Compare cooperative scheduling (JS event loop) to preemptive multitasking (OS threads) conceptually.
30. Given a complex snippet mixing all of the above (Promises, `setTimeout`, `queueMicrotask`, sync code), predict the exact console output order.

---

## 🟠 Level 4 — Browser Async APIs (25)

1. Fetch data from an API using `fetch()` and handle the JSON response with `async/await`.
2. Handle a failed `fetch()` request (network error vs. non-2xx HTTP status — explain the difference).
3. Use `AbortController` to cancel an in-flight `fetch()` request.
4. Implement a search-as-you-type feature that cancels the previous `fetch()` on each new keystroke.
5. Compare `fetch()` to the older `XMLHttpRequest` API for making an async GET request.
6. Use the Fetch API's streaming response body (`response.body.getReader()`) to process data as it arrives.
7. Implement an `IntersectionObserver` to lazy-load images as they scroll into view.
8. Implement a `MutationObserver` to react asynchronously to DOM changes.
9. Create a basic Web Worker that offloads a CPU-heavy computation and returns the result via `postMessage`.
10. Explain how communication between the main thread and a Web Worker is inherently asynchronous.
11. Register a basic Service Worker and explain its async lifecycle (install, activate, fetch events).
12. Use the Service Worker `fetch` event to intercept and cache a network request.
13. Read/write a record to `IndexedDB` using its async, event-based API.
14. Wrap the callback-based `IndexedDB` API in Promises for cleaner `async/await` usage.
15. Use `requestIdleCallback` to defer non-urgent work until the browser is idle.
16. Request permission and trigger a browser Notification asynchronously.
17. Use the Geolocation API's `getCurrentPosition`, which is callback-based, and wrap it in a Promise.
18. Open a WebSocket connection and handle its async `open`, `message`, `close`, and `error` events.
19. Implement auto-reconnect logic for a dropped WebSocket connection.
20. Use Server-Sent Events (`EventSource`) to receive a stream of async updates from a server.
21. Use the `BroadcastChannel` API to pass async messages between browser tabs.
22. Explain how `requestAnimationFrame` can be used to build an async animation loop.
23. Use the Clipboard API's async `navigator.clipboard.writeText()` method.
24. Combine `fetch()` with `AbortController` and a timeout to build a "cancel after N seconds" request helper.
25. Explain how the Beacon API (`navigator.sendBeacon`) differs from `fetch()` for async logging on page unload.

---

## 🔴 Level 5 — Advanced Async JavaScript (30)

1. Write an async generator function using `async function*` that yields values over time.
2. Consume an async generator using `for await...of`.
3. Implement `Symbol.asyncIterator` manually on a custom object to make it async-iterable.
4. Build a concurrency-limited promise pool that runs at most N async tasks at a time.
5. Extend the promise pool to preserve result order matching the original input order.
6. Implement retry-with-exponential-backoff for a flaky async operation.
7. Add jitter to the exponential backoff implementation and explain why jitter matters.
8. Use `AbortController` to make a long-running custom async operation (not just `fetch`) cancellable.
9. Implement a cancellable `sleep(ms, signal)` that rejects early if the signal aborts.
10. Build a debounce function for an `async` operation that also cancels the previous in-flight call.
11. Build an async throttle function that limits how often an async operation can run.
12. Implement a simplified version of `Promise.all` from scratch.
13. Implement a simplified version of `Promise.race` from scratch.
14. Implement a simplified version of `Promise.allSettled` from scratch.
15. Implement a simplified version of `Promise.any` from scratch.
16. Explain and demonstrate a custom "thenable" object (an object with a `.then()` method usable with `await`).
17. Build a basic async mutex/lock to prevent overlapping execution of a critical section.
18. Build an async semaphore that allows up to N concurrent holders.
19. Implement request de-duplication: multiple simultaneous calls for the same resource share one in-flight Promise.
20. Implement a memoization wrapper for an async function, including cache invalidation.
21. Diagnose and fix a memory leak caused by an async callback capturing a large closure after a component unmounts.
22. Implement a simple async task queue that processes items one at a time in submission order.
23. Extend the task queue to support pausing, resuming, and cancellation mid-processing.
24. Explain how async/await error handling changes when using `Promise.allSettled` vs. `Promise.all` in a loop.
25. Implement an async pipeline/middleware chain, where each step can be sync or async.
26. Build a rate limiter (e.g., token bucket) for outgoing async requests.
27. Implement backpressure handling in an async producer/consumer setup.
28. Explain and demonstrate the difference between "eager" and "lazy" async generator evaluation.
29. Build a circuit breaker pattern around a flaky async dependency (open/half-open/closed states).
30. Implement an async event emitter where listeners can themselves be async and errors don't crash emission of other listeners.

---

## 🟣 Level 6 — Production/FAANG-style Challenges (20)

1. Design and implement a rate-limited API client that queues requests exceeding the limit.
2. Implement a parallel batch file/URL fetcher with a configurable concurrency cap and per-item error isolation.
3. Build a resilient data-fetching hook/utility with retry, timeout, and cancellation support combined.
4. Design an async job scheduler that supports delayed jobs, retries, and priority ordering.
5. Implement a WebSocket client with automatic reconnect, exponential backoff, and message queuing while disconnected.
6. Build a typeahead/autocomplete component with debounced, cancellable, de-duplicated async search requests.
7. Design a caching layer for async API calls with TTL expiration and stale-while-revalidate behavior.
8. Implement a distributed-style lock simulation using async primitives (no real distributed system required).
9. Build a "fetch with fallback" utility that tries a primary source and falls back to a secondary on failure/timeout.
10. Design an async pipeline for processing a large dataset in batches without blocking the event loop.
11. Implement an upload manager that handles multiple concurrent file uploads with progress tracking and cancellation.
12. Build a polling utility that stops automatically once a condition is met or a max attempt count is reached.
13. Design an async validation system for a form where each field validator may hit the network.
14. Implement graceful shutdown logic for a Node.js service that waits for in-flight async operations to finish.
15. Debug and fix a provided snippet containing a subtle race condition in concurrent async writes to shared state.
16. Optimize a slow sequential-await data-loading function by identifying safe parallelization opportunities.
17. Design an async logging/telemetry pipeline that batches and flushes events without blocking the main flow.
18. Implement idempotent retry logic for a non-idempotent-by-default async payment/write operation.
19. Build a real-time dashboard data layer combining polling, WebSockets, and a unified async state store.
20. Given a production incident description (dropped requests under load), diagnose the async root cause and propose a fix.