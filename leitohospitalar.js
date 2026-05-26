let leitos = 0;
let limitemax = 2;
let paciente = [];
let texto = "";



function ocuparLeito() {

    if (leitos < limitemax) {
        let nomePaciente = document.getElementById("nomePaciente").value;
        paciente.push(nomePaciente);
        //paciente++;
        if (nomePaciente == "") {
            alert("Por favor, insira o nome do paciente.");
            return;
        }

        leitos++;
        
        document.getElementById("resultado").innerHTML = leitos + " Leitos Ocupados";
        
        document.getElementById("mensagem").innerHTML = "Paciente " + nomePaciente + " ocupou um leito.";
        document.getElementById("mensagem2").innerHTML = "<button id='limpar' onclick='limpar()'>ok</button>";

        

        if (leitos >= limitemax) {
            document.getElementById("resultado").innerHTML = "Hospital Lotado";
        }

        let leitosLivres = limitemax - leitos;
        document.getElementById("leitosLivres").innerHTML = leitosLivres + " Leitos livres";


        if (leitos == limitemax) {
            document.getElementById("zerar").innerHTML = "<button id='zerarBotao' onclick='zerarLeitos()'>Zerar Leitos</button>";
            return leitos;
        }
    }
}

function limpar() {
    document.getElementById("mensagem").innerHTML = "";
    document.getElementById("nomePaciente").value = "";
    document.getElementById("mensagem2").innerHTML = "";
    
}


function liberarLeito() {

    if (leitos > 0) {

        leitos = leitos - 1;
        paciente.pop();
        exibirPacientes();
    }

    document.getElementById("resultado").innerHTML =

        leitos + " Leitos Ocupados";

    let leitosLivres = limitemax - leitos;
    document.getElementById("leitosLivres").innerHTML = leitosLivres + " Leitos livres";
}

function zerarLeitos() {

    leitos = 0;

    document.getElementById("resultado").innerHTML =

        leitos + " Leitos Ocupados";

    let leitosLivres = limitemax - leitos;
    document.getElementById("leitosLivres").innerHTML = leitosLivres + " Leitos livres";
    document.getElementById("zerar").innerHTML = "";
    document.getElementById("mensagem").innerHTML = "";
    document.getElementById("nomePaciente").value = "";
    document.getElementById("mensagem2").innerHTML = "";
    document.getElementById('exibirLista').innerHTML = "";
    paciente.length = 0;
}

function exibirPacientes() {
    // Implementation for displaying the shopping list
    
    let texto = "";
    for (let i = 0; i < paciente.length; i++) {
        texto += `<li>${paciente[i]}</li>`;
    }
    document.getElementById('exibirLista').innerHTML = texto;
    
}
function ocutarPacientes() {
    // Implementation for hiding the shopping list
    document.getElementById('exibirLista').innerHTML = "";
}
/* MELHORIAS:

1. Inserir limite máximo

2. Mostrar:
   "Hospital Lotado"

3. Alterar cores

4. Mostrar leitos livres

5. Inserir nome do paciente

6. Criar botão zerar

*/