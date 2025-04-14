<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>EST</title>
  <link rel="stylesheet" href="like.css" />
  <link rel="stylesheet" href="style.css" />
  <style>
    .logo h1 {
      color: #D9D9D9;
    }

    .section {
      scroll-margin-top: 120px;
    }

    .like-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 30px;
      position: relative;
    }

    #likeButton {
      background-color: transparent;
      border: 2px solid #F75DB1;
      border-radius: 50%;
      padding: 15px;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      background-image: url('serce1.png');
      background-size: cover;
      background-position: center;
      overflow: hidden;
    }

    #likeButton:hover {
      background-image: url('serce2.png');
      transform: scale(1.1);
    }

    #likeButton.liked {
      background-image: url('serce2.png');
      background-color: #FF3B30;
      border-color: #FF3B30;
      pointer-events: none;
      transform: scale(0.95);
    }

    #likeCount {
      font-size: 20px;
      font-weight: bold;
      color: #D9D9D9;
    }

    .heart {
      position: absolute;
      width: 20px;
      height: 20px;
      background-image: url('serce2.png');
      background-size: cover;
      animation: heartFly 1s ease-out forwards;
      pointer-events: none;
    }

    @keyframes heartFly {
      0% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
      100% {
        opacity: 0;
        transform: scale(1.8) translateY(-100px);
      }
    }
  </style>
</head>
<body>
  <header class="header">
    <div class="header-spacer"></div>
    <div class="logo">
      <img src="logo.png" alt="Logo EST" class="logo-img" />
      <h1>EST</h1>
    </div>
    <nav class="nav">
      <ul>
        <li><a href="#home">Co to za projekt?</a></li>
        <li><a href="#ankieta">Ankieta</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
  </header>

  <section id="home" class="section" style="padding-top: 180px;">
    <div class="content">
      <h2>Co to za projekt?</h2>
      <p>
        EST to projekt, którego celem jest stworzenie sieci stacji wynajmu
        powerbanków – zapewniamy dostęp do energii niezależnie od miejsca i
        czasu!
      </p>

      <div class="like-container">
        <button id="likeButton">
          <img src="serce1.png" alt="Like" class="like-img" id="likeImage" style="display: none;">
        </button>
        <span id="likeCount">0</span>
      </div>
    </div>
  </section>

  <section id="ankieta" class="section about-section">
    <h2>Ankieta</h2>
    <p>
      Jesteś zainteresowany projektem? Odpowiedz na poniższą ankietę by dostać
      darmową godzinę użytkowania gdy projekt ruszy!
    </p>
    <a href="https://go-est.github.io/ANKIETA/" target="_blank">
      <button>Przejdź do ankiety</button>
    </a>
  </section>

  <section id="contact" class="section contact-section">
    <h2>Kontakt</h2>
    <p>Chciałbyś się skontaktować? Napisz do mnie!</p>
    <button id="copyButton">Skopiuj e-mail</button>
    <p id="successMsg" style="display:none;">Skopiowane!</p>
    <p id="email">kontakt@go-est.pl</p>
  </section>

  <footer>
    <p>&copy; 2025 EST. Wszelkie prawa zastrzeżone.</p>
  </footer>

  <script>
    const likeButton = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');

    let liked = localStorage.getItem('liked') === 'true';
    let count = localStorage.getItem('likeCount') || 0;

    likeCount.textContent = count;

    if (liked) {
      likeButton.classList.add('liked');
    }

    likeButton.addEventListener('click', () => {
      if (!liked) {
        liked = true;
        count++;
        localStorage.setItem('liked', 'true');
        localStorage.setItem('likeCount', count);
        likeCount.textContent = count;
        likeButton.classList.add('liked');

        // Animacja serduszek
        for (let i = 0; i < 6; i++) {
          const heart = document.createElement('div');
          heart.classList.add('heart');

          // losowe przesunięcia
          const offsetX = Math.random() * 80 - 40;
          const offsetY = Math.random() * 20 + 30;
          heart.style.left = `calc(50% + ${offsetX}px)`;
          heart.style.bottom = `20px`;

          likeButton.parentElement.appendChild(heart);

          setTimeout(() => {
            heart.remove();
          }, 1000);
        }
      }
    });
  </script>
</body>
</html>
