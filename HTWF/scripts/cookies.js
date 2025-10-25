document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookieConsentModal');
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');

    // Verificar si ya se aceptaron las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    if (cookiesAccepted === null) {
        // Mostrar el modal después de un pequeño delay
        setTimeout(function() {
            cookieConsent.classList.add('show');
        }, 1000);
    }

    // Aceptar cookies
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        localStorage.setItem('cookiesAcceptedDate', new Date().toISOString());
        cookieConsent.classList.remove('show');
    });

    // Rechazar cookies
    rejectBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'false');
        localStorage.setItem('cookiesAcceptedDate', new Date().toISOString());
        cookieConsent.classList.remove('show');
    });
});