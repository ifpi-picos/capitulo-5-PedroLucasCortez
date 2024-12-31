let escala = parseFloat(prompt("Digite 1 para transformar em celsius e Digite 2 para transformar em Farenhait\n"))
let valor = parseFloat(prompt("Digite o valor da tranformação "))
let novo_valor = 0
if(escala === 1 ){
    novo_valor = (valor * 1.8) + 32
}
if(escala === 2){
    novo_valor = (valor-32)/1.8
}
console.log(novo_valor)