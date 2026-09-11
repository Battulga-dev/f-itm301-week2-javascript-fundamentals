// Exercise 2.1 — Student information
console.log("--- Exercise 2.1 ---");
const studentName = "Баттулга";
const program = "Software Engineering";
let currentScore = 85;

console.log(studentName);
console.log(program);
console.log(currentScore);

// Exercise 2.2 — Simple calculation
console.log("--- Exercise 2.2 ---");
const num1 = 20;
const num2 = 6;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// Exercise 2.3 — Type check
console.log("--- Exercise 2.3 ---");
const sampleString = "Hello";
const sampleNumber = 42;
const sampleBoolean = true;

console.log(typeof sampleString);   // "string"
console.log(typeof sampleNumber);   // "number"
console.log(typeof sampleBoolean);  // "boolean"

// Exercise 3.1 — Pass or fail
console.log("--- Exercise 3.1 ---");
const testScore = 72;

if (testScore >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Exercise 3.2 — Grade
console.log("--- Exercise 3.2 ---");
const gradeScore = 86;

if (gradeScore >= 90) {
  console.log("A");
} else if (gradeScore >= 80) {
  console.log("B");
} else if (gradeScore >= 70) {
  console.log("C");
} else if (gradeScore >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// Exercise 3.3 — Even or odd
console.log("--- Exercise 3.3 ---");
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " is even");
  } else {
    console.log(num + " is odd");
  }
}

checkEvenOdd(10);  // test 1
checkEvenOdd(7);   // test 2
checkEvenOdd(0);   // test 3

// Exercise 4.1 — Print numbers
console.log("--- Exercise 4.1 ---");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exercise 4.2 — Sum from 1 to N
console.log("--- Exercise 4.2 ---");
const n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log("Sum from 1 to " + n + ":", sum);

// Exercise 4.3 — Multiplication table
console.log("--- Exercise 4.3 ---");
const tableNumber = 7;

for (let i = 1; i <= 10; i++) {
  console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}

// Exercise 5.1 — Rectangle area
console.log("--- Exercise 5.1 ---");

function calculateArea(width, height) {
  return width * height;
}

console.log("Area:", calculateArea(5, 8));
console.log("Area:", calculateArea(10, 3));

// Exercise 5.2 — Maximum of two
console.log("--- Exercise 5.2 ---");

function maxOfTwo(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

console.log("Max:", maxOfTwo(12, 8));
console.log("Max:", maxOfTwo(3, 19));

// Exercise 5.3 — Function scope
console.log("--- Exercise 5.3 ---");

function showMessage() {
  const insideMessage = "I only exist inside this function";
  console.log(insideMessage);
}

showMessage();

try {
  console.log(insideMessage);
} catch (error) {
  console.log("Error caught:", error.message);
  console.log("Explanation: insideMessage was declared inside showMessage(), so it only exists within that function's scope and cannot be accessed outside it.");
}

// Part 6 — Mini Problem-Solving Challenge
console.log("--- Part 6 Challenge ---");
const studentScores = [72, 45, 88, 59, 61];
let passCount = 0;

for (let i = 0; i < studentScores.length; i++) {
  if (studentScores[i] >= 60) {
    passCount++;
  }
}

const passPercentage = (passCount / studentScores.length) * 100;

console.log("Scores:", studentScores);
console.log("Number of students passed:", passCount);
console.log("Percentage passed:", passPercentage + "%");

// ===== Part 7 —  =====

// Хувьсагчийн scope-ийн тайлбар:
// let эсвэл const-оор функц (эсвэл block) дотор зарлагдсан хувьсагч зөвхөн тухайн функцийн хүрээнд л оршдог бөгөөд түүний гаднаас хандах боломжгүй.

// Функц яагаад хэрэгтэй вэ:
// Функц ашигласнаар ижил логикийг өөр өөр input-аар олон удаа дахин ашиглах боломжтой болдог тул код богино, уншихад хялбар, тестлэхэд амар болдог.