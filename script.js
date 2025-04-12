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
