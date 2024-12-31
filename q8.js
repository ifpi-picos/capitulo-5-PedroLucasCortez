console.log("Temos Pizza, Hamburguer, Macarrão e Salada")
let prato = prompt("Digite seu prato").toLowerCase()

switch (prato) {
  case 'pizza':
    console.log('Baratin pae 3.7 dolares');
    break;
  case 'hamburguer':
    console.log('hambuger.');
    break;
  case 'macarrao':
    console.log('Macarrão ao molho');
    break;
  case 'salada':
    console.log("Salada")
    break;
  default:
    console.log(`Não temos ${prato}.`);
}
