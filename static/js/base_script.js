// Custom Progress Bar
const progressBars = document.getElementsByClassName("progress-done")
for (let index = 0; index < progressBars.length; index++) {
    let progress = progressBars[index]
    progress.style.width = progress.getAttribute('data-done') + '%'
}
