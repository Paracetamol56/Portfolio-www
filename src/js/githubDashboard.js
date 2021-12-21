$(document).ready(function () {
  // Call github API
  $.ajax({
    url: "https://api.github.com/users/Paracetamol56/repos",
    success: function (data) {
      console.log(data);
      data.forEach(function (element) {
        // append element to row
        var repo =
          `
          <div class="repo-card">
          <div class="repo-card-header">
            <h2>
              ${element.name}
            </h2>
            `;
        // Fork icon
        if (element.fork) {
          repo +=
            `
            <i class="fas fa-code-branch"></i>
            `;
        }
        // Licence icon
        if (element.license) {
          $.ajax({
            url: element.license.url,
            success: function (license) {
              repo +=
                `
                <a href="${license.html_url}">
                  <i class="fas fa-balance-scale"></i>
                </a>
                `;
            }
          });
        }
        repo +=
          `<a href="${element.html_url}" target="_blank">
            <i class="fab fa-github" ></i>
          </a>
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
