let cardapioBkp
let cardapio = [
    {
        descricao: "brownie",
        valor: 12,
        imagem: "https://akdelicatessen.com.br/wp-content/uploads/2022/04/Brownie-de-Nescau-TC.jpg"
    },
    {
        descricao: "panqueca americana",
        valor: 22,
        imagem: "https://img-global.cpcdn.com/recipes/c667062f7f96d825/400x400cq70/photo.jpg"
    },
    {
        descricao: "waffle",
        valor: 20,
        imagem: "https://receitatodahora.com.br/wp-content/uploads/2021/11/waffle-americano-scaled.jpg"
    },
    {
        descricao: "cappuccino",
        valor: 7,
        imagem: "https://guiadaculinaria.com/wp-content/uploads/2021/04/receita-de-cappuccino-caseiro.jpg"
    },
    {
        descricao: "café",
        valor: 3,
        imagem: "https://s2.glbimg.com/3uxgM2qRPi16CrOUbJrxpYEK2iU=/e.glbimg.com/og/ed/f/original/2020/04/22/table-liquid-cafe-coffee-white-morning-659632-pxhere.com.jpg"
    }

]

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
