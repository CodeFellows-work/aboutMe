'use srict';
// intro welcoming alert
alert('Hello and Welcome to my about me webpage. You\'ll get to know a bit about me, but first let me get to know you!');

//declaring a username variable for user name input
let userName = prompt('Firstly, what is your name?');

// will console log the user's name
console.log(userName);

// will alert with hello and the inputted username
alert('Hello! ' + userName);

// will prompt the user to answer yes or no
let fromWhere = prompt('So ' + userName + ', do you live in Washington? Answers must be yes or no');

// will console log the answer
console.log(fromWhere);

// will change the answer to a lower case y or n
let fromWhereLowerCase = fromWhere.toLocaleLowerCase();

//yes, y, yea, yeah, no, n, nah, nope, will allow the user to continue, else the page will refresh and user will start over
if(fromWhereLowerCase === 'yes' || fromWhereLowerCase === 'y'){
  alert('Nice! Me too! I also have a story about that');
} else if (fromWhereLowerCase === 'yea'|| fromWhereLowerCase === 'yeah'){
  console.log(fromWhereLowerCase);
  alert('That\'s awesome, but let\'s not get too ahead of ourselves. You had to answer either yes or no.');
} else if(fromWhereLowerCase === 'no'|| fromWhereLowerCase === 'n'){
  console.log(fromWhereLowerCase);
  alert('That\'s cool too. I wonder if my state has a better football team than yours... hmm...');
} else if(fromWhereLowerCase === 'nah' || fromWhereLowerCase === 'nope'){
  console.log(fromWhereLowerCase);
  alert('Interesting I\'ll let you pass this time, but make sure you enter yes or no next time.');
} else{
  alert('MAKE SURE TO ANSWER WITH yes or no!!!');
  location.reload();
}

//Question 2
let doStudy = prompt('Do you like to study, ' + userName + '?' + ' Answer yes or no.');

let doStudyLower = doStudy.toLocaleLowerCase();

if(doStudyLower === 'yes' || doStudyLower === 'y'){
  alert('Nice! Studying may be hard but you must persevere');
} else if (doStudyLower === 'yea'|| doStudyLower=== 'yeah'){
  console.log(doStudyLower);
  alert('That\'s awesome, but let\'s not get too ahead of ourselves. You had to answer either yes or no.');
} else if(doStudyLower === 'no'|| doStudyLower === 'n'){
  console.log(doStudyLower);
  alert('Well studying can be challenging at times, but if you stick through it it will benefit you greatly!');
} else if(doStudyLower === 'nah' || doStudyLower=== 'nope'){
  console.log(doStudyLower);
  alert('Interesting I\'ll let you pass this time, but make sure you enter yes or no next time.');
} else{
  alert('MAKE SURE TO ANSWER WITH yes or no!!!');
  location.reload();
}

//Question 3
let workExp = prompt('Are you currently working in the tech industry?' + ' Answer with yes or no.');

let workExpLower = workExp.toLocaleLowerCase();


if(workExpLower === 'yes' || workExpLower === 'y'){
  alert('Nice! One day I\'ll be able to be in the tech industry.');
} else if (workExpLower === 'yea'|| workExpLower === 'yeah'){
  console.log(workExpLower);
  alert('That\'s awesome, but let\'s not get too ahead of ourselves. You had to answer either yes or no.');
} else if(workExpLower === 'no'|| workExpLower === 'n'){
  console.log(workExpLower);
  alert('And that is why were here! Let us work hard to achieve our desire job!');
} else if(workExpLower === 'nah' || workExpLower === 'nope'){
  console.log(workExpLower);
  alert('Interesting I\'ll let you pass this time, but make sure you enter yes or no next time.');
} else{
  alert('MAKE SURE TO ANSWER WITH yes or no!!!');
  location.reload();
}

//Question 4
let goalInline = prompt('Are you inline with your goals?' + ' Answer with yes or no');

let goalInlineLower = goalInline.toLocaleLowerCase();

if(goalInlineLower === 'yes' || goalInlineLower === 'y'){
  alert('That is good to hear. If you are inline with your goals just make sure to keep chasing after it!');
} else if (goalInlineLower === 'yea'|| goalInlineLower === 'yeah'){
  console.log(goalInlineLower);
  alert('That\'s awesome, but let\'s not get too ahead of ourselves. You had to answer either yes or no.');
} else if(goalInlineLower === 'no'|| goalInlineLower === 'n'){
  console.log(goalInlineLower);
  alert('That\'s fine for now. Just ensure that you vision your success and want it. Then strive for it!');
} else if(goalInlineLower === 'nah' || goalInlineLower === 'nope'){
  console.log(goalInlineLower);
  alert('Interesting I\'ll let you pass this time, but make sure you enter yes or no next time.');
} else{
  alert('MAKE SURE TO ANSWER WITH yes or no!!!');
  location.reload();
}

//Question 5

let workOut = prompt('Do you Enjoy working out?' + ' Answer with yes or no.');

let workOutLower = workOut.toLocaleLowerCase();

if(workOutLower === 'yes' || workOutLower === 'y'){
  alert('Awesome! Working out even 10 minutes a day provides you with may health benefits!');
} else if (workExpLower === 'yea'|| workOutLower === 'yeah'){
  console.log(workOutLower);
  alert('That\'s awesome, but let\'s not get too ahead of ourselves. You had to answer either yes or no.');
} else if(workOutLower === 'no'|| workOutLower === 'n'){
  console.log(workOutLower);
  alert('Working out may reduce many health risks, but if it is not your cup of tea maybe try walking once in a while :)');
} else if(workOutLower === 'nah' || workOutLower === 'nope'){
  console.log(workOutLower);
  alert('Interesting I\'ll let you pass this time, but make sure you enter yes or no next time.');
} else{
  alert('MAKE SURE TO ANSWER WITH yes or no!!!');
  location.reload();
}
alert('Reach for the stars! ' + userName);
