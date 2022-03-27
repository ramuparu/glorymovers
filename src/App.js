import { Routes,Route } from "react-router-dom";

import Home from "./routes/Home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Signin from "./routes/signin/signin.component";

const Shop = ()=><h1>iam shop Router</h1>


const App=()=> {
  return(
  <Routes>
    <Route path='/' element={<Navigation />}>
       <Route index element={<Home />} />
       <Route path='/shop' element={<Shop />} />
       <Route path='/sign-in' element={<Signin />} />
    </Route>
  </Routes>
  )
}


export default App;
