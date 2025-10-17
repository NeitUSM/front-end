import React, { useState } from 'react'
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Panel } from 'primereact/panel';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

function PokemonForm({onCreatePokemon = () => {}}) {

    const handleClick = () => {
        const pokemonObj = {
            nombre: nombre,
            numero: numero,
            tipo: tipo
        }
        onCreatePokemon(pokemonObj)
    }

    const footerTemplate = () => {
        return (
            <div className="p-2 text-center">
                <Button onClick={(handleClick)} rounded severity="info" label="Registrar"></Button>
            </div>
        )
    }

    const tipos = [
        { nombre: "Fuego", imagen: "" },
        { nombre: "Agua", imagen: "" },
        { nombre: "Eléctrico", imagen: "" },
    ]

    const [nombre, setNombre] = useState("")
    const [numero, setNumero] = useState(1)
    const [tipo, setTipo] = useState(null)
    return (
        <div>
            <div className="mb-3 mt-5">
                <Panel header="Registro Pokemon" toggleable footerTemplate={footerTemplate}>
                    <div className="mb-3">
                        <FloatLabel>
                            <InputText id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            <label htmlFor="nombre">Nombre</label>
                        </FloatLabel>
                    </div>
                    <div className="mb-3">
                        <InputNumber allowEmpty={false} min={1} max={151} value={numero} onValueChange={(e) => setNumero(e.value)} showButtons buttonLayout="vertical" style={{ width: '4rem' }}
                            decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                    </div>
                    <div className="mb-3">
                        <FloatLabel>
                            <Dropdown placeholder="Seleccione un Tipo" value={tipo} onChange={(e) => setTipo(e.value)} options={tipos} optionLabel="nombre"></Dropdown>
                            <label htmlFor="tipos">Tipo</label>
                        </FloatLabel>
                    </div>
                </Panel>
            </div>
        </div>
    )
}

export default PokemonForm