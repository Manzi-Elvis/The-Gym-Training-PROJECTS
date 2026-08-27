/*
The Misadventures of Bob the Highly Paid Consultant
Chapter 1: Promises Made and Broken
Your company has purchased a new ordering system and hired Bob
the Highly Paid Consultant to develop a front end. However, 
after continuous delays and missed deliverables, his contract
has now come to an end. Bob vanishes like a ghost into the fog,
leaving you to see if you can salvage the pieces of his work.

One thing is clear: Bob has left a chain of broken promises in his wake.

Can you help to fix things?

In the sample test case (submitOrder(12345)), 
"Your order was placed successfully" should be logged to the console.
Hit "Attempt" to see if you pass the kata.

Some notes:

- You can assume that the functions Bob is calling
actually exist and take the given parameters in the given order.
- User "12345" is a valid user for testing
- Any provided function whose name ends in Async returns a Promise.
- Any provided function whose name does not end in
Async is synchronous, i.e. calculateShipping().

As you may have gathered, the purpose of this Kata is to familiarize yourself with using JavaScript Promises for asynchronous programming.
*/


function submitOrder(user){
  return OrderAPI.getShoppingCartAsync(user).then(function(shoppingCart){
    return CustomerAPI.getProfileAsync(user).then(function(profile){
      var shippingRate = calculateShipping(shoppingCart, profile.zipCode);
      return OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
    });
  }).then(function(success){
    console.log(`Your order ${success ? "was" : "was NOT"} plced successfully`);
  });
};

/*
The approach used here is to chain JavaScript Promises with .then() so that each
asynchronous operation happens in the correct order: first, getShoppingCartAsync()
retrieves the cart; then getProfileAsync() retrieves the customer’s profile; once
both are available, the synchronous calculateShipping() calculates the shipping rate;
finally, placeOrderAsync() places the order. The main problem this solves is managing
asynchronous dependencies—you cannot calculate shipping until you have both the cart
and ZIP code, and you cannot place the order until the shipping rate is known. The nested
 .then() structure ensures these steps happen sequentially and that the final .then()
receives the result of placeOrderAsync() so it can log whether the order was successfully placed.
*/