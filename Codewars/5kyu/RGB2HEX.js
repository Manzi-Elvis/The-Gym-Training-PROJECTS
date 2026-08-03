function rgb(r, g, b) {
      if (r < 0) r = 0;
      if (g < 0) g = 0;
      if (b < 0) b = 0;
      if (r > 255) r = 255;
      if (g > 255) g = 255;
      if (b > 255) b = 255;
      let hexR = r.toString(16).toUpperCase();
      let hexG = g.toString(16).toUpperCase();
      let hexB = b.toString(16).toUpperCase();
      if (hexR.length === 1) hexR = "0" + hexR;
      if (hexG.length === 1) hexG = "0" + hexG;
      if (hexB.length === 1) hexB = "0" + hexB;
      return hexR + hexG + hexB;
}
////////////////////////
//////////OR/////////// 
//////////////////////
function rgb2(r, g, b) {
      r = Math.max(0, Math.min(255, r));
      g = Math.max(0, Math.min(255, g));
      b = Math.max(0, Math.min(255, b));
      return ((r << 16) | (g << 8) | b).toString(16).toUpperCase().padStart(6, '0');
}
console.log(rgb(255, 255, 255)); // returns FFFFFF
console.log(rgb(255, 255, 300)); // returns FFFFFF
console.log(rgb(0, 0, 0)); // returns 000000
console.log(rgb(148, 0, 211)); // returns 9400D3      
console.log(rgb2(255, 255, 255)); // returns FFFFFF
console.log(rgb2(255, 255, 300)); // returns FFFFFF
console.log(rgb2(0, 0, 0)); // returns 000000
console.log(rgb2(148, 0, 211)); // returns 9400D3