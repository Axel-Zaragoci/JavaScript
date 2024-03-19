const buttons = document.querySelectorAll('button');

const topScreen = document.querySelector('#top_screen');
const bottomScreen = document.querySelector('#bottom_screen');

const zero = document.querySelector('#zero')
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const sum = document.querySelector('#suma');
const substraction = document.querySelector('#resta');
const multiplication = document.querySelector('#multiplicacion');
const division = document.querySelector('#division');
const power = document.querySelector('#potencia');
const remainder = document.querySelector('#resto');
const equal = document.querySelector('#igual');
const clean = document.querySelector('#borrar');

let topScreenContent, bottomScreenContent, number1, number2, result, operation;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', ()=>{
        buttons[i].style.backgroundColor = '#ffffff';
    });
    buttons[i].addEventListener('mouseout', ()=>{
        buttons[i].style.backgroundColor = '#383838';
    });
};

topScreenContent = topScreen.textContent;
bottomScreenContent = bottomScreen.textContent;

zero.addEventListener('click', ()=>{
    topScreenContent = topScreenContent + `0`;
    bottomScreenContent = bottomScreenContent + `0`;
    topScreen.textContent = topScreenContent;
    bottomScreen.textContent = bottomScreenContent;
});
one.addEventListener('click', ()=>{
    topScreenContent = topScreenContent + `1`;
    bottomScreenContent = bottomScreenContent + `1`;
    topScreen.textContent = topScreenContent;
    bottomScreen.textContent = bottomScreenContent;
});
two.addEventListener('click', ()=>{
    topScreenContent = topScreenContent + `2`;
    bottomScreenContent = bottomScreenContent + `2`;
    topScreen.textContent = topScreenContent;
    bottomScreen.textContent = bottomScreenContent;
});
three.addEventListener('click', ()=>{
    topScreenContent = topScreenContent + `3`;
    bottomScreenContent = bottomScreenContent + `3`;
    topScreen.textContent = topScreenContent;
    bottomScreen.textContent = bottomScreenContent;
});
four.addEventListener('click', ()=>{
    topScreenContent = topScreenContent + `4`;
    bottomScreenContent = bottomScreenContent + `4`;
    topScreen.textContent = topScreenContent;
    bottomScreen.textContent = bottomScreenContent;
});
five.addEventListener('click', ()=>{
    topScreenContent = topScreenContent + `5`;
    bottomScreenContent = bottomScreenContent + `5`;
    topScreen.textContent = topScreenContent;
    bottomScreen.textContent = bottomScreenContent;
});
six.addEventListener('click', ()=>{
    topScreenContent = topScreenContent + `6`;
    bottomScreenContent = bottomScreenContent + `6`;
    topScreen.textContent = topScreenContent;
    bottomScreen.textContent = bottomScreenContent;
});
seven.addEventListener('click', ()=>{
    topScreenContent = topScreenContent + `7`;
    bottomScreenContent = bottomScreenContent + `7`;
    topScreen.textContent = topScreenContent;
    bottomScreen.textContent = bottomScreenContent;
});
eight.addEventListener('click', ()=>{
    topScreenContent = topScreenContent + `8`;
    bottomScreenContent = bottomScreenContent + `8`;
    topScreen.textContent = topScreenContent;
    bottomScreen.textContent = bottomScreenContent;
});
nine.addEventListener('click', ()=>{
    topScreenContent = topScreenContent + `9`;
    bottomScreenContent = bottomScreenContent + `9`;
    topScreen.textContent = topScreenContent;
    bottomScreen.textContent = bottomScreenContent;
});

point.addEventListener('click', ()=>{
    topScreenContent = topScreenContent + `.`;
    bottomScreenContent = bottomScreenContent + `.`;
    topScreen.textContent = topScreenContent;
    bottomScreen.textContent = bottomScreenContent;
});


sum.addEventListener('click', ()=>{
    number1 = bottomScreen.textContent;
    number1 = parseFloat(number1.trim());
    topScreenContent = topScreenContent + ` + `;
    topScreen.textContent = topScreenContent;
    bottomScreenContent = ` `;
    bottomScreen.textContent = ` `;
    operation = `sum`;
});
substraction.addEventListener('click', ()=>{
    number1 = bottomScreen.textContent;
    number1 = parseFloat(number1.trim());
    topScreenContent = topScreenContent + ` - `;
    topScreen.textContent = topScreenContent;
    bottomScreenContent = ` `;
    bottomScreen.textContent = ` `;
    operation = `substraction`;
});
multiplication.addEventListener('click', ()=>{
    number1 = bottomScreen.textContent;
    number1 = parseFloat(number1.trim());
    topScreenContent = topScreenContent + ` x `;
    topScreen.textContent = topScreenContent;
    bottomScreenContent = ` `;
    bottomScreen.textContent = ` `;
    operation = `multiplication`;
});
division.addEventListener('click', ()=>{
    number1 = bottomScreen.textContent;
    number1 = parseFloat(number1.trim());
    topScreenContent = topScreenContent + ` / `;
    topScreen.textContent = topScreenContent;
    bottomScreenContent = ` `;
    bottomScreen.textContent = ` `;
    operation = `division`;
});
remainder.addEventListener('click', ()=>{
    number1 = bottomScreen.textContent;
    number1 = parseFloat(number1.trim());
    topScreenContent = topScreenContent + ` R `;
    topScreen.textContent = topScreenContent;
    bottomScreenContent = ` `;
    bottomScreen.textContent = ` `;
    operation = `remainder`;
});
power.addEventListener('click', ()=>{
    number1 = bottomScreen.textContent;
    number1 = parseFloat(number1.trim());
    topScreenContent = topScreenContent + ` ^ `;
    topScreen.textContent = topScreenContent;
    bottomScreenContent = ` `;
    bottomScreen.textContent = ` `;
    operation = `power`;
});


clean.addEventListener('click', ()=>{
    topScreen.textContent = ` `;
    topScreenContent = ` `;
    bottomScreen.textContent = ` `;
    bottomScreenContent = ` `;
    number1 = ` `;
    number2 = ` `;
    result = ` `;
    operation = ` `;
});
equal.addEventListener('click', ()=>{
    number2 = bottomScreen.textContent;
    number2 = parseFloat(number2.trim());
    operation = operation
    if (operation === "sum") {
        result = number1 + number2;
        bottomScreenContent = result;
        bottomScreen.textContent = bottomScreenContent;
        topScreenContent = topScreenContent + ` = ${result}`;
        topScreen.textContent = topScreenContent;
    }
    else if (operation === "substraction") {
        result = number1 - number2;
        bottomScreenContent = result;
        bottomScreen.textContent = bottomScreenContent;
        topScreenContent = topScreenContent + ` = ${result}`;
        topScreen.textContent = topScreenContent;
    }
    else if (operation === "multiplication") {
        result = number1 * number2;
        bottomScreenContent = result;
        bottomScreen.textContent = bottomScreenContent;
        topScreenContent = topScreenContent + ` = ${result}`;
        topScreen.textContent = topScreenContent;
    }
    else if (operation === "division") {
        result = number1 / number2;
        bottomScreenContent = result;
        bottomScreen.textContent = bottomScreenContent;
        topScreenContent = topScreenContent + ` = ${result}`;
        topScreen.textContent = topScreenContent;
    }
    else if (operation === "remainder") {
        result = number1 % number2;
        bottomScreenContent = result;
        bottomScreen.textContent = bottomScreenContent;
        topScreenContent = topScreenContent + ` = ${result}`;
        topScreen.textContent = topScreenContent;
    }
    else {
        result = Math.pow(number1, number2);
        bottomScreenContent = result;
        bottomScreen.textContent = bottomScreenContent;
        topScreenContent = topScreenContent + ` = ${result}`;
        topScreen.textContent = topScreenContent;
    };
});