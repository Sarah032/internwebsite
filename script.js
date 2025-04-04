document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
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
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                console.log('Your message has been sent successfully!');
                contactForm.reset();
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                console.log('Failed to send the message. Please try again later.');
            })
            .finally(function() {
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            });
    });
});