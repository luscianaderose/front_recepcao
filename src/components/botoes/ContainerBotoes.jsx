import styles from "./ContainerBotoes.module.css"

function ContainerBotoes({children}){
    return(
        <div className={styles.containerBotoes}>
            {children}
        </div>

    )
}

export default ContainerBotoes