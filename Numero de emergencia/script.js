function consultar() {
    let opcao;

    opcao=parseInt(document.getElementById("selecao").value);

    switch (opcao) {
        case 1:
            resultado.innerHTML = "Número para contato: 190";
            break;

        case 2:
            resultado.innerHTML = "Número para contato: 193";
            break;

        case 3:
            resultado.innerHTML = "Número para contato: 192";
            break;

        case 4:
            resultado.innerHTML = "Número para contato: 199";
            break;

        case 5:
            resultado.innerHTML = "Número para contato: 197";
            break;

        case 6:
            resultado.innerHTML = "Número para contato: (21) 2332-2924";
            break;

        case 7:
            resultado.innerHTML = "Número para contato: (21) 2253-1177";
            break;

        case 8:
            resultado.innerHTML = "Número para contato: 180";
            break;

        case 9:
            resultado.innerHTML = "Número para contato: 100";
            break;

        case 10:
            resultado.innerHTML = "Número para contato: 151";
            break;

        case 11:
            resultado.innerHTML = "Número para contato: (21) 2332-8611";
            break;

        case 12:
            resultado.innerHTML = "Número para contato: (21) 3460-4040";
            break;

        case 13:
            resultado.innerHTML = "Número para contato: (21) 2334-7910";
            break;
    }
}