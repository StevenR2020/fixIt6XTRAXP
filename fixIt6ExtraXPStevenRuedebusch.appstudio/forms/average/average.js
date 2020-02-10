let myNumbers = [34, 56, 117, 324, 183, 231, 72, 111, -10, 207]
let sumNumbers = myNumbers.reduce(function(a, b){
    return a + b;
    }, 0);
let numLength = myNumbers.length
let average = sumNumbers / numLength

let userChoice = prompt(`Would you like to sum up or average the numbers? Enter the corresponding number for the request.
1. Sum Up
2. Find Average`)

if (userChoice == 1) {
   alert(`The sum of the 10 numbers is ${sumNumbers}`)
} else if (userChoice == 2) {
   alert(`The average of the 10 numbers is ${average}`)
} else {
   alert("You did not provide sufficient information to carry out this request.")
}

let userNumOne = prompt("Please add a number to our array!")
let userNumTwo = prompt("Now add another one...")
let userNumThree = prompt("Hehe, now one more.")
myNumbers.push(`${userNumOne}`)
myNumbers.push(`${userNumTwo}`)
myNumbers.push(`${userNumThree}`)
console.log(myNumbers)
if (userNumOne > 0 && userNumTwo > 0 && userNumThree > 0) {
   alert(`Thank you for adding ${userNumOne}, ${userNumTwo}, and ${userNumThree} to the array!`)
} else {
   alert("You need to add a number before we can proceed")
}

alert(`After adding your numbers, here is the new array: ${myNumbers}`)
 
//Hello! The code appears to be complete









