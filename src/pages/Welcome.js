//import ArmyListScreen from "./ArmyListScreen";
import {Link} from 'react-router-dom'
import './welcome.css'

function Welcome() {
  
    return (
      <div className="mainDiv">
        <div className='secDiv'>
          <h1>Welcome to the Unofficial Spectre Army Builder</h1>
          <p>This app is meant to make building deatailed character lists to take with you to games and keep track of all weopons, equipment and off table assests with 
              in your army.
          </p>
          <p>Please enjoy, share and let me know of any feedback that you might have. I can be reached at jaredeyanson@gmail.com.</p>
          <p>The background image is a licensed property of Chris Kelley</p>
          <Link to='/armylist'>Start</Link>
          </div>
      </div>
    );
  }
  
  export default Welcome;
  