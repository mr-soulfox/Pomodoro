let userStorage = window.localStorage

function save() {
    let work = document.getElementById('work')
    let stop = document.getElementById('stop')
    let session = document.getElementById('session')

    let values = [['work', Number(work.textContent)], ['stop', Number(stop.textContent)], ['session', Number(session.textContent)]]

    //save config in storage
    for (let i = 0; i <= values.length - 1; i++) {
        userStorage.setItem(values[i][0], values[i][1])
    }
}