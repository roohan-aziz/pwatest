let installPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installPrompt = event;
    installBtn.hidden = false;
});

installBtn.addEventListener('click', () => {
    if (installPrompt) {
        installPrompt.prompt();
    }
});
