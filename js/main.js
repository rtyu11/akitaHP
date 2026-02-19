'use strict';

// ============================
// ヘッダー スクロール制御
// ============================
(function () {
    var header = document.getElementById('site-header');
    if (!header) return;

    // サブページ判定（hero-slider がなければサブページ）
    var isTopPage = !!document.querySelector('.hero-slider');

    if (!isTopPage) {
        header.classList.add('is-subpage');
        return;
    }

    function onScroll() {
        if (window.scrollY > 60) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();

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
    var dots = document.querySelectorAll('.hero-dot');

    if (slides.length === 0) return;

    var current = 0;
    var INTERVAL = 6000;
    var timer;

    function resetSlideAnimation(slide) {
        var targets = slide.querySelectorAll(
            '.hero-slide__img, .hero-caption__sub, .hero-caption__main'
        );
        targets.forEach(function (el) {
            el.style.animation = 'none';
            el.offsetWidth; // reflow
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

    dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () { goTo(i); resetTimer(); });
    });

    startTimer();
})();

// ============================
// スクロールフェードイン
// ============================
(function () {
    var selector = '.section-head, .fade-in, .fade-in-left, .fade-in-right, .fade-in-scale';

    if (!('IntersectionObserver' in window)) {
        // フォールバック: 全要素を表示
        document.querySelectorAll(selector).forEach(function (el) {
            el.classList.add('is-visible');
        });
        return;
    }

    var targets = document.querySelectorAll(selector);
    if (targets.length === 0) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    targets.forEach(function (el) { observer.observe(el); });
})();

// ============================
// 保有台数 カウントアップ
// ============================
(function () {
    if (!('IntersectionObserver' in window)) return;
    var counters = document.querySelectorAll('.vehicle-item__num[data-target]');
    if (counters.length === 0) return;

    var DURATION = 1400;

    function animateCount(el) {
        var target = parseInt(el.getAttribute('data-target'), 10);
        var numEl = el.querySelector('.count-num');
        if (!numEl) return;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / DURATION, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            numEl.textContent = Math.round(eased * target);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                numEl.textContent = target;
            }
        }
        requestAnimationFrame(step);
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    counters.forEach(function (el) { observer.observe(el); });
})();

// ============================
// コンタクトフォーム
// ============================
(function () {
    var contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    // Google Apps ScriptのウェブアプリURL
    var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxGFZWP58Kg682MO3g3aiNI1IRd_6--8N5M6bcN8BaVF86uEpS4S4mtBqimTmUrurGS/exec';

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var submitBtn = contactForm.querySelector('.btn-submit');
        var originalBtnText = submitBtn.textContent;

        // 二重送信防止：ボタンを無効化
        submitBtn.disabled = true;
        submitBtn.textContent = '送信中...';

        var formData = new FormData(contactForm);
        var data = {};
        formData.forEach(function (value, key) {
            data[key] = value;
        });

        // Google Apps Scriptへデータを送信
        fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // CORSエラー回避のためno-corsを使用
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(function () {
                // 送信成功（no-corsの場合はレスポンス内容は確認できませんが、送信は完了しています）
                alert('お問い合わせありがとうございます。\n正常に送信されました。\n担当者より後ほどご連絡いたします。');
                contactForm.reset();
            })
            .catch(function (error) {
                console.error('Error!', error.message);
                alert('送信中にエラーが発生しました。お手数ですが、お電話にて直接ご連絡いただくか、しばらく経ってから再度お試しください。');
            })
            .finally(function () {
                // ボタンを元の状態に戻す
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            });
    });
})();
