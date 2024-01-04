document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("cookieConsent")) {
        showCookieConsent();
    }
});

function showCookieConsent() {
    var cookieConsent = document.getElementById("cookieConsent");
    cookieConsent.style.display = "block";
}

function acceptCookies() {
    localStorage.setItem("cookieConsent", "accepted");
    var cookieConsent = document.getElementById("cookieConsent");
    cookieConsent.style.display = "none";
}

function declineCookies() {
    localStorage.setItem("cookieConsent", "declined");
    var cookieConsent = document.getElementById("cookieConsent");
    cookieConsent.style.display = "none";
    // Adicione qualquer ação adicional para recusa de cookies aqui, se necessário.
}
