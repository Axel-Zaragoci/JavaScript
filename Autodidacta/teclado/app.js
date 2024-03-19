const pantalla = document.querySelector('#pantalla')
const teclado = document.querySelector('#teclado')
const letras = document.querySelector('#letras')
const linea = document.querySelectorAll('.line_wrapper')
const numeros = document.querySelector('#numeros')
const cuadricula = document.querySelector('#number_wrapper')
const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')
const d = document.querySelector('#d')
const e = document.querySelector('#e')
const f = document.querySelector('#f')
const g = document.querySelector('#g')
const h = document.querySelector('#h')
const i = document.querySelector('#i')
const j = document.querySelector('#j')
const k = document.querySelector('#k')
const l = document.querySelector('#l')
const m = document.querySelector('#m')
const n = document.querySelector('#n')
const ñ = document.querySelector('#ñ')
const o = document.querySelector('#o')
const p = document.querySelector('#p')
const q = document.querySelector('#q')
const r = document.querySelector('#r')
const s = document.querySelector('#s')
const t = document.querySelector('#t')
const u = document.querySelector('#u')
const v = document.querySelector('#v')
const w = document.querySelector('#w')
const x = document.querySelector('#x')
const y = document.querySelector('#y')
const z = document.querySelector('#z')
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
const espacio = document.querySelector('#espacio')
const icono_espacio = document.querySelector('#space_icon')
const button = document.querySelectorAll('button')

teclado.style.background = 'black'
teclado.style.margin = '-1%'
teclado.style.margin = '50px 0px 0px 0px'
teclado.style.height = 'fit-content'
teclado.style.width = 'fit-content'
teclado.style.padding = '20px'
letras.style.display = 'grid'
letras.style.alignItems = 'center'
letras.style.justifyContent = 'center'
numeros.style.margin = '20px 0px 0px 0px'
pantalla.style.height = 'fit-content'
pantalla.style.width = '560.56px'
pantalla.style.padding = '10px 0px'
pantalla.style.border = '1px solid black'

for (let num = 0; num < button.length; num++) {
    button[num].style.height = '50px'
    button[num].style.width = '50px'
    button[num].style.color = 'black'
    button[num].style.background = '#cbcbcb'
    button[num].style.border = '1px solid #000000'
    button[num].style.textAlign = 'center'
    button[num].style.justifyContent = 'center'
}

espacio.style.background = '#cbcbcb'
icono_espacio.style.height = '25%'
icono_espacio.style.width = '100%'


a.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "a"
    a.style.background = '#ffffff'
    setTimeout(() => {
        a.style.background = '#cbcbcb' 
    }, "180");
})
b.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "b"
    b.style.background = '#ffffff'
    setTimeout(() => {
        b.style.background = '#cbcbcb' 
    }, "180");
})
c.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "c"
    c.style.background = '#ffffff'
    setTimeout(() => {
        c.style.background = '#cbcbcb' 
    }, "180");
})
d.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "d"
    d.style.background = '#ffffff'
    setTimeout(() => {
        d.style.background = '#cbcbcb' 
    }, "180");
})
e.addEventListener('click', (a)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "e"
    e.style.background = '#ffffff'
    setTimeout(() => {
        e.style.background = '#cbcbcb'
    }, "180");
})
f.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "f"
    f.style.background = '#ffffff'
    setTimeout(() => {
        f.style.background = '#cbcbcb' 
    }, "180");
})
g.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "g"
    g.style.background = '#ffffff'
    setTimeout(() => {
        g.style.background = '#cbcbcb' 
    }, "180");
})
h.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "h"
    h.style.background = '#ffffff'
    setTimeout(() => {
        h.style.background = '#cbcbcb' 
    }, "180");
})
i.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "i"
    i.style.background = '#ffffff'
    setTimeout(() => {
        i.style.background = '#cbcbcb' 
    }, "180");
})
j.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "j"
    j.style.background = '#ffffff'
    setTimeout(() => {
        j.style.background = '#cbcbcb' 
    }, "180");
})
k.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "k"
    k.style.background = '#ffffff'
    setTimeout(() => {
        k.style.background = '#cbcbcb' 
    }, "180");
})
l.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "l"
    l.style.background = '#ffffff'
    setTimeout(() => {
        l.style.background = '#cbcbcb' 
    }, "180");
})
m.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "m"
    m.style.background = '#ffffff'
    setTimeout(() => {
        m.style.background = '#cbcbcb' 
    }, "180");
})
n.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "n"
    n.style.background = '#ffffff'
    setTimeout(() => {
        n.style.background = '#cbcbcb' 
    }, "180");
})
ñ.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "ñ"
    ñ.style.background = '#ffffff'
    setTimeout(() => {
        ñ.style.background = '#cbcbcb' 
    }, "180");
})
o.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "o"
    o.style.background = '#ffffff'
    setTimeout(() => {
        o.style.background = '#cbcbcb' 
    }, "180");
})
p.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "p"
    p.style.background = '#ffffff'
    setTimeout(() => {
        p.style.background = '#cbcbcb' 
    }, "180");
})
q.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "q"
    q.style.background = '#ffffff'
    setTimeout(() => {
        q.style.background = '#cbcbcb' 
    }, "180");
})
r.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "r"
    r.style.background = '#ffffff'
    setTimeout(() => {
        r.style.background = '#cbcbcb' 
    }, "180");
})
s.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "s"
    s.style.background = '#ffffff'
    setTimeout(() => {
        s.style.background = '#cbcbcb' 
    }, "180");
})
t.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "t"
    t.style.background = '#ffffff'
    setTimeout(() => {
        t.style.background = '#cbcbcb' 
    }, "180");
})
u.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "u"
    u.style.background = '#ffffff'
    setTimeout(() => {
        u.style.background = '#cbcbcb' 
    }, "180");
})
v.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "v"
    v.style.background = '#ffffff'
    setTimeout(() => {
        v.style.background = '#cbcbcb' 
    }, "180");
})
w.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "w"
    w.style.background = '#ffffff'
    setTimeout(() => {
        w.style.background = '#cbcbcb' 
    }, "180");
})
x.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "x"
    x.style.background = '#ffffff'
    setTimeout(() => {
        x.style.background = '#cbcbcb' 
    }, "180");
})
y.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "y"
    y.style.background = '#ffffff'
    setTimeout(() => {
        y.style.background = '#cbcbcb' 
    }, "180");
})
z.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "z"
    z.style.background = '#ffffff'
    setTimeout(() => {
        z.style.background = '#cbcbcb' 
    }, "180");
})

espacio.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + " "
    espacio.style.background = '#ffffff'
    setTimeout(() => {
        espacio.style.background = '#cbcbcb' 
    }, "180");
})

cero.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "0"
    cero.style.background = '#ffffff'
    setTimeout(() => {
        cero.style.background = '#cbcbcb' 
    }, "180");
})
uno.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "1"
    uno.style.background = '#ffffff'
    setTimeout(() => {
        uno.style.background = '#cbcbcb' 
    }, "180");
})
dos.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "2"
    dos.style.background = '#ffffff'
    setTimeout(() => {
        dos.style.background = '#cbcbcb' 
    }, "180");
})
tres.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "3"
    tres.style.background = '#ffffff'
    setTimeout(() => {
    tres.style.background = '#cbcbcb' 
    }, "180");
})
cuatro.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "4"
    cuatro.style.background = '#ffffff'
    setTimeout(() => {
        cuatro.style.background = '#cbcbcb' 
    }, "180");
})
cinco.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "5"
    cinco.style.background = '#ffffff'
    setTimeout(() => {
        cinco.style.background = '#cbcbcb' 
    }, "180");
})
seis.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "6"
    seis.style.background = '#ffffff'
    setTimeout(() => {
        seis.style.background = '#cbcbcb' 
    }, "180");
})
siete.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "7"
    siete.style.background = '#ffffff'
    setTimeout(() => {
        siete.style.background = '#cbcbcb' 
    }, "180");
})
ocho.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "8"
    ocho.style.background = '#ffffff'
    setTimeout(() => {
        ocho.style.background = '#cbcbcb' 
    }, "180");
})
nueve.addEventListener('click', (e)=>{
    let contenido = pantalla.textContent
    pantalla.textContent = contenido + "9"
    nueve.style.background = '#ffffff'
    setTimeout(() => {
        nueve.style.background = '#cbcbcb' 
    }, "180");
})