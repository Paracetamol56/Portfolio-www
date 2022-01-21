const carroussel = document.querySelector(".carroussel");

const interval = setInterval(() => {
    next();
}, 10000);

function next() {
    // Put last element of the carroussel in the first position
    carroussel.insertBefore(carroussel.lastElementChild, carroussel.firstElementChild);

    // Assing classes to the 3 first elements
    carroussel.children[3].classList = "prev carroussel-card";
    carroussel.children[2].classList = "act carroussel-card";
    carroussel.children[1].classList = "next carroussel-card";
    carroussel.children[4].classList = "hide carroussel-card";
}

function prev() {
    // Put first element of the carroussel in the last position
    carroussel.appendChild(carroussel.firstElementChild);

    // Assing classes to the 3 first elements
    carroussel.children[0].classList = "hide carroussel-card";
    carroussel.children[1].classList = "next carroussel-card";
    carroussel.children[2].classList = "act carroussel-card";
    carroussel.children[3].classList = "prev carroussel-card";
}

// Event listener on carroussel click
carroussel.addEventListener("click", function (e) {
    // get the fisrt e parent with class carroussel-card
    var card = e.target;
    var limit = 4;
    while (!card.classList.contains("carroussel-card")) {
        card = card.parentElement;
        limit--;
        if (limit <= 0) {
            return;
        }
    }

    if (card.classList.contains("next")) {
        next();
    } else if (card.classList.contains("prev")) {
        prev();
    }
});
