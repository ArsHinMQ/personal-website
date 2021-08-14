// Variavle declaration
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.querySelector('aside');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const navigationItems = document.getElementById('navigation-items');
const main = document.querySelector('main');
const header = document.getElementById('main-header');
const content = document.querySelector('.content');
const fileBtns = document.getElementsByClassName('file-btn');
const progressScale = document.getElementById('progress-scale');
const numericalScale = document.getElementById('numerical-scale');
const formToggler = document.getElementById('form-toggler');
const width = window.screen.width;

// On load
window.addEventListener('load', (event) => {
    let location = window.location.href.split('/');
    location = location[location.length - 1];
    if (location === 'password') {
        navigationItems.querySelector('#profile').classList.add('active');
    } else {
        navigationItems.querySelector('#' + location).classList.add('active');
    }
})


// Collapseable Sidebar
toggleBtn.addEventListener('click', (event) => {
    header.classList.toggle('collapsed');
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
    sidebarOverlay.classList.toggle('collapsed');
});

sidebarOverlay.addEventListener('click', (event) => {
    toggleBtn.click();
});

// Custom File Button
for (let i = 0; i < fileBtns.length; i++) {
    fileBtns[i].addEventListener('click', clickRealBtn);
}

function clickRealBtn(event) {
    const callerBtn = this;
    const realFileBtn = this.previousElementSibling;
    const shouldBeChange = this.getAttribute('data-change');
    const changeThis = this.getAttribute('data-changethis');

    function showAlert() {
        const alertWrapper = document.createElement('div');
        const alertMessage = document.createElement('div');
        alertWrapper.classList.add('custom-alert');
        alertMessage.classList.add('alert-msg', 'alert-warning');
        alertMessage.appendChild(document.createTextNode('Image selected, make sure submit the form to apply changes!'));
        alertWrapper.appendChild(alertMessage);
        main.append(alertWrapper);
    }

    realFileBtn.click()
    if (shouldBeChange) {
        realFileBtn.addEventListener('change', function(e) {
            const reader = new FileReader();
            reader.readAsDataURL(realFileBtn.files[0]);
            reader.onload = function(e) {
                const src = reader.result;
                if (changeThis) {
                    const ele = document.querySelector(changeThis);
                    ele.style.background = 'linear-gradient(to right ,rgba(38, 38, 38, 0.95), rgba(102, 255, 153, 0.95)), url(' + src + ')';
                } else {
                    callerBtn.style.background = 'url(' + src + ')';
                }
                showAlert();
            }
        });
    }
}

// Collapseable Form Button

// Range Input
if (progressScale && numericalScale) {
    progressScale.addEventListener('change', updateNumericalScale);
    numericalScale.addEventListener('change', updateProgressScale);
}

function updateProgressScale() {
    progressScale.value = this.value
}

function updateNumericalScale(val) {
    numericalScale.value = this.value
}

// Collapsible Form
if (formToggler) {
    if (formToggler.classList.contains('edit')) {
        const icon = formToggler.querySelector('li');
        const submitBtn = document.getElementById('experience-form').querySelector('input[type=submit]');
        const formWrapper = document.getElementById('experience-form').parentElement;
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-edit');
        submitBtn.value = 'EDIT';
        formWrapper.classList.add('show')
    }
}
