import CardHeaderName from "./CardHeaderName"
import CardHeaderStats from "./CardHeaderStats"
import './CardHeader.css'

function CardHeader(props) {
    //console.log(props)

    return (
        <div className="cardHeader">
            <CardHeaderName name={props.name}/>
            <CardHeaderStats level={props.level} points={props.points}/>
        </div>
    )
}

export default CardHeader