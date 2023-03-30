const inputString = document.getElementById("inputString");
const btnInverter = document.getElementById("calcularBtn");
const resultado = document.getElementById("resultado");

function inverterCaracteresString(string) {
  const stringInvertida = string.split("");
  let inicioString = 0;
  let fimString = stringInvertida.length - 1;
  while (inicioString < fimString) {
    const auxiliarTroca = stringInvertida[inicioString];
    stringInvertida[inicioString] = stringInvertida[fimString];
    stringInvertida[fimString] = auxiliarTroca;
    inicioString++;
    fimString--;
  }
  return stringInvertida.join("");
}

btnInverter.addEventListener("click", () => {
  const string = inputString.value;
  const stringInvertida = inverterCaracteresString(string);
  resultado.textContent = stringInvertida;
});
