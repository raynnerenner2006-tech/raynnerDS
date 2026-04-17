function calcularSalario(){
    let bruto = parseFloat(document.getElementById("salarioBruto").value);
    let resDesconto = document.getElementById("resDesconto");
    let resLiquido = document.getElementById("resLiquido");
    if (isNaN(bruto)|| bruto <= 0) {
        resDesconto.textContent = "Por favor, informe um valor válido.";
        resLiquido.textContent = ""; return;
    }
    let taxa = 0
    if (bruto <= 1621.00) {
        taxa = 0.075; // 7,5%
    } else if (bruto <= 2902.84) {
        taxa = 0.09; // 9%
    } else if (bruto <= 4354.27) {
        taxa = 0.12; // 12%
    } else if (bruto <= 8475.55) {
        taxa = 0.14; // 14%
    } else {taxa = 0.14;}
    let descontoINSS = bruto * taxa;
    let liquido = bruto - descontoINSS;
    resDesconto.innerHTML = `Desconto INSS (${taxa*100}%): <strong>R$ 
    ${descontoINSS.toFixed(2)}</strong>`;
    resLiquido.innerHTML = `Salário Líquido: <strong>R$ 
    ${liquido.toFixed(2)}</strong>`;
    resDesconto.style.color = "red";
    resLiquido.style.color = "blue";   
}
function limparCampos(){
        document.getElementById("salarioBruto").value = "";
        document.getElementById("resDesconto").textContent = "";
        document.getElementById("resLiquido").textContent = "";
        document.getElementById("salarioBruto").focus();
        document.getElementById("inputIdade").value = "";
        document.getElementById("resIdade").textContent = "";
    }
function verificarIdade(){
    let idade = document.getElementById("inputIdade").value;
    let resultado = document.getElementById("resIdade");
    if (idade === "") {
        resultado.innerHTML = "por favor, digite sua idade."; return;
    }
    if (parseInt(idade) >= 18){
        resultado.innerHTML = "Status:<strong>Você pode dirigir</strong>";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "Status:<strong>Você não pode dirigir</strong>";
        resultado.style.color = "red";
    }
}
function cadastrar(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;
    let msg = document.getElementById("mensagem");
    if (nome === ""){
        msg.textContent = "Digite seu nome.";
        msg.style.color = "red"; return;
    }
    if (!email.includes("@")){
        msg.textContent = "Email inválido.";
        msg.style.color = "red"; return;
    }
    if (senha !== confirmarSenha){
        msg.textContent = "As senhas não conferem.";
        msg.style.color = "red"; return;
    }
    msg.textContent = "Cadastro realizado com sucesso!";
    msg.style.color = "green";
}