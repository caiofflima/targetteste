//Constante para comparação
const vI = 957;

const fibonacci = () => {
    let penultimo = 0;
    let ultimo = 1;
  
    let numero = 0;

    // Verifica se o valor é inteiro e positivo
    if (vI < 0 || !Number.isInteger(vI)) return "não foi encontrado.";
    
    // Verifica se o valor é 0 ou 1
    if (vI == 0 || vI == 1) return "foi encontrado." 

    // Calcula Fibboacci
    else {
       while (vI > numero){
         numero = penultimo + ultimo;
         if (numero == vI) return "foi encontrado."
         penultimo = ultimo;
         ultimo = numero;
       }
       return "não foi encontrado.";
     }
  }

console.log("O numero", vI, fibonacci());