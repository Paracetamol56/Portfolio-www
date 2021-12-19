$(document).ready(function () {
  // Call github API
  $.ajax({
    url: "https://api.github.com/users/Paracetamol56/repos",
    success: function (data) {
      console.log(data);
      data.forEach(function (element) {
        // append element to row
        var repo =
          `<div class="repo-card">
          <div class="repo-card-header">
            <h2>
              ${element.name}
            </h2>`;
        if (element.fork) {
          repo += `<i class="fas fa-code-branch"></i>`;
        }
        repo +=
          `<i class="fab fa-github" ></i>
          </div >
            <hr>
              <div class="repo-card-content">
                <p>
                  ${element.description}
                </p>
              </div>
              <div class="repo-card-language-ratio">

              </div>
            </div>`;

        $("#repos").append(repo)
      });
    }
  });
});