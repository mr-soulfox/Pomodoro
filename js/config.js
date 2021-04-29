const userStorage = window.localStorage

function save() {
    let work = document.getElementById('work')
    let stop = document.getElementById('stop')
    let session = document.getElementById('session')

    let values = [['work', Number(work.textContent)], ['stop', Number(stop.textContent)], ['session', Number(session.textContent)]]

    //save config in storage
    for (let i = 0; i <= values.length - 1; i++) {
        userStorage.setItem(values[i][0], values[i][1])
    }

    
    let types = ['work', 'stop']
    let sessionType = []
    let initialSessionType = session.textContent % 2

    //define sessionType
    for (let i = 0; i < Number(session.textContent); i++) {
        sessionType.push(types[initialSessionType])
        
        if (initialSessionType == 1) {
            initialSessionType = 0
        } else {
            initialSessionType++
        }
    }
    
    //save sessionTypes
    userStorage.setItem('types', sessionType)

    window.location.replace('chronometer.html')
}