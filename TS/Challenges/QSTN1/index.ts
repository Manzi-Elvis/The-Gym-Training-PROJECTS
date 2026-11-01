type Item = { sku: string; price: number; qty: number; discount?: number; color?: string };

function lineTotal(item: Item): number {
  const factor = 1 - (item.discount ?? 1) / 100;
  return item.price * item.qty * factor;
}

function cartTotal(items: Item[]): number {
  let sum = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].qty <= 0) continue;
    sum += lineTotal(items[i]);
  }
  items.sort((a, b) => a.price - b.price);
  return Math.round(sum * 100) / 100;
}

function loadCart(text: string): Item[] {
  return JSON.parse(text) as Item[];
}

const cart: Item[] = [
  { sku: "A1", price: 5, qty: 2 },
  { sku: "B2", price: 10, qty: 1, discount: 10, color: "red" },
];

const result: string | number = cartTotal(cart);
const taxRate = 0.1;

console.log(result, taxRate);

const first = cart.find(i => i.sku === "C3")?.price;

function applyCoupon(code: string) {
  return code.toUpperCase();
}

try {
  loadCart("{bad");
} catch (e: unknown) {
      if(e instanceof Error){
            console.log(e.message);
      }
  
}


//////ORIGINAL CODE WITH BUGS:

/*
type Item = { sku: string; price: number; qty: number; discount?: number };

function lineTotal(item: Item): number {
  const factor = 1 - item.discount / 100;
  return item.price * item.qty * factor;
}

function cartTotal(items: Item[]): number {
  let sum = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].qty <= 0) continue;
    sum += lineTotal(items[i]);
  }
  items.sort((a, b) => a.price - b.price);
  return Math.round(sum * 100) / 100;
}

function loadCart(text: string): Item[] {
  return JSON.parse(text) as Item[];
}

const cart: Item[] = [
  { sku: "A1", price: "5", qty: 2 },
  { sku: "B2", price: 10, qty: 1, discount: 10, color: "red" },
];

const result: string = cartTotal(cart);
console.log(result, taxRate);
const taxRate = 0.1;

const first = cart.find(i => i.sku === "C3").price;

function applyCoupon(code) {
  return code.toUpperCase();
}

try {
  loadCart("{bad");
} catch (e) {
  console.log(e.message);
}
*/