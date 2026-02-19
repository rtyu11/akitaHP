'use strict';

// ============================
// ハンバーガーメニュー
// ============================
(function () {
    var hamburger = document.querySelector('.hamburger');
    var spNav = document.querySelector('.sp-nav');

    if (!hamburger || !spNav) return;

    hamburger.addEventListener('click', function () {
        var isOpen = hamburger.classList.toggle('is-open');
        spNav.classList.toggle('is-open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    // スマホナビのリンクをクリックしたらメニューを閉じる
    var spLinks = spNav.querySelectorAll('a');
    spLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('is-open');
            spNav.classList.remove('is-open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
})();

// ============================
// ヒーロースライダー
// ============================
(function () {
    var slides = document.querySelectorAll('.hero-slide');
    var dots   = document.querySelectorAll('.hero-dot');

    if (slides.length === 0) return;

    var current  = 0;
    var INTERVAL = 5000;
    var timer;

    // CSS animation の再トリガー: animation='none' → reflow → animation='' で確実にリセット
    function resetSlideAnimation(slide) {
        var targets = slide.querySelectorAll(
            '.hero-slide__img, .hero-caption__sub, .hero-caption__main'
        );
        targets.forEach(function (el) {
            el.style.animation = 'none';
            el.offsetWidth; // DOM reflow を強制（消してはいけない）
            el.style.animation = '';
        });
    }

    function goTo(index) {
        slides[current].classList.remove('is-active');
        if (dots[current]) dots[current].classList.remove('is-active');

        current = (index + slides.length) % slides.length;

        resetSlideAnimation(slides[current]);
        slides[current].classList.add('is-active');
        if (dots[current]) dots[current].classList.add('is-active');
    }

    function startTimer() {
        timer = setInterval(function () { goTo(current + 1); }, INTERVAL);
    }

    function resetTimer() { clearInterval(timer); startTimer(); }

    // ドットクリックで手動切り替え
    dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () { goTo(i); resetTimer(); });
    });

    startTimer();
})();

// ============================
// スクロールフェードイン
// ============================
(function () {
    if (!('IntersectionObserver' in window)) return;
    var targets = document.querySelectorAll('.section-head, .fade-in');
    if (targets.length === 0) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    targets.forEach(function (el) { observer.observe(el); });
})();

// ============================
// コンタクトフォーム
// ============================
(function () {
    var contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('お問い合わせありがとうございます。\n担当者よりご連絡いたします。');
    });
})();
