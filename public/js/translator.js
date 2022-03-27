function translate(lang) {
    $.getJSON("/content/home.json", function (dictionary) {
        dictionary = dictionary[0];

        $(".lang").each(function () {
            $(this).html(dictionary[lang][$(this).attr("key")]);
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

// Get the "gl" from the header if it exists
var lang = getParameterByName("gl");
// Default language
if (lang === undefined) {
    lang = "en";
}
translate(lang);