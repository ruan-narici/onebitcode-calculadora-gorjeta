//Valores
const vlr_conta = document.querySelector('#inpt-valor-conta');
const avl_serv = document.querySelector('#select-desc-serv');
const qtd_div_conta = document.querySelector('#inpt-qtd-pessoas');

//Elementos
const btn_click = document.querySelector('#btn-calcular');
const result_text  = document.querySelector('.result');
const result_number = document.querySelector('.result-vlr');
const result_pessoas = document.querySelector('.result-qtd-pessoas');

//Funções
function calc_gorjeta () {
    let calc =  vlr_conta.value * avl_serv.value / qtd_div_conta.value;
    result_text.innerHTML = "A gorjeta é de";
    result_number.innerHTML = ` R$${calc.toFixed(2)}`;
    if (qtd_div_conta.value > 1) {
        result_pessoas.innerHTML = "por pessoa";
    }
    else {
        result_pessoas.innerHTML = "";
    }
}

//Execução
btn_click.onclick = function () {
    if (vlr_conta.value != '' &&
        avl_serv.value != '' &&
        qtd_div_conta.value != ''){
            calc_gorjeta();
    }
    else {
        result_text.innerHTML = "Preencha os campos obrigatórios";
        console.log('Preencha os campos obrigatórios');
    }
}
