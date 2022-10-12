const resultado = document.querySelector('.resultado')

const nomes = ['Emilly', 'Layra', 'Ibrahim', 'Heitor', 
'Verto', 'Erick', 'Nega', 'Nina', 'Mainha/Cal', 'Nininho', 'Hussein'];

function sorteio() {
    const sortear = Math.floor(Math.random() * nomes.length);
    resultado.innerText = nomes[sortear];



}