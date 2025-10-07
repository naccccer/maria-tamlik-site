document.addEventListener('DOMContentLoaded', () => {
    // 1. Handle Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.querySelector('.form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the default form submission

            // Simple form validation check (can be more robust)
            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value) {
                    isValid = false;
                }
            });

            if (isValid) {
                // Simulate a successful application submission
                formStatus.textContent = 'Thank you for your application. We will review your profile and contact you shortly.';
                formStatus.style.color = 'var(--color-primary)';
                formStatus.style.display = 'block';

                // Clear the form fields
                this.reset();

                // Hide status message after a few seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 8000);

            } else {
                formStatus.textContent = 'Please fill out all fields.';
                formStatus.style.color = 'red';
                formStatus.style.display = 'block';
            }
        });
    }

    // 2. Add an interactive effect to the navigation links (optional)
    const navLinks = document.querySelectorAll('.navbar nav a:not(.btn)');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Simple visual feedback on click
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add more JavaScript features here as your site grows (e.g., scroll effects, modals).
});
