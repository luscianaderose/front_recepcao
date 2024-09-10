import styles from "./CalendarioMes.module.css"

function CalendarioMes(props){
    // console.log("dias do mes", props.mes["dias"])  NAO APAGAR ESSA NOTA

    const { dias, mes_display } = props.mes;

    // Filtrar apenas os dias que são feriados
    const feriadosDoMes = dias.filter(dia => dia.feriado);

    const diasDaSemana = ["S", "T", "Q", "Q", "S", "S", "D"]


    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>{mes_display}</div>

            {/* Exibir as siglas dos dias da semana */}
            <div className={styles.diasSemana}>
                {diasDaSemana.map((diaSemana, index) => (
                    <div key={index} className={styles.diaSemana}>
                        {diaSemana}
                    </div>
                ))}
            </div>

            <div className={styles.cardBody}>
                {dias.map((dia, index) => (
                    <div key={index} className={styles.dia}>
                        <p>{dia.dia_mes}</p>
                    </div>
                ))}
            </div>

            {/* Exibir Feriados Abaixo dos Dias */}
            {feriadosDoMes.length > 0 && (
                <div className={styles.feriados}>
                    {feriadosDoMes.map((feriado, index) => (
                        <div key={index} className={styles.feriado}>
                            <p>
                                <span className={styles.diasMesFeriado}>{feriado.dia_mes}</span> {feriado.feriado}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
    }

    export default CalendarioMes