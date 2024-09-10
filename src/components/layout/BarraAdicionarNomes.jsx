import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./BarraAdicionarNomes.module.css"
import InputText from "../inputs/InputText"
import InputRadio from "../inputs/InputRadio"
import BotaoSubmit from "../botoes/BotaoSubmit"

function BarraAdicionarNomes(){
    const [nomeAtendido, setNomeAtendido] = useState()
    const [nomeFila, setNomeFila] = useState()
    const [filaVidencia, setFilaVidencia] = useState()
    const [filaPrece, setFilaPrece] = useState()

    const buscarFilas = async () => {
        const respostaVidencia = await axios.get("http://127.0.0.1:5001/fila_videncia")
        const respostaPrece = await axios.get("http://127.0.0.1:5001/fila_prece")
        setFilaVidencia(respostaVidencia.data)
        setFilaPrece(respostaPrece.data)
    }

    const adicionarNomeNaFila = async (evento) => {
        evento.preventDefault()
        if (
            nomeFila === "videncia" && 
            Object.values(filaVidencia.fila).map((pessoa,indice) => (
                pessoa["nome"].toUpperCase())
            ).includes(nomeAtendido.toUpperCase())
        ){
            alert("É preciso digitar um nome diferente!")
        }else if (
            nomeFila === "prece" &&
            Object.values(filaPrece.fila).map((pessoa,indice) => (
                pessoa["nome"].toUpperCase())
            ).includes(nomeAtendido.toUpperCase())
        ){
            alert("É preciso digitar um nome diferente!")
        }else if (nomeAtendido === undefined) {
            alert("É preciso digitar um nome!")
        }else if (nomeFila === undefined) {
            alert("É preciso escolher  fila!")
        }else {
            const resposta = await axios.get(`http://127.0.0.1:5001/adicionar_atendido?nome_fila=${nomeFila}&nome_atendido=${nomeAtendido}`)
            window.location.reload()
        }
    }

    useEffect(() => {
        buscarFilas()
    },[])

    return(
        <div className={`${styles.divAdicionarNomes} divContainer cor-fundo2`}>
            <div className="txt-tit3">ADICIONAR NOME NA FILA</div>

            <form className={styles.danForm} onSubmit={adicionarNomeNaFila}>
                <InputText 
                    name="nome_atendido" 
                    placeholder="Digite o nome aqui"
                    value={nomeAtendido}
                    onChange={(evento) => setNomeAtendido(evento.target.value)}
                />

                <div>
                    <div className={styles.btVidenciaPrece}>
                        <InputRadio
                            className={styles.radio} 
                            type="radio" 
                            id="videncia" 
                            name="nome_fila" 
                            label="vidência"
                            value="videncia"
                            onChange={(evento) => setNomeFila(evento.target.value)} 
                        />
                        <InputRadio 
                            className={styles.radio} 
                            type="radio" 
                            id="prece" 
                            name="nome_fila" 
                            label="prece"
                            value="prece"
                            onChange={(evento) => setNomeFila(evento.target.value)}
                        />
                    </div>
                </div>
                <BotaoSubmit label="ADICIONAR"/>
            </form>
        </div>
    )
}

export default BarraAdicionarNomes