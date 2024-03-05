// -----------------variaveis --------------------
const inputs = document.querySelectorAll('.input');
const btnGerar = document.querySelector('#text-create-password span')
const divSenha = document.querySelector('#container-create-senha')
const pSenha = document.querySelector('#senha-gerada')

//--------------------funções--------------------------

const generateCapitalLetters = () => {
    const letra = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    return letra
}
const generateLowercase = () => {
    const letraMin = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    return letraMin
}
const generateNumber = () => {
    const numero = String.fromCharCode(Math.floor(Math.random() * 10) + 48).toString()
    return numero
}
const generateSymbol = () => {
    const codigos = '!@#$%&{}[]()'
    const randomNumber = Math.floor(Math.random() * codigos.length)
    return codigos[randomNumber]

}
const listaDeFunction = [generateCapitalLetters, generateLowercase, generateNumber, generateSymbol]

const createPassword = () => {
    let arrayPassword = []

    for (let i = 0; i < 10; i++) {
        const randomIndice = Math.floor(Math.random() * 4)
        const caractere = listaDeFunction[randomIndice]()
        arrayPassword.push(caractere)
    }
    return arrayPassword.join('')
}

inputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.previousElementSibling.classList.add('anima-label')
    });

    input.addEventListener('blur', function () {
        if (input.value !== '') return

        else {

            this.previousElementSibling.classList.remove('anima-label')
        }
    });
});

//----------------------eventos--------------
btnGerar.addEventListener('click', () => {
    const senha = createPassword()
    pSenha.textContent = senha
    divSenha.classList.remove('hide')
}) 