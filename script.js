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


let isLiked = false;  // Sprawdzenie, czy przycisk został kliknięty
let likeCount = 0;    // Zmienna przechowująca liczbę kliknięć

const likeButton = document.getElementById('likeButton');
const likeCountElement = document.getElementById('likeCount');

likeButton.addEventListener('click', () => {
  if (!isLiked) {
    likeCount++;  // Zwiększ licznik kliknięć
    likeCountElement.textContent = likeCount;  // Zaktualizuj licznik w DOM

    // Zmiana koloru przycisku i blokada dalszych kliknięć
    likeButton.classList.add('liked');

    // Zablokowanie możliwości ponownego kliknięcia
    isLiked = true;
  }
});
