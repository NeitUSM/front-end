import React from 'react'

export default function Saludar(props) {
  if (!props.nombre){
    return <></>
  }
  return (
    <>
        <h1>Hola {props.nombre}</h1>
        <h3>Binvenido</h3>
    </>
  )
}
