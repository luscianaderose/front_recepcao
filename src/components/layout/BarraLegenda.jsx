import styles from "./BarraLegenda.module.css"
import editarPng from "../../assets/img/editar.png"
import lixeiraPng from "../../assets/img/lixo.png"
import setaCimaPng from "../../assets/img/seta-cima.png"
import setaBaixoPng from "../../assets/img/seta-baixo.png"
import duplaPng from "../../assets/img/dupla.png"
import observacaoPng from "../../assets/img/observacao.png"

function BarraLegenda(){
    return (
        <div className={`${styles.legenda} divContainer cor-fundo2`}>
            <p className="txt-pequeno">
                LEGENDA: NOME - CÂMARA &nbsp;&nbsp;
                BOTÕES: &nbsp;
                EDITAR &nbsp;<img alt="Editar" src={editarPng} width="12" height="12"/>&nbsp;&nbsp;
                REMOVER &nbsp;<img alt="Lixeira" src={lixeiraPng} width="12" height="12"/>&nbsp;&nbsp;
                SUBIR POSIÇÃO &nbsp;<img alt="Editar" src={setaCimaPng} width="12" height="12"/>&nbsp;&nbsp;
                DESCER POSIÇÃO &nbsp;<img alt="Editar" src={setaBaixoPng} width="12" height="12"/>&nbsp;&nbsp;
                CRIAR DUPLA &nbsp;<img alt="Editar" src={duplaPng} width="14" height="14"/>&nbsp;&nbsp;
                OBSERVAÇÃO &nbsp;<img alt="Editar" src={observacaoPng} width="12" height="12"/>&nbsp;&nbsp;
            </p>
        </div>

    )
}

export default BarraLegenda