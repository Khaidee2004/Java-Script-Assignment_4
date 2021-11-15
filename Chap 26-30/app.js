// Chapter 26-30


//Question No 01

var num = prompt("Enter Positive Integer Number");
var floor = Math.floor(num);
var round = Math.round(num);
var ceil = Math.ceil(num);
document.write(`Number: ${num} <br> 
                Round off value: ${round} <br>
                Floor value: ${floor} <br>
                Ceil value: ${ceil}`)


//Question No 02

var num = prompt("Enter Negative Integer Number");
var floor = Math.floor(num);
var round = Math.round(num);
var ceil = Math.ceil(num);
document.write(`Number: ${num} <br> 
                Round off value: ${round} <br>
                Floor value: ${floor} <br>
                Ceil value: ${ceil}`)


//Question No 03

var num = -4;
var abs = Math.abs(num)
document.write(`The Absolute value of ${num} is ${abs}`)


//Question No 04

var dice = Math.random() * 6 + 1
var dicefloor = Math.floor(dice)
// console.log(dicefloor)    
document.write(`Random dice is : ${dicefloor}`)


//Question No 05

var coin = Math.random() * 2 + 1;
coin = Math.floor(coin);
console.log(coin)
if (coin === 2) {
    document.write(`${coin} <br> Random coin values : Heads`)
} else if (coin === 1) {
    document.write(`${coin} <br> Random coin values : Tails`)

}


//Question No 06

var number = Math.random() * 100 + 1;
number = Math.floor(number);
document.write(`Random number b/w 1 to 100: ${number}`)


//Question No 07

var user = (prompt("Enter your weight in kilograms"));
document.write(`The weight of user is ${user} kilograms`)


//Question No 08

var user = parseInt(prompt("Enter Secret Number:"));
var randomNum = Math.random() * 10 + 1;
randomNum = Math.floor(randomNum)
console.log(randomNum)
if (user === randomNum) {
    alert("COngrats YOU WIN")
}
else {
    alert("Next time")
}