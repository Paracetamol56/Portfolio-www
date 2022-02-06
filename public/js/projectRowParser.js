function renderProjects() {
    // use ajax to get all the projects from the api /content/projects
    // and render them in the projects page
    const projectContainer = $("#projects").find(".container");

    $.ajax({
        url: '/content/projects',
        type: 'GET',
        success: function (data) {
            $.each(data, function (index, value) {
                value = value[0];
                const number = (index + 1).toString().padStart(2, '0');
                var infos = "";
                $.each(value.infos, function (index, info) {
                    var icon = "<i class=\"fas fa-question\"></i>";
                    if (info.type === "fa") {
                        icon = "<i class=\"fas " + info.icon + "\"></i>";
                    }
                    else if (info.type === "svg") {
                        icon = info.icon;
                    }
                    infos += "<li>" + icon + " " + info.text + "</li>";
                });
                projectContainer.append(
                    "<div class=\"project-row\">" +
                    "    <div class=\"thumbnail-container\">" +
                    "        <img src=\"" + value.image + "\" class=\"thumbnail\" alt=\"Thumbnail\">" +
                    "    </div>" +
                    "    <div class=\"project-description\">" +
                    "        <div class=\"section-title\">" +
                    "            <h2><span class=\"section-title-number\">" + number + "</span> " + value.title + "</h2>" +
                    "            <hr>" +
                    "            <h3>" + value.subtitle + "</h3>" +
                    "        </div>" +
                    "        <ul class=\"project-description-list\">" + infos + "</ul>" +
                    "        <a class=\"project-link\" href=\"/project?id=" + index.toString() + "\">VOIR PLUS" +
                    "            <i class=\"fas fa-chevron-right\"></i>" +
                    "        </a>" +
                    "    </div>" +
                    "</div>"
                );
            });
        }
    });
}

renderProjects();