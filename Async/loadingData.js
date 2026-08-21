const user = Promise.resolve("User loaded");
const orders = Promise.reject("Orders failed");
const notifications = Promise.resolve("Notifications loaded");


// CASE A: The dashboard should only display if all three requests succeed.
//  If one fails, show an error instead.

Promise.all([user, orders, notifications]).then(display => {
      console.log(display)
}).catch(error => {
      console.error("Dashboard Error:", error);
})

// Case B: The dashboard should display whatever data succeeds,
//  even if one or more requests fail. Also print which requests failed.

Promise.allSettled([user, orders, notifications]).then(results => {
      results.forEach(res => {
            if(res.status === "fulfilled"){
                  console.log("Success:" , res.value);
            }
            else{
                  console.error("Failed:" , res.reason);
            }
      });
});

// OUTPUT:
// Success: User loaded
// Failed: Orders failed
// Success: Notifications loaded
// Dashboard Error: Orders failed