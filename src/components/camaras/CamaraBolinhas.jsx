import axios from "axios"
import styles from "./CamaraBolinhas.module.css"
import Botao from "../botoes/Botao"
// import APIURL from "../../services/api"


function CamaraBolinhas(props){

    const qtdBolinhasTotais = props.capacidade
    const qtdBolinhasPretas = props.numeroAtendimentos
    const qtdBolinhasBrancas = qtdBolinhasTotais - qtdBolinhasPretas
    const bolinhaBranca = String.fromCharCode(9898)
    const bolinhaPreta = String.fromCharCode(9899)

    const adicionarBolinhas = async () => {
        const resposta = await axios.get(`http://127.0.0.1:5001/bolinhas?modo=adicao&numero_camara=${props.numero}`)
        window.location.reload()
    }

    const subtrairBolinhas = async () => {
        const resposta = await axios.get(`http://127.0.0.1:5001/bolinhas?modo=subtracao&numero_camara=${props.numero}`)
        window.location.reload()
    }

    return (
        <>
            <Botao
                className={`${styles.linkBolinhas} a`}
                onClick={subtrairBolinhas}
                nomeDoBotao={<b>-</b>}
            />
            {bolinhaPreta.repeat(qtdBolinhasPretas)}
            {bolinhaBranca.repeat(qtdBolinhasBrancas)}
            <Botao
                className={`${styles.linkBolinhas} a`}
                onClick={adicionarBolinhas}
                nomeDoBotao={<b>+</b>}
            />
        </>
    )
}

export default CamaraBolinhas