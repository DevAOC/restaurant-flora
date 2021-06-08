function giveprompt() {
    const emailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let email = prompt("Please enter your email address.");
    if (emailFormat.test(email) == true) {
        let result = confirm("Is " + email + " the correct email?");
        if (result == true) {
            alert("You have signed up to our newsletter!");
        } else if (result == false) {
            giveprompt();
        }
    } else if (!(emailFormat.test(email))) {
        alert("Invalid entry");
        giveprompt();
    }
}
