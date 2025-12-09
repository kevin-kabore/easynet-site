/**
 * EasyNet - Main JavaScript
 * Handles navigation, form submission, and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileNav();
    initContactForm();
    initSmoothScroll();
});


/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger to X
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}


/**
 * Contact Form Handling
 * Uses Formspree for form submission
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('contact-success');

    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();

            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;

            // Show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Envoi en cours...';

            try {
                const formData = new FormData(form);

                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Show success message
                    form.style.display = 'none';
                    if (successMessage) {
                        successMessage.style.display = 'block';
                    }

                    // Reset form
                    form.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.');
            } finally {
                // Restore button state
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }
        });
    }
}


/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                event.preventDefault();

                // Get header height for offset
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;

                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}


/**
 * Utility: Track download clicks (for analytics)
 * Can be extended to integrate with Google Analytics or other services
 */
function trackDownload(productName) {
    console.log(`Download clicked: ${productName}`);

    // Example: Google Analytics event tracking (if GA is installed)
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'download', {
    //         'event_category': 'Software',
    //         'event_label': productName
    //     });
    // }
}

// Attach download tracking to download buttons
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const product = this.dataset.product;
        if (product) {
            trackDownload(product);
        }
    });
});
