import styles from "./CalendarioMes.module.css"

function CalendarioMes(props){
    console.log("dias do mes", props.mes["dias"])

    return(
        <div className={styles.card}>
            <div className={styles.cardTitle}>{props.mes["mes_display"]}</div>
            <div className={styles.cardBody}>
                
            </div>
        </div>
    )
}

export default CalendarioMes