function sortProducts(products) {
      return products.sort((a, b) => a.price - b.price);
}
const products = [
      { name: 'Laptop', price: 999 },
      { name: 'Phone', price: 499 },
      { name: 'Tablet', price: 299 },
];
console.log(sortProducts(products));