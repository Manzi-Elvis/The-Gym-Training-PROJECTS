/*
A JavaScript Promise is created with the new Promise constructor function(opens in a new tab) - new Promise().
A promise will let you start some work that will be done asynchronously and let you get back to your regular work.
When you create the promise, you must give it the code that will be run asynchronously.
 You provide this code as the argument of the constructor function:
*/
new Promise(function () {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
    }, Math.random() * 2000);
});

// Indicated a Successful Request or a Failed Request:
/*But once that's all done, how does JavaScript notify us
 that it's finished and ready for us to pick back up?
  It does that by passing two functions into our initial function.
   Typically we call these resolve and reject.
*/


/*
The function gets passed to the function we provide the
Promise constructor - typically the word "resolve" is used to indicate that
this function should be called when the request completes successfully.
Notice the resolve on the first line:
*/
new Promise(function (resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        resolve(sundae);
    }, Math.random() * 2000);
});
/*
If there is a problem with the request and it couldn't be completed,
then we could use the second function that's passed to the function.
Typically, this function is stored in an identifier called "reject" to indicate that
this function should be used if the request fails for some reason.
 Check out the reject on the first line:
*/
new Promise(function (resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        if ( / *iceCreamConeIsEmpty(flavor)* / ) {
            reject(`Sorry, we're out of that flavor :-(`);
        }
        resolve(sundae);
    }, Math.random() * 2000);
});