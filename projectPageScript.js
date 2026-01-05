// gets our filter dropdown option
const filterSelect = document.querySelector("#filters");
// Gets all of our project boxes
const projectCards = document.querySelectorAll(".projectBox");

// When a new filter option is selcted
filterSelect.addEventListener("change", function () {
    projectCards.forEach((card) => {
        card.classList.add("hidden");
    });

    // Gets the actual value of whats currently selected
    const selected = filterSelect.value;

    // Loops through each card element
    projectCards.forEach((card) => {
        // Gets the string of all the tags
        let curTag = card.dataset.tags;
        // Creates a list from string
        let curTags = curTag.split(",");
        let contains = false;

        // Goes through list made from string and checks if the list has the currently selected filter
        curTags.forEach((tag) => {
            if (tag === selected) {
                contains = true;
            }
        })

        // If box does contain the filter it removes the hidden class incase it had it before else adds it
        if (contains) {
            card.classList.remove("hidden");

            card.classList.remove("fadeIn");
            void card.offsetWidth;
            card.classList.add("fadeIn");
        }
    });
});