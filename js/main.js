const recetasEjemplo = [
  { nombre: "Ensalada César", imagen: "https://picsum.photos/200?1" },
  { nombre: "Tacos al pastor", imagen: "https://picsum.photos/200?2" },
  { nombre: "Pasta Alfredo", imagen: "https://picsum.photos/200?3" },
  { nombre: "Pizza Margarita", imagen: "https://picsum.photos/200?4" },
];

const resultados = document.getElementById("resultados");
const favoritos = document.getElementById("favoritos");
const btnBuscar = document.getElementById("btnBuscar");

if (btnBuscar) {
  btnBuscar.addEventListener("click", () => {
    const busqueda = document.getElementById("inputBusqueda").value.toLowerCase();
    const filtradas = recetasEjemplo.filter(r =>
      r.nombre.toLowerCase().includes(busqueda)
    );
    mostrarRecetas(filtradas);
  });
}

function mostrarRecetas(lista) {
  resultados.innerHTML = "";
  lista.forEach(receta => {
    const card = document.createElement("div");
    card.className = "tarjeta";
    card.innerHTML = `
      <img src="${receta.imagen}" alt="${receta.nombre}">
      <h3>${receta.nombre}</h3>
      <button class="btn-favorito" onclick="guardarFavorito('${receta.nombre}', '${receta.imagen}')">💜 Guardar</button>
    `;
    resultados.appendChild(card);
  });
}

function guardarFavorito(nombre, imagen) {
  const favs = JSON.parse(localStorage.getItem("favoritos")) || [];
  favs.push({ nombre, imagen });
  localStorage.setItem("favoritos", JSON.stringify(favs));
  alert("Receta guardada en favoritos 💜");
}

if (favoritos) {
  const favs = JSON.parse(localStorage.getItem("favoritos")) || [];
  favoritos.innerHTML = "";
  favs.forEach(fav => {
    const card = document.createElement("div");
    card.className = "tarjeta";
    card.innerHTML = `
      <img src="${fav.imagen}" alt="${fav.nombre}">
      <h3>${fav.nombre}</h3>
    `;
    favoritos.appendChild(card);
  });
}
