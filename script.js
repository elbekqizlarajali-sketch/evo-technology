
// JONLI SOAT
function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("uz-UZ");

    document.getElementById("date").textContent =
        now.toLocaleDateString("uz-UZ", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
}

updateClock();
setInterval(updateClock, 1000);


// QIDIRUV TIZIMI
const search = document.getElementById("search");
const cards = document.querySelectorAll(".searchable");
const searchResult = document.getElementById("searchResult");

search.addEventListener("input", function() {
    const query = search.value.toLowerCase().trim();
    let found = 0;

    cards.forEach(card => {
        const matches = card.textContent.toLowerCase().includes(query);

        card.style.display = matches ? "" : "none";

        if (matches && query !== "") found++;
    });

    searchResult.textContent = query === ""
        ? ""
        : found + " ta natija topildi";
});


// 10 SONIYALIK O'YIN
let score = 0;
let playing = false;
let gameTimer = null;

const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("startGame");
const clickButton = document.getElementById("clickGame");
const gameMessage = document.getElementById("gameMessage");

startButton.addEventListener("click", function() {
    clearTimeout(gameTimer);

    score = 0;
    playing = true;

    scoreDisplay.textContent = score;
    gameMessage.textContent = "Bosishni boshlang! 10 soniya!";
    startButton.disabled = true;
    clickButton.disabled = false;

    gameTimer = setTimeout(function() {
        playing = false;
        clickButton.disabled = true;
        startButton.disabled = false;
        gameMessage.textContent =
            "Vaqt tugadi! Siz " + score + " ochko yig'dingiz.";
    }, 10000);
});

clickButton.addEventListener("click", function() {
    if (!playing) return;

    score++;
    scoreDisplay.textContent = score;
});


// MUSIQA
const musicFile = document.getElementById("musicFile");
const audio = document.getElementById("audio");
const musicName = document.getElementById("musicName");

let musicURL = null;

musicFile.addEventListener("change", function() {
    const file = this.files[0];

    if (!file) return;

    if (musicURL) URL.revokeObjectURL(musicURL);

    musicURL = URL.createObjectURL(file);
    audio.src = musicURL;
    musicName.textContent = "Tanlangan musiqa: " + file.name;

    audio.load();
});


// ALOQA FORMASI
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const message = document.getElementById("userMessage").value.trim();

    document.getElementById("contactResult").textContent =
        "Rahmat, " + name + "! Xabaringiz tayyorlandi.";

    console.log("Ism:", name);
    console.log("Xabar:", message);

    contactForm.reset();
});
