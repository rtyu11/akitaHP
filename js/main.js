document.addEventListener('DOMContentLoaded', () => {
    // Loader
    const loader = document.getElementById('loader');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000); // Simulate a bit of loading for effect
    });

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');

        // Simple mobile menu styling override (inline for simplicity in this logic)
        if (navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(15, 23, 42, 0.98)';
            navLinks.style.padding = '2rem';
            navLinks.style.textAlign = 'center';
        } else {
            navLinks.style = ''; // Reset
        }
    });

    // Smooth Scrolling for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.section-title, .card, .about-text, .recruit-info, .safety-content h2, .safety-content p, .safety-list li');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Add specific animation class style dynamically
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .animate-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);

    // Contact Form Submission (GAS)
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    // ★ REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT URL ★
    const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic Validation
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // UI Feedback
        const submitBtn = form.querySelector('.btn-submit');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 送信中...';
        submitBtn.disabled = true;
        formStatus.textContent = '';
        formStatus.style.color = 'inherit';

        // NOTE: If you haven't deployed the script yet, this will fail or log to console.
        // For local testing without a real backend, we simulate success if URL is placeholder.
        if (SCRIPT_URL.includes('YOUR_GOOGLE_APPS_SCRIPT')) {
            setTimeout(() => {
                showSuccess();
                console.warn('Form submitted in demo mode. Set SCRIPT_URL to real endpoint.');
            }, 1500);
            return;
        }

        fetch(SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'no-cors', // Important for GAS
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                showSuccess();
            })
            .catch(error => {
                console.error('Error:', error);
                formStatus.textContent = '送信に失敗しました。時間をおいて再度お試しください。';
                formStatus.style.color = '#ef4444';
                resetBtn();
            });

        function showSuccess() {
            formStatus.textContent = 'お問い合わせありがとうございます。送信が完了しました。';
            formStatus.style.color = '#10b981'; // Green
            form.reset();
            resetBtn();
        }

        function resetBtn() {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
});
