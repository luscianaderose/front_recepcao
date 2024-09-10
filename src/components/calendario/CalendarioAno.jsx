import axios from "axios"
import { useState, useEffect } from "react"
import styles from "./CalendarioAno.module.css"
import CalendarioMes from "./CalendarioMes"


function CalendarioAno(props){
    const [calendario, setCalendario] = useState()

    const buscarCalendario = async () => {
        try {
            const resposta = await axios.get(`http://127.0.0.1:5000/calendario/ano/${props.ano}`)
            const dados = await resposta.data
            setCalendario(dados)
        } catch(error){
            console.error("erro", error)
        }
    }

    useEffect(
        () => {
            buscarCalendario()
        }
    ,[])

    console.log("calendario", calendario)


    return(
        <div className={`${styles.card} divContainer cor-fundo2`}>
            <div className={`${styles.cardTitle} txt-tit2`}>CALENDÁRIO {props.ano}</div>
            <div className={styles.cardBody}>
                {/* <CalendarioMes mes={1}/>
                <CalendarioMes mes={2}/> */}
                {
                    calendario &&
                    Object.values(calendario).map((mes) => (
                        <CalendarioMes mes={mes}/>
                    ))
                }
            </div>

        </div>
    )
}

export default CalendarioAno
