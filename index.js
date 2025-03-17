function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // Fetch books from API
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); // Convert response to JSON
      })
      .then(data => renderBooks(data)) // Pass JSON data to renderBooks
      .catch(error => console.error("Error fetching books:", error)); // Log errors
}

// Function to render book titles in the DOM
function renderBooks(books) {
  const bookList = document.getElementById("book-list"); // Ensure this element exists in HTML
  bookList.innerHTML = ""; // Clear previous content

  books.forEach(book => {
      const li = document.createElement("li");
      li.textContent = book.name; // Display book title
      bookList.appendChild(li);
  });
}

// Run function when page loads
document.addEventListener("DOMContentLoaded", fetchBooks);
