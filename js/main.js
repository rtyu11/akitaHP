document.addEventListener('DOMContentLoaded', () => {
    // Loader with enhanced animation
    const loader = document.getElementById('loader');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
                // Trigger initial animations after loader
                document.body.classList.add('loaded');
            }, 600);
        }, 1000);
    });

    // Sticky Navbar with enhanced effects
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll direction
        if (currentScroll > lastScroll && currentScroll > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });

    // Mobile Menu with animation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');

            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active')) {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });

    // Smooth Scrolling with easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
                // Scroll with offset for fixed navbar
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

                smoothScrollTo(targetPosition, 1000);
            }
        });
    });

    // Custom smooth scroll function with easing
    function smoothScrollTo(targetPosition, duration) {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Easing function (easeInOutCubic)
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        requestAnimationFrame(animation);
    }

    // Enhanced Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -80px 0px"
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
    const targets = document.querySelectorAll('.animate-on-scroll, .section-title, .section-desc, .stat-num, .fleet-card, .feature-box, .wellness-card, .recruit-content, .safety-point, .scene-item, .company-layout, .job-item');

    targets.forEach((el, index) => {
        // Add base class if not present
        if (!el.classList.contains('animate-on-scroll')) {
            el.classList.add('animate-on-scroll');
        }

        // Stagger animations for grid items
        if (el.classList.contains('fleet-card')) {
            el.style.transitionDelay = `${(index % 4) * 0.15}s`;
        } else if (el.classList.contains('feature-box')) {
            el.style.transitionDelay = `${(index % 3) * 0.15}s`;
        } else if (el.classList.contains('wellness-card')) {
            el.style.transitionDelay = `${(index % 3) * 0.15}s`;
        } else if (el.classList.contains('safety-point')) {
            el.style.transitionDelay = `${(index % 3) * 0.15}s`;
        } else if (el.classList.contains('scene-item')) {
            el.style.transitionDelay = `${(index % 4) * 0.1}s`;
        } else if (el.classList.contains('job-item')) {
            el.style.transitionDelay = `${index * 0.1}s`;
        }

        observer.observe(el);
    });

    // Number Counter Animation Function with enhanced easing
    function animateValue(obj) {
        let text = obj.innerText;
        // Extract number and suffix (like '+', '台')
        let value = parseInt(text.replace(/[^0-9]/g, ''));
        let suffix = text.replace(/[0-9]/g, '');

        if (isNaN(value)) return;

        let startTimestamp = null;
        const duration = 2500;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Easing function (easeOutExpo)
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            obj.innerText = Math.floor(easeOutExpo * value) + suffix;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Enhanced Parallax Effect for Hero
    const heroBg = document.querySelector('.hero-bg-img');
    const heroContent = document.querySelector('.hero-content');

    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
            const heroHeight = document.querySelector('.hero').offsetHeight;

            if (scrollValue < heroHeight) {
                heroBg.style.transform = `scale(1.05) translateY(${scrollValue * 0.4}px)`;
                heroContent.style.transform = `translateY(${scrollValue * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrollValue / heroHeight) * 1.5;
            }
        });
    }

    // Mouse move parallax effect for hero
    const hero = document.querySelector('.hero');
    if (hero && window.innerWidth > 1024) {
        hero.addEventListener('mousemove', (e) => {
            const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
            const yPos = (e.clientY / window.innerHeight - 0.5) * 20;

            if (heroContent) {
                heroContent.style.transform = `translate(${xPos}px, ${yPos}px)`;
            }
        });

        hero.addEventListener('mouseleave', () => {
            if (heroContent) {
                heroContent.style.transform = 'translate(0, 0)';
            }
        });
    }

    // Magnetic button effect
    const magneticButtons = document.querySelectorAll('.btn-primary, .btn-submit, .btn-contact-nav');

    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // Tilt effect for cards
    const tiltCards = document.querySelectorAll('.fleet-card, .feature-box, .wellness-card');

    if (window.innerWidth > 1024) {
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }

    // Typing effect for hero catchphrase (optional enhancement)
    const catchphrase = document.querySelector('.hero-catchphrase');
    if (catchphrase && window.innerWidth > 768) {
        const text = catchphrase.innerHTML;
        catchphrase.innerHTML = '';
        catchphrase.style.opacity = '1';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                if (text.substring(i, i + 4) === '<br>') {
                    catchphrase.innerHTML += '<br>';
                    i += 4;
                } else {
                    catchphrase.innerHTML += text.charAt(i);
                    i++;
                }
                setTimeout(typeWriter, 80);
            }
        };

        // Start typing after loader
        setTimeout(typeWriter, 1500);
    }

    // Section reveal animation with stagger
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
        const sectionHeader = section.querySelector('.section-header');
        if (sectionHeader) {
            sectionHeader.style.transitionDelay = '0.2s';
        }
    });

    // Form Handling with enhanced feedback
    const form = document.getElementById('contactForm');
    if (form) {
        const inputs = form.querySelectorAll('.form-control');

        // Add focus animations
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn-submit');
            const originalText = btn.innerText;

            // Add loading animation
            btn.innerHTML = '<span class="loading-spinner"></span> 送信中...';
            btn.disabled = true;
            btn.style.opacity = '0.8';

            setTimeout(() => {
                btn.innerHTML = '✓ 送信完了';
                btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                document.getElementById('formStatus').innerText = 'お問い合わせありがとうございます。担当者より折り返しご連絡いたします。';
                document.getElementById('formStatus').style.color = '#10b981';
                form.reset();

                // Remove focused class from all inputs
                inputs.forEach(input => {
                    input.parentElement.classList.remove('focused');
                });

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                    btn.style.opacity = '1';
                }, 4000);
            }, 2000);
        });
    }

    // Add CSS for loading spinner
    const style = document.createElement('style');
    style.textContent = `
        .loading-spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 0.8s linear infinite;
            margin-right: 8px;
            vertical-align: middle;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .form-group.focused .form-control {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 4px rgba(196, 30, 58, 0.1);
        }

        .navbar {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s ease;
        }

        body.loaded .hero-content {
            animation: heroFadeIn 1s ease-out forwards;
        }
    `;
    document.head.appendChild(style);

    // Cursor trail effect (optional, for desktop only)
    if (window.innerWidth > 1024) {
        const cursor = document.createElement('div');
        cursor.className = 'cursor-trail';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid rgba(196, 30, 58, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.15s ease;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Scale cursor on hoverable elements
        const hoverables = document.querySelectorAll('a, button, .fleet-card, .feature-box, .wellness-card');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.borderColor = 'rgba(196, 30, 58, 0.8)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.borderColor = 'rgba(196, 30, 58, 0.5)';
            });
        });
    }
});
