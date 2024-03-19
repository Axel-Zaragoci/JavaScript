const popup = document.querySelector('#pop-up')
const close = document.querySelector('#cerrar')

setTimeout( ()=>{
    popup.style.display = 'inherit'},
    3000)


close.addEventListener('click', () => {
    popup.style.display = 'none'
})