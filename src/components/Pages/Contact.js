import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Contact.css';


const Contact = ()=>{
    return <div>
        <Navbar/>
        <div className="contact-section">
            <h1>Contact:</h1>
            <ul>
                <li><p>Oscar</p></li>
                <li><p>+353 083-8944127</p></li>
                    <li><p>Oscar.f.h.neto@gmail.com</p></li>
                    <li><p>https://www.linkedin.com/in/oscar--neto/</p></li>
            </ul>
        </div>
        <Footer/>
    </div>
}

export default Contact;