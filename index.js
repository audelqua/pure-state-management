let counter = 0



// ----------------------------------------------------------------------------
window['handleIncrease'] = handleIncrease
window['handleDecrease'] = handleDecrease

function handleIncrease() {
    counter += 1
    document.getElementById('counterDiv').innerHTML = `counter: ${counter}`
}
function handleDecrease() {
    counter -= 1
    document.getElementById('counterDiv').innerHTML = `counter: ${counter}`
}
// ----------------------------------------------------------------------------
document.getElementById('button1').addEventListener('click', function() {
    counter += 1
    document.getElementById('counterDiv').innerHTML = `counter: ${counter}`
})

document.getElementById('button2').addEventListener('click', function() {
    counter -= 1
    document.getElementById('counterDiv').innerHTML = `counter: ${counter}`
})