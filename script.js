document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const testimonialSlider = document.querySelector('.testimonials-slider');
    if (testimonialSlider) {
        let currentTestimonial = 0;
        const testimonials = testimonialSlider.querySelectorAll('.testimonial-card');

        testimonials.forEach((card, index) => {
            if (index !== 0) {
                card.style.display = 'none';
            }
        });

        setInterval(() => {
            testimonials[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].style.display = 'block';
        }, 5000); // Change testimonial every 5 seconds
    }

    const faders = document.querySelectorAll('.categories-section, .featured-products-section, .benefits-section, .testimonials-section, .newsletter-section');

    const appearOptions = {
        threshold: 0.2, // When 20% of the item is visible
        rootMargin: "0px 0px -50px 0px" // Start observing earlier/later
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});