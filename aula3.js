function verificarProduto() {
    let produto = parseInt(document.getElementById('produto').value);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let nome = "";
    let preco = 0;
    let total = 0;
    let mensagem = "";

    switch (produto) {
        case 1:
            nome = "Camiseta";
            preco = 50;
            total = preco * quantidade;
            if (quantidade >= 3) {
                total *= 0.9; // Aplica 10% de desconto
                mensagem = "total: R$" + total.toFixed(2) + " - Parabéns! Você ganhou 10% de desconto!";
            } else {
                mensagem = "total: R$" + total.toFixed(2) + " - Compre 3 ou mais camisetas para ganhar 10% de desconto!";
            }
            break;
              case 2:
            nome = "Calça";
            preco = 100;
            total = preco * quantidade;
            if (quantidade >= 2) {
                mensagem = "total: R$" + total.toFixed(2) + " - frete grátis para compras de 2 ou mais calças!";
            } else {
                mensagem = "total: R$" + total.toFixed(2) + " - frete a pagar!";
            }
            break;
              case 3:
            nome = "Tênis";
            preco = 200;
            total = preco * quantidade;
            if (quantidade >= 5) {
                total = preco * (quantidade - 1); // Aplica a promoção "Leve 5 e pague 4"
                mensagem = "Leve 5 e pague 4! - Total a pagar: R$ " + total.toFixed(2);  ;
                 
            } else {
                mensagem = "Compre 5 ou mais unidades para ganhar a promoção!";
            }
            break;

             default:
            mensagem = "Número inválido. Por favor, escolha um número entre 1 e 3.";
    }
    // Se o produto for válido, calcula o total sem desconto e exibe a mensagem final
    if (!mensagem) {
        total = preco * quantidade;
        mensagem = `Você comprou ${quantidade} ${nome}(s) por R$ ${total.toFixed(2)}.`;
    }

    document.getElementById('resultadoProduto').value = mensagem;

   /*document.getElementById('resultadoProduto2').innerHTML = "Produto: " + nome + "<br>" + 
    "Quantidade: "+ quantidade + "<br>" + "Total: R$ " + total.toFixed(2)+ "<br>" + mensagem;*/
}

function calcular(){
    let produto = Number(document.getElementById("produto").value);
    let quantidade = Number(document.getElementById("quantidade").value);
    let nome = "";
    let preco = 0;
    let total = 0;
    let mensagem = "";
    switch (produto) {
        case 1: nome = "Hambúrguer"; preco = 10; total = preco*quantidade;
        if (quantidade >= 3) {
            mensagem = "Você ganhou desconto!"; total = total = total * 0.9;// 10% desconto
        } else {
            mensagem = "Compre 3 ou mais para ganhar desconto!"; } 
            break;
        case 2: nome = "Pizza"; preco = 20; total = preco*quantidade;
        if (quantidade >= 2) {
            mensagem = "Frete grátis!";
        } else {
            mensagem = "Frete será cobrado."; }
            break;
        case 3: nome = "Refrigerante"; preco = 5; total = preco*quantidade;
        if (quantidade >= 5) {
            mensagem = "Leve 5 e pague 4!";
            total = preco*(quantidade - Math.floor(quantidade/5));
        } else {
            mensagem = "Promoção a partir de 5 unidades."; } 
            break;
        default: "Produto inválido!"; } 
    document.getElementById("resultado2").innerHTML = "Produto: " + nome + "<br>" + "Quantidade: " + quantidade + "<br>" +
    "Total: R$ " + total.toFixed(2) + "<br>" + mensagem;
}
function gerarAleatorio(){
    let x = Number(Math.floor(Math.random() * 100));
    document.getElementById("random").value = x;
}
function pontecia(){
    let base = Number(document.getElementById("Base").value);
    let expoente = Number
}