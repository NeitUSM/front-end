const localKey = "pokemon_list_data"
const createPokemon = (pokemon) =>{
    // Guardar en LocalStorage
    //- Se guarda en el navegador (cache)
    //- Persiste entre ejecuciones
    //- Puede contener datos independiente de la sesión del usuario
    // "Se persiste eternamente"
    // -Permite guardar datos primitivos (comunmente string)
    // SessionStorage
    //- Depende de la sesión del usuario
    let lista = [];
    const data = localStorage.getItem(localKey)
    if (data != null) {
        lista = JSON.parse(data)
    }
    lista = [...lista, pokemon]
    localStorage.setItem(localKey, JSON.stringify(lista))
}

const getPokemon = () => {
    const data = localStorage.getItem(localKey)
    if (data != null){
        return JSON.parse(data);
    }
    return []
}

export {createPokemon, getPokemon}