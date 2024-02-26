import './Card.css'

const Card = (props) => {

    const background = {backgroundColor: props.background}

    return (
        <div className='card'>
            <div className='header' style={background}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
        
        
    );
}

export default Card;