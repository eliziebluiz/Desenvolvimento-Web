function some(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  return Number(a) / Number(b);
}

function operation(operacao, operandoone, operandotwo) {
  let resultado = 0;

  if (operacao === "+") {
    resultado = some(operandoone, operandotwo);
  } else if (operacao === "-") {
    resultado = subtract(operandoone, operandotwo);
  } else if (operacao === "*") {
    resultado = multiply(operandoone, operandotwo);
  } else if (operacao === "/") {
    resultado = divide(operandoone, operandotwo);
  }

  return resultado;
}

function main() {
  let operandoone = prompt("Digite o primeiro número:");
  let operacao = prompt("Digite a operação:");
  let operandotwo = prompt("Digite o segundo número:");
  let resultado = operation(operacao, operandoone, operandotwo);

  let operando1 = document.getElementById("operando1");
  let idoperacao = document.getElementById("operacao");
  let operando2 = document.getElementById("operando2");
  let result = document.getElementById("resultado");
  let igualdade = document.getElementById("igualdade");

  if (operandoone && operacao && operandotwo && resultado) {
    operando1.innerHTML = operandoone;
    idoperacao.innerHTML = operacao;
    operando2.innerHTML = operandotwo;
    result.innerHTML = resultado;
    igualdade.innerHTML = "=";
  }
}

main();
