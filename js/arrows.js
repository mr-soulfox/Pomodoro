function arrows(dir, type) {
    let configType = document.getElementById(type)
    let numValue = Number(configType.textContent)
    let value = 0

    //Max and min value to work
    if (type == 'work' && numValue > 5 && numValue < 59) {
        value = dir == 'up' ? 1 : -1
    } else if (numValue == 5) {
        value = 1
    } else if (numValue == 59) {
        value = -1
    }

    //Max and min value to stop
    if (type == 'stop' && numValue > 3 && numValue < 35) {
        value = dir == 'up' ? 1 : -1
    } else if (numValue == 3) {
        value = 1
    } else if (numValue == 35 && type == "stop") {
        value = -1
    }

    //Max and min value to sessions
    if (type == 'session' && numValue > 2 && numValue < 30) {
        value = dir == 'up' ? 1 : -1
    } else if (numValue == 2) {
        value = 1
    } else if (numValue == 30 && type == "session") {
        value = -1
    }

    configType.textContent = numValue + value 
}