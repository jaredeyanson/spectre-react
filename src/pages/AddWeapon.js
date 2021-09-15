import { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './AddWeapon.css'

function AddWeapon(){
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
                    </div>
                )
            })}
        </div>
    )
}

export default AddWeapon