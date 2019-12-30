// Your code goes here
// Check login
const username1 = 'user@gmail.com';
const username2 = 'admin@gmail.com';
const five = 5;
const six =6;

let email = prompt('What is your email address? ');
let password;

if (email === '' || email === null) {
    alert('Canceled');
} else {
    if (email.length < five){
        alert('I don\'t know any emails having name length less than 5 symbols');
    } else if (email === username1 || email === username2) {
        password = prompt('Enter the password');
    } else {
        alert('I don’t know you');
    }   
} 
// Check password
let correct_pass_1 = 'UserPass';
let correct_pass_2 = 'AdminPass';

if (password === '' || password === null) {
    alert('Canceled');
} else {
    alert('Wrong password');
}
// Change the password
let chng_pass = confirm('Do you want to change your password?');

if (chng_pass) {
    let password = prompt('Enter the old password');

    if (password === '' || password === null) {
        alert('Canceled');
    }

    if (email === username1 & password === correct_pass_1 || email === username2 & password === correct_pass_2) {
         let new_pass = prompt('Enter the new password');
         if (new_pass === '' || new_pass === false){
            alert('Canceled');
         } else if (new_pass.length < six) {
            alert('It’s too short password. Sorry.');
         } else {
            let check = prompt('Enter the new password one more time');
            if (new_pass !== check) {
                alert('You wrote the wrong password.');
            } else {
                alert('You have successfully changed your password.');
            }
         }
    } else {
        alert('Wrong password');
    }
} else {
    alert('You have failed the change.');
}