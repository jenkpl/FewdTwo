//In this part of the assignment you will explore what you’ve learned so far about 
//variables, prompts, conditionals, operators, math, 
//and more to create a “coin flip game”. To complete the game follow the steps outlined
// below:

let coinFlip = Math.round(Math.random());
let choice = prompt("write heads or tails");
let heads = false;
let choiceNum;
if (choice == "heads") {
    choiceNum = 1; //heads is 1
}
else if(choice === "tails"){
    choiceNum = 0;  //tails is 0
}

if (choiceNum == coinFlip && choice === "heads") {
    alert(" The flip was heads and you chose heads...you win\!");
}
if (coinFlip == choiceNum && choice === "tails") {
    alert(" The flip was tails and you chose tails...you win\!");
}
if (coinFlip == 0 && choiceNum == 1){
    alert(" The flip was tails and you chose heads...you lose\!");
}
if (coinFlip == 1 && choiceNum == 0){
    alert(" The flip was heads and you chose tails...you lose\!");
}
console.log(coinFlip);
console.log(choice);
console.log(choiceNum);