import styles from "./Botao.module.css"


function BotaoVoltar (props){
    const voltar = () => {
        window.history.back(1)
    }
    return(
        <a className={styles.botao} onClick={() => voltar()}>
            <button>{props.nomeDoBotao.toUpperCase()}</button>
        </a>
    )
}

export default BotaoVoltar