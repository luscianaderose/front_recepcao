import BarraCabecalho from '../components/layout/BarraCabecalho'
import BarraAdicionarNomes from '../components/layout/BarraAdicionarNomes'
import Camaras from '../components/camaras/Camaras'
import BarraLegenda from '../components/layout/BarraLegenda'
import Menu from '../components/layout/Menu'
import CalendarioAno from '../components/calendario/CalendarioAno'


function RecepcaoPage(){
    const anoAtual = new Date().getFullYear();
    const mesAtual = new Date().getMonth();

    return(
    <>
        <BarraCabecalho/>
        <BarraAdicionarNomes/>
        <Camaras/>
        <BarraLegenda/>
        <Menu/>
        <CalendarioAno ano={anoAtual} mes={mesAtual}/>
    </>
    )
}

export default RecepcaoPage