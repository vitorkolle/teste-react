import { useState } from "react"
function Titulo({cor}){
    const [texto, setTexto] = useState("Título Padrão")

    return(
    <div>
        <h1 style={{color:cor}}>{texto}</h1>

        <button onClick={() => {setTexto("Alterado")}}>Mudar</button>
    </div>
    )
}

export default Titulo