const inputText = document.querySelector('#texto')
const inputDate = document.querySelector('#fecha')
const inputEmail = document.querySelector('#email')
const submit = document.querySelector('#envio')
const error = document.querySelector('#error')

inputText.addEventListener('input', code)
inputDate.addEventListener('input', code)
inputEmail.addEventListener('input', code)

function animation() {
    setTimeout(() => {
        submit.style.transform = 'rotate(0deg)'
    }, 10)
    setTimeout(() => {
        submit.style.transform = 'rotate(15deg)'
    }, 10)
    setTimeout(() => {
        submit.style.transform = 'rotate(-15deg)'
    }, 10)
    setTimeout(() => {
        submit.style.transform = 'rotate(15deg)'
    }, 10)
    setTimeout(() => {
        submit.style.transform = 'rotate(0deg)'
    }, 10)
}

function code() {
    //Todo el código
    if (inputText.validity.valid && inputDate.validity.valid && inputEmail.validity.valid) {
        error.textContent = 'Ya se puede enviar, está todo bien'
        submit.style.backgroundColor = 'rgba(170, 202, 54, 0.356)'
        submit.style.padding = '5px'
        submit.style.fontSize = '20px'
        animation()
    }
    else {
        error.textContent = 'Todos los campos deben estar rellenados y ser válidos para poder enviar';
        submit.style.backgroundColor = 'red'
        submit.style.padding = '2px'
        submit.style.fontSize = '15px'
        submit.style.transform = 'rotate(0deg)'
    }
}

setInterval(code, 10)