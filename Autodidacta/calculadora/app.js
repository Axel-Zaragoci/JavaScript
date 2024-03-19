const cero = document.querySelector('#cero')
const uno = document.querySelector('#uno')
const dos = document.querySelector('#dos')
const tres = document.querySelector('#tres')
const cuatro = document.querySelector('#cuatro')
const cinco = document.querySelector('#cinco')
const seis = document.querySelector('#seis')
const siete = document.querySelector('#siete')
const ocho = document.querySelector('#ocho')
const nueve = document.querySelector('#nueve')
const sumar = document.querySelector('#sum')
const restar = document.querySelector('#res')
const multiplicar = document.querySelector('#mul')
const dividir = document.querySelector('#div')
const igual = document.querySelector('#resul')
const caja = document.querySelector('#pantalla')
const borrar = document.querySelector('#borrar')

let contenido = caja.textContent
let num1 = null
let num2 = null
let operacion = null
let resultado = null


cero.addEventListener('click', (e)=>{
    contenido = caja.textContent
    caja.textContent = contenido + "0"
})
uno.addEventListener('click', (e)=>{
    contenido = caja.textContent
    caja.textContent = contenido + "1"
})
dos.addEventListener('click', (e)=>{
    contenido = caja.textContent
    caja.textContent = contenido + "2"
})
tres.addEventListener('click', (e)=>{
    contenido = caja.textContent
    caja.textContent = contenido + "3"
})
cuatro.addEventListener('click', (e)=>{
    contenido = caja.textContent
    caja.textContent = contenido + "4"
})
cinco.addEventListener('click', (e)=>{
    contenido = caja.textContent
    caja.textContent = contenido + "5"
})
seis.addEventListener('click', (e)=>{
    contenido = caja.textContent
    caja.textContent = contenido + "6"
})
siete.addEventListener('click', (e)=>{
    contenido = caja.textContent
    caja.textContent = contenido + "7"
})
ocho.addEventListener('click', (e)=>{
    contenido = caja.textContent
    caja.textContent = contenido + "8"
})
nueve.addEventListener('click', (e)=>{
    contenido = caja.textContent
    caja.textContent = contenido + "9"
})


borrar.addEventListener('click', (e)=>{
    caja.textContent = ""
    num1 = null
    num2 = null
})


sumar.addEventListener('click', (e)=>{
    num1 = caja.textContent
    caja.textContent = " "
    operacion = "suma"
})
restar.addEventListener('click', (e)=>{
    num1 = caja.textContent
    caja.textContent = " "
    operacion = "resta"
})
multiplicar.addEventListener('click', (e)=>{
    num1 = caja.textContent
    caja.textContent = " "
    operacion = "multiplicacion"
})
dividir.addEventListener('click', (e)=>{
    num1 = caja.textContent
    caja.textContent = " "
    operacion = "division"
})


igual.addEventListener('click', (e)=>{
    num2 = caja.textContent

    num1 = num1.trim()
    num2 = num2.trim()
    num1 = parseInt(num1)
    num2 = parseInt(num2)

    if(operacion == "suma") {
        resultado = num1 + num2
        caja.textContent = resultado
    }
    else if (operacion == "resta") {
        resultado = num1 - num2
        caja.textContent = resultado
    }
    else if (operacion == "multiplicacion") {
        resultado = num1 * num2
        caja.textContent = resultado
    }
    else if (operacion == "division") {
        resultado = num1 / num2
        caja.textContent = resultado
    }
    else {
        caja.textContent = "ERROR"
    }
})