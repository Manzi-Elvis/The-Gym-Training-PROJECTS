// Write a function memoize(fn) that caches the results of fn. 
// If fn is called again with the same argument, return the cached result instead of recomputing.
//  Demonstrate it with a function that simulates a slow calculation.

function memoize(fn){
      const cache = {};
      
      return function(arg){
            if(cache[arg] !== undefined){
                  console.log("From Cache:" , arg);
                  return cache[arg];
            }
            console.log("Computing: ", arg);
            const result = fn(arg);
            cache[arg] = result;
            return result;
      };
}