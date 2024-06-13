// Parte 03 del desafío

function verifyPassword() {
    // Obtener los valores de los select
    const digit1 = document.querySelector('#digito1').value;
    const digit2 = document.querySelector('#digito2').value;
    const digit3 = document.querySelector('#digito3').value;

    // Concatenar los valores para formar el password
    const password = digit1 + digit2 + digit3;

    // Obtener el elemento donde se mostrará el resultado
    const resultPassword = document.querySelector('#result');

    // Condición para verificar el password y mostrar el mensaje correspondiente
    if (password === '911') {
        resultPassword.innerHTML = 'password 1 es correcto';
        resultPassword.style.color = 'green';
    } else if (password === '714') {
        resultPassword.innerHTML = 'password 2 es correcto';
        resultPassword.style.color = 'green';
    } else {
        resultPassword.innerHTML = 'password incorrecto';
        resultPassword.style.color = 'red';
    }
}