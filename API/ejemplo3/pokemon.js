let boton = document.getElementById('batalla');
boton.addEventListener('click', ()=>{
    function Aleatorio(maximo){
        a=Math.floor(Math.random()*maximo)
    }return a
    let num = Aleatorio(150);
    console.log(num);
})


function constuirTarjeta(pokemon) {
    const main = document.querySelector('main');
    pokemon.results.forEach(p => {
        console.log(p);
        const articulo = document.createRange().createContextualFragment(`
        <article>
            <div class="image-container">
            <img src="${p.image}" alt="pokemon">
            </div>
            <h2>${p.name}</h2>
            <span>${p.status}</span>
        </article>
        `)
        main.append(articulo);
    })
}

function pokemon(){
    fetch("https://pokeapi.co/api/v2/berry/58/")
    .then(result => result.json())
    .then(datos => {
        constuirTarjeta(datos);
    })
    .catch((err) => {
        console.log('Error al consumir la API\n', err.message);
    })
    .finally(() => {
        console.log('Se ha consumido todo el API');
    })
}

pokemon();