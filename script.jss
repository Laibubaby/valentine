function moveButton() {
    const noBtn = document.getElementById('noButton');
    // Random coordinates, keeping button inside screen bounds
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

// Mobile-specific touch handling
document.getElementById('noButton').addEventListener('touchstart', function(e) {
    e.preventDefault(); 
    moveButton();
});

function celebrate() {
    // 1. Play Music
    const music = document.getElementById('proposalMusic');
    music.play().catch(e => console.log("Autoplay blocked, but clicking works!"));

    // 2. Change Text
    document.getElementById('proposal-box').innerHTML = "<h1>Yay! I love you! See you on the 14th! 🌹✨</h1>";

    // 3. Reveal Photos
    document.getElementById('secret-gallery').style.display = "block";

    // 4. Hearts
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 100);
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);

}
