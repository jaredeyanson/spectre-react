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
        //console.log(c)
        let thisWpn 
        for (let i = 0; i < state.list.length; i++){
            if (state.globalId == state.list[i].id){
                state.list[i].weapons.push(b)
                //console.log(props.id)
            }
        }
        console.log(state.list)
    }
    
    //console.log(state)
    return(
        <div >
            {/* <AddWeaponTitle/> */}
            <Link to='../' className='headerBtn'>HOME</Link>
            {wpnData.map(a => {
                return(
                    <div className='wpnStatDiv'>
                        <p>{a.category}</p>
                        <p>{a.name}</p>
                        <p>{a.points}</p>
                        <p>{a.rangeInt}</p>
                        <p>{a.lethality}</p>
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