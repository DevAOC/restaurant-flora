var emailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
function giveprompt() {
    let email = prompt("Please enter your email address.");
    if (emailFormat.test(email)) {
        let result = confirm("Is " + email + " the correct email?");
        if (result == true) {
            alert("You have signed up to our newsletter!");
        } else {
            giveprompt();
        }
    } else {
        alert("Invalid entry");
        giveprompt();
    }
}
