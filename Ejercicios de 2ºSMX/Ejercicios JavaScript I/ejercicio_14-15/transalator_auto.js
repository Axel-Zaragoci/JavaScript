// genero constantes para poder tratar con los diferentes elementos html
const inputWord = document.querySelector('#word');
const button = document.querySelector('#translate');
const translatedMessage = document.querySelector('#translated_word');
// genero una variable vacía y otra que es una 'enum', que es un listado que me permite acceder a un resultado mediante un alias/palabra que hace referencia
let inputContent, words = {
    CASA: 'house',
    MESA: 'table',
    PERRO: 'dog',
    GATO: 'cat'
};

// indico en los estilos que el botón no se muestre en pantalla
button.style.display = 'none';

// genero una función para realizar la traducción
function translate() {
    // genero una condicional que se ejecute solo si el contenido del input donde añadir su palabra es igual a casa, escrito de alguna de las formas marcadas
    if (inputContent === 'casa' | inputContent === 'Casa' | inputContent === 'CASA') {
        // Le indico que me cambie el mensaje de un elemento html haciendo referencia al contenido del input y a la enumeración con el alias "CASA"
        translatedMessage.textContent = `La traducción de \"${inputContent}\" es \"${words.CASA}\"`;
    }
    // genero una condicional que se ejecute en el caso de que la anterior sea falsa y que la palabra del input coincida con la palabra "mesa"
    else if (inputContent === 'mesa' | inputContent === 'Mesa' | inputContent === 'MESA') {
        // Le indico que me cambie el mensaje de un elemento html haciendo referencia al contenido del input y a la enumeración con el alias "MESA"
        translatedMessage.textContent = `La traducción de \"${inputContent}\" es \"${words.MESA}\"`;
    }
    // genero una condicional que se ejecute en el caso de que la anterior sea falsa y que la palabra del input coincida con la palabra "perro"
    else if (inputContent === 'perro' | inputContent === 'Perro' | inputContent === 'PERRO') {
        // Le indico que me cambie el mensaje de un elemento html haciendo referencia al contenido del input y a la enumeración con el alias "PERRO"
        translatedMessage.textContent = `La traducción de \"${inputContent}\" es \"${words.PERRO}\"`;
    }
    // genero una condicional que se ejecute en el caso de que la anterior sea falsa y que la palabra del input coincida con la palabra "gato"
    else if (inputContent === 'gato' | inputContent === 'Gato' | inputContent === 'GATO') {
        // Le indico que me cambie el mensaje de un elemento html haciendo referencia al contenido del input y a la enumeración con el alias "GATO"
        translatedMessage.textContent = `La traducción de \"${inputContent}\" es \"${words.GATO}\"`;
    }
    // gnero una condicial que se ejecute en el caso de que la anterior sea falsa y que el input esté vacío
    else if (inputContent == '') {
        // le indico que el contenido debe de ser vacío
        translatedMessage.textContent = ``
    }
    // en el caso de que no se cumplan las condiciones de todos los anteriores, indique que la palabra no está en el traductor
    else {
        translatedMessage.textContent = `Esta palabra no está en el traductor`;
    };
}

// le indico que al añadir datos en el input, me ejecute el siguiente código
inputWord.addEventListener('input', ()=>{
    // le indico que me ponga en una variable el contenido del input pasado por trim, que va a eliminar los espacios al principio y final
    inputContent = (inputWord.value).trim();
    // genero un intervalo para que revise la traducción cada medio segundo
    setInterval(translate(), 500);
});