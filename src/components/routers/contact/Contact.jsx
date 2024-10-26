import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import Mail from "./Mail";
import Phone from "./Phone"

function Contact(){

        return(
            <>
            <Router>
                <nav>
                    <ul>
                        <li><Link to={'/Mail'} style={{color:"white",textDecoration:"none"}}>Mail</Link></li>
                        <li><Link to={'/Phone'} style={{color:"white",textDecoration:"none"}}>Phone</Link></li>
                        {/* <li><Link to={'/contact'} style={{color:"white",textDecoration:"none"}}>Contact</Link></li> */}
    
                        
                    </ul>
                </nav>
                <section>
                    <Routes>
                        <Route path={"/Phone"} exact element={<Phone />}/>
                        <Route path={"/Mail"} exact element={<Mail />}/>
                    </Routes>
                    </section>
             
                    </Router>
            
            </>
        )
    }
export default Contact;