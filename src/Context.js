import { useContext } from 'react'

function Context (){
    let characters = []
    
    function createCharacters (a){
        let characterObject = {
            id : a.id,
            modelName : a.modelName,
            modelLevel : a.modelLevel
        }

        characters.push(characterObject)
    }
}

export default Context