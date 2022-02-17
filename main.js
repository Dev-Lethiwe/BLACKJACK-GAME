//create two variables, firstCard and secondCard
//set their values to a random number between 2-11
//create a variable, sum and let it be the sum of the 2 variables

let age, firstCard, secondCard, sum, hasBlackjack, isAlive, score;

//min and max values for deck of cards
const min = 1;
const max = 12;


age = 21;

firstCard = 10;
secondCard = 14; 
sum = firstCard + secondCard;

hasBlackjack = false;
isAlive = true;
score = 5;

//Declare a variable called message with empty string
let message = "";
//reassign message variable to "we're logging out"
message = "We're logging out";

if (age < 21) {
    message = "Sorry, VIPs only!"
} else {
    message = "Welcome to Blackjack!";

    if (sum <= 20) {
        message = "Almost there...Do you want to draw  another card? 😃"; 
    } else if (sum === 21) {
        message = "YOU'VE GOT BLACKJACK!! YEY! 🥳";

        hasBlackjack = true;

    } else {
        message = "You're too high my friend...GAME OVER for you 😭";
        isAlive = false;
    }
}

console.log(hasBlackjack);
console.log(isAlive);

//log out message variable
console.log(message);

//my addition
if (hasBlackjack === true) {
    score++;
} else if (isAlive === false && score > 0) {
    score--;
} 

console.log(score); //




