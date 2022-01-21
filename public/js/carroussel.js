const carroussel = document.querySelector(".carroussel");

// const interval = setInterval(() => {
//     next();
// }, 10000);

function next() {
    console.log("next");

    // Put last element of the carroussel in the first position
    carroussel.insertBefore(carroussel.lastElementChild, carroussel.firstElementChild);

    // Assing classes to the 3 first elements
    carroussel.children[1].classList = "act carroussel-card";

    carroussel.children[0].classList = "next carroussel-card";

    carroussel.children[2].classList = "prev carroussel-card";
    carroussel.children[3].classList = "hide carroussel-card";
}

function prev() {
    console.log("prev");

    // Put first element of the carroussel in the last position
    carroussel.appendChild(carroussel.firstElementChild);

    // Assing classes to the 3 first elements
    carroussel.lastElementChild.classList = "hide carroussel-card";
    carroussel.children[0].classList = "next carroussel-card";
    carroussel.children[1].classList = "act carroussel-card";
    carroussel.children[2].classList = "prev carroussel-card";
}

// Event listener on carroussel click
carroussel.addEventListener("click", function (e) {
    if (e.target.classList.contains("next")) {
        next();
    } else if (e.target.classList.contains("prev")) {
        prev();
    }
});
