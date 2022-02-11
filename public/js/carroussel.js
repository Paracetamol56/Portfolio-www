const carroussel = document.querySelector(".carroussel");

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

function fillCarrousselContent() {
    const carrousselList = $(".carroussel");

    $.ajax({
        url: '/content/projects',
        type: 'GET',
        success: function (data) {
            data = data.slice(0, 5);
            $.each(data, function (index, value) {
                value = value[0];
                console.log(value);
                carrousselList.append(
                    "<li class=\"carroussel-card hide\">" +
                    "<img class=\"carroussel-card-thumbnail\"" +
                    "src=\"" + value.image + "\" alt=\"thumbnail\">" +
                    "<div class=\"carroussel-card-content\">" +
                    "<h3 class=\"carroussel-card-header\">" +
                    "<span class=\"carroussel-card-header-number\">" + value.id.toString() + ".</span> " + value.title +
                    "</h3>" +
                    "<p class=\"carroussel-card-desc\">" + value.subtitle + "</p>" +
                    "<a class=\"carroussel-card-button\" href=\"/project?id=" + value.id + "\">VOIR PLUS <i class=\"fas fa-chevron-right\"></i></a>" +
                    "</div>" +
                    "</li>"
                );
            });

            // Initialization
            carroussel.children[3].classList = "prev carroussel-card";
            carroussel.children[2].classList = "act carroussel-card";
            carroussel.children[1].classList = "next carroussel-card";
        }
    });
}

fillCarrousselContent();

setInterval(next, 10000);
