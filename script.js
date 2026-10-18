
function addTrip(destination) {
    const tripList = document.getElementById("trip-list");
    const emptyMessage = document.getElementById("empty-message");

    emptyMessage.style.display = "none";

    const item = document.createElement("li");
    item.textContent = destination + " ";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        item.remove();

        if (tripList.children.length === 0) {
            emptyMessage.style.display = "block";
        }
    });

    item.appendChild(removeButton);
    tripList.appendChild(item);
}
const searchInput = document.getElementById("searchInput");
const destinationCards = document.querySelectorAll(".destination-card");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    destinationCards.forEach(function (card) {
        const destinationName =
            card.querySelector("h3").textContent.toLowerCase();

        if (destinationName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.category;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        destinationCards.forEach(function (card) {
            const cardCategory = card.dataset.category;
            const searchText = searchInput.value.toLowerCase();
            const destinationName =
                card.querySelector("h3").textContent.toLowerCase();

            const matchesCategory =
                selectedCategory === "all" ||
                cardCategory === selectedCategory;

            const matchesSearch =
                destinationName.includes(searchText);

            if (matchesCategory && matchesSearch) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
