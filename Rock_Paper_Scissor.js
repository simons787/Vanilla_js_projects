const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    //check if the user have selected a move, there is also the 'bomb'
    //an extra move that can always win
    if (userInput === `rock` ||userInput === `paper` || userInput === `scissors` || userInput === `bomb` ) {
      return userInput;
      } else {
        console.log(`error !!!`);
      }
  }
  
  //elaborates a random move for the computer
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
    case 0:
      return `rock`;
    case 1:
      return `paper`;
    case 2:
      return `scissors`;
     }
  };
  
  //compare the two moves it's player vs computer now !
  const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return `the game was tie`;
  }
  if (userChoice === `paper`) {
    if (computerChoice === `scissors`) 
    {
      return `Computer won !!!`;
    } else { 
      return `User won !!!`; 
      }
    }
  if (userChoice === `scissors`) {
    if (computerChoice === `rock`) 
    {
      return `Computer won !!!`;
    } else { 
      return `User won !!!`; 
      }
    } 
  
    if (userChoice === `bomb`) {
      return `User won, FATALITY !!!`;
    }
  };
  
  const playGame = () => {
  var userChoice = getUserChoice(`bomb`);
  var computerChoice = getComputerChoice();
  console.log(`You through: ` + userChoice)
  console.log(`Computer through: ` + userChoice);
  console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();
  
  