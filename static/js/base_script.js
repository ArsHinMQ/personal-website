const progressBars = document.getElementsByClassName("progress-done");

// Custom Progress Bars
for (let i = 0; i < progressBars.length; i++) {
    let progress = progressBars[i]
    progress.style.width = progress.getAttribute('data-done') + '%'
}

window.addEventListener('load', (event) => {
    checkForAlertMessages();
});

// Alert Messages
function checkForAlertMessages() {
    const alert = document.getElementsByClassName('custom-alert')[0];
    if (alert) {
        const alertMessages = document.getElementsByClassName('alert-msg');
        setTimeout(() => {
            alert.style.opacity = '0';
        }, 4000);
        alert.addEventListener('transitionend', () => {
            alert.parentElement.removeChild(alert);
        })
    }
    setTimeout(checkForAlertMessages, 100)
}
