const numberOne = Number(prompt("Enter ther first number"));
const numberTwo = Number(prompt("Enter ther second number"));

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const mult = numberOne * numberTwo;
const division = numberOne / numberTwo;
const rest = numberOne % numberTwo;

alert(`The sum of the two numbers is ${sum}`);
alert(`The subtraction of the two numbers is ${sub}`);
alert(`The multiplication of the two numbers is ${mult}`);
alert(`The division of the two numbers is ${division}`);
alert(`The remainder of dividing the two numbers is ${rest}`);

if (sum % 2 == 0){
    alert("The sum is even");
} else {
    alert("The sum is odd");
}

if (numberOne === numberTwo) {
    alert("The numbers are the same");
} else {
    alert("The numbers are different");
}
