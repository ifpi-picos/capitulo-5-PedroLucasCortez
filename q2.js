let num1 = parseInt(prompt("Digite o primeiro número:"))
let num2 = parseInt(prompt("Digite o segundo número:"))
let num3 = parseInt(prompt("Digite o terceiro número:"))
let numeroMaior
if (num1 > num2  && num1 > num3) {
numeroMaior = num1
} else if (num2 > num3 && num2 > num1) {
numeroMaior = num2
} else {
    numeroMaior = num3}
    console.log("Omaior número digitado é : ", numeroMaior)