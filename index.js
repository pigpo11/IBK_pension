// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Simple AOS (Animate On Scroll) implementation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// Form submission
const form = document.getElementById('pensionForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic animation for feedback
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = '전송 중...';
        btn.disabled = true;

        setTimeout(() => {
            alert('상담 신청이 완료되었습니다. 전문 상담사가 곧 연락드리겠습니다.');
            btn.innerText = '신청 완료';
            form.reset();
        }, 1500);
    });
}

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
