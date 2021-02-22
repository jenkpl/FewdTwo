let grade = prompt("Please enter your numerical grade.");
if (grade>100 || grade <0) {
    alert("Try again. The number must be between 1-100.")
}
if (grade >=90){
    console.log("You received an A")
}
else if (grade>=80){
    console.log("You received a B")
}
else if (grade >=70){
    console.log("You received a C")
}
else if (grade >=60){
    console.log("You received a D")
}
else if (grade <60){
    console.log("You received a F")
}