// genero constantes para tener acceso a los elementos html que requiero
const inputWord = document.querySelector('#word');
const button = document.querySelector('#translate');
// genero una variable vacía y otra que es una 'enum', que es un listado que me permite acceder a un resultado mediante un alias/palabra que hace referencia
let inputContent, words = {
    CASA: 'house',
    MESA: 'table',
    PERRO: 'dog',
    GATO: 'cat'
};
// genero un evento que se realice solo al hacer click sobre el botón
button.addEventListener('click', ()=>{
    // le indico que tome el contenido del input y lo pase por trim para eliminar espacios en blanco al inicio y al final
    inputContent = (inputWord.value).trim();

    // genero una condicional para que se ejecute si la palabra coincide con casa
    if (inputContent === 'casa' | inputContent === 'Casa' | inputContent === 'CASA') {
        // indico que genere una alerta para indicar la traducción
        alert(`La traducción de \"${inputContent}\" es \"${words.CASA}\"`);
    }
    // genero una condicional que se ejecute solo si el anterior no se ejecuta y la palabra del input corresponde con mesa
    else if (inputContent === 'mesa' | inputContent === 'Mesa' | inputContent === 'MESA') {
        // indico que genere una alerta para indicar la traducción
        alert(`La traducción de \"${inputContent}\" es \"${words.MESA}\"`);
    }
    // genero una condicional que se ejecute solo si el anterior no se ejecuta y la palabra del input corresponde con perro
    else if (inputContent === 'perro' | inputContent === 'Perro' | inputContent === 'PERRO') {
        // indico que genere una alerta para indicar la traducción
        alert(`La traducción de \"${inputContent}\" es \"${words.PERRO}\"`);
    }
    // genero una condicional que se ejecute solo si el anterior no se ejecuta y la palabra del input corresponde con gato
    else if (inputContent === 'gato' | inputContent === 'Gato' | inputContent === 'GATO') {
        // indico que genere una alerta para indicar la traducción
        alert(`La traducción de \"${inputContent}\" es \"${words.GATO}\"`);
    }
    // genero una condicional que se ejecute solo si las anteriores no se ejecutan
    else {
        // indico que genere una alerta para indicar que no tenemos la traducción
        alert(`Esta palabra no está en el traductor`);
    };
});