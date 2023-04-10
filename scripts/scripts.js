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
    const tabela = document.createElement('table');
    const tblCorpo = document.createElement('tbody');
    const linha = document.createElement('tr');
    const celula = document.createElement('rd');
    
    const celulaText = document.createTextNode(rua.value);
    celula.appendChild(celulaText)

    linha.appendChild(celula)
    tblCorpo.appendChild(linha)

    tabela.appendChild(tblCorpo)
    document.body.appendChild(tabela);

    tabela.setAttribute("border", "2");

}




/// 2- adicionar o loop para criar as linhas para cada confirmação de produto///

/// função para fazerm donwload da tabela (pesquisa deve ser feita no stackoverflow)