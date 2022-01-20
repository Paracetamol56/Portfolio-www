const $ = selector => {
    return document.querySelector(selector);
};

// setInterval(() => {
//     next();
// }, 5000);

function next() {
    console.log("next");

    // Put last element of the carroussel in the first position
    console.log($(".carroussel").children);
    $(".carroussel").insertBefore($(".carroussel").lastElementChild, $(".carroussel").firstElementChild);
    console.log($(".carroussel").children);

    // for each element in the carroussel
    // assign classe hide to every carroussel child
    for (let i = 0; i < $(".carroussel").children.length; i++) {
        $(".carroussel").children[i].classList = "hide carroussel-card";
    }

    // Assing classes to the 3 first elements
    $(".carroussel").children[0].classList = "next carroussel-card";
    $(".carroussel").children[1].classList = "act carroussel-card";
    $(".carroussel").children[2].classList = "prev carroussel-card";
}

function prev() {
    console.log("prev");

    // Put first element of the carroussel in the last position
    console.log($(".carroussel").children);
    $(".carroussel").appendChild($(".carroussel").firstElementChild);
    console.log($(".carroussel").children);

    // for each element in the carroussel
    // assign classe hide to every carroussel child
    for (let i = 0; i < $(".carroussel").children.length; i++) {
        $(".carroussel").children[i].classList = "hide carroussel-card";
    }

    // Assing classes to the 3 first elements
    $(".carroussel").children[0].classList = "next carroussel-card";
    $(".carroussel").children[1].classList = "act carroussel-card";
    $(".carroussel").children[2].classList = "prev carroussel-card";
}

$(".prev").addEventListener("click", () => {
    prev();
});

$(".next").addEventListener("click", () => {
    next();
});
