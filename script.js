let cardapio = []
let cardapioBkp

function adicionar() {
    let insereProduto = {
        descricao: document.getElementById("descricao").value,
        valor: document.getElementById("valor").value,
        imagem: document.getElementById("url").value,
        entrega: document.getElementById("entrega").checked
    }
    cardapio.push(insereProduto)
    imprimir()
    esvaziarCampo()
}


function imprimir() {
    let sectionCatalogo = document.getElementById("catalogo");;
    let cacheSection = "";
    sectionCatalogo.innerHTML = "";

    for (let i = 0; i < cardapio.length; i++) {
        cacheSection = cacheSection + `
            <div class="produto">
                <img src="${cardapio[i].imagem}">
                <div class="produto-detalhe">
                    <p class="produto-titulo">${cardapio[i].descricao}</p>
                    <p class="produto-valor">R$${cardapio[i].valor}</p>
                    ${(cardapio[i].entrega == true) ?
                `<p class="produto-entrega">Entrega grátis disponível</p>`
                :
                `<p class="produto-entrega">Entrega grátis não disponível</p>`
            }
                </div>
            </div>
        `
    }
    sectionCatalogo.innerHTML = cacheSection
}

function esvaziarCampo() {
    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("url").value = "";
    document.getElementById("entrega").value = "";
}

function filtrar() {
    let busca = document.getElementById("busca").value;
    cardapioBkp = cardapio;

    if (busca == "") {
        alert("Digite o nome do produto")
    } else {
        cardapio = cardapio.filter((elemento) => {
            return elemento.descricao.toUpperCase().includes(busca.toUpperCase())
        })
    }
    document.getElementById("catalogo").innerHTML = "";
    imprimir()
}

function limpar() {
    cardapio = cardapioBkp
    document.getElementById("catalogo").innerHTML = "";
    imprimir()
}
