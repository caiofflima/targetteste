const inputNumero = document.getElementById("inputNumero");
const verificarBtn = document.getElementById("verificarBtn");
const resultado = document.getElementById("resultado");

const fibonacci = (vI) => {
  let penultimo = 0;
  let ultimo = 1;

  let numero = 0;

  if (vI < 0 || !Number.isInteger(vI)) return "não foi encontrado.";

  if (vI == 0 || vI == 1) return "foi encontrado.";
  else {
    while (vI > numero) {
      numero = penultimo + ultimo;
      if (numero == vI) return "foi encontrado.";
      penultimo = ultimo;
      ultimo = numero;
    }
    return "não foi encontrado.";
  }
};

verificarBtn.addEventListener("click", () => {
  const numero = parseInt(inputNumero.value);
  const resultadoFibonacci = fibonacci(numero);
  resultado.textContent = `O número ${numero} ${resultadoFibonacci} como um número de Fibonacci.`;
});
