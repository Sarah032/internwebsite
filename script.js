


(function() {
    emailjs.init("YOR_PUBLIC_KEY");
})();

const form = document.getElementById("form")
const userName = document.getElementById("name")
const userEmail = document.getElementById("email")
const userMessage = document.getElementById("message")

let isValid = false

const templateParams = {
    name: userName,
    email: userEmail,
    message: userMessage
}


function validateForm() {
    isValid = form.checkValidity()

    if (isValid === false) {
        message.textContent = "Fill the fields!"
        message.style.color = "red"
        messageContainer.style.borderColor = "red"
    } else if (isValid === true) {
        message.textContent = "Message is sent!"
        message.style.color = "green"
        message.style.borderColor = "green"
    }
}

function processFormData(e) {
    e.preventDefault()

    validateForm()

    if(isValid === true) {
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response){
                message.textContent ="Thank you very much we will reply to you as soon as possible";
                message.style.color = 'green';
                messageContainer.style.borderColor = 'green';
                console.log('SUCCES', response.status, response.text);
            }, function(error){
                console.log("FAILED", error);
            })
    }
}

form.addEventListener('submit', processFormData);