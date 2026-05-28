// The simplest way to make a proxy is to provide an object and then an empty handler object.
var richard = {status: 'looking for work'};
var agent = new Proxy(richard, {});

agent.status; // returns 'looking for work'

// Get Trap
// The get trap is used to "intercept" calls to properties:
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
      console.log(target); // the `richard` object, not `handler` and not `agent`
      console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
    }
};
const agent = new Proxy(richard, handler);
agent.status; // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)
/*
In the code above, the handler object has a get method (called a "trap"
since it's being used in a Proxy).
When the code agent.status; is run on the last line, because the get trap exists,
it "intercepts" the call to get the status property and runs the get trap function.
This will log out the target object of the proxy (the richard object) 
and then logs out the name of the property being requested (the status property).
And that's all it does! It doesn't actually log out the property!
This is important - if a trap is used, you need to make sure you provide all the functionality
for that specific trap.
*/

// Accessing the Target object from inside the proxy:
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
      console.log(target);
      console.log(propName);
      return target[propName];
    }
};
const agent = new Proxy(richard, handler);
agent.status; // (1)logs the richard object, (2)logs the property being accessed, (3)returns the text in richard.status