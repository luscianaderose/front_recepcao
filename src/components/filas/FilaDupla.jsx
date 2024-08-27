import axios from "axios"
import {useSearchParams} from "react-router-dom"
import duplaPng from "../../assets/img/dupla.png"
import duplaCancelarPng from "../../assets/img/dupla_cancelar.png"
import duplaCimaPng from "../../assets/img/dupla_cima.png"
import duplaBaixoPng from "../../assets/img/dupla_baixo.png"
import BotaoIcone from "../botoes/BotaoIcone"


function FilaDupla(props) {
    const [parametros] = useSearchParams()
    const dupla = parametros.get("dupla")
    const nomeFilaDupla = parametros.get("nome_fila_dupla")
    const numeroDupla = parseInt(parametros.get("numero_dupla"), 10)

    const criarDupla = async () => {
        const pessoa1 = props.fila["fila"][numeroDupla]
        const pessoa2 = props.fila["fila"][props.numeroAtendido]
        
        if (! (numeroDupla === props.numeroAtendido +1 || numeroDupla === props.numeroAtendido -1)) {
            alert("Não é possível criar dupla!")
        }else if (pessoa1["dupla"] !== -1 || pessoa2["dupla"] !== -1) {
            alert("Não é possível criar dupla com uma pessoa de outra dupla!")
        }else if (pessoa1["estado"] !== "aguardando" || pessoa2["estado"] !== "aguardando") {
            alert("Não é possível criar dupla depois que a pessoa já foi chamada!")
        }else {
            await axios.get(`http://127.0.0.1:5001/criar_dupla?nome_fila_dupla=${props.nomeFila}&numero_atendido=${props.numeroAtendido}&numero_dupla=${numeroDupla}`)
            window.history.back(1)
        }    
    }

    const cancelarDupla = async () => {
        await axios.get(`http://127.0.0.1:5001/cancelar_dupla?numero_atendido=${props.numeroAtendido}&nome_fila=${props.nomeFila}`)
        window.location.reload()
    }

    const linkDupla = () => {
        if (props.dupla !== -1) {
            return (
                <>
                    <BotaoIcone
                        alt="dupla cancelar"
                        src={duplaCancelarPng}
                        onClick={cancelarDupla}
                    />
                    {props.numeroAtendido < props.dupla && <img alt="dupla de cima" src={duplaCimaPng} width="16" height="16"/>}
                    {props.numeroAtendido >= props.dupla && <img alt="dupla de baixo" src={duplaBaixoPng} width="16" height="16"/>}
                </>
            )
        }else if (dupla !== 1 && nomeFilaDupla === props.nomeFila){
            if (props.numeroAtendido === numeroDupla) {
                return (
                    <BotaoIcone
                        alt="dupla cancelar"
                        src={duplaCancelarPng}
                        href="/"
                    />
                )
            }else {
                return (
                    <BotaoIcone
                        alt="criar dupla"
                        src={duplaPng}
                        onClick={criarDupla}
                    />
                )
            }
        }else {
            return (
                <BotaoIcone
                    alt="criar dupla"
                    src={duplaPng}
                    href={`/?nome_fila_dupla=${props.nomeFila}&numero_dupla=${props.numeroAtendido}&dupla=1`}
                />
            )
        }
    }

    return <>{linkDupla()}</>
}

export default FilaDupla