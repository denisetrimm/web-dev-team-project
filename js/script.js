import { BOOKS } from "./data.js"; // Import the book data from the data module
/* FILTERING FUNCTIONALITY
This section will implement the functionality to filter books by genre when the user clicks on a genre button.
*/

// Function to render books in the catalogue
let renderBooks = (books) => {
	// Get the book grid container and clear any existing content
	const bookGrid = document.getElementById("book-grid");
	bookGrid.innerHTML = ""; // Clear existing books

	// Loop through the books and create a card for each one
	books.forEach((book) => {
		const bookCard = document.createElement("article");
		// Add appropriate classes and attributes for styling and filtering
		bookCard.classList.add("book-card");
		bookCard.setAttribute("data-filter", book.category.toLowerCase());
		// Set the inner HTML of the book card with the book's details
		// AI suggestion - image wrapper to ensure all cover images are displayed consistently
		bookCard.innerHTML = `
            <div class="book-image-wrapper">
                <img src="${book.image}" alt="Cover of ${book.title}">
            </div>
            <div class="book-card-content">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <p class="book-description">${book.description}</p>
                <p><strong>Genre:</strong> ${book.category}</p>
                <p class="book-price"><strong>Price:</strong> $${book.price.toFixed(2)}</p>
                <button aria-label="View details for ${book.title}">View Details</button>
            </div>
        `;
		// Append the book card to the book grid container
		bookGrid.appendChild(bookCard);
	});
};

// Initial render of books in the catalogue
renderBooks(BOOKS);

/* Add Genre Filtering Functionality */
// Select all filter buttons
const filterButtons = document.querySelectorAll(".filter-button");
// Add click event listeners to each filter button
filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		// Remove "active" class from all buttons and add it to the clicked button for visual feedback
		filterButtons.forEach((btn) => btn.classList.remove("active"));
		button.classList.add("active");
		// Get the genre to filter by from the button's data attribute
		const genre = button.getAttribute("data-filter");
		// Render all books if "All" is selected
		if (genre === "all") {
			renderBooks(BOOKS);
			// Otherwise, filter the books by the selected genre
		} else {
			const filteredBooks = BOOKS.filter(
				(book) => book.category.toLowerCase() === genre,
			);
			// Render the filtered list
			renderBooks(filteredBooks);
		}
	});
});

/* TODO - Implement theme toggle functionality

*/
const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
