const open = document.querySelector('#abrir')
const popup = document.querySelector('#pop-up')
const close = document.querySelector('#cerrar')

open.addEventListener('click', () => {
    popup.style.display = 'inherit'
})

close.addEventListener('click', () => {
    popup.style.display = 'none'
})