// List of books to display in the catalogue

// NOTE: AI was used to generate the book data for demonstration purposes. In a real application, this data would likely come from an API or database.
const BOOKS_EN = [
	{
		id: 1,
		title: "The Midnight Library",
		author: "Matt Haig",
		category: "Fiction",
		price: 21.99,
		image: "../images/midnight.jpg",
		description:
			"A woman discovers a magical library where she can explore alternate versions of her life.",
	},
	{
		id: 2,
		title: "Where the Crawdads Sing",
		author: "Delia Owens",
		category: "Fiction",
		price: 21.99,
		image: "../images/crawdads.jpg",
		description:
			"A young woman raised in isolation becomes entangled in a murder investigation in the marsh.",
	},
	{
		id: 3,
		title: "Alone With You in the Ether",
		author: "Olivie Blake",
		category: "Fiction",
		price: 17.99,
		image: "../images/alone.jpg",
		description:
			"Two emotionally complex strangers form an intense connection shaped by love and vulnerability.",
	},
	{
		id: 4,
		title: "The Silent Patient",
		author: "Alex Michaelides",
		category: "Fiction",
		price: 19.99,
		image: "../images/silent.jpg",
		description:
			"A therapist becomes obsessed with uncovering why a woman stopped speaking after a shocking crime.",
	},
	{
		id: 5,
		title: "Educated",
		author: "Tara Westover",
		category: "Non-Fiction",
		price: 24.99,
		image: "../images/educated.jpg",
		description:
			"A memoir about a woman who grows up isolated from society and eventually escapes through education.",
	},
	{
		id: 6,
		title: "The Psychology of Money",
		author: "Morgan Housel",
		category: "Non-Fiction",
		price: 22.99,
		image: "../images/money.jpg",
		description:
			"This book explores how people think about money and how behaviour shapes financial success.",
	},
	{
		id: 7,
		title: "Atomic Habits",
		author: "James Clear",
		category: "Non-Fiction",
		price: 25.99,
		image: "../images/habits.jpg",
		description:
			"A practical guide to building better habits through small and consistent daily changes.",
	},
	{
		id: 8,
		title: "The Let Them Theory",
		author: "Mel Robbins",
		category: "Non-Fiction",
		price: 28.99,
		image: "../images/let-them.jpg",
		description:
			"A self-development book about letting go of control over others to create more peace and clarity.",
	},
	{
		id: 9,
		title: "Project Hail Mary",
		author: "Andy Weir",
		category: "Sci-Fi/Fantasy",
		price: 22.99,
		image: "../images/hail-mary.jpg",
		description:
			"A lone astronaut must save humanity while solving a scientific mystery in deep space.",
	},
	{
		id: 10,
		title: "The Night Circus",
		author: "Erin Morgenstern",
		category: "Sci-Fi/Fantasy",
		price: 19.99,
		image: "../images/circus.jpg",
		description:
			"Two magicians are drawn into a mysterious competition set inside a dreamlike travelling circus.",
	},
	{
		id: 11,
		title: "Dune",
		author: "Frank Herbert",
		category: "Sci-Fi/Fantasy",
		price: 23.99,
		image: "../images/dune.jpg",
		description:
			"A young nobleman is drawn into politics, prophecy, and survival on a harsh desert planet.",
	},
	{
		id: 12,
		title: "A Court of Thorns and Roses",
		author: "Sarah J. Maas",
		category: "Sci-Fi/Fantasy",
		price: 19.99,
		image: "../images/thorns.jpg",
		description:
			"A young woman is pulled into a dangerous faerie world where power and romance collide.",
	},
	{
		id: 13,
		title: "Ru",
		author: "Kim Thúy",
		category: "Local Authors",
		price: 19.99,
		image: "../images/ru.jpg",
		description:
			"A poetic story about migration, memory, and building a new life in Quebec.",
	},
	{
		id: 14,
		title: "Albertine in Five Times",
		author: "Michel Tremblay",
		category: "Local Authors",
		price: 19.99,
		image: "../images/albertine.jpg",
		description:
			"A powerful play that explores one woman's life through five different stages of herself.",
	},
	{
		id: 15,
		title: "Lullabies for Little Criminals",
		author: "Heather O'Neill",
		category: "Local Authors",
		price: 21.99,
		image: "../images/lullabies.jpg",
		description:
			"A young girl grows up in Montreal while navigating instability, love, and survival.",
	},
	{
		id: 16,
		title: "The Enigma of the Return",
		author: "Dany Laferrière",
		category: "Local Authors",
		price: 19.99,
		image: "../images/enigma.jpg",
		description:
			"A reflective novel about identity, exile, grief, and the meaning of returning home.",
	},
];

// Export the BOOKS array for use in other modules
export const BOOKS = BOOKS_EN;
