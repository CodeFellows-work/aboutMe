'use srict';
// intro welcoming alert
alert('Hello and Welcome to my about me webpage. You\'ll get to know a bit about me, but let\'s try to guess some things about me!');
// This will keep track of all the correct guesses the user inputs
let scoreKeeper = 0;
//Added function to name prompt
function userInputName(){
  // declaring a username variable for user name input
  let userName = prompt('Firstly, what is your name?');
  // making sure that the username is string
  while(userName === '' || userName === null){
    userName = prompt('Please enter a real name!');
    // will console log the user's name
    console.log(userName);
  }
  // Returns the user name to userInputName
  return userName;
}
//Added function to greeting message
function helloUser(){
  // will alert with hello and the inputted username
  alert('Hello! ' + userNameOutside);
}
// added function to question 1
function liveInWaQ(){
  //question 1
  // will prompt the user to answer yes or no
  let fromWhere = prompt('So ' + userNameOutside + ', do I live in Washington? Answers must be yes or no');
  // will console log the answer
  console.log(fromWhere);
  // will change the answer to a lower case y or n
  let fromWhereLowerCase = fromWhere.toLocaleLowerCase();
  //yes, y, yea, yeah, no, n, nah, nope, will allow the user to continue.
  if(fromWhereLowerCase === 'yes' || fromWhereLowerCase === 'y'){
    alert('Nice! I hated living here at first but I started to enjoy it');
    // The score will increment by one if the predicted user input is used
    scoreKeeper++;
    console.log('current score is ' + scoreKeeper);
  } else if (fromWhereLowerCase === 'yea'|| fromWhereLowerCase === 'yeah'){
    console.log(fromWhereLowerCase);
    alert('That\'s awesome, but let\'s not get too ahead of ourselves. You had to answer either yes or no.');
    // The score will increment by one if the predicted user input is used
    scoreKeeper++;
    console.log('current score is ' + scoreKeeper);
  } else if(fromWhereLowerCase === 'no'|| fromWhereLowerCase === 'n'){
    console.log(fromWhereLowerCase);
    alert('No, I live in Washington.');
  } else if(fromWhereLowerCase === 'nah' || fromWhereLowerCase === 'nope'){
    console.log(fromWhereLowerCase);
    alert('Interesting I\'ll let you pass this time, but make sure you enter yes or no next time.');
    // If the user deviates from any of the choices mentioned this alert will display
  } else{
    alert('MAKE SURE TO ANSWER WITH yes or no!!!');
  }
}
// Added function to question 2
function likeStudyQ(){
  //Question 2
  let doStudy = prompt('Do you think I like to study, ' + userNameOutside + '?' + ' Answer yes or no.');
  // the user input for this variable is converted to lower case
  let doStudyLower = doStudy.toLocaleLowerCase();
  //yes, y, yea, yeah, no, n, nah, nope, will allow the user to continue.
  if(doStudyLower === 'yes' || doStudyLower === 'y'){
    alert('Nice! I like Studying but it may be hard, sometimes but I must persevere');
    //The score will add one of the predicted input above is used
    scoreKeeper++;
    console.log('current score is ' + scoreKeeper);
  } else if (doStudyLower === 'yea'|| doStudyLower=== 'yeah'){
    console.log(doStudyLower);
    alert('That\'s awesome, but let\'s not get too ahead of ourselves. You had to answer either yes or no.');
    // The score will increment by one if the predicted user input is used
    scoreKeeper++;
    console.log('current score is ' + scoreKeeper);
  } else if(doStudyLower === 'no'|| doStudyLower === 'n'){
    console.log(doStudyLower);
    alert('Well... studying can be challenging at times, but if you stick through it it will benefit you greatly!');
  } else if(doStudyLower === 'nah' || doStudyLower=== 'nope'){
    console.log(doStudyLower);
    alert('Interesting I\'ll let you pass this time, but make sure you enter yes or no next time.');
  // If the user deviates from the predicted outputs this alert message will be displayed
  } else{
    alert('MAKE SURE TO ANSWER WITH yes or no!!!');
  }
}
// Added function to question 3
function techIndustryQ(){
  //Question 3
  let workExp = prompt('Am I currently working in the tech industry?' + ' Answer with yes or no.');
  // The user input is converted into lower case letters to evaluate
  let workExpLower = workExp.toLocaleLowerCase();
  //yes, y, yea, yeah, no, n, nah, nope, will allow the user to continue.
  if(workExpLower === 'yes' || workExpLower === 'y'){
    alert('Nope! One day I\'ll be able to be in the tech industry.');
  } else if (workExpLower === 'yea'|| workExpLower === 'yeah'){
    console.log(workExpLower);
    alert('That\'s awesome, but let\'s not get too ahead of ourselves. You had to answer either yes or no.');
  } else if(workExpLower === 'no'|| workExpLower === 'n'){
    console.log(workExpLower);
    alert('And that is why I am here! Let us work hard to achieve our desire job!');
    // The score will increment by one if the predicted user input is used
    scoreKeeper++;
    console.log('current score is ' + scoreKeeper);
  } else if(workExpLower === 'nah' || workExpLower === 'nope'){
    console.log(workExpLower);
    alert('Interesting I\'ll let you pass this time, but make sure you enter yes or no next time.');
    // The score will increment by one if the predicted user input is used
    scoreKeeper++;
    console.log('current score is ' + scoreKeeper);
  // If the user deviates from the predicted outputs this alert message will be displayed
  } else{
    alert('MAKE SURE TO ANSWER WITH yes or no!!!');
  }
}
//Added function to question 4
function goalInlineQ(){
  //Question 4
  let goalInline = prompt('Am I inline with my goals?' + ' Answer with yes or no');
  // The user input will be converted into lower case letters to evaluate
  let goalInlineLower = goalInline.toLocaleLowerCase();
  //yes, y, yea, yeah, no, n, nah, nope, will allow the user to continue.
  if(goalInlineLower === 'yes' || goalInlineLower === 'y'){
    alert('That is good to hear. I just have to make sure to keep chasing after it!');
    // The score will increment by one if the predicted user input is used
    scoreKeeper++;
    console.log('current score is ' + scoreKeeper);
  } else if (goalInlineLower === 'yea'|| goalInlineLower === 'yeah'){
    console.log(goalInlineLower);
    alert('That\'s awesome, but let\'s not get too ahead of ourselves. You had to answer either yes or no.');
    // The score will increment by one if the predicted user input is used
    scoreKeeper++;
    console.log('current score is ' + scoreKeeper);
  } else if(goalInlineLower === 'no'|| goalInlineLower === 'n'){
    console.log(goalInlineLower);
    alert('Well that does\'nt sound too pleaseing');
  } else if(goalInlineLower === 'nah' || goalInlineLower === 'nope'){
    console.log(goalInlineLower);
    alert('Interesting I\'ll let you pass this time, but make sure you enter yes or no next time.');
  // If the user deviates from the predicted outputs this alert message will be displayed
  } else{
    alert('MAKE SURE TO ANSWER WITH yes or no!!!');
  }
}
//Added function to question 5
function workOutQ(){
  //Question 5
  let workOut = prompt('Do you think I Enjoy working out?' + ' Answer with yes or no.');
  // User input is converted into lower case to evaluate
  let workOutLower = workOut.toLocaleLowerCase();
  //yes, y, yea, yeah, no, n, nah, nope, will allow the user to continue.
  if(workOutLower === 'yes' || workOutLower === 'y'){
    alert('Awesome yeah! Working out even 10 minutes a day provides you with may health benefits!');
    // The score will increment by one if the predicted user input is used
    scoreKeeper++;
    console.log('current score is ' + scoreKeeper);
  } else if (workOutLower === 'yea'|| workOutLower === 'yeah'){
    console.log(workOutLower);
    alert('That\'s awesome, but let\'s not get too ahead of ourselves. You had to answer either yes or no.');
    // The score will increment by one if the predicted user input is used
    scoreKeeper++;
    console.log('current score is ' + scoreKeeper);
  } else if(workOutLower === 'no'|| workOutLower === 'n'){
    console.log(workOutLower);
    alert('Well, sometimes, but I will do my best to squeeze a work out in!');
  } else if(workOutLower === 'nah' || workOutLower === 'nope'){
    console.log(workOutLower);
    alert('Interesting I\'ll let you pass this time, but make sure you enter yes or no next time.');
  //If the user deviates from the predicted outputs this alert message will be displayed
  } else{
    alert('MAKE SURE TO ANSWER WITH yes or no!!!');
  }
}
//Added function to question 6
function visitCountryScale(){
  // The number within the scale which describes how bad I want to visit another country.
  let myNum =7;
  // This variable will determine the users chances to guess the number sotred in myNum
  let tries = 4;
  // This loop will run as long as the tries variable is greather than 0
  while(tries > 0) {
  // This is the prompt that will show to the user and is put inside the loop so that it will show again once the loop is run again
    let numberScale = prompt('On a scale from 1 - 10, how badly do you think I want to visit another country?');
    // If the user guesses myNum correctly an alert message will display, telling the user congratulations and what the number was as well, and then break after the input so it does not run the loop again.
    if(numberScale == myNum){
      alert('Congratualtions! My number was ' + myNum);
      //score is incremented by one with the right answer
      scoreKeeper++;
      console.log('current score is ' + scoreKeeper);
      break;
    }
    // If the user guesses a number smaller than myNum, then it will alert the user that it is too low, as well as decrement the variable tries
    if(numberScale < myNum){
      tries--;
      alert('You guessed too low! You have ' + tries + ' trys left!');
      console.log('The number guessed by the user that is too small is: ' + numberScale);
      console.log('logs how many trys are left' + tries);
      //If the user guesses a number larger than myNum, then it will alert the user that it is too large, as well as decrement the variable tries
    } else if(numberScale > myNum){
      tries--;
      alert('You guessed too High! You have ' + tries +' trys left!');
      console.log('The number guessed by user that was too large is: ' + numberScale);
      console.log('logs how many trys are left' + tries);
    }
  }
  // once the tries variable has been decremented to 0, it will alert the user that they are out of trys and also display the myNum
  if(tries === 0){
    alert('Sorry you have no more trys left! The correct answer was ' + myNum);
  }
}
//Added function to question 7
function supplementGuess(){
  // This array contains all the correct answer to my question on line 191
  let myQuestionArr = ['protein', 'vitamins', 'pre-workout', 'creatine', 'nitric-oxide', 'amino-acids'];
  // this is the amount of attempts give to the user
  let attempts = 6;
  // this will be set to false until the correct answer is given
  let userGuessedRight = false;
  // as long as the attempts are greater than 0 the loop will continue
  while(attempts > 0){
    let guessMySupplement = prompt('Hello ' + userNameOutside + ' What do you think one of my favorite supplements are?');
    // this is the nested for loop that will go through my correct answers array seen in line 185
    for(let index = 0; index < guessMySupplement.length; index++){
      // if any of the guesses matches any value of the array, it is the right answer
      if(guessMySupplement === myQuestionArr[index]){
        alert('congratulations! You actually got one right!');
        console.log('User input was:', guessMySupplement);
        console.log('This is the current index of the array ' + myQuestionArr[index]);
        //this is set to true because it was the correct answer
        userGuessedRight = true;
        // attempts will be set to 0 to get out of the loop
        attempts = '0';
        // score increments by 1
        scoreKeeper++;
        console.log('current score is ' + scoreKeeper);
      }
    }
    // this is a statement for if the user guesses wrong and the attempts will decrement
    if(userGuessedRight === false){
      console.log('This is what the user inputted' + guessMySupplement);
      alert('Sorry you guessed wrong try again! You have ' + attempts + ' tries left.');
      attempts--;
    }
  }
  //when the user reaches 0 attempts the alert will display and the array will display
  if(attempts === 0){
    alert('Sorry you are all out of tries! My favorite supplements were ' + myQuestionArr);
  }
}
// created a variable to get usersName from userInputName function
let userNameOutside = userInputName();
//greeting the user function
helloUser();
//Do I live in WA question 1 function
liveInWaQ();
//Do I like to study question 2 function
likeStudyQ();
//Do I work in tech question 3 function
techIndustryQ();
//Are my goals inline question 4 function
goalInlineQ();
//Do I like to work out question 5 function
workOutQ();
//scale to 1-10 question 6 function
visitCountryScale();
//guess the supplement in array question 7 function
supplementGuess();
// alert message will display user the score for all the questions they got right out of the total of 7 questions
alert('Thank you for playing my guessing game! your score throughout this journey was ' + scoreKeeper + ' out of 7 questions.');
