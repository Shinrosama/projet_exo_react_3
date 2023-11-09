

import ProfilMenu from "./ProfilMenu";


function Header (){

    return(
        <header>
            <h1>Mon blog</h1>

            <ul>
                <li>Acueil</li>
                <li>Articles</li>
                <ProfilMenu/>
            </ul>

            
            
        </header>


    )
}

export default Header;