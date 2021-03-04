let ready = prompt("Hi! Are you ready to play? Answer yes or no.");
if(ready == "yes") {
    alert(`You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. \nYou are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. \nYour back is against the wall.`);
}
else {
    alert("Thanks. play again sometime.")
}
    let directionOne = prompt("Which direction would you like to head (please enter forward, left, or right)");
    switch (directionOne) {
        case "forward":
            alert("You walk 100 yards and safely make your way out of the cave.");
            break;
        case "left":
            alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
            break;
        case "right":
            alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
            break;
        default :
            alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
            break;
}
    let ratingUser = prompt("The game is now over. \nPlease enter your rating from 1-10.");
    if(ratingUser>= 6 && ratingUser  <=10){
            alert("Thanks! Please play again!");
}   
    else if(ratingUser < 6){
        alert("Thank you for your assessment. I'm working hard to improve the game.") ;
    }   
    else{
    alert("Thanks for playing. The game has ended.");
    } 
    



