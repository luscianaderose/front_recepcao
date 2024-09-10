import axios from "axios"
import { useState, useEffect } from "react"
import styles from "./Menu.module.css"
import SubMenuDeschamar from "./SubMenuDeschamar"
import SubMenuAumentar from "./SubMenuAumentar"
import SubMenuDiminuir from "./SubMenuDiminuir"
import SubMenuGeral from "./SubMenuGeral"


function Menu(){

    const [camaras, setCamaras] = useState()

    const buscarCamaras = async () => {
        try {
            const resposta = await axios.get("http://127.0.0.1:5001/camaras")
            const dados = await resposta.data
            setCamaras(dados)
        } catch(error){
            console.error("erro", error)
        }
    }

    useEffect(
        () => {
            buscarCamaras()
        }
        ,[]
    )

    return(
        <div className={`divContainer cor-fundo2`}>
            <p className="txt-tit2">MENU</p>

            <SubMenuGeral/>
            {camaras && <SubMenuDeschamar camaras={camaras}/>}
            {camaras && <SubMenuAumentar camaras={camaras}/>}
            {camaras && <SubMenuDiminuir camaras={camaras}/>}
        </div>

    )
}

export default Menu