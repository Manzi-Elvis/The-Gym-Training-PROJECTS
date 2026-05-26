// class = (ES6 feature) provides a more structured and cleaner way to 
//               work with objects compared to traditional constructor functions
//               ex. static keyword, encapsulation, inheritance

class Product{
      constructor(name, price){
            this.name = name;
            this.price = price;
      }
      displayProduct(){
            console.log(`Product:${this.name}`);
            console.log(`Price: ${this.price}`)
      }
      calculateTotal(salesTax = 0.05){
            return this.price + (this.price * salesTax);
      }
}

const product1 = new Product('Shirt' , 19.99)
const product2 = new Product('Pants' , 25.99)
const product3 = new Product('Shoes' , 50.98)

product3.displayProduct();

const total = product1.calculateTotal();
console.log(`Total price: $${total.toFixed(2)}`)