import CardHeader from "../components/CardHeader"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import CharacterDataDiv from "../components/CharacterDataDiv";
import './Add.css'

function AddModels() {
    const [isLoading, setIsLoading] = useState(true)
    const [charData, setCharData] = useState()

    useEffect(() => {
        fetch('../data-character.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        ).then((response) => {
            return response.json()
        }).then((nu) => {
            setIsLoading(false)
            setCharData(nu[0].tier)
        }).catch(e => {
            console.log(e)
        })
    }, [])
    
    if (isLoading === true || charData === undefined) {
        return <p>loading</p>
    }

    // function sendPost (){
    //     fetch('http://localhost:3000/character.json', {
    //         method: 'POST',
    //         body: JSON.stringify('hello')
    //     })
    // }

    return (
        <div>
            <Link to='../' className='headerBtn'>HOME</Link>
            {charData.map(a => {
                return a.model.map(b => {
                    return (
                        <div className="addCard" id={b.modelName}>
                            <CardHeader name={b.modelName} level={b.level} points={b.points} id={b.modelName} />
                            <CharacterDataDiv id={b.modelName} stats={b.stats}/>
                            <Link to='/armylist' id={b.modelName} className='headerBtn'>SUBMIT</Link>
                        </div>
                    )
                })
            })}
        </div>
    )
}

export default AddModels