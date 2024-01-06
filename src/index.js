const
    rangeInput = document.querySelector(`.input_range`),
    sliderNum = document.querySelector(`.span_password_length`),
    passwordInput = document.querySelector(`.span_password`),

    uppercase = document.getElementById(`uppercase`),
    numbers = document.getElementById(`numbers`),
    special = document.getElementById(`special`),
    
    btnGenerate = document.querySelector(`.button_generate`),
    btnCopy = document.querySelector(`.button_copy`)

let
    charLowercase = `abcdefghijklmnopqrstuvwxyz`,
    charUppercase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
    charNumbers = `0123456789`,
    charSpecial = `^!$%&|[]{}():;.,@+-*<>#`

const generatePassword = () => {
    let password = ``
    let chars = ``

    chars += charLowercase
    chars += uppercase.checked ? charUppercase : ``
    chars += numbers.checked ? charNumbers : ``
    chars += special.checked ? charSpecial : ``

    for (let i = 0; i <= rangeInput.value - 1; i++) {
        let rand = Math.floor(Math.random() * chars.length)
        password += chars.substring(rand, rand + 1)
    }

    passwordInput.innerText = `${password}`
}

rangeInput.addEventListener(`click`, () => {
    sliderNum.innerText = rangeInput.value
})

const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.innerText)
    console.log(`Copiado para a area de transferencia`)
}

btnGenerate.addEventListener(`click`, generatePassword)
btnCopy.addEventListener(`click`, copyPassword)
