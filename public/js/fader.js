const faders = document.querySelectorAll('.fade-in');

// Scrolling observer
const appearObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearObserver.unobserve(entry.target);
        }
    });
});

faders.forEach((fader) => {
    appearObserver.observe(fader);
});