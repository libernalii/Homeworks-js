// ==== Task 1 ==== //
function compareNumbers(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
  
  console.log(compareNumbers(2, 5)); 
  console.log(compareNumbers(7, 3)); 
  console.log(compareNumbers(4, 4)); 
  
// ==== Task 2 ==== //
function rectangleArea(length, width = length) {
    return length * width;
  }
  
  console.log(rectangleArea(4, 6)); 
  console.log(rectangleArea(5));    
  
// ==== Task 3 ==== //
function makeNumber(a, b, c) {
    return Number(`${a}${b}${c}`);
  }
  
  console.log(makeNumber(1, 4, 9));
  
// ==== Task 4 ==== //
function calcSum(num) {
    let digits = String(num).split('',' ',',',';');
    let sum = 0;
    for (let digit of digits) {
      sum += Number(digit);
    }
    return sum;
  }
  
  console.log(calcSum(123)); 
  console.log(calcSum(9876)); 
  
// ==== Task 5 ==== //
function calculate(a, b, operator) {
    switch (operator) {
      case '+': return a + b; break;
      case '-': return a - b; break;
      case '*': return a * b; break;
      case '/': {
        if(b ===0){
            return "На нуль ділити не можна!"}
        else{ 
             return a / b;} 
        } break;
      default: return 'Невідомий оператор'; break;
    }
  }
  
  console.log(calculate(5, 2, "+")); 
  console.log(calculate(5, 2, "*")); 
  console.log(calculate(5, 0, "/")); 

// ==== Task 6 ==== //
function average(...numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

console.log(average(4, 6, 8)); 
console.log(average(1, 2, 3, 4, 5)); 

// ==== Task 7 ==== //
function isEven(n) {
    return n % 2 === 0;
  }
  
  console.log(isEven(4)); 
  console.log(isEven(7)); 
  
// ==== Task 8 ==== //
function sumTo(n) {
    if (n === 1) return 1;
    return n + sumTo(n - 1);
  }
  
  console.log(sumTo(5));  
  console.log(sumTo(10)); 
  
// ==== Task 9 ==== //
function repeatString(str, times) {
    return str.repeat(times);
  }
  
  console.log(repeatString("Hi! ", 3));
  
// ==== Task 10 ==== //
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
  }
  
  console.log(isTriangle(3, 4, 5)); 
  console.log(isTriangle(1, 2, 3)); 
  