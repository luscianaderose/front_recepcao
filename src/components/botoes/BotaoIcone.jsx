import styles from "./BotaoIcone.module.css"
import Icone from "../icones/Icone"


function BotaoIcone(props){
    return(
        <a 
            className={styles.linkIcone} 
            onClick={() => props.onClick()} 
            href={props.href}
        >
            <Icone alt={props.alt} src={props.src}/>
        </a>
    )
}

export default BotaoIcone