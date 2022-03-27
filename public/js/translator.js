function translate(lang) {
    $.getJSON("/content/home.json", function (dictionary) {
        dictionary = dictionary[0];

        $(".lang").each(function () {
            console.log($(this).attr("key"));
            $(this).html(dictionary[lang][$(this).attr("key")]);
        });
    });
}

translate('fr');