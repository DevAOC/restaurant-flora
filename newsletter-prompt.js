function giveprompt() {
    const emailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
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

function promptAmount() {
    let amount = prompt("How many iterations would you like?");
    if (amount > 0) {
        for (let x = 1; x < amount; x++) {
            add_img();
            document.write('<span>' + x + '</span>');
        }
    }
}

function add_img() { 
	var img = document.createElement('img'); 
    img.src = 'flora-example-img.jpeg';
    img.width = 168;
	document.getElementById('body').appendChild(img);
}
