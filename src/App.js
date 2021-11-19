

//router
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';



//header

import Header from './Components/Header';
import Alerts from './Components/Alerts/Alert'

//individual page list
import SingleShow from './Components/SingleShow'
//pages
import Home from './Components/pages/Home';
import About from './Components/pages/About';

function App() {

  return (
    
   <BrowserRouter>
     <div className="container">
       <Header/>
       <Routes>
       <Route exact path='/' element ={<Home/>}/>
       <Route exact path='/about' element ={<About/>}/>
       <Route exact path='/show/:id' element={<SingleShow/>}/>
       </Routes>
       <Alerts/>
      </div>     
   </BrowserRouter>
      
    
  );
}

export default App;
