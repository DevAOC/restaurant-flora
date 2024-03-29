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
promptAmount();

function promptAmount() {
    let amount = prompt("How many iterations would you like?");
    if (amount != null) {
        for (let x = 0; x < amount; x++) {
            add_img();
            document.write(x + 1);
        }
    } else {
        promptAmount();
    }
}

function add_img() { 
	var img = document.createElement('img'); 
    img.src = 'flora-example-img.jpeg';
    img.width = 330;
	document.getElementById('content').appendChild(img);
}
