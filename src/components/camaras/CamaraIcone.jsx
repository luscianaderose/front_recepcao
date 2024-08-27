import styles from "./CamaraIcone.module.css"

function CamaraIcone (props) {
    const estadoAcoes = {
        "fechada":{
            "descricao":"FECHADA",
            "icone":styles.iconeFechada
        },
        "atendendo":{
            "descricao":"ATENDENDO",
            "icone":styles.iconeAtendendo
        },
        "último":{
            "descricao":"ÚLTIMO",
            "icone":styles.iconeAvisar
        },
        "foi avisado":{
            "descricao":"FOI AVISADO",
            "icone":styles.iconeAvisado
        }
    }
    return (
        <>
            <span className={estadoAcoes[props.estado.toLowerCase()]["icone"]}></span>
            {estadoAcoes[props.estado.toLowerCase()]["descricao"]}
        </>
    )
}

export default CamaraIcone