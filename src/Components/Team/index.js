import Card from '../Card';
import './Team.css'

const Team = (props) => {

    const background = {backgroundColor: props.secondColor}
    const border = {borderColor: props.primaryColor}
    return (
        (props.registers.length > 0) &&
        <section className='team' style={background}>
            <h3 style={border}>{props.name}</h3>
            <div className='registers'>
                {props.registers.map((card, index) => 
                <Card 
                    key={index}
                    name={card.name} 
                    image={card.image} 
                    position={card.position} 
                    background={props.primaryColor}
                />)}
            </div>
        </section>
    );
}

export default Team;