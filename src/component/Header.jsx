
import { Link } from "react-router-dom";
import ProfilMenu from "./ProfilMenu";
import './Header.css'

function Header (){

    return(
        <header className="head">
            <h1 className="title">Mon blog</h1>

            <ul className="navbar">
                <li>
                    <Link to= "/">Acueil</Link></li>
                <li>
                    <Link to= "/Contact">contact</Link>
                </li>
                <li>
                    <Link to= "/profil">profil</Link>
                </li>
                <li>
                    <Link to= "/articles">Articles</Link>
                </li>
                
                
                <ProfilMenu/>
            </ul>

        </header>


    )
}

export default Header;