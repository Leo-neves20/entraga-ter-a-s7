
let body = document.querySelector("body")

let main            = document.createElement("main")
let cabecalho       = document.createElement("header")
let cabecalhoLista  = document.createElement("header")
let produto         = document.createElement("span")
let valor           = document.createElement("span")
let titulo          = document.createElement("h1")
let lista           = document.createElement("ul")
let footer          = document.createElement("footer")
let total           = document.createElement("span")
let containerTotal  = document.createElement("div")
let valorTotal      = document.createElement("span")
let numeros         = document.createElement("span")
let buttonFinalizar = document.createElement("button")


cabecalho.setAttribute("class", "cabecalho-pagina")
main.setAttribute("class", "container-list")
produto.setAttribute("class", "item")
valor.setAttribute("class", "preco")
cabecalhoLista.setAttribute("class", "header-list")
containerTotal.setAttribute("class", "container-Total")
total.setAttribute("class", "total")
buttonFinalizar.setAttribute("class", "finalizar-compra")



titulo.innerText            = "Virtual Market"
produto.innerText           = "Item"
valor.innerText             = "Valor"
total.innerText             = "Total"
valorTotal.innerText        = "R$ "
buttonFinalizar.innerText   = "Finalizar compra"

body.append(cabecalho, main, footer, buttonFinalizar)
cabecalho.appendChild( titulo)
main.appendChild(cabecalhoLista)
cabecalhoLista.append(produto, valor)
footer.append(total, containerTotal)


let addCarrinho = []
let arryPrecos = []
let totalCompra = 0

function nomePreco(name, preco){
    
    let produto = {

        nome:    name, 
        valor: preco

    }

    addCarrinho.push(produto)

}

/***************************************************************************
//--------------- ADICIONE UM PRODUCO PARA TESTAR :) ----------------------
***************************************************************************/
nomePreco("arroz", 1.25)
nomePreco("feijão", 1.55)
nomePreco("macarrão", 1.75)
nomePreco("sal", 1.35)
nomePreco("açucar", 2.35)
/***************************************************************************
//--------------- ADICIONE UM PRODUCO PARA TESTAR :) ----------------------
***************************************************************************/

function percorrerProdutos(listaProdutos){

    for(let i = 0; i < listaProdutos.length; i++){

    let linhaLista = document.createElement("li")
     arryPrecos.push(listaProdutos[i].valor)
     cardProduto(listaProdutos[i], linhaLista)

     lista.appendChild(linhaLista)
     
    }

    
    main.appendChild(lista)

}

percorrerProdutos(addCarrinho)


function cardProduto(produto, li){

    let nomeProduto  = produto.nome
    let valorProduto = produto.valor

    let nome  = document.createElement("span")
    let preco = document.createElement("span")

    nome.innerText = nomeProduto
    preco.innerText = "R$ " +  valorProduto
    nome.setAttribute("class","nome-produto")
    preco.setAttribute("class", "valor-produto")

    li.append(nome, preco)

} 

function somaCompra(valores){

    for(let i = 0; i < valores.length;i++){

        totalCompra += valores[i]
        

    }

}

somaCompra(arryPrecos)

containerTotal.append(valorTotal, totalCompra.toFixed(2).replace(".",","))

body.addEventListener('click', function(){

    let section = document.createElement("section")
    let p       = document.createElement("p")
    
    p.innerText = `O total da sua compra é de R$ ${totalCompra.toFixed(2).replace(".",",")}`

    body.appendChild(section)
    section.appendChild(p)

})

