import { BOOKS_EN, BOOKS_FR } from "./data.js"; // Import the book data from the data module
import { LABELS } from "./labels.js"; // Import the language labels from the labels module
// ============================================================
// GLOBAL VARIABLES
// ============================================================
// NOTE: AI suggestion to use window.pathname to determine which book data to load
const isFR = window.location.pathname.includes("/fr/");
const BOOKS = isFR ? BOOKS_FR : BOOKS_EN;
const TEXT = isFR ? LABELS.fr : LABELS.en; // Use the appropriate language labels based on the current language

// ============================================================
// BOOK FILTERING FUNCTIONALITY
// ============================================================

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
                <img src="${book.image}" alt="${TEXT.coverOf} ${book.title}">
            </div>
            <div class="book-card-content">
                <h3>${book.title}</h3>
                <p class="book-meta">${book.author}</p>
                <p class="book-meta">${book.description}</p>
                <p class="book-meta"><strong>${TEXT.genre}:</strong> ${book.category}</p>
                <p class="book-meta"><strong>${TEXT.price}:</strong> $${book.price.toFixed(2)}</p>
                <button aria-label="${TEXT.viewDetails} ${book.title}">${TEXT.viewDetails}</button>
				<button class="add-cart-btn" data-book-id="${book.id}" aria-label="${TEXT.addToCart} ${book.title}">
                        ${TEXT.addToCart}
                    </button>
            </div>
        `;
		// Append the book card to the book grid container
		bookGrid.appendChild(bookCard);
	});
	// Add event listener to the "Add to Cart" button for each book card
	document.querySelectorAll(".add-cart-btn").forEach((button) => {
		button.addEventListener("click", () => {
			const bookId = Number(button.getAttribute("data-book-id"));
			addToCart(bookId);
		});
	});
};

// Check if book grid exists
if (document.getElementById("book-grid")) {
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
}

// ============================================================
// THEME TOGGLE FUNCTIONALITY
// ============================================================

const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Check if theme toggle and icon exist on page
if (themeToggleBtn && themeIcon) {
	// Add the "dark" class and save to localStorage
	const changeToDarkMode = () => {
		document.body.classList.add("dark");
		localStorage.setItem("theme", "dark");
	};
	// Remove the "dark" class and save to localStorage
	const changeToLightMode = () => {
		document.body.classList.remove("dark");
		localStorage.setItem("theme", "light");
	};
	// Update the theme icon based on the current theme
	const updateThemeIcon = () => {
		if (!themeIcon) return; // Ensure the theme icon element exists
		themeIcon.textContent = document.body.classList.contains("dark")
			? "☀️"
			: "🌙";
	};

	// Event listener for theme toggle button
	themeToggleBtn.addEventListener("click", () => {
		document.body.classList.contains("dark")
			? changeToLightMode()
			: changeToDarkMode();
		updateThemeIcon(); // Update the theme icon after toggling
	});

	// On page load, check for saved theme preference and apply it
	const currentTheme = localStorage.getItem("theme");
	if (currentTheme === "dark") {
		changeToDarkMode();
	} else {
		changeToLightMode();
	}
	updateThemeIcon();
}

// ============================================================
// LANGUAGE TOGGLE FUNCTIONALITY
// ============================================================
const langToggleBtn = document.getElementById("lang-toggle");

// Check if language toggle button exists
if (langToggleBtn) {
	langToggleBtn.addEventListener("click", () => {
		let nextPath;
		// Choose the new language based on current language. If isFR, switch to English, and vice versa.
		const nextLang = isFR ? "en" : "fr";
		// replace the language in the URL path
		if (nextLang == "en") {
			nextPath = window.location.pathname.replace("/fr/", "/en/");
		} else {
			nextPath = window.location.pathname.replace("/en/", "/fr/");
		}
		// Go to the new path
		window.location.href = nextPath;
	});
}
// TODO - Potentially save language in LocalStorage.

// ============================================================
// CART MANAGEMENT FUNCTIONALITY
// ============================================================

// Check if cart already exists in localStorage, if not create an empty cart
const getCart = () => {
	const cart = localStorage.getItem("cart");
	// If the cart exists parse and return it, otherwise return an empty array
	return cart ? JSON.parse(cart) : [];
};

// Save the cart to localStorage
const setCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

const addToCart = (bookId) => {
	const cart = getCart();
	// Check if the book is already in the cart
	const itemExists = cart.find((book) => book.id === bookId);
	if (itemExists) {
		// If it exists, increase the quantity
		itemExists.quantity += 1;
	} else {
		// If it doesn't exist, check if the book exists in the BOOKS array and add the book to the cart
		const newBook = BOOKS.find((b) => b.id === bookId);
		newBook && cart.push({ id: newBook.id, quantity: 1 });
	}
	setCart(cart);
};

const removeFromCart = (bookId) => {
	let cart = getCart();
	// Filter out the book with the given ID from the cart and save the updated cart
	cart = cart.filter((book) => book.id !== bookId);
	setCart(cart);
};

const updateCartBookQuantity = (bookId, qtyToChange) => {
	let cart = getCart();
	// Find the book in the cart and update its quantity
	const existingBook = cart.find((book) => book.id === bookId);
	// If the book is not found in the cart, return
	if (!existingBook) return;

	existingBook.quantity += qtyToChange;
	// If the quantity drops to 0 or below, remove the book from the cart
	if (existingBook.quantity <= 0) {
		removeFromCart(bookId);
		return;
	}
	setCart(cart);
};

const clearCart = () => {
	localStorage.removeItem("cart");
};

const findBookById = (id) => {
	return BOOKS.find((book) => book.id === id);
};

// ============================================================
// CART PAGE RENDERING FUNCTIONALITY
// ============================================================

const refreshCartPage = () => {
	const cartItemsSection = document.getElementById("cart-items");
	const cart = getCart();
	// If the cart section doesn't exist, don't try the rest (wrong page).
	if (!cartItemsSection) return;

	if (cart.length === 0) {
		// If the cart is empty, show a message and CTA back to books
		cartItemsSection.innerHTML = `
			<div class="empty-cart">
				<p>${TEXT.cartEmpty}</p>
				<a href="books.html" class="button-primary">${TEXT.browseBooks}</a>
			</div>
		`;
		return;
	}

	let finalPrice = 0;
	// If the cart is not empty, render the cart items
	const cartDetails = cart
		.map((cartBook) => {
			const book = findBookById(cartBook.id);
			// If the book is not found, skip it
			if (!book) return "";

			// calculate the total price for this book based on quantity
			const totalBookPrice = book.price * cartBook.quantity;
			// add the total price of this book(s) to the final price
			finalPrice += totalBookPrice;

			return `
			<tr>
				<td>
					<img src="${book.image}" alt="${book.title}" />
				</td>
				<td>
					<h3>${book.title}</h3>
					<p>${book.author}</p>
				</td>
				<td>$${book.price.toFixed(2)}</td>
				<!-- AI suggestion - combine quantity controls into a single table cell for better UX and cleaner code + data change attributes to specify the change in quantity instead of separate increase/decrease buttons -->
				<td>
					<button class="quantity-btn" data-book-id="${book.id}" data-change="-1" aria-label="Decrease quantity of ${book.title}">-</button>
					<span>${cartBook.quantity}</span>
					<button class="quantity-btn" data-book-id="${book.id}" data-change="1" aria-label="Increase quantity of ${book.title}">+</button>
				</td>
				
				<td>$${totalBookPrice.toFixed(2)}</td>
				<td>
					<button class="remove-btn" data-book-id="${book.id}" aria-label="${TEXT.remove} ${book.title}">${TEXT.remove}</button>
				</td>
			</tr>
				
			`;
		})
		.join("");

	// Add the cart details to the page
	// Create the headers then add the cart details
	// AI help to structure the table into two parts
	cartItemsSection.innerHTML = `
	<table>
		<thead>
			<tr>
				<th></th>
				<th>${TEXT.items}</th>
				<th>${TEXT.price}</th>
				<th>${TEXT.quantity}</th>
				<th>${TEXT.subtotal}</th>
				<th>${TEXT.remove}</th>
			</tr>
		</thead>
		<tbody>
			${cartDetails}
		</tbody>
	</table>
	<hr />
	<h3>${TEXT.orderSummary}</h3>
	<div>
		<span>${TEXT.total}</span>
		<span>$${finalPrice.toFixed(2)}</span>
	</div>
	<button id="clear-btn" class="button-secondary">${TEXT.clearCart}</button>
	<button id="checkout-btn" class="button-primary">${TEXT.checkout}</button>
	`;
	// Add event listeners for the buttons
	// AI help to combine increase/decrease quantity buttons into one event listener using data attributes to specify the change in quantity
	document.querySelectorAll(".quantity-btn").forEach((button) => {
		button.addEventListener("click", () => {
			const bookId = Number(button.getAttribute("data-book-id"));
			const change = Number(button.getAttribute("data-change"));
			updateCartBookQuantity(bookId, change);
			refreshCartPage(); // Refresh the cart page to show updated quantities and prices
		});
	});
	// Event listener for remove buttons
	document.querySelectorAll(".remove-btn").forEach((button) => {
		button.addEventListener("click", () => {
			const bookId = Number(button.getAttribute("data-book-id"));
			removeFromCart(bookId);
			refreshCartPage();
		});
	});
	// Event listener for clear cart button
	document.getElementById("clear-btn").addEventListener("click", () => {
		clearCart();
		refreshCartPage();
	});
};

// Initial call to prompt to render the cart page
refreshCartPage();
