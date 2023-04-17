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

        var dia = validade.value.slice(0,2)
        var mes = validade.value.slice(2,4)
        var ano = validade.value.slice(4,)


        celula1.innerHTML = rua.value
        celula2.innerHTML = codigo.value
        celula3.innerHTML = quantidade.value
        celula4.innerHTML = `${dia}/${mes}/${ano}`

        
        //celula4.innerHTML = validade.value
        
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

// não altere a função de forma alguma. Ela é responsável por baixar a tabela corretamente !!!
function donwload(type, fn, dl) {
    var elt = document.getElementById('tabela-main');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('FEFO.' + (type || 'xlsx')));
 }
