import './Weapon.css'
import WeaponValues from './WeaponValues'
import {Link} from 'react-router-dom'

function Weapon(props) {
    return (
        <div className='weaponDiv'>
            <div>
                <h3 className='title'>{props.props.name}</h3>
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
            <WeaponValues/>
            <Link to='/armylist/addweapon'>Add Weapon</Link>
        </div>
    )
}

export default Weapon