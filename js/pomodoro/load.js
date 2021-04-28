const userStorage = window.localStorage

function verify() {

    let cookie = (document.cookie).search('save=true')

    if (userStorage.getItem('session') == null || userStorage.getItem('work') == null || userStorage.getItem('stop') == null) {
        window.location.replace('index.html')
    }
    if (userStorage.getItem('min') != null && userStorage.getItem('min') != null && cookie != -1) {

        document.getElementById('min').textContent = userStorage.getItem('min')
        document.getElementById('sec').textContent = userStorage.getItem('sec')

    } else {

        document.getElementById('min').textContent = userStorage.getItem('work')
        document.getElementById('sec').textContent = '00'

    }
}

function saveProgress() {
    let min = document.getElementById('min').textContent
    let sec = document.getElementById('sec').textContent

    let save = window.confirm('Deseja salvar o tempo atual?')

    if (save) {

        userStorage.setItem('min', min)
        userStorage.setItem('sec', sec)
        document.cookie = "save = true"

    } else {
        document.cookie = "save = false"
    }
}