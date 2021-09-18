import CharacterNotes from "./CharacterNotes"
import CharacterStats from "./CharacterStats"

import './CharacterDataDiv.css'

function CharacterDataDiv(props) {
   // console.log(props)
    return (
        <div className='characterStats'>
            <CharacterStats stats={props.stats}/>
            <CharacterNotes />
        </div>
    )
}

export default CharacterDataDiv