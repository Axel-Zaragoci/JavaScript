const input = document.querySelector('#prueba')
const btn = document.querySelector('#boton')
const title = document.querySelector('#title')
const content = document.querySelectorAll('.content')
const wrapper = document.querySelector('#content_wrapper')

input.textContent = 'Mensaje'
input.style.border = '1px solid #000000';
input.style.width = '500px';
input.style.height = 'fit-content';
input.style.padding = '5px 2px'
input.style.background = '#91bed3';
input.style.margin = '0px 0px 10px 0px';
input.setAttribute('contenteditable', 'true')

btn.textContent = 'Enviar'
btn.style.border = '2px solid #91bed3'
btn.style.background = '#cbcbcb'
btn.style.color = '#151515'
btn.style.padding = '2px 0px'
btn.style.width = '60px'
btn.style.height = 'fit-content'
btn.style.margin = '0px 0px 0px 220px'

title.textContent = 'Mensaje enviado:'
title.style.color = '#efb810';
title.style.textDecoration = 'underline';
title.style.fontSize = '30px';

wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column-reverse'

btn.addEventListener('click', (e)=>{
    let contenido = input.textContent

    let content = document.querySelectorAll('.content')

    if (contenido != ' ') {
        let p = document.createElement('p')
        p.textContent = contenido
        p.className = 'content'
        wrapper.appendChild(p)
    }
})