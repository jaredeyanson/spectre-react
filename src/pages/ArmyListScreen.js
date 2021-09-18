import CharacterCard from '../components/CharacterCard'
import CharacterDataDiv from '../components/CharacterDataDiv'
import {Link} from 'react-router-dom'
import { state } from '../state'
import './ArmyListScreen.css'

function ArmyListScreen() {
    //console.log(state)
    return (
        <div id='armylist'>
           <Link to='./' className='headerBtn'>HOME</Link>
            <Link to='./armylist/addmodels' className='headerBtn'>ADD MODEL</Link>
            <Link to='./armylist/equipment'className='headerBtn'>ADD EQUIPMENT</Link>
            <Link to='./armyList/offtableassets' className='headerBtn'>ADD OFF TABLE ASSETS</Link>
            {/* needs to be a loop */}
            
            {state.list.map(a => {
                //console.log(a)
                if (a === undefined){

                }else {
                    //console.log(a.name)
                    
                    return (
                    <div>
                      <CharacterCard id={a.id} name={a.name} points={a.points} level={a.level} stats={a.stats}/> 
                      {/* <CharacterDataDiv  stats={a.stats}/> */}
                    </div>
                    )
                }
                   
            })}
        </div>
    );
}

export default ArmyListScreen;  
