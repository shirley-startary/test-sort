const botons = Array.from(document.querySelectorAll('button'));
const {
    suma,
    resta,
    multiplicacion,
    division
} = calculator;

botons.forEach(boton => boton.addEventListener('click', (e) => {
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;
    const resultado = document.getElementById('resultado');
    let result;
    switch (e.target.id) {
        case 'suma':
            result = suma(num1, num2);
            break;
        case 'resta':
            result = resta(num1, num2);
            break;
        case 'multi':
            result = multiplicacion(num1, num2);
            break;
        case 'division':
            result = division(num1, num2);
            break;
        default:
            break;
    }
    resultado.innerHTML = result;
}));