function play() {

    if (document.getElementById('imgButton').src == window.location.origin + '/src/assets/play.svg') {
        document.getElementById('imgButton').setAttribute('src', './assets/pause.svg')
    } else {
        document.getElementById('imgButton').setAttribute('src', './assets/play.svg')
    }
}