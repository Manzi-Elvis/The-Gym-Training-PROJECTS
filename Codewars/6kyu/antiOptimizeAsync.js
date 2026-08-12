/*
In order to maximize slacking on the job, lately you have been adding
useless and slow code to every function in the company's codebase,
delaying the function's return by as much as possible:

function getUserName(userID) {
    // let's slow things down a bit:
    for (let i = 0; i < 1_000_000_000; i++)
        ; // do nothing 😈
    return USERS.find(user => user.id === userID).name;
}

Your evil plot kicks into gear, and you deploy anti-optimized code
everywhere in your production server. But the higher-ups are
catching on! -- they demand that functions return their result
as quickly as possible, or else you risk being fired.

You wallow in despair, unable to bring your dream of inefficiency
to reality, but finally realize there's a way you can keep
everything woefully inneficient, while still immediately returning
values from functions -- Promises!

So now your task is to write the function antiOptimizeAsync,
which takes a single parameter task (a function), and immediately
returns a Promise that only resolves to the return value of task()
at least 11 seconds (and at most 12 seconds) after antiOptimizeAsync is called.

task will always be an arbitrary function that might run for any duration
between 0 to 10 seconds.
*/

const antiOptimizeAsync = (task) => {
  const taskPromise = Promise.resolve().then(task);
  const delayPromise = new Promise(resolve => {setTimeout(resolve, 11000)})
  return Promise.all([taskPromise, delayPromise]).then(([result]) => result)
}