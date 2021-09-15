import { Route, Switch } from 'react-router-dom'
import './App.css';
import AddEquipment from './pages/AddEquipment';
import AddModels from './pages/AddModel';
import AddOTA from './pages/AddOTA';
import AddWeapon from './pages/AddWeapon';
import ArmyListScreen from './pages/ArmyListScreen';
import Welcome from './pages/Welcome.js';


function App() {

  
  return (
    <Switch>
      <Route path='/' exact={true}>
        <Welcome />
      </Route>
      <Route path='/armylist' exact={true} >
        <ArmyListScreen />
      </Route>
      <Route path='/armylist/addweapon'>
        <AddWeapon  />
      </Route>
      <Route path='/armylist/addmodels'>
        <AddModels />
      </Route>
      <Route path='/armylist/equipment'>
        <AddEquipment />
      </Route>
      <Route path='/armyList/offtableassets'>
        <AddOTA />
      </Route>
      
    </Switch>
  );
}

export default App;
