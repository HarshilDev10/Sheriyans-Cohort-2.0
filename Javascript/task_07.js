// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”


let age = +prompt("What is your age?");

if(age >= 18 ){
    console.log("Eligible for voting!");
}else{
    console.log("Not Eligible for voting");
}