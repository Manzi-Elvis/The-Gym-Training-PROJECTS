// CLOSURES

function outerFunction(){
      let count = 0;
      function innerFunction(){
            count++;
            console.log(count);
      }
      return innerFunction;
}

const counter = outerFunction();

counter();
counter();
counter();