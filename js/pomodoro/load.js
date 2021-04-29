const userStorage = window.localStorage

function verify() {

    if (userStorage.getItem('session') == null || userStorage.getItem('work') == null || userStorage.getItem('stop') == null) {
        window.location.replace('index.html')

    } else if (!(userStorage.getItem('min') == null) && !(userStorage.getItem('sec') == null) && userStorage.getItem('save') == 'true') {

        document.getElementById('min').textContent = userStorage.getItem('min')
        document.getElementById('sec').textContent = userStorage.getItem('sec')

        
    } else {
        
        document.getElementById('min').textContent = userStorage.getItem('work')
        document.getElementById('sec').textContent = '00'
        
    }

    //add element
    if (userStorage.getItem('types') == null) {
        
        for (let i = 1; i <= 3; i++) {
            document.getElementById('points').innerHTML += `<small id='${i}'></small>`
        }
        userStorage.setItem('types', ['stop', 'work', 'stop'])
    
    } else {
    
        for (let i = 1; i <= Number(userStorage.getItem('session')); i++) {
            document.getElementById('points').innerHTML += `<small id='${i}'></small>`
        }
    
    }
}

function saveProgress() {
    let min = document.getElementById('min').textContent
    let sec = document.getElementById('sec').textContent

    let save = confirm('Deseja salvar o tempo atual?')

    let array = [['min', min], ['sec', sec], ['save', save]]

    for (let i = 0; i < array.length; i++) {
        userStorage.setItem(array[i][0], array[i][1])
    }
}