// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

let password = "Harshil"

let userpassword = prompt("Enter Password :")

while(password !== userpassword ){
    console.log("Access Denied!")
    userpassword = prompt("Enter Password :")
}
console.log("Access Granted!")