// Toggle Menu
window.addEventListener('DOMContentLoaded', event => {
    const screenWidth = window.innerWidth;
    const sidebarToggler = document.body.querySelector('#toggler-button');
    const sidebar = document.getElementsByTagName('aside')[0];
    const icon = document.createElement("li");

    icon.classList.add("fa");
    sidebarToggler.style.transform = 'rotate(0deg)'

    if (screenWidth <= 991) {
        sidebar.style.width = "0rem";
        icon.classList.add("fa-arrow-right");
    } else {
        sidebar.style.width = "20rem";
        icon.classList.add("fa-arrow-left");
    }

    sidebarToggler.appendChild(icon);

    sidebarToggler.addEventListener('click', event => {
        let iconTrasform = parseInt((sidebarToggler.style.transform.slice(7)));
        let sidebarWidth = parseInt(sidebar.style.width);
        if (sidebarWidth === 20) {
            sidebar.style.width = "0rem";
            sidebarToggler.style.transform = "rotate(" + (iconTrasform + 180) + "deg)";
        } else {
            sidebar.style.width = "20rem";
            sidebarToggler.style.transform = "rotate(" + (iconTrasform - 180) + "deg)";
        }
    });
});

// Custom Input Files
function clickRealBtn(callerBtn, beChanged, changeThis) {
    const realFileBtn = callerBtn.previousElementSibling;
    realFileBtn.click();
    if (beChanged) {
        realFileBtn.addEventListener('change', function(e) {
            const reader = new FileReader();
            reader.readAsDataURL(realFileBtn.files[0]);
            reader.onload = function(e) {
                const src = reader.result;
                if (changeThis) {
                    const content = document.getElementById(changeThis);
                    content.style.backgroundImage = 'url(' + src + ')';
                } else {
                    callerBtn.style.backgroundImage = 'url(' + src + ')';
                }
            }
        });
    }
}

// Bootstrap Tooltip
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

// Custom Range Input
function updateProgressScale(val) {
    document.getElementById('abilityProgress').value = val
}

function updateNumbericalScale(val) {
    document.getElementById('abilityScale').value = val
}

// Search Bar
function filter(caller) {
    let index, txtValue, section;
    const filterBy = caller.value.toLowerCase().replace(/ +/g, "");
    const unfilteredElements = document.getElementsByClassName('content')[0].children;
    // const unfilteredElements = document.getElementsByClassName('content')[0].getElementsByTagName('section');
    console.log(document.getElementsByClassName('content')[0].children);

    for (index = 0; index < unfilteredElements.length; index++) {
        section = unfilteredElements[index];
        txtValue = section.id.toLowerCase();
        console.log(txtValue)
        console.log(filterBy)
        console.log(txtValue.indexOf(filterBy))
        if (txtValue.indexOf(filterBy) <= -1) {
            section.style.display = "none";
        } else {
            section.style.display = "";
        }
    }
}
