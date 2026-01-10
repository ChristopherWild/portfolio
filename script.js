let currentPage = 1;
const totalPages = 8;

function nextPage() {
  if (currentPage <= totalPages) {
    document.getElementById("page" + currentPage).classList.add("flipped");
    currentPage++;
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    document.getElementById("page" + currentPage).classList.remove("flipped");
  }
}
