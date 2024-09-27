import axios from "axios"
import { useState, useEffect } from "react"
import styles from "./Tvs.module.css"
import Tv from "./Tv"


function Tvs(props) {
    const [camaras, setCamaras] = useState()
    const [filaVidencia, setFilaVidencia] = useState()
    const [filaPrece, setFilaPrece] = useState()

    useEffect(() => {
        const buscarDados = async () => {
            const respostaCamara = await axios.get("http://127.0.0.1:5001/camaras")
            setCamaras(respostaCamara.data)
            const respostaFilaVidencia = await axios.get("http://127.0.0.1:5001/fila_videncia")
            setFilaVidencia(respostaFilaVidencia.data)
            const respostaFilaPrece = await axios.get("http://127.0.0.1:5001/fila_prece")
            setFilaPrece(respostaFilaPrece.data)
        }
        buscarDados()
    }, [])

    return (
        <div className={`${styles.tvVidenciaPrece} ${props.className}`}>
            <div className={`${styles.tvVidencia} cor-videncia`}>
                {camaras && filaVidencia && Object.values(camaras).map((camara, indice) => (

                    camara["fila_atividade"] === "videncia" &&
                    <Tv
                        numero={camara["numero"]}
                        label={filaVidencia["nome_display"]}
                        atividade={camara["fila_atividade"]}
                        estado={camara["estado"]}
                        pessoaAtendida={camara["pessoa_em_atendimento"]}
                        fila={filaVidencia}
                    />
                ))}
            </div>

            <div className={`${styles.tvPrece} cor-prece`}>
                {camaras && filaPrece && Object.values(camaras).map((camara, indice) => (
                    camara["fila_atividade"] === "prece" &&
                    <Tv
                        numero={camara["numero"]}
                        label={filaPrece["nome_display"]}
                        atividade={camara["fila_atividade"]}
                        estado={camara["estado"]}
                        pessoaAtendida={camara["pessoa_em_atendimento"]}
                        fila={filaPrece}
                    />
                ))}
            </div>
        </div>
    )
}

export default Tvs