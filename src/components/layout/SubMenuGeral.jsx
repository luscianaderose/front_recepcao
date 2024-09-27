import axios from "axios"
import styles from "./Menu.module.css"
import audioSilencioMp3 from "../../assets/audio/celulares_silencio.mp3"
import Botao from "../botoes/Botao"


function SubMenuGeral(props) {

    const reinicarTudo = async () => {
        const resposta = await axios.get("http://127.0.0.1:5001/reiniciar_tudo")
        window.location.reload()
    }

    const pedirSilencio = async () => {
        const audio = new Audio(audioSilencioMp3)
        audio.play()
    }

    return (
        <div className={`${styles.divMenu} cor-fundo2`}>
            <Botao
                className={styles.botao}
                href="/tv"
                nomeDoBotao="TV"
            />

            <Botao
                className={styles.botao}
                href="/info"
                nomeDoBotao="INFORMAÇÕES"
            />

            <Botao
                className={styles.botao}
                onClick={() => pedirSilencio()}
                nomeDoBotao="PEDIR SILÊNCIO"
            />

            <Botao
                className={styles.botao}
                onClick={() => reinicarTudo()}
                nomeDoBotao="REINICAR TUDO"
            />
        </div>

    )
}

export default SubMenuGeral