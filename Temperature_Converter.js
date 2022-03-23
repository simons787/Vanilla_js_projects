//Create a costant to store Kelvin's value
var kelvin = 235;
// determines Celsius
var Celsius = kelvin - 273;
//Calculate Farenheits
var Fahrenheit = Celsius * 9/5 + 32;
//floor the Fahrenheit result
var Fahrenheit = Math.floor(Fahrenheit);
//converts to Newton
var Newton = Celsius * 33/100;
//floor the Newton result
var Newton = Math.floor(Newton);
//write the results on screen
console.log(
`The Temperature in kelvin is ${kelvin} Degrees
The Temperature in Celsius is ${Celsius} Degrees
The Temperature in Fahrenheit is ${Fahrenheit} Degrees
The Temperature in Newton is ${Newton} Degrees
`);