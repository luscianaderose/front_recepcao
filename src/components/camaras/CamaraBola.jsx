import styles from "./CamaraBola.module.css"


function CamaraBola(props){
    return(
        <div className={`${styles.dvpCamaraNumeroGrande} ${props.className}`}>
            {props.numeroCamara}
        </div>
    )
}

export default CamaraBola