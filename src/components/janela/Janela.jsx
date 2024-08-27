import styles from "./Janela.module.css"
import Botao from "../botoes/Botao"


function Janela (props){
    return(
        <>
            <p>{props.texto}</p>
            <div className={styles.btsJanela}>
                <Botao
                    className={styles.botao}
                    nomeDoBotao={props.bt1}
                    onClick={props.clickBt1}
                />
                <Botao
                    className={styles.botao}
                    nomeDoBotao={props.bt2}
                    href={props.href2}
                />
            </div>
        </>
    )
}

export default Janela