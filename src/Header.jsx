

import ProfilMenu from "./ProfilMenu";
import './Header.css'

function Header (){

    return(
        <header className="head">
            <h1 className="title">Mon blog</h1>

            <ul className="navbar">
                <li>Acueil</li>
                <li>Articles</li>
                <ProfilMenu/>
            </ul>

            
            
        </header>


    )
}

export default Header;