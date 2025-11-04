// ==== Task 1 ==== //
let numbers = [5, 12, 3, 8, 25, -4, 10];

let maxNumber = Math.max(...numbers);
let minNumber = Math.min(...numbers);

console.log("Максимальне число:", maxNumber);
console.log("Мінімальне число:", minNumber);

// ==== Task 2 ==== //
let x1 = 3, y1 = 4;
let x2 = 7, y2 = 1;

let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(`Відстань між точками: ${distance}`);

// ==== Task 3 ==== //
function convertDateFormat(dateString) {
  let [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

let date = "2025-11-04";
console.log(convertDateFormat(date)); 

// ==== Task 4 ==== //
function truncateString(str, maxLength) {
  return str.length > maxLength
    ? str.slice(0, maxLength - 3) + "..."
    : str;
}

let text = "Це дуже довгий рядок, який потрібно обрізати.";
console.log(truncateString(text, 20)); 

// ==== Task 5 ==== //
function removeExtraSpaces(sentence) {
  return sentence.trim().replace(/\s+/g, " ");
}

let input = "  Це   приклад   з   багатьма   пробілами.  ";
console.log(removeExtraSpaces(input)); 

// ==== Task 6 ==== //
function toCamelCase(cssProperty) {
  return cssProperty.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

console.log(toCamelCase("font-size")); 
console.log(toCamelCase("border-left-color")); 
console.log(toCamelCase("background-color")); 

// ==== Task 7 ==== //
function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

let inputString = "i love java script";
console.log(capitalizeWords(inputString)); 

// ==== Task 8 ==== //
function updateCountdown() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
  const diff = newYear - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();