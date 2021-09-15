import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './AddEquipmentDiv.css'

function AddEquipment(){

    const [isLoading, setIsLoading] = useState(true)
    const [equipData, setEquipData] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/data-equipment.json', {
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

    //console.log(equipData)
    return (
        <div className='equipDiv'>
           <Link to='../' className='headerBtn'>HOME</Link>
            {equipData.equipment.map(a => {
                return (
                    <div className='equipStatDiv'>
                        <p>{a.equipType}</p>
                        <p>{a.name}</p>
                        <p>{a.points}</p>
                        <p>Special Rules go here</p>
                        <Link to='/armylist' className='headerBtn'>ADD</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AddEquipment