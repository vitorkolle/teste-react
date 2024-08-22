import { useState } from "react"
function Titulo({cor}){
    const [texto, setTexto] = useState("Título Padrão")
    const [inputText, setInputText] = useState("")

    function mudarTexto(){
        setTexto(inputText)
    }
    return(
    <div>
        <h1 style={{color:cor}}>{texto}</h1>
        <input value={inputText} onChange={(e)=> {setInputText(e.target.value)}} type="text" />
        <button onClick={mudarTexto}>Mudar</button>
    </div>
    )
}

export default Titulo