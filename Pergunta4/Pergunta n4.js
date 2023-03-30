const selectEstado = document.querySelector("#estado");
const resultado = document.querySelector("#resultado");

const dados = [
  {
    estado: "SP",
    valor: 67836.43,
  },
  {
    estado: "RJ",
    valor: 36678.66,
  },
  {
    estado: "MG",
    valor: 29229.88,
  },
  {
    estado: "ES",
    valor: 27165.48,
  },
  {
    estado: "Outros",
    valor: 19849.53,
  },
];

dados.forEach((element) => {
  const option = document.createElement("option");
  option.value = element.estado;
  option.text = element.estado;
  selectEstado.add(option);
});

function percentualEstado(dados, estado) {
  let soma = 0;
  let somaEstado = 0;
  dados.forEach((element) => {
    soma += element.valor;
    element.estado == estado
      ? (somaEstado += element.valor)
      : (somaEstado = somaEstado);
  });
  return (somaEstado / soma) * 100;
}

const calcularBtn = document.querySelector("#calcularBtn");
calcularBtn.addEventListener("click", () => {
  const estadoSelecionado = selectEstado.value;
  const percentual = percentualEstado(dados, estadoSelecionado);
  resultado.textContent = `Percentual do estado ${estadoSelecionado}: ${percentual.toFixed(
    2
  )}%`;
});
