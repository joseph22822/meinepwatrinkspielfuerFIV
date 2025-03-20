const drinks = [
    { name: "Shot", amount: () => Math.floor(Math.random() * 3) + 1 + " Shots", icon: "🥃" },
    { name: "Mischung", amount: () => Math.floor(Math.random() * 251) + 50 + "ml", icon: "🍹" },
    { name: "Hoibe", amount: () => Math.floor(Math.random() * 401) + 100 + "ml", icon: "🍺" }
];

let cardHistory = [];
let currentIndex = -1;



function drawCard() {
    const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
    const randomPerson = Math.floor(Math.random() * 5) + 1; 

    const map = new Map();
    map.set(1, "josi");
    map.set(2, "lucky");
    map.set(3, "manu");
    map.set(4, "leitner");
    map.set(5, "marvin");

    const newCard = {
        icon: randomDrink.icon,
        text: `${randomDrink.name} für ${map.get(randomPerson)}`,
        amount: randomDrink.amount()
    };

    cardHistory.push(newCard);
    currentIndex = cardHistory.length - 1;
    updateCardDisplay();
}

function updateCardDisplay() {
    if (currentIndex >= 0 && currentIndex < cardHistory.length) {
        const card = cardHistory[currentIndex];
        document.getElementById("symbol").textContent = card.icon;
        document.getElementById("exercise").textContent = card.text;
        document.getElementById("reps").textContent = card.amount;
        document.getElementById("card").style.display = "block";
    }
}

function nextCard() {
    if (currentIndex < cardHistory.length - 1) {
        currentIndex++;
        updateCardDisplay();
    }
}

function previousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCardDisplay();
    }
}

function shuffleCards() {
    cardHistory = [];
    currentIndex = -1;
    drawCard();
}

document.addEventListener("DOMContentLoaded", drawCard);
