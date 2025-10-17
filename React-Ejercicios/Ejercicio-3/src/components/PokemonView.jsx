import React from 'react';
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function PokemonView({ pokemonData }) {

    return (
        <div className='mt-5'>
            <Panel header="Pokedex">
                <DataTable value={pokemonData} paginator rows={5}>
                    <Column header="Nombre" field="nombre"></Column>
                    <Column header="Tipo" field="tipo.nombre"></Column>
                    <Column header="Número" field="numero" sortable></Column>
                </DataTable>
            </Panel>
        </div>
    )
}

export default PokemonView
