import React from 'react'
import PokemonForm from '../components/PokemonForm'
import PokemonView from '../components/PokemonView'

function PokemonContainer() {
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className="col">
                    <PokemonForm />
                </div>
                <div className="col">
                    <PokemonView />
                </div>
            </div>
        </div>

    )
}

export default PokemonContainer
