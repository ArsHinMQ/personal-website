const moreOrLessTags = document.getElementsByClassName('more-or-less');


for (let i = 0; i < moreOrLessTags.length; i++) {
    moreOrLessTags[i].addEventListener('click', moreOrLess);
}


function moreOrLess(event) {
    const parent = this.parentElement;
    const p = parent.getElementsByTagName('p')[0];
    const caller = parent.getElementsByClassName('more-or-less')[0];
    if (p.style.maxHeight != '100vh') {
        p.style.maxHeight = '100vh';
        return false;
    }
    p.style.maxHeight = '0';
    return true;
}
