// function to get the json data from the server with the id in parameter
function renderProject(id) {
    // get the json data from the server
    $.getJSON("/content/projects/" + id + ".json", function (data) {
        data = data[0];
        console.log(data);

        // Title and subtitle
        const title = $("#titles").find("h1");
        const subtitle = $("#titles").find("h2");
        title.html(title.html().replace("{{title}}", data.title));
        subtitle.html(subtitle.html().replace("{{subtitle}}", data.subtitle));

        // Info section
        const infoContainer = $("#info").find(".info-container");
        // for each element in data.infos
        $.each(data.infos, function (index, value) {
            var icon = "<i class=\"fas fa-question\"></i>";
            if (value.type === "fa") {
                icon = "<i class=\"fas " + value.icon + "\"></i>";
            }
            else if (value.type === "svg") {
                icon = value.icon;
            }

            console.log(icon);

            infoContainer.append(
                "<div class=\"project-info\">" +
                "    <div class=\"project-info-background\"></div>" +
                "    <h3>" + index + "</h3>" +
                icon +
                "    <p>" + value.text + "</p>" +
                "</div>"
            );
        });
    });
}

// Get the ip parameter in the page uri
function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    return url.match(new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")) ?
        decodeURIComponent(url.match(new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"))[2]) :
        null;
};

renderProject(getParameterByName('id'));