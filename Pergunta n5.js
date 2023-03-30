const string = "Target Sistemas";

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
console.log(inverterCaracteresString(string));
