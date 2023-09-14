// JavaScript Lektion 6 uppgifter

// UPPGIFT #1

// Heltal
var myAge = 32;
console.log(typeof myAge); // Shows the type
console.log(myAge); // Shows the value of myAge

// Decimal
var myDecimal = 0.3;
console.log(typeof myDecimal); // Shows the type
console.log(myDecimal); // Shows the value of myDecimal

// Text
var myName = 'Onur';
console.log(typeof myName); // Shows the type
console.log('My name is ' + myName); // Shows my name

// Boolean
var myBool = true;
console.log(typeof myBool); // Shows the type
console.log('Is this true or false? ' + myBool); // Shows the boolean

// UPPGIFT #3

// My array of cities:
var myCities = [
    'Barcelona',
    'London',
    'Prague',
    'Rome',
    'Istanbul',
    'Stockholm',
];

// Printing out the last city in the array:
console.log(myCities); // Shows all cities in the array
console.log(myCities[5]); // Shows the last city
console.log('The last city in the array is: ' + myCities[myCities.length - 1]); // Shows the last city in different way

// UPPGIFT #4

// This code below prints out the users typed user name in p within div
// Test yourself
var myUserName = prompt();
console.log(myUserName);

document.getElementById('userName').innerHTML = myUserName;
