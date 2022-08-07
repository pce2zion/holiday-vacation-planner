import Mui from "./mui eg/mui";
import Muidemo from "./muidemo/muidemo";
import { BrowserRouter as Router, Routes ,Route, Link, } from "react-router-dom";
 import Homer from "./muidemo/home";
 import Detail from "./muidemo/details";
 import Traveldata from "./muidemo/traveldata";


const App = () => {
  return ( 
    <Router>
        <div className="app">
          {/* <Mui/>  */}
          <Homer/>
            <Routes>
                <Route exact path="/" element={ <Muidemo/>}/>
                 <Route path= "/:id" element={  <Detail/>}/>
            </Routes>
          </div>
    </Router>
        
   
   );
}
 
export default App;
