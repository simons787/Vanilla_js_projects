//Variable where we put the userName
var userName = "Simone";

//check who is the userName
userName === "Simone" ? 
console.log(`Hello ${userName} !`) : 
consoile.log("Hello !");

//Output the question
var userQuestion = "could be raining";
console.log(`${userName} ${userQuestion}?`);

//Generates a random value between 0 and 8
var randomNumber = Math.floor(Math.random() * 8);

var eightBall = '';
console.log('Result:');

//Check the value of randomNumber and assign a value to eightBall   
switch (randomNumber) {
  case 0:
  eightBall = 'It is certain';
  console.log(eightBall);
  break;
  case 1:
  eightBall = 'It is decidedly so';
  console.log(eightBall);
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  console.log(eightBall);
  break;
  case 3:
  eightBall = 'Cannot predict now';
  console.log(eightBall);
  break;
  case 4:
  eightBall = 'Do not count on it';
  console.log(eightBall);
  break;
  case 5:
  eightBall = 'My sources say no';
  console.log(eightBall);
  break;
  case 6:
  eightBall = 'Outlook not so good';
  console.log(eightBall);
  break;
  case 7:
  eightBall = 'Signs point to yes';
  console.log(eightBall);
  break;
  default:
   console.log("It doesn't work like this");
}

//Response with a if else if cycle
console.log("Result (with a different cycle):")

if (randomNumber == 0 ) {
  eightBall = 'It is certain';
  console.log(eightBall); }

  else if (randomNumber == 1 ) {
    eightBall = 'It is decidedly so';
    console.log(eightBall); 
    }

  else if (randomNumber == 2 ) {
  eightBall = 'Reply hazy try again';
  console.log(eightBall); }
  
  else if (randomNumber == 3 ) {
  eightBall = 'Cannot predict now';
  console.log(eightBall); }
  
  else if (randomNumber == 4 ) {
  eightBall = 'Do not count on it';
  console.log(eightBall); }

  else if (randomNumber == 5 ) {
  eightBall = 'My sources say no';
  console.log(eightBall); }
  
  else if (randomNumber == 6 ) {
  eightBall = 'Outlook not so good';
  console.log(eightBall); }

else if (randomNumber == 7 ) {
  eightBall = 'Signs point to yes';
  console.log(eightBall)
} else {
  console.log("something doesn't work")
}
