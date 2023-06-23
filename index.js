let counter = 0

window['handleIncrease'] = () => {
    counter += 1
    document.getElementById('counterDiv').innerHTML = `counter: ${counter}`
}

window['handleDecrease'] = () => {
    counter -= 1
    document.getElementById('counterDiv').innerHTML = `counter: ${counter}`
}