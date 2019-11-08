const cardSection = document.getElementById('cards-section')
const 

const placeholderCard = {
    nome:'Carta não carregada',
    tipo:'Arcano Maior',
    descricao:'Sem descrição',
    imagem:'http://via.placeholder.com/250x500',
    link:'https://astrolink.com.br/',
}

// function novaCarta() {
//     fetch('tarot.json').then(response => {
//         return response.json()  
//     }).then(json => {
//         selecioneCartaAleatoria(json)
    
//     })
// }

renderizaCarta = carta => {
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML = novaCarta
}

selecioneCartaAleatoria = cartas => {
    const random = parseInt(Math.random()*12);
    renderizaCarta(cartas[random])
}

//Quando nao carregar terá informação fixa