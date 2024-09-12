import styles from "./CalendarioMes.module.css"

function CalendarioMes(props){
    // console.log("dias do mes", props.mes["dias"])  NAO APAGAR ESSA NOTA

    const { dias, mes_display } = props.mes;
    const primeiroDia = dias[0]

    // console.log("primeiro dia ", primeiroDia, "mes ", mes_display)
    const diasEmBranco = []

    // console.log("primeiroDia ", primeiroDia)

    for (var diaSemana = 0; diaSemana < primeiroDia["dia_semana"]; diaSemana++){
        diasEmBranco.push(null)
        // console.log("diaDaSemana", diaSemana, "primeiroDia[dia_semana] ", primeiroDia["dia_semana"], "mes_display", mes_display)
    }

    // Filtrar apenas os dias que são feriados
    const feriadosDoMes = dias.filter(dia => dia.feriado);



    // // Calcular o primeiro e o último dia do mês
    // const firstDayOfMonth = new Date(props.ano, props.mesIndex - 1, 1); // props.mesIndex é o índice do mês (1 para Janeiro, 2 para Fevereiro, etc.)
    // const lastDayOfMonth = new Date(props.ano, props.mesIndex, 0); // Último dia do mês

    // // Filtrar dias para mostrar apenas os dias do mês corrente
    // const diasDoMes = dias.filter(dia => {
    //     const diaDate = new Date(props.ano, props.mesIndex - 1, dia.dia_mes);
    //     return diaDate >= firstDayOfMonth && diaDate <= lastDayOfMonth;
    // });


    const diasDaSemana = ["S", "T", "Q", "Q", "S", "S", "D"];


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
            
                {/* Exibir dias em branco */}
                {diasEmBranco.map((dia) => (
                    <div className={styles.dia}>
                        <p>
                            {dia}
                        </p>
                    </div>
                    // console.log("dia ", dia)
                ))}

                {/* Exibir dias do mês*/}
                {dias.map((dia, index) => (
                    <div key={index} className={styles.dia}>
                        <p className={dia.feriado ? styles.diaMesFeriado : ''}>
                            {dia.dia_mes}
                        </p>
                    </div>
                ))}
            </div>

            {/* Exibir feriados abaixo dos dias do mês */}
            {feriadosDoMes.length > 0 && (
                <div className={styles.feriados}>
                    {feriadosDoMes.map((feriado, index) => (
                        <div key={index} className={styles.feriado}>
                            <p>
                                <span className={styles.diaMesFeriado}>{feriado.dia_mes}</span> {feriado.feriado}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
    }

    export default CalendarioMes