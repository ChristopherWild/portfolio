let page = 0;
const sheets = [...document.querySelectorAll('.sheet')];
const sound = new Audio("audio/page.mp3");

/* Force initial stacking */
sheets.forEach((sheet, i) => {
  sheet.style.zIndex = sheets.length - i;
});

function update() {
  sheets.forEach((sheet, i) => {
    if (i < page) {
      sheet.classList.add("flipped");
      sheet.style.zIndex = i;
    } else {
      sheet.classList.remove("flipped");
      sheet.style.zIndex = sheets.length - i;
    }
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

/* Critical: lock initial state after load */
window.onload = () => update();

