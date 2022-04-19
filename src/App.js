import { Routes,Route } from "react-router-dom";

import Home from "./routes/Home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Autentication from './routes/autentication/authentication.component'
import Shop from "./routes/shop/shop.component";

import Checkout from "./routes/checkout/checkout.component"


const App=()=> {
  return(
  <Routes>
  
    <Route path='/' element={<Navigation />}>
       <Route index element={<Home />} />
       <Route path='/auth' element={<Autentication />} />
       
       <Route path='/shop' element={<Shop />} />
       <Route path='/checkout' element={<Checkout />} />
    </Route>
  </Routes>
  )
}


export default App;
