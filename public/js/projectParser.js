// project class
class Project {
    constructor(jsonURL) {
        this.projectData = {};
        // Use ajax to get the json file
        $.getJSON(jsonURL, function (data) {
            this.projectData = data;
        });
    }

    render() {
        console.log(this.projectData);
    }
}

var project = new Project("/content/projects/0.json");
project.render();