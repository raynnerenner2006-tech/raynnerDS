function verificarTime(){
    let produto = Number(document.getElementById("time").value);
    let mensagem = "";
    switch (produto){
        case 1: mensagem = "Você escolheu Vitótia"; break;
        case 2: mensagem = "Você escolheu  Bahia"; break;
        case 3: mensagem = "Você escolheu Santos"; break;
        case 4: mensagem = "Você escolheu Sport Recife"; break;
        default: mensagem = "Código inválido!";
    }
    document.getElementById("resultado").innerHTML = mensagem; 
}
function verificarPedido(){
    let produto = Number(document.getElementById("produto").value);
    let mensagem = "";
    switch (produto){
        case 1: mensagem = "Você escolheu Hambúrguer"; break;
        case 2: mensagem = "Você escolheu Pizza"; break;
        case 3: mensagem = "Você escolheu Refrigerante"; break;
        case 4: mensagem = "Você escolheu Sorverte"; break;
        default: mensagem = "Código inválido!";
    }
    document.getElementById("resultado1").innerHTML = mensagem;
}
function calcular(){
    let produto = Number(document.getElementById("produto").value);
    let quantidade = Number(document.getElementById("quantidade").value);
    let nome = "";
    let preco = 0;
    let total = 0;
    let mensagem = "";
    switch (produto) {
        case 1: nome = "Hambúrguer"; preco = 10; total =preco*quantidade;
        if (quantidade >= 3) {
            mensagem = "Você ganhou desconto!"; total = total = total * 0.9;// 10% desconto
        } else {
            mensagem = "Compre 3 ou mais para ganhar desconto!"; } break;
        case 2: nome = "Pizza"; preco = 20; total*quantidade;
        if (quantidade >= 2) {
            mensagem = "Frete grátis!";
        } else {
            mensagem = "Frete será cobrado."; } break;
        case 3: nome = "Refrigerante"; preco = 5; total*quantidade;
        if (quantidade >= 5) {
            mensagem = "Leve 5 e pague 4!";
            total = preco*(quantidade - 1);
        } else {
            mensagem = "Promoção a partir de 5 unidades."; } break;
        default: "Produto inválido!";
    } document.getElementById("resultado3").innerHTML = mensagem;
}