import React, { useState } from 'react'
import { Panel } from 'primereact/panel'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { SelectButton } from 'primereact/selectbutton'
import { Knob } from 'primereact/knob'
import { Dropdown } from 'primereact/dropdown'

function OrcosRegistroGuerrero({rangos=[], onCreateGuerrero = (guerrero) => {}, showError = ({severity, summary, detail})}) {
    const options = ["Orco", "Uruk"]
    const [nivelGuerrero, setNivelGuerrero] = useState(0)
    const [tipoGuerrero, setTipoGuerrero] = useState(options[0])
    const [nombreGuerrero, setNombreGuerrero] = useState("")
    const [rangoSeleccionado, setRangoSeleccionado] = useState(rangos[0])

    const handleClick = () => {
        if (nombreGuerrero.trim() === ""){
            showError({severity: "error", summary:"No se pudo agregar el guerrero", detail:"El nombre no puede estar vacío"})
            return;
        }
        const guerrero = {nombre: nombreGuerrero, tipo: tipoGuerrero, nivel: nivelGuerrero, rango: rangoSeleccionado}
        onCreateGuerrero(guerrero)
    }

    return (
        <Panel header="Registrar Guerrero" className="mb-3">
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="rango">Nombre</label>
                <InputText value={nombreGuerrero} onChange={(e) => setNombreGuerrero(e.target.value)} id="guerrero" aria-describedby="username-help" />
                <small id="username-help">
                    Ingrese el nombre del guerrero.
                </small>
            </div>
            <div className="mb-3 d-flex flex-row justify-content-between">
                <label htmlFor="tipoguerrero">Tipo Guerrero</label>
                <SelectButton value={tipoGuerrero} onChange={(e) => setTipoGuerrero(e.value)} options={options} />
            </div>
            <div className="mb-3 d-flex flex-row justify-content-between">
                <label htmlFor="tipoguerrero">Nivel del Guerrero</label>
                <Knob value={nivelGuerrero} onChange={(e) => setNivelGuerrero(e.value)} />
            </div>
            <div className="mb-3 d-flex flex-column">
                <Dropdown value={rangoSeleccionado} onChange={(e) => setRangoSeleccionado(e.value)} options={rangos} optionLabel="nombreRango"
                    placeholder="Seleccione un Rango" />
            </div>
            <div className="mb-3 d-flex flex-column">
                <Button label="Registrar" severity="warning" onClick={handleClick} />
            </div>
        </Panel>
    )
}

export default OrcosRegistroGuerrero
