// Example data to populate car2ds
const cardsData = [
    {
        title: "Chatique",
        image: "chatique.jpg",
        description: "A simple yet functional chatting app with a unique design.",
        link: "http://localhost:5173/chatique/"
    },
    {
        title: "Quantum Exhibit",
        image: "quantumExhibit.png",
        description: "Fusing physics and web development to craft elegant physics simulations.",
        link: "physics/"
    }
];

// Function to create and append cards
const createCards = (data) => {
    const grid = document.getElementById("card-container");

    data.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        cardElement.innerHTML = `
        <a href="${card.link}" class="card-link">
                <img src="${card.image}" alt="${card.title}">
            <div class="card-content">
                <h3>${card.title}</h3>
                <p>${card.description}</p>
            </div>
        </a>
      `;

        grid.appendChild(cardElement);
    });
};

// Populate cards on page load
createCards(cardsData);
