let v1 = parseFloat(prompt("Digite o primeiro"))
let v2 = parseFloat(prompt("Digite o segundo"))
let v3 = parseFloat(prompt("Digite o terceiro"))

if(v1 && v2 === v3){
    console.log("Equilatero")
}
else if(v1 !== v2 && v2 !== v3 && v3 !== v1){
    console.log("Escaleno")
}
else{
    console.log("Isoceles")
}