import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

function GuerreroTable({ guerreros, onDeleteGuerrero = () => {}, showError = ({severity, summary, detail}) }) {

    const handleClick = () => {
        if (guerreros.length === 0){
            showError({severity: "error", summary:"No hay guerreros registrados", detail:"¿A quienes estás dando por muerto?"})
            return;
        }
        onDeleteGuerrero()
    }

    return (
        <Panel>
            <DataTable className="mt-1" header="Guerreros Registrados" value={guerreros} tableStyle={{ minWidth: '20rem' }}>
                <Column field="nombre" header="Nombre"></Column>
                <Column field="tipo" header="Tipo"></Column>
                <Column field="nivel" header="Nivel"></Column>
                <Column field="rango" body={(rowData) => rowData.rango?.nombreRango || "Sin rango"} header="Rango"></Column>
            </DataTable>
            <Button disabled={guerreros.length === 0} className="mt-3" onClick={handleClick} label='Asesinados por aparición' severity='danger'></Button>
        </Panel>
    )
}

export default GuerreroTable
