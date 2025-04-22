// Search Functionality (Example)
function searchGames() {
  const searchTerm = document.querySelector('.search-bar input').value;
  if (searchTerm) {
    window.location.href = `search_results.html?q=${searchTerm}`;
  }
}
