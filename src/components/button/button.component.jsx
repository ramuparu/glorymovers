import './button.styles.scss'

const BUTTON_TYPES = {
    google : 'google-sign-in',
    inverted : 'inverted'
}

const Button = ({Children,buttonType,...otherProps})=>{
    return (
        <button className={`button-container ${BUTTON_TYPES[buttonType]}`} {...otherProps}>{Children}</button>
    )
}

export default Button