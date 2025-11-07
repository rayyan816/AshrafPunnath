// Function to handle the scroll-based animation (smooth fade-in)
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that should be animated
    const animatedSections = document.querySelectorAll('.animated-section');

    // Options for the Intersection Observer
    // Triggers when the element is 100px from the bottom of the screen.
    const observerOptions = {
        root: null, 
        rootMargin: '0px 0px -100px 0px', 
        threshold: 0.1 // Triggers when 10% of the element is visible
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the element is currently intersecting (visible)
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                // Stop observing the element once it has animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply the observer to all selected elements
    animatedSections.forEach(section => {
        observer.observe(section);
    });
});