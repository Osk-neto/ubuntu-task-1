import './NavMenu.css';

function NavMenu(){
    return <nav className='nav-links' id='navLinks'>
            <ul>
                <li className='nav-link'><a href='#Home'>Home</a></li>
                <li className='nav-link'><a href='#About'>About</a></li>
                <li className='nav-link'><a href='#Contact'><span>Contact</span></a></li>
                
            </ul>
            </nav> 
};

export default NavMenu;