import React from 'react'
import {DataScroller} from 'primereact/datascroller'

function OrcosRegistroScroll({rangos}) {
    
    const itemTemplate = (rango) => {
        return <h2>{rango?.nombreRango}</h2>
    }

    return (
        <DataScroller value={rangos} 
        itemTemplate={itemTemplate} rows={5} 
        inline scrollHeight="200px" buffer={0.4} 
        header="Rangos registrados" />
    )
}

export default OrcosRegistroScroll
