let anoNascimento = Number(prompt("Digite sua data de nascimento"))
let anoAtual = Number(2024)
let idade = anoAtual-anoNascimento
if (idade >= 18){
    console.log("Maior de idade!") 
} else{ 
    console.log("Menor de idade!") 
}