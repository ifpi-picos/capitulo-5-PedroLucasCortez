let nota1 = Number(prompt("Nota 1: "))
let nota2 = Number(prompt("Nota 2: "))
let nota3 = Number(prompt("Nota 3: "))
let media = (nota1 + nota2 + nota3) / 3
if(media >= 7) {
    console.log("Aprovado!")
} else{
    console.log("Reprovado!")
}