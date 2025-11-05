import React, { useState } from 'react'
import { Panel } from 'primereact/panel'
import { InputText } from 'primereact/inputtext'
import {Button} from 'primereact/button'

function OrcoRegistroRango({onCreateRango = (rango) => {}}) {
    const [nombreRango, setNombreRango] = useState("")
    const handleClick = () => {
        const rango = {nombreRango}
        onCreateRango(rango)
    }

    return (
        <Panel header="Registrar Rango">
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="rango">Nombre</label>
                <InputText value={nombreRango} onChange={(e) => setNombreRango(e.target.value)} id="rango" aria-describedby="username-help" />
                <small id="username-help">
                    Ingrese el nombre del rango.
                </small>
            </div>
            <Button className="mt-4" icon="pi pi-check" label="Registrar" severity="warning" onClick={handleClick}/>
        </Panel>
    )
}

export default OrcoRegistroRango
