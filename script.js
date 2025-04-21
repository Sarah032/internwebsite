document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const params = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = 'Sending...';
        submitButton.disabled = true;

        emailjs.send("service_9nf2jgn", "template_717td5r", params)
            .then(function (response) {
                alert("Your message has been sent successfully!");
                contactForm.reset();
            })
            .catch(function (error) {
                alert("Failed to send the message. Please try again later.");
                console.error(error);
            })
            .finally(function () {
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            });
    });
});
