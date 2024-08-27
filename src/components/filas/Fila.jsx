import axios from "axios"
import { useState, useEffect } from 'react'
import styles from "./Fila.module.css"
import FormAtendido from "../forms/FormAtendido"
import FilaDupla from "./FilaDupla"
import FormObservacao from "../forms/FormObservacao"
import Icone from "../icones/Icone"
import BotaoIcone from "../botoes/BotaoIcone"
import editarPng from "../../assets/img/editar.png"
import lixoPng from "../../assets/img/lixo.png"
import setaCimaPng from "../../assets/img/seta-cima.png"
import setaBaixoPng from "../../assets/img/seta-baixo.png"
import observacaoPng from "../../assets/img/observacao.png"


function Fila(props){
    const [abertoEditar, setAbertoEditar] = useState({})
    const [abertoObservacao, setAbertoObservacao] = useState({})
    const editarAtendido = (nomePessoa) => {
        if (abertoEditar[nomePessoa] === true) {
            setAbertoEditar(valoresAnteriores => ({
                ...valoresAnteriores,
                [nomePessoa]:false
            }))
        } else {
            setAbertoEditar(valoresAnteriores => ({
                ...valoresAnteriores,
                [nomePessoa]:true
            }))   
        }
    }

    const adicionarObservacao = (nomePessoa) => {
        if (abertoObservacao[nomePessoa] === true) {
            setAbertoObservacao(valoresAnteriores => ({
                ...valoresAnteriores,
                [nomePessoa]:false
            }))
        } else {
            setAbertoObservacao(valoresAnteriores => ({
                ...valoresAnteriores,
                [nomePessoa]:true
            }))   
        }
    }

    const reposicionar = async (nomeFila, numeroAtendido, moverPara) => {
        const resposta = await axios.get(`http://127.0.0.1:5001/reposicionar_atendido?nome_fila=${nomeFila}&numero_atendido=${numeroAtendido}&mover_para=${moverPara}`)
        window.location.reload()
    }

    useEffect(() => {
        Object.values(props.fila["fila"]).map((pessoa, indice) => {
            setAbertoEditar(valoresAnteriores => ({
                ...valoresAnteriores,
                [pessoa["nome"]]:false
            }))

            setAbertoObservacao(valoresAnteriores => ({
                ...valoresAnteriores,
                [pessoa["nome"]]:false
            }))
        })
    }, [props.fila])

    return(
        <div className={`${styles.dvpLista} cor-${props.atividade}`}>
            <p className="txt-tit2">FILA {props.atividade.toUpperCase()}</p>

            {Object.values(props.fila["fila"]).map((pessoa, indice) => (
                
                <p key={indice}>
                    {pessoa["estado"] === "riscado" && <s>{indice + 1}. {pessoa["nome"].toUpperCase()} - {pessoa["camara"]}</s>} 
                    {pessoa["estado"] === "atendendo" && <b>{indice + 1}. {pessoa["nome"].toUpperCase()} - {pessoa["camara"]}</b>} 
                    {pessoa["estado"] !== "atendendo" && pessoa["estado"] !== "riscado" && `${indice + 1}. ${pessoa["nome"].toUpperCase()}`}

                    <BotaoIcone
                        alt="Editar"
                        src={editarPng}
                        onClick={() => editarAtendido(pessoa["nome"])}
                    />
                   <BotaoIcone
                        alt="Remover"
                        src={lixoPng}
                        href={`/remover_atendido?nome_fila=${props.fila["atividade"]}&numero_atendido=${pessoa["numero"]}`}
                    />
                   <BotaoIcone
                        alt="Reposicionar"
                        src={setaCimaPng}
                        onClick={() => reposicionar(props.fila["atividade"], pessoa["numero"], "cima")}
                    />
                   <BotaoIcone
                        alt="Reposicionar"
                        src={setaBaixoPng}
                        onClick={() => reposicionar(props.fila["atividade"], pessoa["numero"], "baixo")}
                    />

                    <FilaDupla 
                        dupla={pessoa["dupla"]}
                        numeroAtendido={pessoa["numero"]}
                        fila={props.fila}
                        nomeFila={props.fila["atividade"]}
                    />

                   <BotaoIcone
                        alt="Observação"
                        src={observacaoPng}
                        onClick={() => adicionarObservacao(pessoa["nome"])}
                    />
                    {
                        pessoa["observacao"] && 
                        <p className={styles.textoObservacao}>
                            <Icone alt="Observação" src={observacaoPng}/>
                            {pessoa["observacao"]}
                        </p>
                    }

                    {abertoEditar[pessoa["nome"]] && <FormAtendido 
                        pessoaEstado={pessoa["estado"]} 
                        pessoaNome={pessoa["nome"]}
                        nomeFila={props.fila["atividade"]}
                        numeroAtendido={pessoa["numero"]}
                        onCancelar={() => editarAtendido(pessoa["nome"])}
                    />}
                    {abertoObservacao[pessoa["nome"]] && <FormObservacao
                        observacao={pessoa["observacao"]}
                        numeroAtendido={pessoa["numero"]}
                        nomeFila={props.fila["atividade"]}
                    />}
                </p>
            ))}
        </div>
)
}

export default Fila