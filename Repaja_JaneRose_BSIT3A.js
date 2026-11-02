const menu = [
    { name: "Iced Coffee", price: 120, category: "Coffee" },
    { name: "Cafe Latte", price: 130, category: "Coffee" },
    { name: "Chocolate Cake", price: 100, category: "Pastry" },
    { name: "Cheese Bread", price: 60, category: "Pastry" }
];

const customer = {
    name: "Jane",
    age: 20,
    budget: 500
};

const shop = {
    name: "Janeyy's Coffee Shop",
    location: "Calbayog City"
};

console.log(`Welcome to ${shop.name}!`);
console.log(`Location: ${shop.location}`);

console.log("\n--- MENU ---");

menu.forEach(function(item) {
    console.log(`${item.name} - ₱${item.price}.00 (${item.category})`);
});

console.log(`\nCustomer: ${customer.name}`);
console.log(`Budget: ₱${customer.budget}.00`);
