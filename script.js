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



let likeButton = document.getElementById('likeButton');
let likeCountElement = document.getElementById('likeCount');

// Sprawdzenie, czy dane istnieją w localStorage
let likeCount = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount')) : 0; // Ustawienie początkowej wartości
let isLiked = localStorage.getItem('isLiked') === 'true'; // Zczytanie stanu przycisku (czy kliknięty)

likeCountElement.textContent = likeCount; // Ustawienie początkowego licznika

// Zmiana grafiki i stanu przycisku
if (isLiked) {
  likeButton.classList.add('liked');
  likeButton.disabled = true; // Zablokowanie przycisku
}

// Obsługa kliknięcia
likeButton.addEventListener('click', () => {
  if (!isLiked) {
    likeCount++; // Zwiększ liczbę kliknięć
    likeCountElement.textContent = likeCount;

    // Zmiana koloru przycisku i blokowanie dalszych kliknięć
    likeButton.classList.add('liked');
    isLiked = true;

    // Zapisanie danych do localStorage
    localStorage.setItem('likeCount', likeCount); // Zapisz liczbę kliknięć
    localStorage.setItem('isLiked', true); // Zapisz, że przycisk został kliknięty

    likeButton.disabled = true; // Zablokowanie przycisku
  }
});
