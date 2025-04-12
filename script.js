document.getElementById('copyButton').addEventListener('click', function() {
    const email = "example@example.com"; // Zastąp to odpowiednim adresem e-mail
    navigator.clipboard.writeText(email)
        .then(() => {
            const successMsg = document.getElementById('successMsg');
            successMsg.textContent = 'Skopiowano!';
            successMsg.style.display = 'block';
            setTimeout(() => successMsg.style.display = 'none', 3000);
        })
        .catch(() => {
            const successMsg = document.getElementById('successMsg');
            successMsg.textContent = 'Błąd kopiowania!';
            successMsg.style.display = 'block';
            setTimeout(() => successMsg.style.display = 'none', 3000);
        });
});
