function ProfilMenu (){

    const isuserloged = true;

    const userloged = {
        
        lastName : "Shinro",
        firstName : "Shinn",
        
    };

    return(
        <>
            {isuserloged ?(
            <li>{userloged.lastName} {userloged.firstName} </li>    
        ) : (
            <li>Not logged</li>
        )} 
        </>
    )
}

export default ProfilMenu;