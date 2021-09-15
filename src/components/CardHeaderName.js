import './CardHeader.css'

function CardHeaderName(props) {
    return (
        <div>
            <h2>{props.props.name}</h2>
            <div className='custNameDiv'>
                {/* <h3>Custom Name: </h3> */}
                <input type='textbox' className="custNameInput" placeholder="Custom Character Name"></input>
            </div>
        </div>
    )
}

export default CardHeaderName