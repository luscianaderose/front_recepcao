import styles from "./InfoPage.module.css"
import Botao from "../components/botoes/Botao"
import ContainerBotoes from "../components/botoes/ContainerBotoes"
import BarraCabecalho from "../components/layout/BarraCabecalho"
import Icone from "../components/icones/Icone"
import chamarComSomPng from "../assets/img/chamar-com-som.png"
import chamarSemSomPng from "../assets/img/chamar-sem-som.png"
import duplaPng from "../assets/img/dupla.png"
import duplaCancelarPng from "../assets/img/dupla_cancelar.png"


function InfoPage(){

    return(
        <div className={`${styles.divInfo} cor-fundo2`}>
            <BarraCabecalho/>
            <p className="txt-tit2">INFORMAÇÕES</p>
            <p className="txt-tit3">ROTINA DA RECEPÇÃO DAS CÂMARAS</p>
            <ol>
                <li>Verificar no comprovante de agendamento da pessoa se data da marcação é a data de hoje.</li>
                <li>Digitar o nome, escolher a fila correspondente (prece ou vidência) e clicar em 'ADICIONAR'.</li>
                <li>Carimbar o comprovante.</li>
                <li>Anotar o número da ordem de chegada no comprovante.</li>
                <li>Devolver o comprovante para a pessoa.</li>
                <li>Pedir para se sentar segurando o comprovante em mãos.</li>
                <li>Quando a câmara chamar, clicar no botão 'CHAMAR PRÓXIMO' ou na bola com número da câmara.</li>
                <li>Automaticamente o nome anterior é riscado na lista, a câmara que chamou fica registrada ao lado do nome na lista, uma bolinha vazia fica preenchida e um áudio é tocado avisando que a câmara está chamando.</li>
                <li>Chamar o próximo pelo nome da pessoa. Mostrar à pessoa onde é a câmara.</li>
                <li>Nas sextas-feiras, normalmente cada câmara atende 5 pessoas. Quando 5 bolinhas forem preenchidas, é hora de avisar a câmara que é a última.</li>
                <li>Tente distribuir os atendimentos nas câmaras igualmente. Por exemplo, se comparecerem apenas 8 de uma lista com 10 pessoas, direcione 4 para cada câmara.</li>
                <li>Ao entrar a última pessoa da câmara, avisar ao secretário da câmara que é a última pessoa a ser atendida para que a câmara possa fazer depois do atendimento o processo de encerramento.</li>
                <li>Leia um trecho do Evangelho às 18:50. Falar a saudação da casa antes e depois (Graças a Deus, a Jesus e a Francisco de Paula). Se quiser pode rezar o Pai Nosso. </li>
                <li>Fale os seguintes avisos: silêncio, desligar os celulares, comprovante em mãos, pode pegar um livro.</li>
                <ol>
                    <li>Por favor, faça silêncio para permanecer concentrado, em oração.</li>
                    <li>Desligue os celulares. Não é permitido uso de eletrônicos. O uso causa desconcentração e atrapalha os trabalhos nas câmaras.</li>
                    <li>Permaneça com o comprovante em mãos para não ter que procurar quando entrar na câmara atrapalhando a concentração.</li>
                    <li>Pode pegar um livro do balcão para ler enquanto espera.</li>
                </ol>
            </ol>
            
            <p className="txt-tit3">REPETIR CHAMADO COM OU SEM SOM</p>
            <ul>
                <li>Clique em <Icone alt="chamar com som" src={chamarComSomPng} width="12" height="12"/> para repetir o chamado com som.</li>
                <li>Clique em <Icone alt="chamar sem som" src={chamarSemSomPng} width="12" height="12"/> para repetir o chamado sem som, fazendo apenas o destaque visual.</li>
            </ul>
            
            <p className="txt-tit3">NOMES QUE ENTRAM JUNTOS NA CÂMARA – CRIAÇÃO DE DUPLA</p>
            <ol className={styles.espacoEmbaixoDoTexto}>
                <li>Na lista de nomes da fila, clique no botão CRIAR DUPLA <Icone alt="dupla" src={duplaPng} /> ao lado do nome que formará dupla.</li>
                <li>Este ícone se tornará um <Icone alt="x" src={duplaCancelarPng} />. Caso queira cancelar a ação, clique neste <Icone alt="cancelar" src={duplaCancelarPng} />.</li>
                <li>Agora clique no botão CRIAÇÃO DE DUPLA <Icone alt="dupla" src={duplaPng} /> ao lado do nome que entrará na câmara junto. Pronto!</li>
                <li>Se quiser desfazer, clique no botão DESFAZER DUPLA <Icone alt="cancelar dupla" src={duplaCancelarPng} />.</li>
            </ol>

            <ContainerBotoes>
                <Botao href="/" nomeDoBotao="VOLTAR PARA PAINEL DE CONTROLE"/>
            </ContainerBotoes>
        </div>
    )
}

export default InfoPage