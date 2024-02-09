
 // Define the two expressions
const expression1 = true; // Example expression, can be replaced with any expression
const expression2 = false; // Example expression, can be replaced with any expression

// Evaluate the truth values of both expressions
const value1 = expression1 ? "True ✅" : "False ❌";
const value2 = expression2 ? "True ✅" : "False ❌";

// Log the appropriate message based on the truth values
if (expression1 && expression2) {
    console.log(`${value1} ${value2}`);
} else if (expression1) {
    console.log(`${value1} ${value2}`);
} else if (expression2) {
    console.log(`${value1} ${value2}`);
} else {
    console.log(`${value1} ${value2}`);
}




let fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('Banana is yellow.');
    break;
  case 'apple':
    console.log('Apple is red.');
    break;
  case 'orange':
    console.log('Orange is orange.');
    break;
  default:
    console.log('I am not sure what fruit it is.');
}
