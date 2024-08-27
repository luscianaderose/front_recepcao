function InputText (props) {
    return (
        <input 
            name={props.nome} 
            type="text" 
            placeholder={props.placeholder}
            value={props.valor}
            onChange={props.onChange}
        />
    )
}

export default InputText
