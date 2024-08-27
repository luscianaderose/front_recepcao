function BotaoCancelar (props){
    return(
        <a className={props.className} onClick={props.onClick}>
            <button>{props.nomeDoBotao.toUpperCase()}</button>
        </a>
    )
}

export default BotaoCancelar