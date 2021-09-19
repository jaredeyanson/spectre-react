import './Weapon.css'
import WeaponValues from './WeaponValues'
import {Link} from 'react-router-dom'
import {state} from '../state'
import './CharacterCard.css'

function Weapon(props) {
    let thisWpn 
    let wpnName = props.type
    for (let i = 0; i < state.length; i++){
        if (props.id == state[i].id){
            let thisState = state[i]
            thisWpn = thisState[wpnName]
        }
    }

    function setBtnId(){
        state.globalId = props.id
    }

    return (
        <div className='weaponDiv'>
            <div>
                <h3 className='title'>Weapons</h3>
            </div>
            <div className='statHeader'>
                <p className='stats'>Type</p>
                <p className='stats'>Name</p>
                <p className='stats'>Pnts</p>
                <p className='stats'>RI</p>
                <p className='stats'>Leth</p>
                <p className='stats'>Pen</p>
                <p className='stats'>Special Rules</p>
            </div>
            <WeaponValues className='headerBtn' id={props.id}/>
            <Link to='/armylist/addweapon' className='headerBtn' type={props.type} id={props.id} onClick={() => {setBtnId()}}>Add Weapon</Link>
        </div>
    )
}

export default Weapon