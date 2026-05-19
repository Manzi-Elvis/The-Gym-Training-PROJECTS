// Write a closure-based counter factory. 
// The function makeCounter() should return an object with three methods: increment(), decrement(), and getCount().
//  Each counter instance must maintain its own independent count.

function makeCounter(){
      let count = 0; // private variable (closure)
      return {
            increment(){
                  count++;
            },
            decrement(){
                  count--;
            },
            getCount(){
                  return count;
            }
      }
}

const counter1 = makeCounter();
const counter2 = makeCounter();

counter1.increment();
counter1.increment();

console.log(counter1.getCount()); // 2

counter2.increment();

console.log(counter2.getCount()); // 1
console.log(counter1.getCount()); // 2 (independent state)