import { useState } from "react"
import Saludar from "./components/Saludar"
import SaludoForm from "./components/SaludoForm"

function App() {
    const [resultado, setResultado] = useState("")
    const hanldeSubmit = (nombre) => {
        setResultado(nombre);
    }
    return <>
        <Saludar nombre={resultado}></Saludar>
        <SaludoForm onSubmit={hanldeSubmit}></SaludoForm>
    </>
}

export default App
