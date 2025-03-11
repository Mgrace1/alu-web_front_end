// src/index.js
function setCookies() {
    var firstname = document.getElementById('firstname').value;
    var email = document.getElementById('email').value;

    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
}

function showCookies() {
    var cookies = document.cookie.split(';');
    var cookiesText = "Cookies: <br>";

    cookies.forEach(cookie => {
        cookiesText += cookie.trim() + "<br>";
    });

    var pElement = document.createElement('p');
    pElement.innerHTML = cookiesText;

    document.body.appendChild(pElement);
}
