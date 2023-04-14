var rua = document.getElementById('Rua');
let codigo = document.getElementById('Cod');
let quantidade = document.getElementById('qtd');
let validade = document.getElementById('val');
var alerta = document.getElementById('alerta');
let novo_produto = document.getElementById('new_produto')

let botão = document.getElementById('new_produto')
let baixar = document.getElementById('baixar_planilha') //botão de baixar a planilha

var tabela = document.getElementsByClassName('my_tabela')[0]
//codigo.value, rua.value,quantidade.value,validade.value, alerta.value
//alert(codigo.value)

////1- criar a função que captura os dados dos campos e adiciona a tabela 
function add_produto(){
    var tabela = document.getElementById('tabela-main'); // conexão com a pagina que contem a tabela
    var linha = tabela.insertRow();


    if(
    rua.value== ''||
    codigo.value== ''||
    quantidade.value== ''||
    validade.value== ''
    ){
        alerta.innerText = 'Insira todos os campos' //alerta de confirmação da ação
        alerta.style.color='#FF0000'

        rua.style.borderBlockColor='#FF0000'
        codigo.style.borderBlockColor='#FF0000'
        quantidade.style.borderBlockColor='#FF0000'
        validade.style.borderBlockColor='#FF0000'
        

    }else{
        var celula1 = linha.insertCell(); //rua
        var celula2 = linha.insertCell(); // codigo
        var celula3 = linha.insertCell(); //quantidade
        var celula4 = linha.insertCell(); //validade

        celula1.innerHTML = rua.value
        celula2.innerHTML = codigo.value
        celula3.innerHTML = quantidade.value
        celula4.innerHTML = validade.value
        
        alerta.innerText = 'produto adicionado com sucesso !' //alerta de confirmação da ação
        alerta.style.color='4ee44e'

        rua.style.borderBlockColor='#dee2e6'
        codigo.style.borderBlockColor='#dee2e6'
        quantidade.style.borderBlockColor='#dee2e6'
        validade.style.borderBlockColor='#dee2e6'

    }
}


function reset_form(){

    document.getElementById('Rua').value= " "
    document.getElementById('Cod').value= " "
    document.getElementById('qtd').value= " "
    document.getElementById('val').value= " "

    alerta.innerText = ' ' 

}




function donwload(){
    TableExport(document.getElementsByTagName("table")), {
        filename: 'excelfile',            
        sheetname: "sheet1"  
    }

}