let v1 = parseFloat(prompt("Digite o primeiro"))
let v2 = parseFloat(prompt("Digite o segundo"))
let teste = 0

if(v1 >= v2){
    teste = v1%v2
    if(teste === 0){
        console.log("Pelo menos um dos números é múltiplo do outro")
    }else{
        console.log("Nenhum dos números é múltiplo do outro")
    }
}
if(v1 <= v2){
    teste = v2%v1
    if(teste === 0){
        console.log("Pelo menos um dos números é múltiplo do outro")
    }else{
        console.log("Nenhum dos números é múltiplo do outro")
    }
}
