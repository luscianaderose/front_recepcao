import axios from "axios"
import styles from "./CamaraBotao.module.css"
import audioCamara2Wav from "../../assets/audio/camara2.wav"
import audioCamara3Wav from "../../assets/audio/camara3.wav"
import audioCamara3AWav from "../../assets/audio/camara3A.wav"
import audioCamara4Wav from "../../assets/audio/camara4.wav"
import Botao from "../botoes/Botao"


const audiosCamara = {
    "2":audioCamara2Wav,
    "4":audioCamara4Wav,
    "3":audioCamara3Wav,
    "3A":audioCamara3AWav
}

function CamaraBotao (props) {

    const abrirCamara = async () => {
        const resposta = await axios.get(`http://127.0.0.1:5001/abrir_camara/${props.numero}`)
        window.location.reload()
    }

    const chamarProximo = async () => {
        const audio = new Audio(audiosCamara[props.numero])
        const resposta = await axios.get(`http://127.0.0.1:5001/chamar_proximo/${props.numero}`)
        const respostaCamaras = await axios.get("http://127.0.0.1:5001/camaras")
        props.mudarCamaras(respostaCamaras.data)
        if (props.nomeFila === "videncia"){
            const respostaFila = await axios.get("http://127.0.0.1:5001/fila_videncia")
            props.mudarFila(respostaFila.data)
        }else if (props.nomeFila === "prece"){
            const respostaFila = await axios.get("http://127.0.0.1:5001/fila_prece")
            props.mudarFila(respostaFila.data)
        }
        audio.play()
    }

    const avisar = async () => {
        const resposta = await axios.get(`http://127.0.0.1:5001/avisado/${props.numero}`)
        window.location.reload()
    }

    const fecharCamara = async () => {
        const resposta = await axios.get(`http://127.0.0.1:5001/fechar_camara/${props.numero}`)
        window.location.reload()
    }

    const estadoAcoes = {
        "fechada":{
            "acao":abrirCamara,
            "descricao":"ABRIR CÂMARA"
        },
        "atendendo":{
            "acao":chamarProximo,
            "descricao":"CHAMAR PRÓXIMO"
        },
        "último":{
            "acao":avisar,
            "descricao":"AVISEI QUE É O ÚLTIMO!"
        },
        "foi avisado":{
            "acao":fecharCamara,
            "descricao":"FECHAR CÂMARA"
        }
    }

    return (
        <Botao
            className={`${styles.btCamara}`}
            nomeDoBotao={estadoAcoes[props.estado.toLowerCase()]["descricao"]}
            onClick={estadoAcoes[props.estado.toLowerCase()]["acao"]}
        />
    )
}

export default CamaraBotao
