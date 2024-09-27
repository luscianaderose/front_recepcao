import axios from "axios"

import styles from "./Camara.module.css"
import CamaraBotao from "./CamaraBotao"
import CamaraIcone from "./CamaraIcone"
import CamaraBolinhas from "./CamaraBolinhas"
import CamaraBola from "./CamaraBola"
import chamarComSomPng from "../../assets/img/chamar-com-som.png"
import chamarSemSomPng from "../../assets/img/chamar-sem-som.png"
import audioCamara2Wav from "../../assets/audio/camara2.wav"
import audioCamara3Wav from "../../assets/audio/camara3.wav"
import audioCamara3AWav from "../../assets/audio/camara3A.wav"
import audioCamara4Wav from "../../assets/audio/camara4.wav"
import BotaoIcone from "../botoes/BotaoIcone"


const audiosCamara = {
    "2": audioCamara2Wav,
    "4": audioCamara4Wav,
    "3": audioCamara3Wav,
    "3A": audioCamara3AWav
}

function Camara(props) {
    var atendido = ""
    var dupla_atendido = ""


    console.log("-----", props.fila.fila)
    for (const [posicao, pessoa] of Object.entries(props.fila.fila)) {
        if (props.camara.pessoa_em_atendimento && pessoa.numero === props.camara.pessoa_em_atendimento.numero) {
            atendido = {
                "posicao": posicao,
                "pessoa": pessoa
            }
        } else if (props.camara.pessoa_em_atendimento && pessoa.numero === props.camara.pessoa_em_atendimento.dupla_numero) {
            dupla_atendido = {
                "posicao": posicao,
                "pessoa": pessoa
            }
        }
        // console.log(`Chave: ${posicao}, Valor: ${pessoa.nome}`);
    }

    console.log("---", atendido)
    console.log("---", dupla_atendido)
    // if (props.camara.pessoa_em_atendimento.dupla_numero) {
    //     nomeDupla = props.fila.fila
    // }

    // if (typeof props.fila === "object" && "fila" in props.fila && props.camara["pessoa_em_atendimento"] !== null) {
    //     numeroAtendidoNaFila = Object.keys(props.fila["fila"]).indexOf(props.camara["pessoa_em_atendimento"]["numero"].toString()) + 1
    // }

    // if (props.camara["pessoa_em_atendimento"] && props.camara["pessoa_em_atendimento"]["dupla"] !== -1) {
    //     if (typeof props.fila === "object" && "fila" in props.fila) {
    //         const indice = props.camara["pessoa_em_atendimento"]["dupla"]
    //         nomeDupla = props.fila["fila"][indice]["nome"]
    //     }
    // }

    const classeCamara = {
        "fechada": "camara-fechada",
        "atendendo": "camara-chamando",
        "último": "camara-avisar",
        "foi avisado": "camara-avisado"
    }

    const chamarNovamente = () => {
        const audio = new Audio(audiosCamara[props.camara["numero"]])
        audio.play()
    }

    return (
        <div className={`${styles.dvpCamaraIndividual} cor-fundo2 ${classeCamara[props.camara["estado"]]}`}>
            <p>
                <div className={styles.dvpBtNumGdeComBtChamNov}>
                    <a style={{ textDecoration: "none" }} href={`/abrir_camara/${props.camara["numero"]}`}></a>

                    <CamaraBola
                        className={`cor-${props.camara["fila_atividade"]}`}
                        numeroCamara={props.camara["numero"]}
                    />

                    <div className={styles.dvpBtChamarNovamente}>
                        <BotaoIcone
                            alt="Som"
                            src={chamarComSomPng}
                            onClick={() => chamarNovamente()}
                        />
                        <BotaoIcone
                            alt="Sem som"
                            src={chamarSemSomPng}
                            onClick={() => { console.log("Funcionalidade em construção: Chamando sem som") }}
                        />
                    </div>
                </div>
            </p>

            {<CamaraIcone estado={props.camara["estado"]} />}
            <p className="txt-destaque">
                {
                    props.camara["pessoa_em_atendimento"]
                        ? `${atendido.posicao}. ${props.camara["pessoa_em_atendimento"]["nome"].toUpperCase()}`
                        : "CÂMARA VAZIA"
                }
                {dupla_atendido && ` & ${dupla_atendido.pessoa.nome.toUpperCase()}`}
            </p>
            <p className="atendimentos txt-pequeno b">ATENDIMENTOS</p>
            <CamaraBolinhas
                numero={props.camara["numero"]}
                capacidade={props.camara["capacidade_maxima"]}
                numeroAtendimentos={props.camara["numero_de_atendimentos"]}
            />
            <p>
                <CamaraBotao
                    numero={props.camara["numero"]}
                    estado={props.camara["estado"]}
                    mudarCamaras={props.mudarCamaras}
                    nomeFila={props.camara["fila_atividade"]}
                    mudarFila={props.mudarFila}
                />
            </p>
        </div>
    )
}

export default Camara