let codigo = document.getElementById('Cod'); // codigo do produto
var motivo = document.getElementById('motivo'); // motivo do descarte
let quantidade = document.getElementById('qtd');// quantidade de produtos
let validade = document.getElementById('val'); // validade do produto bloqueado
let bloqueio = document.getElementById('data_block'); // data em que o produto foi bloqueado
let tratativa = document.getElementById('tratativa'); // data da trativa

// alertas e botões
var alerta = document.getElementById('alerta');
let novo_produto = document.getElementById('new_produto')
let botão = document.getElementById('new_produto')
let baixar = document.getElementById('baixar_planilha') //botão de baixar a planilha

var tabela = document.getElementsByClassName('my_tabela')[0] // tabela

//codigo.value, rua.value,quantidade.value,validade.value, alerta.value

////1- criar a função que captura os dados dos campos e adiciona a tabela 
function add_produto(){
    var tabela = document.getElementById('tabela-pnc'); // conexão com a pagina que contem a tabela
    var linha = tabela.insertRow();


    if(
    motivo.value== ''||
    codigo.value== ''||
    quantidade.value== ''||
    validade.value== ''||
    bloqueio.value == ''||
    tratativa.value==''
    ){
        alerta.innerText = 'Insira todos os campos' //alerta de confirmação da ação
        alerta.style.color='#FF0000'

        motivo.style.borderBlockColor='#FF0000'
        codigo.style.borderBlockColor='#FF0000'
        quantidade.style.borderBlockColor='#FF0000'
        validade.style.borderBlockColor='#FF0000'
        bloqueio.style.borderBlockColor='#FF0000'
        trataiva.style.borderBlockColor='#FF0000'
        

    }else{
        var celula1 = linha.insertCell(); //motivo
        var celula2 = linha.insertCell(); // codigo
        var celula3 = linha.insertCell(); //quantidade
        var celula4 = linha.insertCell(); //validade
        var celula5 = linha.insertCell(); //bloqueio
        var celula6 = linha.insertCell(); //tratativa

        var dia = validade.value.slice(0,2)
        var mes = validade.value.slice(2,4)
        var ano = validade.value.slice(4,)


        celula1.innerHTML = motivo.value //.toUpperCase()
        celula2.innerHTML = codigo.value // codigo
        celula3.innerHTML = quantidade.value // quantidade
        celula4.innerHTML = `${dia}/${mes}/${ano}` //validade
        celula5.innerHTML = `${dia}/${mes}/${ano}` //bloqueio
        celula6.innerHTML = `${dia}/${mes}/${ano}` //tratativa

        
        //celula4.innerHTML = validade.value
        
        alerta.innerText = 'produto adicionado com sucesso !' //alerta de confirmação da ação
        alerta.style.color='4ee44e'

        motivo.style.borderBlockColor='#dee2e6'
        codigo.style.borderBlockColor='#dee2e6'
        quantidade.style.borderBlockColor='#dee2e6'
        validade.style.borderBlockColor='#dee2e6'

    }
}


function reset_form(){

    document.getElementById('motivo').value= ""
    document.getElementById('Cod').value= ""
    document.getElementById('qtd').value= ""
    document.getElementById('val').value= ""
    document.getElementById('data_block').value= ""
    document.getElementById('tratativa').value=""
    alerta.innerText = ' ' 

}







// não altere a função de forma alguma. Ela é responsável por baixar a tabela corretamente !!!
function donwload(type, fn, dl) {
    var elt = document.getElementById('my_tabela');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('PNC.' + (type || 'xlsx')));
 }
