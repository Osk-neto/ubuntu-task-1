import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from '../Pages/Contact';
import SignUp from "../Pages/SignUp";
const RoutesList = ()=>{
    return <Router>
        
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>
</Router>
}

export default RoutesList;