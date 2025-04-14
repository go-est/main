// ---------------- KOPIOWANIE E-MAILA ----------------
document.getElementById("copyButton").onclick = function() {
    const emailText = document.getElementById("email").innerText;
    navigator.clipboard.writeText(emailText)
        .then(() => {
            const successMsg = document.getElementById("successMsg");
            successMsg.style.display = "block";
            setTimeout(() => {
                successMsg.style.display = "none";
            }, 3000);
        })
        .catch(() => {
            alert("Nie udało się skopiować tekstu.");
        });
};

// ---------------- LIKE PRZYCISK ----------------
const likeButton = document.getElementById('likeButton');
const likeCountElement = document.getElementById('likeCount');
const likeImage = document.getElementById('likeImage');

let likeCount = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount')) : 0;
let isLiked = localStorage.getItem('isLiked') === 'true';

likeCountElement.textContent = likeCount;

if (isLiked) {
    likeButton.disabled = true;
    likeButton.classList.add('liked');
    likeImage.src = 'serce2.png';
}

// Funkcja do tworzenia lecących serduszek
function createFlyingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('flying-heart');

    const emojis = ['❤️','💙','💛','🧡','💚','💜','🤍'];
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = `${Math.random() * 80 + 10}%`;
    heart.style.animationDuration = `${1 + Math.random() * 1}s`;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
}

likeButton.addEventListener('click', function () {
    if (!isLiked) {
        likeCount++;
        likeCountElement.textContent = likeCount;
        localStorage.setItem('likeCount', likeCount);
        localStorage.setItem('isLiked', true);
        likeButton.disabled = true;
        likeButton.classList.add('liked');
        likeImage.src = 'serce2.png';

        // Uruchamiamy animację kilku serduszek
        for (let i = 0; i < 6; i++) {
            setTimeout(createFlyingHeart, i * 150);
        }
    }
});
