import React from 'react'
import { Toolbar } from 'primereact/toolbar'
import icono from '../assets/icono.png'

function OrcosToolbar() {
    const startContent = <img style={{ height: '40px' }} src={icono} alt="logo orcos"></img>
    const endContent = <h3>Uno para dominarlos a todos</h3>
    return (
        <div className="row">
            <Toolbar start={startContent} end={endContent}></Toolbar>
        </div>
    )
}

export default OrcosToolbar
