import './Button.css';

const Button = (props) => {
    return (
        <button className='cardButton'>
            {props.children}
        </button>
    )
}

export default Button;