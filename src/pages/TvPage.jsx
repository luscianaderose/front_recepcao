import styles from "./TvPage.module.css"
import Tvs from "../components/tvs/Tvs"
import Botao from "../components/botoes/Botao"
import ContainerBotoes from "../components/botoes/ContainerBotoes"


function TvPage(){

    return(
        <>
            <Tvs className={styles.tvs}/>

            <ContainerBotoes>
                <Botao href="/" nomeDoBotao="VOLTAR PARA PAINEL DE CONTROLE"/>
            </ContainerBotoes>

        </>
    )
}

export default TvPage