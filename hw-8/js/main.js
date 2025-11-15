// ==== Task 1 ==== //
const btn = document.getElementById("btn");
const info = document.getElementById("info");

btn.addEventListener("click", (event) => {
    info.innerHTML = `
    <p>Подія: ${event.type}</p>
    <p>Ціль: ${event.target.tagName}</p>
    <p>Координати: X=${event.clientX}, Y=${event.clientY}</p>
    <p>Час: ${new Date().toLocaleTimeString()}</p>
`;
if(btn.style.backgroundColor === 'lightpink'){
    btn.style.backgroundColor = 'lightgreen'
}
})

btn.addEventListener("dblclick", (event) => {
    info.innerHTML = `
    <p>Подія: ${event.type}</p>
    <p>Ціль: ${event.target.tagName}</p>
    <p>Координати: X=${event.clientX}, Y=${event.clientY}</p>
    <p>Час: ${new Date().toLocaleTimeString()}</p>
    `;
    btn.style.backgroundColor = 'lightpink';
})

btn.addEventListener("contextmenu", (event) => {
    info.innerHTML = `
    <p>Подія: ${event.type}</p>
    <p>Ціль: ${event.target.tagName}</p>
    <p>Координати: X=${event.clientX}, Y=${event.clientY}</p>
    <p>Час: ${new Date().toLocaleTimeString()}</p>
    `;
    if(btn.style.backgroundColor === 'lightpink'){
    btn.style.backgroundColor = 'lightgreen'
}
    event.preventDefault();
})

document.addEventListener("keydown", (event) =>{
    info.innerHTML = `
        <p>Подія: ${event.type}</p>
        <p>Клавіша: ${event.key}</p>
        <p>Час: ${new Date().toLocaleTimeString()}</p>
    `;
})

// ==== Task 2 ==== //
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

Car.prototype.displayInfo = function() {
    console.log(`Бренд: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}`);
};

Car.prototype.drive = function() {
    console.log("Рух розпочато");
};

const car1 = new Car("Toyota", "Camry", 2015);
const car2 = new Car("Audi", "A6", 2021);
const car3 = new Car("Honda", "Civic", 2008);

car1.displayInfo();
car1.drive();

car2.displayInfo();
car2.drive();

car3.displayInfo();
car3.drive();

// ==== Task 3 ==== //
class Student{
    constructor(name, age, grade){
        this.name = name,
        this.age = age,
        this.grade = grade
    }
    study() {
        console.log(`${this.name}, ${this.age} років, вчиться на оцінку ${this.grade}`);
    }
}

const s1 = new Student("Anna", 18, "5");
s1.study();

const s2 = new Student("Bill", 23, "3");
s2.study();

// ==== Task 4 ==== //
class Book{
    constructor(title, author, year){
        this.title = title,
        this.author = author,
        this.year = year
    }
    displayInfo(){
        console.log(`"${this.title}" ${this.author} - ${this.year}`);
    }
}

const b1 = new Book("Little Women", "Louisa May Alccot", 1868);
b1.displayInfo();

// ==== Task 5 ==== //
class Shape{
    constructor(color){
        this.color = color
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape{
    constructor(color, a, b){
        super(color);
        this.a = a;
        this.b = b;
    }
    area(){
        return this.a * this.b;
    }
    perimeter(){
        return (this.a + this.b) * 2;
    }
}

const circle = new Circle("red", 5);
console.log(`Колір кола: ${circle.color}, Площа: ${circle.area()}`);

const rectangle = new Rectangle("blue", 4, 6);
console.log(`Колір прямокутника: ${rectangle.color}, Площа: ${rectangle.area()}`);