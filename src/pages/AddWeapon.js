import { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {state} from '../state'
import './AddWeapon.css'

function AddWeapon(props){
    const [isLoading, setIsLoading] = useState(true)
    const [wpnData, setWpnData] = useState()

    useEffect(() => {
        fetch('../data-weapons.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        ).then((response) => {
            return response.json()
        }).then((nu) => {
            setIsLoading(false)
            setWpnData(nu.weapons)
        }).catch(e => {
            console.log(e)
        })
    }, [])
    
    if (isLoading === true || wpnData == undefined) {
        return <p>loading</p>
    }

    function handleClick(b, c){
        for (let i = 0; i < state.list.length; i++){
            if (state.globalId == state.list[i].id){
                state.list[i].weapons.push(b)
            }
        }
    }
    
    return(
        <div >
            <Link to='../armylist' className='headerBtn'>BACK</Link>
            {wpnData.map(a => {
                return(
                    <div className='wpnStatDiv'>
                        <p>{a.category}</p>
                        <p>{a.name}</p>
                        <p>{a.points}</p>
                        <p>{a.rangeint}</p>
                        <p>{a.lethality}</p>
                        <p>{a.pen}</p>
                        <div>
                            {
                                a.specialRules.map(b => {
                                    return <p>{b.name + ": " + b.desc}</p>
                                })
                            }
                        </div>
                        {/* <p>special rules place holder</p> */}
                        <Link to='../armylist' className='headerBtn' id={props.id} onClick={(e) => {
                            handleClick(a, props)
                        }}>ADD</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AddWeapon