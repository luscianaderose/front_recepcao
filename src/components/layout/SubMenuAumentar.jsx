import axios from "axios"
import styles from "./Menu.module.css"
import Botao from "../botoes/Botao"


function SubMenuAumentar (props) {

    const aumentar = async (numeroCamara) => {
        const resposta = await axios.get(`http://127.0.0.1:5001/aumentar_capacidade/${numeroCamara}`)
        window.location.reload()
    }

    return (
        <div className={`${styles.divMenu} cor-fundo2`}>
            {props.camaras.map((camara, indice) => (
                <Botao
                    className={styles.botao}
                    onClick={() => aumentar(camara["numero_camara"].toUpperCase())}
                    nomeDoBotao={`AUMENTAR CAM ${camara["numero_camara"]}`}
                />
            ))}
        </div>
    
    )
}

export default SubMenuAumentar