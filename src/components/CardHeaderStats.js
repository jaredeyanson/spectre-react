import {state} from "../state"

function CardHeaderStats(props) {
    console.log(props)

    return (
        <div>
            <h3>Level: {props.level}</h3>
            <h3>Base Points: {props.points}</h3>
            <h3>Total Model Points: </h3>
        </div>
    )
}

export default CardHeaderStats