// ==== Task 1 ====
let secondsInHour = 60 * 60;
let secondsInDay = secondsInHour * 24;
let secondsInMonth = secondsInDay * 30; 

console.log("Секунд в годині:", secondsInHour);
console.log("Секунд у добі:", secondsInDay);
console.log("Секунд у місяці:", secondsInMonth);

// ==== Task 2 ====
const USD_TO_UAH = 41; 

let dollars = prompt("Введіть суму в доларах:");
let hryvnias = dollars * USD_TO_UAH;

alert(`${dollars} доларів = ${hryvnias} гривень`);

// ==== Task 3 ====
let x = 1;
let y = 2;

let res1 = String(x) + y;
console.log(res1); 
console.log(typeof res1); 

let res2 = Boolean(x) + String(y);
console.log(res2); 
console.log(typeof res2); 

let res3 = Boolean(x < y);
console.log(res3); 
console.log(typeof res3); 

// ==== Task 4 ====
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
}

// ==== Task 5 ====
let inputString = prompt("Введіть рядок:");

for (let i = inputString.length - 1; i >= 0; i--) {
  console.log(inputString[i]);
}

// ==== Task 6 ====
let number;

do {
  number = prompt("Введіть число більше 100:");
} while (number !== null && Number(number) <= 100);

// ==== Task 7 ====
const num = +prompt('Введіть число з діапазону від 0 до 3', '');

switch (num) {
  case 0:
    alert('Ви ввели число 0');
    break;
  case 1:
    alert('Ви ввели число 1');
    break;
  case 2:
  case 3:
    alert('Ви ввели число 2 або 3');
    break;
  default:
    alert('Число не з діапазону 0-3');
}
