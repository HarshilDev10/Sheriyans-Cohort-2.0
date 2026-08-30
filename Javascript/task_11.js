// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

let attempts = 0;

let password = "Harshil";

let userpassword = prompt("Enter Password:");
attempts++;

while (password !== userpassword){
    if(attempts === 3){
        console.error('Account Locked!');
        break;
    }
    userpassword = prompt("Enter Password:");
    attempts++;
}

if(password === userpassword){
    console.log("Access Granted!")
}



