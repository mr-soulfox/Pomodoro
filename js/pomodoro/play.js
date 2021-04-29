let id = 0
let init = 0

function play() {
    let min = document.getElementById('min')
    let sec = document.getElementById('sec')

    if (document.getElementById('imgButton').src == window.location.origin + '/src/assets/play.svg') {
        document.getElementById('imgButton').setAttribute('src', './assets/pause.svg')

        if (id == 0) {
            id = setInterval(() => {
                
                if (Number(min.textContent) == 0 && Number(sec.textContent) == 0) {

                    clearInterval(id)
                    id = 0
                    document.getElementById('imgButton').setAttribute('src', './assets/play.svg')
                    
                    //notified
                    if (Notification.permission === 'granted') {
                        new Notification('Pomodoro 🍅', { 
                            body: `Fim da sessão, inicie a proxima!`
                        })

                    } else {
                        Notification.requestPermission()
                    }

                    restart()

                } else if (sec.textContent <= 0) {
                    
                    sec.textContent = 59
                    min.textContent = Number(min.textContent) - 1

                } else {
                    sec.textContent = Number(sec.textContent) <= 10 ? '0' + (Number(sec.textContent) - 1) : Number(sec.textContent) - 1
                }       
            }, 1000)
        }

    } else {

        document.getElementById('imgButton').setAttribute('src', './assets/play.svg')
        clearInterval(id)
        id = 0

    }

}

function restart() {
    //get session names
    let sessionTypes = (userStorage.getItem('types')).split(',')

    //restart timer
    document.getElementById('min').textContent = userStorage.getItem('work')
    document.getElementById('sec').textContent = '00'

    if (init > sessionTypes.length - 1) {

        //disabled button play
        document.getElementById('play').setAttribute('disabled', 'true')
        document.getElementById('imgButton').setAttribute('src', './assets/play.svg')

        //modifie style
        document.getElementById('session').innerText = 'Completo'
        document.getElementById('session').style.color = '#f8f8f2'

        document.getElementById('border').style.borderColor = '#f8f8f2'

        //zero timer
        document.getElementById('min').textContent = '0'

    } else if (sessionTypes[init] == 'work') {
        //modifie style
        document.getElementById(init + 1).style.backgroundColor = '#219653'
        document.getElementById('session').innerText = 'Trabalho'
        document.getElementById('session').style.color = '#219653'

        document.getElementById('border').style.borderColor = '#219653'

    } else if (sessionTypes[init] == 'stop') {
        //modifie style
        document.getElementById(init + 1).style.backgroundColor = '#F2C94C'
        document.getElementById('session').innerText = 'Pausa'
        document.getElementById('session').style.color = '#F2C94C'

        document.getElementById('border').style.borderColor = '#F2C94C'
    }

    init++
}