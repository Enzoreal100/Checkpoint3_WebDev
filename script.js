//voucher em caps

function upperCase() {
    const voucher = document.getElementById("voucher");
    voucher.value = voucher.value.toUpperCase();
}

function lowerCase() {
    const email = document.getElementById("email");
    email.value = email.value.toLowerCase();
}
function entrar() {
    const emailLogin = document.getElementById("email");
    const senhaLogin = document.getElementById("senha");

}
//codigo botao dinamico telefone
let fsList = document.querySelectorAll('.multiple-field');
for(let i = 0; i < fsList.length; i++){
    initMultipleFieldSet(fsList[i]);
}

//adicionar multiplos elementos
function initMultipleFieldSet(fs){
    //criar elemento botão
    let addButton = document.createElement('button');
    //texto no botão
    addButton.textContent = 'Adicionar';
    //tipo do elemento = botão
    addButton.type = 'button';

    fs.appendChild(addButton);

    let firstInput = fs.querySelector('input');

    addButton.addEventListener('click', function(){
        let div = document.createElement('div');
        let newInput = document.createElement('input');
        newInput.name = firstInput.name;
        newInput.type = firstInput.type;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.type = 'button';

        div.appendChild(newInput);
        div.appendChild(deleteButton);

        deleteButton.addEventListener('click', function(){
            div.remove();
        });

        fs.insertBefore(div,addButton);
    });
}

//função pra registrar
function registrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const voucher = document.getElementById("voucher").value;
    const perfil = document.getElementById("Perfil");
    const observacao = document.getElementById("observacao").value;

    const validavoucher = ["SEJAPRATA", "SEJAOURO", "SEJADIAMANTE"];
    if (observacao === "A") {
        if (voucher !== validavoucher[0]) {
            confirm("VOUCHER INVÁLIDO");
        }
    } else if (observacao === "B") {
        if (voucher !== validavoucher[1]) {
            confirm("VOUCHER INVÁLIDO");
        }
    } else {
        if (voucher !== validavoucher[2]) {
            confirm("VOUCHER INVÁLIDO");
        }
    }

    let validacao = [email, senha, voucher, perfil, observacao];
    return validacao
}
console.log(registrar())