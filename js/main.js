document.addEventListener('DOMContentLoaded', () => {
    // Loader
    const loader = document.getElementById('loader');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 800);
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

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            hamburger.classList.toggle('active');

            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(255, 255, 255, 0.98)';
                navLinks.style.padding = '2rem';
                navLinks.style.textAlign = 'center';
                navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            } else {
                navLinks.style = '';
            }
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                if (window.innerWidth <= 768 && navLinks) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                // Trigger counter animation if it's a number element
                if (entry.target.classList.contains('stat-num') || entry.target.classList.contains('count')) {
                    animateValue(entry.target);
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Targets to animate on scroll
    const targets = document.querySelectorAll('.animate-on-scroll, .section-title, .section-desc, .stat-num, .fleet-card, .feature-box, .wellness-card, .recruit-content');

    targets.forEach((el, index) => {
        // Add base class if not present
        if (!el.classList.contains('animate-on-scroll')) {
            el.classList.add('animate-on-scroll');
        }

        // Stagger animations for grid items
        if (el.classList.contains('fleet-card')) {
            el.style.transitionDelay = `${(index % 4) * 0.1}s`;
        } else if (el.classList.contains('feature-box') || el.classList.contains('wellness-card')) {
            el.style.transitionDelay = `${(index % 3) * 0.1}s`;
        }

        observer.observe(el);
    });

    // Number Counter Animation Function
    function animateValue(obj) {
        let text = obj.innerText;
        // Extract number and suffix (like '+', '台')
        let value = parseInt(text.replace(/[^0-9]/g, ''));
        let suffix = text.replace(/[0-9]/g, '');

        if (isNaN(value)) return;

        let startTimestamp = null;
        const duration = 2000;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            obj.innerText = Math.floor(easeOutQuart * value) + suffix;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Parallax Effect for Hero
    const heroBg = document.querySelector('.hero-bg-img');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
            heroBg.style.transform = `scale(1.1) translateY(${scrollValue * 0.3}px)`;
        });
    }

    // Form Handling (Visual Only)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn-submit');
            const originalText = btn.innerText;

            btn.innerText = '送信中...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.innerText = '送信完了';
                btn.style.background = '#10b981'; // Green
                document.getElementById('formStatus').innerText = 'お問い合わせありがとうございます。';
                document.getElementById('formStatus').style.color = '#10b981';
                form.reset();

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }
});
