// script.js
document.getElementById("copyButton").onclick = function() {
    const emailText = document.getElementById("email").innerText;
    navigator.clipboard.writeText(emailText)
        .then(() => {
            const successMsg = document.getElementById("successMsg");
            successMsg.style.display = "block";
            setTimeout(() => {
                successMsg.style.display = "none";
            }, 3000); // Ukrywa wiadomość po 3 sekundach
        })
        .catch(() => {
            alert("Nie udało się skopiować tekstu.");
        });
};




//przycisk w sekcji 1 poniżej




// Zmienna śledząca, czy przycisk został kliknięty
let isLiked = false;
let likeCount = 0;

// Wybieramy przycisk i ikonkę serca
const likeButton = document.getElementById('likeButton');
const likeIcon = document.getElementById('likeIcon');
const likeCountElement = document.getElementById('likeCount');

// Funkcja wykonująca się po kliknięciu przycisku
likeButton.addEventListener('click', () => {
  if (!isLiked) {
    // Zwiększamy licznik
    likeCount++;
    likeCountElement.textContent = likeCount;

    // Zmieniamy wygląd przycisku (serduszko na czerwono)
    likeButton.classList.add('liked');

    // Blokujemy możliwość kliknięcia po 1 razie
    isLiked = true;
  }
});
