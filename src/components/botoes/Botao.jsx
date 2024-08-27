import styles from "./Botao.module.css"


function Botao (props){
    return(
        <a 
            className={`${styles.botao} ${props.className}`} 
            href={props.href} 
            onClick={props.onClick}
        >
            <button>
                {props.nomeDoBotao}
            </button>
        </a>
    )
}

export default Botao