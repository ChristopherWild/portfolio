const pages = document.querySelectorAll(".page");
let current = 0;

function update() {
  pages.forEach((p, i) => {
    p.style.zIndex = pages.length - i;
    if (i < current) p.classList.add("flipped");
    else p.classList.remove("flipped");
  });
}

function next() {
  if (current < pages.length) {
    current++;
    update();
  }
}

function prev() {
  if (current > 0) {
    current--;
    update();
  }
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

update();

