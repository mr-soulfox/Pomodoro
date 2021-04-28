const userStorage = window.localStorage

function verify() {

    if (userStorage.getItem('session') == null || userStorage.getItem('work') == null || userStorage.getItem('stop') == null) {
        window.location.replace('index.html')
    }
    if (userStorage.getItem('min') != null && userStorage.getItem('min') != null) {

        document.getElementById('min').textContent = userStorage.getItem('min')
        document.getElementById('sec').textContent = userStorage.getItem('sec')

    } else {

        document.getElementById('min').textContent = '25'
        document.getElementById('sec').textContent = '00'

    }
}

function saveProgress() {
    let min = document.getElementById('min').textContent
    let sec = document.getElementById('sec').textContent
    
    userStorage.setItem('min', min)
    userStorage.setItem('sec', sec)

    console.log('save')
}