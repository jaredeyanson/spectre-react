import './CharacterStats.css'

function CharacterStats(props) {
    //console.log(props.props.stats)
    let stats = props.props.stats
    return (
        <div >
            <div className="statDiv">
                {stats.map(a => {
                    return <p>{a.statName}</p>
                })}
            </div>
            <div className="statDiv">
                {stats.map(a => {
                    return <p>{a.statValue}</p>
                })}
            </div>
        </div>
    )
}

export default CharacterStats