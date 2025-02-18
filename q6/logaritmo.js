import { log } from "mathjs";

async function prompt(mensagem) {
    process.stdout.write(mensagem);
    return new Promise(res => process.stdin.once("data", d => res(d.toString().trim())));
}

async function calcularLogaritmo() {
    let numero = await prompt("Digite um número: ");
    numero = parseFloat(numero);

    if (isNaN(numero) || numero <= 0) {
        console.log("Por favor, digite um número válido e maior que zero.");
        return;
    }

    console.log(`Logaritmo natural (ln): ${log(numero)}`);
    console.log(`Logaritmo na base 10: ${log(numero, 10)}`);
    console.log(`Logaritmo na base 2: ${log(numero, 2)}`);
}

calcularLogaritmo();
