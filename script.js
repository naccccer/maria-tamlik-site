document.addEventListener('DOMContentLoaded', () => {

    // --- SLIDER LOGIC ---
    const slides = document.querySelectorAll('.slider-item');
    let currentSlide = 0;
    const slideInterval = 6000; // Change slide every 6 seconds

    function nextSlide() {
        // Hide current slide
        slides[currentSlide].classList.remove('active');

        // Move to the next index, or wrap around
        currentSlide = (currentSlide + 1) % slides.length;

        // Show new current slide
        slides[currentSlide].classList.add('active');
    }

    // Start the slider auto-play
    if (slides.length > 1) {
        setInterval(nextSlide, slideInterval);
    }

    // --- CONTACT FORM LOGIC ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.querySelector('.form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            // Simple validation check
            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value) {
                    isValid = false;
                }
            });

            if (isValid) {
                // Simulate success
                formStatus.textContent = 'Application received. A representative will contact you shortly.';
                formStatus.style.color = 'var(--color-primary)'; // Use Maria Green for success
                formStatus.style.display = 'block';

                // Clear the form fields
                this.reset();

                // Hide status message after a few seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 8000);

            } else {
                formStatus.textContent = 'Please complete all required fields.';
                formStatus.style.color = 'red';
                formStatus.style.display = 'block';
            }
        });
    }

    // --- GENERAL INTERACTIVITY (Optional) ---
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
