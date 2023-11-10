function toggleMenu() {
    const nuevoMenu = document.querySelector('.nuevo-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const content = document.querySelector('.content');
    if (nuevoMenu.style.width === '200px') {
        nuevoMenu.style.width = '0';
        menuToggle.style.left = '20px';
        content.style.marginLeft = '0';
    } else {
        nuevoMenu.style.width = '200px';
        menuToggle.style.left = '220px';
        content.style.marginLeft = '100px';
    }
}
function showWelcomeButton() {
    const welcomeButton = document.getElementById('welcome-button');
    const form = document.getElementById('form');
    welcomeButton.style.display = 'block';
    form.style.display = 'none';
}

function showForm() {
    const welcomeButton = document.getElementById('welcome-button');
    const form = document.getElementById('form');
    welcomeButton.style.display = 'none';
    form.style.display = 'block';
}
function showWelcomeMessage() {
    const welcomeButton = document.getElementById('welcome-button');
    const welcomeMessage = document.getElementById('welcome-message');
    const saludarButton = document.querySelector('.saludar-button');
    const form = document.getElementById('form');
    welcomeButton.style.display = 'none';
    welcomeMessage.style.display = 'block';
    saludarButton.style.display = 'none';
    form.style.display = 'none';
    showWelcomeButton();
}
function closeWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    const saludarButton = document.querySelector('.saludar-button');
    const form = document.getElementById('form');
    welcomeMessage.style.display = 'none';
    saludarButton.style.display = 'block';
    form.style.display = 'none';
}
function saveFormData() {
    const form = document.getElementById('form');
    const saludarButton = document.querySelector('.saludar-button');
    const welcomeButton = document.getElementById('welcome-button');
    form.style.display = 'none';
    saludarButton.style.display = 'block';
    welcomeButton.style.display = 'none';
    showWelcomeButton();

    function isEmailValid(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
    function validateEmail() {
        const emailInput = document.getElementById('email-input');
        const emailError = document.getElementById('email-error');
        if (!isEmailValid(emailInput.value)) {
            emailError.textContent = 'Correo inválido';
            emailError.style.color = 'red';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }
}
document.getElementById("mostrarAlerta").addEventListener("click", function() {
    document.getElementById("alerta").style.display = "block";
});

document.getElementById("cerrarAlerta").addEventListener("click", function() {
    document.getElementById("alerta").style.display = "none";
});
