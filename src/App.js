import { Routes,Route } from "react-router-dom";

import Home from "./routes/Home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Autentication from './routes/autentication/authentication.component'


const Shop = ()=><h1>iam shop Router</h1>


const App=()=> {
  return(
  <Routes>
    <Route path='/' element={<Navigation />}>
       <Route index element={<Home />} />
       <Route path='/shop' element={<Shop />} />
       <Route path='/auth' element={<Autentication />} />
       
    </Route>
  </Routes>
  )
}


export default App;
