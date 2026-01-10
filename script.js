let currentPage = 1;
const totalPages = 8;

function showPage(n) {
  for (let i = 1; i <= totalPages; i++) {
    document.getElementById("page" + i).classList.remove("active");
  }
  document.getElementById("page" + n).classList.add("active");
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}
