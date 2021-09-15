import CardHeader from "./CardHeader";
import CharacterDataDiv from "./CharacterDataDiv";
import Weapon from "./Weapon";
import './CharacterCard.css'

function CharacterCard() {

    return (
        <div className='card'> 
            <CardHeader />
            <CharacterDataDiv/>
            <Weapon name='Primary Weapon'/>
            <Weapon name='Secondary Weapon'/>
            <Weapon name='Sidearm'/>
            
        </div>
    );
}

export default CharacterCard;
