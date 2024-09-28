import axios from "axios"
import { useState, useEffect } from "react"

import styles from "./Tv.module.css"
import CamaraBola from "../camaras/CamaraBola"


function Tv(props) {
    const [pessoaDupla, setPessoaDupla] = useState(null)
    const [numeroAtendido, setNumeroAtendido] = useState()
    var filasNomesPessoas = []

    useEffect(() => {
        const buscarPessoaDupla = async (numero_pessoa) => {
            const respostaPessoaDupla = await axios.get(`http://127.0.0.1:5001/pessoas/${numero_pessoa}`)
            setPessoaDupla(respostaPessoaDupla.data)
        }

        if (props.pessoaAtendida !== null) {
            if (props.pessoaAtendida["dupla_numero"] !== null && props.fila !== undefined) {
                buscarPessoaDupla(props.pessoaAtendida["dupla_numero"])
            }

            if (props.fila !== undefined) {
                Object.values(props.fila["fila"]).map((pessoa, indice) => (
                    filasNomesPessoas.push(pessoa["nome"])
                ))
                setNumeroAtendido(filasNomesPessoas.indexOf(props.pessoaAtendida["nome"]))
            }
        }


    }, [props.pessoaAtendida]);

    const classeDaCamara = {
        "fechada": "camara-fechada",
        "atendendo": "camara-chamando",
        "último": "camara-avisar",
        "foi avisado": "camara-avisado"
    }

    console.log("******", pessoaDupla)

    return (
        <div className={`${styles.tvCamara} cor-fundo2 ${classeDaCamara[props.estado.toLowerCase()]}`}>
            <div className={styles.tvBolaAtividade}>
                <CamaraBola
                    className={`cor-${props.atividade} ${styles.camaraBolaTv}`}
                    numeroCamara={props.numero}
                />
                <div className={styles.tvCamaraConteudo}>
                    <div className={styles.tvCamaraFonteNumCamara}>
                        <div className={`txt-tv1 ${styles.bolaEAtividade}`}>
                            {props.label.toUpperCase()}
                        </div>
                    </div>
                    <p className="txt-tv3">{props.estado.toUpperCase()}</p>
                </div>
            </div>
            <div className={styles.tvNomeAtendido}>
                {
                    props.pessoaAtendida &&
                    <p className="txt-tv2">
                        {`${numeroAtendido + 1}. ${props.pessoaAtendida.nome}`.toUpperCase()}
                        {pessoaDupla && ` & ${pessoaDupla.nome}`.toUpperCase()}
                        {numeroAtendido === "" && "CÂMARA VAZIA"}
                    </p>
                }
            </div>
        </div>
    )
}

export default Tv