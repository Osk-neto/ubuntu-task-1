import './NavMenu.css';

function NavMenu(){
    return <nav className='nav-links' id='navLinks'>
            <ul>
                <li className='nav-link'><a href='#'>Home</a></li>
                <li className='nav-link'><a href='#'>About</a></li>
                <li className='nav-link'><a href='#'><span>Contact</span></a></li>
                
            </ul>
            </nav> 
};

export default NavMenu;