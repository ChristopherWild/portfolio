let page = 0;
const sheets = document.querySelectorAll('.sheet');
const sound = new Audio("audio/page.mp3");

function update() {
  sheets.forEach((s, i) => {
    s.style.zIndex = sheets.length - i;
    if (i < page) s.classList.add("flipped");
    else s.classList.remove("flipped");
  });
}

function next() {
  if (page < sheets.length) {
    sound.currentTime = 0;
    sound.play();
    page++;
    update();
  }
}

function prev() {
  if (page > 0) {
    sound.currentTime = 0;
    sound.play();
    page--;
    update();
  }
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

update();

