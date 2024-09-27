import axios from "axios"
import styles from "./Menu.module.css"
import Botao from "../botoes/Botao"


function SubMenuDiminuir(props) {

    const diminuir = async (numeroCamara) => {
        const resposta = await axios.get(`http://127.0.0.1:5001/diminuir_capacidade/${numeroCamara}`)
        window.location.reload()
    }

    return (
        <div className={`${styles.divMenu} cor-fundo2`}>
            {Object.values(props.camaras).map((camara, indice) => (
                <Botao
                    className={styles.botao}
                    onClick={() => diminuir(camara["numero"].toUpperCase())}
                    nomeDoBotao={`DIMINUIR CAM ${camara["numero"]}`}
                />
            ))}
        </div>

    )
}

export default SubMenuDiminuir