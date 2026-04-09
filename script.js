const bgMusic = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");

// Unmute + ensure play on first interaction
document.addEventListener("click", () => {
  bgMusic.muted = false;
  bgMusic.play().catch(err => console.log(err));
}, { once: true });

