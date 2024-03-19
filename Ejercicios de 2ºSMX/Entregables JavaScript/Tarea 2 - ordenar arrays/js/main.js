// Para empezar, creo una constante para poder utilizar el main del html
const main = document.querySelector('main');
// Seguidamente, declaro todas las variables que voy a necesitar
let array, promptValue, i, ordenedArray, p, section, h2, sections, promptNum, pContent;
// Añado valor 0 a 3 variables, el índice para poder tratar buscles, el array para indicar que lo es y añado un 0 debido a que si no, me generaba un error, y el pContent porque sino me genera un undefined en el texto de los arrays
i = 0;
array = [0];
pContent = 0;

// Creo un bucle que se ejecute siempre que el indice sea menor que 3
do {
    // meto en una variable un código que crea una sección en el html
    section = document.createElement('section');
    // indico que cree en el html una sección al final del main usando la variable anterior
    main.appendChild(section);
    // indico que aumente el indice de 1
    i++;
} while (i != 3);

// genero en la variable un array que seleccione todos los elementos section del html, seleccionando los anteriormente creados
sections = document.querySelectorAll('section');
// meto en variables código para crear los encabezados h2 y los párrafos 
h2 = document.createElement('h2');
p = document.createElement('p');

// declaro un bucle for para que cree un encabezado y un párrafo en cada sección
for (i = 0; i < sections.length; i++) {
    // el método append indica que se debe meter dentro del elemento html lo siguiente y el método cloneNode me permite clonar el código las variables
    sections[i].append(h2.cloneNode(true));
    sections[i].append(p.cloneNode(true));
};

// genero un bucle que solo pare cuando el contenido de la variable promptValue sea 'exit'
while (promptValue != `exit`) {
    // indico que tome el contenido de prompts y lo meta en una variable
    promptValue = prompt(`Introduce un número a ordenar o escriba \"exit\" para salir`);
    // indico que transforme el valor anterior a formato numérico
    promptNum = parseInt(promptValue);

    // indico que se ejecute un código solo si al pasar a formato numérico sale NO NaN (Not a Number)
    if (!isNaN(promptNum)) {
        // indico que añada el valor al array
        array.push(promptNum);
    };
};

// genero 2 arrays, uno con todos los encabezados y otro con todos los párrafos
h2 = document.querySelectorAll("h2");
p = document.querySelectorAll('p');

// indico el texto del primer encabezado
h2[0].textContent = `ARRAY ORIGINAL DESORDENADO`;

// genero un bucle para juntar todos los valores del array numérico en una variable, separados por guiones
for (i = 0; i < array.length; i++) {
    pContent = `${pContent} - ${array[i]}`;
};

// indico que al primer párrafo se le añade de contenido el array separado por guiones
p[0].textContent = pContent;

// ordeno el array mediante el método burbuja
ordenedArray = array.sort(function(a,b){return a-b;});
// indico que al segundo encabezado tenga el texto correspondiente
h2[1].textContent = `ARRAY ORDENADO`;

// cambio el valor de la variable que almacenaba el array separado por guiones para reutilizar la variable
pContent = 0;

// genero un bucle for para almacenar en una variable el contenido del array ordenado separado por guiones
for (i = 0; i < ordenedArray.length; i++) {
    pContent = `${pContent} - ${ordenedArray[i]}`;
};

// indico que al segundo párrafo se le añade de contenido el array ordenado separado por guiones
p[1].textContent =  pContent;
// indico el contenido del tercer encabezado
h2[2].textContent = `MÉTODO DE ORDENACIÓN`;
// indico el contenido del tercer párrafo
p[2].textContent = `Para ordenar el array, he utilizado el método de burbuja. Este método se basa en comparar cada valor con el anterior y intercambiar su posición si necesario. He utilizado este método, aunque no sea el que mejor rendimiento tiene, debido a su simplicidad y facilidad de implementar en el código. A causa de la falta de tiempo, requería de un método fácil de implementar y entender, y el método de burbuja cumplía con esto`;
