const totalPages = 8;
let currentPage = 1;
const sound = new Audio("audio/page.mp3");

function nextPage() {
  if (currentPage < totalPages) {
    sound.currentTime = 0;
    sound.play();
    document.getElementById("page" + currentPage).classList.add("flipped");
    currentPage++;
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    sound.currentTime = 0;
    sound.play();
    document.getElementById("page" + currentPage).classList.remove("flipped");
  }
}

/* Keyboard support */
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") nextPage();
  if (e.key === "ArrowLeft") prevPage();
});

function updateThickness() {
  const ratio = (currentPage - 1) / (totalPages - 1);
  const thickness = 1 - ratio * 0.75;
  document.querySelector(".book").style.setProperty("--thickness", thickness);
}

const originalNext = nextPage;
const originalPrev = prevPage;

nextPage = function() {
  originalNext();
  updateThickness();
};

prevPage = function() {
  originalPrev();
  updateThickness();
};

updateThickness();
