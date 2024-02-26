import './CardForm.css';
import TextField from '../TextField';
import DropDownList from '../DropDownList';
import Button from '../Button';
import { useState } from 'react';

const CardForm = (props) => {
    
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const handleSave = (event) => {
        event.preventDefault()
        // console.log("Form foi submetido =>", name, position, image, team)
        props.handleCardRegister({
            name,
            position,
            image,
            team
        })

        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='cardForm'>
            <form onSubmit={handleSave}>
                <h1>Preencha os dados para criar o card do colaborador</h1>
                <TextField 
                    isRequired={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    textValue={name}
                    handleAlt={textValue => setName(textValue)}/>
                <TextField  
                    isRequired={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    textValue={position}
                    handleAlt={textValue => setPosition(textValue)}/>
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    textValue={image}
                    handleAlt={textValue => setImage(textValue)}/>
                <DropDownList 
                    isRequired={true} 
                    label="Time" 
                    itens={props.teams}
                    textValue={team}
                    handleAlt={textValue => setTeam(textValue)}
                    />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
}

export default CardForm;