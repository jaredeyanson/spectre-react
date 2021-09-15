//import CharacterCard from '../components/CharacterCard'
import {Link} from 'react-router-dom'
import './ArmyListScreen.css'

function ArmyListScreen() {

    return (
        <div id='armylist'>
           <Link to='./' className='headerBtn'>HOME</Link>
            <Link to='./armylist/addmodels' className='headerBtn'>ADD MODEL</Link>
            <Link to='./armylist/addweapon' className='headerBtn'>ADD WEAPON</Link>
            <Link to='./armylist/equipment'className='headerBtn'>ADD EQUIPMENT</Link>
            <Link to='./armyList/offtableassets' className='headerBtn'>ADD OFF TABLE ASSETS</Link>
            {/* needs to be a loop */}
            {/* <CharacterCard />    */}
        </div>
    );
}

export default ArmyListScreen; 
