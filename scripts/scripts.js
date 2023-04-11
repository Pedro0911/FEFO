var rua = document.getElementById('Rua');
let codigo = document.getElementById('Cod');
let quantidade = document.getElementById('qtd');
let validade = document.getElementById('val');

//codigo.value, rua.value,quantidade.value,validade.value
//alert(codigo.value)

//abaixo terei as seções da lógica fuuncional da aplicação

////1- criar a função que captura os dados dos campos e adiciona a tabela/// 
function add_produto(){ 
    //criação da tabela antes de estar em algum loop
    var tabela = document.getElementById('tabela-main'); // conexão com a pagina que contem a tabela
    var linha = tabela.insertRow();

    var celula1 = linha.insertCell(); //rua
    var celula2 = linha.insertCell();// codigo
    var celula3 = linha.insertCell();//quantidade
    var celula4 = linha.insertCell();//validade

    celula1.innerHTML = rua.value
    celula2.innerHTML = codigo.value
    celula3.innerHTML = quantidade.value
    celula4.innerHTML = validade.value


}




/// 2- adicionar o loop para criar as linhas para cada confirmação de produto///

/// função para fazerm donwload da tabela (pesquisa deve ser feita no stackoverflow)