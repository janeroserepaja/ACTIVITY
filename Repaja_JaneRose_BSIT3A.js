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

menu.forEach(function(item, index) {
    console.log(`${index + 1}. ${item.name} - ₱${item.price}.00 (${item.category})`);
});

console.log(`\nCustomer: ${customer.name}`);
console.log(`Budget: ₱${customer.budget}.00`);

let selectedItem = menu[0];

console.log("\n--- CUSTOMER ORDER ---");
console.log(`Selected Item: ${selectedItem.name}`);
console.log(`Item Price: ₱${selectedItem.price}.00`);

if (selectedItem.price <= customer.budget) {
    console.log("Order can be purchased within the budget.");
} else {
    console.log("Insufficient budget.");
}
