import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import About from './BasicRouting/About';
import Add from './BasicRouting/Add';
import './BasicRouting/Index.css'
import Contact from './contact/Contact'

function Index(){
    return(
        <>
        <Router>
            <nav>
                <ul>
                    <li><Link to={'/Add'} style={{color:"white",textDecoration:"none"}}>Add</Link></li>
                    <li><Link to={'/About'} style={{color:"white",textDecoration:"none"}}>About</Link></li>
                    <li><Link to={'/contact'} style={{color:"white",textDecoration:"none"}}>Contact</Link></li>

                    
                </ul>
            </nav>
            <section>
                <Routes>
                    <Route path={"/About"} exact element={<About />}/>
                    <Route path={"/"} exact element={<Home />}/>
                    <Route path={"/Add"} exact element={<Add />}/>
                    <Route path={"/contact/*"} exact element={<Contact />}/>

                </Routes>
                </section>
         
                </Router>
        
        </>
    )
}
function Home() {
    return <h1>Welcome to the Home Page!</h1>; // Replace with your desired home content
}

export default Index;