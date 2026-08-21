const data = {
  users: [
    { id: 1, name: "Regis" },
    { id: 2, name: "Alice" },
    { id: 3, name: "John" }
  ],

  orders: [
    { id: 101, userId: 1, product: "Laptop", price: 1200 },
    { id: 102, userId: 1, product: "Mouse", price: 25 },
    { id: 103, userId: 2, product: "Phone", price: 800 },
    { id: 104, userId: 2, product: "Headphones", price: 100 },
    { id: 105, userId: 3, product: "Keyboard", price: 70 }
  ]
};

function getUser(id) {
  const user = data.users.find(user => user.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  return Promise.resolve(user);
}

function getOrders(userId) {
  const orders = data.orders.filter(order => order.userId === userId);

  if (orders.length === 0) {
    throw new Error("No orders found");
  }

  return Promise.resolve(orders);
}

function getOrderDetails(orderId) {
  const order = data.orders.find(order => order.id === orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  return Promise.resolve(order);
}

getUser(1).then(user => {
      console.log("User:" , user.name);
      return getOrders(user.id);
}).then(orders => {
      console.log("Order:" , orders);
      return getOrderDetails(orders[0].id);
}).then(orderDetails => {
      console.log("First Order Details:", orderDetails)
}).catch(error => {
      console.error(error.message)
});

// OUTPUT:
// User: Regis
// Order: [
//   { id: 101, userId: 1, product: 'Laptop', price: 1200 },
//   { id: 102, userId: 1, product: 'Mouse', price: 25 }
// ]
// First Order Details: { id: 101, userId: 1, product: 'Laptop', price: 1200 }