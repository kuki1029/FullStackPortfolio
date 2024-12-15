// Example data to populate car2ds
const cardsData = [
    {
        title: "Chatique",
        image: "chatique.jpg",
        description: "An unique approach to a modular chatting app",
        link: "#"
    }
];

// Function to create and append cards
const createCards = (data) => {
    const grid = document.getElementById("card-container");

    data.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        cardElement.innerHTML = `
        <a href="${card.link}" class="card-link" target="_blank">
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
