import { soma, subtracao, multiplicacao, divisao, exponenciacao } from "./math.js";

console.log("Soma: ", soma(5, 3));
console.log("Subtração: ", subtracao(10, 4));
console.log("Multiplicação: ", multiplicacao(6, 2));
console.log("Divisão: ", divisao(9, 3));
console.log("Exponenciação: ", exponenciacao(2, 3));
console.log("Erro divisão: ", divisao(5, 0));