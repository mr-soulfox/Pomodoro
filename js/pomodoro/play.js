let id = 0
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
                        new Notification('Pomodoro', { 
                            body: `Fim da sessão, inicie a proxima!`
                        })
                    } else {
                        Notification.requestPermission()
                    }

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