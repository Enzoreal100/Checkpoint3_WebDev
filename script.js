//voucher em caps

function upperCase() {
    const voucher = document.getElementById("voucher");
    voucher.value = voucher.value.toUpperCase();
}

function entrar() {
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    email.value = email.value.toUpperCase();
    senha.value = senha.vale.toUpperCase();
}
document.getElementById("maistelefone").addEventListener("click", displayDate)

function registrar() {
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const voucher = document.getElementById("voucher");
    const perfil = document.getElementsByName("Perfil");
    const observacao = document.getElementsByName("observacao");

    email.value = email.value.toUpperCase();
    senha.value = senha.value.toUpperCase();
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
}
