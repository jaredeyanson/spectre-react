import CardHeader from "./CardHeader";
import CharacterDataDiv from "./CharacterDataDiv";
import Weapon from "./Weapon";
import './CharacterCard.css'

function CharacterCard(props) {
    console.log(props)
    return (
        <div className='card'> 
            <CardHeader name={props.name} level={props.level} points={props.points}/>
            <CharacterDataDiv stats={props.stats} />
            {/* <Weapon name='Primary Weapon'/>
            <Weapon name='Secondary Weapon'/>
            <Weapon name='Sidearm'/> */}
            
        </div>
    );
}

export default CharacterCard;
