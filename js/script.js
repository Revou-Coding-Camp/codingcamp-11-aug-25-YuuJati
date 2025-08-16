welcomeSpeech();
function welcomeSpeech() {
    let userName = prompt("Please enter your name:");
    if (userName !== '') {
        document.getElementById("user-greeting").textContent = userName;
    }
}

function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("yourmessage").value;
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
    } else {
        alert("Please fill in all fields.");
    }
}
