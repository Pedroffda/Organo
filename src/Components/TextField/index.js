import './TextField.css'

const TextField = (props) => {

    const placeholderMod = `${props.placeholder}...`

    // let nameValue = 'Pedrao'
    const handleChange = (e) => {
        props.handleAlt(e.target.value)
        // setValue(e.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.textValue} onChange={handleChange} required={props.required} placeholder={placeholderMod} />
        </div>
    );
}

export default TextField