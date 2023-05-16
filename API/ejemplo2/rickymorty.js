

function constuirTarjeta(personajes) {
    const main = document.querySelector('main');
    personajes.results.forEach(p => {
        console.log(p);
        const articulo = document.createRange().createContextualFragment(`
        <article>
            <div class="image-container">
            <img src="${p.image}" alt="personaje de rick y morty">
            </div>
            <h2>${p.name}</h2>
            <span>${p.status}</span>
        </article>
        `)
        main.append(articulo);
    })
}

function obtenerPersonajes(){
    fetch("https://rickandmortyapi.com/api/character")
    .then(result => result.json())
    .then(datos => {
        //console.log(datos);
        constuirTarjeta(datos);
    })
    .catch((err) => {
        console.log('Error al consumir la API\n', err.message);
    })
    .finally(() => {
        console.log('Se ha consumido todo el API');
    })
}

obtenerPersonajes();