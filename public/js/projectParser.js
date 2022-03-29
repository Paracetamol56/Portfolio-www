// function to get the json data from the server with the id in parameter
function renderProject(id) {
    // get the json data from the server
    $.getJSON("/content/projects/" + id + ".json", function (data) {
        data = data[0];

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

            infoContainer.append(
                "<div class=\"project-info\">" +
                "    <div class=\"project-info-background\"></div>" +
                "    <h3>" + index + "</h3>" +
                icon +
                "    <p>" + value.text + "</p>" +
                "</div>"
            );
        });

        // Image
        const image = $("#project-image");
        image.attr("src", data.image);

        // Link section
        const linkContainer = $("#links").find(".project-linklist");
        // for each element in data.links
        $.each(data.links, function (index, value) {
            if (value) {
                if (index === "github") {
                    linkContainer.append(
                        "<li class=\"project-linklist-item\">" +
                        "    <a href=\"" + value + "\" target=\"_blank\">" +
                        "        <i class=\"project-linklist-logo fab fa-github\"></i>" +
                        "        Repository GitHub" +
                        "        <i class=\"fas fa-external-link-alt\"></i>" +
                        "    </a>" +
                        "</li>"
                    );
                }
                else if (index === "website") {
                    linkContainer.append(
                        "<li class=\"project-linklist-item\">" +
                        "    <a href=\"" + value + "\" target=\"_blank\">" +
                        "        <i class=\"project-linklist-logo fas fa-globe\"></i>" +
                        "        Site Web" +
                        "        <i class=\"fas fa-external-link-alt\"></i>" +
                        "    </a>" +
                        "</li>"
                    );
                }
                else if (index === "youtube") {
                    linkContainer.append(
                        "<li class=\"project-linklist-item\">" +
                        "    <a href=\"" + value + "\" target=\"_blank\">" +
                        "        <i class=\"project-linklist-logo fab fa-youtube\"></i>" +
                        "        Vidéo YouTube" +
                        "        <i class=\"fas fa-external-link-alt\"></i>" +
                        "    </a>" +
                        "</li>"
                    );
                }
                else if (index === "download") {
                    var icons = "(";
                    $.each(value.icons, function (index, value) {
                        icons += "<i class=\"fab " + value + "\"></i> ";
                    });
                    icons = icons.slice(0, -1) + ')';
                    linkContainer.append(
                        "<li class=\"project-linklist-item\">" +
                        "    <a href=\"" + value.link + "\" target=\"_blank\">" +
                        "        <i class=\"project-linklist-logo fas fa-download\"></i>" +
                        "        Telechargement " + icons +
                        "        <i class=\"fas fa-external-link-alt\"></i>" +
                        "    </a>" +
                        "</li>"
                    );
                }
                else if (index === "itchio") {
                    linkContainer.append(
                        "<li class=\"project-linklist-item\">" +
                        "    <a href=\"" + value + "\" target=\"_blank\">" +
                        "        <i class=\"project-linklist-logo fab fa-itch-io\"></i>" +
                        "        Jouer sur Itch.io" +
                        "        <i class=\"fas fa-external-link-alt\"></i>" +
                        "    </a>" +
                        "</li>"
                    );
                }
                else if (index === "text") {
                    linkContainer.append(
                        "<li class=\"project-linklist-item\">" +
                        "    <p> " + value + "</p>" +
                        "</li>"
                    );
                }
            };
        });
        // Description
        const descriptionContainer = $("#description").find(".container");
        $.each(data.description, function (index, value) {
            // Append index as a h4 title
            descriptionContainer.append(
                "<h4>" + index + "</h4>"
            );
            // Append value as a p
            descriptionContainer.append(
                "<p>" + value + "</p>"
            );
        });

        // Maintenance section
        const maintenanceSection = $("#maintenance");
        if (data.maintenance) {
            const maintenanceContainer = maintenanceSection.find(".container");
            $.each(data.maintenance, function (index, value) {
                // Append index as a h4 title
                maintenanceContainer.append(
                    "<h4>" + index + "</h4>"
                );
                // Append value as a p
                maintenanceContainer.append(
                    "<p>" + value + "</p>"
                );
            });
        }
        else {
            maintenanceSection.remove();
        }

        // Project-navigation section
        const projectNavigation = $("#project-navigation");
        var prev = $("#project-navigation .prev")[0];
        var next = $("#project-navigation .next")[0];
        if (id <= 0) {
            prev.classList.add("disabled");
            prev.classList.remove("prev");
        }
        else {
            prev.setAttribute("href", "/project?id=" + (Number(id) - 1));
        }
        // Test if next project exists
        var nextProjectUrl = "/project?id=" + (Number(id) + 1);
        $.ajax({
            url: nextProjectUrl,
            type: "GET",
            success: function (data) {
                next.setAttribute("href", nextProjectUrl);
            },
            error: function (data) {
                next.classList.add("disabled");
                next.classList.remove("next");
            }
        });
    });
};

// Get the ip parameter in the page uri
function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    return url.match(new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")) ?
        decodeURIComponent(url.match(new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"))[2]) :
        null;
};

renderProject(getParameterByName('id'));