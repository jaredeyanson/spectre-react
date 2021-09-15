function CardHeaderStats(props) {
    return (
        <div>
            <h3>Level: {props.props.level}</h3>
            <h3>Base Points: {props.props.points}</h3>
            <h3>Total Model Points: </h3>
        </div>
    )
}

export default CardHeaderStats