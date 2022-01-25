document.getElementById('contact-form').addEventListener('submit', function (e) {
    var json = {
        "name": document.getElementById('name').value,
        "email": document.getElementById('email').value,
        "message": document.getElementById('message').value
    };

    fetch('/contact/sendmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    })
        .then(function (response) {
            return response.json();
        })

    e.preventDefault();
});