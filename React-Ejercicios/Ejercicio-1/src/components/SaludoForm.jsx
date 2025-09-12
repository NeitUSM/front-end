import React, { useState } from 'react'

function SaludoForm({onSubmit= (nombre)=>{}}) {

    const [nombre, setNombre] = useState("");
    const handleClick = () => {
        onSubmit(nombre)
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='mb-3'>
                    <label htmlFor="nombreTxt" id="nombreTxt">Nombre</label>
                    <input onChange={(e)=>setNombre(e.target.value)}
                    type="text" id="nombreTxt" 
                    className='form-control'value={nombre}/>
                </div>
                <div className='mb-3'>
                    <button className='btn btn-primary' 
                    onClick={handleClick}>Saludanding</button>
                </div>
        </div>
        </div>
    )
}

export default SaludoForm
