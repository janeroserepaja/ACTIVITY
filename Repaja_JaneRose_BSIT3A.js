```javascript
const menu = [
    "Iced Coffee",
    "Cafe Latte",
    "Chocolate Cake",
    "Cheese Bread"
];

const prices = [120, 130, 100, 60];

const customer = {
    name: "Jane",
    age: 20,
    budget: 500
};

const shop = {
    name: "Janeyy's Coffee Shop",
    location: "Calbayog City"
};

const orders = [
    { name: "Iced Coffee", price: 120, category: "Coffee" },
    { name: "Cafe Latte", price: 130, category: "Coffee" },
    { name: "Chocolate Cake", price: 100, category: "Pastry" },
    { name: "Cheese Bread", price: 60, category: "Pastry" }
];

const calculateTotal = (price, quantity) => price * quantity;
const calculateTax = amount => amount * 0.12;
const calculateDiscount = amount => amount * 0.10;
const formatPrice = amount => `₱${amount.toFixed(2)}`;
const greetCustomer = name => `Thank you for ordering, ${name}!`;

const createOrderSummary = (item, quantity, price) => {
    const subtotal = calculateTotal(price, quantity);
    const tax = calculateTax(subtotal);
    const discount = calculateDiscount(subtotal);
    const total = subtotal + tax - discount;

    return {
        item,
        quantity,
        subtotal,
        tax,
        discount,
        total
    };
};

let [firstItem, secondItem, thirdItem] = menu;
let [firstPrice, secondPrice, thirdPrice] = prices;
let [firstOrder, secondOrder, thirdOrder] = orders;

let total = [...menu];

({ name: firstItem } = customer);
({ name: secondItem } = shop);
({ name: thirdItem } = orders[0]);

menu.map(function(item) {
    return item.toUpperCase();
});

prices.map(function(price) {
    return price * 1.12;
});

orders.filter(function(item) {
    return item.category === "Coffee";
});

orders.filter(function(item) {
    return item.price >= 100;
});

firstOrder = {
    name: customer?.name,
    ...customer
};

secondOrder = {
    location: shop?.location,
    ...shop
};

total = [...prices];

const order = createOrderSummary("Iced Coffee", 2, firstPrice);

console.log("");
console.log(`| ${shop.name.toUpperCase()} |`);
console.log("");

console.log(`Customer: ${customer.name}`);
console.log(`Order Status: Preparing`);

console.log("");
console.log(`| ORDER |`);
console.log("");

console.log(
    `${order.item}      x${order.quantity}    ${formatPrice(order.subtotal)}`
);

console.log("");

console.log(`Subtotal:              ${formatPrice(order.subtotal)}`);
console.log(`Tax:                   ${formatPrice(order.tax)}`);
console.log(`Discount:              ${formatPrice(order.discount)}`);
console.log(`Total:                 ${formatPrice(order.total)}`);

console.log("");

console.log(`Budget:                ${formatPrice(customer.budget)}`);
console.log(
    `Change:                ${formatPrice(customer.budget - order.total)}`
);

console.log("");

console.log(greetCustomer(customer.name));
console.log(`Have a great day at ${shop.name}!`);
```
