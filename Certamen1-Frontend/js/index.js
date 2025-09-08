window.excursiones = [];

const mostrarErrores = (errores) => {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.innerText = 'Errores';
    tr.appendChild(th);
    thead.appendChild(tr);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    errores.forEach(error => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerText = error;
        tr.appendChild(td); 
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    
    Swal.fire({
        title: "Hay campos con problemas",
        icon: "info",
        html: table,
    });
}


const renderizarTabla = (excursiones = window.excursiones) => {
    const tbody = document.querySelector("#libros-table > tbody");
    tbody.innerHTML = '';

    excursiones.forEach(excursion => {
        const tr = document.createElement("tr");

        const tdNom = document.createElement("td");
        tdNom.innerText = excursion.nomCliente;
        tr.appendChild(tdNom);

        const tdTelefono = document.createElement("td");
        tdTelefono.innerText = excursion.telefono;
        tr.appendChild(tdTelefono);

        const tdDestino = document.createElement("td");
        tdDestino.innerText = excursion.destino;
        tr.appendChild(tdDestino);

        const tdDescripcion = document.createElement("td");
        tdDescripcion.innerText = excursion.descripcion;
        tr.appendChild(tdDescripcion);
        //No juzgue mis if infinito profe estaba bajo presion, no pude hacer nada mas bonito xD
        if (excursion.transporte === "Bicicleta"){
            const tdTransporte = document.createElement("td");
            tdTransporte.innerText = excursion.transporte;
            tdTransporte.classList.add('bg-success');
            tr.appendChild(tdTransporte);
        }
        if (excursion.transporte === "Coche Compartido"){
            const tdTransporte = document.createElement("td");
            tdTransporte.innerText = excursion.transporte;
            tdTransporte.classList.add('bg-warning');
            tr.appendChild(tdTransporte);
        }
        if (excursion.transporte === "Autocar Ecologico"){
            const tdTransporte = document.createElement("td");
            tdTransporte.innerText = excursion.transporte;
            tdTransporte.classList.add('bg-primary');
            tr.appendChild(tdTransporte);
        }
        if (excursion.transporte === "Otro"){
            const tdTransporte = document.createElement("td");
            tdTransporte.innerText = excursion.transporte;
            tr.appendChild(tdTransporte);
        }

        tbody.appendChild(tr);
    });
};


const agregarExcursion = (excursion) => {
    window.excursiones.push(excursion);
    renderizarTabla();
}


const validaciones = (nomCliente, telefono, destino, descripcion, transporte, numeroParticipantes) => {
    let errores = [];
    //Validaciones de vacios
    if (nomCliente.trim() === "") { errores.push("El nombre del cliente es obligatorio") };
    if (telefono.trim() === "") { errores.push("El telefono es obligatorio") };
    if (destino.trim() === "") { errores.push("El destino es obligatorio") };
    if (descripcion.trim() === "") { errores.push("La descripción es obligatoria") };
    if (!numeroParticipantes) { errores.push("Se debe ingresar el numero de participantes") };

    //Demas Validaciones
    if (nomCliente.trim().length <= 15) { errores.push("El largo del nombre debe tener como minimo 15 caracteres") };
    if (telefono.length != 9) { errores.push("El telefono es invalido") };
    if (numeroParticipantes < 1 || numeroParticipantes > 20) { errores.push("La cantidad de participantes debe estar entre 1 a 20") };

    return errores;
}

document.querySelector('#submitBtn').addEventListener("click", () => {

    const nomCliente = document.querySelector('#nomclienteInput').value;
    const telefono = document.querySelector('#telefonoInput').value;
    const destino = document.querySelector('#destinoInput').value;
    const descripcion = document.querySelector('#descripcionArea').value;
    const transporte = document.querySelector('#transporte-select').value;
    const numeroParticipantes = document.querySelector('#participantesInput').value;

    const errores = validaciones(nomCliente, telefono, destino, descripcion, transporte, numeroParticipantes);

    
    if (errores.length > 0) {
        console.log(errores)
        mostrarErrores(errores);
    }
    else {
        const excursion = { nomCliente, telefono, destino, descripcion, transporte, numeroParticipantes };
        agregarExcursion(excursion);
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Excursion de ${nomCliente} agregado correctamente`,
            showConfirmButton: false,
            timer: 1700
        });
        document.querySelector('#nomclienteInput').value = ''
        document.querySelector('#telefonoInput').value = ''
        document.querySelector('#destinoInput').value = ''
        document.querySelector('#descripcionArea').value = ''
        document.querySelector('#participantesInput').value = ''
    }
    
});