
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Cardview from './Cardview';


  
function App() {
   return (
      <BrowserRouter>
      <Routes>
        <Route path = "/" element ={ <Home/>}></Route>
        <Route path = "/Create" element ={ <Create/>}></Route>
        <Route path = "/edit/:id" element ={ <Update/>}></Route>
        <Route path = "/view/:id" element ={ <Cardview/>}></Route>
      </Routes>
      </BrowserRouter>
      
   );
 }

export default App;
