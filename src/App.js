import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from './components/Pages/Contact';
import SignUp from "./components/Pages/SignUp";
import './App.css';


function App() {
  return (
    <Router>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
    </Router>
  );
}

export default App;
