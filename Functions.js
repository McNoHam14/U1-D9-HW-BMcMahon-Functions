/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */

// write a function that takes in the inputs of l1 & l2
// add multiplies l1 & l2 together
// inputs - l1, l2
// output - number === a perimeter

console.log("\n-------------------------------------EXCERCISE 1-------------------------------------\n")

// function newQ( )

function area(l1, l2) {
return (l1 * l2);
}

let egRectangle = area (20, 10);

console.log(egRectangle)


/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 2-------------------------------------\n")

function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2; }
}

console.log(crazySum(4, 4))


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 3-------------------------------------\n")

function crazyDiff (i) {
    if (19 === i){
        return 0;
    }
    else if (i < 19){
        return 19 - i;
    }
    else
    return (i - 19) * 3
}
console.log(crazyDiff(18))


/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 4-------------------------------------\n")

function boundary (n) {
    if (n === 400) {return true}

    else if (n >= 20) {return true}

   //  else if (n <= 100) {return true}
   
    else return false
}

console.log(boundary(19))



/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, 
 but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 5-------------------------------------\n")

/*
function strivify (n) {
    if (n.startsWith = "Strive")
    return true
    (if true
    return 
}

let strive = "Strive"

function

function strivify(str) {
    let string = "";
    for (var i = 0; i < str.length; i++) {
        if(str[i] !== "Strive")
            return (strive + i)
        } else return i
}

console.log(strivify("Hi"))
*/

/*
if (i === "Strive") 

 {return strivify}

else if {
    return ("Strive" + i)
}

console.log(strivify("Strive "))
*/


/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 6-------------------------------------\n")

function check3and7(i) {
    if (i % 3 === 0 || i % 7 ===0 ) {
        console.log(i);
        return true
    } else
    return false
}

console.log(check3and7(4))



/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 7-------------------------------------\n")

function reverseString(str) {
    var newString = " ";

    for (var i = str.length - 1; i >= 0; i--)
    newString += str[i];
    return newString;

}

console.log(reverseString("Strive"))


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 8-------------------------------------\n")

function upperFirstWord(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

console.log(upperFirstWord("the first day of the week is monday"))


/* function upperFirst("word") {
    const upperFirstWord
}

const egWord = "the";
egWord[0].toUpperCase() + egWord.substring(1)

console.log(egWord)

const publication = "freeCodeCamp";
publication[0].toUpperCase();

console.log(publication)
*/


/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 9-------------------------------------\n")

/*
function cutString((string, char)
    let count = 0;


for(let i = 0; i < string.length: i++) {
    if (string [i] ===
}



)
*/


/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 10-------------------------------------\n")

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
