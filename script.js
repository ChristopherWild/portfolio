let currentPage = 1;
const totalPages = 8;
const sound = new Audio("audio/page.mp3");

function nextPage() {
  if (currentPage < totalPages) {
    sound.currentTime = 0;
    sound.play();

    const page = document.getElementById("page" + currentPage);
    page.classList.add("flipped");

    currentPage++;
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;

    sound.currentTime = 0;
    sound.play();

    const page = document.getElementById("page" + currentPage);
    page.classList.remove("flipped");
  }
}

