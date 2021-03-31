
// **Basic Arithmetic Problems**
// Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold? 
console.log(`${6450 / 15} tickets were sold`);

// Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
console.log(500*52);

// **Percentage**
// Q3. Calculate the percentage of 17/30. Expected output: number%
const number = (17 * 100) / 30;
console.log(`${number}$`);

// **Geometry Formulas** 
// Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
console.log(4.75 * 4);

// Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
console.log(5+6+7)

// Q6. Calculate the area of a square. Each side is 5cm.
console.log(5*5);

//Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
// Heron's Formula
const triSideLength1 = 5;
const triSideLength2 = 6;
const triSideLength3 = 7;
const halfPerimeter = (triSideLength1 + triSideLength2 + triSideLength3) / 2;
const areaTriangle = Math.sqrt(halfPerimeter*(halfPerimeter-triSideLength1)*(halfPerimeter-triSideLength2)*(halfPerimeter-triSideLength3));
console.log(areaTriangle);

// Q8. Calculate the volume of a cube. Length of each side is 9cm.
console.log(9 * 9 * 9);

// **Consumer Formula**
// Q9. Calculate the three bills including tips:
// €22.35 + 10% tip
// €26.67 + 15% tip
// €35.92 + 20% tip
console.log("€" + (22.35 * 1.10));
console.log("€" + (26.67 * 1.15));
console.log("€" + (35.92 * 1.20));

// **Average** 
// Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
// What is Noemy's average hours worked per day?
const sum = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
console.log(sum / 10);

// Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.
const firstFiveResults = 75 + 70 + 85 + 90 + 100;
const totalResults = 85 * 6;
const sixthResult = totalResults - firstFiveResults;
console.log("Score in the sixth test: " + sixthResult);

// Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
// Expected output: James needs a minimum of --% to get an 80% average.
const avgOfEightTests = 78 * 8;
const avgNeeded = 80 * 9;
const minResult = avgNeeded - avgOfEightTests;
console.log(`James needs a minimum of ${minResult}% to get an 80% average.`);
