import axios from "axios"
import { useState } from "react"
import styles from "./FormObservacao.module.css"
import InputText from "../inputs/InputText"
import BotaoSubmit from "../botoes/BotaoSubmit"


function FormObservacao(props) {
    const [observacao, setObservacao] = useState(props.observacao)
    const adicionarObservacao = async(evento) => {
        evento.preventDefault()
        const resposta = await axios.get(`http://127.0.0.1:5001/observacao?nome_fila=${props.nomeFila}&numero_atendido=${props.numeroAtendido}&observacao=${observacao}`)
        window.location.reload()
    }

    return(
        <form onSubmit={(evento) => adicionarObservacao(evento)}>
            <InputText
                name="observacao" 
                placeholder="Digite a observação"
                valor={observacao}
                onChange={(evento) => setObservacao(evento.target.value)}

            />
            <BotaoSubmit label="OK" className={styles.botao}/>
        </form>
    )
}

export default FormObservacao