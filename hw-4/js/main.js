// ==== Task 1 ==== //
function findUnique(arr) {
    let sorted = arr.slice().sort();
    for (let i = 0; i < sorted.length - 1; i++) {
      if (sorted[i] === sorted[i + 1]) {
        return false;
      }
    }
    return true;
}
  
console.log(findUnique([1, 2, 3, 5, 3]));  
console.log(findUnique([1, 2, 3, 5, 11])); 

// ==== Task 2 ==== //
let shoppingList = [
    { name: "Хліб", quantity: 1, purchased: false },
    { name: "Молоко", quantity: 2, purchased: true },
    { name: "Яблука", quantity: 5, purchased: false }
  ];
  
function showList() {
    console.log("Список покупок:");
    let notPurchased = shoppingList.filter(item => !item.purchased);
    let purchased = shoppingList.filter(item => item.purchased);
  
    [...notPurchased, ...purchased].forEach(item => {
      console.log(`${item.name} — кількість: ${item.quantity}, куплено: ${item.purchased}`);
    });
}

function addProduct(name, quantity) {
    let product = shoppingList.find(item => item.name.toLowerCase() === name.toLowerCase());
    
    if (product) {
      product.quantity += quantity;
    } else {
      shoppingList.push({ name, quantity, purchased: false });
    }
}
  
function buyProduct(name) {
    let product = shoppingList.find(item => item.name.toLowerCase() === name.toLowerCase());
    if (product) {
      product.purchased = true;
    } else {
      console.log("Такого продукту немає в списку!");
    }
}
  
showList();
addProduct("Хліб", 2);
buyProduct("Яблука");
showList();
  
// ==== Task 3 ==== //
let products = [
    {name: "Phone", price: 500, category: "Electronics"},
    {name: "Laptop", price: 1000, category: "Electronics"},
    {name: "Book", price: 20, category: "Books"},
    {name: "Shoes", price: 80, category: "Fashion"}
  ];
  
let userCategory = prompt("Введіть категорію товарів (наприклад 'Electronics'):");

let filteredProducts = products.filter(item => item.category.toLowerCase() === userCategory.toLowerCase());
  
console.log("Товари цієї категорії:");
console.log(filteredProducts);
  
// ==== Task 4 ==== //
let students = [
    {name: "John", grades: {math: 90, english: 85, science: 95}},
    {name: "Alice", grades: {math: 95, english: 88, science: 92}},
    {name: "Bob", grades: {math: 80, english: 75, science: 85}}
  ];
  
for (let student of students) {
    let sum = 0;
    let count = 0;
  
    for (let subject in student.grades) {
      sum += student.grades[subject];
      count++;
    }
  
    let average = sum / count;
    console.log(`${student.name} — середній бал: ${average.toFixed(2)}`);
}
  