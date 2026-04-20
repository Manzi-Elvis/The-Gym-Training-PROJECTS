function dblLinear(n) {
    // your code
      const u = [1];
      let i = 0, j = 0;
      while (u.length <= n) {
          const next2 = 2 * u[i] + 1;
              const next3 = 3 * u[j] + 1;
                  if (next2 < next3) {
                          u.push(next2);
                              i++;
                  } else if (next2 > next3) {
                          u.push(next3);
                              j++;
                  } else {
                          u.push(next2);
                              i++;
                              j++;
                  }
      }
      return u[n];
   
}
console.log(dblLinear(10)); // 22