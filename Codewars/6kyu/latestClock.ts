/*
Description:
      Write a function which receives 4 digits and returns the latest
      time of day that can be built with those digits.

The time should be in HH:MM format.

Examples:

digits: 1, 9, 8, 3 => result: "19:38"
digits: 9, 1, 2, 5 => result: "21:59" (19:25 is also a valid time, but 21:59 is later)
Notes
Result should be a valid 24-hour time, between 00:00 and 23:59.
Only inputs which have valid answers are tested.
*/

export function latestClock(a: number, b: number, c: number, d: number):string {
  const digs = [a,b,c,d];
  let latest = "";
  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
      for(let k = 0; k < 4; k++){
        for(let l = 0; l < 4; l++){
          if(new Set([i, j, k, l]).size!== 4) continue;
          
          const hr = digs[i] * 10 + digs[j];
          const min = digs[k] * 10 + digs[l];
          if(hr <= 23 && min <= 59){
            const time = `${hr.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`;
            if (time > latest){
              latest = time;
            }
          }
        }
      }
    }
  }
  return latest;
}