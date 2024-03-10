// -----------------variaveis --------------------
const inputs = document.querySelectorAll('.input');
const span = document.querySelector('#text-create-password span')
const divSenha = document.querySelector('#container-create-senha')
const pSenha = document.querySelector('#senha-gerada')
const inputQuantidade = document.querySelector('#iQuantidade')
const containerCustom = document.querySelector('#container-custom-password')
const btnCreate = document.querySelector('.btn-create')
const btnsCheckbox = document.querySelectorAll('.checkbox-create')
const btnCopy = document.querySelector('#copy-password')
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
    const codigos = '!@#$%&{}[]()-+/|'
    const randomNumber = Math.floor(Math.random() * codigos.length)
    return codigos[randomNumber]

}
let listaDeFunction = []

const createPassword = (quantidade) => {
    if (listaDeFunction.length === 0 || quantidade === '') {
        
        return;
    } else {
        let arrayPassword = "";

        for (let i = 0; i < quantidade; i++) {
            const randomIndice = Math.floor(Math.random() * listaDeFunction.length);

            const caractere = listaDeFunction[randomIndice]();
            arrayPassword += caractere;
        }
        
        const senha =  arrayPassword;
  
        pSenha.textContent = senha;

        divSenha.classList.remove('hide');
    }
};



//----------------------eventos--------------
span.addEventListener('click', () => {

    containerCustom.classList.toggle('hide')
})

btnCreate.addEventListener('click', (e) => {
    e.preventDefault()
    const quantidade= inputQuantidade.value
createPassword(quantidade)


})


btnsCheckbox.forEach((btn) => {
    btn.addEventListener('change', (e) => {
        const btn = e.target
        switch (btn.id) {
            case 'iNumber':
                if (btn.checked === true) {
                    listaDeFunction.push(generateNumber)
                    console.log(listaDeFunction)
                }
                else {
                    const indice = listaDeFunction.indexOf(generateNumber)
                    listaDeFunction.splice(indice, 1)
                    console.log(listaDeFunction)
                }
                break
            case 'iLetras':
                if (btn.checked === true) {
                    listaDeFunction.push(generateLowercase, generateCapitalLetters)
                    console.log(listaDeFunction)
                }
                else {
                    const indice = listaDeFunction.indexOf(generateLowercase)
                    listaDeFunction.splice(indice, 2)
                    console.log(listaDeFunction)
                }
                break
            case 'iSimbolos':
                if (btn.checked === true) {
                    listaDeFunction.push(generateSymbol)
                    console.log(listaDeFunction)
                }
                else {
                    const indice = listaDeFunction.indexOf(generateSymbol)
                    listaDeFunction.splice(indice, 1)
                    console.log(listaDeFunction)
                }
                break

        }


    })
})

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

btnCopy.addEventListener('click', (e)=>{
    e.preventDefault()
    passwordText = pSenha.innerText
    navigator.clipboard.writeText(passwordText).then(()=>{
        btnCopy.innerText = 'Senha copiada com sucesso'
        setTimeout(() => {
            btnCopy.innerText = 'Copiar senha'
        }, 2200);
    })
})