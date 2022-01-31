document.getElementById('contact-form').addEventListener('submit', function (e) {
    const stateFeedback = document.getElementById('state-feedback');

    var json = {
        "name": document.getElementById('name').value,
        "email": document.getElementById('email').value,
        "message": document.getElementById('message').value
    };

    stateFeedback.innerHTML = 'Envoi en cours...';

    document.getElementById('contact-form-submit').disabled = true;

    fetch('/contact/sendmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    })
        .then(function (response) {
            document.getElementById('contact-form').reset();
            if (response.ok) {
                stateFeedback.innerHTML = 'Votre message a bien été envoyé !';
            } else {
                stateFeedback.innerHTML = 'Une erreur est survenue, veuillez réessayer plus tard.';
            }
            return response.json();
        })

    e.preventDefault();
});