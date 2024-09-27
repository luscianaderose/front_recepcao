import axios from "axios"
import { useState, useEffect } from "react"
import styles from "./Camaras.module.css"
import Camara from "./Camara"
import Fila from "../filas/Fila"
import { APIURL } from "../../services/api"


function Camaras() {
    const [camaras, setCamaras] = useState()
    const [filaVidencia, setFilaVidencia] = useState()
    const [filaPrece, setFilaPrece] = useState()
    // console.log("api url", APIURL)

    const buscarCamaras = async () => {
        try {
            const resposta = await axios.get(`http://127.0.0.1:5001/camaras`)
            const dados = await resposta.data
            // console.log('camaras: ', dados)
            setCamaras(dados)
        } catch (error) {
            console.error("erro", error)
        }
    }

    const buscarFilas = async () => {
        try {
            const respostaFilaVidencia = await axios.get("http://127.0.0.1:5001/fila_videncia")
            const respostaFilaPrece = await axios.get("http://127.0.0.1:5001/fila_prece")
            setFilaVidencia(respostaFilaVidencia.data)
            setFilaPrece(respostaFilaPrece.data)
        } catch (error) {
            console.error("erro", error)
        }
    }

    useEffect(
        () => {
            buscarCamaras()
            buscarFilas()
        }
        , [])

    return (
        <div className={styles.divVidenciaPrece}>
            <div className={styles.divVidencia}>
                <div className={`${styles.dvpTit} txt-tit2 cor-videncia`}>CÂMARAS VIDÊNCIA</div>
                <div className={`${styles.dvpCamaraTotal} cor-videncia`}>
                    {camaras && filaVidencia && Object.values(camaras).map((camara, indice) => (
                        // console.log(camara["fila_atividade"] === "videncia", camara.numero)
                        camara["fila_atividade"] === "videncia" && (
                            <Camara
                                camara={camara}
                                fila={filaVidencia}
                                mudarCamaras={setCamaras}
                                mudarFila={setFilaVidencia}
                            />
                        )
                    ))}
                </div>
                {filaVidencia && <Fila atividade="videncia" fila={filaVidencia} />}
            </div>

            <div className={styles.divEspaco}> </div>

            <div className={styles.divPrece}>
                <div className={`${styles.dvpTit} txt-tit2 cor-prece`}>CÂMARAS PRECE</div>
                <div className={`${styles.dvpCamaraTotal} cor-prece`}>
                    {camaras && filaPrece && Object.values(camaras).map((camara, indice) => (
                        camara["fila_atividade"] === "prece" && (
                            <Camara
                                camara={camara}
                                fila={filaPrece}
                                mudarCamaras={setCamaras}
                                mudarFila={setFilaPrece}
                            />
                        )
                    ))}
                </div>
                {filaPrece && <Fila atividade="prece" fila={filaPrece} />}
            </div>
        </div>
    )
}

export default Camaras