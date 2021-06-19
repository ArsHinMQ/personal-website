var progressBars = document.querySelectorAll('.progress-done')
for (var i = 0; i < progressBars.length; i++) {
    var progress = progressBars[i]
    progress.style.width = progress.getAttribute('data-done') + '%'
}