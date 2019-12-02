
var itens = [{ descricao: 'Abacaxi', unidade: 'Un' }, { descricao: 'Morango', unidade: 'kg' },
{ descricao: 'Laranja', unidade: 'Un' }, { descricao: 'Limão', unidade: 'un' }]




function adicionar() {

    for (let i = 0; i < itens.length; i++) {

        let desc = itens[i].descricao;
        let un = itens[i].unidade;

        let lista = document.getElementById('select');


        let option = document.createElement('option');
        option.text = itens[i].descricao;
        option.value = i;
        lista.appendChild(option);

        let resposta = document.getElementById('resposta');

        let itemSelecionado = i;
        itemSelecionado = un;
        resposta.innerText = itemSelecionado;
    }
}


function buscarUnidade () {

}



function  carregarUnidadeDeMedida(event) {
    // Inibe a recarga da página
    event.preventDefault();

    // Recupera os valores do formulário
    let itemSelecionado = i;

    console.log(itemSelecionado);
    //console.log(itemSelecionado);

    let divUnidadeDeMedida = document.getElementById('unidadeDeMedida');
    let unidadeDeMedida = buscarUnidade(itemSelecionado);
    divUnidadeDeMedida.innerText = unidadeDeMedida

    

    if (unidadeDeMedida == 'kg') {
        let inputNumber = document.getElementById('quantidade');
        inputNumber.setAttribute('step', '0.01');
    } else {
        document.getElementById('quantidade').value = '';
        let inputNumber = document.getElementById('quantidade');
        inputNumber.removeAttribute('step');
    }
}


adicionar();

buscarUnidade();
