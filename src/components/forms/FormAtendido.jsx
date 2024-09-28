import axios from "axios"
import { useState } from "react"
import styles from "./FormAtendido.module.css"
import InputText from "../inputs/InputText"
import Botao from "../botoes/Botao"
import BotaoCancelar from "../botoes/BotaoCancelar"
import BotaoSubmit from "../botoes/BotaoSubmit"


function FormAtendido(props) {
    const [nomeAtendido, setNomeAtendido] = useState(props.pessoaNome)

    const editarAtendido = async (evento) => {
        evento.preventDefault()
        const resposta = await axios.get(`http://127.0.0.1:5001/editar_atendido?nome_fila=${props.nomeFila}&numero_atendido=${props.numeroAtendido}&nome_atendido=${nomeAtendido}`)
        window.location.reload()
    }

    const desriscar = async () => {
        const resposta = await axios.get(`http://127.0.0.1:5001/desriscar?numero_atendido=${props.numeroAtendido}&nome_fila=${props.nomeFila}`)
        window.location.reload()
    }

    return (
        <>
            <p>Deseja editar o nome?</p>
            <form className={styles.form} onSubmit={(evento) => editarAtendido(evento)}>
                <InputText
                    name='nome_atendido'
                    valor={nomeAtendido}
                    onChange={(evento) => setNomeAtendido(evento.target.value)}
                />
                <BotaoSubmit type='submit' className={styles.botao} label="CONFIRMAR" />
                <BotaoCancelar
                    className={styles.botao}
                    nomeDoBotao="Cancelar"
                    onClick={() => props.onCancelar()}
                />
            </form>
            {
                props.pessoaEstado === "riscado" && (
                    <div className={styles.form}>
                        <p>Deseja desriscar o nome?
                            <Botao
                                className={styles.botao}
                                nomeDoBotao="DESRISCAR"
                                onClick={() => desriscar()}
                            />
                        </p>
                    </div>
                )
            }
        </>
    )
}

export default FormAtendido