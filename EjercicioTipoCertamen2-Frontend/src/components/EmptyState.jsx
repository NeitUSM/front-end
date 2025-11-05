import React from 'react'
import { Fieldset } from 'primereact/fieldset';
function EmptyState({ title = "No hay datos", contenido }) {
    return (
        <div className="card mt-2">
            <Fieldset legend={title}>
                <div className="m-0">
                    {contenido && <p>{contenido}</p>}
                </div>
            </Fieldset>
        </div>
    )
}

export default EmptyState