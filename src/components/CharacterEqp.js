import {state} from '../state'
import {Link} from 'react-router-dom'
import './Weapon.css'

export default function CharacterEqp(props){

    // let thisEquip
    // for (let i = 0; i < state.list.length; i++){
    //     if (props.id == state.list[i].id){
    //         let thisState = state.list[i]
    //         // thisEquip = thisState[wpnName]
    //     }
    //     console.log(thisState)
    // }

    function setBtnId(){
        state.globalId = props.id
    }

    console.log(state.list)

    return (
        <div>
            <h3>Equipment</h3>

            {
                state.list.map(a => {
                    if (a.id == props.id){
                        return a.equipment.map(b => {
                            return (
                                <div className='statHeader'>
                                    <p className='stats'></p>
                                    <p className='stats'>{b.name}</p>
                                    <p className='stats'>{b.points}</p>
                                    <p className='stats'></p>
                                    <p className='stats'></p>
                                    <p className='stats'></p>
                                    <div>
                                    {
                                        b.spcRules.map(c => {
                                            return <p className='stats'>{c}</p>
                                        })
                                    }
                                    </div>
                                    {/* <p className='stats'>{b.spcRules}</p> */}
                                </div>
                            )
                        })
                    }
                })
            }
            {/* <div className='statHeader'>
                <p className='stats'></p>
                <p className='stats'>Name</p>
                <p className='stats'>Points</p>
                <p className='stats'></p>
                <p className='stats'></p>
                <p className='stats'></p>
                <p className='stats'>Special Rules</p>
            </div> */}

            <Link to='/armylist/equipment' className='headerBtn' onClick={() => {setBtnId()}}>Add Equipment</Link>
        </div>
    )
}