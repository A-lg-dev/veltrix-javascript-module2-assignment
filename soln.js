// SECTION 1: IF/ELSE AND ELSE IF STATEMENTS

// 1. Write a script that checks if a number is positive, negative, or zero.
let number1 = -5;
if (number1 > 0) {
    console.log(number1 + " is a positive number.");
} else if (number1 < 0) {
    console.log(number1 + " is a negative number.");
} else {
    console.log("The number is zero.");
}

// 2. Write a script that checks whether a user age is 18 or older and print "Access granted" or "Access denied" or "Access denied".
let userAge = 20;
if (userAge >= 18) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

//  Intermediate (Test)
 // 1. A student score is stored in a variable: let score = 74;
let score = 74;

 // 2. Use if...else if...else to print:
 // A (>= 80)
    if (score >= 80) {
        console.log("Grade: A");
    } 
 // B (>= 70)
    else if (score >= 70) {
        console.log("Grade: B");
    }

 // C (>= 60)
    else if (score >= 60) {
        console.log("Grade: C");
    }

 // D (>= 50)
    else if (score >= 50) {
        console.log("Grade: D");
    }

 // F (below 50)
    else {
        console.log("Grade: F");
    }

// 3. Ask the user for a number. If it’s:
    let userInput = prompt("Enter a number:");

 // Even → print “Even number”
    if (!isNaN(userInput)) {
        if (userInput % 2 === 0) {
            console.log("Even number");
        }

        else {                                // Odd → print “Odd number”
            console.log("Odd number");
        }

    } else {                                  // Not a number → print “Invalid input”.
        console.log("Invalid input");
    }


// Advanced Test
// 1. Given three numbers, write logic to determine and print the largest.
let numA = 12;
let numB = 25;
let numC = 7;


// 2. Write a program that checks if a password is strong:
// Must be at least 8 characters
let password = "StrongPass1";
if (password.length >= 8) {
    let hasNumber = /\d/.test(password); // Check for number
    let hasUppercase = /[A-Z]/.test(password); // Check for uppercase letter
    
// Must include a number
    if (hasNumber && hasUppercase) {
        console.log("Strong Password");
    }

// Must include an uppercase letter
    else {
        console.log("Weak Password");
    }

// Print “Strong Password” or “Weak Password”.
} else {
    console.log("Weak Password");
}

// SECTION 2: SWITCH STATEMENTS
// 1. Write a switch statement that prints the name of the day when given a number from 1–7 (Sunday - Saturday).
let dayNumber = 3;
let dayName;
switch (dayNumber) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
}
console.log(dayName);

// Intermediate (Test)
// 1. Create a variable trafficLight and assign a value “yellow.
let trafficLight = "yellow";


// 2. Use switch to print what the trafficLight should print:
// "Stop"
switch (trafficLight) {
    case "red":
        console.log("Stop");
// "Get Ready"
        break;
    case "yellow":
        console.log("Get Ready");
// "Go"
        break;
    case "green":
        console.log("Go");
        break;
}

// Advanced Test
 // 1. Write a switch program that takes a fruit name and prints its price:
 let fruit = "Banana";
 // Apple → 200
switch (fruit) {
    case "Apple":
        console.log("Price: 200");
        break;
 // Banana → 150
    case "Banana":
        console.log("Price: 150");
        break;
 // Orange → 100
    case "Orange":
        console.log("Price: 100");
        break;
 // Default → “Fruit not available
    default:
        console.log("Fruit not available");
        break;
}

// SECTION 3: STRINGS AND STRING METHODS
 // 1. Declare a string variable containing your full name. Print:
let fullName = "Akaiso Williams";
 // The length
    console.log("Length of full name: ", fullName.length);

 // The first character
    console.log("First character: ", fullName.charAt(0));

 // The last character
    console.log("Last character: ", fullName.charAt(fullName.length - 1));

 // 2. Write a program to convert a string to uppercase and lowercase.
let sampleString = "Hello World!";

 // Uppercase
    console.log("Uppercase: ", sampleString.toUpperCase());

 // Lowercase
    console.log("Lowercase: ", sampleString.toLowerCase());

// Intermediate (Test)
 // 1. Given the string: let text = "JavaScript is awesome!";
let text = "JavaScript is awesome!";

 // 2. Do the following:
 // Extract “JavaScript” using slice()
    let extracted = text.slice(0, 10);
    console.log("Extracted word: ", extracted);

 // Replace “awesome” with “powerful”
    let replacedText = text.replace("awesome", "powerful");
    console.log("Replaced text: ", replacedText);

 // Check if the string includes “Script”
    let includesScript = text.includes("Script");
    console.log("Includes 'Script': ", includesScript);

 // 3. Split this string into an array of words: "Learn JavaScript step by step".
let learnText = "Learn JavaScript step by step";
let wordsArray = learnText.split(" ");
console.log("Array of words: ", wordsArray);

 // Advanced (Challenge accepted)
 // 1. Remove all spaces from a string and convert it to lowercase.
let stringWithSpaces = "   JavaScript   is   Fun   ";
let modifiedString = stringWithSpaces.replace(/\s+/g, '').toLowerCase();
console.log("Modified string: ", modifiedString);

 // 2. Count how many times the letter “a” appears in a string (using a for-loop).
let countString = "An apple a day keeps the doctor away";
let count = 0;
for (let i = 0; i < countString.length; i++) {
    if (countString.charAt(i).toLowerCase() === 'a') {
        count++;
    }
}
console.log("Number of 'a' characters: ", count);

// SECTION 4: ARRAYS AND ARRAY METHODS
 // 1. Create an array of 5 colors. Log:
let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

 // The first color
    console.log("First color: ", colors[0]);

 // The last color
    console.log("Last color: ", colors[colors.length - 1]);

 // The array length
    console.log("Array length: ", colors.length);

 // 2. Add a new color to the end using push().
colors.push("Orange");
console.log("After push: ", colors);


 // 3. Remove the first color using shift()
colors.shift();
console.log("After shift: ", colors);


//  Intermediate (Test)
 // 1. Given: let nums = [4, 8, 2, 15, 23, 7];

let nums = [4, 8, 2, 15, 23, 7];

 // 2. Write logic to:
 // Sort the array
nums.sort((a, b) => a - b);
    console.log("Sorted array: ", nums);

 // Filter numbers greater than 10
let filteredNums = nums.filter(num => num > 10);
    console.log("Numbers greater than 10: ", filteredNums);

 // Multiply each number by 2 using for-loop
let multipliedNums = [];
for (let i = 0; i < nums.length; i++) {
    multipliedNums.push(nums[i] * 2);
}
console.log("Multiplied by 2: ", multipliedNums);


// 3. Combine these arrays into one:
 // 4. let a = ["A", "B"];
    let a = ["A", "B"];

 // 5. let b = ["C", "D"]
    let b = ["C", "D"];

let combinedArray = a.concat(b);
console.log("Combined array: ", combinedArray);

// Advanced Test
 // 1. Write a program that counts how many times a value appears in an array
let sampleArray = [1, 2, 3, 2, 4, 2, 5];
let valueToCount = 2;
let countValue = 0;
for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] === valueToCount) {
        countValue++;
    }
}
console.log("Count of value ", valueToCount, ": ", countValue);

// SECTON 5: TENARY OPERATORS
// Beginner
 // 1. Write a ternary statement to check if a number is even or odd.
let numToCheck = 10;
let evenOrOdd = (numToCheck % 2 === 0) ? "Even" : "Odd";
console.log(numToCheck + " is " + evenOrOdd);

//  Advanced Test
 // 1. Convert this if...else into a ternary:
 // if (score >= 70) {
 // grade = "Pass";
 // } else {
// grade = "Fail";
 // }

let examScore = 85;
let grade = (examScore >= 70) ? "Pass" : "Fail";
console.log("Grade: ", grade);

// SECTION 6: LOOPS (FOR LOOPS)
 // Beginner
 // 1. Print the numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

 // 2. Print all even numbers from 1 to 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Intermediate (Test)
 // 1. Given the array: let fruits = ["Apple", "Banana", "Mango"];
let fruits = ["Apple", "Banana", "Mango"];

 // 2. Use a loop to print each fruit.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

 // 3. Loop through an array of numbers from 1 - 100 and print only numbers greater than 50
for (let i = 1; i <= 100; i++) {
    if (i > 50) {
        console.log(i);
    }
}

// Advanced Test
// Advanced (Challenge accepted)
// 1. Write a loop to find the sum of all numbers in an array. 
let numbersArray = [5, 10, 15, 20, 25];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}
console.log("Sum of all numbers: ", sum);

// 2. Reverse an array manually (without using reverse()).
let arrayToReverse = [1, 2, 3, 4, 5];
let reversedArray = [];
for (let i = arrayToReverse.length - 1; i >= 0; i--) {
    reversedArray.push(arrayToReverse[i]);
}
console.log("Reversed array: ", reversedArray);

// SECTION 7: LOOPS (WHILE LOOPS)
 // Beginner
 // 1. Print numbers from 1 to 5 using a while loop.
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Intermediate (Test)
 // 1. Count down from 10 to 1 using a while loop.
 while (i <=1) {
    console.log(i);
    i++;
 }

 // 2. Using a while loop, keep adding numbers until you reach 100.
let total = 0;
let n = 1;
while (total < 100) {
    total += n;
    n++;
}
console.log("Total after adding numbers until >= 100:", total);
console.log("Last number added:", n - 1);

// Advanced (Challenge accepted)
 // 1. Given: let text = "banana";
 let bananaText = "banana";
 
 // 2. Using a while loop, count how many times the letter “a” appears.
 let countA = 0;
 let idx = 0;
 while (idx < bananaText.length) {
     if (bananaText.charAt(idx).toLowerCase() === 'a') {
         countA++;
     }
     idx++;
 }
 console.log("Number of 'a' characters in", bananaText, ":", countA);


 