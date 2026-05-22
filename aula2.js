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