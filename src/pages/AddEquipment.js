import {useEffect, useState} from 'react'
import {state} from '../state'
import { Link } from 'react-router-dom'
import './AddEquipmentDiv.css'

function AddEquipment(){

    const [isLoading, setIsLoading] = useState(true)
    const [equipData, setEquipData] = useState()

    useEffect(() => {
        fetch('../data-equipment.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        ).then((response) => {
            //console.log(response)
            return response.json()
        }).then((nu) => {
            setIsLoading(false)
            setEquipData(nu)
            //console.log(nu)
        }).catch(e => {
            console.log(e)
        })
    }, [])
    
    if (isLoading === true || equipData === undefined) {
        return <p>loading</p>
    }

    function handleClick(b, c){
        //console.log(b)
        for (let i = 0; i < state.list.length; i++){
            // console.log(state.globalId)
            // console.log(state.list[i].id)
            if (state.globalId == state.list[i].id){
                console.log(b)
                state.list[i].equipment.push(b)
                //console.log(state.list[i].equipment)
            }
        }
        // console.log(state.list)
    }

    //console.log(equipData)
    return (
        <div className='equipDiv'>
           <Link to='../armylist' className='headerBtn'>BACK</Link>
            {equipData.equipment.map(a => {
                return (
                    <div className='equipStatDiv'>
                        <p>{a.equipType}</p>
                        <p>{a.name}</p>
                        <p>{a.points}</p>
                        <div>
                            {
                                a.spcRules.map(b => {
                                    return <p>{b}</p>
                                })
                            }
                        </div>
                        {/* <p>Special Rules go here</p> */}
                        <Link to='/armylist/equipment' className='headerBtn' onClick={() => {handleClick(a)}}>ADD</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AddEquipment