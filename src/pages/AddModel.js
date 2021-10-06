import CardHeader from "../components/CardHeader"
import {state} from "../state"
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
    
    // state.push({
    //     name: 'billy'
    // })
    
    
    function statePush (b){
        for (let i = 0; i < charData.length; i++){
            for (let h = 0; h < charData[i].model.length; h++){
                if (b.target.id == charData[i].model[h].modelName){
                    let mod = charData[i].model[h]
                    //console.log(mod)
                    state.list.push({
                        id: Date.now(),
                        name: mod.modelName,
                        level: mod.level,
                        points: mod.points,
                        modelPoints: 0,
                        stats: mod.stats,
                        weapons: [],
                        equipment: [],
                        offTableAssest: []
                    })
                }
            }
        }
        
    }
    return (
        <div>
            <Link to='../' className='headerBtn'>HOME</Link>
            {charData.map(a => {
                return a.model.map(b => {
                    return (
                        <div className="addCard" id={b.modelName}>
                            <CardHeader name={b.modelName} level={b.level} points={b.points} id={b.modelName} />
                            <CharacterDataDiv id={b.modelName} stats={b.stats}/>
                            <Link to='/armylist' id={b.modelName} className='headerBtn' onClick={(e) => {
                                statePush(e)
                                //console.log(e)
                            }}>SUBMIT</Link>
                        </div>
                    )
                })
            })}
        </div>
    )
}

export default AddModels