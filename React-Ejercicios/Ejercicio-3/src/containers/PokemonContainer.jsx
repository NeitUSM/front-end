import React, { useEffect, useRef, useState } from 'react'
import PokemonForm from '../components/PokemonForm'
import PokemonView from '../components/PokemonView'
import { createPokemon, getPokemon } from '../services/PokemonService'
import { Toast } from 'primereact/toast'

function PokemonContainer() {
    const toast = useRef(null)
    const [pokemonData, setPokemonData] = useState()

    useEffect( () => {
        //Si el arreglo de dependencias está vacio, este callback se ejecuta solo una vez
        const data = getPokemon()
        setPokemonData(data)
    }, [])

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Pokemon Registrado', detail:'Nuevo pokemon disponible'});
    }
    
    const handleCreate = (pokemon) => {
        createPokemon(pokemon)
        showSuccess()
        const data = getPokemon()
        setPokemonData(data)
    }
    return (
        <>
        <Toast ref={toast} />
            <div className="container-fluid">
                <div className='row'>
                    <div className="col">
                        <PokemonForm onCreatePokemon={handleCreate} />
                    </div>
                    <div className="col">
                        <PokemonView pokemonData={pokemonData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonContainer
