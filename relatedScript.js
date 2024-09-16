document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    links.forEach(link => observer.observe(link));
});
