import './DropDownList.css'

const DropDownList = (props) => {
    return (
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select 
            onChange={e => props.handleAlt(e.target.value)} 
            required={props.isRequired} value={props.textValue}>
                <option value="" ></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default DropDownList;