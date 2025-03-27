document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form element
    const form = document.getElementById('contactForm');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get values from form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Log the values to the console
        console.log('Form Submission:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Optional: Reset the form after logging
        form.reset();
    });
});