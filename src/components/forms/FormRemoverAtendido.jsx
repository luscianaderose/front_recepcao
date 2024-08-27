import axios from "axios"
import {useSearchParams} from "react-router-dom"
import Janela from "../janela/Janela"


function FormRemoverAtendido(){
    const [parametros] = useSearchParams()
    const nomeFila = parametros.get("nome_fila")
    const numeroAtendido = parametros.get("numero_atendido")
    const removerAtendido = async () => {
        const resposta = await axios.get(`http://127.0.0.1:5001/remover_atendido_confirmado?nome_fila=${nomeFila}&numero_atendido=${numeroAtendido}`)
        window.history.back(2)
    }

    return(
        <Janela 
            texto="Tem certeza que deseja deletar?"
            href1={`remover_atendido_confirmado?nome_fila=${nomeFila}&numero_atendido=${numeroAtendido}`}
            bt1="Sim"
            clickBt1={removerAtendido}
            href2="/"
            bt2="Cancelar"
        />
    )
}

export default FormRemoverAtendido