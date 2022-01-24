const faders = document.querySelectorAll('.fade-in');

// Scrolling observer
const appearObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            // wait a 0.2s delay
            setTimeout(() => {
                entry.target.classList.add('appear');
                appearObserver.unobserve(entry.target);
            }, 200);
        }
    });
});

faders.forEach((fader) => {
    appearObserver.observe(fader);
});