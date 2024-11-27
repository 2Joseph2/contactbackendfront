import './App.css';
import {Routes,Route} from 'react-router-dom'

import Home from './Components/Home'
import ListContact from './Components/ListContact/ListContact';
import NavContact from './Components/Navbar/NavContact'
 import UpdateContact from './Components/UpdateContact/UpdateContact';
 import AddContact from './Components/AddContact/AddContact'
function App() {
  return (
    <div className="App">
      <NavContact/>
<Routes>
<Route path='/' element={ <Home/>}/>
<Route path='/list' element={ <ListContact/>} />
<Route path='/add' element={<AddContact/>} />
<Route path='/update/:id' element={ <UpdateContact/>}/>

</Routes>
     
     


    </div>
  );
}

export default App;
