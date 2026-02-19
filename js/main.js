// Basic JavaScript for the downgraded site
// No complex animations or scroll observers needed.

document.addEventListener('DOMContentLoaded', function () {
    console.log('Website loaded.');

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('送信機能は現在デモモードです。実際には送信されません。');
        });
    }
});
