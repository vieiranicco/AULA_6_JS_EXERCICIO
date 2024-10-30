// Solicita o valor total
let valorTotal = parseFloat(prompt("Digite o valor total a ser parcelado:"));

// Solicita o número de parcelas
let numeroParcelas = parseInt(prompt("Digite o número de parcelas:"));

// Verifica se os valores são válidos
if (isNaN(valorTotal) || isNaN(numeroParcelas) || numeroParcelas <= 0) {
    console.log("Por favor, insira valores válidos.");
} else {
    // Calcula o valor de cada parcela
    let valorParcela = valorTotal / numeroParcelas;

    // Exibe o valor de cada parcela no console
    console.log(`Valor total: R$${valorTotal.toFixed(2)}`);
    console.log(`Número de parcelas: ${numeroParcelas}`);
    console.log(`Valor de cada parcela: R$${valorParcela.toFixed(2)}`);

    for (let i = 1; i <= numeroParcelas; i++) {
        console.log(`Parcela ${i}: R$${valorParcela.toFixed(2)}`);
    }
}