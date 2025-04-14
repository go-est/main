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




document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');

    if (localStorage.getItem('liked') === 'true') {
        likeButton.disabled = true;
        likeButton.innerText = '💖 Dziękujemy!';
        likeCount.textContent = localStorage.getItem('likeCount') || '1';
    }

    likeButton.addEventListener('click', () => {
        let count = parseInt(localStorage.getItem('likeCount') || '0');
        count++;

        likeButton.innerHTML = '💖 Dziękujemy!';
        likeButton.disabled = true;
        likeCount.textContent = count;

        localStorage.setItem('liked', 'true');
        localStorage.setItem('likeCount', count);
    });
});
