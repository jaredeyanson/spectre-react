import CardHeaderName from "./CardHeaderName"
import CardHeaderStats from "./CardHeaderStats"
import './CardHeader.css'

function CardHeader(props) {
    return (
        <div className="cardHeader">
            <CardHeaderName props={props}/>
            <CardHeaderStats props={props}/>
        </div>
    )
}

export default CardHeader