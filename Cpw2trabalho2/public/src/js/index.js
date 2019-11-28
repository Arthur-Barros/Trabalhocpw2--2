function Adicionar(event) {
    event.preventDefault();
   
    let lista = document.getElementById('select');
    var opt1 = document.createElement('option')
    opt1.value = "valor1";
    opt1.text = "Abacaxi";
    lista.add(opt1, lista.options[1]);
    
    var opt2 = document.createElement('option')
    opt2.value = "valor2";
    opt2.text = "Abaxi";
    lista.add(opt2, lista.options[2]);

    var opt3 = document.createElement('option')
    opt3.value = "valor3";
    opt3.text = "Abacaxi";
    lista.add(opt3, lista.options[3]);

    var opt4 = document.createElement('option')
    opt4.value = "valor4";
    opt4.text = "Abacaxi";
    lista.add(opt4, lista.options[4]);

};