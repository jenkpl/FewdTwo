//Usage: Use simple conditional statements
//Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.
let num1 = prompt("Enter a number.");
let num2 = prompt("Enter another number.");
if(num1 == num2){
    document.write( "The numbers are equal.");
}
if( num1 > num2){
        document.write( num1 + ' is the larger number.');
}
if(num2 > num2){
        document.write( num2 + ' is the larger number.');
}



