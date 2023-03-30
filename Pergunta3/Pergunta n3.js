const dados = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

const tabelaValores = document.querySelector("#valores");
dados.forEach((element) => {
  const tr = document.createElement("tr");
  const tdDia = document.createElement("td");
  tdDia.textContent = element.dia;
  const tdValor = document.createElement("td");
  tdValor.textContent = element.valor.toFixed(2);
  tr.appendChild(tdDia);
  tr.appendChild(tdValor);
  tabelaValores.appendChild(tr);
});

function menorValor(dados) {
  let aux = dados[0];
  dados.forEach((element) => {
    element.valor < aux.valor ? (aux = element) : (aux = aux);
  });
  return aux.valor.toFixed(2);
}

function maiorValor(dados) {
  let aux = dados[0];
  dados.forEach((element) => {
    element.valor > aux.valor ? (aux = element) : (aux = aux);
  });
  return aux.valor.toFixed(2);
}

function diasMaioresMedia(dados, media) {
  let aux = 0;
  dados.forEach((element) => {
    element.valor > media ? aux++ : (aux = aux);
  });
  return aux;
}

function mediaValores(dados) {
  let soma = 0;
  let dias = 0;
  dados.forEach((element) => {
    soma += element.valor;
    element.valor > 0 ? dias++ : (dias = dias);
  });
  return (soma / dias).toFixed(2);
}

const menor = document.querySelector("#menor");
const maior = document.querySelector("#maior");
const media = document.querySelector("#media");
const diasMaiores = document.querySelector("#dias-maiores");

const menorValorCalculado = menorValor(dados);
const maiorValorCalculado = maiorValor(dados);
const mediaValoresCalculada = mediaValores(dados);
const diasMaioresMediaCalculado = diasMaioresMedia(
  dados,
  mediaValoresCalculada
);

menor.textContent = menorValorCalculado;
maior.textContent = maiorValorCalculado;
media.textContent = mediaValoresCalculada;
diasMaiores.textContent = diasMaioresMediaCalculado;
