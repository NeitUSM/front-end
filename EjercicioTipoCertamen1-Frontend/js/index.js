window.librosList = [];

const validaciones = (isbn, titulo, autor, anioPublicacion) => {
    let errores = [];
    //Validaciones de campos obligatorios debe hacerse modificando el frontend
    if (isbn === "") { errores.push("El campo isbn es obligatorio") };
    if (titulo === "") { errores.push("El titulo es obligatorio") };
    if (autor === "") { errores.push("El titulo es obligatorio") };
    if (anioPublicacion === "") { errores.push("El autor es obligatorio") };

    //Validaciones correctas
    if (isbn.trim().length != 13) { errores.push("El largo del id debe ser de exactamente 13 caracteres") };
    if (titulo.length > 30) { errores.push("El largo del titulo no puede ser mayor a 30 caracteres") };
    if (autor.length > 20) { errores.push("El autor no puede tener más de 20 caracteres") };
    if (anioPublicacion < 1450 || anioPublicacion > 2025) { errores.push("El año debe estar entre 1450 y 2025") };

    if (window.librosList.find((l => l.isbn == isbn))) {
        errores.push("El libro ya existe");
    }

    return errores;
}

const mostrarErrores = (errores) => {
    const ul = document.createElement('ul');
    errores.forEach(error => {
        const li = document.createElement('li');
        li.innerText = error;
        ul.appendChild(li);
    });

    Swal.fire({
        title: "No se pudo agregar el libro",
        icon: "error",
        html: ul.innerHTML,
    });
}

const renderizarTabla = (libros = window.librosList) => {
    const tbody = document.querySelector("#libros-table > tbody");
    tbody.innerHTML = '';

    libros.forEach(libro => {
        const tr = document.createElement("tr");

        const tdIsbn = document.createElement("td");
        tdIsbn.innerText = libro.isbn;
        tr.appendChild(tdIsbn);

        const tdTitulo = document.createElement("td");
        tdTitulo.innerText = libro.titulo;
        tr.appendChild(tdTitulo);

        const tdAutor = document.createElement("td");
        tdAutor.innerText = libro.autor;
        tr.appendChild(tdAutor);

        const tdGenero = document.createElement("td");
        tdGenero.innerText = libro.genero;
        tr.appendChild(tdGenero);

        const tdAnioPublicacion = document.createElement("td");
        tdAnioPublicacion.innerText = libro.anioPublicacion;
        tr.appendChild(tdAnioPublicacion);

        tbody.appendChild(tr);
    });
};


const agregarLibro = (libro) => {
    window.librosList.push(libro);
    renderizarTabla();
}

document.querySelector('#submitBtn').addEventListener("click", () => {

    const isbn = document.querySelector('#isbnInput').value;
    const titulo = document.querySelector('#tituloInput').value;
    const autor = document.querySelector('#autorInput').value;
    const genero = document.querySelector('#genero-select').value;
    const anioPublicacion = document.querySelector('#anioPublicacion').value;
    console.log("a")
    const errores = validaciones(isbn, titulo, autor, anioPublicacion);

    if (errores.length > 0) {
        mostrarErrores(errores);
    }
    else {
        const libro = { isbn, titulo, autor, genero, anioPublicacion };
        agregarLibro(libro);
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Libro ${isbn} agregado correctamente`,
            showConfirmButton: false,
            timer: 1700
        });
        document.querySelector('#isbnInput').value = ''
        document.querySelector('#tituloInput').value = ''
        document.querySelector('#autorInput').value = ''
        document.querySelector('#genero-select').value = ''
        document.querySelector('#anioPublicacion').value = ''
    }
});

//Buscador
document.querySelector('#buscador').addEventListener('input', function(letra) {
    const termino = letra.target.value.trim().toLowerCase();
    const filtro = document.querySelector("#libros-filtro").value;
    const libros = window.librosList;
    const filtrados = libros.filter(libro =>
        libro[filtro].toLowerCase().includes(termino)
    );

    renderizarTabla(filtrados);
});