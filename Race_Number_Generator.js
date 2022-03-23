
//generate a random race number
let raceNumber = Math.floor(Math.random() * 1000);
//declare if the runner is an early runner
var earlyRunner = 'yes';
//insert the runner's age
var runnerAge= 18;

console.log(raceNumber);
console.log(earlyRunner);
console.log(runnerAge);

//check if the runner is an adult and if it is an early runner
if (runnerAge > 18 && earlyRunner == 'yes')
{
  //if the previewed state is true the runner gets assigned a racer number over 1000
raceNumber = raceNumber + 1000;
//display the number assigned to the runner
console.log(`Race Number Assigned: ${raceNumber}`);
} else if (runnerAge >= 18 && earlyRunner == 'no') {
console.log("Race Number Assigned:");
console.log(raceNumber);
}

if (runnerAge > 18 && earlyRunner == 'yes') {
//if it's true decide the start time
console.log("You will begin at 9:30 am");

} else if (runnerAge >= 18 && earlyRunner == 'no')
{
console.log(`You will rune at 11:00 am and your number will be ${raceNumber}`);
}
// if underaged the runner will run later 
if (runnerAge < 18) {
  console.log("Youth registrants run at 12:30 pm");
} else if (runnerAge == 18) {
  console.log("Go to the registration desk now !!!");
}


