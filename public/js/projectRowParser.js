function renderProjects() {
    // use ajax to get all the projects from the api /content/projects
    // and render them in the projects page
    $.ajax({
        url: '/content/projects',
        type: 'GET',
        success: function (data) {
            // Get the project container
            const projectContainer = $("#projects").find(".container");
            // Get the project template
            const projectTemplate = projectContainer.html();
            $(projectContainer).empty();

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

                // Format the template
                var projectRow = projectTemplate
                    .replace("{{thumbnail}}", value.image)
                    .replace("{{number}}", number)
                    .replace("{{title}}", value.title)
                    .replace("{{subtitle}}", value.subtitle)
                    .replace("{{infos}}", infos)
                    .replace("{{link}}", "/project?id=" + index.toString());

                // Append the project to the container in first position
                $(projectContainer).prepend(projectRow);
            });
        }
    });
}

renderProjects();