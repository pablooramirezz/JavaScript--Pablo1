function mostrarMensaje() {
    console.log("Se ha dado click en el Título.")
}

const titulo = document.querySelector("h1");

//titulo.onclick = mostrarMensaje;

titulo.addEventListener("click",mostrarMensaje);

const p = document.querySelector("p");
let contador = 0; 

p.addEventListener("mouseover", () => {
    p.textContent = "Haz pasado " + (++contador) + " veces";
});

p.addEventListener("mouseout", () => {
    p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi est harum labore delectus modi? Explicabo alias veritatis fugit sint rerum, molestiae modi quam quos repellat maiores quia ab blanditiis quasi."
});