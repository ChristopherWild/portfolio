const totalPages = 8;
let currentPage = 1;
const sound = new Audio("audio/page.mp3");

function updateBook() {
  for (let i = 1; i <= totalPages; i++) {
    const page = document.getElementById("page" + i);
    if (i < currentPage) {
      page.classList.add("flipped");
    } else {
      page.classList.remove("flipped");
    }
  }
}

function nextPage() {
  if (currentPage < totalPages + 1) {
    sound.currentTime = 0;
    sound.play();
    currentPage++;
    updateBook();
  }
}

function prevPage() {
  if (currentPage > 1) {
    sound.currentTime = 0;
    sound.play();
    currentPage--;
    updateBook();
  }
}

/* Keyboard Navigation */
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextPage();
  if (e.key === "ArrowLeft") prevPage();
});

/* Initialize */
updateBook();

