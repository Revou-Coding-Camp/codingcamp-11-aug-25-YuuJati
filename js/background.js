// BINTANG JATUH

function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');

    star.style.top = Math.random() * window.innerHeight / 2 + 'px';
    star.style.left = window.innerWidth + 'px';

    document.body.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, 1500);
}

// BINTANG JATUH RANDOM
setInterval(() => {
    if (Math.random() > 0.5) {
        createShootingStar();
    }
}, 1000);

// ==== Bintang berkedip ====
function createTwinkleStars(count = 150) {
    const container = document.querySelector('.twinkle-stars');
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('twinkle-star');

        // Posisi random
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';

        // Delay animasi random supaya gak sinkron semua
        star.style.animationDelay = (Math.random() * 2) + 's';

        container.appendChild(star);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createTwinkleStars();
});
