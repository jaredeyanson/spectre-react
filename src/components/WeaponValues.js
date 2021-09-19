import {state} from '../state'
import './Weapon.css'

function WeaponValues(props) {

    let thisWpn 
    for (let i = 0; i < state.list.length; i++){
        if (props.id == state.list[i].id){
            let thisState = state.list[i]
            thisWpn = thisState.weapons
            //console.log(thisWpn)
        }
    }

    return (
        <div>
                {
                    thisWpn.map(a => {
                        return (<div className='statHeader'>

                                <p className='stats'>{a.category}</p>
                                <p className='stats'>{a.name}</p>
                                <p className='stats' >{a.points}</p>
                                <p className='stats'>{a.rangeint}</p>
                                <p className='stats'>{a.lethality}</p>
                                <p className='stats'>{a.pen}</p>
                                <div className='spcRuleDiv'>
                                {
                                    a.specialRules.map(b => {
                                        return (
                                            <div className='spcRuleStatDiv'>
                                                <p>{b.name + ': ' + b.desc}</p>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                        </div>)
                    })
                }
        </div>
    )
}

export default WeaponValues 