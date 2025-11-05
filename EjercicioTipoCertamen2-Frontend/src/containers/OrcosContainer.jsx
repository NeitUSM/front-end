import React, { useEffect, useRef, useState } from 'react'
import { Toast } from 'primereact/toast';
import OrcosToolbar from '../components/OrcosToolbar.jsx'
import OrcoRegistroRango from '../components/OrcoRegistroRango.jsx'
import {createRango, getRangos} from '../services/RangoService.js'
import { createGuerrero, getGuerreros, deleteAllGuerreros } from '../services/GuerreroService.js';
import OrcosRegistroScroll from '../components/OrcosRegistroScroll.jsx';
import OrcosRegistroGuerrero from '../components/OrcosRegistroGuerrero.jsx';
import EmptyState from '../components/EmptyState.jsx';
import GuerreroTable from '../components/GuerreroTable.jsx';

function OrcosContainer() {
    const toast = useRef(null)
    const [rangos, setRangos] = useState([])
    const [guerrero, setGuerreros] = useState([])

    //Explicación del UseEffect:
    //La función interna es lo que se ejecutará como efecto.
    //El array de dependencias ([ ]) indica cuándo se debe ejecutar:
        //[] vacío → solo una vez (cuando el componente se monta).
        //[variable] → se ejecuta cada vez que esa variable cambia.
        //Sin array → se ejecuta en cada renderizado (no recomendado en la mayoría de los casos).

    useEffect(() => {
        setGuerreros(getGuerreros())
    }, [])

    useEffect(() => {
        setRangos(getRangos())
    }, [])

    const showToast = ({severity, summary, detail}) => {
        toast.current.show({severity: severity, summary: summary, detail: detail, sticky: true})
    }

    const handleRangoCreate = (rango) => {
        if (rangos.find((r) => r.nombreRango.toLowerCase().trim() === rango.nombreRango.toLowerCase().trim()) != null){
            toast.current.show({severity: "error", summary: "Ups!", detail:"El rango ya existe.", sticky: true})
            return;
        }
        createRango(rango)
        setRangos(getRangos())
        toast.current.show({severity: "info", summary: "Rango Creado", sticky: true})
    }
    const handleGuerreroCreate = (nuevoGuerrero) => {
        if (guerrero.find((g)=> g.nombre?.toLowerCase().trim() === nuevoGuerrero.nombre?.toLowerCase().trim())){
            console.log(guerrero)
            toast.current.show({severity: "error", summary: "Ups!", detail:"El guerrero ya existe.", sticky: true})
            return;
        }
        createGuerrero(nuevoGuerrero)
        setGuerreros(getGuerreros())
        toast.current.show({severity: "info", summary: "Guerrero Creado", sticky: true})
    }

    const deleteGuerrero = () => {
        deleteAllGuerreros()
        setGuerreros(getGuerreros())
        toast.current.show({severity: "info", summary: "Guerreros asesinados", sticky: true})
    }

    return (
        <div className="container-fluid">
            <Toast ref={toast}/>
            <OrcosToolbar></OrcosToolbar>
            <div className="row mt-5">
                <div className="col md-4">
                    <OrcoRegistroRango onCreateRango={handleRangoCreate}/>
                </div>
                <div className="col md-8">
                    <OrcosRegistroScroll rangos={rangos}/>
                </div>
            </div>
            {rangos && rangos.length>0 ? <div className="row mt-5">
                <div className="col md-4">
                    <OrcosRegistroGuerrero rangos={rangos} onCreateGuerrero={handleGuerreroCreate} showError={showToast}/>
                </div>
                <div className="col md-8">
                    <GuerreroTable guerreros={guerrero} onDeleteGuerrero={deleteGuerrero} showError={showToast}/>
                </div>
            </div>
            : <EmptyState title='No hay Rangos' contenido={"Debe registrar rangos para generar guerreros"}></EmptyState>}
        </div>
    )
}

export default OrcosContainer
