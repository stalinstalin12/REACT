import {useState}from 'react';


function login(){
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    let content;

    if(isLoggedIn){
        content=<h1>Login successful</h1>
    }
    else{
        content=<h1>please login</h1>
    }

    return(
        <>
        {content}
        </>
    )

}
export default login;