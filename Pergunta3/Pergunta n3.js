var dados = require("fs").readFileSync("dados.json", "utf8");
dados = JSON.parse(dados);

function menorValor(dados) {
  let aux = dados[0];
  dados.forEach((element) => {
    element.valor < aux.valor ? (aux = element) : (aux = aux);
  });
  console.log("Menor valor:", aux);
}

function maiorValor(dados) {
  let aux = dados[0];
  dados.forEach((element) => {
    element.valor > aux.valor ? (aux = element) : (aux = aux);
  });
  console.log("Maior valor:", aux);
}

function diasMenorValorMedia(dados, callback) {
  let soma = 0;
  let dias = 0;
  dados.forEach((element) => {
    soma += element.valor;
    element.valor > 0 ? dias++ : (dias = dias);
  });
  console.log("Média dos valores:", soma / dias);
  callback(dados, soma / dias);
}

diasMenorValorMedia(dados, (dados, media) => {
  let aux = 0;
  dados.forEach((element) => {
    element.valor > media ? aux++ : (aux = aux);
  });
  console.log("Dias com valores maiores que a média:", aux);
});

menorValor(dados);
maiorValor(dados);
