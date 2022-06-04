import { Link } from 'react-router-dom';
import './NavMenu.css';


function NavMenu(){
    return <nav className='nav-links' id='navLinks'>
            <ul>
                <li className='nav-link'><Link to="/">Home</Link></li>
                <li className='nav-link'><Link to="/Contact">Contact</Link></li>
                <li className='nav-link'><Link to="/SignUp">SignUp</Link></li>
                
            </ul>
            </nav> 
};

export default NavMenu;