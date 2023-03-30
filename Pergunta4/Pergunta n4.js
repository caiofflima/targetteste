var dados = require("fs").readFileSync("./Pergunta4/dados.json", "utf8");
dados = JSON.parse(dados);

const estado = "SP";

function percentualEstado(dados, estado) {
  let soma = 0;
  let somaEstado = 0;
  dados.forEach((element) => {
    soma += element.valor;
    element.estado == estado
      ? (somaEstado += element.valor)
      : (somaEstado = somaEstado);
  });
  console.log("Valor total:", soma);
  console.log("Percentual do estado", estado, ":", (somaEstado / soma) * 100);
}

percentualEstado(dados, estado);
