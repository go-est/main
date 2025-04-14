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



// Pobieranie elementów
let likeButton = document.getElementById('likeButton');
let likeCountElement = document.getElementById('likeCount');
let likeImage = document.getElementById('likeImage');

// Sprawdzamy, czy zapisane dane istnieją w localStorage
let likeCount = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount')) : 0; // Jeśli nie ma, zaczynamy od 0
let isLiked = localStorage.getItem('isLiked') === 'true'; // Sprawdzamy, czy użytkownik już kliknął

// Ustawienie początkowego licznika polubień
likeCountElement.textContent = likeCount;

// Jeśli użytkownik już polubił, zablokuj przycisk i zmień serduszko
if (isLiked) {
  likeButton.disabled = true;
  likeButton.classList.add('liked');
}

// Obsługa kliknięcia
likeButton.addEventListener('click', function() {
  if (!isLiked) {
    likeCount++; // Zwiększ liczbę kliknięć
    likeCountElement.textContent = likeCount;

    // Zapisujemy dane do localStorage
    localStorage.setItem('likeCount', likeCount); // Zapisz liczbę kliknięć
    localStorage.setItem('isLiked', true); // Zapisz stan przycisku (czy kliknięty)

    // Zablokuj przycisk po kliknięciu
    likeButton.disabled = true;
    likeButton.classList.add('liked');
  }
});
