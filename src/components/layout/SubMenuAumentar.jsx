import axios from "axios"
import styles from "./Menu.module.css"
import Botao from "../botoes/Botao"


function SubMenuAumentar(props) {

    const aumentar = async (numeroCamara) => {
        const resposta = await axios.get(`http://127.0.0.1:5001/aumentar_capacidade/${numeroCamara}`)
        window.location.reload()
    }

    return (
        <div className={`${styles.divMenu} cor-fundo2`}>
            {Object.values(props.camaras).map((camara, indice) => (
                <Botao
                    className={styles.botao}
                    onClick={() => aumentar(camara["numero"].toUpperCase())}
                    nomeDoBotao={`AUMENTAR CAM ${camara["numero"]}`}
                />
            ))}
        </div>

    )
}

export default SubMenuAumentar