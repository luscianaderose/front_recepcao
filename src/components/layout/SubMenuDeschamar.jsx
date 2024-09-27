import axios from "axios"
import styles from "./Menu.module.css"
import Botao from "../botoes/Botao"


function SubMenuDeschamar(props) {

    const deschamar = async (numeroCamara, estadoCamara, numeroAtendendo) => {
        const resposta = await axios.get(`http://127.0.0.1:5001/deschamar/${numeroCamara}`)
        window.location.reload()

        // if (estadoCamara === "fechada") {
        //     alert("Não é possível deschamar porque a câmara está fechada! Seu bobo!")
        // } else if (numeroAtendendo === null) {
        //     alert("Não é possível deschamar porque não há ninguém para deschamar!")
        // } else {
        //     const resposta = await axios.get(`http://127.0.0.1:5001/deschamar/${numeroCamara}`)
        //     window.location.reload()
        // }
    }

    return (
        <div className={`${styles.divMenu} cor-fundo2`}>
            {Object.values(props.camaras).map((camara, indice) => (
                <Botao
                    className={styles.botao}
                    onClick={() => deschamar(camara["numero"], camara["estado"], camara["pessoa_em_atendimento"])}
                    nomeDoBotao={`DESCHAMAR CAM ${camara["numero"]}`}
                />
            ))}
        </div>

    )
}

export default SubMenuDeschamar